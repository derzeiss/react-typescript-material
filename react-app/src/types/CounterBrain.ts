export type CounterBrain = (initialValue: number) => {
  count: number;
  incrementCount: () => void;
  decrementCount: () => void;
  resetCount: () => void;
};
