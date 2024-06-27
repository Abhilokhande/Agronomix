// import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-16 md:pt-20 md:pb-24 lg:pt-20 lg:pb-36"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "FULL-STACK EXPERTISE: BEAUTIFYING BRANDS, EMPOWERING WEBSITES, CAPTIVATING CONTENT."
          }
          className={
            "mb-10 text-left text-[30px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[25px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[22px]"}
          charSpace={"mr-[0.000em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "My passion lies in creating software that solves real-world problems and positively impacts people’s lives."
              }
            />
            <AnimatedBody
              text={
                "Whether I’m designing a sleek user interface or coding a complex application, I’m always striving to create something unique and innovative. I love experimenting with new technologies and staying up-to-date with the latest trends in the tech world."
              }
              className={"hidden"}
            />
            <AnimatedBody
              text={
                "In addition to my work in software development, I’m also an active leader and member of tech communities on campus, including the Google Developer Student Clubs and Microsoft Learn Student Ambassadors."
              }
            />
            <AnimatedBody
              text={
                "Whether it’s binge-watching my favorite anime series, cheering on Manchester United, hanging out with friends, or discovering new music in my favorite genres like RnB, UK Drill, and Chill Rap, I’m always looking for ways to relax and unwind."
              }
            />
          
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Frontend Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "JavaScript , React , HTML5, Git/GitHub, CSS3, Bootstrap CSS, Tailwind CSS, Framer Motion."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Programming Languages"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Java, C++, C, Python, Php , JavaScript, Express.JS , Node.JS "
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"DataBase"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "PostgreSQL , MongoDB."
                }
              />
            </div>
          </div>
        </div>
        {/* <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28"> */}
          {/* <SongCarousel /> */}
          {/* <AnimatedBody
            text="A few songs I can recommend if you're looking for some fresh tunes :)"
            className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px] "
          /> */}
        </div>
      {/* </div> */}
    </section>
  );
};

export default About;
