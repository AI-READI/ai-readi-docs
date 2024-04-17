/* eslint-disable react/button-has-type */
import React from 'react';
import Figure2 from '../../static/img/retinalOCT/Figure2.jpg';
import Figure3 from '../../static/img/retinalOCT/Figure3.png';
import Figure4 from '../../static/img/retinalOCT/Figure4.png';
import Figure5 from '../../static/img/retinalOCT/Figure5.png';
import Figure6a from '../../static/img/retinalOCT/Figure6a.png';
import Figure6b from '../../static/img/retinalOCT/Figure6b.png';
import Figure7a from '../../static/img/retinalOCT/Figure7a.png';
import Figure7b from '../../static/img/retinalOCT/Figure7b.png';
import Figure8a from '../../static/img/retinalOCT/Figure8a.png';
import Figure8b from '../../static/img/retinalOCT/Figure8b.png';
import Figure9a from '../../static/img/retinalOCT/Figure9a.png';
import Figure9b from '../../static/img/retinalOCT/Figure9b.png';

// eslint-disable-next-line react/prop-types

function RetinalOCT() {
  const opth = 'https://dicom.nema.org/medical/dicom/current/output/html/part03.html#sect_A.52';
  const type1 =
    'https://dicom.nema.org/medical/dicom/current/output/chtml/part05/' +
    'sect_7.4.html#:~:text=The%20Data%20Element%20Type%20of,only%20mandatory%20under%20' +
    'certain%20conditions)';
  const type2 = 'https://dicom.nema.org/medical/dicom/current/output/chtml/part05/sect_7.4.3.html';
  const dicomUrl =
    'https://dicom.nema.org/medical/dicom/current/output/chtml/part03/' +
    'sect_C.7.6.16.html#sect_C.7.6.16.1.1';
  const dicomUrl1 =
    'https://dicom.innolitics.com/ciods/ophthalmic-tomography-image/' +
    'ophthalmic-tomography-image-multi-frame-functional-groups/52009229';
  const nestedStr =
    'https://dicom.nema.org/medical/dicom/current/output/chtml/part03/' +
    'sect_C.7.6.16.html#sect_C.7.6.16.1.2';
  const nestedStr1 =
    'https://dicom.innolitics.com/ciods/ophthalmic-tomography-image/' +
    'ophthalmic-tomography-image-multi-frame-functional-groups/52009230';
  const cnt = `https://dicom.nema.org/medical/dicom/current/output/chtml/part16/PS3.16.html`;
  const ophthalmicImg =
    'https://dicom.nema.org/medical/dicom/current/output/html/part03.html#sect_A.52';

  return (
    <html lang="en">
      <head>
        <style>{`
        .b2{border-bottom-style: hidden;}

         font-style: bold
        `}</style>
      </head>
      <body>
        <div className="mt-4 w-full">
          <div className="flex justify-center">
            <img
              className="w-[40rem]"
              src="https://eyewiki.org/w/images/1/f/f5/Oct_SpectralisLayers_reduced.jpg"
              alt=""
            />
          </div>
          <p className="text-sm">
            <strong>Figure 1.</strong> Retinal layers in normal, healthy eye imaged with Hedeilberg
            Spectralis.
            <a href="https://eyewiki.org/File:Oct_SpectralisLayers_reduced.jpg">Image source:</a>
          </p>
          <ul>
            <li>
              <strong>Diagnosis and Monitoring</strong>: OCT of the retina is widely used in
              ophthalmology for diagnosing identify structural changes in the retina, such as fluid
              accumulation, and monitoring various retinal conditions, such as age-related macular
              degeneration (AMD), diabetic retinopathy, retinal vein occlusion, macular edema, and
              glaucoma.
            </li>
            <li>
              <strong>Treatment Guidance</strong>: OCT of the retina plays a crucial role in guiding
              treatment decisions for retinal diseases. For example, it helps ophthalmologists
              determine the need for interventions such as intravitreal injections, laser therapy,
              or surgical procedures. By monitoring changes in retinal morphology over time,
              clinicians can assess the efficacy of treatment and adjust management strategies
              accordingly.
            </li>
            <li>
              Optical Coherence Tomography (OCT) plays a crucial role in the detection and
              management of <strong>glaucoma</strong>, a progressive optic nerve disease
              characterized by damage to the optic nerve and loss of peripheral vision. OCT provides
              detailed, quantitative assessments of the retinal nerve fiber layer (RNFL) and the
              optic nerve head (ONH), aiding in the early diagnosis, monitoring, and management of
              glaucoma.
              <ul>
                <li>
                  <strong>RNFL Thickness Measurement</strong>: OCT allows for precise measurement of
                  the thickness of the RNFL, which consists of axons of retinal ganglion cells.
                  Thinning of the RNFL is a hallmark sign of glaucoma and can occur before visual
                  field defects are detectable by conventional perimetry. OCT enables clinicians to
                  quantitatively assess RNFL thickness around the optic nerve head and along the
                  peripapillary region, helping in early detection of glaucoma and monitoring
                  disease progression over time.
                </li>
                <li>
                  <strong>Optic Nerve Head Assessment</strong>: OCT provides detailed imaging of the
                  optic nerve head, including measurements of rim area , cup-to-disc ratio, and
                  neuroretinal rim thickness. Changes in these parameters can indicate structural
                  damage to the optic nerve associated with glaucoma. OCT scans also allow
                  clinicians to visualize and quantify the presence of optic disc hemorrhages, which
                  are often associated with glaucomatous optic nerve damage.
                </li>
              </ul>
            </li>
          </ul>
          <h2>Overview of AI-READI Optical Coherence Tomography (OCT)</h2>
          <p className="text-sm">
            <strong>Table 1.</strong> Overview of available images
          </p>

          <table>
            <tr>
              <th>Manufacturer </th>
              <th> Manufacturer’s Model (device)</th>
              <th> Protocol Name</th>
              <th> Anatomic Regions*</th>
              <th> Width</th>
              <th> Height</th>
              <th> Number of frames</th>
              <th> Notes</th>
            </tr>
            <tr>
              <td> Heidelberg</td>
              <td> Spectralis</td>
              <td> Spec-ONH-RC-HR-OCT</td>
              <td> Optic Disc</td>
              <td> 496</td>
              <td> 768</td>
              <td> 27</td>
              <td> </td>
            </tr>
            <tr>
              <td> Heidelberg </td>
              <td> Spectralis</td>
              <td> Spec-PPole Mac-HR-61 lines-OCT</td>
              <td> Macula</td>
              <td> 496</td>
              <td> 768 or 1536</td>
              <td> 61</td>
              <td>
                {' '}
                Two versions of the protocols were used for the pilot but in the future 496, 1536
                will be used.
              </td>
            </tr>
            <tr>
              <td> Topcon </td>
              <td> Maestro2</td>
              <td> Maestro2-3D Wide(H) 12x9-OCT</td>
              <td> Wide Field</td>
              <td>885 </td>
              <td>512 </td>
              <td> 128</td>
              <td> </td>
            </tr>
            <tr>
              <td> Topcon</td>
              <td>Maestro2 </td>
              <td>Maestro2-3D Macula 6x6-OCT </td>
              <td>Macula </td>
              <td> 885</td>
              <td>512 </td>
              <td>128 </td>
              <td> </td>
            </tr>
            <tr>
              <td>Topcon </td>
              <td>Maestro2 </td>
              <td> Maestro2-Mac 6x6-360x360-(rep3)-OCTA</td>
              <td> Macula, 6 x 6</td>
              <td>885 </td>
              <td>360 </td>
              <td>360 </td>
              <td> 6 files have different dimensions (885, 320, 320 </td>
            </tr>
            <tr>
              <td>Topcon </td>
              <td>Triton </td>
              <td> Triton-3D(H)+Radial 12x9-OCT</td>
              <td> Optic Disc</td>
              <td> 992</td>
              <td>512 </td>
              <td>256 </td>
              <td> </td>
            </tr>
            <tr>
              <td>Topcon </td>
              <td> Triton</td>
              <td> Triton-Macula 6x6-OCTA</td>
              <td> Macula, 6 x 6</td>
              <td>992 </td>
              <td>320 </td>
              <td> 320</td>
              <td> </td>
            </tr>
            <tr>
              <td>Topcon </td>
              <td>Triton </td>
              <td> Triton-Macula 12x12-OCTA</td>
              <td> Macula, 12 x 12</td>
              <td>992 </td>
              <td> 512</td>
              <td>512 </td>
              <td> </td>
            </tr>
          </table>
          <p className="text-xs">
            *More information on individual files, please refer to manifest.csv within the
            retinal_oct folder
          </p>
          <h3>Example images</h3>
          <div>
            <p>
              <strong>Figure 2.</strong> ONH Heidelberg Spectralis (Spec-ONH-RC-HR-OCT), own source
              (UCSD) Scan pattern description:
            </p>
            <p>
              A radial line-scan pattern is part of the ONH-RC scan protocol and allows for
              assessing the thickness of the neuro-retinal rim based on the detection of the disk
              margin. From each B-Scan, the shortest distance from Bruch’s membrane opening (BMO) to
              the ILM is determined and indicated by a cyan arrow in the B-Scan. The analysis is
              therefore called BMO-based minimum rim width (BMO-MRW). It considers the variable
              geometry of the neural tissue as it exits the eye via the optic nerve head. BMO-MRW
              data can be classified based on a reference database according to Garway-Heath sectors
              as well as globally.
            </p>
            <img src={Figure2} alt="" />
          </div>

          <div>
            <strong className="text-sm">
              Figure 3. Posterior pole Macula high-resolution OCT (Spec-PPole Mac-HR-61 lines-OCT)
              Heidelberg Spectralis
            </strong>
            <p>
              The PPoleH scan is a volume scan which is placed on the posterior pole of the eye and
              which is aligned to the individual Fovea-to-BMO-center axis. Posterior pole horizontal
              high resolution Macula OCT scan pattern, own source (UCSD)
            </p>

            <img src={Figure3} alt="" />
          </div>
          <div>
            <p>
              {' '}
              <strong>Figure 4. Topcon, Maestro2,</strong>
              <span className="text-sm"> Maestro2-3D Wide(H) 12x9-OCT, own source (UCSD)</span>
            </p>
            <img src={Figure4} alt="" />
          </div>
          <div>
            <p>
              {' '}
              <strong>Figure 5. Topcon, Maestro2,</strong>
              <span className="text-sm">Maestro2-3D Macula 6x6-OCT, own source (UCSD)</span>
            </p>
            <img src={Figure5} alt="" />
          </div>
          <div>
            <p>
              {' '}
              <strong>Figure 6. Topcon, Maestro2,</strong>
              <span className="text-sm">
                Maestro2-Mac 6x6-360x360-(rep3)-OCTA, own source (UCSD), en face (superficial, deep,
                outer retina and choriocapillaris) and OCT B-scan.
              </span>
            </p>
            <img src={Figure6a} alt="" />
            <img src={Figure6b} alt="" />
          </div>
          <div>
            <p>
              {' '}
              <strong>Figure 7. Topcon,</strong>
              <span className="text-sm">MTriton-3D(H)+Radial 12x9-OCT, own source (UCSD)</span>
            </p>
            <img className="h-[40rem]" src={Figure7a} alt="" />
            <img src={Figure7b} alt="" />
          </div>

          <div>
            <p>
              {' '}
              <strong>Figure 8. Topcon, Triton,</strong>
              <span className="text-sm">
                Triton-Macula 6x6-OCTA, own source (UCSD), en face slabs (superficial, deep, outer
                retina, choriocapillaris) and Angio OCT B-scan
              </span>
            </p>
            <img src={Figure8a} alt="" />
            <img src={Figure8b} alt="" />
          </div>

          <div>
            <p>
              {' '}
              <strong>Figure 9. Topcon, Triton,</strong>
              <span className="text-sm">
                {' '}
                Triton-Macula 12x12-OCTA, own source (UCSD, structural B-scan and en-face images.
              </span>
            </p>
            <img src={Figure9a} alt="" />
            <img src={Figure9b} alt="" />
          </div>

          <h3>Data Processing</h3>
          <h4>File format</h4>
          <p>
            The file format is in{' '}
            <a href="https://en.wikipedia.org/wiki/DICOM">
              DICOM (Digital Imaging and Communications in Medicine)
            </a>{' '}
            which is a technical standard for the digital storage and transmission of medical images
            and related information.
          </p>
          <h4>Data Standard </h4>
          <p>
            For all files in retinal_photography, the exported files from the devices were formatted
            according to the NEMA DICOM standards on <a href={opth}>Ophthalmic Tomography Image</a>.
            The detailed information about the tags and values could be found in the hyperlink. All
            mandatory modules (M) were included, and within the mandatory modules, the tags that are
            categorized as <a href={type1}>Type 1</a>(Tag and value both needed) and{' '}
            <a href={type2}>Type 2</a>
            (tag needed value can be empty) were evaluated and filled in accordingly.
          </p>
          <h4>File processing</h4>
          <p>
            Files were processed to comply with the NEMA DICOM standards on{' '}
            <a href={opth}>Ophthalmic Tomography Image</a> through removing, adding, editing tags
            and values.
          </p>
          <p>
            Note that tags that are not listed in <a href={opth}>Ophthalmic Tomography Image</a> and
            did not provide additional information are removed for consistency and clarity.
          </p>
          <p>
            In addition to ensuring files are NEMA compliant, further processing in the following
            were done to ensure consistency across the files:
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
              <td> (0008, 2218)</td>
              <td> Anatomic Region Sequence </td>
              <td> Blank </td>
              <td> Removal, Unnecessary information and inconsistent across devices</td>
            </tr>
            <tr>
              <td> (0022, 0015)</td>
              <td>Anatomic Region Sequence</td>
              <td> e.g., 5665001, SCT, Retina </td>
              <td rowSpan="2">
                {' '}
                Harmonized, up-to-date information Based on
                <a href={cnt}>
                  https://dicom.nema.org/medical/dicom/ current/output/chtml/part16/PS3.16.html
                </a>{' '}
                DICOM PS3.16 2024b - Content Mapping Resource B.DCMR Context Groups (Normative)
              </td>
            </tr>
            <tr>
              <td> (0022, 0015)</td>
              <td>Acquisition Device Type Code Sequence </td>
              <td> e.g., 392012008, SCT, Optical Coherence Tomography Scanner</td>
            </tr>

            <tr>
              <td> (5200, 9229)</td>
              <td> Shared Functional Groups Sequence</td>
              <td>
                Includes these tags within the correct nested structure: &gt;(0008, 1140) Referenced
                Image Sequence &gt;(0008, 9124) Derivation Image Sequence &gt;(0020, 9071) Frame
                Anatomy Sequence &gt;(0020, 9116)* Plane Orientation Sequence &gt;(0028, 9110)*
                Pixel Measures Sequence
              </td>
              <td>
                {' '}
                Harmonized, Based on this information the nested structures were organized:
                <a href={dicomUrl}>
                  https://dicom.nema.org/medical/ dicom/current/output /chtml/part03/
                  sect_C.7.6.16.html#sect_C.7.6.16.1.1
                </a>
                <p>
                  <a href={dicomUrl1}>
                    https:// dicom.innolitics.com/ ciods/ophthalmic-tomography-image/
                    ophthalmic-tomography-image -multi-frame-functional -groups/52009229
                  </a>
                </p>
              </td>
            </tr>
            <tr>
              <td>&gt;(0008, 9124)</td>
              <td> DerivationImageSequence </td>
              <td> e.g., empty </td>
              <td>
                {' '}
                Addition,Tag is added for NEMA compliance (Type 2 tag needed value can be empty)
              </td>
            </tr>

            <tr>
              <td>&gt;(0008, 0000)</td>
              <td> Group Length </td>
              <td> e.g., 596 </td>
              <td> Removed, Unnecessary information</td>
            </tr>

            <tr>
              <td>&gt;(5200, 9230)</td>
              <td> Group Length </td>
              <td> e.g., 596 </td>
              <td> Removed, Unnecessary information</td>
            </tr>

            <tr>
              <td>&gt;(0040, 0000)</td>
              <td> Per Frame Functional Groups Sequence </td>
              <td>
                {' '}
                e.g., include these tags within the nested structure &gt;(0020, 9111) Frame Content
                Sequence &gt;(0020, 9113) Plane Position Sequence &gt;(0022, 0031) Ophthalmic Frame
                Location Sequence &gt;(0020, 9116)* Plane Orientation Sequence &gt;(0028, 9110)*
                Pixel Measures Sequence
              </td>
              <td>
                Harmonized, Based on this information the nested structures were organized:{' '}
                <a href={nestedStr}>
                  https://dicom.nema.org/medical/ dicom/current/output/chtml
                  /part03/sect_C.7.6.16.html #sect_C.7.6.16.1.2
                </a>
                <p>
                  <a href={nestedStr1}>
                    https://dicom.innolitics.com /ciods/ ophthalmic -tomography-image
                    /ophthalmic-tomography -image-multi-frame-functional-groups/52009230
                  </a>
                </p>
              </td>
            </tr>
            <tr>
              <td>&gt;(0020, 0000)</td>
              <td> Group Length </td>
              <td> e.g., 596 </td>
              <td> Removed, Unnecessary information</td>
            </tr>

            <tr>
              <td>&gt;(0020, 9222)</td>
              <td> Dimension Index Sequence</td>
              <td>
                e.g., includes tags listed below (0020, 9164), (0020, 9165), (0020,9167) within the
                nested structure{' '}
              </td>
              <td> Harmonized, consistency</td>
            </tr>

            <tr>
              <td>&gt;(0020, 9164)</td>
              <td> Dimension Organization UID</td>
              <td> e.g., 2.16.840.1.11 4517.10.5. 3.1.90706312 02401180 9124012 </td>
              <td rowSpan="3">
                Harmonized,Consistency and Accurate information Values ‘00209056’, ‘00209057’,
                ‘00209111’ these are pointing to the values of tags within the same file
              </td>
            </tr>
            <tr>
              <td>&gt;(0020, 9165)</td>
              <td>Dimension Index Pointer </td>
              <td> e.g., 00209056,00209057</td>
            </tr>
            <tr>
              <td>&gt;(0020, 9167)</td>
              <td>Functional Group Pointer</td>
              <td> e.g., 00209111</td>
            </tr>
            <tr>
              <td>(0022, 000D)</td>
              <td>Pupil Dilated</td>
              <td> e.g., YES/NO</td>
              <td> Addition,Missing value</td>
            </tr>
            <tr>
              <td>(0022, 0058)</td>
              <td>Mydriatic Agent Sequence</td>
              <td> e.g., empty</td>
              <td> Addition, Missing tag (tag is needed if Pupil Dilated is YES)</td>
            </tr>
            <tr>
              <td>(0022, 000E)</td>
              <td>Degree Of Dilation</td>
              <td> e.g., empty</td>
              <td> Addition, Missing tag (tag is needed if Pupil Dilated is YES)</td>
            </tr>
            <tr>
              <td>(0018, 1030)</td>
              <td>Protocol Name</td>
              <td> e.g., spectralis onh rc hr oct</td>
              <td> Addition, Better information delivery</td>
            </tr>
          </table>
          <p>
            *Note that tags that are not listed in{' '}
            <a href={ophthalmicImg}>Ophthalmic Tomography Image IOD Modules</a> and did not provide
            additional information are removed for consistency and clarity.
          </p>
          <p>
            &gt; indicates that this is a nested structure within the tag above (e.g., ( 0020, 9164
            ) is a within (0020, 9222))
          </p>
          <p>
            *(0020, 9116) Plane Orientation Sequence, (0028, 9110) Pixel Measures Sequence exists in
            either Shared Functional Groups Sequence and Per Frame Functional Groups Sequence.
          </p>
          <h2>Metadata Example </h2>
          <p>Structural OCT</p>
          <p>
            <strong>Spectralis HRA OCT (Heidelberg Engineering)</strong>
          </p>
          <p>
            Glaucoma 🡪OCT <strong>ONH-RC scan pattern</strong>:
          </p>
        </div>
      </body>
    </html>
  );
}

export default RetinalOCT;
