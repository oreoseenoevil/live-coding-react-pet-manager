import { Wrapper } from 'Components/Wrapper/Wrapper';
import { stat } from 'fs';
import { useState } from 'react';

const statuses = [
  { name: 'Listed', value: 'listed' },
  { name: 'Examining', value: 'examining' },
  { name: 'Finally Back to Hooman', value: 'finally_back_to_hooman' }
];

export const App = () => {
  const [pets, setPets] = useState<any>([]);
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    const newPet = {
      id: Math.floor(Math.random() * 1000000),
      name: input,
      status: 'listed'
    };
    setPets((prev: any) => [...prev, newPet]);
    setInput('');
  };

  const handleExam = (id: number) => {};

  return (
    <div>
      <header>
        <h1>Pet Manager 3000</h1>
        <div>
          <span>Dog name:</span>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
          <button type="button" onClick={handleSubmit}>
            Add Pet
          </button>
        </div>
      </header>
      {statuses.map((status, i) => {
        const items = pets.filter((item: any) => item.status === status.value);
        return (
          <Wrapper status={status.name} key={i}>
            {items.map((item: any) => (
              <span key={item.id}>{item.name}</span>
            ))}
          </Wrapper>
        );
      })}
    </div>
  );
};

export default App;
