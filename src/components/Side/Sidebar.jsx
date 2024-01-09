
import React from 'react';
import styles from './Sidebar.module.css'
import x from "./x.svg";


const Sidebar = ({ onButtonClick }) => {

  return (
    <div>

      <sidebar className={styles.Sidebarpanel}>

        <div className={styles.sidepanel}>

          <span className={styles.sidelogo}>
             <img src={x} alt="" className={styles.logotip}/>
          </span>

          <nav className={styles.sidenav}>
            <button onClick={() => onButtonClick('translate')}><ul className={styles.translate}>Переводчик</ul></button>
            <button onClick={() => onButtonClick('account')}><ul className={styles.account}>Аккаунт</ul></button>
            <button onClick={() => onButtonClick('contact')}><ul className={styles.contact}>Контакты</ul></button>
          </nav>


        </div>
        
      </sidebar>

    </div>
  );
};

export default Sidebar
