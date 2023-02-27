import React from 'react';
import { Link } from 'react-router-dom';
import {BsLinkedin} from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';

const Footer = () => {
  return (
    <>
    <footer className='py-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-4'>
            <h4 className='text-white mb-4'>Contactez-Nous</h4>
              <div className='footer-links d-flex flex-column'>
                <address className='text-white fs-6'>
                  Hno : 9 rue Louis Arretche, <br/>deux plateaux, Civ <br/>
                  PinCode : 35700 
                </address>
                <a href='tel : +33(0)7 44-27-12-09' className='mt-3 d-block mb-2 text-white'>+33(0)7 44-27-12-09</a>
                <a href='mailto : pklapepite@gmail.com' className='mt-2 d-block mb-0 text-white'>black_boxes@gmail.com</a>
                <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                  <a className='text-white' href='#'><BsGithub className='fs-4'/></a>
                  <a className='text-white' href='#'><BsLinkedin className='fs-4'/></a>
                  <a className='text-white' href='#'><BsYoutube className='fs-4'/></a>
                  <a className='text-white' href='#'><BsInstagram className='fs-4'/></a>
                </div>
            </div> 
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white mb-1 py-2'>Privacy Policy</Link>
                <Link className='text-white mb-1 py-2'>Refund Policy</Link>
                <Link className='text-white mb-1 py-2'>Shipping Policy</Link>
                <Link className='text-white mb-1 py-2'>Terms of Service</Link>
                <Link className='text-white mb-1 py-2'>Blogs</Link>
              </div> 
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white mb-1 py-2'>Search</Link>
                <Link className='text-white mb-1 py-2'>About Us</Link>
                <Link className='text-white mb-1 py-2'>Faq</Link>
                <Link className='text-white mb-1 py-2'>Contact</Link>
                <Link className='text-white mb-1 py-2'>Size Chart</Link>
            </div> 
          </div>
          <div className='col-2'>
            <h4 className='text-white mb-4'>Liens Rapides</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white mb-1 py-2'>MIAGE</Link>
              <Link className='text-white mb-1 py-2'>Stage</Link>
              <Link className='text-white mb-1 py-2'>Partenaires</Link>
              <Link className='text-white mb-1 py-2'>Formation</Link>
            </div> 
          </div>
        </div>
      </div>
    </footer>

    <footer className='py-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center mb-0 text-white'>&copy; { new Date().getFullYear()}; Powered by Black_Boxes</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;