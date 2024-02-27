const TrustedByCompany = () => {
  return (
    <div className="w-full h-24 bg-gray-50 flex items-center">
      <div className="flex items-center justify-center w-9/12 lg:w-7/12  mx-auto  md:space-x-7 lg:md:space-x-0 ">
        <h1 className="text-3xl font-medium text-gray-700 mr-6 ">
          Trusted by :
        </h1>
        <div className="flex items-center justify-center gap-6  ">
          <img
            className="w-28 grayscale-[100%] hover:grayscale-0"
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt=""
          />
          <img
            className="w-28 grayscale-[100%] hover:grayscale-0"
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
            alt=""
          />
          <img
            className="w-28 grayscale-[100%] hover:grayscale-0"
            src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
            alt=""
          />
          <img
            className="w-28 grayscale-[100%] hover:grayscale-0"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedByCompany;
