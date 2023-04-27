import ScrollToTop from 'react-scroll-up';
import { BsArrowUpCircle } from 'react-icons/bs';

import css from './ArrowUp.module.css';

export const ArrowUp = () => {
  return (
    <ScrollToTop showUnder={160}>
      <BsArrowUpCircle className={css.toUp} />
    </ScrollToTop>
  );
};