import { useSelector } from 'react-redux';
import Participants from './containers/Participants';
import Registration from './containers/Registration';
import './App.css';




function App() {
  const participants = useSelector(state => state.participants);

  return (
    <div className="App">
      <Participants/>
      <Registration/>
    </div>
  );
}

export default App;
