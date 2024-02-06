import './SubScriptions.css';

const SubscriptionsUiCandidate = () => {
    return (
        <div className="h-screen" >

            <div className="grid grid-cols-3 w-10/12 mx-auto pl-20 pt-16">
            <div>
            <div className="plan ">
		<div className="inner">
			<span className="pricing">
				<span>
					$0 <small>/ m</small>
				</span>
			</span>
			<p className="title font-bold">Starter Package</p>
			<p className="info text-justify text-black">Kickstart your journey to finding the perfect job with our Starter Package. Access a range of job listings and apply to opportunities that match your skills and interests.</p>
			<ul className="features">
				<li>
					<span className="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span className='flex-1'>Access to job listings and application submissions. </span>
				</li>
				<li>
					<span className="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span className="flex-1">Basic candidate profile creation and management.</span>
				</li>
				<li className='pb-6'>
					<span className="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>Limited access to job search filters.</span>
				</li>
			</ul>
			<div className="action">
			<a className="button" href="#">
				Choose plan
			</a>
			</div>
		</div>
	</div>
            </div>

            <div>
            <div className="plan">
		<div className="inner">
			<span className="pricing">
				<span>
					<del>$49</del> $39 <small>/ m</small>
				</span>
			</span>
			<p className="title">Career Booster</p>
			<p className="info text-justify text-black">Supercharge your job search with our Career Booster monthly subscription. Gain access to exclusive features, priority listings, and enhanced visibility to stand out to employers. </p>
			<ul className="features">
				<li className='flex '>
					<span className="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span className='flex-1 text-balance'>Advanced job search filters and personalized job recommendations.</span>
				</li>
				<li className="">
				<span className="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					
					<span className='flex-1' > Insights into job market trends and salary information.</span>
				</li>
				<li className="pb-6">
					<span className="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span >Resume  optimization services .</span>
				</li>
			</ul>
			<div className="action">
			<a className="button" href="#">
				Choose plan
			</a>
			</div>
		</div>
	        </div>
            </div>

            <div>
            <div className="plan">
		<div className="inner">
			<span className="pricing">
				<span>
                <del>$499</del> $399 <small>/ y</small>
				</span>
			</span>
			<p className="title">Professional Pathway</p>
			<p className="info text-justify font-semibold">Secure your professional future with our Professional Pathway yearly subscription. Unlock premium benefits, including priority application review, tailored career guidance</p>
			<ul className="features">
				<li className='flex'>
					<span className="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span className='flex-1'> Dedicated career coach for personalized guidance and support.</span>
				</li>
				<li className='flex' >
					<span className="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span className='flex-1'> Networking opportunities with industry professionals.</span>
				</li>
				<li className="flex">
					<span className="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span className='flex-1'>Access to premium webinars and career development resources.</span>
				</li>
			</ul>
			<div className="action">
			<a className="button" href="#">
				Choose plan
			</a>
			</div>
		</div>
	</div>
            </div>

            </div>
           
        </div>
    );
};

export default SubscriptionsUiCandidate;