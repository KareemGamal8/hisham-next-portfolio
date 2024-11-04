"use client";

import wave from "@assets/icons/wave.svg";
import personal from "@assets/images/personal.png";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <>
      <div className="min-h-[45rem] max-md:mt-2 text-white relative w-full overflow-hidden flex justify-between items-center">
        <div
          className="w-full h-full absolute animate-fade animate-ease-in animate-fill-backwards 
            animate-duration-[2000ms] animate-delay-1000"
        >
          <div
            className="absolute flex items-center justify-center w-full h-full animate-ease-in 
                animate-duration-[2000ms] animate-spin animate-once animate-reverse"
          >
            <Image
              width={300}
              height={300}
              src={wave}
              alt="wave"
              className="w-[80vw] lg:w-[65vw] absolute right-1/2 -bottom-0 lg:-bottom-40 [@media(min-width:2150px)]:-bottom-48 max-w-screen-2xl -translate-x-16"
            />
            <Image
              width={300}
              height={300}
              src={wave}
              alt="wave"
              className="w-[80vw] block absolute left-1/2 -top-0 2xl:-top-48 max-w-screen-2xl transform-x-16"
            />
          </div>
        </div>
        <div className="container">
          <div className="flex lg:justify-between justify-center items-center md:flex-row flex-col-reverse gap-8">
            <div
              className={`animate-fade-right animate-duration-[3000ms] animate-ease-out animate-delay-200`}
            >
              <p className="font-edu absolute italic -top-2 left-0 bg-gradient-to-tl from-cinder via-violet-red to-black-rose text-transparent bg-clip-text lg:text-2xl text-md font-bold">
                HI There!
              </p>
              <h2 className="lg:text-6xl md:text-4xl sm:text-4xl text-3xl font-bold uppercase lg:leading-[4.5rem]">
                I am Hisham Ashraf
              </h2>
              <div className="lg:text-4xl text-2xl uppercase text-violet-red font-semibold">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("graphic designer")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("freelancer")
                      .start()
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("visualizer")
                      .pauseFor(1000)
                      .start()
                      .deleteAll()
                      .typeString("artist")
                      .pauseFor(1000)
                      .start();
                  }}
                  options={{
                    loop: true,
                  }}
                />
              </div>
            </div>
            <Image
              width={600}
              height={600}
              src={personal}
              alt="personal"
              className={`animate-fade-left lg:w-[25rem] w-[19rem] animate-duration-[3000ms] animate-delay-500 animate-ease-out`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
