import './App.css';
// c2fe80cfd4af3ab123fc4afb0c6394e8
import Header from "./Header/Header"
import Row from "./Row/Row"
import requests from "./requests"
import Banner from "./Banner/Banner"
function App() {
  return (
    <div className="app">
      <Header/>
      <Banner/>
      <Row 
      title = "Netflix Originals" 
      fetchurl={requests.fetchNetflixOriginals}
      isLargeRow />
      <Row title = "Treading Now"fetchurl={requests.fetchTrending}/>
      <Row title = "Top Rated"fetchurl={requests.fetchTopRated}/>
      <Row title = "Action Movies"fetchurl={requests.fetchActionMovies}/>
      <Row title = "Comedy Movies"fetchurl={requests.fetchComedyMovies}/>
      <Row title = "Horror Movies"fetchurl={requests.fetchHorrorMovies}/>
      <Row title = "Romance Movies"fetchurl={requests.fetchRomanceMovies}/>
      <Row title = "Documentaries"fetchurl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
