import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const getRandomMessage = (age) => {
    const messages = {
      below20: ['Youth is a gift of nature.', 'Stay curious!', 'The world is yours to explore.'],
      between21and35: ['You are in your prime!', 'Seize the day!', 'Opportunities are endless.'],
      above35: ['Experience is the best teacher.', 'Wisdom comes with age.', 'Embrace every moment.'],
    };

    if (age < 20) return messages.below20[Math.floor(Math.random() * messages.below20.length)];
    if (age >= 20 && age <= 35) return messages.between21and35[Math.floor(Math.random() * messages.between21and35.length)];
    return messages.above35[Math.floor(Math.random() * messages.above35.length)];
  };

  const startMyDay = () => {
    if (!name || !age || isNaN(age)) {
      setError('Please enter a valid name and age.');
      setMessage('');
    } else {
    const greeting = ['Good morning', 'Good afternoon', 'Good evening'];
    const randomGreeting = greeting[Math.floor(Math.random() * greeting.length)];
    const randomMotivatedMessage = getRandomMessage(age);
    setMessage(`${randomGreeting}, ${name}! ${randomMotivatedMessage}`);
    }
  };

  return (
    <div className="app-container">
      <header>
        <img
          src="https://www.torrens.edu.au/-/media/project/laureate/shared/core/torrens-university-australia-logo.svg?h=37&iar=0&w=128&rev=804114c2fc484271aa100aa5f7b68c77&hash=A51758636EE9B58C27D2EE9B7C484B28"
          alt="Torrens University Australia Logo"
        />
        <h1>Welcome to the Motivation Daily App for Software Engineering Students</h1>
      </header>
      <div className="form-container">
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <hr /> {/* Divider */}
        <button onClick={startMyDay}>Start My Day</button>
      </div>
      {error && <div data-testid="error-message" className="error-message">{error}</div>}
      {message && <div data-testid="motivational-message" className="motivational-message">{message}</div>}
    </div>
  );
};
export default App;

