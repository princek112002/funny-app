import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <header className='header-upper py-1'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-2 d-flex align-items-center'>
            <div className='logo'>
              <h1 className='head-title'>
                MySchool
              </h1>
            </div>
            <div className='menu-links'>
                <div className='d-flex align-items-center gap-30'>
                  <Link>
                    <img src='images/homepage.png' alt='homeicons' />
                  </Link>
                  <NavLink className='links' to='/'>News</NavLink>
                  <NavLink className='links' to='/'>Salle</NavLink>
                  <NavLink className='links' to='/'>Emploi_du_temps</NavLink>
                </div>
              </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;