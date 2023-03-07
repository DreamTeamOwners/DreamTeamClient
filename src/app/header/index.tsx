import { Link } from 'react-router-dom';
// @ts-ignore
import s from './Header.module.css';

export const Header = () => {
  return (
    <header className="container">
      <div className={s.header__block}>
        <div className={s.header__logo}>
          <Link to="/resume">
            <h1>Digital Team</h1>
          </Link>
        </div>
        <nav className={s.header__nav}>
          <ul>
            <a href="https://www.youtube.com/watch?v=LGUMbz2tEMk">Создать команду</a>
            <a href="https://www.youtube.com/watch?v=LGUMbz2tEMk">Присоединиться к команде</a>
            <a href="https://www.youtube.com/watch?v=LGUMbz2tEMk">Компании</a>
            <a href="https://www.youtube.com/watch?v=LGUMbz2tEMk">Вакансии</a>
            <a href="https://www.youtube.com/watch?v=LGUMbz2tEMk">О нас</a>
          </ul>
        </nav>
        <div className={s.header__button}>
          <Link to="/login">
            <button className={s.login__button}>log in</button>
          </Link>
          <Link to="/register">
            <button className={s.signin__button}>Sign in</button>
          </Link>
        </div>
      </div>
    </header>
  );
};
