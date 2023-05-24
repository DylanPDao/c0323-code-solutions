import React from 'react';
import { useState } from 'react';

export default function Container({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

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
          onSelect={(e) => setActiveIndex(e)}
          indicatorColorIndex={activeIndex}
        />
        <CustomButton
          text="Next"
          onShow={() => setActiveIndex((activeIndex + 1) % items.length)}
        />
      </div>
    </div>
  );
}

function CustomButton({ text, color = 'white', onShow }) {
  return (
    <button onClick={onShow} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}

function Indicators({ count, onSelect, indicatorColorIndex }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <CustomButton
        key={i}
        text={i}
        onShow={() => onSelect(i)}
        color={indicatorColorIndex === i && 'lightblue'}
      />
    );
  }
  return <div>{buttons}</div>;
}
