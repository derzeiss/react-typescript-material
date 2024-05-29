import { FC, FormEvent } from 'react';

export const UncontrolledFormPage: FC = () => {
  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const data = new FormData(ev.currentTarget);
    const values = Object.fromEntries(data);
    console.log(values);
  };
  console;

  return (
    <form onSubmit={handleSubmit}>
      <h1>Uncontrolled form</h1>
      <label>
        First Name
        <input name="firstname" />
      </label>

      <label>
        Birthday
        <input name="birthday" type="date" />
      </label>

      <label>
        Favorite Color
        <input name="fav-color" type="color" />
      </label>

      <label>
        <input type="radio" name="radio" value="one" />
        one
      </label>
      <label>
        <input type="radio" name="radio" value="two" />
        two
      </label>

      <button type="submit">Save Person</button>
    </form>
  );
};
