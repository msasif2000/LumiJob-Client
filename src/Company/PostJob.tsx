

const PostJob = () => {
    const handleJobPost = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(e.target);
    }

    const addInputField = (fieldName: string) => {
        const container = document.getElementById(fieldName);
        const input = document.createElement('input');
        input.type = 'text';
        input.name = fieldName;
        input.placeholder = `Enter ${fieldName}`;
        input.className = 'peer py-3 pe-0 ps-1 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600';
        if (container) {
            container.appendChild(input);
        }
    };

    return (
        <div>
            <div className="md-container mx-auto">
                <div className="lg:p-12 md:p-6 p-4 space-y-6">
                    <h2 className="font-rancho text-4xl text-center">Create Job Post For Your Company</h2>
                    <form onSubmit={handleJobPost} className="font-raleway ">
                        <div className="lg:flex justify-center gap-6">
                            <div className="w-full flex-1">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Company Name</span>
                                    </label>
                                    <input required type="text" name="companyName" className="peer py-3 pe-0 ps-1 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600" placeholder="ABC Pvt Ltd" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">About Us</span>
                                    </label>
                                    <input required type="text" name="about" placeholder="About Us" className="peer py-3 pe-0 ps-1 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Job Sector</span>
                                    </label>
                                    <input required type="text" name="sector" placeholder="IT/Software/Frontend..." className="peer py-3 pe-0 ps-1 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Position Overview</span>
                                    </label>
                                    <input required type="text" name="positionOverview" placeholder="Position Overview" className="peer py-3 pe-0 ps-1 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Platform</span>
                                    </label>
                                    <input required type="text" name="platform" placeholder="Facebook/Google/Adobe..." className="peer py-3 pe-0 ps-1 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Experiences</span>
                                    </label>
                                    <input required type="text" name="experience" placeholder="0-2 years/Fresher" className="peer py-3 pe-0 ps-1 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Salary</span>
                                    </label>
                                    <input required type="text" name="salary" placeholder="$2000-3000 per month/$30000 per year" className="peer py-3 pe-0 ps-1 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Deadline</span>
                                    </label>
                                    <input required type="datetime-local" name="deadline" placeholder="Application Deadline" className="peer py-3 pe-0 ps-1 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600" />
                                </div>
                            </div>


                            <div className="flex-1">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Company Location</span>
                                    </label>
                                    <input required type="text" name="location" className="peer py-3 pe-0 ps-1 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600" placeholder="Company Location" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Job Type</span>
                                    </label>
                                    <input required type="text" name="jobType" placeholder="Remote/Onsite/Both" className="peer py-3 pe-0 ps-1 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Job Position</span>
                                    </label>
                                    <input required type="text" name="position" placeholder="Developer/Engineer/UI Designer..." className="peer py-3 pe-0 ps-1 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Vacancy</span>
                                    </label>
                                    <input required type="number" name="vacancy" defaultValue={1} className="peer py-3 pe-0 ps-1 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600" />
                                </div>
                                <div className="form-control" id="responsibilities">
                                    <label className="label">
                                        <span className="label-text font-bold">Responsibilities</span>
                                    </label>
                                    <label>
                                        <button type="button" onClick={() => addInputField('responsibilities')} className="btn btn-sm   bg-blue-800 text-white">
                                            + Add Responsibility
                                        </button>
                                    </label>
                                </div>
                                <div className="form-control" id="requirements">
                                    <label className="label">
                                        <span className="label-text font-bold">Requirements</span>
                                    </label>
                                    <label>
                                        <button type="button" onClick={() => addInputField('requirements')} className="btn btn-sm   bg-blue-800 text-white">
                                            + Add Requirement
                                        </button>
                                    </label>
                                </div>
                                <div className="form-control" id="skills">
                                    <label className="label">
                                        <span className="label-text font-bold">Skills</span>
                                    </label>
                                    <label>
                                        <button type="button" onClick={() => addInputField('skills')} className="btn btn-sm   bg-blue-800 text-white">
                                            + Add Skills
                                        </button>
                                    </label>
                                </div>

                                <div className="form-control" id="perks">
                                    <label className="label">
                                        <span className="label-text font-bold">Perks</span>
                                    </label>
                                    <label>
                                        <button type="button" onClick={() => addInputField('perks')} className="btn btn-sm   bg-blue-800 text-white">
                                            + Add Perk
                                        </button>
                                    </label>
                                </div>
                                <div className="form-control" id="tags">
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