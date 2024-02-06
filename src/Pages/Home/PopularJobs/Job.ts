

export interface salaryRange { // Capitalize 'SalaryRange'
  min: number;
  max: number;
}


// Job.ts
interface Job {
  _id?: string;
  picture: string;
  sectorType: string;
  platform: string;
  title: string;
  deadline: string;
  description: string;
  location: string;
  salaryRange:any;
  jobType: string;
  experience: string;
}


export default Job;
