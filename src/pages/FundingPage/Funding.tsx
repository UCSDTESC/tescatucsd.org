import React from "react";

const Funding: React.FC = () => {
  const googleFormLink = "https://forms.gle/g6GC2MjhuTgNiB9k7";
  const businessTravelFormLink =
    "https://blink.ucsd.edu/_files/travel-tab/Student%20Certification%20for%20Business%2005.pdf";
  const deanFinOpsEmail = "jsoe-dean-finops-g@ucsd.edu";
  const boardEmail = "board@tesc.ucsd.edu";

  const eceTravelFundLink =
    "https://www.ece.ucsd.edu/undergraduate/undergraduate-student-life/travel-fund";
  const ugResearchTravelFundingLink = "https://ugresearch.ucsd.edu/conferences/travel-funding.html";
  const matchingFundsLink = "https://jacobsschool.ucsd.edu/idea/resources/matching-funds";
  const blinkStudentTravelLink =
    "https://blink.ucsd.edu/travel/travel-policy-procedures/register-travelers/student-travel.html";

  // Reusable Tailwind for underlined links (replaces style={{ textDecoration: "underline" }})
  const underlineLink =
    "underline underline-offset-2 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#11426B]";

  return (
    <>
      {/* Hero Section */}
      <div className="m-12 mt-20 flex flex-row items-center justify-between mx-auto max-w-[80%]">
        <div className="sm:max-w-full md:max-w-3/5">
          <p className="font-semibold text-[60px] text-[#11426B] leading-14 mb-3">
            Student Travel Funds
          </p>
          <p className="font-semibold text-[22px] mb-3">
            Financial support for Jacobs School of Engineering undergraduate students to attend
            conferences and competitions. Apply for reimbursement of travel expenses, hotel costs,
            and conference fees.
          </p>
        </div>
        <img src="AllPages/bear.png" alt="bear" className="hidden md:block w-72 h-auto" />
      </div>

      {/* Main Content */}
      <div className="max-w-[80%] mx-auto mb-10">
        <div className="flex flex-col items-center gap-4 mb-8">
          <p className="text-base md:text-lg text-gray-700 mb-6">
            The Student Travel Fund is a financial resource providing support for Jacobs School of
            Engineering undergraduate students to attend conferences and competitions. It covers
            travel expenses like transportation and hotel costs, as well as conference or
            registration fees. This fund is a gift derived from proceeds of the Jacobs School Ring
            Ceremony and is intended to support student development opportunities. This year, TESC
            is responsible for managing the application process and reviewing applications. Contact
            us at{" "}
            <a href={`mailto:${boardEmail}`} className={underlineLink}>
              {boardEmail}
            </a>{" "}
            if you have questions, concerns, or feedback about the process.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-[30px] text-[#11426B] font-bold mb-4">
            Application & Review Timeline
          </h2>

          <div className="bg-gray-50 p-6 rounded-lg">
            <ol className="list-decimal list-inside text-gray-700 ml-2 space-y-2">
              <li>
                <strong>Submit an Application:</strong> Use the Google Form linked at the bottom of
                this page.
              </li>
              <li>
                <strong>Application Review (2–3 weeks):</strong> TESC reviews applications on a
                rolling basis. If you do not receive an email within <strong>two weeks</strong>,
                please follow up at{" "}
                <a href={`mailto:${boardEmail}`} className={underlineLink}>
                  {boardEmail}
                </a>{" "}
                and we will finish reviewing your application as soon as possible.
              </li>
              <li>
                <strong>Acceptance Notification:</strong> If your application is accepted, you will
                receive a follow-up email indicating approval and it will include a link to the{" "}
                <strong>Post-Travel Form</strong>.
              </li>
              <li>
                <strong>Post-Travel Reimbursement:</strong> After traveling to your event, you must
                complete and submit the mandatory Post-Travel Form{" "}
                <strong>within two weeks of travel</strong> and upload your{" "}
                <strong>itemized receipts</strong> and <strong>proof of payment</strong> for all
                expenses you wish to be reimbursed. Reimbursements are processed only after travel
                has occurred and documentation is submitted.
              </li>
            </ol>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-[30px] text-[#11426B] font-bold mb-4">
            Important Reimbursement Policies
          </h2>

          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc list-inside text-gray-700 ml-2 space-y-2">
              <li>
                <strong>This is a reimbursement program.</strong> Students should expect to pay
                out-of-pocket initially and submit receipts for reimbursement.
              </li>
              <li>
                Typical reimbursements range from <strong>$300 to $500</strong>, depending on
                documented expenses and available funds.
              </li>
              <li>
                <strong>If you are applying as part of a student organization,</strong> note that
                student organizations applying for Student Travel Funds are not eligible for{" "}
                <a
                  href={matchingFundsLink}
                  target="_blank"
                  rel="noreferrer"
                  className={underlineLink}
                >
                  Matching Funds
                </a>{" "}
                within the same academic year.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-[30px] text-[#11426B] font-bold mb-4">
            Required Business Travel Documentation
          </h2>

          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-3">
              For the Dean&apos;s Office Financial Operations team to document your travel as
              business-related travel, please complete the{" "}
              <a
                href={businessTravelFormLink}
                target="_blank"
                rel="noreferrer"
                className={underlineLink}
              >
                Student Certification for Business Travel form
              </a>{" "}
              and email it to{" "}
              <a href={`mailto:${deanFinOpsEmail}`} className={underlineLink}>
                {deanFinOpsEmail}
              </a>
              .
            </p>

            <p className="text-gray-700 mb-3 font-semibold">Notes on completing the form:</p>

            <ul className="list-disc list-inside text-gray-700 ml-2 space-y-2">
              <li>
                <strong>Faculty signature section:</strong> If you are not applying as part of a lab
                or research group and are not under a faculty advisor, feel free to leave this
                section blank.
              </li>
              <li>
                <strong>
                  Chart String Information (Fund, Financial Unit, Function, Project, Task):
                </strong>{" "}
                If you are not applying under a faculty or lab, it is okay to leave these fields
                blank.
              </li>
            </ul>

            <p className="text-gray-700 mt-4">
              For more information about UC San Diego student travel policies and procedures, visit{" "}
              <a
                href={blinkStudentTravelLink}
                target="_blank"
                rel="noreferrer"
                className={underlineLink}
              >
                this Blink page
              </a>
              .
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-[30px] text-[#11426B] font-bold mb-4">Application Overview</h2>
          <p className="text-gray-700 mb-3">
            Below is a draft of the application sections and questions. Use the Google Form linked
            at the bottom to submit an application.
          </p>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-[20px] font-semibold text-[#11426B] mb-3">
                Section 1: Terms and Conditions
              </h3>
              <ul className="list-disc list-inside text-gray-700 ml-2 space-y-2">
                <li>
                  Note that this is a reimbursement program. Students should expect to pay
                  out-of-pocket initially and submit receipts for reimbursement. Typical
                  reimbursements range from <strong>$300 to $500</strong> depending on documented
                  expenses and available funds.
                </li>
                <li>
                  <strong>
                    If you are applying as part of a student organization, note that student
                    organizations applying for Student Travel Funds are not eligible for Matching
                    Funds within the same academic year.
                  </strong>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-[20px] font-semibold text-[#11426B] mb-3">
                Section 2: Applicant Information
              </h3>
              <ul className="list-disc list-inside text-gray-700 ml-2 space-y-1">
                <li>Student Organization you are applying as part of, if applicable</li>
                <li>Submitter&apos;s first name</li>
                <li>Submitter&apos;s last name</li>
                <li>Submitter&apos;s UCSD email address (all communications will be sent here)</li>
                <li>Engineering Department Name</li>
                <li>
                  Number of students from your group attending this event? Write 1 if you are the
                  only attendee or sole applicant.
                </li>
                <li>Have you applied for Travel Funds before?</li>
                <li>Are you applying under a lab or research group with a Faculty Advisor?</li>
                <li>Faculty Advisor name and email, if applicable</li>
                <li>Fund manager name and email, if applicable</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-[20px] font-semibold text-[#11426B] mb-3">
                Section 3: Conference / Competition Information
              </h3>
              <ul className="list-disc list-inside text-gray-700 ml-2 space-y-1">
                <li>Name of conference or competition</li>
                <li>Quarter when event will be held</li>
                <li>Start date of event</li>
                <li>End date of event</li>
                <li>Anticipated cost</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-[20px] font-semibold text-[#11426B] mb-3">
                Section 4: Impact & Funding Justification
              </h3>
              <ul className="list-disc list-inside text-gray-700 ml-2 space-y-1">
                <li>
                  What is your purpose for attending this event? Describe if you are representing,
                  competing, or holding a leadership role.
                </li>
                <li>
                  How does attending this conference or competition support your academic and
                  professional development?
                </li>
                <li>
                  How will your participation benefit your research group, student organization, or
                  the broader UCSD engineering community?
                </li>
                <li>In 2 to 3 sentences, summarize why receiving this funding is important.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-[30px] text-[#11426B] font-bold mb-4">Other Funding Resources</h2>

          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc list-inside text-gray-700 ml-2 space-y-2">
              <li>
                <a
                  href={eceTravelFundLink}
                  target="_blank"
                  rel="noreferrer"
                  className={underlineLink}
                >
                  ECE Undergraduate Travel Fund
                </a>
              </li>
              <li>
                <a
                  href={ugResearchTravelFundingLink}
                  target="_blank"
                  rel="noreferrer"
                  className={underlineLink}
                >
                  Undergraduate Research Conference Travel Funding
                </a>
              </li>
              <li>
                <a
                  href={matchingFundsLink}
                  target="_blank"
                  rel="noreferrer"
                  className={underlineLink}
                >
                  Matching Funds (recommended for student organizations)
                </a>
              </li>
              <li>
                <a
                  href={blinkStudentTravelLink}
                  target="_blank"
                  rel="noreferrer"
                  className={underlineLink}
                >
                  UC San Diego Student Travel Policies & Procedures (Blink)
                </a>
              </li>
            </ul>
          </div>
        </section>

        <div className="flex flex-col items-center gap-4 mt-8">
          <div className="text-center text-sm text-gray-700 max-w-xl">
            <p>Sign in to your UCSD email address to access the form below.</p>
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
