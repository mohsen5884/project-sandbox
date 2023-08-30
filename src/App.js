import "./App.css";
// import RandomizeColor from "./projects/02-randomize-color/RandomizeColor";
//  import SignatureApp from "./projects/01-signature-Date-app/SignatureApp";
import LikeMyPhoto from "./projects/03-like-my-photo/LikeMyPhoto";

function App() {
  return (
    <div className="App">
      <h1>Projects:</h1>
      <div className="app-container">
        {/* <SignatureApp />  */}
        {/* <RandomizeColor/> */}
        <LikeMyPhoto />
      </div>
    </div>
  );
}

export default App;
