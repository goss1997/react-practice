import { useState } from 'react';

export default function UserInput({ onChange, userInput }) {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <div>
          <p>
            <label htmlFor=''>InitialInvestment</label>
            <input
              type='number'
              required
              value={userInput.initialInvestment}
              onChange={(event) => onChange('initialInvestment', event.target.value)}
            />
          </p>
          <p>
            <label htmlFor=''>ExpectedReturn</label>
            <input
              type='number'
              required
              value={userInput.expectedReturn}
              onChange={(event) => onChange('expectedReturn', event.target.value)}
            />
          </p>
        </div>
        <div>
          <p>
            <label htmlFor=''>AnnualInvestment</label>
            <input
              type='number'
              required
              value={userInput.annualInvestment}
              onChange={(event) => onChange('annualInvestment', event.target.value)}
            />
          </p>
          <p>
            <label htmlFor=''>Duration</label>
            <input
              type='number'
              required
              value={userInput.duration}
              onChange={(event) => onChange('duration', event.target.value)}
            />
          </p>
        </div>
      </div>
    </section>
  );
}
