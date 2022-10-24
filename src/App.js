import logo from './logo.svg';
import './App.css';
import './App.css' //import stylesheet

const App = () => {
  return (
  <div>
  <h1>I'm the root component</h1>
  <Person name="Dan" age="34" title="chef"/>
  <Person name="Stuart" age="30-something" title="dictator" />
  <Person name="Ben" age="21" title="cleaner" />
  </div>
  );
  }

  const Person = (props) => {
  return (
    <>
  <p> Hi I'm {props.name} </p>
  <Job title={props.title}/>
    </>
  );
  };

function Job(props){
 return (
  <p>i am a {props.title}</p>
 )

}

  export default App;
