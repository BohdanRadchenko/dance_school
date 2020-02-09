import React from 'react';
import {Element} from 'react-scroll'
import css from './Bunner.module.css'

const Bunner = () => {
  return (
    <Element name="bunner">
    <div className={css.imageWrapper}>
      <div className={css.container}>
          <h1 className={css.title}>Школа танцев</h1>
          <p className={css.subtitle}>Начать танцевать легко! Приходите к нам, научитесь танцевать — и вы почувствуете, как вместе с танцем в вашу жизнь войдут бодрость, ритм и позитив</p>
          <button className={css.button}>Записаться на первый урок</button>
      </div>
    </div>
    </Element>
  )
}

export default Bunner;