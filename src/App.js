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
    <img  src={netflixFate} className="image1" alt=""/>
    <img  src={netflixGambit} className="image2" alt=""/>
    <img  src={netflixOutside} className="image3" alt=""/>
    <img  src={netflixStarTrek} className="image4" alt=""/>
    <img  src={netflixWitcher} className="image5" alt=""/>
    </div>
  )
}

  export default App;
