// @ts-ignore
import s from "./AboutSection.module.css";
// @ts-ignore
import img from './../../shared/assets/images/2449948.jpg';
import React from 'react';
// @ts-ignore
import authImg from './../../shared/assets/images/2449948.jpg';

export const HomePage = () => {
  return (
    <section className="container">
      <div className={s.section__block}>
        <div className={s.title__block}>
          <img src={img} alt="Team" />
          <h1 className={s.title}>Создайте идеальную команду для современного рынка труда</h1>
          <p>
            Создание команды еще никогда не было таким простым! Создайте идеальную, команду которая
            произведет впечатление на менеджеров по найму и работодателей. Минимум времени, максимум
            профессионального качества.
          </p>
          <button className={s.team__button}>Создать команду</button>
        </div>
      </div>
      <div className={s.tabs__block}>
        <div className={s.tabs}>
          <button className={`${s.tab} "tab1" `}>1. Зарегестрируйтесь</button>

          <button className={`${s.tab} ""}`}>2. Создайте команду</button>

          <button className={`${s.tab}  ""`}>3. Поделитесь</button>
        </div>
        <div className={s.tab__content}>
          <>
            <div>
              <h1>Ваши первые шаги</h1>
              <p>
                Присоединяйтесь к нашему сообществу и ощутите все преимущества нашего веб-сайта.
                Зарегистрируйтесь сейчас и получите доступ к эксклюзивному контенту, персональным
                рекомендациям и многому другому. Не упустите эту возможность, зарегистрируйтесь
                сегодня!
              </p>
            </div>
            <img src={authImg} alt="Auth" />
          </>
        </div>
      </div>
    </section>
  );
};
