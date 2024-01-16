
import './Step.css'
const Step = () => {
    return (
        <div>
            {/* Title and Description */}
            <div className="mt-16 w-11/12 mx-auto lg:grid lg:grid-cols-5 gap-10 space-y-10" >
                {/* Title */}
                <div className="lg:col-span-3 lg:mt-9" >
                    <h1 className=" text-3xl lg:text-5xl font-bold w-10/12 mx-auto text-center lg:text-start" >Get Your <span className="text-[#4965E1]" >Dream Job</span> Easily With Just Your Gadget</h1>
                </div>
                {/* Description */}
                <div className="col-span-2" >
                    <p className="text-slate-600 text-justify" >Welcome to LumiJobs, your premier destination for exceptional hiring solutions! As a leading hiring agency, we specialize in connecting top talent with forward-thinking companies, revolutionizing the way businesses build their dream teams. </p>
                </div>

            </div>



            {/*  Card Session */}
            <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mt-16 bg-[#4864E1] px-4 py-10 rounded-2xl mb-10" >
                {/* Card 1 */}
                <div className="card">
      <p className="card-title pb-3 ">Completed your Profile .</p>
      <p className="small-desc text-start ">
      Profile complete. Unlock job opportunities tailored for you. Elevate your career with us now!
      </p>
      <div className="go-corner go-corner1">
        <div className="go-arrow text-4xl font-extrabold ">1</div>
      </div>
    </div>
                {/* Card 2 */}
     <div className="card">
      <p className="card-title pb-3">Directly Your CV Upload .</p>
      <p className="small-desc text-start ">
      Swiftly upload your CV. Seamless job matching awaits. Elevate your career instantly.
      </p>
      <div className="go-corner go-corner1">
        <div className="go-arrow text-4xl font-extrabold ">2</div>
      </div>
    </div>
                {/* Card 3 */}
        <div className="card">
      <p className="card-title pb-3 ">Scheduling <br /> Interview Session .</p>
      <p className="small-desc text-start ">
      Book interview slots effortlessly. Secure your opportunity. Elevate your career journey with us.
      </p>
      <div className="go-corner go-corner1">
        <div className="go-arrow text-4xl font-extrabold ">3</div>
      </div>
    </div>
                {/* 4 */}
        <div className="card">
      <p className="card-title pb-3">Selected <br /> Candidate Session .</p>
      <p className="small-desc text-start ">
      Congratulations! Access exclusive resources. Join our elite community. Elevate your career success today.
      </p>
      <div className="go-corner go-corner1">
        <div className="go-arrow text-4xl font-extrabold ">4</div>
      </div>
    </div>
                

            </div>
        </div>
    );
};

export default Step;