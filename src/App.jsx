import DigitalClock from './components/DigitalClock/DigitalClock';
import CountDown from './components/CountDown/CountDown'
import StopWatch from './components/StopWatch/StopWatch'
import './App.scss';

function App() {
  return (
    <div className="App">
      <DigitalClock />
      <CountDown />
      <StopWatch />    </div>
  );
}

export default App;
