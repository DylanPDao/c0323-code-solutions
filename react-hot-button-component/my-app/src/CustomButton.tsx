import { useState } from 'react';

type Props = {
  text: string;
};

export default function CustomButton({ text }: Props) {
  const [index, setClicked] = useState(0);

  function handleClick(): void {
    setClicked(index + 1);
  }

  let className = 'btn';
  if (index < 3) {
    className = 'btn';
  } else if (index < 6) {
    className = 'btn light-purple';
  } else if (index < 9) {
    className = 'btn coral';
  } else if (index < 12) {
    className = 'btn salmon';
  } else if (index < 15) {
    className = 'btn yellow';
  } else {
    className = 'btn white';
  }

  return (
    <div>
      <button className={className} onClick={handleClick}>
        {text}
      </button>
    </div>
  );
}
