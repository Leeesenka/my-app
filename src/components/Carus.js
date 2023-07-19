import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Modal from 'react-modal';
import hotel from './hotel.png'
import alarm from './alarm.png'
import ImageGallery from 'react-image-gallery'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { ProjectInfo } from "./Nav";
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
const images = [
       
    {
        original: final6,
        thumbnail: final6,
        originalClass: 'my-original-class',
        originalUrl:'https://fms-support-client.onrender.com/',
        description: { 
            info: "For my final project, I devised a service management solution, specializing in managing maintenance and mobile workforce using Node.js, React, and APIs. The system is comprised of three modules: client, manager, and engineer. Clients submit service requests, which are forwarded via API to the manager module for parsing and database storage. The manager assigns the request to an engineer via a chat bot, where decisions on task execution are timestamped for future analytics. This facilitates efficient tracking of service work, customer trends, equipment status, and engineer performance.",
            images: [
                {url: final1, description: ''},
                {url: final2, description: ''},
                {url: final3, description: ''},
                {url: final4, description: ''},
                {url: final5, description: ''},
            ],
            photoProjects: final6,
        }
    },
    {
        original: hotel,
        thumbnail: hotel,
        originalClass: 'my-original-class',
        originalUrl:'https://github.com/Leeesenka/Mini_Project_Hotel_Torquay',
        description: { 
            info: "The project, developed in Django, focuses on creating a dual-interface website for Torquay Towers, a hotel in the English countryside. One interface caters to visitors, offering hotel information, displaying vacancies, facilitating bookings, and providing a form for additional information requests and review submissions. The other interface serves hotel staff, allowing efficient management of bookings, vacancies, guest messages, and reviews. The project leverages Django ORM for database operations, built-in user authentication for login/logout functionalities, and Django forms for data collection and validation. An appealing info page enhances visitor experience, while the Django Admin interface simplifies project data management.",
            images: [
                {url: hotel1, description: ''},
                {url: hotel2, description: ''},
                {url: hotel3, description: ''},
                {url: hotel4, description: ''},
            ],
            photoProjects: hotel,
        }
    },
    {
        original: alarm,
        thumbnail: alarm,
        originalClass: 'my-original-class',
        originalUrl:'https://github.com/Leeesenka/Developers_institute/tree/main/Week_10/Day_5/alarm',
        description: { 
          info: "I have developed a system to monitor and analyze alerts typically related to terrorist threats and rocket attacks. These alerts are initially posted on a Telegram channel, from which I have devised a way to automatically forward all data to my own Telegram bot. Upon receiving this data, my bot parses each message and stores relevant information, such as the time and location of each threat. This creates a rich dataset that I can then use for deeper analysis. To serve and manipulate this data, I used Django Rest API, a powerful and flexible toolkit for building Web APIs in Django. This allows me to handle, query and filter the data as needed for my analysis. The front-end of the system is built with JavaScript, and I've utilized the Chart.js library to visualize the data. Chart.js provides beautiful, flexible, and interactive charts that can handle a variety of data formats and display options. Therefore, this system not only collects and stores crucial alert data automatically, but also provides a visual representation for easy understanding and further analysis.",
          images: [
            {url: Image1, description: ''},
            {url: Image2, description: ''},
            {url: Image3, description: ''},
          ],
          photoProjects: alarm,
        }
      },
      

];
const photos = [
    {
        name: 'Photo 1',
        url: final6,
        description: images[0],
    },
    {
        name: 'Photo 2',
        url: hotel,
        description: images[1]
    },
    {
        name: 'Photo 3',
        url: alarm,
        description: images[2]
    },
    // more photos here
];
export default function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [modalContent, setModalContent] = useState(null);

    const onImageClick = (photo) => {
        setModalContent(photo.description); 
        setModalIsOpen(true);
    };
    
    return (
        <div className="insta">
            <h1 id="Projects">My Projects</h1>
            <Slider {...settings}>
                {photos.map((photo) => {
                    return (
                        <div className='image-container' key={photo.name}>
                            <img src={photo.url} alt={photo.name} onClick={() => onImageClick(photo)} />
                        </div>
                    );
                })}
            </Slider>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                    content: {
                    width: '80%', 
                    height: '80%', 
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 'auto', 
                    marginBottom: 'auto',
                }
                }}
            >
                <ProjectInfo project={modalContent || {}} />
                <div div className='but-close'>
                <button id='close' onClick={() => setModalIsOpen(false)}>Close</button>
                </div>
            </Modal>
        </div>
    );
}