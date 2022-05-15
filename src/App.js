import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
          <div className="app-wrapper-content">
          <Routes>
                 <Route path="/dialogs/*" element={<Dialogs dialogsListArray={props.dialogsListArray} messagesListArray={props.messagesListArray}/>}/>
                 <Route path="/main" element={<Main postArray={props.postArray}/>}/>
             </Routes>
          </div>
      </div>
      </BrowserRouter>)
}

export default App;