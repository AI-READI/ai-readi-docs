/* eslint-disable react/button-has-type */
import React from 'react';
import Lottie from 'react-lottie';

import LikeAnimationData from './lotties/like.json';
import DislikeAnimationData from './lotties/dislike.json';
import SuccessAnimationData from './lotties/success.json';

// eslint-disable-next-line react/prop-types
function AskFeedback({ setShowSuccess, setReaction }) {
  const [startLikeAnimation, setStartLikeAnimation] = React.useState(false);
  const [startDislikeAnimation, setStartDislikeAnimation] = React.useState(false);
  const [analyticsTitle, setAnalyticsTitle] = React.useState('');

  React.useEffect(() => {
    const windowTitle = document.title;
    const title = windowTitle.split(' | ')[0];
    setAnalyticsTitle(title);
  }, []);

  const likeAnimationOptions = {
    loop: true,
    autoplay: false,
    animationData: LikeAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const dislikeAnimationOptions = {
    loop: true,
    autoplay: false,
    animationData: DislikeAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const sendReactionFeedback = (action) => {
    // eslint-disable-next-line no-console
    console.log(`Send feedback - Title: ${document.title} | Reaction: ${action}`, action);

    setReaction(action);

    const windowTitle = document.title;
    const aT = windowTitle.split(' | ')[0];
    const feedbackText = '';

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'Reaction', category: aT, action, feedbackText }),
    };
    fetch('/api/feedback', requestOptions).then(async (response) => {
      const { status } = response;

      if (status === 200) {
        const res = await response.json();

        if (res.success) {
          // eslint-disable-next-line no-console
          console.log(`Feedback sent successfully. Message: ${res.message}`);
        } else {
          // eslint-disable-next-line no-console
          console.log('There was an error with sending the feedback');
        }
      } else {
        // eslint-disable-next-line no-console
        console.log('There was an error with sending the feedback');
      }
    });

    // setShowTextFeedback(true);
    setShowSuccess(true);
  };

  return (
    <div className="mt-4 flex w-full flex-col items-center justify-center sm:flex-row">
      <h3 className="mb-5 w-max pr-5 sm:mb-0"> Was this page helpful? </h3>

      <div className="flex items-center justify-center space-x-4">
        <button
          className="feedback-button feedback-button-yes"
          data-umami-event="feedback-yes"
          data-umami-event-title={analyticsTitle}
          onClick={() => sendReactionFeedback('Like')}
          onMouseEnter={() => setStartLikeAnimation(true)}
          onMouseLeave={() => setStartLikeAnimation(false)}
        >
          <Lottie
            options={likeAnimationOptions}
            height={25}
            width={25}
            isClickToPauseDisabled
            isStopped={!startLikeAnimation}
          />
          <span className="px-2">Yes</span>
        </button>

        <button
          className="feedback-button feedback-button-no"
          data-umami-event="feedback-no"
          data-umami-event-title={analyticsTitle}
          onClick={() => sendReactionFeedback('Dislike')}
          onMouseEnter={() => setStartDislikeAnimation(true)}
          onMouseLeave={() => setStartDislikeAnimation(false)}
        >
          <Lottie
            options={dislikeAnimationOptions}
            height={25}
            width={25}
            isClickToPauseDisabled
            isStopped={!startDislikeAnimation}
          />
          <span className="px-2">No</span>
        </button>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function ShowSuccessMessage({ hideSubText }) {
  const animationOptions = {
    loop: 1,
    autoplay: true,
    animationData: SuccessAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="flex flex-row items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h3 className="mb-0 w-max"> Thank you for your feedback! </h3>
        {/* {!hideSubText && (
          <h4 className="mb-3 pt-1">Would you like to leave any additional comments?</h4>
        )} */}
      </div>
      {hideSubText && (
        <Lottie
          options={animationOptions}
          height={70}
          width={70}
          isClickToPauseDisabled
          style={{ margin: '0' }}
        />
      )}
    </div>
  );
}

function PageFeedback() {
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [showTextFeedback, setShowTextFeedback] = React.useState(false);
  const [reaction, setReaction] = React.useState('');
  const [hideSubText, setHideSubText] = React.useState(false);
  const [feedbackText, setFeedbackText] = React.useState('');

  const handleFeedbackTextChange = (event) => {
    setFeedbackText(event.target.value);
  };

  const sendTextFeedback = () => {
    // eslint-disable-next-line no-console
    console.log(`Send feedback - Title: ${document.title} | Reaction: ${reaction}`, feedbackText);

    const windowTitle = document.title;
    const analyticsTitle = windowTitle.split(' | ')[0];

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'Comment',
        category: analyticsTitle,
        action: reaction,
        feedbackText,
      }),
    };

    fetch('/api/feedback', requestOptions).then(async (response) => {
      const { status } = response;

      if (status === 200) {
        const res = await response.json();

        if (res.success) {
          // eslint-disable-next-line no-console
          console.log(`Feedback sent successfully. Message: ${res.message}`);
        } else {
          // eslint-disable-next-line no-console
          console.log('There was an error with sending the feedback');
        }
      } else {
        // eslint-disable-next-line no-console
        console.log('There was an error with sending the feedback');
      }
    });

    setHideSubText(true);
    setShowTextFeedback(false);
  };

  return (
    <div className="relative mt-4 w-full">
      <hr className="feedback-divider" />

      {showSuccess ? (
        <ShowSuccessMessage hideSubText={hideSubText} />
      ) : (
        <AskFeedback
          setShowSuccess={setShowSuccess}
          setReaction={setReaction}
          setShowTextFeedback={setShowTextFeedback}
        />
      )}

      {showTextFeedback && (
        <div className="flex justify-center space-x-2 pt-1">
          <textarea
            className="w-[350px] rounded-md px-3 py-2 font-inter"
            placeholder="Any additional comments?"
            onChange={handleFeedbackTextChange}
            value={feedbackText}
          />
          <button
            className="feedback-button feedback-button-yes !w-[180px]"
            onClick={() => sendTextFeedback()}
          >
            Add Comment
          </button>
        </div>
      )}
    </div>
  );
}

export default PageFeedback;
