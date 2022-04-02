import logo from './logo.svg';
import './App.css';


const App = () => {
  return (
  <div className="app-wrapper">
    <header className="header">
      <img className="logo" src="https://media.lpgenerator.ru/uploads/2019/07/11/1_thumb600x460.jpg" />
    </header>
    <nav className="nav">
      <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Messages</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Music</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </nav>
    <div className="content">
    <div>
    <img src="https://img1.akspic.ru/previews/9/0/2/6/6/166209/166209-osen-sezon-korichnevyj_cvet-rastenie-ekoregion-550x310.jpg"/>
    </div>
    <div>
    ava + description
    </div>
    <div>
      My posts
    </div>
    <div></div>
    <div></div>
    </div>
  </div>
  )
}

export default App;