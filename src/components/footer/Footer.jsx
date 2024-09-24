import React from 'react';

const Footer = ({footerClassName}) => {
  return (
    <div className={`bg-[#D9D9D9] w-full h-[50px] flex justify-center items-center text-[12px] lg:text-[15px] ${footerClassName}`}>
      Copyright 2023 | Created by DMV Development®
    </div>
  );
};

export default Footer;