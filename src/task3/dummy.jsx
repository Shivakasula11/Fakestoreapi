// import React from "react";
import "./color.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// function Function(){
//     return(
//         <>
//         <h1>hello</h1>
//         <div>hi</div>
//         </>
//     )
// }
// export default Function;
import Accordion from 'react-bootstrap/Accordion';
import "bootstrap/dist/css/bootstrap.min.css"

function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>HTML</Accordion.Header>
        <Accordion.Body>
        HTML (HyperText Markup Language) is the standard language for
        creating and structuring content on the web. It acts as the skeleton of 
        a webpage, organizing elements such as text, images, links, and multimedia in a structured way.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>CSS</Accordion.Header>
        <Accordion.Body>
        CSS is used to style and layout web pages. 
        While HTML provides the structure, CSS adds design, 
        making web pages visually appealing and user-friendly.


        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;