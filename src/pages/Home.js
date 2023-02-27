import React from 'react';
import BlogCard from '../Components/BlogCard';
import ClubsCard from '../Components/ClubsCard';
const Home = () => {
  return (
    <>
    <section className='blog-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='section-heading'>Nos Clubs</div>
          </div>
          <ClubsCard/>
          <ClubsCard/>
          <ClubsCard/>
          <ClubsCard/>
        </div>
      </div>
    </section>

    <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='section-heading'>Amusez Vous en apprenant</div>
            </div>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
          </div>
        </div>
    </section>
    </>
  );
};

export default Home;