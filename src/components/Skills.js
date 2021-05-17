import React from 'react'
import Button from './Button'
import "../styles/Skills.css"
import htmlLogo from "../assets/html-icon.png"
import cssLogo from "../assets/css-icon.png"
import jsLogo from "../assets/javascript-icon.png"
import reactLogo from "../assets/react-icon.png"
import restLogo from "../assets/rest-api-icon-white.png"

const Skills = () => {
    return (
        <div className="skillContainer">
            <Button btnLogoImage={htmlLogo} btnName={"HTML"}></Button>
            <Button btnLogoImage={cssLogo} btnName={"CSS"}></Button>
            <Button btnLogoImage={jsLogo} btnName={"Javascript"}></Button>
            <Button btnLogoImage={reactLogo} btnName={"React"}></Button>
            <Button btnLogoImage={restLogo} btnName={"REST"}></Button>
        </div>
    )
}

export default Skills
