import Marquee from "react-fast-marquee";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import FeedbackCard from "./FeedbackCard";
import info from './info';
interface Data {
    _id: string;
    anyComments: string;
    interfaceRating: number;
    supportRating: number;
    UserNames: string;
    email: string;
    role: string;
    PostedDate: string;
}


const FeedbackForWebsiteHome = () => {

    const axiosPublic = useAxiosPublic();
    const { data: feedback, refetch: feedbackRefetch } = useQuery({
        queryKey: ["feedback"],
        queryFn: async () => {
          const res = await axiosPublic.get(`/websiteFeedback`);
          return res.data;
        },
      });
      console.log(feedback);
      const filteredData = feedback.reduce((acc : any, currentItem : any) => {
        if (currentItem.role === 'candidate') {
            acc.candidates.push(currentItem);
        } else if (currentItem.role === 'company') {
            acc.companies.push(currentItem);
        }
        return acc;
    }, { candidates: [], companies: [] });
    
    const candidateData: Data[] = filteredData.candidates;
    const companyData: Data[] = filteredData.companies;

    console.log(candidateData);
    console.log(companyData);
      
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
            <Marquee pauseOnHover={true} direction="right"  gradient gradientWidth={100}>
            <div className="flex  ">
                  {companyData?.map((info) => (
                    <FeedbackCard key={info._id} info={info}></FeedbackCard>
                  ))}
            </div>
            </Marquee>
            
            <Marquee>
            <div className="flex  ">
                  {candidateData?.map((info) => (
                    <FeedbackCard key={info._id} info={info}></FeedbackCard>
                  ))}
            </div>
            </Marquee>
            </div>
            


        </div>
    );
};

export default FeedbackForWebsiteHome;