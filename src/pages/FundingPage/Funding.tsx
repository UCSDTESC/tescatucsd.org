import React from "react";

const Funding: React.FC = () => {
	const googleFormLink = "https://forms.gle/REPLACE_WITH_YOUR_FORM";
	const matchingFundsLink =
		"https://jacobsschool.ucsd.edu/idea/resources/matching-funds";

	return (
		<div className="min-h-screen bg-offWhite text-navy py-12 px-6 md:px-12">
			<div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 md:p-12">
						<h1 className="text-4xl md:text-5xl font-semibold mb-4 text-center">
					Student Travel Funds
				</h1>

						<p className="text-base md:text-lg text-gray-700 mb-6">
							The Student Travel Fund is a financial resource providing support for
							Jacobs School of Engineering undergraduate students to attend
							conferences and competitions. It covers travel expenses like
							transportation and hotel costs, as well as conference fees. This fund
							can be used by both individual students and student organizations to
							cover costs associated with their participation in academic or
							professional events. The fund is a gift derived from proceeds of the
							Jacobs School Ring Ceremony and is intended to support student
							development opportunities.
						</p>

				<section className="mb-6">
					<h2 className="text-xl font-medium mb-3">Application Overview</h2>
					<p className="text-gray-700 mb-3">
						Below is a draft of the application sections and questions. Use the
						Google Form linked at the bottom to submit an application.
					</p>

					<div className="space-y-4">
						<div>
							<h3 className="font-semibold">Section 1: Terms and Conditions</h3>
							<ul className="list-disc list-inside text-gray-700 ml-2">
								<li>
									We’ll be able to fund <strong>$X</strong> per student, maximum
									of <strong>Y</strong> students. Please confirm you accept this
									below.
								</li>
												<li>
													<strong>
														Student Organizations applying for Student Travel Funds are
														not eligible for Matching Funds within the same academic
														year.
													</strong>{" "}
													Please indicate below that you understand your organization
													cannot apply for both.
												</li>
												<li>
													Note: this is a reimbursement program. Students should expect
													to pay out-of-pocket initially and submit receipts for
													reimbursement. Typical reimbursements range from
													<strong> $300 to $500</strong> depending on documented expenses
													and available funds.
												</li>
							</ul>
						</div>

						<div>
							<h3 className="font-semibold">Section 2: Applicant Information</h3>
							<ul className="list-disc list-inside text-gray-700 ml-2">
								<li>Submitter's first name</li>
								<li>Submitter's last name</li>
								<li>
									Submitter's UCSD email address (all communications will be
									sent here)
								</li>
								<li>Student Organization you're applying on behalf of</li>
								<li>Have you applied for Travel Funds before?</li>
								<li>Faculty Advisor name</li>
								<li>Faculty Advisor email</li>
								<li>Fund manager name</li>
							</ul>
						</div>

						<div>
							<h3 className="font-semibold">Section 3: Conference / Competition</h3>
							<ul className="list-disc list-inside text-gray-700 ml-2">
								<li>Name of conference or competition</li>
								<li>Quarter when event will be held</li>
								<li>Start date of event</li>
								<li>End date of event</li>
								<li>Anticipated cost</li>
							</ul>
						</div>

						<div>
							<h3 className="font-semibold">Section 4: Impact & Justification</h3>
							<ul className="list-disc list-inside text-gray-700 ml-2">
								<li>
									How does attending support your organization's academic or
									professional development?
								</li>
								<li>
									How will participation benefit your organization or the wider
									UCSD engineering community?
								</li>
								<li>How many students from your organization are attending?</li>
								<li>
									Are you representing, competing, or holding a leadership
									role at this event? (Yes / No — if yes, describe)
								</li>
								<li>
									In 2–3 sentences, explain why receiving this funding is
									important for your organization.
								</li>
							</ul>
						</div>
					</div>
				</section>

				<div className="flex flex-col items-center gap-4">
					<a
						href={googleFormLink}
						target="_blank"
						rel="noreferrer"
						className="inline-block bg-navy text-white px-6 py-3 rounded-md shadow hover:opacity-95"
						aria-label="Open Student Travel Funds application form"
					>
						Apply: Student Travel Funds (Google Form)
					</a>

					<div className="text-center text-sm text-gray-700 max-w-xl">
						<p>
							Student Organizations applying for Student Travel Funds are not
							eligible for Matching Funds within the same academic year.
						</p>
					</div>

					<a
						href={matchingFundsLink}
						target="_blank"
						rel="noreferrer"
						className="inline-block bg-white border border-gray-300 text-navy px-6 py-3 rounded-md shadow hover:bg-gray-50"
						aria-label="Open Matching Funds information"
					>
						Matching Funds
					</a>
				</div>
			</div>
		</div>
	);
};

export default Funding;

