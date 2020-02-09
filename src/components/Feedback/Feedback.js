import React from 'react';
import {Element} from 'react-scroll'
import Slider from "../Slider/Slider";
import css from './Feedback.module.css'

const Feedback = () => {
  return (
    <Element name="feedback">
    <div className={css.container}>
      <h1 className={css.title}>
        Отзывы учеников
      </h1>
      <Slider/>
    </div>
    </Element>
  )
}

export default Feedback;