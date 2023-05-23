import React, { useState } from 'react';

export default function ValidateInput() {
  const [inputValue, setInputValue] = useState('');

  const regex = new RegExp(
    '(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
  );

  let inputValueLength: number = inputValue.length;
  let xIHidden: string = 'hidden';
  let checkHidden: string = 'hidden';
  let shortPassword: string = 'hidden';
  let noPassword: string = 'hidden';
  let regexPass: string = 'hidden';

  if (inputValueLength === 0 || inputValueLength < 8) {
    xIHidden = '';
  }
  if (inputValueLength === 0) {
    noPassword = '';
  }
  if (inputValueLength >= 8 && regex.test(inputValue)) {
    checkHidden = '';
  }
  if (inputValueLength < 8 && inputValueLength > 0) {
    shortPassword = '';
  }
  if (inputValueLength > 8 && !regex.test(inputValue)) {
    regexPass = '';
  }

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0.5rem',
        width: '20rem',
      }}>
      <label htmlFor="pass">Password</label>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          id="pass"
          type="password"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <i className={`bi bi-x ${xIHidden}`}></i>
        <i className={`bi bi-check-lg ${checkHidden}`}></i>
      </div>
      <p className={`no-pass ${noPassword}`}>A password is required.</p>
      <p className={`short-pass ${shortPassword}`}>
        Your password is too short
      </p>
      <p className={`short-pass ${regexPass}`}>
        Password must contain 1 uppercase, 1 lowercase, 1 special character, and
        1 number
      </p>
    </form>
  );
}
