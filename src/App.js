import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'

function App() {
  return (
    <div className="App">
      <Message/>
    </div>
  );
}

export default App;
/*<header className="App-header">
<Greet name="Bruce" heroName="Batman">This is the children props</Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button></Greet>
      <Greet name="Diana" heroName="Wonderwoman"/>
      <Welcome name="Bruce" heroName="Batman"/>
      <Welcome name="uuu" heroName="lll"/>
      <Welcome name="kkk" heroName="ooo"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
        <Welcome/>
      <Hello/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/