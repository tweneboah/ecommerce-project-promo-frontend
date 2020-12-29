import React from 'react';
import bg from '../../images/bg.jpg';
import Svg1 from '../../images/business.svg';
import RequstForApplication from '../RequestForApplication/RequstForApplication';
import RequestForApplicationProcess from '../RequestForApplicationProcess/RequestForApplicationProcess';
import WhoWeAre from '../WhoWeAre/WhoWeAre';
const HeroPage = () => {
  return (
    <>
      <section className='py-12 px-4'>
        <div className='flex flex-wrap items-center text-center lg:text-left -mx-2'>
          <div className='lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none'>
            <h2 className='text-5xl mb-6 leading-tight font-semibold font-heading'>
              New Ecommerce website just launch
            </h2>
            <p className='mb-8 text-gray-400 leading-relaxed'>
              Bunch of features to run your business online. Open your store
              24/7. Let your store work while you are even sleeping
            </p>
            <div>
              <a
                className='inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow'
                href='#'>
                Buy now
              </a>
              <a
                className='inline-block py-4 px-8 mr-6 leading-none text-white bg-red-600 hover:bg-indigo-700 font-semibold rounded shadow'
                href='#'>
                Request for demo
              </a>
            </div>
          </div>
          <div className='lg:w-1/2 px-2'>
            <img src={Svg1} alt='' />
          </div>
        </div>
      </section>
      <WhoWeAre />
      <RequstForApplication />
      <RequestForApplicationProcess />
    </>
  );
};

export default HeroPage;
