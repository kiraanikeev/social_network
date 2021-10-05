
import './App.css';
import Profil from './components/Profil/Profil';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route}  from 'react-router-dom'
function App(props) {

  return (
    <BrowserRouter>
    <div className="app-wripper">
<Header classname="header"/>
<Nav className="nav"/>
<div className="content">

{/* <Route path="/profil"component={Profil}></Route>
<Route path="/dialogs"component={Dialogs}></Route> */}
<Route path="/profil" render={()=> <Profil profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />} />
<Route path="/dialogs" render={()=> <Dialogs dialogePage={props.state.dialogePage} />} />
</div>

    </div>
    </BrowserRouter>
  );
}

export default App;
