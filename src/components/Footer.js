import React from 'react';
// import footer data
import { footerData } from '../data';
// import icons
import { GrSend } from 'react-icons/gr';

const Footer = () => {
  // destructure footer data
  const { about, links, program, newsletter } = footerData;
  return (
    <footer className='bg-dark section'>
      <div className='container mx-auto'>
        {/* grid */}
        <div className='flex flex-col lg:flex-row lg:justify-between text-white gap-x-5 gap-y-14'>
          {/* about */}
          <div className='flex-1 flex flex-col gap-y-6'>
            {/* title */}
            <div className='font-primary text-xl uppercase tracking-[0.08em]'>
              {about.title}
            </div>
            {/* subtitle */}
            <div className='leading-relaxed'>{about.subtitle}</div>
            {/* address & phone & email */}
            <div className='flex flex-col gap-y-4 font-semibold text-[#DBDBDB]'>
              {/* address */}
              <div className='flex items-center gap-x-[10px]'>
                <div>{about.address.icon}</div>
                <div>{about.address.name}</div>
              </div>
              {/* phone */}
              <div className='flex items-center gap-x-[10px]'>
                <div>{about.phone.icon}</div>
                <div>{about.phone.number}</div>
              </div>
              {/* email */}
              <div className='flex items-center gap-x-[10px]'>
                <div>{about.email.icon}</div>
                <div>{about.email.address}</div>
              </div>
            </div>
          </div>
          {/* links */}
          <div className='flex-1 flex flex-col xl:items-center'>
            <div>
              <div className='font-primary text-xl uppercase tracking-[0.08em] mb-6'>
                {links.title}
              </div>
              <ul className='flex flex-col gap-y-4 text-[#DBDBDB]'>
                {links.items.map((item, index) => {
                  // destructure item
                  const { href, name } = item;
                  return (
                    <li key={index}>
                      <a className='hover:text-white transition' href={href}>
                        {name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* program */}
          <div className='flex-1'>
            <div className='font-primary text-xl uppercase tracking-[0.08em] mb-6'>
              {program.title}
            </div>
            <ul className='flex flex-col gap-y-4 text-[#DBDBDB]'>
              {program.items.map((item, index) => {
                return <li>{item.name}</li>;
              })}
            </ul>
          </div>
          {/* newsletter */}
          <div className='flex-1'>
            <div className='font-primary text-xl uppercase tracking-[0.08em] mb-6'>
              {newsletter.title}
            </div>
            <div className='leading-relaxed mb-9'>{newsletter.subtitle}</div>
            <form className='flex  justify-between items-start border-b border-[#B6B6B6]'>
              <input
                className='outline-none placeholder:text-base italic capitalize bg-transparent pb-2'
                type='text'
                placeholder={newsletter.form.placeholder}
              />
              <button type='submit' className='text-2xl cursor-pointer'>
                {newsletter.form.icon}
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;