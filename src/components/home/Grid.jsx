// src/components/home/Grid.jsx

import Image from 'next/image';


const Grid = ({img1,img2,img3}) => {
  return (
    <div className="flex justify-between max-w-4xl mx-auto my-8">
      <div className="w-1/3 px-2">
        <Image src={img1} alt="Cuadrada 1" className="w-full h-full object-cover"/>
      </div>
      <div className="w-1/3 px-2">
        <Image src={img2} alt="Cuadrada 2" className="w-full h-full object-cover"/>
      </div>
      <div className="w-1/3 px-2">
        <Image src={img3} alt="Cuadrada 3" className="w-full h-full object-cover"/>
      </div>
    </div>
  );
};

export default Grid;
