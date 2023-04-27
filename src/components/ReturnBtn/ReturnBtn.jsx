import { NavLink } from 'react-router-dom';

import css from './ReturnBtn.module.css';

export const ReturnBtn = ({ to }) => {
  return (
    <NavLink className={css.btnWrapper} to={to}>
      <button className={css.btn} type="button">
        Return
      </button>
    </NavLink>
  );
};