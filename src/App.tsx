import './App.css';
import ActivitiesContainer from './components/ActivitiesContainer';
import SuggestedPaces from './components/SuggestedPaces';


const App: React.FC = () => {
  return (
    <div className="App">
      <h1>
        Piku 🏃🏽‍♀️ Boston
      </h1>
      <br></br>
      <br></br>
      <ActivitiesContainer/>
      <br></br>
      <br></br>
      <SuggestedPaces/>
    </div>
  );
}

export default App;
