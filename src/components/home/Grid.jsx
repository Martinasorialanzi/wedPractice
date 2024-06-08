// src/components/home/Grid.jsx

import Image from 'next/image';
import imgSquare1 from '/public/cuad1.jpeg';
import imgSquare2 from '/public/cuad2.jpeg';
import imgSquare3 from '/public/cuad3.jpeg';

const Grid = () => {
  return (
    <div className="flex justify-between max-w-4xl mx-auto my-8"> {/* Flex container with space-between */}
      <div className="w-1/3 px-2"> {/* Flex item */}
        <Image src={imgSquare1} alt="Cuadrada 1" className="w-full h-full object-cover"/>
      </div>
      <div className="w-1/3 px-2"> {/* Flex item */}
        <Image src={imgSquare2} alt="Cuadrada 2" className="w-full h-full object-cover"/>
      </div>
      <div className="w-1/3 px-2"> {/* Flex item */}
        <Image src={imgSquare3} alt="Cuadrada 3" className="w-full h-full object-cover"/>
      </div>
    </div>
  );
};

export default Grid;
