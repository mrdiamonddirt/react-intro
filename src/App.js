import logo from './logo.svg';
import './App.css';

  const App = () => {
    return (
    <div>
    <h1>I'm the root component</h1>
    <Person name="Dan" age="34" />
    <Person name="Stuart" age="30-something" />
    <Person name="Ben" age="21" />
    </div>
    );
    }
    
    const Person = (props) => {
    return (
    <p> Hi I'm {props.name} and I'm {props.age} </p>
    );
    };
  
  export default App;
