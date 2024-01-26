import React from "react";
import ajay from "../Assets/Ajay image.png";
import oneforall from "../Assets/oneforall.png";
import vibee from "../Assets/vibee.png";
import drivemate from "../Assets/drivemate.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Hero() {
  return (
    <div className= "text-#60a5fa " >
      <div className="flex justify-center items-start h-screen"  data-aos="fade-up" data-aos-duration="3000">
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
      <div className=" mt-12  "  data-aos="fade-right"  data-aos-duration="1500" data-aos-offset="200">
        <h1 className="text-5xl sm:text-8xl font-bold  text-yellow-600 font-sans hover:font-serif ">About</h1>

        <div className=" mt-4">
          <p className="font-light text-2xl  text-white lg:p-4 ">
            Hello! I'm Ajay S Rajendran, a passionate MERN stack developer with
            a strong <br /> foundation in electronics engineering. My journey
            into the world of technology began <br /> with a diploma in
            electronics engineering, where I gained a solid understanding of{" "}
            <br /> electronic systems. <br />
            Driven by a keen interest in web development, I further honed my
            skills by completing <br /> a certificate course in MERN stack
            development from Futura Labs Calicut. This <br /> intensive program
            equipped me with the latest tools and technologies in MongoDB,{" "}
            <br /> Express.js, React.js, and Node.js—the building blocks of
            modern web applications.
          </p>
        </div>
      </div>

      <div className=" mt-20 ">
        <h1 class="text-5xl sm:text-8xl font-bold flex justify-center items-center text-yellow-600 ml-4 relative">
          SKILLS
        </h1>

        <div class=" py-24 sm:py-32 text-white" data-aos="flip-up"data-aos-duration="2500"  >
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dd class="order-first text-3xl font-semibold tracking-tight text-#3F6844 sm:text-5xl">
                  Nodejs
                </dd>
              </div>
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dd class="order-first text-3xl font-semibold tracking-tight text-#3F6844 sm:text-5xl">
                  Express js
                </dd>
              </div>
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dd class="order-first text-3xl font-semibold tracking-tight text-#3F6844 sm:text-5xl">
                  React js
                </dd>
              </div>

              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dd class="order-first text-3xl font-semibold tracking-tight text-#3F6844 sm:text-5xl">
                  MongoDB
                </dd>
              </div>
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dd class="order-first text-3xl font-semibold tracking-tight text-#3F6844 sm:text-5xl">
                  Javascript
                </dd>
              </div>
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dd class="order-first text-3xl font-semibold tracking-tight text-#3F6844 sm:text-5xl">
                  HTML
                </dd>
              </div>
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dd class="order-first text-3xl font-semibold tracking-tight text-#3F6844 sm:text-5xl">
                  CSS
                </dd>
              </div>
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dd class="order-first text-3xl font-semibold tracking-tight text-#3F6844 sm:text-5xl">
                  Bootstrap
                </dd>
              </div>
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dd class="order-first text-3xl font-semibold tracking-tight text-#3F6844 sm:text-5xl">
                  Material UI
                </dd>
              </div>
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dd class="order-first text-3xl font-semibold tracking-tight text-#3F6844 sm:text-5xl">
                  Tailwind CSS
                </dd>
              </div>
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dd class="order-first text-3xl font-semibold tracking-tight text-#3F6844 sm:text-5xl">
                  Redux
                </dd>
              </div>
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dd class="order-first text-3xl font-semibold tracking-tight text-#3F6844 sm:text-5xl">
                  Git
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className="text-#3F6844 mt-12  ">
        <h1 className="text-5xl sm:text-7xl font-bold  text-yellow-600 ">Education</h1>
        <div className=" mt-16 text-white">
          <p className=" text-#3F6844 lg:p-4 text-2xl ">
            <b className="text-3xl sm:text-4xl">Diploma in Electronics Engineering</b>{" "}
            <br /> <br />
            Model Polytechnic college vadakara
            <br />
            2018 - 2021
            <br /> <br /> <br />
            <b className="text-3xl sm:text-4xl">HSE Commerce</b>
            <br /> <br />
            B E M Hss Vadakara <br />
            2016-2018
            <br /> <br /> <br />
            <b className="text-3xl sm:text-4xl">SSLC</b> <br /> <br />
            B E M Hss Vadakara <br />
            2016
          </p>
        </div>
      </div>
      <div className=" mt-12  ">
        <h1 className="text-7xl font-bold  text-yellow-600 ">Projects</h1>
        <div class="overflow-hidden bg-BLACK py-24 sm:py-32 text-white"data-aos="zoom-in"data-aos-duration="2500">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div class="lg:pr-8 lg:pt-4">
                <div class="lg:max-w-lg">
                  <p class="mt-2 text-3xl font-bold tracking-tight text-#3F6844 sm:text-4xl">
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
          <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-32" >
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div class="lg:pr-8 lg:pt-4">
                <div class="lg:max-w-lg">
                  <p class="mt-2 text-3xl font-bold tracking-tight text-#3F6844 sm:text-4xl">
                    VIBEE - MUSIC PLAYER
                  </p>
                  <p class="mt-6 text-lg leading-8 text-#3F6844">
                    Developed Vibee Music Player using MERN stack, enabling
                    seamless music streaming and management. Implemented
                    features for user authentication, playlist creation, and
                    dynamic music playback. Leveraged MongoDB for data storage,
                    Express for backend APIs, React for interactive frontend,
                    and Node.js for server-side functionality
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
          <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-32">
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div class="lg:pr-8 lg:pt-4">
                <div class="lg:max-w-lg">
                  <p class="mt-2 text-3xl font-bold tracking-tight text-#3F6844 sm:text-4xl">
                    DRIVEMATE
                  </p>
                  <p class="mt-6 text-lg leading-8 text-#3F6844">
                    Developed DriveMate, a MERN-based car rental app with a
                    user-friendly React interface for easy browsing and booking.
                    Utilized MongoDB for robust data management, including
                    vehicle details and user profiles. Implemented secure
                    authentication using Node.js and Express.js, resulting in a
                    seamless and efficient rental experience.
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
  );
}

export default Hero;
