import logo from './logo.svg';
import './App.css';
import './App.css' //import stylesheet
import netflixFate from './images/netflixFate.png'
import netflixGambit from './images/netflixGambit.png'
import netflixOutside from './images/netflixOutside.png'
import netflixStarTrek from './images/netflixStarTrek.png'
import netflixWitcher from './images/netflixWitcher.png'


function App() {
  return (
    <div className="images">
    <Poster title={netflixFate}/>
    <Poster title={netflixGambit}/>
    <Poster title={netflixOutside}/>
    <Poster title={netflixStarTrek}/>
    <Poster title={netflixWitcher}/>
    </div>
  )
}

function Poster(props) {
  console.log(props)
  return (
    <>
    <img src={props.title} alt=""/>
  </>
  )
}

  export default App;
