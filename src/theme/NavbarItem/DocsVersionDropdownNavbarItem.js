/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */

import React from 'react';
import {
  useVersions,
  useActiveDocContext,
  useDocsVersionCandidates,
  useDocsPreferredVersion,
} from '@docusaurus/plugin-content-docs/client';
import { translate } from '@docusaurus/Translate';
import { useLocation } from '@docusaurus/router';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';

function getVersionMainDoc(version) {
  return version.docs.find((doc) => doc.id === version.mainDocId);
}
function getVersionTargetDoc(version, activeDocContext) {
  // We try to link to the same doc, in another version
  // When not possible, fallback to the "main doc" of the version
  return activeDocContext.alternateDocVersions[version.name] ?? getVersionMainDoc(version);
}
export default function DocsVersionDropdownNavbarItem({
  mobile,
  docsPluginId,
  dropdownActiveClassDisabled,
  dropdownItemsBefore,
  dropdownItemsAfter,
  ...props
}) {
  const { search, hash } = useLocation();
  const activeDocContext = useActiveDocContext(docsPluginId);
  const versions = useVersions(docsPluginId);
  const { savePreferredVersionName } = useDocsPreferredVersion(docsPluginId);
  function versionToLink(version) {
    const targetDoc = getVersionTargetDoc(version, activeDocContext);
    return {
      label: `${version.label === 'Upcoming 🚧' ? '' : 'Dataset v'}${version.label}`,
      // preserve ?search#hash suffix on version switches
      to: `${targetDoc.path}${search}${hash}`,
      isActive: () => version === activeDocContext.activeVersion,
      onClick: () => savePreferredVersionName(version.name),
    };
  }
  const items = [...dropdownItemsBefore, ...versions.map(versionToLink), ...dropdownItemsAfter];
  const dropdownVersion = useDocsVersionCandidates(docsPluginId)[0];
  // Mobile dropdown is handled a bit differently
  const dropdownLabel =
    mobile && items.length > 1
      ? translate({
          id: 'theme.navbar.mobileVersionsDropdown.label',
          message: 'Versions',
          description: 'The label for the navbar versions dropdown on mobile view',
        })
      : `${dropdownVersion.label === 'Upcoming 🚧' ? '' : 'Dataset v'}${dropdownVersion.label}`;
  const dropdownTo =
    mobile && items.length > 1
      ? undefined
      : getVersionTargetDoc(dropdownVersion, activeDocContext).path;
  // We don't want to render a version dropdown with 0 or 1 item. If we build
  // the site with a single docs version (onlyIncludeVersions: ['1.0.0']),
  // We'd rather render a button instead of a dropdown
  if (items.length <= 1) {
    return (
      <DefaultNavbarItem
        {...props}
        mobile={mobile}
        label={dropdownLabel}
        to={dropdownTo}
        isActive={dropdownActiveClassDisabled ? () => false : undefined}
      />
    );
  }
  return (
    <DropdownNavbarItem
      {...props}
      mobile={mobile}
      label={dropdownLabel}
      to={dropdownTo}
      items={items}
      isActive={dropdownActiveClassDisabled ? () => false : undefined}
    />
  );
}
