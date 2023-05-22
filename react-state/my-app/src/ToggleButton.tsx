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

  color = !isClicked ? color : color2;

  return (
    <button onClick={handleClick} style={{ backgroundColor: color }}>
      {!isClicked ? text : text2}
    </button>
  );
}
