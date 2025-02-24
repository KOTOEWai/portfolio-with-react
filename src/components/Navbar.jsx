import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import logo from '../assets/kevinRushLogo.png';

export default function Navbar() {
  return (
    <nav  className=" flex justify-between items-center py-4">
     <div className="mx-2 w-10 flex flex-shrink-0 items-center">
       <img src={logo} alt="" />
     </div>
     <div className='m-8 flex  items-center justify-center gap-4'>
       <FaGithub/>
       <FaLinkedin/>
       <FaSquareXTwitter/>
       <FaInstagram/>
     </div>
    </nav>
  )
}
