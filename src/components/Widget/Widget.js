import React from 'react';
import {Element} from 'react-scroll'
import css from './Widget.module.css'

const Widget = () => {
  return (
    <Element name="widget">
    <div className={css.container}>
    </div>
    </Element>
  )
}

export default Widget;