import React from 'react';
import {Element} from 'react-scroll'
import css from './Contact.module.css'

const Contact = () => {
  return (
    <Element
      className={css.element}
      name="contact">
    <div className={css.container}>
      <div className={css.adress}>
      <p>
        Школа латиноамериканских танцев
      </p>
      <p>
        1-ая Владимирская ул., 10
      </p>
      <p>
        Киев
      </p>
      </div>
      <div className={css.contact}>
        <p>
          +38 044 62 685 70
        </p>
        <p>
          +38 044 62 685 71
        </p>
        <p>
          +38 044 62 685 72
        </p>
      </div>
      <div className={css.email}>
        <p>
          latin@dance.com
        </p>
        <p>
          info@dance.com
        </p>
        <p>
          hr@dance.com
        </p>
      </div>
      <div className={css.desc}>
        Наша школа находится в центре города. Очень легко добраться на метро или трамвае. Также есть парковка.
      </div>
    </div>
    </Element>
  )
}

export default Contact;