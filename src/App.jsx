import { useEffect } from "react";
import { getRandomRecipes } from "./app/recipeAPI";
import Interface from "./components/Interface";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MessageContainer from "./components/MessageContainer";
import "./styles/app.css";

const App = () => {
  useEffect(() => {
    getRandomRecipes();
    //console.log("useEffect run");
  }, []);

  return (
    <div className="App">
      <MessageContainer />
      <div className="appContainer">
        <header className="appHeader">
          <Header />
        </header>
        <main className="appMain">
          <Interface />
        </main>
      </div>
      <footer className="appFooter">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
