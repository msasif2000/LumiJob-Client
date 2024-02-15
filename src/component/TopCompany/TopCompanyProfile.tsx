import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";


const TopCompanyProfile = () => {
  const { id } = useParams<{ id: string }>();
  const axiosPublic = useAxiosPublic();

  const [CompanyProfile, setCompanyProfile] = useState<any>(null);
  useEffect(() => {
    axiosPublic
      .get(`/company-profile/${id}`)
      .then((res) => {
        setCompanyProfile(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  });

  return (
    <div className="">
      <div>
        {/* company details pages  */}
        <div className=" pt-5 pb-5  px-7 bg-[#4360ca]">
          <p className=" pb-8 lg:text-4xl font-bold text-center text-white  ">
            Company Profile {`> `}
            {CompanyProfile?.name}{" "}
          </p>
          {/* company information */}
          <div className="flex gap-10 lg:px-16 lg:pt-2">
            {/* company title img adreess ect */}
            <div className="flex-1">
              <div className="flex gap-4 md:gap-10 mb-10">
                <img
                  className=" w-20 h-20 md:w-28 md:h-28 rounded-full bg-white p-2"
                  src={CompanyProfile?.photo}
                />
                <div>
                  <p className="text-sm md:text-base font-semibold uppercase text-white mb-1">
                    Company Name{" "}
                  </p>
                  <p className="text-sm md:text-lg text-[#d6dfe9] pl-1">
                    {CompanyProfile?.name}
                  </p>
                  <div className="flex flex-col justify-center  text-white mt-5 mb-5">
                    <p className="text-sm md:text-base font-semibold uppercase text-white mb-1 ">
                      Founding Year
                    </p>
                    <p className="text-sm md:text-lg text-[#d6dfe9] pl-1">
                      {CompanyProfile?.founding}
                    </p>
                  </div>
                  <p className="text-sm md:text-base font-semibold uppercase text-white mb-1">
                    Industry
                  </p>
                  <p className="text-sm md:text-lg text-[#d6dfe9] pl-1">
                    {CompanyProfile?.industry}
                  </p>
                  <div className="mt-5">
                    <p className="text-sm md:text-base font-semibold uppercase text-white mb-1 ">
                      address{" "}
                    </p>
                    <p className="text-sm md:text-lg  text-[#d6dfe9] pl-1">
                      {CompanyProfile?.city} - {CompanyProfile?.postal},{" "}
                      {CompanyProfile?.country}
                    </p>
                    <p className="text-sm md:text-lg uppercase text-[#d6dfe9] pt-1 pl-1">
                      Phone: {CompanyProfile?.phone}
                    </p>
                    <p className=" text-sm md:text-lg text-[#d6dfe9] md:pt-1 pl-1">
                      E-mail: {CompanyProfile?.email}
                    </p>
                    <p className=" text-sm md:text-lg text-[#d6dfe9] md:pt-1 pl-1">
                      Website: {CompanyProfile?.website}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* company details */}
            <div className="flex-1 bg-[#ffffff] pt-16 mb-5 px-10 rounded-2xl shadow-2xl">
              <p className="text-sm md:text-base font-semibold  text-black mb-2 uppercase">
                {CompanyProfile?.name} Details
              </p>
              <p className=" text-sm md:text-base text-justify text-[#282829] ">
                Established on {CompanyProfile?.founding},{" "}
                {CompanyProfile?.name} is a leading force in the{" "}
                {CompanyProfile?.industry} industry, headquartered in{" "}
                {CompanyProfile?.city} - {CompanyProfile?.postal},{" "}
                {CompanyProfile?.country}. With a focus on leveraging technology
                for positive societal impact, our company is registered under
                Company No. {CompanyProfile?.registration}. Specializing in
                fostering digital connectivity and community empowerment, we
                offer innovative solutions to meet evolving needs. Reach out to
                us at {CompanyProfile?.phone} or {CompanyProfile?.email} for
                inquiries or collaborations. Visit our website{" "}
                {CompanyProfile?.website} to discover our diverse range of
                initiatives aimed at driving meaningful change in the digital
                landscape. Join us in shaping a brighter future through the
                power of {CompanyProfile?.industry}.
              </p>
            </div>
          </div>
        </div>

        
        
      </div>
      {/* tab sessions */}
      <div className="w-10/12 mx-auto" >
          <Tabs>
            <TabList className={`text-2xl font-bold text-center`}>
              <Tab >Posted Jobs</Tab>
              <Tab>Blog</Tab>
              <Tab>Seminar</Tab>
            </TabList>

            <TabPanel>
              <p>
                <b>Mario</b> (<i>Japanese: マリオ Hepburn: Mario, [ma.ɾʲi.o]</i>
                ) (<i>English: /ˈmɑːrioʊ/; Italian: [ˈmaːrjo]</i>) is a
                fictional character in the Mario video game franchise, owned by
                Nintendo and created by Japanese video game designer Shigeru
                Miyamoto. Serving as the company's mascot and the eponymous
                protagonist of the series, Mario has appeared in over 200 video
                games since his creation. Depicted as a short, pudgy, Italian
                plumber who resides in the Mushroom Kingdom, his adventures
                generally center upon rescuing Princess Peach from the Koopa
                villain Bowser. His younger brother and sidekick is Luigi.
              </p>
              <p>
                Source:{" "}
                <a href="https://en.wikipedia.org/wiki/Mario" target="_blank">
                  Wikipedia
                </a>
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                <b>Luigi</b> (
                <i>Japanese: ルイージ Hepburn: Ruīji, [ɾɯ.iː.dʑi̥]</i>) (
                <i>English: /luˈiːdʒi/; Italian: [luˈiːdʒi]</i>) is a fictional
                character featured in video games and related media released by
                Nintendo. Created by prominent game designer Shigeru Miyamoto,
                Luigi is portrayed as the slightly younger but taller fraternal
                twin brother of Nintendo's mascot Mario, and appears in many
                games throughout the Mario franchise, often as a sidekick to his
                brother.
              </p>
              <p>
                Source:{" "}
                <a href="https://en.wikipedia.org/wiki/Luigi" target="_blank">
                  Wikipedia
                </a>
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                <b>Princess Peach</b> (
                <i>Japanese: ピーチ姫 Hepburn: Pīchi-hime, [piː.tɕi̥ çi̥.me]</i>)
                is a character in Nintendo's Mario franchise. Originally created
                by Shigeru Miyamoto, Peach is the princess of the fictional
                Mushroom Kingdom, which is constantly under attack by Bowser.
                She often plays the damsel in distress role within the series
                and is the lead female. She is often portrayed as Mario's love
                interest and has appeared in Super Princess Peach, where she is
                the main playable character.
              </p>
              <p>
                Source:{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Princess_Peach"
                  target="_blank"
                >
                  Wikipedia
                </a>
              </p>
            </TabPanel>
          </Tabs>
        </div>

      {/* company posted jobs */}
    </div>
  );
};

export default TopCompanyProfile;
