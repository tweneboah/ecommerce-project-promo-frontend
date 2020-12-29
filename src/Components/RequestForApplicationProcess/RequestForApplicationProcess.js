import React from 'react';

const RequestForApplicationProcess = () => {
  return (
    <section className='py-12 px-4 text-center'>
      <h2 className='text-4xl mb-2 leading-tight font-semibold font-heading'>
        Request for Application process
      </h2>
      <p className='text-gray-400'>
        Let’s open a new chapter of your paper adventure!
      </p>
      <div className='flex flex-wrap items-center -mx-8 mt-12 mb-2'>
        <div className='lg:w-1/3 px-8 mb-8'>
          <img
            className='w-1/2 mx-auto mb-8 h-32'
            src='placeholders-2-0/pictures/new_ideas.svg'
            alt=''
          />
          <h3 className='text-2xl mb-4 font-semibold font-heading'>
            <span className='inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full'>
              1
            </span>
            <span>Case Study</span>
          </h3>
          <p className='text-gray-400'>
            Tell us the nature of your company and why you need an application
          </p>
        </div>
        <div className='lg:w-1/3 px-8 mb-8'>
          <img
            className='w-1/2 mx-auto mb-8 h-32'
            src='placeholders-2-0/pictures/certificate.svg'
            alt=''
          />
          <h3 className='text-2xl mb-4 font-semibold font-heading'>
            <span className='inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full'>
              2
            </span>
            <span>Submit a form</span>
          </h3>
          <p className='text-gray-400'>
            You will fill an online form and send to us describing the kind of
            application you need, the deadline, the features.{' '}
            <span>NOTE: </span>
          </p>
        </div>
        <div className='lg:w-1/3 px-8 mb-8'>
          <img
            className='w-1/2 mx-auto mb-8 h-32'
            src='placeholders-2-0/pictures/waiting.svg'
            alt=''
          />
          <h3 className='text-2xl mb-4 font-semibold font-heading'>
            <span className='inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full'>
              3
            </span>
            <span>Agree on Terms</span>
          </h3>
          <p className='text-gray-400'>
            After we receive your form describing your project need we will send
            you a form to sign
          </p>
        </div>

        <div className='lg:w-1/3 px-8 mb-8'>
          <img
            className='w-1/2 mx-auto mb-8 h-32'
            src='placeholders-2-0/pictures/waiting.svg'
            alt=''
          />
          <h3 className='text-2xl mb-4 font-semibold font-heading'>
            <span className='inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full'>
              4
            </span>
            <span>Create an account</span>
          </h3>
          <p className='text-gray-400'>
            You will create an account to check your project status
          </p>
        </div>

        <div className='lg:w-1/3 px-8 mb-8'>
          <img
            className='w-1/2 mx-auto mb-8 h-32'
            src='placeholders-2-0/pictures/waiting.svg'
            alt=''
          />
          <h3 className='text-2xl mb-4 font-semibold font-heading'>
            <span className='inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full'>
              5
            </span>
            <span>Payment</span>
          </h3>
          <p className='text-gray-400'>
            We give a maximum of two months to finish your payment. We subscribe
            our clients on subscription platform where we will deduct your
            account
          </p>
        </div>

        <div className='lg:w-1/3 px-8 mb-8'>
          <img
            className='w-1/2 mx-auto mb-8 h-32'
            src='placeholders-2-0/pictures/waiting.svg'
            alt=''
          />
          <h3 className='text-2xl mb-4 font-semibold font-heading'>
            <span className='inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full'>
              6
            </span>
            <span>Project Start</span>
          </h3>
          <p className='text-gray-400'>
            We give a maximum of two months to finish your payment. We subscribe
            our clients on subscription platform where we will deduct your
            account
          </p>
        </div>
      </div>
      <div>
        <a
          className='inline-block py-4 px-8 leading-none text-white bg-green-600 hover:bg-indigo-700 font-semibold rounded shadow'
          href='#'>
          Request for Project
        </a>
      </div>
    </section>
  );
};

export default RequestForApplicationProcess;
