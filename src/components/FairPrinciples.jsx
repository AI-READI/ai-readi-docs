/* eslint-disable react/button-has-type */
import React from 'react';

// eslint-disable-next-line react/prop-types

function FairPrinciples() {
  return (
    <html lang="en">
      <body>
        <div>
          <table>
            <tr>
              <th> FAIR Principles </th>
              <th>Interpretation </th>
              <th> Compliance by the AI-READI dataset</th>
            </tr>
            <tr>
              <td className="align-top">
                {' '}
                F1. (Meta)data are assigned a globally unique and persistent identifier.{' '}
              </td>
              <td>
                {' '}
                This principle can be fulfilled by sharing data and metadata on a repository that
                provides a digital object identifier (DOI) or another similar globally unique and
                persistent identifier for your dataset. Globally unique here means that the
                identifier is guaranteed to unambiguously refer to exactly one resource in the
                world. Persistent means never reused in another context, and continues to identify
                the same resource, even if that resource no longer exists, or moves.{' '}
              </td>
              <td className="align-top">
                {' '}
                The AI-READI dataset is shared on fairhub.io, which provides a DOI for the dataset (
                <a href="https://doi.org/10.60775/fairhub.1">https://doi.org/10.60775/fairhub.1</a>)
              </td>
            </tr>
            <tr>
              <td className="align-top">
                F2. Data are described with rich metadata (defined by R1 below).{' '}
              </td>
              <td className="align-top">
                While other principles speak to the specific kinds of metadata that should be
                included, principle F2 simply says that a digital resource that is not
                well-described cannot be accurately discovered. Thus, this principle encourages data
                providers to consider the various facets of search that might be employed by a user
                of their data, and to support those users in their discovery of the resource. This
                principle can be fulfilled by sharing data in a repository that requires metadata.
                Including metadata directly in the data files (automatically or manually) can also
                help fulfill this principle. Additionally, including standalone metadata files
                (along with your data files) can help with fulfilling this principle as well.{' '}
              </td>
              <td>
                <p>
                  Data files in the AI-READI dataset have embedded metadata in them (e.g., headers
                  in the DICOM files). This is described for each data type in the dataset
                  documentation at <a href="http://docs.aireadi.org">docs.aireadi.org</a>.
                </p>
                <p>
                  Additionally, the AI-READI dataset is structured according to the Clinical Dataset
                  Structure (CDS), which prescribes to include several metadata files (README.md,
                  Healthsheet.md, dataset_description.json, etc.). More details are available in the
                  CDS specification documentation.
                </p>
                <p>
                  Finally, the AI-READI dataset is shared on fairhub.io, where metadata from the
                  CDS-prescribed metadata files is embedded in the dataset’s landing page following
                  the schema.org schema to enable discovery through search engines
                </p>
              </td>
            </tr>
            <tr>
              <td>
                {' '}
                F.3. Metadata clearly and explicitly include the identifier of the data they
                describe.
              </td>
              <td>
                {' '}
                Sharing data on a suitable repository that issues a DOI (F1) will typically fulfill
                this principle since the DOI will typically be embedded in the metadata stored by
                the repository. Additionally, the DOI can also be included in any of the metadata
                files that are included along with the data files (F2)
              </td>
              <td>
                {' '}
                The DOI of the AI-READI dataset is included in the various metadata files prescribed
                by the CDS. The DOI is also included in the metadata embedded in the landing page of
                the dataset.
              </td>
            </tr>
            <tr>
              <td>F4. (Meta)data are registered or indexed in a searchable resource. </td>
              <td>
                This principle can be fulfilled by sharing data on a repository that requires
                metadata (F2) and indexes that metadata such that it is searchable. It is suitable
                to consult what schema/format the repository follows to make the data discoverable
                locally (within the repository’s search feature) and globally (e.g. in Google
                search){' '}
              </td>
              <td>
                The AI-READI dataset is shared through FAIRhub, which embes the dataset metadata in
                the landing page of the dataset using the schema.org schema and it is therefore
                searchable globally in search engines. The dataset is also searchable within FAIRhub
                itself.{' '}
              </td>
            </tr>
            <tr>
              <td>
                {' '}
                A1. (Meta)data are retrievable by their identifier using a standardised
                communications protocol.
              </td>
              <td>
                {' '}
                Sharing data and metadata on a repository that issues a DOI (http protocol) or
                another similar identifier (F1) will typically allow fulfilling this principle.
              </td>
              <td>
                {' '}
                The AI-READI dataset can be retrieved by its DOI using HTTP, which is a standardized
                protocol
              </td>
            </tr>
            <tr>
              <td> A1.1. The protocol is open, free, and universally implementable.</td>
              <td>
                Sharing data and metadata on a repository that issues a DOI (http protocol) or
                another similar identifier (F1) will typically allow fulfilling this principle since
                http is an open, free, and universally implementable protocol
              </td>
              <td>
                The AI-READI dataset can be retrieved by its DOI using HTTP, open, free, and
                universally implementable protocol.{' '}
              </td>
            </tr>
            <tr>
              <td>
                {' '}
                A1.2. The protocol allows for an authentication and authorisation procedure, where
                necessary.{' '}
              </td>
              <td>
                Sharing data and metadata on a repository that handles any
                authentication/authorization procedure can allow fulfilling this principle{' '}
              </td>
              <td>
                The AI-READI dataset is shared on the FAIRhub data repository, which includes a
                protocol for accessing the dataset.{' '}
              </td>
            </tr>
            <tr>
              <td className="align-top">
                A2. Metadata are accessible, even when the data are no longer available
              </td>
              <td>
                <p>
                  This principle is automatically fulfilled if the dataset is shared on a repository
                  issuing a DOI since getting a DOI requires registering the metadata with a DOI
                  issuing organization (e.g., Datacite, Crossref) and the metadata theoretically
                  remains always accessible through that organization.
                </p>
                <p>
                  Alternatively, sharing data and metadata on a repository that keeps the metadata
                  accessible even if data is not available (for any reason) can also help fulfill
                  this principle
                </p>
              </td>
              <td className="align-top">
                The AI-READI dataset is shared on FAIRhub which registers a DOI for the dataset by
                sending major metadata from elements of the dataset to DataCite. This metadata will
                always remain accessible through DataCite&apos;s registry even if the dataset itself
                is no longer available for some reason on FAIRhub.{' '}
              </td>
            </tr>
          </table>
        </div>
      </body>
    </html>
  );
}

export default FairPrinciples;
