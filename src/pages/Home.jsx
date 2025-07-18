import React, { useEffect, useState, useRef, memo } from "react";
import { NavLink } from "react-router-dom";
import { motion } from 'motion/react'
import NumbersAni from "../components/NumbersAni";
import { Cards, ChooseUs, AwardSec } from "../utils";
import ADIDAS from "../assets/images/ADIDAS.jpg";
import CIVIC from "../assets/images/Ilorin civic Center.png";
import COURTHOUSE from "../assets/images/ILORIN COURTHOUSE 3.png";
import KWARAREV from "../assets/images/kwara Revenue.jpg";
import ONL from "../assets/images/ONL.jpg";
import ALTONA from "../assets/images/THE ALTONA 2.png";
import SHORE from "../assets/images/THE SHORE JABI.jpg";
import {MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft,} from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";
import { LuAward } from "react-icons/lu";
import Footer from "../components/Footer";

const Home = () => {
  const imageSlider = [
    {
      image: ADIDAS,
      alt: "ADIDAS",
      Headtext: "ADIDAS FLAGSHIP STORE",
      Locate: "LAGOS STATE",
    },
    {
      image: CIVIC,
      alt: "CIVIC CENTER",
      Headtext: "ILORIN CIVIC CENTER",
      Locate: "ILORIN, KWARA STATE",
    },
    {
      image: COURTHOUSE,
      alt: "ILORIN COURTHOUSE",
      Headtext: "ILORIN COURTHOUSE",
      Locate: "ILORIN, KWARA STATE",
    },
    {
      image: KWARAREV,
      alt: "KWARA REVENUE",
      Headtext: "KWARA INTERNAL REVENUE",
      Locate: "ILORIN, KWARA STATE",
    },
    {
      image: ONL,
      alt: "ONL",
      Headtext: "ONL OFFICE",
      Locate: "YABA, LAGOS STATE",
    },
    {
      image: ALTONA,
      alt: "THE ALTONA",
      Headtext: "THE ALTONA",
      Locate: "LAGOS STATE",
    },
    {
      image: SHORE,
      alt: "THE SHORE JABI",
      Headtext: "THE SHORE JABI",
      Locate: "JABI LAKE, ABUJA",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right");

  // Function to handle Carousel Slide transitions
  const prevSlide = () => {
    setSlideDirection("left");
    const newIndex =
      currentIndex === 0 ? imageSlider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    setSlideDirection("right");
    const newIndex =
      currentIndex === imageSlider.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]);

  // Function to handle number transition


 const NumbersComponent = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: n },
    delay: 600,
    config: { mass: 1, tension: 10, friction: 10 },
    
  });

  return <animated.div>{number.to((val) => val.toFixed(0))}</animated.div>;
};

const Numbers = React.memo(NumbersComponent);



  

  return (
    <div className="overflow-hidden">
      <div className="max-w-[1200px] w-full h-[100vh]  relative overflow-hidden mx-auto">
        <img
          loading="lazy"
          src={imageSlider[currentIndex].image}
          alt={imageSlider[currentIndex].alt}
          key={currentIndex}
          className={` w-full h-full  bg-contain duration-500 transition-transform ease-in-out r rounded-2xl bg-no-repeat ${
            slideDirection === "right"
              ? "translate-x-0 animate-slideInRight"
              : "translate-x-0 animate-slideInLeft"
          }`}
        ></img>
        <div className="absolute flex justify-between w-[95%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
          <MdKeyboardDoubleArrowLeft
            onClick={prevSlide}
            className="text-5xl cursor-pointer"
          />
          <MdKeyboardDoubleArrowRight
            onClick={nextSlide}
            className="text-5xl cursor-pointer"
          />
        </div>
        <div>
          <h1 className="text-3xl md:text-5xl font-Oswald font-bold text-white absolute top-[80%] left-[40%] translate-x-[-50%] translate-y-[-50%]">
            {imageSlider[currentIndex].Headtext}
          </h1>
          <p className="text-lg md:text-xl font-Raleway text-white absolute top-[88%] left-[40%] translate-x-[-50%] translate-y-[-50%]">
            {imageSlider[currentIndex].Locate}
          </p>
        </div>
        <div className="absolute bottom-2 left-[50%] translate-x-[-50%] flex gap">
          {imageSlider.map((_, index) => (
            <RxDotFilled
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`text-3xl cursor-pointer ${
                index === currentIndex ? "text-white" : "text-gray-400"
              }`}
            />
          ))}
        </div>
        <div></div>
      </div>
      <motion.div
      initial={{ opacity: 0, y: 160 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.8 }}
      >

      <div className="mt-10 py-6 px-4 flex sma:flex-col  justify-around bg-[#F2F2F2] ">
        
        <div className="bg-[#FFFFFF] backdrop-blur-sm basis-[60%] p-4 rounded-lg shadow-lg ">
          <h1 className="text-3xl md:text-5xl sma:text-2xl mda:text-2xl font-Oswald text-gray-800 font-bold mt-10">
            See the <span className="">Legacy</span> <span>we've built</span>
          </h1>
          <p className="text-lg md:text-xl sma:text-base mda:text-base font-Raleway mt-4 w-[80%]">
            From landmark infrastructure to modern commercial spaces, our
            projects tell a story of innovation, precision, and lasting impact.
            Explore the milestones we've achieved and the visions we've brought
            to life.
          </p>
          <button className="bg-gray-800 flex items-center gap-2 group text-white px-6 py-2 mt-4 rounded-lg hover:opacity-85 font-Raleway transition duration-300">
            View Projects
            <FaArrowRight className="group-hover:translate-x-4 transition-transform duration-300" />
          </button>
        </div>
        <div className="overflow-hidden basis-[30%] backdrop-blur-md bg-[#FFFFFF] p-4 rounded-lg shadow-lg  sma:mt-4 ">
          <h1 className="flex text-3xl mda:text-2xl sma:text-2xl font-Oswald overflow-hidden">
            <span className=" text-5xl text-blue-600">
              <NumbersAni n={500} />
            </span>
            + Projects
          </h1>
          <p className="font-Raleway mt-4 font-normal tracking-wider">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            suscipit eos rerum magnam ad quia, ab dolore ea quidem, asperiores,
            provident dolores nostrum? Alias pariatur repudiandae atque tenetur
            cum minus hic impedit magnam asperiores necessitatibus sunt
            perspiciatis eum obcaecati, reiciendis itaque eaque, magni
            consectetur ratione inventore? Repellat atque cum consequuntur.
          </p>
        </div>
      </div>
      </motion.div>

      <div className=" mb-10">
        <div className=" w-full mx-auto mt-10 p-4">
          <h1 className="text-3xl md:text-5xl sma:text-2xl mda:text-2xl font-Raleway text-gray-800 font-bold mt-10 text-center">
            Our Engineering <span className="text-blue-600">Services</span>
          </h1>
          <p className="font-Raleway text-center mt-5  text-lg">
            Comprehensive engineering solutions across multiple disciplines,
            delivered with precision and expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto mt-10 p-4">
          {Cards.map((card) => (
            <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: card.id * 0.3 }}
            >

            <div
            key={card.id}
            className={`p-6 rounded-lg shadow-lg transition-transform duration-300  ${card.styless}`}
            >
              
              <div className="flex items-center mb-4">
                <card.socialIcon className={card.iconStyles} />
                <h2 className="text-xl font-Raleway font-bold ml-4">
                  {card.headtext}
                </h2>
              </div>
              <p className={`text-gray-700 ${card.pstyles}`}>{card.text}</p>
            </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center my-6 ">
          <NavLink
            to="/Services"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-xl hover:opacity-80 transition delay-100 ease-linear  "
          >
            View All Services <span></span>
          </NavLink>
        </div>
      </div>

      <div className="px-8  ">
        <h1 className="text-4xl sma:text-2xl mda:text-2xl font-semibold font-Raleway  mb-5">
          Why Choose <span className="text-[#FFCE00]">TOPKLAN</span>
        </h1>
        <div className="flex sma:flex-col mda:flex-col justify-around">
          <div className="basis-[45%] sma:mb-5 mda:mb-5">
            <p className="font-Raleway tracking-wide text-lg ">
              With over 15 years of experience in the engineering industry,
              TOPKLAN Engineering Services has established itself as a trusted
              partner for complex engineering challenges.
            </p>
            {ChooseUs.map((x) => (
              <div key={x.id}>
                <div className="flex items-start gap-4 mt-4">
                  <x.socialIcon className="text-[#FFCE00] text-xl" />
                  <div className="">
                    <h1 className="font-Oswald font-medium">{x.headTxt}</h1>
                    <p className="font-Raleway font-normal">{x.pTxt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="basis-[40%] h-fit bg-blue-600 text-white p-6 rounded-lg shadow-lg">
            <h1 className="text-4xl mb-5 font-Oswald">Our Mission</h1>

            <p className="font-Raleway text-xl font-normal">
              To deliver innovative engineering solutions that exceed client
              expectations while contributing to sustainable development and
              technological advancement.
            </p>
            <div className="bg-blue-500 mt-8 p-4 shadow-lg rounded-xl">
              <p className="text-xl mb-3 font-bold tracking-normal font-Oswald">
                Next Project Starts in :
              </p>
              <span className="text-2xl font-Oswald">2 DAYS</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-neutral-700 pt-6  to-blue-800 text-white py-4 px-6 mt-10 mb-6  w-full shadow-lg">
        <div className="lg:translate-x-96 mx-auto rounded-3xl inline-flex justify-center items-center text-center px-4 py-2 bg-slate-400">
          <LuAward className="mr-3" size={20} />
          <h2 className="text-lg sma:text-base mx-auto  font-Raleway">
            Award-Winning Engineering Solutions
          </h2>
        </div>
        <h2 className="text-5xl sma:text-2xl mda:text-2xl font-Raleway font-bold text-center my-5 leading-[50px]">
          Transform your Dreams Into <br />{" "}
          <span className="bg-gradient-to-r bg-clip-text text-transparent from-yellow-100 to-yellow-400">
            {" "}
            Engineering Reality
          </span>{" "}
        </h2>
        <p className="text-center font-Raleway">
          Partner with industry leaders who understand that exceptional
          engineering <br /> requires both technical mastery and creative
          innovation.
        </p>
        <div>
          <div className="flex sma:flex-col mda:flex-col justify-center gap-4 my-8 mda:items-start items-center mt-10">
            {AwardSec.map((award) => (
              <div
                key={award.id}
                className="  w-[250px] lg:h-[200px] flex items-center  gap-4 justify-center"
              >
                <award.socialIcon
                  className={`text-blue-600 text-5xl rounded-full p-2 mb-4 ${award.styless}`}
                />
                <div>
                  <h3 className="text- font-Raleway font-semibold">
                    {award.head}
                  </h3>
                  <p className="text-slate-300 mt-2">{award.low}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <NavLink
              to="/Contact"
              className="bg-gray-800 inline-flex justify-center group mt-10 font-Raleway py-2 px-8 rounded-lg shadow-xl hover:opacity-80 transition delay-100 ease-linear items-center gap-2"
            >
              Get in Touch{""}
              <FaArrowRight className=" group-hover:translate-x-4 transition-transform duration-300 " />
            </NavLink>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
 