import React from 'react';
import {Element} from 'react-scroll'
import css from './Contest.module.css'

const Contest = () => {
  return (
    <Element name="contest">

    <div className={css.container}>
      <p className={css.uptitle}>
        Соревнования
      </p>
      <p className={css.title}>
        Наши студенты Миша и Оля выиграли международный конкурс латиноамериканских танцев в Колумбии!
      </p>
      <p className={css.subtitle}>
        Ежегодно мы участвуем в международных соревнованиях. В прошлом месяце наши танцоры выиграли золото в Колумбии, сделав нас первой русской школой-победительницей по латиноамериканским танцам!
      </p>

      <iframe
        className={css.video}
        title="video_player"
        src="https://player.vimeo.com/video/128117726"
        // width="100%"
        // height="auto"
        frameBorder="0"
        allowFullScreen>
      </iframe>
    </div>
    </Element>
  )
}

export default Contest;