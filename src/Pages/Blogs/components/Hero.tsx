// import green from "../../../assets/GlowShadow/Green.svg";
// import aqua from "../../../assets/GlowShadow/Aqua.svg";
// import purple from "../../../assets/GlowShadow/Purple.svg";
// import yellow from "../../../assets/GlowShadow/Yellow.svg";

const Hero = () => {
  return (
    <div className="h-[440px] md:h-[600px] lg:h-[700px]  relative overflow-hidden pt-8 lg:pt-20 -mt-20">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-20">
        <div className="space-y-10  relative z-10">
          <h3 className="text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl font-heading font-bold pt-20 relative z-10">
          <span className="text-accentTwo">News</span>,  <span className="text-accentTwo">Seminars</span>  & <br />Insides of  <span className="text-accentTwo"> Tech</span> <br /> <span className="text-accentTwo">Fields</span> .
          </h3>

          {/* <img
            src={green}
            alt="blogBg"
            className="absolute -left-52 -top-72 w-[1000px]"
          />
          <img
            src={aqua}
            alt="blogBg"
            className="absolute -right-56 -top-20 w-[1000px]"
          />
          <img
            src={yellow}
            alt="blogBg"
            className="absolute right-10 top-36 w-[1000px]"
          />
          <img
            src={purple}
            alt="blogBg"
            className="absolute -right-96 top-5 w-[1000px]"
          /> */}

          <p className="text-xs lg:px-3 md:text-lg  lg:text-xl font-normal relative z-10">
            Discover cutting-edge advancements in rapidly growing industries.
            Stay updated on groundbreaking technologies and job opportunities.
            Secure your ideal tech position with real-time insights into
            industry progress and job openings. Stay at the forefront of the
            dynamic and ever-evolving tech landscape, ensuring you're
            well-informed and positioned for success in this fast-paced and
            innovative field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
