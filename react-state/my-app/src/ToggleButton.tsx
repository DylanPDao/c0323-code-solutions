import { useState } from 'react';

type Props = {
  text: string;
  color: string;
  text2: string;
  color2: string;
};

export default function ToggleButton({ text, color, text2, color2 }: Props) {
  let [isClicked, setClicked] = useState(false);
  console.log('useState:', isClicked);

  function handleClick(): void {
    console.log('before setter:', isClicked);
    setClicked(!isClicked);
    console.log('after setter:', isClicked);
  }

  if (!isClicked) {
    return (
      <button onClick={handleClick} style={{ backgroundColor: color }}>
        {text}
      </button>
    );
  } else {
    return (
      <button onClick={handleClick} style={{ backgroundColor: color2 }}>
        {text2}
      </button>
    );
  }
}
