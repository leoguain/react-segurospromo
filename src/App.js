import "./App.css";
import { Header } from "./components/Header";
import { LandingPage } from "./components/LandingPage";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* Componente Header da página */}
      <Header />
      {/* Componente Main da página */}
      <LandingPage />
      {/* Componente Footer da página */}
      <Footer />
    </div>
  );
}

export default App;
