import React from 'react';
import {Element} from 'react-scroll'
import css from './Price.module.css'

const Price = () => {
  return (
    <Element className={css.element} name="price">
    <div className={css.container}>
      <h1 className={css.title}>Цены</h1>

      <ul className={css.list}>

        <li className={css.itms}>
          <h2 className={css.subtitle}>
            Начальный
          </h2>
          <div className={css.desc}>
            <p className={css.cost}>
              1600 грн/мес
            </p>
            <p className={css.text}>
              Годичная программа. Вам не нужен профессиональный опыт. Доступен для лиц старше 16 лет.
            </p>
          </div>
        </li>

        <li className={css.itms}>
          <h2 className={css.subtitle}>
            Средний
          </h2>
          <div className={css.desc}>
            <p className={css.cost}>
              4500 грн/мес
            </p>
            <p className={css.text}>
              Доступно для выпускников начальной программы. Неограниченный срок курса.
            </p>
          </div>
        </li>

        <li className={css.itms}>
          <h2 className={css.subtitle}>
            Высокий
          </h2>
          <div className={css.desc}>
            <p className={css.cost}>
              7200 грн/мес
            </p>
            <p className={css.text}>
              Продвинутые уроки для уже опытных танцоров.
            </p>
            </div>
        </li>

      </ul>

      <button className={css.button}>
        Попробуйте бесплатный урок
      </button>
    </div>
    </Element>
  )
}

export default Price;