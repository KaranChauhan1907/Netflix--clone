import './App.css';
// c2fe80cfd4af3ab123fc4afb0c6394e8
import Header from "./Header/Header"
import Row from "./Row/Row"
import requests from "./requests"
function App() {
  return (
    <div className="App">
      <Header/>
      <Row title = "Netflix Originals" fetchurl={requests.fetchNetflixOriginals}/>
      <Row title = "Treading Now"fetchurl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
