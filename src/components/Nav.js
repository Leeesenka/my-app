
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck, faStar} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import React from 'react'
import firstPhoto from './contest-hero.png'
import myPhoto from './my_photo.jpeg'
import skills from './Group 6.png'
import contImage from './con.avif'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import pdf from './Alesya_Frolova_CV.pdf'
import myCV from './ScrinCV.png'
import hotel from './hotel.png'
import alarm from './alarm.png'
import ImageGallery from 'react-image-gallery'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import emailjs from 'emailjs-com';
import Image1 from './Screenshot 2023-07-17 at 15.13.16.png';
import Image2 from './Screenshot 2023-07-17 at 15.13.59.png';
import Image3 from './Screenshot 2023-07-17 at 15.14.18.png';
import hotel1 from './hotel1.png'
import hotel2 from './hotel2.png'
import hotel3 from './hotel3.png'
import hotel4 from './hotel4.png'
import final1 from './final1.png'
import final2 from './final2.png'
import final3 from './final3.png'
import final4 from './final4.png'
import final5 from './final5.png'
import final6 from './final6.png'
import { faFacebook, faSquareInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Modal from 'react-modal';
Modal.setAppElement('#root')
const Header = () => {
    return (
        <>
        <header className="site-header site-header--static site-header--signed-out">
            <div className="site-header__inner1">
                <div className="hamburger-menu">
                    <input id="menu__toggle" type="checkbox" />
                    <label className="menu__btn" htmlFor="menu__toggle">
                        <span></span>
                    </label>
                    <ul className="menu__box">
                        <li><a className="menu__item" href="#About">About me</a></li>
                        <li><a className="menu__item" href="#Skills">Skills</a></li>
                        <li><a className="menu__item" href="#CV">CV</a></li>
                        <li><a className="menu__item" href="#Projects">Projects</a></li>
           
                        <li><a className="menu__item" href="#Contacts">Contacts</a></li>
                    </ul>
                </div>
                <div className="site-header__inner2">
                    <a className="menu__item" href="#About">About me</a>
                    <a className="menu__item" href="#Skills">Skills</a>
                    <a className="menu__item" href="#CV">CV</a>
                    <a className="menu__item" href="#Projects">Projects</a>
  
              
                    <a className="menu__item" href="#Contacts">Contacts</a>
                    <div className="top-level-nav__item">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <span className="tel">05 33 8 22 703
                        </span>
                    </div>
                </div>
            </div>
        </header>
        <div className="app__content">
            <div className="row">
                <div className="rowH">
                </div>
                <img src={firstPhoto} width="90%"/>
            </div>
            <div className="row1">
                <div className="rowR"></div>         
                <blockquote>
                    <h1>Good design makes great business</h1>
                    <cite>Somebody</cite>         
                </blockquote>
                <p>
                    Hello ,Welcome To My official Website
                </p>
                <ul className="list_1">
                    <li> <FontAwesomeIcon icon={faCheck}/>About me</li>
                    <li> <FontAwesomeIcon icon={faCheck}/>My skills</li>
                    <li> <FontAwesomeIcon icon={faCheck}/>CV</li>
                    <li> <FontAwesomeIcon icon={faCheck}/>My Projects</li>   
               
                    <li> <FontAwesomeIcon icon={faCheck}/>My contacts</li>   
                </ul>
                <span className="button_1">
                    <a href="#About">See more</a>
                </span>
                <div className="stars_logo">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
            </div>
        </div>
        </>
    );
};




const AboutMe = () => {
    return (
        <div className="about-me">
            <h1 id="About">About Me</h1>
            <div className="info">
                <div className="photo-my">
              
                    <img src={myPhoto} alt="My profile" />
                </div>
                <div className="info-me">
                    <h2>F. Alesya</h2>
                    <p>
                    As a Full Stack Developer, I offer a successful track record in Python and JavaScript development and significant experience in the telecommunications sector. My technical leadership has consistently improved operational efficiency and customer satisfaction. <br/>
                    With deep knowledge of telecommunications and web development, I've developed solutions that cut network incident resolution times by 40% and increased department productivity by 20%. I excel in translating business requirements into technical solutions, demonstrated through creating chatbots and implementing system improvements.<br/>
                    Currently expanding my knowledge in AI and Machine Learning, I am committed to continuous learning and innovation. As your Full Stack Developer, I will bring my robust technical skills and results-oriented approach to drive digital transformation in your organization.
                     </p>
                </div>
            </div>
        </div>
    );
};

// const Projects = () => {
//     const [modalIsOpen, setModalIsOpen] = useState(false);
//     const [modalContent, setModalContent] = useState('');
//     const images = [
       
//         {
//             original: final6,
//             thumbnail: final6,
//             originalClass: 'my-original-class',
//             originalUrl:'https://fms-support-client.onrender.com/',
//             description: { 
//                 info: "For my final project, I devised a service management solution, specializing in managing maintenance and mobile workforce using Node.js, React, and APIs. The system is comprised of three modules: client, manager, and engineer. Clients submit service requests, which are forwarded via API to the manager module for parsing and database storage. The manager assigns the request to an engineer via a chat bot, where decisions on task execution are timestamped for future analytics. This facilitates efficient tracking of service work, customer trends, equipment status, and engineer performance.",
//                 images: [
//                     {url: final1, description: ''},
//                     {url: final2, description: ''},
//                     {url: final3, description: ''},
//                     {url: final4, description: ''},
//                     {url: final5, description: ''},
//                 ],
//                 photoProjects: final6,
//             }
//         },
//         {
//             original: hotel,
//             thumbnail: hotel,
//             originalClass: 'my-original-class',
//             originalUrl:'https://github.com/Leeesenka/Mini_Project_Hotel_Torquay',
//             description: { 
//                 info: "The project, developed in Django, focuses on creating a dual-interface website for Torquay Towers, a hotel in the English countryside. One interface caters to visitors, offering hotel information, displaying vacancies, facilitating bookings, and providing a form for additional information requests and review submissions. The other interface serves hotel staff, allowing efficient management of bookings, vacancies, guest messages, and reviews. The project leverages Django ORM for database operations, built-in user authentication for login/logout functionalities, and Django forms for data collection and validation. An appealing info page enhances visitor experience, while the Django Admin interface simplifies project data management.",
//                 images: [
//                     {url: hotel1, description: ''},
//                     {url: hotel2, description: ''},
//                     {url: hotel3, description: ''},
//                     {url: hotel4, description: ''},
//                 ],
//                 photoProjects: hotel,
//             }
//         },
//         {
//             original: alarm,
//             thumbnail: alarm,
//             originalClass: 'my-original-class',
//             originalUrl:'https://github.com/Leeesenka/Developers_institute/tree/main/Week_10/Day_5/alarm',
//             description: { 
//               info: "I have developed a system to monitor and analyze alerts typically related to terrorist threats and rocket attacks. These alerts are initially posted on a Telegram channel, from which I have devised a way to automatically forward all data to my own Telegram bot. Upon receiving this data, my bot parses each message and stores relevant information, such as the time and location of each threat. This creates a rich dataset that I can then use for deeper analysis. To serve and manipulate this data, I used Django Rest API, a powerful and flexible toolkit for building Web APIs in Django. This allows me to handle, query and filter the data as needed for my analysis. The front-end of the system is built with JavaScript, and I've utilized the Chart.js library to visualize the data. Chart.js provides beautiful, flexible, and interactive charts that can handle a variety of data formats and display options. Therefore, this system not only collects and stores crucial alert data automatically, but also provides a visual representation for easy understanding and further analysis.",
//               images: [
//                 {url: Image1, description: ''},
//                 {url: Image2, description: ''},
//                 {url: Image3, description: ''},
//               ],
//               photoProjects: alarm,
//             }
//           },
          

//     ];

//     const renderItem = (item) => {
//         return (
//             <div className='image-gallery-image'>
//                 <a href={item.originalUrl} 
//                    target='_blank' 
//                    rel='noopener noreferrer'
//                    onClick={(e) => {
//                     e.preventDefault();
//                     setModalContent(item); 
//                     setModalIsOpen(true);
//                 }}>
//                     {/* add CSS here to limit the size of images */}
//                     <img src={item.original} alt='' style={{maxWidth: "100%", maxHeight: "100%"}} />
//                 </a>
//             </div>
//         );
//     }

//     return (
//         <div className="app__content2">
//             <h1 id="Projects">My Projects</h1>
//             <div className="uder-lenta">
//                 <ImageGallery items={images} 
//                               showFullscreenButton={true}
//                               showPlayButton={false}
//                               showBullets={true}
//                               renderItem={renderItem}  />
//             </div>
//             <Modal
//               isOpen={modalIsOpen}
//               onRequestClose={() => setModalIsOpen(false)}
//               style={{
//                 content: {
//                   width: '80%', 
//                   height: '80%', 
//                   marginLeft: 'auto',
//                   marginRight: 'auto',
//                   marginTop: 'auto', 
//                   marginBottom: 'auto',
                 
//                 }
//               }}
//             >

// <ProjectInfo project={modalContent || {}} />
//               <div className='but-close'>
//     <button  id='close' style={{alignItems: 'center'}} onClick={() => setModalIsOpen(false)}>Close</button>
//     </div>
// </Modal>
//         </div>
//     );
// };



const Skills = () => {
    return (
        <div className="my_skills">
            <h1 id="Skills">My Skills</h1>
            <div className='skills'>
                    <img src={skills }></img>
           
            </div>
	    </div>
    );
};

const CV = () => {
    return (
      <div className='cv-photo'>
        <h1 id="CV">My CV</h1>
        <a href={pdf} download>
          <img src={myCV}  width="20%"/>
        </a>
      </div>
    )
  }


// const Team = () => {
//     return (
//         <div className="team">
//             <h1><a name ="Team"></a>Our course Team</h1>
//             <div className="text-team">
//                 {/* <span className="button_2">
//                     <a href="NEW">NEW</a>
//                 </span> */}
//                 <b>This is my crazy team</b>
//                 <h2>Teamwork is everything to a company. Teammates are everything to each other.</h2>
//                 {/* <p>Team building slogans, also commonly called team mottos, are catchy phrases that summarize a team’s spirit, mission, or character. Leaders often use slogans to motivate and inspire teams.
//                 </p> */}
//             </div>
//             <div className="team-photo">
//                 <div className="photo1">
//                     <div className="name1">
//                         <p>Sergei Boiko</p>
//                     </div>
//                     <img src={Sergey} height="290" width="250" alt="Sergei Boiko"/>
//                     <div className="under-team-photo">
//                         <p>Sergei Boiko</p>
//                         <img src={Icone} height="25" alt="icon"/>
//                     </div>
//                 </div>
//                 <div className="photo1">
//                     <div className="name1">
//                         <p>Maksim Chalov</p>
//                     </div>
//                     <img src={Maksim} height="290" width="250" alt="Maksim Chalov"/>
//                     <div className="under-team-photo">
//                         <p>Maksim Chalov</p>
//                         <img src={Icone} height="25" alt="icon"/>
//                     </div>
//                 </div>
//                 <div className="photo1">
//                     <div className="name1">
//                         <p>Nikolas Weber</p>
//                     </div>
//                     <img src={Nikolas} height="290" width="250" alt="Nikolas Weber"/>
//                     <div className="under-team-photo">
//                         <p>Nikolas Weber</p>
//                         <img src={Icone} height="25" alt="icon"/>
//                     </div>
//                 </div>
//                 <div className="photo1">
//                     <div className="name1">
//                         <p>Elena Chuvilina</p>
//                     </div>
//                     <img src={Elena} height="290" width="250" alt="Elena Chuvilina"/>
//                     <div className="under-team-photo">
//                         <p>Elena Chuvilina</p>
//                         <img src={Icone} height="25" alt="icon"/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        emailjs.send('service_v8r5b09', 'template_8ihy9ry', { name, email, message }, '0hDVoZjDf_j8gpHY_')
            .then((result) => {
                alert("Message Sent, We will get back to you shortly");
                setName("");
                setEmail("");
                setMessage("");
            }, (error) => {
                alert("An error occurred, Please try again");
            });
    };


    return (
        <div className="contacts">
            
            <div className="forms-cont"><a name="Contacts"></a>
                <div className="forms-for">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Your Name" size="50" className="Name" value={name} onChange={e => setName(e.target.value)} /><br />
                        <input type="email" placeholder="Your Email" size="50" className="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
                        <input type="text" placeholder="Message" size="50" className="text" id='message' value={message} onChange={e => setMessage(e.target.value)} />
                        <input type="submit" value="GO" className='button_3' />
                    </form>
                </div>
            </div>
            {/* I removed 'contImage' from the img src as it's not defined in the provided code, replace it with your actual image */}
            <div className="cont-photo">
                <div className="cont-ik">
                <a href="https://www.facebook.com/profile.php?id=100082443499131" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faFacebook} id='facebook' />
                </a>
                <a href="https://instagram.com/leeesenka?igshid=MTIzZWMxMTBkOA==" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faSquareInstagram} id='instagram' />
                </a>
                <a href="https://www.linkedin.com/in/alesya-frolova/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} id='linedin'/>
                </a> 
                <a href="https://github.com/Leeesenka" target="_blank" rel="noreferrer">  
                    <FontAwesomeIcon icon={faGithub} id='git' />
                </a>     
                </div>
                <img src={contImage} width="350px" alt="Contact"/>
            </div>
        </div>
    );
};


const ProjectInfo = ({ project }) => {
    return (
        <div className='aboutProjects'>
            <div className='text-projects'>
                <div className='logo-project'>
                    <h1>Project Information</h1>
                    <img src={project.description.photoProjects} onClick={() => window.open(project.originalUrl, "_blank")}></img>
                </div>
                <p style={{color: 'black', marginBlockEnd: '100px'}}>{project.description.info}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                {project.description.images && project.description.images.map((image, index) => (
                    <div key={index} style={{ margin: '10px' }}>
                        {image.url && <img src={image.url} alt={`Project ${index}`} style={{ maxWidth: '300px', maxHeight: '300px' }} onClick={() => window.open(project.originalUrl, "_blank")} />}
                        {image.description && <p>{image.description}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};




export { Header, AboutMe,  Skills, Contact, CV, ProjectInfo };

