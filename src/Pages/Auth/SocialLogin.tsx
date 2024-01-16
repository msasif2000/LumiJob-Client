import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin : React.FC  = () => {
    return (
        <div className='space-y-5'>
            <div>
                <button className='btn w-full bg-[#F3F9FA] text-lg hover:bg-green-400'><FaGoogle/> Google</button>
            </div>
            <div>
                <button className='btn w-full bg-[#F3F9FA] text-lg hover:bg-green-400'><FaGithub/> Github</button>
            </div>
           
        </div>
    );
};

export default SocialLogin;