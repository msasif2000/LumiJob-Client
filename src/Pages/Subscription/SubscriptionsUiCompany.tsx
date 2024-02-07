import "./SubScriptions.css"

const SubscriptionsUiCompany = () => {
	return (
		<div className="max-w-screen-2xl mx-auto" >

			<section className="bg-white ">
				<div className="py-8 px-10 mx-10 lg:py-16 lg:px-6">
					<div className="mx-auto max-w-screen-lg text-center mb-8 lg:mb-12">
						<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
							Choose the Right Plan for Your Hiring Needs
						</h2>
						<p className="mb-5 font-light text-gray-500 sm:text-xl ">
							Unlock the full potential of LumiJobs with our flexible pricing options tailored to fit your company's requirements. Whether you're a startup looking to expand your team or an established enterprise seeking top talent, we have the perfect plan for you.
						</p>
					</div>
					<div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
						{/* Free Card */}
						<div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border-2 scale-100 border-gray-100   xl:p-8 ">
							<h3 className="mb-4 text-2xl font-semibold">Free</h3>
							<p className="font-light text-gray-500 sm:text-lg ">
								Your essential toolkit for job hunting. Access diverse job listings and apply seamlessly.
							</p>
							<div className="flex justify-center items-baseline my-8">
								<span className="mr-2 text-5xl font-extrabold">$00</span>
							</div>
							{/* List */}
							<ul role="list" className="mb-8 space-y-4 text-left">
								<li className="flex items-center space-x-3">
									{/* Icon */}
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 "
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									<span>
										Limited to <span className='text-lg font-semibold'>3</span> active job listings at a time
									</span>
								</li>
								<li className="flex items-center space-x-3">
									{/* Icon */}
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 "
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									<span>Basic company profile visibility</span>
								</li>
								<li className="flex items-center space-x-3">
									{/* Icon */}
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 "
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									<span>Basic application tracking functionality</span>
								</li>
								<li className="flex items-center space-x-3">
									{/* Icon */}
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									<span>
										Standard support via email.
									</span>
								</li>
							</ul>
							<div className="action">
								<a className="button" href="#">
									Choose plan
								</a>
							</div>
						</div>
						{/* standard Card */}

						<div className="flex flex-col p-6 mx-auto max-w-lg text-center relative text-gray-900 bg-white rounded-lg border-2 scale-110 border-gray-100 xl:p-8 ">
							<p className='absolute top-2 right-2 bg-blue-200 p-1 px-2 rounded-2xl  font-semibold'>Popular</p>
							<h3 className="mb-4 text-2xl font-semibold">Standard</h3>
							<p className="font-light text-gray-500 sm:text-lg ">
								Relevant for multiple users, extended &amp; premium support.
							</p>
							<div className="flex justify-center items-baseline my-8">
								<span className="mr-2 text-5xl font-extrabold">$79</span>
							</div>
							{/* List */}
							<ul role="list" className="mb-8 space-y-4 text-left">
								<li className="flex items-center space-x-3">
									{/* Icon */}
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 "
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									<span>
										Up to <span className='text-lg font-semibold'>20</span> active job listings at a time
									</span>
								</li>
								<li className="flex items-center space-x-3">
									{/* Icon */}
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 "
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									<span>Access job listings and apply easily.</span>
								</li>
								<li className="flex items-center space-x-3">
									{/* Icon */}
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 "
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									<span> Enhanced company profile visibility with logo and branding</span>
								</li>
								<li className="flex items-center space-x-3">
									{/* Icon */}
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									<span>
										Advanced application tracking with filtering and sorting options
									</span>
								</li>
							</ul>
							<div className="action">
								<a className="button" href="#">
									Choose plan
								</a>
							</div>
						</div>
						{/* Premium Card */}
						<div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border-2 scale-100 border-gray-100   xl:p-8 ">
							<h3 className="mb-4 text-2xl font-semibold">Premium</h3>
							<p className="font-light text-gray-500 sm:text-lg ">
								Best for large scale uses and extended redistribution rights.
							</p>
							<div className="flex justify-center items-baseline my-8">
								<span className="mr-2 text-5xl font-extrabold">$499</span>
							</div>
							{/* List */}
							<ul role="list" className="mb-8 space-y-4 text-left">
								<li className="flex items-center space-x-3">
									{/* Icon */}
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 "
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									<span>
										<span className='text-lg font-semibold'>Unlimited</span> active job listings.
									</span>
								</li>
								<li className="flex items-center space-x-3">
									{/* Icon */}
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 "
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									<span>Premium profile visibility</span>
								</li>
								<li className="flex items-center space-x-3">
									{/* Icon */}
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 "
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									<span>Personalized support and assistance</span>
								</li>
								<li className="flex items-center space-x-3">
									{/* Icon */}
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									<span>
										Advanced application tracking
									</span>
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
			</section>


		</div>
	);
};

export default SubscriptionsUiCompany;