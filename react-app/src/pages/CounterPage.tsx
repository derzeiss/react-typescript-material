import { FC } from 'react';
import { Counter } from '../components/Counter';
import { useCounter } from '../hooks/useCounter';

export const CounterPage: FC = () => {
  return <Counter initialValue={3} useCounter={useCounter} />;
};
