import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Accordion from 'react-bootstrap/Accordion';
import "./portfolio.css";
import passport from "../assests/passport.jpg"


function ColorSchemesExample() {
  return (
    <>
    <div id="aboutme" style={{position:"fixed",width:"100%",top:"0px", backgroundColor:"black"}}>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#aboutme">ABOUTME</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Education">EDUCATION</Nav.Link>
            <Nav.Link href="#Skills">SKILLS</Nav.Link>
            <Nav.Link href="#Project">PROJECT</Nav.Link>
            <Nav.Link href="#Certifications">CERTIFICATIONS</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
      <br />
     <div >
     <h4 style={{color:"blue"}}>Hello ,It's Me</h4>
      <h1 style={{color:"black"}}>ABOUT ME</h1>
      <p style={{backgroundColor:"#ffcccc",margin:"5px"}}>As a passionate and motivated fresher, I am actively learning a diverse set of web development skills to build a strong foundation in the tech industry.
         I have been immersing myself in HTML and CSS to create visually appealing and responsive web pages. 
         My journey in JavaScript has equipped me with the ability to add interactivity and dynamic elements to my projects. 
         I'm currently exploring JSON for efficient data interchange between client and server.
         To enhance my front-end development capabilities, I am diving into React.js, learning how to build user interfaces that are both engaging and efficient. 
         Additionally, I am expanding my knowledge of cloud services through AWS, understanding how to deploy applications in a scalable environment. 
         I am also acquiring skills in SQL for effective database management and data manipulation.
         On the back-end side, I am getting hands-on experience with Node.js, which allows me to create server-side applications seamlessly.
         Lastly, I am familiarizing myself with GitHub for version control, ensuring my code is organized and collaborates well in team settings.
         My eagerness to learn and adapt drives my ambition to become a proficient developer.</p>
     </div>
     <div id="Education">
     <h1>EDUCATION</h1>
      <p >B.TECH IN Electronics and Communication (ECE) <span style={{textAlign:"right"}}>2020-2024</span></p>
      <p >Narsimha Reddy Engineering College <span style={{textAlign:"right"}}>CGPA:7.01</span></p>
     </div>
     <div id="Skills">
      <h1>SKILLS</h1>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>TECHNICAL</Accordion.Header>
        <Accordion.Body style={{backgroundColor:"burlywood"}}>
      <ul>
       <li> HTML</li> 
        <li>CSS</li>
       <li> JAVASCRIPT</li> 
       <li> REACT</li>
       <li> NODE</li>
        <li>SQL</li>
        </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>COMMUNICATION</Accordion.Header>
        <Accordion.Body style={{backgroundColor:"burlywood"}}>
          <ul>
          <li>COMMUNICATION</li>
          <li>LEARDERSHIP</li>
          <li>TEAMWORK</li>
          <li>FLEXIBILITY</li>
          <li>PROBLEM SOLVING</li>
          <li>ADAPTABILITY</li>
          </ul>
         
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
     </div>
     <div id="Project">
     <h1>PROJECTS </h1>
     <h6>MAGAZEE-TEMPLATE USING (HTML & CSS)</h6>
     <p>
    
     • Developed a visually appealing "Magazee" template using HTML and CSS. 
     • Designed a fully responsive layout adaptable to various screen sizes. 
     • Implemented grid and flexbox techniques for an organized and flexible structure. 
     • Applied semantic HTML to enhance code readability and maintainability. 
     • Ensured cross-browser compatibility for a consistent user experience. 
     • Optimized the template for performance, improving load times and user experience.
     </p>
     <h6>CALCULATOR APP USING (HTML,CSS,JAVASCRIPT)</h6>
     </div>
     <img src={passport} alt="passport"/>
    </>
    
  );
}

export default ColorSchemesExample;