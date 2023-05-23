import React, { useState } from 'react';
import classNames from 'classnames';

export default function ValidateInput() {
  const [inputValue, setInputValue] = useState('');

  const regex = new RegExp(
    '(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
  );

  let inputValueLength = inputValue.length;
  const xIHidden = inputValueLength === 0 || inputValueLength < 8 || 'hidden';
  const checkHidden =
    (inputValueLength >= 8 && regex.test(inputValue)) || 'hidden';
  const shortPassword =
    (inputValueLength < 8 && inputValueLength > 0) || 'hidden';
  const noPassword = inputValueLength === 0 || 'hidden';
  const regexPass =
    (inputValueLength > 8 && !regex.test(inputValue)) || 'hidden';

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
        <i className={classNames('bi bi-x', xIHidden)}></i>
        <i className={classNames('bi bi-check-lg', checkHidden)}></i>
      </div>
      <p className={classNames('no-pass', noPassword)}>
        A password is required.
      </p>
      <p className={classNames('short-pass', shortPassword)}>
        Your password is too short
      </p>
      <p className={classNames('short-pass', regexPass)}>
        Password must contain 1 uppercase, 1 lowercase, 1 special character, and
        1 number
      </p>
    </form>
  );
}
