export default function RegistrationFormUncontrolled() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        margin: '2rem',
      }}>
      <label>
        Username: <input name="username" />
      </label>
      <label>
        Password: <input name="password" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
