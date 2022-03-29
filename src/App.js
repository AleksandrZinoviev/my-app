import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
  <div>
    <Header />
    <Teschnologies />
  </div>
  )
}

const Header = () => {
  return (
    <div className="Header">
      <a href='#'>Home</a>
      <a href='#'>News Feed</a>
      <a href='#'>Messages</a>
    </div>
  )
}

const Teschnologies = () => {
  return (
    <div>
      <ul>
        <li><a href='#'>HTML</a></li>
        <li><a href='#'>CSS</a></li>
        <li><a href='#'>JavaScript</a></li>
      </ul>
    </div>
  )
}
export default App;
