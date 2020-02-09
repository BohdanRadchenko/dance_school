import React from 'react';
import {Link} from 'react-scroll'
import {connect} from 'react-redux'
import * as controllerSelectors from '../../redux/controller/controllerSelectors'
import * as controllerAction from '../../redux/controller/controllerActions'
import menu from '../../assets/menu.json'
import css from './BurgerMenu.module.css'

const BurgerMenu = ({isOpen, handlerBurger}) => {
  return (
    <div className={isOpen ? css.container : css.containerNone}>
      {isOpen && (<nav className={isOpen ? css.burgerWrapper : css.burgerWrapperNone}>
          <ul className={css.menuList}>
            {menu.map(el => (
              <li className={css.menuItem}>
                <Link
                  to={el.name}
                  onClick={handlerBurger}
                  activeClass={css.activeLink}
                  className={css.menuLink}
                  spy={true}
                  smooth={true}
                >
                  {el.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>)}
    </div>
  )
}

const mSTP = state => ({
  isOpen : controllerSelectors.burgerMenu(state)
})

const mDTP = {
  handlerBurger : controllerAction.handlerBurger
}

export default connect(mSTP, mDTP)(BurgerMenu);