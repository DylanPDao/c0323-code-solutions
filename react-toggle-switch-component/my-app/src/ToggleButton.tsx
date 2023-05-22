import { useState } from 'react';

export default function ToggleButton() {
  let [isClicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!isClicked);
  }

  return (
    <div className="container" onClick={handleClick}>
      <div className={isClicked ? 'oval' : 'oval green'}>
        <div className={isClicked ? 'toggle-off' : 'toggle-on'}></div>
      </div>
      <p className="text">{isClicked ? 'OFF' : 'ON'}</p>
    </div>
  );
}
