import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <header className='header-upper py-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-2'>
            <h1 className='text-white'>
              <Link className='text-white'>MySchool</Link>
            </h1>
          </div>
          <div className='col-6'></div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;