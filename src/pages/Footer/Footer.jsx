import './Footer.css'
import Logo from '../../assets/TESCLogo.svg'
function Footer() {
    return(
        <div className='footer'>
            <div className='contact' id='contact'>
                <p>Contact us at contact@tesc.ucsd.edu</p>
                <p>if you have any questions!</p>
            </div>
            <div className='tesc'>
                <p id='organized'>organized by</p>
                <img id='logo' src={Logo} alt='TESC'></img>
                <p id='desc'>The Triton Engineering Student Council empowers UC San Diego engineering students by connecting them with impactful communities, projects, and career building opportunities.</p>
            </div>
        </div>
    )
}

export default Footer