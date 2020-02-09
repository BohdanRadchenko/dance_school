import React from 'react';
import {Element} from 'react-scroll'
import css from './Teachers.module.css'

const Teachers = () => {
  return (

    <Element name="teachers">
    <div className={css.container}>
     <h1 className={css.title}>Преподаватели</h1>
      <p className={css.subtitle}>Наши преподаватели — настоящие профессионалы с большим опытом работы и наградами за престижные танцевальные соревнования.</p>
      <ul className={css.list}>

        <li className={css.item}>
          <div className={[css.photoWrapper, css.julia].join(' ')}/>
          <div className={css.textWrapper}>
            <h2 className={css.name}>
              Юля
            </h2>
            <p className={css.desc}>
              Неоднократно проходила обучение в Париже. Танцовщица и хореограф по направлениям Contemporary, Сальса и RnB.
            </p>
          </div>
        </li>

        <li className={css.item}>
          <div className={[css.photoWrapper, css.dima].join(' ')}/>
          <div className={css.textWrapper}>
            <h2 className={css.name}>
              Дима
            </h2>
            <p className={css.desc}>
              Педагог-хореограф современных танцев. Опыт работы более 10 лет.            </p>
          </div>
        </li>

        <li className={css.item}>
          <div className={[css.photoWrapper, css.cristina].join(' ')}/>
          <div className={css.textWrapper}>
            <h2 className={css.name}>
              Кристина
            </h2>
            <p className={css.desc}>
              Ведет занятия по румбе для детей и взрослых. Опыт преподавания 8 лет.             </p>
          </div>
        </li>

        <li className={css.item}>
          <div className={[css.photoWrapper, css.yana].join(' ')}/>
          <div className={css.textWrapper}>
            <h2 className={css.name}>
              Яна
            </h2>
            <p className={css.desc}>
              Педагог с высшим образованием балетмейстера, ведет занятия по классической хореографии, румбе и сальсе.            </p>
          </div>
        </li>

        <li className={css.item}>
          <div className={[css.photoWrapper, css.anton].join(' ')}/>
          <div className={css.textWrapper}>
            <h2 className={css.name}>
              Антон
            </h2>
            <p className={css.desc}>
              Ведет занятия по contemporary, hip-hop, джаз-модерну, stretching для детей и взрослых.            </p>
          </div>
        </li>

        <li className={css.item}>
          <div className={[css.photoWrapper, css.danil].join(' ')}/>
          <div className={css.textWrapper}>
            <h2 className={css.name}>
              Данил
            </h2>
            <p className={css.desc}>
              Педагог-хореограф танго. Опыт преподавания больше 10 лет            </p>
          </div>
        </li>

      </ul>
    </div>
    </Element>
  )
}

export default Teachers;