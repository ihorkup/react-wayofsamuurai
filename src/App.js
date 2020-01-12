import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Media from './components/Media/Media';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

let App = () => {
  return (
    <BrowserRouter> {/*Працює в поєднанні з елементом Route */}
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' component={Profile} /> {/*Route стежать за URL і якщо вона рівна або має корінь (path) - відкрити (component)*/}
          <Route path='/dialogs' component={Dialogs} /> {/*exact - допомагає Route відстежити ТОЧНИЙ URL без корення (не "/dialogs/1")*/}
          <Route path='/media' component={Media} />
          <Route path='/music' component={Music} />
          <Route path='/news' component={News} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
