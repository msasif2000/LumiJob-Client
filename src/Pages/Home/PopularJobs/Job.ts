

export interface salaryRange { // Capitalize 'SalaryRange'
  min: number;
  max: number;
}


// Job.ts
interface Job {
  _id?: string;
  picture: string;
  sector: string;
  platform: string;
  title: string;
  post_time: string;
  description: string;
  location: string;
  salaryRange: salaryRange;
  // Add other properties of your job object here
}


export default Job;
