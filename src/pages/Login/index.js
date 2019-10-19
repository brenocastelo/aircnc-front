import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">EMAIL *</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <button type="submit">Entrar</button>
      </form>
    </>
  );
}
