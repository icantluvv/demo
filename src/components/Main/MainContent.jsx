import React, { useState} from 'react'
import styles from './Main.module.css'
import MessageList from './Message/MessageList';
import MessageInput from './Message/MessageInput';
import {Carousel} from './Carousel/Carousel';
import first from './Images/1st.jpg'
import second from './Images/2nd.jpg'
import third from './Images/3rd.jpg'

import MainSide from '../MainSide/MainSide';

const MainContent = ({selectedMenuItem}) => {

  const [selectedPanel, setSelectedPanel] = useState('settings');

  const onButtonClick = (menu) => {
    console.log(`Button clicked for ${menu}`);
    setSelectedPanel(menu);
  };

  const [editableText, setEditableText] = useState('Enter your text...');

  const ClearContent = () => {
    setEditableText(' ');
  };

  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

 

  return (  
  <div>

    {selectedMenuItem === 'translate' && (
      <div className={styles.translatemenu}>

        <MessageList messages={messages}/>
        <MessageInput onSendMessage={handleSendMessage}/>
      </div>

    )}

    {selectedMenuItem === 'account' && selectedPanel === 'settings' && (

      <div className={styles.acc}>
        <div className={styles.accountbox}>

          <div className={styles.usersetting}>

            <h1 className={styles.settingname}>Настройки пользователя</h1>

            <div className={styles.inputinfo}>
              <div className={styles.left}>
                <input className={styles.nameinput} placeholder='Имя'></input>
              </div>
              <div className={styles.right}>
                <input className={styles.mailinput} placeholder='Почта'></input>
              </div>
            </div>

            <button className={styles.confirm}>
              <ul className={styles.textconfirm}>Ок</ul>
            </button>

          </div>
        </div>
        <MainSide onButtonClick={onButtonClick}/>
      </div>
    )}

    {selectedMenuItem === 'account' && selectedPanel === '2fa' && (

    <div className={styles.fa2}>
      <div className={styles.fa2_container}>
        <div className={styles.fa2_box}>
          <h1 className={styles.fa2_name}>Двухфакторная аунтефикация</h1>
          <div className={styles.fa2_inp}>
            <input className={styles.numbinp} placeholder='Введите ваш номер телефона'/>
            <input className={styles.smsbinp} placeholder='Код из СМС'/>
          </div>
          <div className={styles.fa2_buttons}>
            <button className={styles.delete2fa}><ul>Удалить 2FA</ul></button>
            <button className={styles.save2fa}><ul>Сохранить</ul></button>
          </div> 
        </div>

      </div>
      <MainSide onButtonClick={onButtonClick}/>
    </div>
    )}

    {selectedMenuItem === 'account' && selectedPanel === 'key' && (

    <div className={styles.key}>
      <div className={styles.key_container}>
        <div className={styles.key_box}>
          <h1 className={styles.key_name}>Пароль</h1>
          <input className={styles.current_key} placeholder="Текущий пароль"  />
          <input className={styles.new_key} placeholder="Новый пароль"  />
          <input className={styles.save_new_key} placeholder="Подтвердите новый пароль" />
          <button className={styles.confirm}>
              <ul className={styles.textconfirm}>Ок</ul>
          </button>
        </div>
        
      </div>

      <MainSide onButtonClick={onButtonClick}/>
    </div>
    )}

    {selectedMenuItem === 'contact' && (
      <div className={styles.contactboxs}>

        <div className={styles.infobox}>

          <Carousel>
            <div className={styles.item1}><img src={first} className={styles.first}/></div>
            <div className={styles.item2}><img src={second} className={styles.second}/></div>
            <div className={styles.item3}><img src={third} className={styles.third}/></div>
          </Carousel>

        </div>

        <div className={styles.contact_find}>
          
          <div className={styles.contact_text}>
            <div className={styles.inner_contact_text_box}>
              <h1>Информация</h1>
              <ul>Данный переводчик был создан студентами Донского Государственного Технического 
                Университета факультета ИОТ "Школа Икс" в рамках образовательного модуля
                на третьем курсе мейджора IT. Владелец этого мейджора и модуля - Смирнов Владимир Анатольевич. Здесь вы можете найти способ связаться с нами.</ul>
            </div>
          </div>

          <div className={styles.maptextbox}>

            <nav className={styles.textnavbox}>
              <h1>Контакты для связи:</h1>
              <button><ul>Телефон</ul></button>
              <button><ul>ВКонтакте</ul></button>
              <button><ul>Электронный адрес</ul></button>
            </nav>  
          </div>

        </div>
      </div>
    )}

  </div>
  )

}

export default MainContent;
