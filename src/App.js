import "./App.css";
import "./App.css"; //import stylesheet
import netflixFate from "./images/netflixFate.png";
import netflixGambit from "./images/netflixGambit.png";
import netflixOutside from "./images/netflixOutside.png";
import netflixStarTrek from "./images/netflixStarTrek.png";
import netflixWitcher from "./images/netflixWitcher.png";
import bbcMorgan from "./images/bbcMorgan.png";
import bbcPandemic from "./images/bbcPandemic.png";
import bbcPay from "./images/bbcPay.png";
import bbcUnilever from "./images/bbcUnilever.png";
import airbnbHome from "./images/airbnbHome.png";
import airbnbUnique from "./images/airbnbUnique.png";
import airbnbCabin from "./images/airbnbCabin.png";
import airbnbPets from "./images/airbnbPets.png";




function App() {
  return (
    <>
      <div className="images">
        <Poster title={netflixFate} />
        <Poster title={netflixGambit} />
        <Poster title={netflixOutside} />
        <Poster title={netflixStarTrek} />
        <Poster title={netflixWitcher} />
      </div>
      <div className="bbcarticles">
        <Bbc
          image={bbcMorgan}
          headline={"this is the headline"}
          article={"this is the article"}
        />
        <Bbc
          image={bbcPandemic}
          headline={"this is the headline"}
          article={"this is the article"}
        />
        <Bbc
          image={bbcPay}
          headline={"this is the headline"}
          article={"this is the article"}
        />
        <Bbc
          image={bbcUnilever}
          headline={"this is the headline"}
          article={"this is the article"}
          />
          </div>
          <div className="airbnb">
            <Airbnb image={airbnbHome} bnbtitle={<b>Entire Homes</b>}/>
            <Airbnb image={airbnbUnique} bnbtitle={<b>Unique Stays</b>}/>
            <Airbnb image={airbnbCabin} bnbtitle={<b>Cabins and cottages</b>}/>
            <Airbnb image={airbnbPets} bnbtitle={<b>Pets allowed</b>}/>
          </div>
        </>
  );
}

function Poster(props) {
  console.log(props);
  return (
  <div>
  <img src={props.title} alt="" />
  </div>
  );
}

function Bbc(props) {
  console.log(props);
  return (
    <div className="airbnbitems">
      <img src={props.image} alt="" />
      <h2>{props.headline}</h2>
      <p>{props.article}</p>
    </div>
  );
}

function Airbnb(props) {
  return (
    <div className="airbnbitems">
   <img src={props.image} alt=""/>
   <p>{props.bnbtitle}</p> 
    </div>
  )
}
export default App;
