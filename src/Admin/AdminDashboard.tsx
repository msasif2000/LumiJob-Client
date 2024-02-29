import { FcManager } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import React, { useState, useEffect } from 'react';
import { Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { Helmet } from 'react-helmet-async';

const SECTOR_COLORS = ['#164070']; // Colors for different sectors
const JOB_TYPE_COLORS = ['#FF8042', '#DD93CE', '#BBC49F']; // Colors for Remote, Onsite, Hybrid

const AdminDashboard: React.FC = () => {
  const [jobTypeData, setJobTypeData] = useState<{ name: string; value: number }[]>([]);
  const [sectorTypeData, setSectorTypeData] = useState<{ name: string; value: number }[]>([]);
  const [userData, setUserData] = useState<{ name: string; value: number }[]>([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch job posts data
        const responseJobPosts = await axiosPublic.get('/all-job-posts');
        const jobPosts = responseJobPosts.data;

        // Count job types
        const jobTypeCounts: Record<string, number> = {};
        jobPosts.forEach((post: any) => {
          const jobType = post.jobType;
          jobTypeCounts[jobType] = (jobTypeCounts[jobType] || 0) + 1;
        });

        // Convert job type counts to array of objects
        const jobTypeDataArray = Object.entries(jobTypeCounts).map(([name, value]) => ({ name, value }));
        setJobTypeData(jobTypeDataArray);

        // Count sector types
        const sectorTypeCounts: Record<string, number> = {};
        jobPosts.forEach((post: any) => {
          const sector = post.sectorType;
          sectorTypeCounts[sector] = (sectorTypeCounts[sector] || 0) + 1;
        });

        // Convert sector type counts to array of objects
        const sectorTypeDataArray = Object.entries(sectorTypeCounts).map(([name, value]) => ({ name, value }));
        setSectorTypeData(sectorTypeDataArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchUserData = async () => {
      try {
        // Fetch user data
        const responseUsers = await axiosPublic.get('/allUsers');
        const users = responseUsers.data;

        // Count user roles
        const roleCounts: Record<string, number> = {};
        users.forEach((user: any) => {
          const role = user.role;
          roleCounts[role] = (roleCounts[role] || 0) + 1;
        });

        // Convert role counts to array of objects
        const userDataArray = Object.entries(roleCounts).map(([name, value]) => ({ name, value }));
        setUserData(userDataArray);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
    fetchUserData();
  }, [axiosPublic]);


  return (
    <div className='mt-6'>
      <Helmet>
        <title>Analytics | LumiJobs</title>
      </Helmet>
      <h3 className=' text-3xl font-bold my-6 text-gray-600'>Analytics</h3>
      <div className="block md:flex gap-5">
        <div className="w-full md:w-1/2 border-4">
          <h5 className='text-xl font-semibold text-center text-gray-600 mt-6 mb-5'>Job Types</h5>
          <ResponsiveContainer width="80%" height={200} className="p-1">
            <BarChart layout="vertical" data={jobTypeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8dacc8">
                {jobTypeData.map((_entry, index) => (
                  <Cell key={`cell-${index}`} fill={JOB_TYPE_COLORS[index % JOB_TYPE_COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="w-full md:w-1/2  border-4">
          <h5 className='text-xl font-semibold text-center text-gray-600 mt-6 mb-2'>User Roles</h5>

          <div className='flex justify-center items-center gap-2'>
            <p className='bg-[#164070] py-8 px-4 text-white text-2xl flex flex-col items-center gap-1'><FcBriefcase className="text-5xl" /><span>{userData[0]?.value} Company</span></p>
            <p className='bg-[#00C89F] py-8 px-4 text-white text-2xl flex flex-col items-center gap-1'> <FcConferenceCall className="text-5xl" /><span>{userData[1]?.value} Candidate</span></p>
            <p className='bg-[#ffbb98] py-8 px-4 text-white text-2xl flex flex-col items-center gap-1'><FcManager className="text-5xl" /><span>{userData[2]?.value} Admin</span></p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12" style={{ width: '100%', display: 'inline-block' }}>
        <h5 className='text-xl font-semibold text-center text-gray-600 mb-5'>Job Sectors</h5>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={sectorTypeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis className="text-[10px]" dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#164070">
              {sectorTypeData.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={SECTOR_COLORS[index % SECTOR_COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminDashboard;
