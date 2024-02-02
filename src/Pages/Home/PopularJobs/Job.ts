

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
  deadline: string;
  description: string;
  location: string;
  salaryRange:any;
}


export default Job;
