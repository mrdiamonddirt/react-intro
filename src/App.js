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
        <div>
        <Poster title={netflixFate} />
        </div>
        <div>
        <Poster title={netflixGambit} />
        </div>
        <div>
        <Poster title={netflixOutside} />
        </div>
        <div>
        <Poster title={netflixStarTrek} />
        </div>
        <div>
        <Poster title={netflixWitcher} />
        </div>
      </div>
      <div className="bbcarticles">
        <div className="bbcarticle">
        <Bbc
          image={bbcMorgan}
          headline={"this is the headline"}
          article={"this is the article"}
        />
        </div>
        <div className="bbcarticle">
        <Bbc
          image={bbcPandemic}
          headline={"this is the headline"}
          article={"this is the article"}
        />
        </div>
        <div className="bbcarticle">
        <Bbc
          image={bbcPay}
          headline={"this is the headline"}
          article={"this is the article"}
        />
        </div>
        <div className="bbcarticle">
        <Bbc
          image={bbcUnilever}
          headline={"this is the headline"}
          article={"this is the article"}
          />
          </div>
          </div>
          <div className="airbnb">
            <div className="airbnbitems">
            <Airbnb image={airbnbHome} bnbtitle={<b>Entire Homes</b>}/>
            </div>
            <div className="airbnbitems">
            <Airbnb image={airbnbUnique} bnbtitle={<b>Unique Stays</b>}/>
            </div>
            <div className="airbnbitems">
            <Airbnb image={airbnbCabin} bnbtitle={<b>Cabins and cottages</b>}/>
            </div>
            <div className="airbnbitems">
            <Airbnb image={airbnbPets} bnbtitle={<b>Pets allowed</b>}/>
            </div>
          </div>
        </>
  );
}

function Poster(props) {
  console.log(props);
  return (<img src={props.title} alt="" />
  );
}

function Bbc(props) {
  console.log(props);
  return (
    <>
      <img src={props.image} alt="" />
      <h2>{props.headline}</h2>
      <p>{props.article}</p>
    </>
  );
}

function Airbnb(props) {
  return (
    <>
   <img src={props.image} alt=""/>
   <p>{props.bnbtitle}</p> 
    </>
  )
}
export default App;
