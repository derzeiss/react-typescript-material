import { useState } from 'react';
import { CounterBrain } from '../types/CounterBrain';
import { randint } from '../utils/randint';

export const useCounter: CounterBrain = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);
  const resetCount = () => setCount(initialValue);

  return { count, incrementCount, decrementCount, resetCount };
};

export const useCrazyCounter: CounterBrain = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const incrementCount = () => setCount(count + randint(1, 5));
  const decrementCount = () => setCount(count - randint(1, 5));
  const resetCount = () => setCount(randint(-10, 10));

  return { count, incrementCount, decrementCount, resetCount };
};

export const useMultiplyCounter: CounterBrain = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const incrementCount = () => setCount(count * 2);
  const decrementCount = () => setCount(count / 2);
  const resetCount = () => setCount(1);

  return { count, incrementCount, decrementCount, resetCount };
};
