import logo from "./logo.svg";
import "./App.css";
import HeaderScreen from "./HeaderScreen";
import Up1 from "./Up1/Up1";
import Up2 from "./Up2/Up2";
import Small from "./Small";
import Small2 from "./Small2/Small2";
import Begin from "./Begin/Start";
import Dev from "./Dev/Dev";
import Link from "./Link/Link";

function App() {
  return (
    <div>
      {/* <Up1 /> */}
      <Up2 />
      <HeaderScreen />
      <br />
      <Small />
      <Small2 />
      <Begin />
      <Dev />
      <Link />
    </div>
  );
}

export default App;
