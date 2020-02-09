import React from 'react';
import {Element} from 'react-scroll'
import css from './Copy.module.css'

const Copy = () => {
  return (
    <Element
      className={css.element}
      name="copy">
    <div className={css.container}>
    <p>
      Made by Bohdan Radchenko
    </p>
    </div>
    </Element>
  )
}

export default Copy;