import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";


const TopCompanyProfile = () => {

    const {id} = useParams<{ id: string}>();
    const axiosPublic = useAxiosPublic();

    const [CompanyProfile, setCompanyProfile] = useState<any>(null);
    useEffect(() => {
        axiosPublic
        .get(`/company-profile/${id}`)
        .then((res) => {
            setCompanyProfile(res.data);
            console.log(res.data);
        })
        .catch((error) => console.log(error))
    })


    return (
        <div className="h-screen">
            
            
            
        </div>
    );
};

export default TopCompanyProfile;