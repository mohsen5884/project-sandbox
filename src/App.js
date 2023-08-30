import "./App.css";
import RandomizeColor from "./projects/02-randomize-color/RandomizeColor";
// import SignatureApp from "./projects/01-signature-Date-app/SignatureApp";

function App() {
  return (
    <div className="App">
      <h1>Projects:</h1>
      <div className="app-container">
        {/* <SignatureApp />  */}
        <RandomizeColor/>
      </div>
    </div>
  );
}

export default App;
