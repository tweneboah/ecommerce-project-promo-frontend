import React from 'react';

const WhoWeAre = () => {
  return (
    <div>
      <section class='py-12 px-4'>
        <div class='flex flex-wrap -mx-4'>
          <div class='w-full lg:w-1/2 px-4 mb-8 lg:mb-0'>
            <div class='flex flex-col h-full p-8 bg-green-900 rounded'>
              <h2 class='text-3xl text-gray-200 font-semibold font-heading'>
                Who We Are
              </h2>
              <p class='max-w-sm mt-12 mb-8 text-gray-400 leading-relaxed'>
                We don’t believe in paperless future - so do our Customers.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
                hic velit error commodi, pariatur quos sit placeat a dolores
                maiores nam distinctio minus libero minima, necessitatibus totam
                quae numquam ea.
              </p>
              <a class='text-right text-indigo-600 hover:underline' href='#'>
                View all Dunder Mifflin customers
              </a>
            </div>
          </div>
          <div class='lg:w-1/2 px-4'>
            <div class='flex flex-wrap -m-2'>
              <div class='w-1/2 p-2'>
                <img
                  class='rounded shadow'
                  src='https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg'
                  alt=''
                />
              </div>
              <div class='w-1/2 p-2'>
                <img
                  class='rounded shadow'
                  src='https://cdn.pixabay.com/photo/2017/10/10/21/48/filmmaker-2838932_1280.jpg'
                  alt=''
                />
              </div>
              <div class='w-1/2 p-2'>
                <img
                  class='rounded shadow'
                  src='https://cdn.pixabay.com/photo/2018/01/18/23/02/laptop-3091427_1280.jpg'
                  alt=''
                />
              </div>
              <div class='w-1/2 p-2'>
                <img
                  class='rounded shadow'
                  src='https://cdn.pixabay.com/photo/2018/08/10/15/43/woman-3597095_1280.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
