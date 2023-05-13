import './Screens.css';
import { useSelector } from 'react-redux';
import HomeScreen from './HomeScreen.js'
import InstructionsScreen from './InstructionsScreen.js'
import AnalysisScreen from './AnalysisScreen.js'
import ResultsScreen from './ResultsScreen.js'

const Screens = () => {

  const state = useSelector(state => state.main)
  const screen = state.screen;

  return (
    <div className="screens">
      {screen === "home" && <HomeScreen/>}
      {screen === "instructions" && <InstructionsScreen/>}
      {screen === "analysis" && <AnalysisScreen/>}
      {screen === "results" && <ResultsScreen/>}
    </div>
  );
}

export default Screens;
