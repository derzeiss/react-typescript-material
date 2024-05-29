import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const PageHeader: FC = () => {
  return (
    <header className="page-header container">
      <nav className="page-nav">
        <NavLink to="/counter">Counter</NavLink>
        <NavLink to="/uncontrolled-form">Uncontrolled form</NavLink>
      </nav>
    </header>
  );
};
