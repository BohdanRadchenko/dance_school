import React from 'react';
import {Element} from 'react-scroll'
import css from './Timetable.module.css'

const Timetable = () => {
  return (
    <Element name="timetable">
    <div className={css.container}>
      <h1 className={css.title}> Рассписание </h1>
      <p className={css.subtitle}>
        Пробный урок по танцам — отличная возможность выбрать свой стиль и начать танцевать. Если понравятся занятия, можете продолжить свое обучение в группах.
      </p>
      <ul className={css.list}>
        <li className={css.item}>
          <h2 className={css.day}>Понедельник</h2>
          <p className={css.step}>
            19:00 - 20:00 Сальса с Яной. Средний уровень
          </p>
          <p className={css.step}>
            20:00 - 21:00 Танго с Димой. Высокий уровень
          </p>
          <p className={css.step}>
            21:00 - 22:00 Фламенко с Кристиной. Высокий уровень
          </p>
        </li>

        <li className={css.item}>
          <h2 className={css.day}>Вторник</h2>
          <p className={css.step}>
            19:00 - 20:00 Фламенко с Антоном. Средний уровень
          </p>
          <p className={css.step}>
            20:00 - 21:00 Танго с Димой. Начальный уровень
          </p>
          <p className={css.step}>
            21:00 - 22:00 Сальса с Яной. Средний уровень
          </p>
        </li>

        <li className={css.item}>
          <h2 className={css.day}>Среда</h2>
          <p className={css.step}>
            19:00 - 20:00 Танго с Яной. Средний уровень
          </p>
          <p className={css.step}>
            20:00 - 21:00 Фламенко с Данилом. Средний уровень
          </p>
          <p className={css.step}>
            21:00 - 22:00 Фламенко с Димой. Начальный уровень
          </p>
        </li>

        <li className={css.item}>
          <h2 className={css.day}>Четверг</h2>
          <p className={css.step}>
            19:00 - 20:00 Сальса с Яной. Высокий уровень
          </p>
          <p className={css.step}>
            20:00 - 21:00 Танго с Димой. Начальный уровень
          </p>
          <p className={css.step}>
            21:00 - 22:00 Фламенко с Кристиной. Высокий уровень
          </p>
        </li>

        <li className={css.item}>
          <h2 className={css.day}>Пятница</h2>
          <p className={css.step}>
            19:00 - 20:00 Фламенко с Данилом. Средний уровень
          </p>
          <p className={css.step}>
            20:00 - 21:00 Танго с Димой. Начальный уровень
          </p>
          <p className={css.step}>
            21:00 - 22:00 Сальса с Яной. Средний уровень
          </p>
        </li>

      </ul>
    </div>
    </Element>
  )
}

export default Timetable;