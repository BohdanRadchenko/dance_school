import React from 'react';
import css from "./BurgerButton.module.css";

const BurgerButton = ({isOpen, handlerBurger}) => {
  return (
    <div
      onClick={handlerBurger}
      className={css.burgerButton}>
        <div className={!isOpen ? css.burgerLineOpen : css.burgerLineClose}/>
        <div className={!isOpen ? css.burgerLineOpen : css.burgerLineClose}/>
        <div className={!isOpen ? css.burgerLineOpen : css.burgerLineClose}/>
        <div className={!isOpen ? css.burgerLineOpen : css.burgerLineClose}/>
    </div>
  )
}

export default BurgerButton;