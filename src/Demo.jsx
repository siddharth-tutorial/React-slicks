import React from 'react'
import Header from './header'
// import Home from './home';
// import About from './about';

function Demo() {
 <Header/>
    // const items = ['Apple','Banana','Orange'];

    // const obj = {name:"cdmi",age:22,social:"face,insta"}

    // const staff = [
    //     {name:"cdmi",age:22,social:["facebook","instagram","gmail"],email:"cdmi@gmail.com"},
    //     {name:"kamlesh",age:22,social:["facebook","instagram","gmail"],email:"kamlesh@gmail.com"},
    //     {name:"mehul",age:25,social:["facebook","instagram","gmail"],email:"mehul@gmail.com"},
    //     {name:"subham",age:35,social:["facebook","instagram","snapchat"],email:"subham@gmail.com"},
    // ]



    // const type = "admin";

    // if(type === "admin"){
    //     return <Home />;
    // }
    // else{
    //     //return "welcome, visitor";
    //     return <About />;
    // }

    // return (
        //(type === 'admin') ? 'welcome, admin' : null

        // type === 'admin' && <Home />
    // )


    const items1 = ['apple','banana','orange']
  // const obj1={ name:'cdmi',age:20,social:'instagram'}
  const staffs =[
    {name:"Meet",age:20,social:["insta"],course:"Full-stack"},
    {name:"Mehul",age:25,social:["insta"],course:"Ui-Ux"},
    {name:"Kamlesh",age:21,social:["facebook"],course:"Full-stack"},
    {name:"jatin",age:26,social:['insta'],course:"ui-ux"},
  ]  


    return (
        <>
         <ul>
      {
        items1.map((val)=>{
          return(
          <li>{val}</li>
          )
        })
      }
     </ul>
    {/* /* {obj1.name}-{obj1.age}-{obj1.social}*/ 
  
     <table border="2" cellPadding="10" cellSpacing="10" style={{width: "100%"}}>
           <tr>
       <th style={{ backgroundColor: "#f2f2f2", textAlign: "left"}}>Name</th>         <th style={{ backgroundColor: "#f2f2f2", textAlign: "left"}}>age</th>
         <th style={{ backgroundColor: "#f2f2f2", textAlign: "left"}}>course</th>
        <th style={{ backgroundColor: "#f2f2f2", textAlign: "left"}}>social</th>
      </tr>

     {
        staffs.map((iteam)=>{
          return(
            <tr>
              <td style={{ textAlign: "left", padding: "8px" }}>{iteam.name}</td>
               <td style={{ textAlign: "left", padding: "8px" }}>{iteam.age}</td>
               <td style={{ textAlign: "left", padding: "8px" }}>{iteam.course}</td>
              <td>
                {
                iteam.social.map((so)=>{
                  return(
                    <li style={{listStyle:'none'}}>{so}</li>
                  )
                })
               
                } </td>

          
            </tr>

          )
        })
      }
     </table>  }

     
            {/* <h1>Hello</h1>
            <ul>
            {
                items.map((val,i)=>{
                    return (
                        <li key={i}>{val}</li>
                    )
                })
            }
            </ul>

            {obj.name} - {obj.age} - {obj.social}

            <table style={{border:"2px solid black"}}>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Mail</th>
                    <th>Social</th>
                </tr>
            
            {
                staff.map((iteam)=>{
                    return(
                        <tr>
                            <td>{iteam.name}</td>
                            <td>{iteam.age}</td>
                            <td>{iteam.email}</td>
                            <td>{
                                iteam.social.map((so)=>{
                                    return (
                                        <li>{so}</li>
                                    )
                                })    
                            }</td>
                        </tr>
                    )
                })
            }            
            </table> */}

  {/* <Container className=" eventsNav pt-0 mt-0 dropdown-menu-show">
                  <Row p="4">
                    {/* box1 start }
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
                        /> }
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
                    {/* box1 end }

                    {/* box2 start }
                    <Col xs="12"lg="3" className="mega-menu-col text-left" id="pl">
                      <Dropdown.Header className="font-thme-blue text-uppercase">
                        {/* <FontAwesomeIcon
                          color="black"
                          icon={"building"}
                          size="1x"
                          className="pr-1"
                        /> }
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
                        /> }
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

                      {/* <Dropdown.Divider className="d-md-none" /> }
                    </Col>
                    {/* box2 end */}

                    {/* box3 start }
                    <Col xs="12" lg="3" className="mega-menu-col text-left">
                      <Dropdown.Header className="font-thme-blue text-uppercase">
                        {/* <FontAwesomeIcon
                          color="black"
                          icon={"building"}
                          size="1x"
                          className="pr-1"
                        /> }
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
                        /> }
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


                    {/* box4 start }
                    <Col xs="12" lg="3" className="mega-menu-col text-left">
                      <Dropdown.Header>
                        {/* <FontAwesomeIcon
                          color="black"
                          icon={"building"}
                          size="1x"
                          className="pr-1"
                        /> }
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
                        /> }
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
                      {/* box4 end }
                    </Col>
                  </Row>
                </Container>
              </NavDropdown>
            </Nav> */}

        </>
    )
}

export default Demo
