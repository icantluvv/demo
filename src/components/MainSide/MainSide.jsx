// MainSide.jsx

import React from 'react';
import styles from '../MainSide/MainSide.module.css';

const MainSide = ({ selectedPanel, onButtonClick }) => {
  console.log('selectedPanel:', selectedPanel);

  return (
    <div className={styles.MainSideBox}>
      {selectedPanel === 'settings' && (
        <div className={styles.settings_cont}>

          
        </div>

      )}

      {selectedPanel === '2fa' && (
        <div className={styles.fa2}>
          {/* Контент для панели 1 */}
        </div>
      )}

      {selectedPanel === 'key' && (
        <div className={styles.key}>
          {/* Контент для панели 2 */}
        </div>
      )}

      <nav className={styles.infocard}>
            <div className={styles.infonav}>
              <button onClick={() => onButtonClick('settings')}><ul>Пользователь</ul></button>
              <button onClick={() => onButtonClick('2fa')}><ul>2FA</ul></button>
              <button onClick={() => onButtonClick('key')}><ul>Пароль</ul></button>
            </div>
            
          </nav> 
    </div>
  );
};

export default MainSide;
