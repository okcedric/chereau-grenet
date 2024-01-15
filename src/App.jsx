import "./App.css";
import data from "./data";
import Grid from "./grid";
import Contact from "./Contact";
import { useState } from "react";

function App() {
  
  const [overlay, setOverlay] = useState(false);

  const toggleContact = ()=>{
    setOverlay(!overlay);
  }

    return (
      <main>
        <nav>
          <img
            loading="lazy"
            className="logo"
            src="https://cg.okcedric.com/wp-content/uploads/2023/09/Logo-roue2-1-150x150.png"
            alt=""
          />
          <a onClick={toggleContact} className="nav-item" href="#">
            Contact
          </a>
        </nav>

        <div className="grid">
          <Grid data={data} />
        </div>
        {overlay && <Contact toggleContact={toggleContact} />}
      </main>
    );
}

export default App;
