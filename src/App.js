import NavigationBar from "./components/NavigationBar.js";
import ContentContainer from "./components/ContentContainer.js";
import BackgroundSection from "./components/BackgroundSection.js";
import Header from "./components/Header.js";
import Skills from "./components/Skills.js";
import Projects from "./components/Projects.js";
import Footer from "./components/Footer.js";
import "./App.css";
import { useState, useEffect } from "react";
import CheckResolution from "./components/CheckResolution.js";


function App() {
  const windowSize = CheckResolution();
  // console.log(windowSize)
  const [headerHeight, setHeaderHeight] = useState("calc(100vh - 100px)");

  useEffect(() => {
if(windowSize === "mobile"){
  setHeaderHeight("300px")
}else{
  setHeaderHeight("calc(100vh - 100px)")
}
  }, [windowSize]);

  return (
    <div className="App">
      {/* Navigation Bar */}
      <BackgroundSection bgColor="#182225" bgHeight="100px">
        <NavigationBar></NavigationBar>
      </BackgroundSection>

      {/* Header */}
      {/* <BackgroundSection
        bgHeight="calc(100vh - 100px)"
        minBgHeight="500px"
        bgColor="#182225"
      >
        <Header></Header>
      </BackgroundSection> */}
            <BackgroundSection
        bgHeight={headerHeight}
        bgColor="#182225"
      >
        <Header></Header>
      </BackgroundSection>

      {/* Skills */}
      <BackgroundSection bgColor="#182225">
        <ContentContainer title="Skills">
          <Skills></Skills>
        </ContentContainer>
      </BackgroundSection>

      {/* Projects */}
      <BackgroundSection bgColor="#182225">
        <ContentContainer title="My Projects">
          <Projects></Projects>
        </ContentContainer>
      </BackgroundSection>

      {/* Footer */}
      <Footer></Footer>

    </div>
  );
}

export default App;
