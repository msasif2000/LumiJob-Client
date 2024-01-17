import green from '../../../assets/GlowShadow/Green.svg';
import aqua from '../../../assets/GlowShadow/Aqua.svg';
import purple from '../../../assets/GlowShadow/Purple.svg';
import yellow from '../../../assets/GlowShadow/Yellow.svg';



const Hero = () => {
  return (
    <div className="min-h-screen bg-[#F2F8F5] relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="space-y-20 relative z-30">
          <h1 className="text-[120px] font-bold pt-20 relative z-30">
            News, Seminars & <br /> Insides of Tech <br /> Fields.
          </h1>
          <img src={green} alt="blogBg" className="absolute -left-52 -top-72 w-[1000px]" />
          <img src={aqua} alt="blogBg" className="absolute -right-56 -top-20 w-[1000px]" />
          <img src={yellow} alt="blogBg" className="absolute right-10 top-36 w-[1000px]" />
          <img src={purple} alt="blogBg" className="absolute -right-96 top-5 w-[1000px]" />
         
          
          <p className="text-xl font-bold relative z-30">
          Discover cutting-edge advancements in rapidly growing industries. Stay updated on groundbreaking technologies and job opportunities. Secure your ideal tech position with real-time insights into industry progress and job openings. Stay at the forefront of the dynamic and ever-evolving tech landscape, ensuring you're well-informed and positioned for success in this fast-paced and innovative field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
