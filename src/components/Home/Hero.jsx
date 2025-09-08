import React from "react";
import "tailwindcss";
// import React, { useState } from "react";
import data from '../data/data.json';
import logo from "./logo.svg";
import Frame1 from "./Frame 1.svg";
import blueLine from "./blueLine.svg";
import basil_arrow from "./basil_arrow.svg";
import Group7 from "./Group 7.svg";
import twemoji_rocket from "./twemoji_rocket.svg";
import map from "./map.svg";
import EllipseLeft from "./EllipseLeft.svg";
import EllipseRight from "./EllipseRight.svg";
import pattern from "./pattern.svg";
import girl from "./girl.svg";
import vector from "./vector.svg";
import bulb from "./bulb.svg";
import archery from "./archery.svg";
import setting from "./setting.svg";
import rocketFlat from "./rocketFlat.svg";
import search from "./search.svg";
import earth from "./earth.svg";
import career from "./career.svg";
import leftBackArrow from "./leftBackArrow.svg";
import rightFrwdArrow from "./rightFrwdArrow.svg";
import stars from "./stars.svg";
import footerImage from "./footerImage.svg";
import call from "./call.svg";
import mail from "./mail.svg";
import loc from "./loc.svg";
import computer from "./computer.svg";
import speed from "./speed.svg";
import handshake from "./handshake.svg";
import barChart from "./barChart.svg";
import shield from "./shield.svg";
import worldMap from "./worldMap.svg";
import Frame_75 from "./Frame_75.svg";
import zeroOnes from "./zeroOnes.svg";
import zeroTwo from "./zeroTwo.svg";
import zeroThree from "./zeroThree.svg";
import zeroFour from "./zeroFour.svg";
import zeroFive from "./zeroFive.svg";

const UpperTiltArrow = () => {
  return (
    <div>
      <img src={basil_arrow} alt="bassil arrow up solid" />
    </div>
  );
};
const MoreThanRecruiters = () => {
  return (
    <div className="flex">
      <div className="w- [1240px] h-[320px] ml-[100px] mr-[100px] mt-[140px] rotate-0 opacity-100 ">
        <span className="ml-[100px] rotate-0 opacity-100  text-[#3D3D3D] font-bold text-[32px]">
          <span className="  ">We Are More Than Recruiters</span>
          <br />
          <span className="ml-[100px] rotate-0 opacity-100  text-[#3D3D3D]">
            We’re Growth Partners
          </span>
        </span>
        <img
          className="w-[470px] h-[76px] mt-[130px] ml-[100px]"
          src={Group7}
          alt=""
        />
      </div>
      <div className="w-[450px] h-[140px] mt-[140px] ml-[80px]   leading-[35px]">
        <p className="text-[#7F7F7F] mb-[13px]">
          At Hunting Skuad, we are architects of career success and business
          growth. Established with a vision to redefine recruitment, we bring a
          people-centric, innovative, and ethical approach to talent
          acquisition.
        </p>
        <p className="text-[#7F7F7F] mb-[13px]">
          Our Mission: Empowering Careers, Elevating Businesses. We focus on
          building long-term partnerships and thriving, dynamic teams.
        </p>
        <p className="text-[#7F7F7F]">
          Our Motto: Great teams build great organizations.
        </p>
      </div>
    </div>
  );
};
const Card1 = () => {
  return (
    <div className="bg-[#EEEEEE] w-[405px] rounded-[20px] p-6 shadow h-[302px]">
      <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-white shadow">
        <img className="w-[40px] h-[40px]" src={twemoji_rocket} alt="rocket" />
      </div>

      <h3 className="mt-6 font-semibold text-[20px] text-[#3D3D3D]">
        Deep Startup Focus
      </h3>

      <p className="mt-3 text-[18px] leading-[30px] text-[#7F7F7F]">
        We understand the DNA of startups, where agility and speed are crucial.
        We adapt to your journey.
      </p>
    </div>
  );
};
const Card2 = () => {
  return (
    <div className="bg-[#EEEEEE] w-[405px] rounded-[20px] p-6 shadow h-[302px]">
      <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-white shadow">
        <img className="w-[40px] h-[40px]" src={computer} alt="rocket" />
      </div>

      <h3 className="mt-6 font-semibold text-[20px] text-[#3D3D3D]">
        Tech + Leadership Expertise
      </h3>

      <p className="mt-3 text-[18px] leading-[30px] text-[#7F7F7F]">
        From SDEs to CTOs, from product leaders to non-tech CXOs, we cover the
        full spectrum of hiring needs.
      </p>
    </div>
  );
};
const Card3 = () => {
  return (
    <div className="bg-[#EEEEEE] w-[405px] rounded-[20px] p-6 shadow h-[302px]">
      <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-white shadow">
        <img className="w-[40px] h-[40px]" src={speed} alt="rocket" />
      </div>

      <h3 className="mt-6 font-semibold text-[20px] text-[#3D3D3D]">
        Speed + Precision
      </h3>

      <p className="mt-3 text-[18px] leading-[30px] text-[#7F7F7F]">
        Our structured process enables us to deliver a curated shortlist in just
        24 hours, balancing urgency with quality.
      </p>
    </div>
  );
};
const Card4 = () => {
  return (
    <div className="bg-[#EEEEEE] w-[405px] rounded-[20px] p-6 shadow h-[302px]">
      <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-white shadow">
        <img className="w-[40px] h-[40px]" src={handshake} alt="rocket" />
      </div>

      <h3 className="mt-6 font-semibold text-[20px] text-[#3D3D3D]">
        Partnership Mindset
      </h3>

      <p className="mt-3 text-[18px] leading-[30px] text-[#7F7F7F]">
        We work as an extension of your team, focused on your business goals
        rather than just filling roles.
      </p>
    </div>
  );
};
const Card5 = () => {
  return (
    <div className="bg-[#EEEEEE] w-[405px] rounded-[20px] p-6 shadow h-[302px]">
      <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-white shadow">
        <img className="w-[40px] h-[40px]" src={barChart} alt="rocket" />
      </div>

      <h3 className="mt-6 font-semibold text-[20px] text-[#3D3D3D]">
        Research-Driven Approach
      </h3>

      <p className="mt-3 text-[18px] leading-[30px] text-[#7F7F7F]">
        Every search is backed by talent mapping, market intelligence, and
        data-driven insights.
      </p>
    </div>
  );
};
const Card6 = () => {
  return (
    <div className="bg-[#EEEEEE] w-[405px] rounded-[20px] p-6 shadow h-[302px]">
      <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-white shadow">
        <img className="w-[40px] h-[40px]" src={shield} alt="rocket" />
      </div>

      <h3 className="mt-6 font-semibold text-[20px] text-[#3D3D3D]">
        Tech + Leadership Expertise
      </h3>

      <p className="mt-3 text-[18px] leading-[30px] text-[#7F7F7F]">
        Integrity drives our approach. Clients trust us for clear communication,
        fair practices, and lasting relationships.
      </p>
    </div>
  );
};

const WhyCompaniesChooseUs = () => {
  return (
    <div className="flex w-[1350px] h-[946px] mt-[120px] ml-[100px] rounded-[20px]">
      <div>
        <h2 className="w-[382px] h-[96px] mt-[px] ml-[80px] font-700 font-bold text-[32px] leading-[48px] text-[#3D3D3D]">
          Why Companies <br /> Choose Us
        </h2>
        <p className="w-[360px] h-[175px] mt-[20px] text-[18px] leading-[35px] font-[400] text-[#7F7F7F] ml-[80px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters
        </p>
        <img
          className="w-[full] h-[full] mt-[180px] ml-[-120px]"
          src={worldMap}
          alt="word map"
        />
      </div>
      <div className="flex flex-wrap  p-1 gap-5">
        <Card1></Card1>
        <Card2></Card2>
        <Card3></Card3>
        <Card4></Card4>
        <Card5></Card5>
        <Card6></Card6>
      </div>
    </div>
  );
};
const Pattern = () => {
  return (
    <span>
      <img
        className="-rotate-z-35 -z-50 w-[1724] h-[538px] ml-[-217px]"
        src={pattern}
        alt="pattern"
      />
    </span>
  );
};
const HireFasterHireSmarter = () => {
  return (
    <div className="bg-[#FFFFFF] w-[1280px] h-[549px] ml-[100px] flex">
      <div className="w-[598px] h-[484px] mt-[241px] ml-[80px]">
        <h2 className="text-[#3D3D3D] leading-[48px] text-[32px] font-bold font-700 w-[422px] h-[48px]">
          Hire Faster. Hire Smarter.
        </h2>
        <p className="w-[527px] h-[140px] mt-[24px] font-[400] text-[18px] leading-[35px] text-[#7F7F7F]">
          We partner with ambitious organizations to deliver recruitment
          solutions tailored to their needs. Whether you’re hiring engineers at
          scale or looking for your next CXO, we have the expertise, speed, and
          network to make it happen.
        </p>
        <ul className="list-disc text-[#7F7F7F] leading-[3] w-[4600x] h-[35px] mt-[26px] ml-[25px] ">
          <li className="">
            Proven success with 100+ startups and enterprises
          </li>
          <li>
            Flexible engagement models: contingency, RPO, or executive search
          </li>
          <li>
            Dedicated recruiters who understand startup culture and challenges
          </li>
        </ul>
        <div className="flex w-[211px] h-[48px] mt-[26px]">
          <button className="w-[163px] h-[48px] rounded-[50px] p-[10px] gap-[10px] bg-[#007BFF] text-[#FFFFFF] text-[16px] mt-[134px]">
            Request Talent
          </button>
          <div className="w-[48px] h-[48px] mt-34">
            <UpperTiltArrow></UpperTiltArrow>
          </div>
        </div>
      </div>

      <div className="w-[544px] h-[540px]  mt-[237px] ml-[79px] ">
        <img src={girl} alt="girl" />
      </div>
    </div>
  );
};
// const icons = [bulb, archery, setting, rocketFlat, search, earth];
// const OurServices = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="w-[1300px] h-auto mt-[350px] ml-[80px]">
//       {/* Heading */}
//       <div className="flex">
//         <h3 className="w-[212px] h-[48px] mt-[5px] ml-[80px] font-[700] text-[32px] text-[#3D3D3D]">
//           Our Services
//         </h3>
//         <p className="text-[#7F7F7F] w-[815px] h-[105px] ml-[200px] leading-[30px] text-[19px] font-[400]">
//           It is a long established fact that a reader will be distracted by the
//           readable content of a page when looking at its layout. The point of
//           using Lorem Ipsum is that it has a more-or-less normal distribution of
//           letters
//         </p>
//       </div>

//       {/* Accordian */}
//       <div className="w-[1300px] h-auto">
//         {data["Our Services"].map((item, index) => (
//           <div
//             key={index}
//             onClick={() => toggleAccordion(index)}
//             className="cursor-pointer w-[1240px] ml-[100px] border-b border-[#D3D3D3] py-4"
//           >
//             <div className="flex justify-between items-center">
//               <div className="flex items-center gap-4 ml-[10px]">
//                 <img
//                   className="w-[28px] h-[28px]"
//                   src={icons[index]}
//                   alt="icon"
//                 />
//                 <h3 className="font-semibold text-[22px] text-[#3D3D3D]">
//                   {item.header}
//                 </h3>
//               </div>
//               <img
//                 className={`mr-[20px] transition-transform ${
//                   openIndex === index ? "rotate-180" : ""
//                 }`}
//                 src={vector}
//                 alt="toggle icon"
//               />
//             </div>

//             {/* Expanded Content */}
//             {openIndex === index && (
//               <p className="ml-[50px] mt-2 text-[#7F7F7F] text-[16px] leading-[24px]">
//                 {item.content}
//               </p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

const OurServices = () => {
  return (
    <div className="w-[1300px] h-[640px] mt-[350px] ml-[80px] ">
      <div className="flex">
        <div>
          <h3 className="w-[212px] h-[48px] mt-[5px] ml-[80px] font-[700] font-bold text-[32px] text-[#3D3D3D]">
            Our Services
          </h3>
        </div>
        <div>
          <p className="text-[#7F7F7F] w-[815px] h-[105px] ml-[200px] leading-[30px] text-[19px] font-[400]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
             of using Lorem Ipsum is that it has a more-or-less normal
             distribution of letters
           </p>
         </div>
       </div>

       <div className="w-[1300px] h-[504px]  ">
         <div className="w-[1240px] h-[84px] justify-between ml-[100px] ">
           <div className="w-[1180px] h-[48px] justify-between ">
             <br />
             <hr className="text-[#D3D3D3] border-b-1 w-298" />
             <div className="flex justify-between">
               <div className="w-[252px] h-[48px] gap-[20px] mt-[20px] flex ml-[10px]">
                 <img className="w-[28px] h-[28px]" src={bulb} alt="icon" />
                 <h3 className="w-[204px] h-[48px] font-[600] font-semibold text-[22px] leading-[32px] text-[#3D3D3D]">
                   Tech Recruitment
                 </h3>
               </div>
               <img className="mr-[20px]" src={vector} alt="icon" />
             </div>
             <hr className="text-[#D3D3D3] border-b-1 w-298" />
           </div>
         </div>

         <div className="w-[1240px] h-[84px]  justify-between ml-[100px]">
           <div className="w-[1180px] h-[48px] justify-between ">
             <div className="flex justify-between">
               <div className="w-[252px] h-[48px] gap-[20px] mt-[20px] flex ml-[10px]">
                 <img className="w-[28px] h-[28px]" src={archery} alt="icon" />
                 <h3 className="w-[204px] h-[48px] font-[600] font-semibold text-[22px] leading-[32px] text-[#3D3D3D]">
                   Executive Search
                 </h3>
               </div>
               <img className="mr-[20px]" src={vector} alt="icon" />
             </div>
             <hr className="text-[#D3D3D3] border-b-1 w-298" />
           </div>
         </div>

         <div className="w-[1240px] h-[65px]  justify-between ml-[100px]">
           <div className="w-[1180px] h-[48px] justify-between ">
             <div className="flex justify-between">
               <div className="w-[400px] h-[48px] gap-[20px] flex ml-[10px]">
                 <img className="w-[28px] h-[28px]" src={setting} alt="icon" />
                 <h3 className="w-[396px] h-[48px] font-[600] font-semibold text-[22px] leading-[32px] text-[#3D3D3D]">
                   Resource Process Outsourcing
                 </h3>
               </div>
               <img className="mr-[20px]" src={vector} alt="icon" />
             </div>
             <hr className="text-[#D3D3D3] border-b-1 w-298" />
           </div>
         </div>

         <div className="w-[1240px] h-[65px] justify-between ml-[100px] ">
           <div className="w-[1180px] h-[48px] justify-between ">
             <div className="flex justify-between">
               <div className="w-[300px] h-[48px] gap-[20px] flex ml-[10px]">
                 <img
                  className="w-[28px] h-[28px]"
                  src={rocketFlat}
                  alt="icon"
                />
                <h3 className="w-[250px] h-[48px] font-[600] font-semibold text-[22px] leading-[32px] text-[#3D3D3D]">
                  Start-Up Accelerators
                </h3>
              </div>
              <img className="mr-[20px]" src={vector} alt="icon" />
            </div>
            <hr className="text-[#D3D3D3] border-b-1 w-298" />
          </div>
        </div>

        <div className="w-[1240px] h-[65px]  justify-between ml-[100px] ">
          <div className="w-[1180px] h-[48px] justify-between ">
            <div className="flex justify-between">
              <div className="w-[252px] h-[48px] gap-[20px] flex ml-[10px]">
                <img className="w-[28px] h-[28px]" src={search} alt="icon" />
                <h3 className="w-[204px] h-[48px] font-[600] font-semibold text-[22px] leading-[32px] text-[#3D3D3D]">
                  Talent Mapping
                </h3>
              </div>
              <img className="mr-[20px]" src={vector} alt="icon" />
            </div>
            <hr className="text-[#D3D3D3] border-b-1 w-298" />
          </div>
        </div>

        <div className="w-[1240px] h-[84px] justify-between ml-[100px] ">
          <div className="w-[1180px] h-[48px] justify-between ">
            <div className="flex justify-between">
              <div className="w-[300px] h-[48px] gap-[20px]  flex ml-[10px]">
                <img className="w-[28px] h-[28px]" src={earth} alt="icon" />
                <h3 className="w-[250px] h-[48px] font-[600] font-semibold text-[22px] leading-[32px] text-[#3D3D3D]">
                  Diversity & Inclusion
                </h3>
              </div>
              <img className="mr-[20px]" src={vector} alt="icon" />
            </div>
            <hr className="text-[#D3D3D3] border-b-1 w-298" />
          </div>
        </div>
      </div>
    </div>
  );
};
const Card7 = () => {
  return (
    <div className="w-[500px] h-[247px] ml-[100px] rounded-[20px] text-[#7F7F7F] bg-[#EEEEEE] mb-[40px]">
      <div className="w-[52px] h-[48px] ml-[30px] pt-[30px]">
        <div className="p-2">
          <img className="" src={zeroOnes} alt="" />
        </div>
      </div>
      <h4 className="w-[205px] h-[48px] mt-[50px] ml-[30px] text-[#3D3D3D] text-[20px] font-semibold">
        Deep Startup Focus
      </h4>
      <p className="w-[453px] h-[70px] mt-[14px] ml-[30px] text-[18px] leading-[30px] text-[#7F7F7F] font-[400]">
        We understand the DNA of startups, where agility and speed are crucial.
        We adapt to your journey.
      </p>
    </div>
  );
};
const Card8 = () => {
  return (
    <div className="w-[500px] h-[247px] ml-[100px] rounded-[20px] text-[#7F7F7F] border-1 border-[#7F7F7F] mb-[40px]">
      <div className="w-[52px] h-[48px] ml-[30px] pt-[30px]">
        <div className="p-2">
          <img className="" src={zeroTwo} alt="" />
        </div>
      </div>
      <h4 className="w-[205px] h-[48px] mt-[50px] ml-[30px] text-[#3D3D3D] text-[20px] font-semibold">
        Deep Startup Focus
      </h4>
      <p className="w-[453px] h-[70px] mt-[14px] ml-[30px] text-[18px] leading-[30px] text-[#7F7F7F] font-[400]">
        We maintain constant communication with candidates, ensuring they remain
        motivated and informed.
      </p>
    </div>
  );
};
const Card9 = () => {
  return (
    <div className="w-[500px] h-[247px] ml-[100px] rounded-[20px] text-[#7F7F7F] border-1 border-[#7F7F7F] mb-[40px]">
      <div className="w-[52px] h-[48px] ml-[30px] pt-[30px]">
        <div className="p-2">
          <img className="" src={zeroThree} alt="" />
        </div>
      </div>
      <h4 className="w-[205px] h-[48px] mt-[50px] ml-[30px] text-[#3D3D3D] text-[20px] font-semibold">
        Consult
      </h4>
      <p className="w-[453px] h-[70px] mt-[14px] ml-[30px] text-[18px] leading-[30px] text-[#7F7F7F] font-[400]">
        We advise both clients and candidates, sharing market insights and
        guiding decision-making.
      </p>
    </div>
  );
};
const Card10 = () => {
  return (
    <div className="w-[500px] h-[247px] ml-[100px] rounded-[20px] text-[#7F7F7F] border-1 border-[#7F7F7F] mb-[40px]">
      <div className="w-[52px] h-[48px] ml-[30px] pt-[30px]">
        <div className="p-2">
          <img className="" src={zeroFour} alt="" />
        </div>
      </div>
      <h4 className="w-[205px] h-[48px] mt-[50px] ml-[30px] text-[#3D3D3D] text-[20px] font-semibold">
        Review
      </h4>
      <p className="w-[453px] h-[70px] mt-[14px] ml-[30px] text-[18px] leading-[30px] text-[#7F7F7F] font-[400]">
        We incorporate feedback to refine our process and improve results
        continuously.
      </p>
    </div>
  );
};
const Card11 = () => {
  return (
    <div className="w-[500px] h-[247px] ml-[100px] rounded-[20px] text-[#7F7F7F] border-1 border-[#7F7F7F]  mb-[40px]">
      <div className="w-[52px] h-[48px] ml-[30px] pt-[30px]">
        <div className="p-2">
          <img className="" src={zeroFive} alt="" />
        </div>
      </div>
      <h4 className="w-[205px] h-[48px] mt-[50px] ml-[30px] text-[#3D3D3D] text-[20px] font-semibold">
        Deliver
      </h4>
      <p className="w-[453px] h-[70px] mt-[14px] ml-[30px] text-[18px] leading-[30px] text-[#7F7F7F] font-[400]">
        We close the loop with successful placements that align with your goals.
      </p>
    </div>
  );
};

const RecruitmentJourney = () => {
  return (
    <div className="w-[1300px] h-[1410px] ml-[80px] flex mb-[100px]">
      <div>
        <h3 className="w-[533px] h-[96px] ml-[100px] font-[700] font-bold text-[32px] leading-[48px] text-[#3D3D3D]">
          A Recruitment Journey That Delivers
        </h3>
        <p className="w-[533px] h-[140px] ml-[100px] font-[400] text-[19px] leading-[35px]  text-[#7F7F7F] mt-[20px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters
        </p>
        <img
          className="w-[576px] h-[384px] rounded-[30px] ml-[100px] mt-[38px] sticky top-0 z-10"
          src={Frame_75}
          alt="photo"
        />
      </div>

      <div className="mt-[10px] ml-[100px]">
        <Card7></Card7>
        <Card8></Card8>
        <Card9></Card9>
        <Card10></Card10>
        <Card11></Card11>
      </div>
    </div>
  );
};
const YourNextBigCareer = () => {
  return (
    <div>
      <div className=" w-[1280px] h-[549px] mt-[20px] ml-[100px] flex">
        {/* details */}
        <div className="w-[550px] h-[483px] ml-[100px]">
          <h3 className="text-[#3D3D3D] leading-[48px] text-[32px] font-bold font-700 w-[422px] h-[48px] ">
            Your Next Big Career Move Starts Here
          </h3>
          <p className="w-[469px] h-[105px] mt-[65px] font-[400] text-[18px] leading-10 text-[#7F7F7F]">
            We help ambitious professionals find meaningful opportunities in
            fast-growing startups and innovative enterprises.`
          </p>
          <ul className="list-disc mt-[18px] text-[#7F7F7F] leading-[3] w-[500px] ml-[25px] font-[400]">
            <li className="">
              Proven success with 100+ startups and enterprises
            </li>
            <li>Expertise across technology and leadership roles</li>
            <li>
              Flexible engagement models: contingency, RPO, or executive search
            </li>
            <li>
              Dedicated recruiters who understand startup culture and challenges
            </li>
          </ul>
          <div className="w-[228px] h-[48px]   flex">
            <button className="w-[180px] h-[48px] rounded-[50px] p-[10px] gap-[10px] bg-[#007BFF] text-[#FFFFFF]">
              Submit Your CV
            </button>
            <UpperTiltArrow></UpperTiltArrow>
          </div>
        </div>
        {/* image */}
        <div className="">
          <img
            className="w-[600px] h-[400px] ml-[60px] mt-[60px] "
            src={career}
            alt=""
          />
        </div>
        {/* button */}
      </div>
    </div>
  );
};
const LeftBackArrow = () => {
  return (
    <div>
      <img src={leftBackArrow} alt="left back arrow" />
    </div>
  );
};
const RightFrwdArrow = () => {
  return (
    <div>
      <img src={rightFrwdArrow} alt="left back arrow" />
    </div>
  );
};
const WhatOurPartnerSay = () => {
  return (
    <div className="w-[auto] h-[237px] mt-[100px] flex ml-[100px]">
      <div className="w-[386px] h-[237px] rounded-[30px]">
        <h4 className="w-[386px] h-[48px] font-bold font-[700] text-[32px] leading-[48px]">
          What Our Partners Say
        </h4>
        <p className="w-[386px] h-[105px] font-[400] text-[18px] leading-[35px] text-[#7F7F7F] mt-[20px]">
          Real stories from the companies and professionals who’ve trusted us to
          shape their teams and careers.
        </p>
        <div className="flex gap-2">
          <LeftBackArrow></LeftBackArrow>
          <RightFrwdArrow></RightFrwdArrow>
        </div>
      </div>

      {/* reviews */}
      <div className="w-[320px] h-[230px] ml-[10px]">
        <img className="mt-[20px]" src={stars} alt="rating" />
        <p className="text-[#7F7F7F] w-[320px] h-[105px] mt-[15px] font-[400] text-[16px] leading-[30px]">
          Yet preference connection unpleasant yet melancholy but end
          appearance. And excellence partiality estimating terminated day
          everything.
        </p>
        <h5 className="text-[#3D3D3D] w-[75px] h-[30px]  font-[600] text-[20px] leading-[100px]">
          Raman
        </h5>
        <p className="w-[110px] h-[16px] mt-[52px] text-[#7F7F7F] font-[400] text-[16px] ">
          Founder @TCS
        </p>
      </div>

      <div className="w-[320px] h-[230px] ml-[30px]">
        <img className="mt-[20px]" src={stars} alt="rating" />
        <p className="text-[#7F7F7F] w-[320px] h-[105px] mt-[15px] font-[400] text-[16px] leading-[30px]">
          Yet preference connection unpleasant yet melancholy but end
          appearance. And excellence partiality estimating terminated day
          everything.
        </p>
        <h5 className="text-[#3D3D3D] w-[75px] h-[30px]  font-[600] text-[20px] leading-[100px]">
          Raman
        </h5>
        <p className="w-[110px] h-[16px] mt-[52px] text-[#7F7F7F] font-[400] text-[16px] ">
          Founder @TCS
        </p>
      </div>

      <div className="w-[320px] h-[230px] ml-[30px]">
        <img className="mt-[20px]" src={stars} alt="rating" />
        <p className="text-[#7F7F7F] w-[320px] h-[105px] mt-[15px] font-[400] text-[16px] leading-[30px]">
          Yet preference connection unpleasant yet melancholy but end
          appearance. And excellence partiality estimating terminated day
          everything.
        </p>
        <h5 className="text-[#3D3D3D] w-[75px] h-[30px]  font-[600] text-[20px] leading-[100px]">
          Raman
        </h5>
        <p className="w-[110px] h-[16px] mt-[52px] text-[#7F7F7F] font-[400] text-[16px] ">
          Founder @TCS
        </p>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className=" py-12 px-6 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div className="lg:col-span-1 w-[359px] h-[210px] mt-[80px]">
            <div className="flex items-center mb-4">
              <div>
                <img src={footerImage} alt="" />
              </div>
            </div>
            <p className="text-[#7F7F7F] text-sm leading-relaxed w-[359px] h-[120px] mt-[30px]  ">
              At Hunting Skuad, we are architects of career success and business
              growth. Established with a vision to redefine recruitment, we
              bring a people-centric, innovative, and ethical approach to talent
              acquisition.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-1 w[97px] h-[182px] mt-[80px] ml-[200px]">
            <h4 className="font-semibold text-[#3D3D3D] mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#7F7F7F] text-sm">
                  Home
                </a>
              </li>{" "}
              <li>
                <a href="#" className="text-[#7F7F7F]  text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#7F7F7F]  text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-[#7F7F7F]  text-sm">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="lg:col-span-1 w[97px]  mt-[80px] ml-[100px]">
            <h4 className="font-semibold text-[#3D3D3D] mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#7F7F7F]  text-sm">
                  Tech Recruitment
                </a>
              </li>
              <li>
                <a href="#" className="text-[#7F7F7F]  text-sm">
                  Executive Search
                </a>
              </li>
              <li>
                <a href="#" className="text-[#7F7F7F]  text-sm">
                  Resource Process Outsourcing
                </a>
              </li>
              <li>
                <a href="#" className="text-[#7F7F7F]  text-sm">
                  Start-Up Accelerators
                </a>
              </li>
              <li>
                <a href="#" className="text-[#7F7F7F]  text-sm">
                  Talent Mapping
                </a>
              </li>
              <li>
                <a href="#" className="text-[#7F7F7F]  text-sm">
                  Diversity & Inclusion
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="lg:col-span-1 w[97px] h-[182px] mt-[80px] ml-[100px]">
            <h4 className="font-semibold text-[#3D3D3D] mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-5 h-5  mr-3 mt-0.5">
                  <img src={call} alt="call icon" />
                </div>
                <span className="text-[#7F7F7F] text-sm">+91-7827550145</span>
              </div>

              <div className="flex items-start">
                <div className="w-5 h-5 text-[#7F7F7F] mr-3 mt-0.5">
                  <img src={mail} alt="mail icon" />
                </div>
                <span className="text-gray-600 text-sm">
                  info@huntingskuad.com
                </span>
              </div>

              <div className="flex items-start">
                <div className="w-5 h-5 text-[#7F7F7F] mr-3 mt-0.5">
                  <img src={loc} alt="location icon" />
                </div>
                <span className="text-[#7F7F7F] text-sm gap-2 leading-7">
                  A-101/2, First Floor, Okhla Industrial Area, Phase II, New
                  Delhi – 110024
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Separate bottom footer */}
        <div className="bg-white border-t text-[#7F7F7F] mt-[70px] px-10 w-full">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-[17px]">
            <p className="text-[#7F7F7F] text-sm">
              All Rights Reserved @2025 Hunting Skuad
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#007BFF]  text-sm">
                Privacy Policy
              </a>
              <span className="text-[#007BFF]">|</span>
              <a href="#" className="text-[#007BFF]  text-sm">
                Terms & Condition
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
const Hero = () => {
  return (
    <div>
      {/* navbar */}
      <div className=" w-[1440px] h-[90px] bg-[#FFFFFF] font-Montserrat ">
        <div className="flex w-[1252px] h-[60px] mt-[15px] ml-[94px] gap-[59px] ">
          <img className="w-[169px] h-[60px] " src={logo} alt="Logo" />
          <div className="flex w-[771px] h-[48px] gap-[34px] left-[-4px] bg-blur bg-blend-color[60] place-content-center  text-center items-center">
            <p className="w-[127px] h-[48px] text-[16px] text-[#FFFFFF] bg-[#007BFF] rounded-[30px] gap-[10px] text-2xl font-Montserrat font-[600px] text-center place-content-center">
              Home
            </p>
            <p>About Us</p>
            <p>Service</p>
            <p>For Companies</p>
            <p>For Candidates</p>
            <p>Contact Us</p>
          </div>
          <div className="flex w-[201px] h-[48px] items-center">
            <p className="bg-[#007BFF] p-[10px] gap-[10px] w-[153px] h-[48px] rounded-[50px] text-[#FFFFFF] font-Montserrat font-[400px] text-center">
              Contact Us
            </p>
            <p>
              <UpperTiltArrow></UpperTiltArrow>
            </p>
          </div>
        </div>
      </div>

      {/* Hero page */}
      <div className="flex">
        {/* heading */}
        <div className=" w-[621px] h-[310px] mt-[202px] ml-[100px] gap-[20px] opacity-[1] ">
          <h1 className="w-[621px] h-[98px] font-montes">
            <span className="text-[#252525] h-[98px] font-bold text-[40px]">
              Connecting Startups with
            </span>
            <br />
            <span className="text-[#007BFF] font-[400]  italic text-[40px] leading-12">
              Tech & Leadership Talent
            </span>
          </h1>
          <br />

          <p className="w-[621px] h-[124px] text-[18px] leading-7 text-[#909090]">
            We help ambitious startups and enterprises scale faster by
            delivering top technology professionals and trusted executive
            leaders. From engineers to <span> </span>C-suite, our mission is to
            empower careers and elevate businesses through meaningful placements
          </p>

          <div className="w-[472px] h-[48px] gap-x-11 flex">
            <div className="w-[201px] h-[48px] flex">
              <button className="w-[152px] h-[48px] rounded-[50px] p-[10px] gap-[10px] bg-[#007BFF] text-[#FFFFFF] text-[16px] align-middle">
                Hire Talent
              </button>
              <UpperTiltArrow />
            </div>
            <div className="w-[260px] h-[48px] flex ">
              <button className="w-[212px] h-[48px] rounded-[50px] border-1 p-[10px] gap-[10px] text-[#007BFF] text-[16px]">
                Join Our Talent Pool
              </button>
              <UpperTiltArrow />
            </div>
          </div>
        </div>
        {/* image */}
        <div className="">
          <img className="w-[601px] h-[508px] mt-[103px]" src={Frame1} alt="" />
        </div>
      </div>
      {/* blue line */}
      <div className="">
        <div>
          {/* <img src={EllipseLeft} alt="" />
          <img src={EllipseRight} alt="" /> */}
          <p
            img={EllipseLeft}
            className="text-[#FFFFFF] mt-[27.px] gap-[30px] -tracking-tighter text-3xl text-center place-content-center w-[1521px] h-[82px]  bg-[#007BFF] font-semibold italic "
          >
            Enterprised served * 24-hour turnaround for initial shortlist *
            Expertise spaning enginee
          </p>
        </div>
      </div>

      {/* <img className="w-full" src={blueLine} alt="" /> */}
      <MoreThanRecruiters></MoreThanRecruiters>
      <WhyCompaniesChooseUs></WhyCompaniesChooseUs>
      {/* <Pattern></Pattern> */}
      <HireFasterHireSmarter></HireFasterHireSmarter>
      <OurServices></OurServices>
      <RecruitmentJourney></RecruitmentJourney>
      <YourNextBigCareer></YourNextBigCareer>
      <WhatOurPartnerSay></WhatOurPartnerSay>
      <Footer></Footer>
    </div>
  );
};
export default Hero;
