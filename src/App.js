import './App.css';

import Greetingf from './components/pure/greetingf';

function App() {
  return (
    <div className="App">
      <h1>Esto es un h1</h1>
      {/* <Greeting name="Cristian"></Greeting> */}
      <Greetingf name="Cristian"></Greetingf>
    </div>
  );
}

export default App;
