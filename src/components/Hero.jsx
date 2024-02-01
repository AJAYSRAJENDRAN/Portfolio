import React from "react";
import ajay from "../Assets/Ajay image.png";
import oneforall from "../Assets/oneforall.png";
import vibee from "../Assets/vibee.png";
import drivemate from "../Assets/drivemate.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import aiimage from "../Assets/ai image.png";

function Hero() {
  return (
    <div className="text-#60a5fa ">
      <div
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
      </div>
      <div
        className=" mt-12  "
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-offset="200"
      >
        <h1 className="text-5xl font-bold  text-yellow-600 sm:ml-6 sm:text-7xl ">
          About
        </h1>
        <div class="overflow-hidden bg-BLACK py-24 sm:py-32 text-white">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div class="lg:pr-8 lg:pt-4">
                <div class="lg:max-w-lg">
                  <p class="mt-6 text-lg leading-8 text-#3F6844">
                    Hello! I'm Ajay S Rajendran, a passionate MERN stack
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
                src={aiimage}
                alt="Ai model"
                class="  w-64 h-96 max-w-none sm:w-80 md:-ml-4 lg:-ml-0 "
              />
            </div>
          </div>
        </div>

        <div className=" mt-40 ">
          <h1 class="text-5xl sm:text-7xl font-bold flex justify-center items-center text-yellow-600 ml-4 relative">
            SKILLS
          </h1>

          <div
            class=" py-24 sm:py-32 text-white"
            data-aos="flip-up"
            data-aos-duration="2500"
          >
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
              <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                <div class="mx-auto flex max-w-xs flex-col gap-y-4  rounded-md py-4 px-4 border-2 border-purple-600  shadow-lg shadow-purple-500/50 transform hover:scale-105 transition duration-300">
                  <dd class="order-first text-3xl font-semibold tracking-tight text-#3F6844 sm:text-5xl">
                    Nodejs
                  </dd>
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-4 rounded-md py-4 px-4 border-2 border-purple-600 shadow-lg shadow-purple-500/50 transform hover:scale-105 transition duration-300">
                  <dd class="order-first text-3xl font-semibold tracking-tight text-#3F6844 sm:text-5xl">
                    Express js
                  </dd>
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-4 rounded-md py-4 px-4 border-2 border-purple-600 shadow-lg shadow-purple-500/50 transform hover:scale-105 transition duration-300">
                  <dd class="order-first text-3xl font-semibold tracking-tight text-#3F6844 sm:text-5xl">
                    React js
                  </dd>
                </div>

                <div class="mx-auto flex max-w-xs flex-col gap-y-4 rounded-md py-4 px-4 border-2 border-purple-600 shadow-lg shadow-purple-500/50 transform hover:scale-105 transition duration-300">
                  <dd class="order-first text-3xl font-semibold tracking-tight text-#3F6844 sm:text-5xl">
                    MongoDB
                  </dd>
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-4 rounded-md py-4 px-4 border-2 border-purple-600 shadow-lg shadow-purple-500/50 transform hover:scale-105 transition duration-300">
                  <dd class="order-first text-3xl font-semibold tracking-tight text-#3F6844 sm:text-5xl">
                    Javascript
                  </dd>
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-4 rounded-md py-4 px-4 border-2 border-purple-600 shadow-lg shadow-purple-500/50 transform hover:scale-105 transition duration-300">
                  <dd class="order-first text-3xl font-semibold tracking-tight text-#3F6844 sm:text-5xl">
                    HTML
                  </dd>
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-4 rounded-md py-4 px-4 border-2 border-purple-600 shadow-lg shadow-purple-500/50 transform hover:scale-105 transition duration-300">
                  <dd class="order-first text-3xl font-semibold tracking-tight text-#3F6844 sm:text-5xl">
                    CSS
                  </dd>
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-4 rounded-md py-4 px-4 border-2 border-purple-600 shadow-lg shadow-purple-500/50 transform hover:scale-105 transition duration-300">
                  <dd class="order-first text-3xl font-semibold tracking-tight text-#3F6844 sm:text-5xl">
                    Bootstrap
                  </dd>
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-4 rounded-md py-4 px-4 border-2 border-purple-600 shadow-lg shadow-purple-500/50 transform hover:scale-105 transition duration-300">
                  <dd class="order-first text-3xl font-semibold tracking-tight text-#3F6844 sm:text-5xl">
                    Material UI
                  </dd>
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-4 rounded-md py-4 px-4 border-2 border-purple-600 shadow-lg shadow-purple-500/50 transform hover:scale-105 transition duration-300">
                  <dd class="order-first text-3xl font-semibold tracking-tight text-#3F6844 sm:text-5xl">
                    Tailwind CSS
                  </dd>
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-4 rounded-md py-4 px-4 border-2 border-purple-600 shadow-lg shadow-purple-500/50 transform hover:scale-105 transition duration-300">
                  <dd class="order-first text-3xl font-semibold tracking-tight text-#3F6844 sm:text-5xl">
                    Redux
                  </dd>
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-4 rounded-md py-4 px-4 border-2 border-purple-600 shadow-lg shadow-purple-500/50 transform hover:scale-105 transition duration-300">
                  <dd class="order-first text-3xl font-semibold tracking-tight text-#3F6844 sm:text-5xl">
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
        <div className=" mt-40  ">
          <h1 className="text-7xl font-bold  text-yellow-600 sm:ml-6  ">
            Projects
          </h1>
          <div
            class="overflow-hidden bg-BLACK py-24 sm:py-32 text-white"
            data-aos="zoom-in"
            data-aos-duration="2500"
          >
            <div class="mx-auto max-w-7xl px-6 lg:px-8 w-full h-full flex flex-col justify-center items-center rounded-md py-4 px-4 border-2 border-gray-600 lg:border-none">
              <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div class="lg:pr-8 lg:pt-4  ">
                  <div class="lg:max-w-lg">
                    <p class="mt-2 text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">
                      ONE FOR ALL
                    </p>
                    <p class="mt-6 text-lg leading-8 text-#3F6844">
                      "One For All" is a full-stack web application developed as
                      part of my academic projects. It serves as an on-demand
                      service booking platform, connecting customers with
                      professionals such as photographers and house cleaners
                      seamlessly through a web application interface.
                    </p>
                  </div>
                </div>
                <img
                  src={oneforall}
                  alt="Product screenshot"
                  class=" mt-12 w-64 h-auto max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-80 md:-ml-4 lg:-ml-0 "
                />
              </div>
            </div>
          
            <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-32  w-full h-full flex flex-col justify-center items-center rounded-md py-4 px-4 border-2 border-gray-600 lg:border-none">
              <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div class="lg:pr-8 lg:pt-4">
                  <div class="lg:max-w-lg">
                    <p class="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
                      VIBEE - MUSIC PLAYER
                    </p>
                    <p class="mt-6 text-lg leading-8 text-#3F6844">
                      Developed Vibee Music Player using MERN stack, enabling
                      seamless music streaming and management. Implemented
                      features for user authentication, playlist creation, and
                      dynamic music playback. Leveraged MongoDB for data
                      storage, Express for backend APIs, React for interactive
                      frontend, and Node.js for server-side functionality
                    </p>
                  </div>
                </div>
                <img
                  src={vibee}
                  alt="Product screenshot"
                  class=" mt-12 w-64 h-auto max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-80 md:-ml-4 lg:-ml-0 "
                />
              </div>
            </div>
            <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-32  w-full h-full flex flex-col justify-center items-center rounded-md py-4 px-4 border-2 border-gray-600 lg:border-none">
              <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div class="lg:pr-8 lg:pt-4">
                  <div class="lg:max-w-lg">
                    <p class="mt-2 text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl">
                      DRIVEMATE
                    </p>
                    <p class="mt-6 text-lg leading-8 text-#3F6844">
                      Developed DriveMate, a MERN-based car rental app with a
                      user-friendly React interface for easy browsing and
                      booking. Utilized MongoDB for robust data management,
                      including vehicle details and user profiles. Implemented
                      secure authentication using Node.js and Express.js,
                      resulting in a seamless and efficient rental experience.
                    </p>
                  </div>
                </div>
                <img
                  src={drivemate}
                  alt="Product screenshot"
                  class=" mt-12 w-64 h-auto max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-80 md:-ml-4 lg:-ml-0 "
                />
              </div>
            </div>
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
    </div>
  );
}

export default Hero;
