import React from 'react';
import {connect} from 'react-redux'
import * as controllerSelectors from '../../redux/controller/controllerSelectors'
import * as controllerActions from '../../redux/controller/controllerActions'
import BurgerButton from "../BurgerButton/BurgerButton";
import css from './Header.module.css'

const Header = ({isOpen, handlerBurger}) => {
  return (
    <div className={css.wrap}>
    <div  className={css.container}>
      <div htmlFor='burger' className={css.wrapper}>
        <div className={css.titleWrapper}>
        <p className={css.title}>menu</p>
        </div>
        <BurgerButton id='burger' {...{isOpen, handlerBurger}}/>
      </div>
    </div>

    </div>
  )
}

const mSTP = state => ({
  isOpen : controllerSelectors.burgerMenu(state)
})

const mDTP = {
  handlerBurger : controllerActions.handlerBurger
}

export default connect(mSTP, mDTP)(Header);