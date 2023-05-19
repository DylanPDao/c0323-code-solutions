export default function CustomButton({ text, color, textColor }) {
  return (
    <button
      className={text}
      style={{
        backgroundColor: `${color}`,
        color: `${textColor}`,
      }}>
      {text}
    </button>
  );
}
