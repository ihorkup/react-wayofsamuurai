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
import Friends from './components/Friends/Friends';

let App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.FriendsPage} />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile state={props.state.ProfilePage} />} />
          <Route path='/dialogs' render={() => <Dialogs state={props.state.DialogsPage} />} />
          <Route path='/media' render={() => <Media />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route exact path='/friends' render={() => <Friends state={props.state.FriendsPage}/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
