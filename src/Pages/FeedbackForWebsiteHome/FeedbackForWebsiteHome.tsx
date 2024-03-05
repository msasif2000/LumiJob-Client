import Marquee from "react-fast-marquee";

const FeedbackForWebsiteHome = () => {
    return (
        <div>
            <div className="mb-10">
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-heading font-semibold text-center mb-4 xl:mb-7">
            Customer <span className="text-accentTwo">Reviews</span> 
        </h3>
        <p className="text-sm md:text-lg xl:text-2xl text-[#999999] text-center mx-4">
        Lumijob exceeded my expectations with its intuitive interface and vast job opportunities
        </p>
            </div>
            <div className="space-y-10">
            <Marquee pauseOnHover={true} direction="right"  gradient gradientWidth={400}>
                <h1 className="text-5xl font-bold">hello</h1>
            </Marquee>
            
            <Marquee>
                <h1 className="text-5xl font-bold">Hello</h1>
            </Marquee>
            </div>
            


        </div>
    );
};

export default FeedbackForWebsiteHome;