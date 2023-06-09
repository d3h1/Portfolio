import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  RandomBackgroundCanvas,
} from "./components";

const App = () => {
  return (
      <BrowserRouter>
        <Navbar />
        <div className="relative z=0">
          <Hero />
          <RandomBackgroundCanvas />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Contact />
          
        {/* </div> */}
      </BrowserRouter>
    
  );
};

export default App;
