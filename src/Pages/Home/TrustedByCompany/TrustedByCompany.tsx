const TrustedByCompany = () => {
  return (
    <div className="w-full min-h-24 bg-gray-50 flex items-center py-6">
      <div className="flex flex-wrap gap-5 items-center justify-center w-9/12 lg:w-7/12  mx-auto  md:space-x-7 lg:md:space-x-0 ">
        <h1 className="text-3xl font-medium text-gray-700 mr-6 ">
          Trusted by :
        </h1>
        <div className="flex flex-wrap gap-12 lg:gap-6  items-center justify-center ">
          <img
            className="w-20 md:w-28 grayscale-[100%] hover:grayscale-0"
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google"
          />
          <img
            className="w-20 md:w-28 grayscale-[100%] hover:grayscale-0"
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
            alt="Airbnb"
          />
          <img
            className="w-20 md:w-28 grayscale-[100%] hover:grayscale-0"
            src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
            alt="Spotify"
          />
          <img
            className="w-20 md:w-28 grayscale-[100%] hover:grayscale-0"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedByCompany;
