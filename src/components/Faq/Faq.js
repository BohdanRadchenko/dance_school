import React from 'react';
import {Element} from 'react-scroll'
import css from './Faq.module.css'

const Faq = () => {
  return (
    <Element className={css.element} name="faq">
    <div className={css.container}>
      <h1 className={css.title}>
        Вопросы
      </h1>
      <ul className={css.list}>

        <li className={css.item}>
          <div className={css.leftSide}>
            <div className={css.numWrapper}>
              1
            </div>
          </div>
          <div className={css.rigthSide}>
            <h2 className={css.quesTitle}>
              Как начать новичку?
            </h2>
            <p className={css.questAnswer}>
              Выбирайте начинающие группы, в них не требуют специальной подготовки. Главное - это желание научиться танцевать.
            </p>
          </div>
        </li>

        <li className={css.item}>
          <div className={css.leftSide}>
            <div className={css.numWrapper}>
              2
            </div>
          </div>
          <div className={css.rigthSide}>
            <h2 className={css.quesTitle}>
              Можно ли приходить в группу, занятия в которой уже идут?             </h2>
            <p className={css.questAnswer}>
              Да, можно приходить в начинающие группы, в которые продолжается набор.            </p>
          </div>
        </li>

        <li className={css.item}>
          <div className={css.leftSide}>
            <div className={css.numWrapper}>
              3
            </div>
          </div>
          <div className={css.rigthSide}>
            <h2 className={css.quesTitle}>
              Сколько по времени длится урок?
            </h2>
            <p className={css.questAnswer}>
              Каждый урок длится 90 минут, перерыв длится 10 минут.
            </p>
          </div>
        </li>

        <li className={css.item}>
          <div className={css.leftSide}>
            <div className={css.numWrapper}>
              4
            </div>
          </div>
          <div className={css.rigthSide}>
            <h2 className={css.quesTitle}>
              Есть ли у вас уроки по зумбе?
            </h2>
            <p className={css.questAnswer}>
              Планируются в скором будущем. Мы рады добавлять в программу интересные популярные направления
            </p>
          </div>
        </li>

        <li className={css.item}>
          <div className={css.leftSide}>
            <div className={css.numWrapper}>
              5
            </div>
          </div>
          <div className={css.rigthSide}>
            <h2 className={css.quesTitle}>
              В чем тренироваться?
            </h2>
            <p className={css.questAnswer}>
              В любой спортивная одежде и легких кроссовках, в которых будет комфортно двигаться
            </p>
          </div>
        </li>

        <li className={css.item}>
          <div className={css.leftSide}>
            <div className={css.numWrapper}>
              6
            </div>
          </div>
          <div className={css.rigthSide}>
            <h2 className={css.quesTitle}>
              Проходят ли у вас мастер-классы с известными танцорами?
            </h2>
            <p className={css.questAnswer}>
              Да! Несколько раз в год. Они будут анонсированы на нашем сайте или в рассылке.
            </p>
          </div>
        </li>

      </ul>
    </div>
    </Element>
  )
}

export default Faq;