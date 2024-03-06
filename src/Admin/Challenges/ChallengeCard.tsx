import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const ChallengeCard = (challenge: any) => {
  const [challengeData, setChallengeData] = useState<any>(null);
  console.log(challengeData?.teams?.map((team: any) => team.members.length).reduce((a: any, b: any) => a + b));
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get(`/challenge/${challenge?.challenge?._id}`)

      .then((res: { data: any; }) => {
        setChallengeData(res.data);
      })
      .catch((error: any) => {
        console.error("Error fetching challenge details:", error);

      });
  }, [challenge?.challenge?._id]);


  return (
    <div className="min-h-32 bg-[#EFEBFD] border rounded-md p-4">
      <h2 className="text-xl text-gray-700 font-normal mb-5">
        {challenge.challenge.challengeTitle}
      </h2>
      <div className="flex justify-around py-6 text-center">
        <div>
          {challenge?.challenge?.teams ? <h2 className="text-2xl font-semibold">{
            challenge?.challenge?.teams?.length
          }</h2> :
            <h2 className="text-2xl font-semibold">{
              0
            }</h2>
          }
          <p className="text-gray-500">Teams</p>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div>
          {
            challengeData?.teams?.map((team: any) => team.members.length).reduce((a: any, b: any) => a + b) ?
              <h2 className="text-2xl font-semibold">{challengeData?.teams?.map((team: any) => team.members.length).reduce((a: any, b: any) => a + b)}</h2> :
              <h2 className="text-2xl font-semibold">0</h2>
          }
          <p className="text-gray-500">Members</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="text-[#690BDD] text-sm font-bold border bg-white hover:bg-white rounded-full px-6 lg:px-12 py-2 mt-6">
          View Full Details
        </button>
      </div>
    </div>
  );
};

export default ChallengeCard;
