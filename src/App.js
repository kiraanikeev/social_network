import React from 'react';
import './App.css';
import Profil from './components/Profil/Profil';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import DialogsContainer from './components/Dialogs/DiologsContainer';
import UsersContainer from './components/Users/UsersContainer';
import { Route}  from 'react-router-dom'

const App = () => {

  return (
    <div className="app-wripper">
<Header/>
<Nav />
<div className="content">
    <Route path='/dialogs'
    render={ () => <DialogsContainer /> }/>
    <Route path='/profil'
    render={ () => <Profil /> }/>
    <Route path='/users'
    render={ () => <UsersContainer /> }/>
</div>
 </div>
        )
}

export default App;
