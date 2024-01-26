import useAxiosDev from '../hooks/useAxiosDev';
import './CompanyCSS/Postjob.css'

const PostJob = () => {
    const axiosDev = useAxiosDev();
    const email: string = 'company@gmail.com';
    const handleJobPost = (e: React.FormEvent<HTMLFormElement>) => {
        const form = e.currentTarget;
        e.preventDefault();
        const formData = new FormData(form);
        const postedDate = new Date().toISOString();
        formData.append('postedDate', postedDate.toString());
        formData.append('companyEmail', email);
        const data = Object.fromEntries(formData);
        console.log(data);

        axiosDev.post('/postJob', data)
            .then(res => {
                console.log(res.data);
                form.reset();
            })
            .catch(err => {
                console.log(err);
            });

    }

    const addInputField = (fieldName: string) => {
        const container = document.getElementById(fieldName);
        const input = document.createElement('input');
        input.type = 'text';
        input.name = fieldName;
        input.placeholder = `Enter ${fieldName}`;
        input.className = 'py-1 pe-0 ps-1 block w-full bg-transparent focus:border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm dark:text-gray-400';
        if (container) {
            container.appendChild(input);
        }
    };

    return (
        <div>
            <div className="md-container mx-auto lg:px-12">
                <div className="lg:p-12 md:p-6 p-4 space-y-6">
                    <h2 className="font-rancho text-4xl text-center">Create Job Post For Your Company</h2>
                    <form onSubmit={handleJobPost} className="font-raleway ">
                        <div className="lg:flex justify-center gap-6">
                            <div className="w-full flex-1">
                                <div className="form-control py-1">
                                    <label className="label">
                                        <span className="label-text font-bold">Company Name</span>
                                    </label>
                                    <input required type="text" name="companyName" className="py-1 pe-0 ps-1 block w-full bg-transparent focus:border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm dark:text-gray-400" placeholder="ABC Pvt Ltd" />
                                </div>
                                <div className="form-control py-1">
                                    <label className="label">
                                        <span className="label-text font-bold">Company Location</span>
                                    </label>
                                    <input required type="text" name="location" className="py-1 pe-0 ps-1 block w-full bg-transparent focus:border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm dark:text-gray-400" placeholder="Company Location" />
                                </div>
                                <div className="form-control py-1">
                                    <label className="label">
                                        <span className="label-text font-bold">About Us</span>
                                    </label>
                                    <input required type="text" name="about" placeholder="About Us" className="py-1 pe-0 ps-1 block w-full bg-transparent focus:border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm dark:text-gray-400" />
                                </div>
                                <div className="form-control py-1">
                                    <label className="label">
                                        <span className="label-text font-bold">Job Sector</span>
                                    </label>
                                    <input required type="text" name="sector" placeholder="IT/Software/Frontend..." className="py-1 pe-0 ps-1 block w-full bg-transparent focus:border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm dark:text-gray-400" />
                                </div>
                                <div className="form-control py-1">
                                    <label className="label">
                                        <span className="label-text font-bold">Job Type</span>
                                    </label>
                                    <input required type="text" name="jobType" placeholder="Remote/Onsite/Both" className="py-1 pe-0 ps-1 block w-full bg-transparent focus:border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm dark:text-gray-400" />
                                </div>
                                <div className="form-control py-1">
                                    <label className="label">
                                        <span className="label-text font-bold">Job Position</span>
                                    </label>
                                    <input required type="text" name="position" placeholder="Developer/Engineer/UI Designer..." className="py-1 pe-0 ps-1 block w-full bg-transparent focus:border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm dark:text-gray-400" />
                                </div>
                                <div className="form-control py-1">
                                    <label className="label">
                                        <span className="label-text font-bold">Position Overview</span>
                                    </label>
                                    <input required type="text" name="positionOverview" placeholder="Position Overview" className="py-1 pe-0 ps-1 block w-full bg-transparent focus:border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm dark:text-gray-400" />
                                </div>
                                <div className="form-control py-1">
                                    <label className="label">
                                        <span className="label-text font-bold">Platform</span>
                                    </label>
                                    <input type="text" name="platform" placeholder="Facebook/Google/Adobe..." className="py-1 pe-0 ps-1 block w-full bg-transparent focus:border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm dark:text-gray-400" />
                                </div>
                                <div className="form-control py-1">
                                    <label className="label">
                                        <span className="label-text font-bold">Experiences</span>
                                    </label>
                                    <input required type="text" name="experience" placeholder="0-2 years/Fresher" className="py-1 pe-0 ps-1 block w-full bg-transparent focus:border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm dark:text-gray-400" />
                                </div>
                                <div className="form-control py-1">
                                    <label className="label">
                                        <span className="label-text font-bold">Salary</span>
                                    </label>
                                    <input required type="text" name="salary" placeholder="$2000-3000 per month/$30000 per year" className="py-1 pe-0 ps-1 block w-full bg-transparent focus:border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm dark:text-gray-400" />
                                </div>
                                <div className="form-control py-1">
                                    <label className="label">
                                        <span className="label-text font-bold">Deadline</span>
                                    </label>
                                    <input required type="datetime-local" name="deadline" placeholder="Application Deadline" className="py-1 pe-0 ps-1 block w-full bg-transparent focus:border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm dark:text-gray-400" />
                                </div>
                                <div className="form-control py-1">
                                    <label className="label">
                                        <span className="label-text font-bold">Vacancy</span>
                                    </label>
                                    <input required type="number" name="vacancy" defaultValue={1} className="py-1 pe-0 ps-1 block w-full bg-transparent focus:border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm dark:text-gray-400" />
                                </div>
                            </div>


                            <div className="flex-1">
                                <div className="form-control py-1" id="responsibilities">
                                    <label className="label">
                                        <span className="label-text font-bold">Responsibilities</span>
                                    </label>
                                    <label>
                                        <button type="button" onClick={() => addInputField('responsibilities')} className="btn btn-sm   bg-blue-800 text-white">
                                            + Add Responsibility
                                        </button>
                                    </label>
                                </div>
                                <div className="form-control py-1" id="requirements">
                                    <label className="label">
                                        <span className="label-text font-bold">Requirements</span>
                                    </label>
                                    <label>
                                        <button type="button" onClick={() => addInputField('requirements')} className="btn btn-sm   bg-blue-800 text-white">
                                            + Add Requirement
                                        </button>
                                    </label>
                                </div>
                                <div className="form-control py-1" id="skills">
                                    <label className="label">
                                        <span className="label-text font-bold">Skills</span>
                                    </label>
                                    <label>
                                        <button type="button" onClick={() => addInputField('skills')} className="btn btn-sm   bg-blue-800 text-white">
                                            + Add Skill
                                        </button>
                                    </label>
                                </div>

                                <div className="form-control py-1" id="perks">
                                    <label className="label">
                                        <span className="label-text font-bold">Perks</span>
                                    </label>
                                    <label>
                                        <button type="button" onClick={() => addInputField('perks')} className="btn btn-sm   bg-blue-800 text-white">
                                            + Add Perk
                                        </button>
                                    </label>
                                </div>
                                <div className="form-control py-1" id="tags">
                                    <label className="label">
                                        <span className="label-text font-bold">Tags</span>
                                    </label>
                                    <label>
                                        <button type="button" onClick={() => addInputField('tags')} className="btn btn-sm   bg-blue-800 text-white">
                                            + Add Tag
                                        </button>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <input type="submit" value="Post Job" className="w-full mt-6 bg-blue-800 text-white  text-center p-2 text-2xl" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PostJob;