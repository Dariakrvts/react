import React, { useState } from 'react';

const SmileysPage = () => {
  const [smileys, setSmileys] = useState([
    { id: 1, symbol: '😊', count: 0 },
    { id: 2, symbol: '😂', count: 0 },
    { id: 3, symbol: '😍', count: 0 },
  ]);

  const [winner, setWinner] = useState(null);

  const handleVote = (id) => {
    const updatedSmileys = smileys.map((smiley) =>
      smiley.id === id ? { ...smiley, count: smiley.count + 1 } : smiley
    );
    setSmileys(updatedSmileys);
  };

  const showResults = () => {
    const winnerSmiley = smileys.reduce((prev, current) =>
      prev.count > current.count ? prev : current
    );
    setWinner(winnerSmiley);
  };

  return (
    <div>
      <h1>Обери свого переможця</h1>
      <ul>
        {smileys.map((smiley) => (
          <li key={smiley.id} 
           onClick={() => handleVote(smiley.id)}>
          {smiley.symbol} - {smiley.count}
          </li>
        ))}
      </ul>
      <button
        onClick={showResults}
        >Показати результат
        </button>
      {winner && (
        <div>
          <h2>Переможець:</h2>
          <p>{winner.symbol}</p>
        </div>
      )}
    </div>
  );
};

export default SmileysPage;