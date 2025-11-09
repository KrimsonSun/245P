// CSS and other resources
import "./App.css";

// Components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <Sidebar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
