import React from 'react';
import {Element} from 'react-scroll'
import css from './Footer.module.css'

const Footer = () => {
  return (
    <Element
      className={css.element}
      name="footer">
    <div className={css.container}>
      <div className={css.desc}>
      <p className={css.title}>
        PHOTO CREDITS
      </p>
        <p className={css.subtitle}>
        Cecilia Heinen
      </p>
        <p className={css.subtitle}>
        amira_a
      </p>
      </div>
        <p className={css.text}>
          Фотографии и тексты использованы для демонстрации возможностей шаблона сайта, пожалуйста, не используйте их в коммерческих целях.
        </p>
    </div>
    </Element>
  )
}

export default Footer;