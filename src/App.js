import logo from './logo.svg';
import './App.css';
import Bilesenim from './bilesenim';
function XTaneBilesenim(props){
  let dizi=[]; 
  for(let i = 0;i<props.xkere;i++){
    dizi.push(<Bilesenim renk={props.renk}/>)
  }
  return dizi;

}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <XTaneBilesenim xkere="4" />
        <p>
          <Bilesenim/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
