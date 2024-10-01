import PrimaryButton from "apps/front-office/design-system/buttons/PrimaryButton";
import cv from "assets/Hisham.pdf";
import { useInView } from "react-intersection-observer";

export default function AboutUs() {
  const { ref: aboutUsRef, inView: aboutUsReview } = useInView({
    triggerOnce: false,
  });

  return (
    <div className="bg-haiti py-16">
      <div className="container">
        <div
          ref={aboutUsRef}
          className={`relative ${aboutUsReview && "animate-fade-right animate-duration-[1500ms]"}`}>
          <div className="flex flex-col gap-6">
            <p className="font-edu absolute -top-2 left-0 bg-gradient-to-tl from-cinder via-violet-red to-black-rose text-transparent bg-clip-text lg:text-lg text-md font-extrabold">
              Who am I!
            </p>
            <h3 className="text-white text-3xl font-bold">About Me</h3>
            <p className="text-white text-xl font-medium">
              I am Graphic Designer From Egypt with experience +4 years and my
              goal is to share my art with people all over the world. I enjoy
              new and challenging projects that drive me to learn more about
              design in general.
            </p>
            <a href={cv} download="Hisham.pdf" className="w-fit">
              <PrimaryButton>Download CV</PrimaryButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
