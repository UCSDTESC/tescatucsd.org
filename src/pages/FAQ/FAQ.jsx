import './FAQ.css'
import FAQBox from './FAQBox';
import Border from '../../assets/Border.svg'
function FAQ() {
  const generalFaqs = [
    {
      question: 'What is DECaF?',
      answer: 'DECaF, or the Disciplines of Engineering Career Fair, is an annual, student-run career fair organized by the Triton Engineering Student Council at UC San Diego. It connects engineering students with recruiters from various industries.'
    },
    {
      question: 'When and where does DECaF 2024 take place?',
      answer: 'DECaF 2024 will be held on October 9, 2024, from 10 AM to 2 PM at the Qualcomm Conference Center, UC San Diego.'
    },
    {
      question: 'How can I get more information?',
      answer: 'For more information, please contact us at contact@tesc.ucsd.edu or visit our website for the latest updates.'
    },
  ];

  const recruiterFaqs = [
    {
      question: 'How can my company participate?',
      answer: 'Companies interested in participating can find the registration link on the home page. The deadline for registration is September 15th 2024.'
    },
    {
      question: 'Are there any costs associated with participating?',
      answer: 'Yes, there are various sponsorship packages available. Details can be found on the registration form or by contacting us directly at sponsor@tesc.ucsd.edu.'
    },
    {
      question: 'What benefits will our company receive by participating?',
      answer: 'Participating companies gain direct access to a diverse pool of motivated and skilled engineering students, engage in recruiting sessions, and receive a comprehensive resume database.'
    },
  ];

  const studentFaqs = [
    {
      question: 'How can I participate in DECaF?',
      answer: 'Students can register for DECaF through our website. Details on registration will be available closer to the event date.'
    },
    {
      question: 'What can I expect at DECaF?',
      answer: 'Students can attend recruiting and information sessions, receive feedback on their resumes, and network with potential employers.'
    },
    {
      question: 'How can I prepare for DECaF?',
      answer: 'Prepare by updating your resume, researching participating companies, and practicing your networking and interview skills.'
    },
  ];

    return(
        <div className='faq' id='faq'>
            <img src={Border} alt=''></img>
            <div className='title'><p>Frequently Asked Questions</p></div>
            <div className='content'>
              <div className='content-g'>
                  <span>General</span>
                  {generalFaqs.map((faq, index) => (
                      <FAQBox key={index} question={faq.question} answer={faq.answer} />
                  ))}
              </div>
              <div className='content-r'>
                <span>Recruiters</span>
                  {recruiterFaqs.map((faq, index) => (
                      <FAQBox key={index} question={faq.question} answer={faq.answer} />
                  ))}
              </div>
              <div className='content-s'>
                  <span>Students</span>
                  {studentFaqs.map((faq, index) => (
                      <FAQBox key={index} question={faq.question} answer={faq.answer} />
                  ))}
              </div>
            </div>
            <img src={Border} alt=''></img>
        </div>
    )
}

export default FAQ