import logo from './logo.svg';
import './App.css';

class App extends React.Component { 

  render() {
return (
  <div className="app">
  <h1>Hello</h1>
  <person />
  </div>
  );
}
}

 const Person = () => {
  return <p> I'm a functional component</p>
 }

export default App;
