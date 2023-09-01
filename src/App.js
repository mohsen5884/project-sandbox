import "./App.css";
//  import SignatureApp from "./projects/01-signature-Date-app/SignatureApp";
// import RandomizeColor from "./projects/02-randomize-color/RandomizeColor";
// import LikeMyPhoto from "./projects/03-like-my-photo/LikeMyPhoto";
//import ReactButtonComponnent from "./projects/04-react-button-componnent/ReactButtonComponnent";
import AlertApp from "./projects/05-alert-app/AlertApp";

function App() {
  return (
    <div className="App">
      <h1>Projects:</h1>
      <div className="app-container">
        {/* <SignatureApp />  */}
        {/* <RandomizeColor/> */}
        {/* <LikeMyPhoto /> */}
        {/* <ReactButtonComponnent /> */}
        <AlertApp/>
      </div>
    </div>
  );
}

export default App;
