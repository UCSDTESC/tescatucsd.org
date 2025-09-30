import React from "react";

const Funding: React.FC = () => {
	const googleFormLink = "https://forms.gle/g6GC2MjhuTgNiB9k7";
	const matchingFundsLink =
		"https://jacobsschool.ucsd.edu/idea/resources/matching-funds";

	return (
		<>
			{/* Hero Section */}
			<div className="m-12 mt-20 flex flex-row justify-between items-center max-w-[80%] mx-auto">
				<div className="sm:max-w-full md:max-w-3/5">
					<p className="font-semibold text-[60px] text-[#11426B] leading-14 mb-3">
						Student Travel Funds
					</p>
					<p className="font-semibold text-[22px] mb-3">
						Financial support for Jacobs School of Engineering undergraduate students to attend conferences and competitions. Apply for reimbursement of travel expenses, hotel costs, and conference fees.
					</p>
				</div>
				<img
					src="AllPages/bear.png"
					alt="bear"
					className="hidden md:block w-72 h-auto"
				/>
			</div>

			{/* Main Content */}
			<div className="max-w-[80%] mx-auto mb-10">
				<div className="flex flex-col items-center gap-4 mb-8">
					<p className="text-base md:text-lg text-gray-700 mb-6">
						The Student Travel Fund is a financial resource providing support for
						Jacobs School of Engineering undergraduate students to attend
						conferences and competitions. It covers travel expenses like
						transportation and hotel costs, as well as conference fees. This fund
						can be used by students to
						cover costs associated with their participation in academic or
						professional events. The fund is a gift derived from proceeds of the
						Jacobs School Ring Ceremony and is intended to support student
						development opportunities. This year, TESC is responsible for
						managing the application process and reviewing applications. Contact us at <a href="mailto:board@tesc.ucsd.edu" style={{ textDecoration: "underline" }}>board@tesc.ucsd.edu</a> if you have questions or concerns about the process.
					</p>
				</div>

				<section className="mb-8">
					<h2 className="text-[30px] text-[#11426B] font-bold mb-4">Application Overview</h2>
					<p className="text-gray-700 mb-3">
						Below is a draft of the application sections and questions. Use the
						Google Form linked at the bottom to submit an application.
					</p>

					<div className="space-y-6">
						<div className="bg-gray-50 p-6 rounded-lg">
							<h3 className="text-[20px] font-semibold text-[#11426B] mb-3">Section 1: Terms and Conditions</h3>
							<ul className="list-disc list-inside text-gray-700 ml-2 space-y-2">
								{/* <li>
									We’ll be able to fund <strong>$X</strong> per student, maximum
									of <strong>Y</strong> students. Please confirm you accept this
									below.
								</li> */}
												<li>
													Note that this is a reimbursement program. Students should expect
													to pay out-of-pocket initially and submit receipts for
													reimbursement. Typical reimbursements range from
													<strong> $300 to $500</strong> depending on documented expenses
													and available funds.
												</li>
												<li>
													<strong>
														If you are applying as part of a student organization, note that student organizations applying for Student Travel Funds are
														not eligible for Matching Funds within the same academic
														year.
													</strong>
												</li>
												
							</ul>
						</div>

						<div className="bg-gray-50 p-6 rounded-lg">
							<h3 className="text-[20px] font-semibold text-[#11426B] mb-3">Section 2: Applicant Information</h3>
							<ul className="list-disc list-inside text-gray-700 ml-2 space-y-1">
								<li>Student Organization you are applying as part of, if applicable</li>
								<li>Submitter's first name</li>
								<li>Submitter's last name</li>
								<li>
									Submitter's UCSD email address (all communications will be
									sent here)
								</li>
								<li>Engineering Department Name</li>
								<li>Number of students from your group attending this event? Write 1 if you are the only attendee or sole applicant.</li>
								<li>Have you applied for Travel Funds before?</li>
								<li>Are you applying under a lab or research group with a Faculty Advisor?</li>
								<li>Faculty Advisor name and email, if applicable</li>
								<li>Fund manager name and email, if applicable</li>
							</ul>
						</div>

						<div className="bg-gray-50 p-6 rounded-lg">
							<h3 className="text-[20px] font-semibold text-[#11426B] mb-3">Section 3: Conference / Competition Information</h3>
							<ul className="list-disc list-inside text-gray-700 ml-2 space-y-1">
								<li>Name of conference or competition</li>
								<li>Quarter when event will be held</li>
								<li>Start date of event</li>
								<li>End date of event</li>
								<li>Anticipated cost</li>
							</ul>
						</div>

						<div className="bg-gray-50 p-6 rounded-lg">
							<h3 className="text-[20px] font-semibold text-[#11426B] mb-3">Section 4: Impact & Funding Justification</h3>
							<ul className="list-disc list-inside text-gray-700 ml-2 space-y-1">
								<li>
									What is your purpose for attending this event? Describe if you are representing, competing, or holding a leadership role.
								</li>
								<li>
									How does attending this conference or competition support your academic and professional development?
								</li>
								<li>How will your participation benefit your research group, student organization, or the broader UCSD engineering community?</li>
								<li>
									In 2 to 3 sentences, summarize why receiving this funding is important.
								</li>
							</ul>
						</div>
					</div>
				</section>

				<div className="flex flex-col items-center gap-4 mt-8">
					<div className="text-center text-sm text-gray-700 max-w-xl">
						<p>
							Sign in to your UCSD email address to access the form below.
						</p>
					</div>

					<a
						href={googleFormLink}
						target="_blank"
						rel="noreferrer"
						className="inline-block bg-[#11426B] text-white px-8 py-4 rounded-md shadow-lg hover:opacity-95 text-lg font-semibold"
						aria-label="Open Student Travel Funds application form"
					>
						Apply: Student Travel Funds (Google Form)
					</a>
				</div>
			</div>
		</>
	);
};

export default Funding;

