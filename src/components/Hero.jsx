import React, { useEffect, useState } from "react";
import ajay from "../Assets/Ajay image.png";
import oneforall from "../Assets/oneforall.png";
import vibee from "../Assets/vibee.png";
import drivemate from "../Assets/drivemate.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";
import youngman from "../Assets/youngman.png";
import code from "../Assets/coding.png";
import node from "../Assets/node.png";
import html from "../Assets/html.png";
import js from "../Assets/javascript.png";
import mongodb from "../Assets/mongodb.png";
import redux from "../Assets/redux.png";
import react from "../Assets/react.png";
import tailwind from "../Assets/tailwind.png";
import css from "../Assets/css.png";
import expressjs from "../Assets/express.png";
import git from "../Assets/github.png";
import materialui from "../Assets/materialui.png";
import bootstrap from "../Assets/bootstrap.png";
import Navbar from "./Navbar";
function Hero() {
   const text="MERN Stack Developer"
    const [animatedText, setAnimatedText] = useState('');
  
    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= text.length) {
          setAnimatedText(text.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 200); // Adjust the interval as needed for the animation speed
      return () => clearInterval(interval);
    }, [text]);
  return (
    <div> 
   
    <div className="text-#60a5fa ">
     
      {/* <div
        className="flex justify-center items-start h-screen"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="flex flex-col items-center mt-4">
          <img
            className="h-32 w-32 md:h-48 md:w-48 lg:h-64 lg:w-64 flex-none rounded-full  bg-white-50 mt-20"
            src={ajay}
            alt=""
          />
          <h1 class="text-4xl sm:text-5xl font-bold leading-6 text-yellow-600 mt-16 font-serif  ">
            Ajay S Rajendran
          </h1>
          <span class="text-2xl font-bold leading-6 text-white mt-12 ">
            Mernstack Developer
          </span>
          <div className="flex justify-center mt-12 text-red-600 ">
            <a
              href="https://wa.me/917025016937"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-#FAF1CF mr-4"
            >
              <FaWhatsapp size={30} />
            </a>
            <a
              href="https://www.instagram.com/ajay_s_rajendran/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-#FAF1CF mr-4"
            >
              <FaInstagram size={30} />
            </a>

            <a
              href="https://www.linkedin.com/in/ajay-s-rajendran-30b278218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-#FAF1CF mr-4"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/AJAYSRAJENDRAN"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-#FAF1CF"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div> */}
     <div className="relative overflow-hidden pt-32 sm:pt-0">
  <div className="">
    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center">
      <div className="sm:max-w-lg">
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
          Hi There!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span> 
        </h1>
        <h1 className="mt-4 text-2xl text-white sm:text-4xl">
          I'M &nbsp;
          <strong className="text-purple-600">AJAY S RAJENDRAN</strong>
        </h1>
        <h1 className="mt-12 text-2xl text-purple-500 sm:text-4xl">
          {animatedText}
        </h1>
      </div>
      <div className="sm:ml-12">
        {/* Image grid */}
        <div className="h-104 w-84 overflow-hidden rounded-lg">
          <img
            src={code}
            alt=""
            className="h-full w-full object-cover object-left sm:ml-32"
          />
        </div>
      </div>
    </div>
  </div>
</div>


    

      <div
        className=" mt-12  "
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-offset="200"
      >
        <h1 className="text-2xl   text-white ml-8 sm:ml-64 sm:text-4xl mt-32 mb-8  ">
        LET ME <strong className="text-purple-600">INTRODUCE</strong>  MYSELF
        </h1>
        <div class="overflow-hidden bg-BLACK py-8 sm:py-12 text-white">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div class="lg:pr-8 lg:pt-4">
                <div class="lg:max-w-lg">
                  <p class=" text-lg leading-8 text-#3F6844 mb-4">
                    Hello! I'm <strong className="text-purple-600"> Ajay S Rajendran</strong>, a passionate MERN stack
                    developer with a strong foundation in electronics
                    engineering. My journey into the world of technology began
                    with a diploma in electronics engineering, where I gained a
                    solid understanding of electronic systems. Driven by a keen
                    interest in web development, I further honed my skills by
                    completing a certificate course in MERN stack development
                    from Futura Labs Calicut. This intensive program equipped me
                    with the latest tools and technologies in MongoDB,{" "}
                    Express.js, React.js, and Node.js—the building blocks of
                    modern web applications.
                  </p>
                </div>
              </div>
              <img
                src={youngman}
                alt="Ai model"
                class="  w-48 h-96 max-w-none sm:w-80 md:-ml-4 lg:-ml-0 "
              />
            </div>
          </div>
        </div>

        <div className=" mt-40 ">
          <h1 class="text-2xl sm:text-4xl  flex justify-center items-center text-white ml-4 relative">
           Professional &nbsp;  <strong className="text-purple-600"> Skillset</strong>
          </h1>

          <div
            class=" py-24 sm:py-32 text-white"
            data-aos="flip-up"
            data-aos-duration="2500"
          >
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
              <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                <div class="w-64 mx-auto flex max-w-xs flex-col gap-y-4  rounded-md py-4 px-4 border-2 border-purple-600  shadow-lg shadow-purple-500/50 transform hover:scale-105 transition duration-300">
                 <img src={node} alt=""  className="w-20 mx-auto" />
                  <dd class=" text-3xl font-semibold tracking-tight text-#3F6844 sm:text-3xl">
                    Nodejs
                  </dd>
                </div>
                <div class="w-64 mx-auto flex max-w-xs flex-col gap-y-4 rounded-md py-4 px-4 border-2 border-purple-600 shadow-lg shadow-purple-500/50 transform hover:scale-105 transition duration-300">
                <img src={expressjs} alt=""  className="w-20 mx-auto" />
                  <dd class=" text-3xl font-semibold tracking-tight text-#3F6844 sm:text-3xl">
                    Express js
                  </dd>
                </div>
                <div class="w-64 mx-auto flex max-w-xs flex-col gap-y-4 rounded-md py-4 px-4 border-2 border-purple-600 shadow-lg shadow-purple-500/50 transform hover:scale-105 transition duration-300">
                <img src={react} alt=""  className="w-20 mx-auto" />
                  <dd class=" text-3xl font-semibold tracking-tight text-#3F6844 sm:text-3xl">
                    React js
                  </dd>
                </div>

                <div class="w-64 mx-auto flex max-w-xs flex-col gap-y-4 rounded-md py-4 px-4 border-2 border-purple-600 shadow-lg shadow-purple-500/50 transform hover:scale-105 transition duration-300">
                <img src={mongodb} alt=""  className="w-20 mx-auto" />
                  <dd class=" text-3xl font-semibold tracking-tight text-#3F6844 sm:text-3xl">
                    MongoDB
                  </dd>
                </div>
                <div class="w-64 mx-auto flex max-w-xs flex-col gap-y-4 rounded-md py-4 px-4 border-2 border-purple-600 shadow-lg shadow-purple-500/50 transform hover:scale-105 transition duration-300">
                <img src={js} alt=""  className="w-20 mx-auto" />
                  <dd class=" text-3xl font-semibold tracking-tight text-#3F6844 sm:text-3xl">
                    Javascript
                  </dd>
                </div>
                <div class="w-64 mx-auto flex max-w-xs flex-col gap-y-4 rounded-md py-4 px-4 border-2 border-purple-600 shadow-lg shadow-purple-500/50 transform hover:scale-105 transition duration-300">
                <img src={html} alt=""  className="w-20 mx-auto" />
                  <dd class=" text-3xl font-semibold tracking-tight text-#3F6844 sm:text-3xl">
                    HTML
                  </dd>
                </div>
                <div class="w-64 mx-auto flex max-w-xs flex-col gap-y-4 rounded-md py-4 px-4 border-2 border-purple-600 shadow-lg shadow-purple-500/50 transform hover:scale-105 transition duration-300">
                <img src={css} alt=""  className="w-20 mx-auto" />
                  <dd class=" text-3xl font-semibold tracking-tight text-#3F6844 sm:text-3xl">
                    CSS
                  </dd>
                </div>
                <div class="w-64 mx-auto flex max-w-xs flex-col gap-y-4 rounded-md py-4 px-4 border-2 border-purple-600 shadow-lg shadow-purple-500/50 transform hover:scale-105 transition duration-300">
                <img src={bootstrap} alt=""  className="w-20 mx-auto" />
                  <dd class=" text-3xl font-semibold tracking-tight text-#3F6844 sm:text-3xl">
                    Bootstrap
                  </dd>
                </div>
                <div class="w-64 mx-auto flex max-w-xs flex-col gap-y-4 rounded-md py-4 px-4 border-2 border-purple-600 shadow-lg shadow-purple-500/50 transform hover:scale-105 transition duration-300">
                <img src={materialui} alt=""  className="w-20 mx-auto" />
                  <dd class=" text-3xl font-semibold tracking-tight text-#3F6844 sm:text-3xl">
                    Material UI
                  </dd>
                </div>
                <div class="w-64 mx-auto flex max-w-xs flex-col gap-y-4 rounded-md py-4 px-4 border-2 border-purple-600 shadow-lg shadow-purple-500/50 transform hover:scale-105 transition duration-300">
                <img src={tailwind} alt=""  className="w-20 mx-auto" />
                  <dd class=" text-3xl font-semibold tracking-tight text-#3F6844 sm:text-3xl">
                    Tailwind CSS
                  </dd>
                </div>
                <div class="w-64 mx-auto flex max-w-xs flex-col gap-y-4 rounded-md py-4 px-4 border-2 border-purple-600 shadow-lg shadow-purple-500/50 transform hover:scale-105 transition duration-300">
                <img src={redux} alt=""  className="w-20 mx-auto" />
                  <dd class=" text-3xl font-semibold tracking-tight text-#3F6844 sm:text-3xl">
                    Redux
                  </dd>
                </div>
                <div class="w-64 mx-auto flex max-w-xs flex-col gap-y-4 rounded-md py-4 px-4 border-2 border-purple-600 shadow-lg shadow-purple-500/50 transform hover:scale-105 transition duration-300">
                <img src={git} alt=""  className="w-20 mx-auto" />
                  <dd class=" text-3xl font-semibold tracking-tight text-#3F6844 sm:text-3xl">
                    Git
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="text-#3F6844 mt-40  ">
          <h1 className="text-5xl sm:text-7xl font-bold  text-yellow-600 sm:ml-6 ">
            Education
          </h1>
          <div className="flex flex-col items-center lg:flex-row justify-between mx-auto max-w-7xl px-6 lg:px-8 mt-32 ">
            <Card
              className="mt-6 lg:mt-0 w-96 h-64 bg-white border border-red-600 border-4"
              data-aos="flip-left"
              data-aos-duration="1500"
            >
              <CardBody>
                <Typography
                  variant="h2"
                  color="black"
                  className="mb-2 mt-2 ml-2 "
                >
                  Diploma in Electronics Engineering
                </Typography>
                <Typography className="ml-2">
                  Model Polytechnic college Vadakara
                  <br /> 2018-2021
                </Typography>
              </CardBody>
            </Card>
            <Card
              className="mt-6 lg:mt-0 w-96 h-64 bg-white border border-red-600 border-4"
              data-aos="flip-left"
              data-aos-duration="1500"
            >
              <CardBody>
                <Typography
                  variant="h2"
                  color="black"
                  className="mb-2 mt-2 ml-2"
                >
                  HSE Commerce
                </Typography>
                <Typography className="ml-2">
                  B E M Hss Vadakara
                  <br /> 2016-2018
                </Typography>
              </CardBody>
            </Card>
            <Card
              className="mt-6 lg:mt-0 w-96 h-64 bg-white border border-red-600 border-4"
              data-aos="flip-left"
              data-aos-duration="1500"
            >
              <CardBody>
                <Typography
                  variant="h2"
                  color="black"
                  className="mb-2 mt-2 ml-2"
                >
                  SSLC
                </Typography>
                <Typography className="ml-2">
                  B E M Hss Vadakara
                  <br /> 2016
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className=" mt-40 ">
          <h1 class="text-2xl sm:text-4xl  flex justify-center items-center text-white ml-4 relative">
          My Recent&nbsp;  <strong className="text-purple-600"> Works</strong>
          </h1> <br />
          <p style={{ color: "white",textAlign:"center" }}>
          Here are a few projects I've worked on recently.
        </p>
          <div
            class=" flex flex-col items-center lg:flex-row justify-between mx-auto max-w-7xl px-6 lg:px-8  overflow-hidden  py-24 sm:py-32  "
            data-aos="zoom-in"
            data-aos-duration="2500"
          >
           
            <Card className="w-96 bg-282c34 text-white rounded-md py-4 px-4 border-2 border-purple-600 shadow-lg shadow-purple-500/50 transform hover:scale-105 transition duration-300 mb-24 ">
      <CardHeader shadow={false} floated={false} className="h-48">
        <img
          src={oneforall}
          alt="card-image"
          className="  object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2  text-center text-bold ">
          <Typography color="blue-g" className="font-medium">
          ONE FOR ALL
          </Typography>
         
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-50"
        >
          "One For All" is a full-stack web application developed as
                      part of my academic projects. It serves as an on-demand
                      service booking platform, connecting customers with
                      professionals such as photographers and house cleaners
                      seamlessly through a web application interface.
        </Typography>
      </CardBody>
      <CardFooter className="pt-28">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Github
        </Button>
      </CardFooter>
    </Card>
    <Card className="w-96 bg-282c34 text-white rounded-md py-4 px-4 border-2 border-purple-600 shadow-lg shadow-purple-500/50 transform hover:scale-105 transition duration-300 mb-24">
      <CardHeader shadow={false} floated={false} className="h-48">
        <img
          src={vibee}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 text-center text-bold ">
          <Typography color="blue-gray" className="font-medium">
          VIBEE - MUSIC PLAYER
          </Typography>
         
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-50"
        >
           Developed Vibee Music Player using MERN stack, enabling
                      seamless music streaming and management. Implemented
                      features for user authentication, playlist creation, and
                      dynamic music playback. Leveraged MongoDB for data
                      storage, Express for backend APIs, React for interactive
                      frontend, and Node.js for server-side functionality
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Github
        </Button>
      </CardFooter>
    </Card>
    <Card className="w-96 bg-282c34 text-white rounded-md py-4 px-4 border-2 border-purple-600 shadow-lg shadow-purple-500/50 transform hover:scale-105 transition duration-300 mb-24">
      <CardHeader shadow={false} floated={false} className="h-48">
        <img
          src={drivemate}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2  ">
          <Typography color="blue-gray" className="font-medium text-center text-bold">
          DRIVEMATE
          </Typography>
         
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-small opacity-50 "
        >
           Developed DriveMate, a MERN-based car rental app with a
                      user-friendly React interface for easy browsing and
                      booking. Utilized MongoDB for robust data management,
                      including vehicle details and user profiles. Implemented
                      secure authentication using Node.js and Express.js,
                      resulting in a seamless and efficient rental experience.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Github
        </Button>
      </CardFooter>
    </Card>
          </div>
        </div>
      </div>
      <div className="mt-40 flex justify-center">
        <div className="w-full h-full flex flex-col justify-center items-center rounded-md py-4 px-4 border-2 border-red-600 lg:rounded-full">
          <h1 className="text-5xl font-bold text-yellow-600 sm:text-6xl ">
            CONTACT ME
          </h1>
          <div>
            <p class="mt-16 text-lg leading-8 text-white ">
              Phone &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 7025016937 <br />
              Email &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              ajayharigovindam@gmail.com
              <br /> Address &nbsp; &nbsp; &nbsp; &nbsp;
              Harigovindam(HO),Chorode(PO) <br /> &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              Vadakara,Kozhikode <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Kerala
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12" />
      <div class="text-center p-6 bg-black footer">
        <span class="text-white">&copy; 2024 Copyright - </span>
        <a class="link-underline text-white font-bold" href="">Ajay S Rajendran</a>
      </div>
    </div>
    </div>
  );
}

export default Hero;
