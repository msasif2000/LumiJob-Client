

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
        input.className = 'input input-bordered w-full';
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
                                        <span className="label-text font-bold">Company</span>
                                    </label>
                                    <label>
                                        <input required type="text" name="companyName" placeholder="Company Name" className="input input-bordered  w-full" />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Location</span>
                                    </label>
                                    <label>
                                        <input required type="text" name="location" placeholder="Company Location" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Job Type</span>
                                    </label>
                                    <label>
                                        <input required type="text" name="jobType" placeholder="Remote/Onsite/Both" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">About Us</span>
                                    </label>
                                    <label>
                                        <input required type="text" name="about" placeholder="About Us" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Job Sector</span>
                                    </label>
                                    <label>
                                        <input required type="text" name="sector" placeholder="IT/Software/Frontend..." className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control" id="skills">
                                    <label className="label">
                                        <span className="label-text font-bold">Session Topics</span>
                                    </label>
                                    <label>
                                        <button type="button" onClick={() => addInputField('skills')} className="btn btn-sm   bg-blue-800 text-white">
                                           + Add Skills
                                        </button>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Platform</span>
                                    </label>
                                    <label>
                                        <input required type="text" name="platform" placeholder="Facebook/Google/Adobe..." className="input input-bordered w-full " />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Salary</span>
                                    </label>
                                    <label>
                                        <input required type="text" name="salary" placeholder="$2000 per month/$30000 per year" className="input input-bordered w-full " />
                                    </label>
                                </div>
                            </div>


                            <div className="flex-1">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Deadline</span>
                                    </label>
                                    <label>
                                        <input required type="datetime-local" name="deadline" placeholder="Application Deadline" className="input input-bordered w-full" />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Experience</span>
                                    </label>
                                    <label>
                                        <input required type="text" name="experience" placeholder="0-2 years/Fresher" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Vacancy</span>
                                    </label>
                                    <label>
                                        <input required type="number" name="vacancy" defaultValue={1} className="input input-bordered w-full" />
                                    </label>
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
                        <input type="submit" value="Create Camp" className="w-full mt-6 bg-red-600 text-white  text-center p-2 text-2xl" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PostJob;