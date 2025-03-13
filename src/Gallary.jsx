import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Col,
  Row,
  Container,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegCircleCheck } from "react-icons/fa6";
// import logo from './img/logo.svg'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import "./gallary.css";

  function Gallary() {

    // const menu=[
    //  {
    //   category:"Development Courses",
    //   Items:[
    //     {id:1,name:"Master In Flutter Development"},
    //     {id:2,name:"Master In Android Development"},
    //     {id:3,name:"Master In Game Development"},
    //     {id:4,name:"Master In Full Stack Development"},
    //     {id:5,name:"Master In Web Development"},
    //     {id:6,name:"Master In React Native"},
    //     {id:7,name:"Master In Data Science"},
    //     {id:8,name:"Master In ASP.net development"},
    //     {id:9,name:"Master In Data Analytics"},
    //     {id:10,name:"Master in Software Testing"},
    //   ],
    //  },
    //  {
    //   category:"Civil-Mech. Engineering",
    //  Items:[
    //    {id:1,name:"AutoCAD Civil"},
    //    {id:2,name:"3Ds Max"},
    //    {id:3,name:"Google SketchUp"},
    //    {id:4,name:"Lumion"},
    //    {id:5,name:"Revit Architecture"},
    //    {id:6,name:"Interior & Exterior Design"},
    //    {id:7,name:"AutoCAD Mechanical"},
    //    {id:8,name:"SolidWorks"},
    //    {id:9,name:"Creo Parametrics 2.0"},
    //  ],
    //  },
    // ]
    

    const gallary=[
      {id:1,
        src: require('./img/7.webp'),
        alt:"image-1",
        description:"Development Course",
       
      },
      {id:2,
        src:require('./img/8.webp'),
        alt:"image-2",
        description:"Design Courses",
      },
      {id:3,
        src:require('./img/9.webp'),
        alt:"image-3",
        description:"Programming IT",
      },
      {id:4,
        src:require('./img/10.webp'),
        alt:"image-4",
        description:"Trendy Courses",
      },
      {id:5,
        src:require('./img/11.webp'),
        alt:"image-5",
        description:"Civil-Mech. Engineering",
      },
      {id:6,
        src:require('./img/12.jpg'),
        alt:"image-6",
        description:"Business Development",
      },
        

    ]
  return (
    <div>
      {/* <h1>Home page</h1> */}
    
      <Navbar expand="lg" bg="white" text="dark">
      <Container>
      
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            
            <Nav className="ml-auto">
              <Nav.Link active href="/">Home</Nav.Link>
             
              <NavDropdown
                className="pr-2 py-2 align-text-top"
                title="Course"
                id="basic-nav-dropdown"
              >
               <Container className=" eventsNav pt-0 mt-0 dropdown-menu-show">
                  <Row p="4">
                    {/* box1 start*/}
                    <Col xs="12" lg="3" className="mega-menu-col text-left">
                      <Dropdown.Header className="font-thme-blue text-uppercase">Development Courses</Dropdown.Header>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Master In Flutter Development
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Master In Android Development
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Master In Game Development
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Master In Full Stack Development
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Master In Web Development
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Master In React Native
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Master In Data Science
                          </a>
                        </Link>
                      </Dropdown.Item> 
                        <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Master In ASP.net development
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Master In Data Analytics
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Master in Software Testing
                          </a>
                        </Link>
                      </Dropdown.Item>
                      
                      <Dropdown.Divider />
                      <Dropdown.Header>
                        {/* <FontAwesomeIcon
                          color="black"
                          icon={"chalkboard-teacher"}
                          size="1x"
                          className="pr-1"
                        />*/ }
                        {"  "}
                        Civil-Mech. Engineering
                      </Dropdown.Header>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          AutoCAD Civil
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          3Ds Max
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Google SketchUp
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Lumion
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Revit Architecture
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Interior & Exterior Design
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          AutoCAD Mechanical
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          SolidWorks
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                         Creo Parametrics 2.0
                          </a>
                        </Link>
                      </Dropdown.Item>
                      
                      <Dropdown.Divider className="d-md-none" />
                    </Col>
                    {/* box1 end */}

                    {/* box2 start */}
                    <Col xs="12"lg="3" className="mega-menu-col text-left" id="pl">
                      <Dropdown.Header className="font-thme-blue text-uppercase">
                        {/* <FontAwesomeIcon
                          color="black"
                          icon={"building"}
                          size="1x"
                          className="pr-1"
                        /> */}
                        {"  "}
                        Design Courses
                      </Dropdown.Header>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links"  role="button" href="#/">
                          <FaRegCircleCheck/>
                          Master In Web Design
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Master in UI/UX Design
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Master In 2D/3D Animation
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Master In 2D Animation
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Master In 3D Animation
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Master In VFX
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Advance Graphics Design
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Video Editing
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          2D/3D Game Design
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Maya Pro | 3Ds Max Pro
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Blender 3D Design
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Header>
                        {/* <FontAwesomeIcon
                          color="black"
                          icon={"sun"}
                          size="1x"
                          className="pr-1"
                        /> */}
                        {"  "}
                        Business Development
                      </Dropdown.Header>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Digital Marketing
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Personality Development
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Entrepreneurship Development
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Corporate English
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Social Media Marketing
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Business Marketing
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Business Administration
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Business Management
                          </a>
                        </Link>
                      </Dropdown.Item>

                       {/* <Dropdown.Divider className="d-md-none" /> */}
                    </Col>
                    {/* box2 end */}

                    {/* box3 start */}
                    <Col xs="12" lg="3" className="mega-menu-col text-left">
                      <Dropdown.Header className="font-thme-blue text-uppercase">
                        {/* <FontAwesomeIcon
                          color="black"
                          icon={"building"}
                          size="1x"
                          className="pr-1"
                        /> */}
                        {"  "}
                        Programming IT
                      </Dropdown.Header>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          C Programming
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Node JS
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          C++ Programming
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Java Programming
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          IOS
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Advance PHP
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Laravel
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Wordpress
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          CodeIgniter
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Header>
                        {/* <FontAwesomeIcon
                          color="black"
                          icon={"sun"}
                          size="1x"
                          className="pr-1"
                        /> */}
                        {"  "}
                        Short Term Courses
                      </Dropdown.Header>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Adobe Illustrator
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Master in E-Commerce
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Adobe XD
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Tally Accounting
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          CCC- Basic Computer Course
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Photoshop
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          CorelDraw
                          </a>
                        </Link>
                      </Dropdown.Item>
                    </Col>
                    {/* box3 end */}


                    {/* box4 start */}
                    <Col xs="12" lg="3" className="mega-menu-col text-left">
                      <Dropdown.Header>
                        {/* <FontAwesomeIcon
                          color="black"
                          icon={"building"}
                          size="1x"
                          className="pr-1"
                        /> */}
                        {"  "}
                        Trendy Courses
                      </Dropdown.Header>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Master In Blockchain
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Angular JS
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          React JS
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Ethical Hacking
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Unity 3D
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Python
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          React Native
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Desktop App Development
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Cyber Security
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Header>
                        {/* <FontAwesomeIcon
                          color="black"
                          icon={"sun"}
                          size="1x"
                          className="pr-1"
                        />*/ }
                        {"  "}
                        Textile Designing
                      </Dropdown.Header>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Digital Print
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-links" role="button" href="#/">
                          <FaRegCircleCheck/>
                          Hotfix Design
                          </a>
                        </Link>
                      </Dropdown.Item>
                      {/* box4 end*/ }
                    </Col>
                  </Row>
                </Container>
              </NavDropdown>
            </Nav> 
              
            <Nav>
              <Nav.Link href="/">Activities</Nav.Link>
              <Nav.Link href="/">Blog</Nav.Link>
              <Nav.Link href="/">Know US</Nav.Link>
              <Nav.Link href="/">Get IN Touch</Nav.Link>
              <Nav.Link href="/">StudentZone</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
           
           {/* gallary secton start */}
           <div className="gallary">
            {
              gallary.map((image)=>{
                return(
                <div key={image.id} className="gallary-item">
                <img src={image.src} alt={image.alt} />
                <div className="gallary-info">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
                <div className="icon">
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <span><FaStarHalfAlt/></span>
                  <div className="price">
                  <button type="button" className="btn btn-theme-blue bg-theme-blue btn-sm-text-white">Know More..!</button>
                  </div>
                </div>
                </div>
                </div>
                )
              })
            }
           </div>
              



    </div>
  );
}
export default Gallary;