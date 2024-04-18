/* eslint-disable react/button-has-type */
import React from 'react';
import Figure1a from '../../static/img/Figure1a.png';
import Figure1b from '../../static/img/Figure1b.png';
import Figure2a from '../../static/img/Figure2a.png';
import Figure2b from '../../static/img/Figure2b.png';
import Figure3a from '../../static/img/Figure3a.png';
import Figure3b from '../../static/img/Figure3b.png';
// eslint-disable-next-line react/prop-types

function ImagesOCTA() {
  const nemaDicom =
    'https://dicom.nema.org/medical/dicom/current/output/html/part03.html#sect_A.84';
  const type1 =
    'https://dicom.nema.org/medical/dicom/current/output/chtml/part05/' +
    'sect_7.4.html#:~:text=The%20Data%20Element%20Type%20of,' +
    'only%20mandatory%20under%20certain%20conditions)';
  const type2 = 'https://dicom.nema.org/medical/dicom/current/output/chtml/part05/sect_7.4.3.html';
  const segment = 'https://dicom.nema.org/medical/dicom/current/output/html/part03.html#sect_A.57';
  const surfaceMesh =
    'https://dicom.nema.org/medical/dicom/current/output/html/part03.html#sect_C.27.1';
  const heightmap = 'https://www.dicomstandard.org/news-dir/current/docs/sups/sup240.pdf';
  return (
    <html lang="en">
      <body>
        <div className="relative mt-4 w-full">
          <table>
            <tr>
              <th>Manufacturer </th>
              <th>Manufacturer’s Model (device) </th>
              <th> Protocol Name</th>
              <th> Anatomic Regions</th>
              <th> Imaging</th>
              <th> Notes</th>
            </tr>
            <tr>
              <td> Topcon</td>
              <td> Maestro2</td>
              <td> Maestro2-Mac 6x6-360x360-(rep3)-OCTA</td>
              <td> Macula, 6 x 6</td>
              <td> OCTA</td>
              <td rowSpan="3">
                {' '}
                Each OCTA scan produces: 1 reference retinal photography file (IR or color photo) 1
                OCT (structural scan) file, 2 flow cube files (processed and raw data), 1 heightmap
                segmentation file, 4 en face images
              </td>
            </tr>
            <tr>
              <td> Topcon </td>
              <td> Triton</td>
              <td> Triton-Macula 6x6-OCTA</td>
              <td> Macula, 6 x 6</td>
              <td> OCTA</td>
            </tr>
            <tr>
              <td> Topcon </td>
              <td> Triton</td>
              <td>Triton-Macula 12x12-OCTA </td>
              <td>Macula, 12 x 12 </td>
              <td> OCTA</td>
            </tr>
          </table>
          <p className="text-sm">
            *6 scans of Maestro2 OCTA have different dimensions than the rest. (This includes the
            associated retinal 6 photography files, 6 structural oct files, 12 flow cube (processed
            and raw) files, and 6 heightmap segmentation files and 24 en face images)
          </p>
          <strong>Flow cube</strong>
          <table>
            <tr>
              <th>Protocol Name </th>
              <th> Height</th>
              <th> Width</th>
              <th> Number of frames</th>
              <th> Notes</th>
            </tr>
            <tr>
              <td> Maestro2-Mac 6x6-360x360-(rep3)-OCTA</td>
              <td> 885</td>
              <td> 360</td>
              <td> 360</td>
              <td rowSpan="3">
                {' '}
                2 flow cube files (flow cube and flow cube raw data) per OCTA scan
              </td>
            </tr>
            <tr>
              <td> Triton-Macula 6x6-OCTA </td>
              <td> 992</td>
              <td> 320</td>
              <td> 320</td>
            </tr>
            <tr>
              <td> Triton-Macula 12x12-OCTA </td>
              <td> 992</td>
              <td>512</td>
              <td> 512</td>
            </tr>
          </table>
          <p className="text-sm">
            *Flow cube has two versions (flow cube and flow cube raw data). Flow cube is the
            processed version of flow cube raw data according to the manufacturer’s algorithm. They
            have the same dimensions.
          </p>

          <strong>Segmentation</strong>
          <table>
            <tr>
              <th>Protocol Name </th>
              <th> Height</th>
              <th> Width</th>
              <th> Number of frames</th>
              <th> Notes</th>
            </tr>
            <tr>
              <td>Maestro2-Mac 6x6-360x360-(rep3)-OCTA</td>
              <td> 360</td>
              <td> 360</td>
              <td> 422</td>
              <td rowSpan="3"> 1 segmentation file per OCTA scan</td>
            </tr>
            <tr>
              <td>Triton-Macula 6x6-OCTA</td>
              <td> 320</td>
              <td> 320</td>
              <td> 407</td>
            </tr>
            <tr>
              <td> Triton-Macula 12x12-OCTA </td>
              <td> 512</td>
              <td>512</td>
              <td> 432</td>
            </tr>
          </table>
          <strong>En Face images</strong>
          <table>
            <tr>
              <th> Protocol Name</th>
              <th> Height</th>
              <th> Width</th>
              <th> Notes</th>
            </tr>
            <tr>
              <td> Maestro2-Mac 6x6-360x360-(rep3)-OCTA</td>
              <td> 720</td>
              <td> 720</td>
              <td rowSpan="3"> 4 en face files per OCTA scan</td>
            </tr>
            <tr>
              <td> Triton-Macula 6x6-OCTA</td>
              <td> 640</td>
              <td> 640</td>
            </tr>
            <tr>
              <td> Triton-Macula 12x12-OCTA</td>
              <td>1024</td>
              <td> 1024</td>
            </tr>
          </table>
          <h2>Example images</h2>
          <div className="text-sm">
            <strong>Figure 1. Topcon, Maestro2,</strong>
            Maestro2-Mac 6x6-360x360-(rep3)-OCTA, own source (UCSD), en face (superficial, deep,
            outer retina and choriocapillaris) and OCT B-scan.
            <img src={Figure1a} alt="" />
            <img src={Figure1b} alt="" />
          </div>

          <div className="text-sm">
            <strong>Figure 2. Topcon, Triton,</strong>
            Triton-Macula 6x6-OCTA, own source (UCSD), en face slabs (superficial, deep, outer
            retina, choriocapillaris) and Angio OCT B-scan.
            <img src={Figure2a} alt="" />
            <img src={Figure2b} alt="" />
          </div>
          <div className="text-sm">
            <strong>Figure 3. Topcon, Triton,</strong>
            Triton-Macula 12x12-OCTA, own source (UCSD), OCT flow cube and structural B-scan and
            en-face images.
            <img src={Figure3a} alt="" />
            <img src={Figure3b} alt="" />
          </div>
          <h2>Data Processing</h2>
          <strong>File format</strong>
          <p>
            The file format is in
            <a href="https://en.wikipedia.org/wiki/DICOM">
              DICOM (Digital Imaging and Communications in Medicine){' '}
            </a>
            which is a technical standard for the digital storage and transmission of medical images
            and related information.
          </p>
          <h2>Data Standard </h2>
          <strong>Flow Cube</strong>
          <p>
            For all files in flow_cube in retinal_octa, the exported files from the devices were
            formatted according to the NEMA DICOM standards on
            <a href={nemaDicom}>
              Ophthalmic Optical Coherence Tomography B-scan Volume Analysis
            </a>{' '}
            IOD Modules. Initially exported files were fda files. They were first converted to DICOM
            files using the tool provided by the manufacturer then further formatted to ensure NEMA
            compliance. The detailed information about the tags and values could be found in the
            hyperlink. All mandatory modules (M) were included, and within the mandatory modules,
            the tags that are categorized as <a href={type1}>Type 1</a> (Tag and value both needed)
            and <a href={type2}>Type 2</a> (tag needed value can be empty) were evaluated and filled
            in accordingly.
            <strong>Segmentation</strong>
            <p>
              For all files in segmentation in retinal_octa, the exported files from the devices
              were formatted according to the NEMA DICOM standards on
              <a href="https://www.dicomstandard.org/news-dir/current/docs/sups/sup240.pdf">
                Supplement 240: Heightmap Segmentation and Revised Ophthalmic OCT En Face Image
              </a>{' '}
              (Nov 10 2023 version).
            </p>
            <p>
              Initially exported files were fda files. They were first converted to DICOM files
              using the tool provided by the manufacturer, which was based on the previous version
              of <a href={segment}>segmentation standards</a>. These files were further formatted to
              ensure NEMA compliance based on
              <a href="https://www.dicomstandard.org/news-dir/current/docs/sups/sup240.pdf">
                Supplement 240: Heightmap Segmentation and Revised Ophthalmic OCT En Face Image
              </a>{' '}
              (Nov 10 2023 version). The detailed information about the tags and values could be
              found in the hyperlink. All mandatory modules (M) were included, and within the
              mandatory modules, the tags that are categorized as <a href={type1}>Type 1</a>(Tag and
              value both needed) and <a href={type2}>Type 2 </a> (tag needed value can be empty)
              were evaluated and filled in accordingly.
            </p>
          </p>
          <strong>File processing</strong>
          <p>
            Files were processed to comply with the NEMA DICOM standards listed above through
            removing, adding, editing tags and values.
          </p>
          <p>
            Note that tags that are not listed in NEMA DICOM standards listed above and did not
            provide additional information are removed for consistency and clarity.
          </p>
          <p>
            In addition to ensuring files are NEMA compliant, further processing in the following
            were done to ensure consistency across the files:
          </p>
          <strong>Flow Cube</strong>
          <table>
            <tr>
              <th>DICOM Tag Number</th>
              <th> DICOM Tag Name</th>
              <th> Values</th>
              <th> Action, Rationale</th>
            </tr>
            <tr>
              <td> (0010,0010) </td>
              <td> Patient Name</td>
              <td> Blank</td>
              <td>Removal, Patient information</td>
            </tr>
            <tr>
              <td> (0010,0030)</td>
              <td> Patient Birth Date</td>
              <td> Blank</td>
              <td> Removal, Patient information</td>
            </tr>
            <tr>
              <td>(0010,0040) </td>
              <td> Patient Sex</td>
              <td> A unified value of “M”</td>
              <td> Removal, Patient information removed</td>
            </tr>
            <tr>
              <td> (0008,0090) </td>
              <td> Referring Physician Name</td>
              <td> Blank</td>
              <td>Removal, Unnecessary information and inconsistent across devices</td>
            </tr>
            <tr>
              <td> (0020, 0010)</td>
              <td> Study ID </td>
              <td> Blank </td>
              <td> Removal, Unnecessary information and inconsistent across devices</td>
            </tr>
            <tr>
              <td>(0008, 0050) </td>
              <td> Accession Number</td>
              <td> Blank</td>
              <td> Removal, Unnecessary information and inconsistent across devices</td>
            </tr>
          </table>
          <strong>Segmentation</strong>
          <table>
            <tr>
              <th>DICOM Tag Number</th>
              <th> DICOM Tag Name</th>
              <th> Values</th>
              <th> Action, Rationale</th>
            </tr>
            <tr>
              <td> (0010,0010) </td>
              <td> Patient Name</td>
              <td> Blank</td>
              <td>Removal, Patient information</td>
            </tr>
            <tr>
              <td> (0010,0030)</td>
              <td> Patient Birth Date</td>
              <td> Blank</td>
              <td> Removal, Patient information</td>
            </tr>
            <tr>
              <td>(0010,0040) </td>
              <td> Patient Sex</td>
              <td> A unified value of “M”</td>
              <td> Removal, Patient information removed</td>
            </tr>
            <tr>
              <td> (0008,0090) </td>
              <td> Referring Physician Name</td>
              <td> Blank</td>
              <td>Removal, Unnecessary information and inconsistent across devices</td>
            </tr>
            <tr>
              <td> (0020, 0010)</td>
              <td> Study ID </td>
              <td> Blank </td>
              <td> Removal, Unnecessary information and inconsistent across devices</td>
            </tr>
            <tr>
              <td>(0008, 0050) </td>
              <td> Accession Number</td>
              <td> Blank</td>
              <td> Removal, Unnecessary information and inconsistent across devices</td>
            </tr>
            <tr>
              <td>(5200, 9229) </td>
              <td> Shared Functional Groups Sequence</td>
              <td>
                {' '}
                Includes these tags within the correct nested structure: &gt;(0008, 1140) Referenced
                Image Sequence &gt;(0008, 9124) Derivation Image Sequence &gt;(0020, 9113) Plane
                Position Sequence &gt;(0020, 9116) Plane Orientation Sequence &gt;(0040, 9096) Real
                World Value Mapping Sequence
              </td>
              <td> Added, up-to-date standards listed in Supplement 240 provided by NEMA.</td>
            </tr>
            <tr>
              <td>(5200, 9230) </td>
              <td> Per Frame Functional Groups Sequence</td>
              <td>
                {' '}
                e.g., include these tags within the nested structure &gt;(0020, 9111) Frame Content
                Sequence &gt;(0062, 000A) Segment Identification Sequence
              </td>
              <td> Added, up-to-date standards listed in Supplement 240 provided by NEMA.</td>
            </tr>
            <tr>
              <td>(0028, 0002) </td>
              <td>Samples Per Pixel</td>
              <td> e.g., 1</td>
              <td> Added, up-to-date standards listed in Supplement 240 provided by NEMA.</td>
            </tr>
            <tr>
              <td>(0028, 0004) </td>
              <td> Photometric Interpretation</td>
              <td> e.g., MONOCHROME</td>
              <td> Added, up-to-date standards listed in Supplement 240 provided by NEMA.</td>
            </tr>

            <tr>
              <td>(0028, 0010) </td>
              <td>Rows</td>
              <td> e.g., 360 </td>
              <td> Added, up-to-date standards listed in Supplement 240 provided by NEMA.</td>
            </tr>
            <tr>
              <td>(0028, 0011) </td>
              <td> Columns</td>
              <td> e.g., 360 </td>
              <td> Added, up-to-date standards listed in Supplement 240 provided by NEMA.</td>
            </tr>
            <tr>
              <td>(0028, 0100) </td>
              <td>Bits Allocated</td>
              <td>e.g., 32</td>
              <td> Added, up-to-date standards listed in Supplement 240 provided by NEMA.</td>
            </tr>
            <tr>
              <td>(0028, 0008) </td>
              <td> Number Of Frames</td>
              <td>e.g., 9</td>
              <td> Added, up-to-date standards listed in Supplement 240 provided by NEMA.</td>
            </tr>
            <tr>
              <td>(0062, 0001) </td>
              <td>Segmentation Type</td>
              <td>e.g., HEIGHTMAP</td>
              <td> Added, up-to-date standards listed in Supplement 240 provided by NEMA.</td>
            </tr>
            <tr>
              <td>(0008, 0008) </td>
              <td> Image Type</td>
              <td> e.g., DERIVED, PRIMARY</td>
              <td> Added, up-to-date standards listed in Supplement 240 provided by NEMA.</td>
            </tr>
            <tr>
              <td>(0020, 9222) </td>
              <td>Dimension Index Sequence</td>
              <td>
                e.g., includes tags listed below (0020, 9164), (0020, 9165), (0020,9167) within the
                nested structure
              </td>
              <td> Added, up-to-date standards listed in Supplement 240 provided by NEMA.</td>
            </tr>
            <tr>
              <td>&gt;(0020, 9164) </td>
              <td> Dimension Organization UID</td>
              <td> e.g., 2.16.840.1.114517.10.5.3.1. 90706312024011809124012</td>
              <td rowSpan="3">
                Values ‘00209056’, ‘00209057’, ‘00209111’ these are pointing to the values of tags
                within the same file
              </td>
            </tr>
            <tr>
              <td>&gt;(0020, 9165) </td>
              <td>Dimension Index Pointer</td>
              <td> e.g., 00209056,00209057</td>
            </tr>
            <tr>
              <td>&gt;(0020, 9167) </td>
              <td>Functional Group Pointer</td>
              <td> e.g., 00209111</td>
            </tr>
            <tr>
              <td>(7FE0, 0008)</td>
              <td>Float Pixel Data</td>
              <td>
                Initially segmentation standards was based on
                <a href={surfaceMesh}>surface mesh module</a>. Based on the relevant information
                from these tags (e.g., (0006, 0002) Surface Sequence had information on (0066, 0011)
                Surface Points Sequence, (0066, 0015) Number of surface points, and (0066, 90016)
                Point Coordinates Data), the <a href={heightmap}>heightmap based segmentation</a>
                pixel array was made available, formatted, and added to Float Pixel Data.
              </td>
              <td>Added, up-to-date standards listed in Supplement 240 provided by NEMA.</td>
            </tr>
            <tr>
              <td>(0018, 1030)</td>
              <td>Protocol Name</td>
              <td>e.g., maestro2 macula 6x6 octa</td>
              <td>Addition, Better information delivery</td>
            </tr>
          </table>
        </div>
      </body>
    </html>
  );
}

export default ImagesOCTA;
