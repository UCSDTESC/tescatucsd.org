import './About.css'
import SaxGuy from '../../assets/SaxGuy.svg'

function About() {
    return(
        <div className='about' id='about'>
            <div className='title'><p>What is DECaF?</p></div>
            <div className='content'>
                <img src={SaxGuy} alt='SaxGuy' id='sax'></img>
                <div className='desc'>
                    <p>The Disciplines of Engineering Career Fair (DECaF) is an annual, student-run event hosted by the Triton Engineering Student Council at UC San Diego. </p>
                    <p>It connects top engineering students with leading recruiters through networking opportunities, recruiting sessions, and resume feedback. </p>
                    <p>With over 1,000 students from various engineering majors attending each year, DECaF provides a unique platform for companies to engage with and recruit talented future professionals.</p>
                </div>
            </div>
        </div>
    )
}

export default About