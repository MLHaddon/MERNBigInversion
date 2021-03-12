import './App.css';
import PersonCard from './Models/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Jane" lastName="Doe" age={28} hairColor="Dark-Blonde"/>
      <PersonCard firstName="John" lastName="Doe" age={30} hairColor="Brown"/>
      <PersonCard firstName="Filmore" lastName="ford" age={72} hairColor="black"/>
      <PersonCard firstName="Maria" lastName="Snap" age={35} hairColor="Dark-Blonde"/>
    </div>
  );
}

export default App;

