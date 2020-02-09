import React from 'react';
import {Element} from 'react-scroll'
import css from './DanceList.module.css'

const DanceList = () => {
  return (
    <Element
      className={css.element}
      name="dance">
    <div className={css.container}>
     <ul className={css.list}>
       <li className={css.item}>
         <div className={css.imageWrapper}>
           <div className={[css.image, css.salsa].join(' ')}></div>
         </div>
         <div className={css.textWrapper}>
           <div className={css.textContent}>
            <h1 className={css.title}>Сальса</h1>
            <p className={css.desc}>Сальса - классический клубный латиноамериканский танец. Сальса сумела гармонично объединить типичные народные африканские танцы с кубинским фольклором, бальными танцами и элементами акробатики.</p>
           </div>
         </div>
       </li>

       <li className={css.item}>
         <div className={css.imageWrapper}>
           <div className={[css.image, css.flamenco].join(' ')}></div>
         </div>
         <div className={css.textWrapper}>
           <div className={css.textContent}>
             <h1 className={css.title}>Фламенко</h1>
             <p className={css.desc}>Фламенко - страстный и эмоциональный южно-испанский танец, имеет сложный ритм и специфическую технику исполнения.</p>
           </div>
         </div>
       </li>

       <li className={css.item}>
         <div className={css.imageWrapper}>
           <div className={[css.image, css.tango].join(' ')}></div>
         </div>
         <div className={css.textWrapper}>
           <div className={css.textContent}>
             <h1 className={css.title}>Танго</h1>
             <p className={css.desc}>Бальный латиноамериканский парный танец с энергичным и четким ритмом.</p>
           </div>
         </div>
       </li>

     </ul>

      <div className={css.rec}>
        <p className={css.textSubtitle}>
          Занятия проходят каждый день. Найдите подходящую группу и создайте для себя расписание.
        </p>
        <button className={css.button}>
          Расписание
        </button>
      </div>
    </div>
    </Element>
  )
}

export default DanceList;