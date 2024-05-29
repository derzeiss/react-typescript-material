import { FC } from 'react';
import { CounterBrain } from '../types/CounterBrain';

interface CounterProps {
  initialValue?: number;
  useCounter: CounterBrain;
}

export const Counter: FC<CounterProps> = ({ initialValue = 0, useCounter }) => {
  const { count, incrementCount, decrementCount, resetCount } = useCounter(initialValue);

  return (
    <div className="counter">
      <button className="secondary" onClick={decrementCount}>
        –
      </button>
      <h2>{count}</h2>
      <button className="secondary" onClick={incrementCount}>
        +
      </button>
      <button className="tertiary" onClick={resetCount}>
        Reset
      </button>
    </div>
  );
};
