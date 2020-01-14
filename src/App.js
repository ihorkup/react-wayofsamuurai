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

let App = (props) => {

  return (
    <BrowserRouter> {/*Працює в поєднанні з елементом Route */}
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile posts={props.state.ProfilePage.posts} />} />
          <Route path='/dialogs' render={() => <Dialogs dialogs={props.state.DialogsPage.dialogs} messages={props.state.DialogsPage.messages} src={props.state.DialogsPage.src} />} />
          <Route path='/media' render={() => <Media />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
