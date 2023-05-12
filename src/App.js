import Events from "./components/Events";
import FeaturedComponent from "./components/FeaturedComponent";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import Home from "./components/Home";
import Other from "./components/Other";
import Social from "./components/Social";
import Story from "./components/Story";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div className="App">
      <Home />
      <Story />
      <Subscribe />
      <FeaturedComponent />
      <Social />
      <Other />
      <section>
        <div className="max-w-screen-lg mx-auto px-5 lg:flex lg:space-x-24">
          <GetInTouch />
          <Events />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
