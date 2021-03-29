import logo from "./logo.svg";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Projects from "./components/Projects.js";
import Articles from "./components/Articles.js";
import About from "./components/About.js";
import NavigationBar from "./components/NavigationBar.js";
import TextBody from "./components/TextBody.js";
import "./App.css";
import ContentContainer from "./components/ContentContainer.js";
import BackgroundSection from "./components/BackgroundSection.js";
import Image from "./components/Image.js";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Skills from "./components/Skills.js"

function App() {
  const headerTitle = "Aspiring front-end developer";
  const headerDescription = "I have a passion to code aesthetically";
  const introduction = "Hello, I'm Jing Kai, nice to meet you.";
  const lorem = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
const oldColor = "#2b2e4a"
  return (
    <BrowserRouter>
      <div className="App">
        <BackgroundSection bgColor="#182225" bgHeight="100px">
        <NavigationBar></NavigationBar>
        </BackgroundSection>

        <BackgroundSection
          bgHeight="calc(100vh - 100px)"
          minBgHeight="500px"
          bgColor="#182225"
        >
          {/* <h1>Jing kai</h1>
          <TextBody headerText={headerTitle} text={headerDescription} margintopVal="100px"></TextBody>
          <Image></Image> */}
          <Header></Header>
        </BackgroundSection>

        <BackgroundSection bgColor="#182225">
        <ContentContainer title="About Me">
        {/* <TextBody headerText={introduction} text={lorem}></TextBody> */}
        <About></About>
          </ContentContainer>
        </BackgroundSection>

        <BackgroundSection bgColor="#182225">
          <ContentContainer title="Skills">
            <Skills></Skills>
          </ContentContainer>
        </BackgroundSection>

        <BackgroundSection bgColor="#182225">
          <ContentContainer title="My Projects">
            <Projects></Projects>
          </ContentContainer>
        </BackgroundSection>

        {/* Set up the router */}
        {/* <Route exact path="/portfolio" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} /> */}

        {/* Set up the Links */}
        {/* <Link to="/" className="item">
              Projects
            </Link>
            <Link to="/articles" className="item">
              Articles
            </Link>
            <Link to="/about" className="item">
              About
            </Link> */}
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
