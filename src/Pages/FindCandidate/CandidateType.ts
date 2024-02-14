export interface Education {
    university: string;
    degree: string;
    subject: string;
    fromDate: string;
    toDate: string;
  }
  
  export interface ExperienceDetails {
    company: string;
    position: string;
    fromDate: string;
    toDate: string;
  }
  
  interface Candidate {
    _id?: string;
    email: string;
    availability: string;
    bio: string;
    city: string;
    country: string;
    education: Education[];
    experience: string;
    experienceDetails: ExperienceDetails[];
    name: string;
    phone: string;
    photo: string;
    position: string;
    role: string;
    salaryRangeMax: string;
    salaryRangeMin: string;
    skills: string[];
    userId: string;
    village: string;
    work: string;
    status: string;
    packages: string;
  }
  
  export default Candidate;
  