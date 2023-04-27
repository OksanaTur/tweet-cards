import { Suspense } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';

import Loader from 'components/Loader';
import { ReturnBtn } from 'components/ReturnBtn/ReturnBtn';
import css from 'components/Layout/Layout.module.css';

export const Layout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <header className={css.header}>
        <p className={css.title}>GO TWEET </p>
        {pathname === '/tweets' ? (
          <div className={css.wrapper}>
            <ReturnBtn to={'/'} />
          </div>
        ) : (
          <NavLink className={css.link} to={'/tweets'}>
             Back to tweets!
          </NavLink>
        )}
      </header>
      <main >
        <div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};