/* eslint-disable react/button-has-type */
import React from 'react';
import Figure3 from '../../static/img/f3.png';
import Figure4 from '../../static/img/Figure4.png';

// eslint-disable-next-line react/prop-types

function RetinalFlioData() {
  const url3 =
    'https://arvo.silverchair-cdn.com/arvo/content_public/journal/iovs' +
    '/938091/i1552-5783-60-8-3054-f01.png?Expires=1714737453&Signature=HAhDMRUOKhTFqe6HHAN6JGl' +
    'bPXUGp8ovXG6AgsaeT~FBCoiOp-LtqviO~o2GgTJr1DcYCBVhwz7PYrs4BPWhsaF6xACoKyqKKQ9nWPbw~DALFR' +
    '~I3xANVsXFJKFbDfVrAsQVHygJCHdTSLCJovXLrbpXQn13aRqS0X2a97LOFmTwMAyf0crJ7KCt2RBkvV1ujqqo' +
    '1JEqJ8EKrEzDQrhYhPyMVP3VVR-WSjkT1qsH2EPYt85B81msRJhaZag8yOu4j0ztgCycjnE3MU7qTWJ9o695i-' +
    'Eq4LUSnq~-PUUyvlxuvGmFpdLN8SrxC2KdCQoVRw-1xmKzZnK04RuLY6bSsQ__&Key-Pair-Id=APKAIE5G5' +
    'CRDK6RD3PGA';
  const url4 =
    'https://arvo.silverchair-cdn.com/arvo/content_public/journal/' +
    'iovs/938091/i1552-5783-60-8-3054-f06.png?Expires=1714737453&Signature=ted1OQplr' +
    '2ACKZqo9xlQBNINb6Ba-81zBiYPaLAE9kX7K12B~6R~oB4f5KLykmgXHg5FX7Iai3KIf7EOPe-fy6G' +
    'bDdY3uvxmTvIFjgEvezabuv3RyNqTDjJO2T6dNZAQmt1yacLp410AEQtBF3fwZ7P4Losyi--Frvcsa' +
    'aRoFg5JNlwdvWFI8brKY1xWVn8tLcFlDIN2UbZqkRC9lzlw2Dq5SUP-ERCpVu6LtwkbPH-8LMRjt4' +
    'oHa0uXlw6N26b20slkKckvJT3ENswI2-hQKAV0vxy7iZI88l8C2HGa8aoMtKPcFKfuOyuWgQDodVmw' +
    '2pTiHTua-U~3Z7v3bPRPTA__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA';
  return (
    <html lang="en">
      <head>
        <style>{`
        .b2{border-bottom-style: hidden;}

         font-style: bold
        `}</style>
      </head>
      <body>
        <div className="relative mt-4 w-full">
          {/* eslint-disable-next-line max-len */}
          <img src={url3} alt="" />
          <p className="text-sm">
            Figure 1. Demonstrating outputs of Fluorescence Lifetime Imaging Ophthalmoscopy in eyes
            with age-related macular degeneration. These images are preprocessed, overlaid, and
            plotted as a heatmap. FAF: fundus autofluorescence, AMD: age-related macular
            degeneration, SSC: short spectral channel, LSC: long spectral channel. The image is used
            with permission from Lydia Sauer, Christopher B. Komanski, Alexandra S. Vitale, Eric D.
            Hansen, and Paul S. Bernstein from their study titled{' '}
            <q>
              Fluorescence Lifetime Imaging Ophthalmoscopy (FLIO) in Eyes With Pigment Epithelial
              Detachments Due to Age-Related Macular Degeneration,
            </q>{' '}
            published in Invest. Ophthalmol. Vis. Sci. 2019;60(8):3054-3063,
            <a href="https://doi.org/10.1167/iovs.19-26835">
              DOI: https://doi.org/10.1167/iovs.19-26835
            </a>
            .
          </p>
          <div className="flex justify-center">
            {/* eslint-disable-next-line max-len */}
            <img className="h-[40rem] w-[25rem]" src={url4} alt="" />
          </div>
          <p className="text-sm">
            Figure 2. Fundus autofluorescence and lifetime images from short- and long-spectral
            channels of an eye with subretinal hyperreflective material, which is indicated using
            white arrows. The image is used with permission from Lydia Sauer, Christopher B.
            Komanski, Alexandra S. Vitale, Eric D. Hansen, and Paul S. Bernstein from their study
            titled Fluorescence Lifetime Imaging Ophthalmoscopy (FLIO) in Eyes With Pigment
            Epithelial Detachments Due to Age-Related Macular Degeneration,&nbsp; published in
            Invest. Ophthalmol. Vis. Sci. 2019;60(8):3054-3063,
            <a href="https://doi.org/10.1167/iovs.19-26835">
              https://doi.org/10.1167/iovs.19-26835
            </a>
            .
          </p>

          {/* eslint-disable-next-line max-len */}
          <div className="flex justify-center">
            <img src={Figure3} alt="" />;
          </div>
          <p className="text-sm">
            Figure 3. Depiction of the plotting of the recorded value for a single pixel (200, 200)
            over time, using different frames within the pixel array of the .dcm file of an AI-READI
            subject
          </p>

          <div className="flex justify-center">
            <img src={Figure4} alt="" />;
          </div>
          <p className="text-sm">
            Figure 4. Illustration of the plotting of a single frame from the pixel array in a .dcm
            file from an AI-READI subject without preprocessing. This particular frame represents
            the frame with the highest signal amplitude (frame number 215 in this case). Each pixel
            corresponds to a captured fluorescence photon count from the corresponding point in the
            retina. The .dcm file can be preprocessed to generate the heatmap-style figures used in
            the literature.
          </p>
          <div>
            <dl className="flex flex-row gap-8">
              <dd>CFD</dd>
              <dt>Constant Fraction Discriminato</dt>
            </dl>
            <dl className="flex flex-row gap-8">
              <dd>SYN</dd>
              <dt>Synchronization</dt>
            </dl>
            <dl className="flex flex-row gap-8">
              <dd>TAC</dd>
              <dt>Time-to-Amplitude</dt>
            </dl>
            <dl className="flex flex-row gap-8">
              <dd>ADC</dd>
              <dt>Analog to Digital Converter</dt>
            </dl>
          </div>
        </div>
      </body>
    </html>
  );
}

export default RetinalFlioData;
