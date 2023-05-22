import { useState } from 'react';

export default function RegistrationFormUncontrolled() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log({ userName, password });
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}>
      <label htmlFor="username">
        Username:{' '}
        <input
          name="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <label htmlFor="password">
        Password:{' '}
        <input
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        <button type="submit">Submit</button>
      </label>
    </form>
  );
}
