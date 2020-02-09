import React, { useState } from 'react';
import comments from '../../assets/comments.json'
import css from './Slider.module.css'

const Slider = () => {

  const [count, setCount] = useState(1)

  const changeHandler = e => {
    setCount(Number(e.target.value))
  }

  const handleClick = e => {
    if (e.target.title === 'prev') {
      if(count > 1) {
        setCount(count - 1)
      }
    }
    if (e.target.title === 'next') {
      if(count < comments.length) {
        setCount(count + 1)
      }
    }
    console.log(e.target.title)
  }

  return (
    <div className={css.container}>
      <div className={css.sliderWrapper}>
        <button
        disabled={count === 1}
          onClick={e => handleClick(e)}
          title='prev'
          className={[css.prevButton, css.sliderButton].join(' ')}>
          <i className="fa slider-arrows arrows-left fa-chevron-left"/>
        </button>

        <div className={css.slider}>
          {/*SLIDER*/}
          <ul className={css.sliderList}>
          {comments.filter(item => item.id === count).map(el => (
          <li key={el.id} className={css.item}>
            <div className={css.photoWrapper}>
            <img
              className={css.photo}
              src={el.photo} alt=""/>
            </div>
            <div className={css.desc}>
            <p className={css.name}>{el.name}</p>
            <p className={css.position}>{el.position}</p>
            <p className={css.text}>{el.text}</p>
            </div>
          </li>
          ))}
          </ul>

          {/*RADIO BUTTON*/}
          <ul className={css.radioList}>
            {comments.map(el => (
              <li key={el.id} className={css.radioItem}>
                <input type="radio"
                       className={css.radioInput}
                       onChange={e => changeHandler(e)}
                       name='position'
                       value={el.id}
                       checked={el.id === count}
                />
              </li>
            ))}
          </ul>
        </div>

        <button
          disabled={count === comments.length}
          onClick={e => handleClick(e)}
          title='next'
          className={[css.nextButton, css.sliderButton].join(' ')}>
          <i className="fa slider-arrows arrows-right fa-chevron-right"></i>
        </button>
      </div>
    </div>
  )
}

export default Slider;