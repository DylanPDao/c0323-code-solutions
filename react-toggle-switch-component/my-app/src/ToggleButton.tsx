import { useState } from 'react';

export default function ToggleButton() {
  let [isClicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!isClicked);
  }
  if (isClicked) {
    return (
      <div className="container" onClick={handleClick}>
        <div className="oval">
          <div className="toggle-off"></div>
        </div>
        <p className="text">OFF</p>
      </div>
    );
  } else {
    return (
      <div className="container" onClick={handleClick}>
        <div className="oval green">
          <div className="toggle-on"></div>
        </div>
        <p className="text">ON</p>
      </div>
    );
  }
}
