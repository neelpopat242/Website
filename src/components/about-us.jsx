import React from 'react';
import img from '../images/backdrop.png';

const AboutUs = () => (
  <>
    <div className='about-us-header text-white'>
      <div className='contianer flex h-full items-center justify-center bg-black bg-opacity-40'>
        <div className='relative top-1/4'>
          <p className='about-us-heading text-4xl md:text-5xl lg:text-7xl font-bold mb-5'>
            Ingenium <br></br>2021
          </p>
          <p className='sub-heading md:text-xl'>
            Where innovation is education
          </p>
        </div>
      </div>
    </div>
    {/* <div className='flex items-center justify-center py-16 px-6 bg-base-light'> */}
    <div className='flex items-center justify-center py-16 px-6'>
      <div className='max-w-lg'>
        <p className='center-heading text-2xl sm:text-3xl lg-text-4xl social-bg bg-gradient-to-br from-red-500 to-indigo-400 font-bold mb-5'>
          Tech-Fest @ Ahmedabad University
        </p>
        <p className='center-text text-white'>
          Ingenium is the official tech-fest of Ahmedabad University hosted at
          the School of Engineering and Applied Science each year since 2016. It
          is a platform to test the caliber of the participants while
          maintaining a healthy and competitive spirit. We invite and host
          participants from across the state and are eager to expand the
          outreach to a national level. This year we are taking the techfest to
          the online virtual platform. In the previous years, we have managed to
          garner participation from nearly 60 institutes across India.
        </p>
      </div>
    </div>
    {/* <div className='contianer mx-auto md:max-w-4/5 lg:max-w-7/10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
      <div className='p-10'>
        <p className='text-2xl sm:text-3xl lg-text-4xl text-primary font-bold mb-5'>
          We are
        </p>
        <p className='text-white'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
          nostrum laborum quaerat natus nulla ducimus deleniti illum velit
          mollitia voluptates, quas totam iure, harum consequuntur similique
          nesciunt earum hic quis.
        </p>
      </div>
      <div className='p-10'>
        <p className='text-2xl sm:text-3xl lg-text-4xl text-primary font-bold mb-5'>
          We are not
        </p>
        <p className='text-white'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
          nostrum laborum quaerat natus nulla ducimus deleniti illum velit
          mollitia voluptates, quas totam iure, harum consequuntur similique
          nesciunt earum hic quis.
        </p>
      </div>
      <div className='p-10'>
        <p className='text-2xl sm:text-3xl lg-text-4xl text-primary font-bold mb-5'>
          What we have for you
        </p>
        <p className='text-white'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
          nostrum laborum quaerat natus nulla ducimus deleniti illum velit
          mollitia voluptates, quas totam iure, harum consequuntur similique
          nesciunt earum hic quis.
        </p>
      </div>
    </div> */}
  </>
);

export default AboutUs;
