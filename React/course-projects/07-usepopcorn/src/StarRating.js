import { useState } from "react";
import PropTypes from "prop-types";

const mainContainerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
};
const starContainerStyle = {
  display: "flex",
  alignItems: "center",
};

/*
FULL STAR
*/

/*
EMPTY STAR
const emptyStar ={<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke="#000"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
    strokeWidth="{2}"
    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
    </svg>
    
  */
StarRating.propTypes = {
  maxRating: PropTypes.number,
};

export default function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 24,
  className = "",
  messages = [],
  defaultRating = 0,
  onSetRating,
}) {
  const [currentStarRating, setCurrentStarRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(iStarRating) {
    setCurrentStarRating(iStarRating);
    onSetRating(iStarRating);
  }

  function handleTempRating(iTempStarRating) {
    setTempRating(iTempStarRating);
  }

  const counterTextStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size}px`,
  };
  return (
    <div style={mainContainerStyle} className={className}>
      <StarContainer
        maxRating={maxRating}
        currentStarRating={currentStarRating}
        tempRating={tempRating}
        onHandleRating={handleRating}
        onHandleTempRating={handleTempRating}
        color={color}
        size={size}
      />
      <StarCount
        currentStarRating={currentStarRating}
        tempRating={tempRating}
        setCounterTextStyle={counterTextStyle}
        messages={messages}
        maxRating={maxRating}
      />
    </div>
  );
}

function StarContainer({
  maxRating,
  currentStarRating,
  tempRating,
  onHandleRating,
  onHandleTempRating,
  color,
  size,
}) {
  return (
    <div style={starContainerStyle}>
      {Array.from({ length: maxRating }, (_, i) => (
        <Star
          currentIndex={i}
          key={i}
          onRate={() => onHandleRating(i + 1)}
          isFull={tempRating ? tempRating >= i + 1 : currentStarRating >= i + 1}
          onMoveIn={() => onHandleTempRating(i + 1)}
          onMoveOut={() => onHandleTempRating(0)}
          color={color}
          size={size}
        />
      ))}
    </div>
  );
}

function Star({ isFull, onRate, onMoveIn, onMoveOut, color, size }) {
  const starStyle = {
    height: `${size}px`,
    width: `${size}px`,
    color,
    display: "block",
    cursor: "pointer",
  };
  return (
    <span
      style={starStyle}
      role="button"
      onClick={onRate}
      onMouseEnter={onMoveIn}
      onMouseLeave={onMoveOut}
    >
      {isFull ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}

function StarCount({
  currentStarRating,
  tempRating,
  setCounterTextStyle,
  messages,
  maxRating,
}) {
  return (
    <p style={setCounterTextStyle}>
      {messages.length === maxRating
        ? messages[tempRating ? tempRating - 1 : currentStarRating - 1]
        : tempRating || currentStarRating || ""}
    </p>
  );
}
