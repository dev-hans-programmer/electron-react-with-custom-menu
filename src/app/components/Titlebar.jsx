import React from 'react';
import closeImg from '../resources/close.png';
import minimizeImg from '../resources/minimize.png';
import squaresImg from '../resources/squares.png';
import './titlebar.css';

function TitleBar() {
  function close() {
    // ipcRenderer.send('close', {});
    window.app.close();
  }

  function maximize() {
    window.app.maximize();
    // ipcRenderer.send('maximize', {});
  }

  function minimize() {
    window.app.minimize();
    // ipcRenderer.send('minimize', {});
  }

  return (
    <div className='title-bar'>
      <div className='right-icons'>
        <button className='menu-icon' onClick={minimize}>
          <img src={minimizeImg} />
        </button>
        <button className='menu-icon' onClick={maximize}>
          <img src={squaresImg} />
        </button>
        <button className='menu-icon cross' onClick={close}>
          <img src={closeImg} />
        </button>
      </div>
    </div>
  );
}

export default TitleBar;
