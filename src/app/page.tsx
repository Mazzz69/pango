"use client"
import Spline from '@splinetool/react-spline';
import "@fontsource/poppins";
import PangoImg from "./(assets)/oldbutgoldpango.png"
import ScheduleMeetingButton from './(components)/scheduleMeetingButton';

export default function Home() {

  return (
    <>
      <div className="flex flex-col py-4">
        <div className='pl-4 md:pl-[150px] xl:pl-[300px] py-[40px] xl:py-[140px] flex flex-row justify-between items-center'>
          <div className="relative w-full max-w-[500px] h-auto">
            <div>
              <h1 className="text-2xl font-semibold text-white mb-2">
                PANGO WEB SOLUTIONS
              </h1>
              <h2 className="text-[32px] font-semibold text-[#ff444c] mb-4">
                We help companies boost their online presence through web design and development
              </h2>
            </div>
            <div className='mb-5'>
              <p className="text-base text-white mb-2">
                Stop wasting time and money on subpar websites and ineffective design.
              </p>
              <p className="text-base text-white">
                It's time to enhance your online presence, scale your business, and stand out from the competition.
              </p>
            </div>
            <ScheduleMeetingButton
                color='red'
                title="Speak to Our Team Today"
                subtitle="Schedule Your FREE Consultation Now"
                action='email'
            />
          </div>
          <div className="hidden md:block absolute right-[50px]">
            <Spline scene="https://prod.spline.design/dasPWXnFJrA5JSys/scene.splinecode"/>
          </div>
        </div>

        <div className="px-4 xl:px-[300px] py-[40px] xl:py-[140px] flex flex-col md:flex-row justify-between items-center bg-white">
          <p className="text-[250px] font-semibold text-left text-[#ff444c]">
            01
          </p>
          <div className="flex flex-col gap-5 w-96 justify-center text-left items-center xl:items-start">
            <p className="text-2xl font-semibold text-left text-black">
              Our Philosophy
            </p>
            <div className="text-base text-left text-black">
            <span className="w-[478.83px] h-[102.84px] text-base text-left text-black">
              At Pango, we create outstanding web solutions.
            </span>
              <br/>
              <span className="text-base text-left text-black">
              We eliminate inefficiencies and formalities that hinder most agencies.
            </span>
            </div>
            <div className="text-base text-left text-black">
            <span className="text-base text-left text-black">
              Our client success stories are legendary, and our waiting list is a testament to our effectiveness.
            </span>
            </div>
            <div className="text-base font-bold text-left text-[#661e21]">
            <span className="text-base font-bold text-left text-[#661e21]">
              Maybe that’s you: it would be our honor to find out.
            </span>
              <br/>
              <span className="text-base font-bold text-left text-[#661e21]">
              Schedule your FREE consultation call below.
            </span>
            </div>
            <ScheduleMeetingButton
                color="red"
                title="Speak to Our Team Today"
                subtitle="Schedule Your FREE Consultation Now"
                action='email'
            />
          </div>
        </div>

        <div className="px-4 py-[40px] xl:px-[300px] xl:py-[140px] flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="flex flex-col justify-center text-left items-center xl:items-start gap-5 w-[400px] md:w-[550px]">
            <p className="text-2xl font-semibold text-center text-[#f1f1f1]">
              What we offer
            </p>
            <p className="text-4xl font-semibold text-center text-[#e88000]">
              WEB DESIGN &amp; DEVELOPMENT
            </p>
            <div className="text-white">
            <span className="text-base text-white">
              We specialize in one thing - creating exceptional web solutions.
            </span>
              <br/>
              <span className="text-base text-white">
              If you want an agency that focuses on impactful web design and development, we're for you.
            </span>
            </div>
            <div className="text-base text-white">
            <span className="text-base text-white">
              With Pango, you get clear insights into project progress and results, ensuring maximum value.
            </span>
            </div>
            <ScheduleMeetingButton
                color="orange"
                title="Speak to Our Team Today"
                subtitle="Schedule Your FREE Consultation Now"
                action='email'
            />
          </div>
          <div className="right">
            <p className="text-[250px] font-semibold text-left text-[#e88000]">
              02
            </p>
          </div>
        </div>

        <div className="px-4 py-[40px] pb-28 xl:px-[300px] xl:py-[140px] flex flex-col md:flex-row justify-center xl:justify-between items-center bg-white">
          <p className="text-[250px] font-semibold text-left text-[#ff444c]">
            03
          </p>
          <div className="flex flex-col justify-center text-left items-center xl:items-start gap-5">
            <p className="text-xl font-bold text-center uppercase text-[#ff444c]">
              SCHEDULE YOUR CALL WITH US
            </p>
            <p className="text-4xl font-bold text-center capitalize text-[#661e21]">
              Free 30-Minute Consultation
            </p>
            <p className="text-lg text-left text-[#2d2d2d]">
            <span className="text-lg text-[#2d2d2d]">
              By the end of this consultation, you will have a clear
            </span>
              <br/>
              <span className="text-lg text-[#2d2d2d]">
              understanding of the next steps you can take to enhance
            </span>
              <br/>
              <span className="text-lg text-[#2d2d2d]">
              your online presence with our web solutions.
            </span>
            </p>
            <div className="text-lg text-[#2d2d2d]">
          <span className="text-lg text-[#2d2d2d]">
            Contact us and our experts can assist you as soon as possible.
          </span>
              <br/>
              <span className="text-lg text-[#2d2d2d]">
            We look forward to collaborating and bringing your vision to life!
          </span>
            </div>
            <ScheduleMeetingButton
                color="red"
                title="Speak to Our Team Today"
                subtitle="Schedule Your FREE Consultation Now"
                action='email'
            />
          </div>
        </div>

        <div className="bg-white">
          <p className="text-[22px] font-bold text-center uppercase text-[#585858]">
            BROWSE OUR TEMPLATES
          </p>
          <p className="text-[32px] font-bold text-center capitalize text-orange">
            "Discover How Pango Transforms Online Presence
          </p>
          <p className="text-[32px] font-bold text-center capitalize text-orange">
            For Businesses of All Sizes"
          </p>
        </div>

        <div className="px-4 py-[40px] xl:px-[300px] xl:py-[140px] flex flex-col gap-10 xl:flex-row justify-around align-middle items-center bg-white">
          <img src={PangoImg.src} className='hidden md:block rounded-[12px]' width={400}/>
          <div className="flex flex-col gap-5 justify-center text-left items-center xl:items-start">
            <div className="text-xl text-[#1f1f1f]">
              <span className="h-14 text-xl text-[#1f1f1f]">
                Elevate your online presence to New Heights <br/>with our expert <b>Website Templates</b>.
              </span>
            </div>
            <div className="h-14 text-xl text-[#1f1f1f]">
              <span className="h-14 text-xl text-[#1f1f1f]">
                Surpass your competitors with <b>ease</b> <br/> through innovative solutions.
              </span>
            </div>
            <ScheduleMeetingButton
                color="orange"
                title="Browse Templates"
                subtitle="Elevate Your Online Presence Now"
                action='templates'
            />
          </div>
        </div>

        <div className="px-4 py-[40px] xl:px-[300px] xl:py-[100px] flex flex-col gap-6 justify-center items-center">
          <p className="text-[32px] font-bold text-center capitalize text-[#e88000]">
            Have A General Inquiry?
          </p>
          <div className="text-center text-neutral-200">
            <span className="text-center text-neutral-200">
              If you have a general inquiry and would like to speak to our expert
            </span>
            <br/>
            <span className="text-center text-neutral-200">
              team, you can contact us via email: office@pango.at
            </span>
          </div>
          <ScheduleMeetingButton
              color="orange"
              title="Speak to Our Team Today"
              subtitle="Schedule Your FREE Consultation Now"
              action='email'
          />
        </div>

      </div>
    </>
  );
}
