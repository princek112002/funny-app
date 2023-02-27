import React from 'react';

const BlogCard = () => {
  return (
    <div className='col-3'>
    <div className='blog-card'>
        <div className='card-image'>
            <img src='images/maxresdefault.jpg'className='img-fluid' alt='blog' />
        </div>
        <div className='blog-content'>
            <p className='date'>1 Dec, 2023</p>
            <h5 className='title'>A beautiful sunday morning renaissance</h5>
            <p className='desc'>
            The standard chunk of Lorem Ipsum used since the 1500s is 
            reproduced.
            </p>
        </div>
    </div>
    </div>
  );
};

export default BlogCard;