import React from 'react'
import "../styles/Header.css"
import "../styles/Header2.css"

const Header = () => {
    const lorem = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";


    return (
      <div className="headerContainer">
        {/* <p className="headerText">Hello! My name is</p> */}
        {/* <h1 className="headerText headerName">Lek Jing Kai</h1> */}
        <div class="box">
          <div class="title">
            <span class="block"></span>
            <h2>
              LEK JING KAI<span></span>
            </h2>
          </div>
        </div>
        <h1 className="headerDesc">Front-end developer</h1>
        <p className="headerText">Hello there! I'm an aspiring front-end developer who wants to provide high-impact modern web applications. Passionate about learning new things to increase the quality of my web applications.</p>
      </div>
    );
}

export default Header
