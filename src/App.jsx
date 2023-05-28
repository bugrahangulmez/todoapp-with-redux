import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

const App = () => {
  return (
    <div className="todoapp">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
export default App;
