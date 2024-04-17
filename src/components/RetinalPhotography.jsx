/* eslint-disable react/button-has-type */
import React from 'react';
import Figure1A from '../../static/img/retinalPhotography/Figure1A.jpg';
import Figure1B from '../../static/img/retinalPhotography/Figure1B.jpg';
import Figure2 from '../../static/img/retinalPhotography/Figure2.png';
import Figure3 from '../../static/img/retinalPhotography/Figure3.jpg';
import Figure4 from '../../static/img/retinalPhotography/Figure4.jpg';
import Figure5 from '../../static/img/retinalPhotography/Figure5.jpg';

// eslint-disable-next-line react/prop-types

function RetinalPhotography() {
  const type1 =
    'https://dicom.nema.org/medical/dicom/current/output/chtml/part05/' +
    'sect_7.4.html#:~:text=The%20Data%20Element%20Type%20of,' +
    'only%20mandatory%20under%20certain%20conditions)';
  const type2 = 'https://dicom.nema.org/medical/dicom/current/output/chtml/part05/sect_7.4.3.html';
  const mapping = 'https://dicom.nema.org/medical/dicom/current/output/chtml/part16/PS3.16.html';
  return (
    <html lang="en">
      <head>
        <style>{`
        `}</style>
      </head>
      <body>
        <ol>
          <li>
            <p>
              <strong>Color fundus photography</strong>
            </p>
            Color fundus photography is a direct visualization of the fundus in the form of color
            images.
            <div className="flex flex-wrap justify-center gap-8">
              <img className="w-[20rem] h-[20rem]" src={Figure1A} alt="" />
              <img className="w-[20rem] h-[20rem]" src={Figure1B} alt="" />
            </div>
            <p className="text-sm">
              <strong>Figure 1</strong>: Normal fundus photographs of the right eye (A) and left eye
              (B).
            </p>
            <p className="text-sm italic">
              Source:
              <a href="https://en.wikipedia.org/wiki/Fundus_photography">
                https://en.wikipedia.org/wiki/Fundus_photography
              </a>
            </p>
            <img className="w-[25rem] h-[20rem]" src={Figure2} alt="" />
            <p className="text-sm">
              Figure 2: Examples of lesions in diabetic retinopathy captured by color fundus
              photography.
              <p className="italic">
                Reference: Alyoubi WL, Abulkhair MF, Shalash WM. Diabetic Retinopathy Fundus Image
                Classification and Lesions Localization System Using Deep Learning. Sensors. 2021;
                21(11):3704.
                <a href="https://doi.org/10.3390/s21113704">https://doi.org/10.3390/s21113704</a>
              </p>
            </p>
          </li>
          <li>
            <p>
              <strong>Fundus autofluorescence photography</strong>
            </p>
            <p>
              Fundus autofluorescence photography (FAF) utilizes the intrinsic fluorescent nature of
              lipofuscin found in the retinal pigment epithelium (RPE) to generate images.
              Lipofuscin, a byproduct of photoreceptor outer segment breakdown in lysosomes, absorbs
              blue light and emits yellow-green light. By illuminating with a light source and
              capturing the emitted signals with a detector, an image is formed that serves as a
              lipofuscin density map, where brighter zones indicate higher lipofuscin concentration.
            </p>
            <p>
              In a normal fundus without retinal pathology, blood vessels and the optic nerve
              usually appear dark on FAFfundus autofluorescence photos. With blue or green
              short-wavelength FAF, the fovea is usually visualized as a spot of
              hypo-autofluorescence due to the high concentration of light-absorbing xanthophyll
              pigment in this area. FAF has become an important tool for evaluating diseases that
              result in alterations of RPE or lipofuscin levels, such as geographic atrophy in
              age-related macular degeneration and hereditary retinal diseases.
            </p>
            <img src={Figure3} alt="" />
            Figure 3: Comparison of common imaging systems available for fundus autofluorescence.
            Images of normal, healthy retina were obtained using the fundus camera with a Spaide
            filter (a), confocal scanning laser ophthalmoscope (cSLO) (b), and Optos ultra-widefield
            systems (c). Reference: Yung, M., Klufas, M.A. & Sarraf, D. Clinical applications of
            fundus autofluorescence in retinal disease. Int J Retin Vitr 2, 12 (2016).{' '}
            <a href="https://doi.org/10.1186/s40942-016-0035-x">
              https://doi.org/10.1186/s40942-016-0035-x
            </a>
          </li>
          <li>
            <strong>Fundus infrared photography</strong>
            <p>
              Compared to traditional color fundus photography and FAF, infrared imaging offers
              certain advantages. Infrared has a longer depth of penetration that can reach deeper
              subretinal layers. It produces a better vessel to background contrast which improves
              the detection of subretinal pathologies.
            </p>
            <p>
              Moreover, it removes the out-of-focus, scattered components of the reflected light,
              improving the quality of illumination. Infrared imaging has the potential to generate
              deeper visualization of the retina and detect pathologies even in the presence of
              media opacity such as hemorrhages and cataracts. It is routinely used during the
              optical coherence tomography (OCT) imaging to visualize the structure of the optic
              nerve, retina, subretinal lesions, choroidal lesions, and choroidal
              neovascularization.
            </p>
            <p className="text-sm italic">
              Reference: Ajaz A, Kumar DK. Infrared retinal images for flashless detection of
              macular edema. Sci Rep. 2020;10(1):14384. Published 2020 Sep 1.
              doi:10.1038/s41598-020-71010-0
            </p>
          </li>
        </ol>
        <h2>Overview of AI-READI Retinal Photography Data </h2>
        <ol>
          <li>
            Overview of available images
            <table>
              <tr>
                <th>Manufacturer </th>
                <th>Manufacturer’s Model (device) </th>
                <th> Anatomic Regions*</th>
                <th> Imaging Types*</th>
                <th> Dilation</th>
              </tr>
              <tr>
                <td> Optomed</td>
                <td> Aurora</td>
                <td>Macula, Optic DiscA</td>
                <td>Color Photography</td>
                <td> No</td>
              </tr>
              <tr>
                <td> iCare </td>
                <td> Eidon</td>
                <td> Macula, Nasal, Temporal Periphery, Mosaic</td>
                <td>Color Photography, Infrared Reflectance, Autofluorescence</td>
                <td> Yes</td>
              </tr>
              <tr>
                <td> Topcon </td>
                <td> Maestro2</td>
                <td>Macula, Wide Field</td>
                <td>Color Photography, Infrared Reflectance</td>
                <td>Yes </td>
              </tr>
              <tr>
                <td> Topcon </td>
                <td> Triton</td>
                <td>Macula, Optic Disc</td>
                <td>Color Photography</td>
                <td>Yes </td>
              </tr>
              <tr>
                <td> Heidelberg </td>
                <td> Spectralis</td>
                <td>Macula, Optic Disc</td>
                <td> Infrared Reflectancee</td>
                <td>Yes </td>
              </tr>
            </table>
            <p>
              *More comprehensive details regarding each imaging file are available in the
              “manifest.tsv” file located within the retinal_photography folder.
            </p>
            <p>
              {' '}
              *Based on the anatomic regions and Imaging types, images can be mapped to protocols
              that were given by the manufacturers, as shown in the table below.
            </p>
          </li>
          <li>
            <strong>
              Mapping of Anatomic Regions and Imaging Types to Manufacturers&#39; Protocol Names
            </strong>
            <table>
              <tr>
                <th> Protocol Name</th>
                <th> Anatomic Regions*</th>
                <th> Width</th>
                <th> Height</th>
                <th> Number of frames</th>
                <th> Notes</th>
              </tr>
              <tr>
                <td> OptoMed-Disc centered-CFP</td>
                <td> Optic Disc</td>
                <td>Color Photography</td>
                <td rowSpan="2">1776</td>
                <td rowSpan="2"> 2368</td>
                <td rowSpan="2">
                  {' '}
                  One can differentiate between these two protocols by visually confirming the
                  images where they were centered.{' '}
                </td>
              </tr>
              <tr>
                <td> OptoMed-Mac centered-CFP </td>
                <td> Macula</td>
                <td> Color Photography </td>
              </tr>
              <tr>
                <td>Eidon-UWF Central-IR </td>
                <td>Macula </td>
                <td>Infrared Reflectance</td>
                <td>3288</td>
                <td> 3680</td>
                <td> </td>
              </tr>
              <tr>
                <td> Eidon-UWF Central-FAF </td>
                <td> Macula </td>
                <td>Autofluorescence</td>
                <td>3288</td>
                <td>3680 </td>
                <td> </td>
              </tr>
              <tr>
                <td> Eidon-UWF Central-CFP </td>
                <td> Macula </td>
                <td>Color Photography</td>
                <td>3288</td>
                <td>3680 </td>
                <td> </td>
              </tr>
              <tr>
                <td> Eidon-UWF Nasal-CFP </td>
                <td>Nasal </td>
                <td>Color Photography</td>
                <td>3288</td>
                <td>3680 </td>
                <td> </td>
              </tr>
              <tr>
                <td> Eidon-UWF Temporal-CFP</td>
                <td>Temporal Periphery </td>
                <td>Color Photography</td>
                <td>3288</td>
                <td>3680 </td>
                <td> </td>
              </tr>
              <tr>
                <td> Eidon-Create Mosaic Image-CFP </td>
                <td> Mosaic</td>
                <td>Color Photography</td>
                <td>varies</td>
                <td>varies</td>
                <td>Mosaic images are larger images created by multiple images.</td>
              </tr>
              <tr>
                <td>Spectralis-ONH-RC-HR-OCT </td>
                <td> Optic Disc</td>
                <td>Infrared Reflectance</td>
                <td> 1536</td>
                <td>1536 </td>
                <td>
                  {' '}
                  IR images are from OCT scans. This OCT protocol produces OCT B scans and
                  associated IR scans.
                </td>
              </tr>
              <tr>
                <td>Spectralis-PPole Mac-HR-61 lines-OCT </td>
                <td> Macula</td>
                <td>Infrared Reflectancee</td>
                <td> 1536 or 768</td>
                <td>1536 or 768 </td>
                <td>
                  {' '}
                  IR images are from OCT scans. This OCT protocol produces OCT B scans and
                  associated IR scans. Two versions of the protocols were used for the pilot but in
                  the future 1536, and 1536 will be used.
                </td>
              </tr>
              <tr>
                <td>Maestro2-3D Wide(H) 12x9-OCT </td>
                <td> Wide Field</td>
                <td>Color Photography</td>
                <td>1958</td>
                <td>2576 </td>
                <td>
                  {' '}
                  Color fundus scans are from OCT scans. This OCT protocol produces OCT B scans and
                  associated color fundus scans.
                </td>
              </tr>

              <tr>
                <td>Maestro2-3D Macula 6x6-OCT </td>
                <td> Macula</td>
                <td>Color Photography</td>
                <td>1958</td>
                <td>2576 </td>
                <td>
                  {' '}
                  Color fundus scans are from OCT scans. This OCT protocol produces OCT B scans and
                  associated color fundus scans.
                </td>
              </tr>
              <tr>
                <td>Maestro2-Mac 6x6-360x360-(rep3)-OCTA </td>
                <td>Optic Disc </td>
                <td>Color Photography</td>
                <td>480</td>
                <td>640 </td>
                <td>
                  {' '}
                  IR images are from OCTA scans. This OCTA protocol produces flow cube scans,
                  segmentation scans, en face scans, OCT B scans, and associated IR scans. 6 files
                  have different dimensions of 1958 (height), 2576 (width) and they are in color due
                  to a change in imaging method.
                </td>
              </tr>
              <tr>
                <td>Triton-3D(H)+Radial 12x9-OCT </td>
                <td>Macula, 6 x 6</td>
                <td>Color Photography</td>
                <td>1934</td>
                <td>2576 </td>
                <td>
                  Color fundus scans are from OCT scans. This OCT protocol produces OCT B scans and
                  associated color fundus scans.
                </td>
              </tr>
              <tr>
                <td>Triton-Macula 6x6-OCTA </td>
                <td>Macula, 12 x 12</td>
                <td>Color Photography</td>
                <td>1934</td>
                <td>2576 </td>
                <td>
                  {' '}
                  Color fundus scans are from OCTA scans. This OCTA protocol produces flow cube
                  scans, segmentation scans, en face scans, OCT B scans, and associated color fundus
                  scans.
                </td>
              </tr>
              <tr>
                <td>Triton-Macula 12x12-OCTA </td>
                <td>Color Photography</td>
                <td>Color Photography</td>
                <td>1934</td>
                <td>2576 </td>
                <td>
                  {' '}
                  Color fundus scans are from OCTA scans. This OCTA protocol produces flow cube
                  scans, segmentation scans, en face scans, OCT B scans, and associated color fundus
                  scans.
                </td>
              </tr>
            </table>
          </li>
        </ol>
        <ol>
          <li>
            <strong>Example images</strong>
            <ol>
              <li>
                <strong>
                  {' '}
                  Color fundus photographs of diabetic retinopathy acquired with the hand-held
                  Optomed Aurora fundus camera.
                </strong>
                <img src={Figure4} alt="" />
                <p className="text-sm italic">
                  Figure 4: Fundus photographs (50°) of patients with (a) and without (b) signs of
                  diabetic retinopathy acquired with the hand-held Optomed Aurora fundus camera.
                  Reference: Lupidi M, Danieli L, Fruttini D, et al. Artificial intelligence in
                  diabetic retinopathy screening: clinical assessment using handheld fundus camera
                  in a real-life setting. Acta Diabetol. 2023;60(8):1083-1088.
                  doi:10.1007/s00592-023-02104-0.
                </p>
              </li>
              <li>
                <strong> Color fundus photographs of diabetic retinopathy.</strong>
                <img className="w-[32rem] h-[35rem]" src={Figure5} alt="" />
                <p className="text-sm">
                  Figure 5: Color fundus photos show different stages of diabetic retinopathy (DR).
                  (a) No DR. (b) Mild non-proliferative DR. (c) Moderate non-proliferative DR. (d)
                  Severe non-proliferative DR. (e) Proliferative DR.
                </p>
              </li>
            </ol>
          </li>
        </ol>
        <h2>Data Processing</h2>
        <h3>File format</h3>
        <p>
          The file format is in{' '}
          <a href="https://en.wikipedia.org/wiki/DICOM">
            DICOM (Digital Imaging and Communications in Medicine)
          </a>
          format which is a technical standard for the digital storage and transmission of medical
          images and related information.
        </p>
        <h3>Data Standard</h3>
        <p>
          For all files in retinal_photography folder, the exported files from the devices were
          formatted according to the NEMA DICOM standards on
          <a href="https://dicom.nema.org/medical/dicom/current/output/html/part03.html#sect_A.41">
            Ophthalmic Photography 8 Bit Image
          </a>
          . The detailed information about the tags and values can be found in the hyperlink. All
          mandatory modules (M) were included, and within the mandatory modules, the tags that are
          categorized as <a href={type1}>Type 1</a> (Tag and value both needed) and{' '}
          <a href={type2}>Type 2</a> (Tag needed value can be empty) were evaluated and filled in
          accordingly.
        </p>
        <h3>File processing</h3>
        <p>
          Files were processed to comply with the NEMA DICOM standards on
          <a href="https://dicom.nema.org/medical/dicom/current/output/html/part03.html#sect_A.41">
            Ophthalmic Photography 8 Bit Image
          </a>{' '}
          by removing, adding, and editing tags and values.
        </p>
        <p>
          Note that tags that are not listed in
          <a href="https://dicom.nema.org/medical/dicom/current/output/html/part03.html#sect_A.41">
            Ophthalmic Photography 8 Bit Image IOD Modules
          </a>{' '}
          O and did not provide additional information are removed for consistency and clarity.
        </p>
        <p>
          In addition to ensuring files are NEMA compliant, further processing in the following was
          done to ensure consistency across the files:
        </p>
        <table>
          <tr>
            <th>DICOM Tag Number </th>
            <th> DICOM Tag Name</th>
            <th> Values</th>
            <th> Action, Rationale</th>
          </tr>
          <tr>
            <td> (0010,0010) </td>
            <td> Patient Name</td>
            <td> Blank</td>
            <td> Removal, Patient information</td>
          </tr>
          <tr>
            <td> (0010,0030) </td>
            <td> Patient Birth Date</td>
            <td> Blank</td>
            <td> Removal, Patient information</td>
          </tr>
          <tr>
            <td> (0010,0040)</td>
            <td> Patient Sex</td>
            <td> A unified value of “M”</td>
            <td> Removal, Patient information removed</td>
          </tr>

          <tr>
            <td>(0008,0090)</td>
            <td>Referring Physician Name </td>
            <td> Blank</td>
            <td> Removal, Unnecessary information and inconsistent across devices</td>
          </tr>
          <tr>
            <td> (0020, 0010)</td>
            <td> Study ID </td>
            <td> Blank </td>
            <td> Removal, Unnecessary information and inconsistent across devices</td>
          </tr>
          <tr>
            <td> (0008, 0050)</td>
            <td> Accession Number </td>
            <td> Blank</td>
            <td> Removal, Unnecessary information and inconsistent across devices</td>
          </tr>
          <tr>
            <td> (0008, 0008)</td>
            <td> Anatomic Region Sequence </td>
            <td>
              {' '}
              e.g., ORIGINAL, PRIMARY, , COLOR ORIGINAL, PRIMARY, , INFRARED ORIGINAL, PRIMARY, ,
              AUTOFLUORESCENCE
            </td>
            <td> Removal, Unnecessary information and inconsistent across devices</td>
          </tr>
          <tr>
            <td> (0020, 0020)</td>
            <td>Patient Orientation</td>
            <td> e.g., L, F </td>
            <td>Harmonized, Consistency</td>
          </tr>
          <tr>
            <td> (0008, 002A)</td>
            <td>Acquisition Date Time </td>
            <td>e.g., 20231011145705</td>
            <td>Harmonized, Consistency</td>
          </tr>

          <tr>
            <td> (0022, 0016)</td>
            <td> Illumination Sequence </td>
            <td>e.g., 410462008, SCT, Fine slit beam direct illumination</td>
            <td rowSpan="3">
              <p>Harmonized, up-to-date information</p>
              <p>
                Based on
                <a href={mapping}>
                  https://dicom.nema.org /medical/dicom/current /output/chtml/part16/PS3.16.html
                </a>
              </p>
              <p>DICOM PS3.16 2024b - Content Mapping Resource B.DCMR Context Groups (Normative)</p>
            </td>
          </tr>
          <tr>
            <td>(0008, 2218)</td>
            <td> Anatomic Region Sequence</td>
            <td> e.g., 5665001, SCT, Retina </td>
          </tr>

          <tr>
            <td>(0008, 2218)</td>
            <td> Acquisition Device Type Code Sequence</td>
            <td>e.g., 409898007, SCT, Fundus Camera</td>
          </tr>

          <tr>
            <td>(0022, 000D)</td>
            <td> Pupil Dilated</td>
            <td> e.g., YES/NO </td>
            <td> Addition, Missing value</td>
          </tr>

          <tr>
            <td>(0022, 0058)</td>
            <td> Mydriatic Agent Sequence </td>
            <td>e.g., empty</td>
            <td>Addition, Missing tag (tag is needed if Pupil Dilated is YES)</td>
          </tr>
          <tr>
            <td>(0022, 000E)</td>
            <td>Degree Of Dilation</td>
            <td> e.g., empty </td>
            <td> Addition, Missing tag (tag is needed if Pupil Dilated is YES)</td>
          </tr>

          <tr>
            <td>(0028, 0030)</td>
            <td> Pixel Spacing </td>
            <td>e.g., 0.00634, 0.00634</td>
            <td> Addition, Missing value</td>
          </tr>

          <tr>
            <td>(0018, 1030)</td>
            <td>Protocol Name</td>
            <td> e.g., eidon central color retinal photography </td>
            <td>Addition, Better information delivery</td>
          </tr>
        </table>
        <h2>Metadata Example</h2>
        <table>
          <tr>
            <th>Attribute Name </th>
            <th> Tags</th>
            <th> Attribute Description</th>
          </tr>

          <tr>
            <td>Patient ID</td>
            <td> (0010, 0020) </td>
            <td> Attribute Description </td>
          </tr>

          <tr>
            <td>Image Type</td>
            <td> (0008, 0008)</td>
            <td>Primary identifier for the patient. </td>
          </tr>

          <tr>
            <td>Manufacturer</td>
            <td> (0008, 0070)</td>
            <td>Image identification characteristics.</td>
          </tr>
          <tr>
            <td>Manufacturer&apos;s Model Name</td>
            <td>(0008, 1090)</td>
            <td> Manufacturer of the device. </td>
          </tr>

          <tr>
            <td>Image Laterality</td>
            <td> (0020, 0062) </td>
            <td>
              <p>
                Laterality of object image examined. Enumerated Values: R (right eye). L (left eye).
                B (both left and right eye).
              </p>
            </td>
          </tr>
          <tr>
            <td> Pupil Dilated</td>
            <td> (0022, 000D) </td>
            <td>
              <p>
                Whether or not the patient&apos;s pupils were pharmacologically dilated for this
                acquisition. Enumerated Values:
              </p>
              <p>YES</p>
              <p>NO</p>
              <p> If this tag is empty, no information is available.</p>
            </td>
          </tr>

          <tr>
            <td>Samples Per Pixel</td>
            <td> (0028, 0002)</td>
            <td>Number of samples (planes) in this image.</td>
          </tr>

          <tr>
            <td>Number of Frames</td>
            <td> (0028, 0008) </td>
            <td>Number of frames in a Multi-frame Image.</td>
          </tr>
          <tr>
            <td>Rows</td>
            <td>(0028, 0010)</td>
            <td>Number of rows in the image.</td>
          </tr>

          <tr>
            <td>Columns</td>
            <td> (0028, 0011) </td>
            <td>Number of columns in the image. </td>
          </tr>
        </table>
      </body>
    </html>
  );
}

export default RetinalPhotography;
