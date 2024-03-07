import { motion } from "framer-motion";

const TrustedByCompany = () => {
  const images = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      alt: "Google",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/640px-Microsoft_logo_%282012%29.svg.png",
      alt: "Microsoft",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
      alt: "Airbnb",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
      alt: "Spotify",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      alt: "Netflix",
    },
  ];

  return (
    <>
      <div className="w-full max-w-screen-2xl mx-auto min-h-20 bg-gray-50 flex items-center py-6 px-4 lg:px-20">
        <div className="flex w-full flex-wrap items-center justify-center mx-auto">
          <h3 className="text-xl font-semibold underline mb-3 -mt-28">
            Trusted By
          </h3>
          <div className="flex w-full flex-wrap  items-center justify-center gap-10 xl:gap-24 lg:gap-16">
            {images.map((image, index) => (
              <motion.img
                key={index}
                className="w-20 md:w-28 grayscale-[100%] hover:grayscale-0"
                src={image.src}
                alt={image.alt}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 1 * (index + 1), duration: 0.8 },
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrustedByCompany;
