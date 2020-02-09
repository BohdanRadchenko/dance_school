import React from 'react';
import {Element} from 'react-scroll'
import css from './About.module.css'

const About = () => {
  return (
    <Element className={css.element}  name="about">
    <div className={css.container}>
      <h1 className={css.title}>Опыт мирового класса</h1>
      <p className={css.subtitle}>Школа латиноамериканских танцев приглашает детей и взрослых познать мир танца. Уровень подготовки может быть различным. Грамотные преподаватели с интересом работают с новичками, и опытными танцорами.</p>
      <form className={css.form}>
        <input
          name='phone'
          placeholder='Ваш номер телефона'
          className={css.input} type="tel"/>
        <button
          type='submit'
          className={css.button}>
          Записаться на пробный урок
        </button>
      </form>
    </div>
    </Element>
  )
}

export default About;