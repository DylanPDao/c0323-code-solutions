type Props = {
  text: string;
  color: string;
  onCustomClick: Function;
};

export default function CustomButton({
  text,
  color,
  onCustomClick,
}: Props): JSX.Element {
  return (
    <button
      onClick={() => onCustomClick(color, text)}
      style={{
        backgroundColor: color,
      }}>
      {text}
    </button>
  );
}
