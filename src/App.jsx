import "./App.css";
import data from "./data";
import Grid from "./grid";

function App() {
  
    return (
    <main>
      <nav>
        <img
          className="logo"
          src="https://cg.okcedric.com/wp-content/uploads/2023/09/Logo-roue2-1-150x150.png"
          alt=""
        />
        <a className="nav-item" href="#">
          Contact
        </a>
      </nav>

      <div className="grid">
        <Grid data={data}/>
      </div>
    </main>
  );
}

export default App;
