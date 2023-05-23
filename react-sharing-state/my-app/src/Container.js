import React from 'react';
import { useState } from 'react';
/**
 * A container of items.
 * One item is displayed at a time, with buttons to flip through them:
 * - Next and Prev scroll forward and backward one item
 * - An array of buttons scroll to a specific item
 * TODO: The buttons don't work!
 */
export default function Container({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleIt(e) {
    setActiveIndex(Number(e));
  }

  return (
    <div>
      <div>{items[activeIndex]}</div>
      <div>
        <CustomButton
          text="Prev"
          onShow={() =>
            setActiveIndex((activeIndex - 1 + items.length) % items.length)
          }
        />
        <Indicators
          count={items.length}
          onSelect={(e) => handleIt(e.target.textContent)}
          colorDiv={activeIndex}
        />
        <CustomButton
          text="Next"
          onShow={() => setActiveIndex((activeIndex + 1) % items.length)}
        />
      </div>
    </div>
  );
}

/**
 * A component that wraps a DOM button.
 * Props:
 *   text: The button's text
 *
 * TODO: Make the background color a prop, default white.
 * TODO: When clicked, the parent needs to be notified.
 */
function CustomButton({ text, color, onShow, isActive }) {
  color = isActive ? color : 'white';
  return (
    <button onClick={onShow} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}

/**
 * An array of indicators (buttons).
 * Props:
 *   count: The number of indicators to display
 *
 * TODO: When an indicator is selected, the active item in the Container
 *       should switch to the index of the selected indicator.
 *       To avoid confusion, use `onSelect` for the event prop name.
 * TODO: Highlight the active indicator lightblue.
 */
function Indicators({ count, onSelect, colorDiv }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <CustomButton
        key={i}
        text={i}
        color="lightblue"
        onShow={onSelect}
        isActive={colorDiv === i}
      />
    );
  }
  return <div>{buttons}</div>;
}
