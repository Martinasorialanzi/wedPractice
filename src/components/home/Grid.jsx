// src/components/home/Grid.jsx

import Image from 'next/image';


const Grid = ({ img1, img2, img3, width, height,divGrid, divGridImage }) => {
  // Filtrar las imágenes que existen
  const images = [img1, img2, img3].filter(Boolean);

  return (
    <div className={`flex justify-center gap-4  mx-auto my-8 ${divGrid}`}>
      {images.map((img, index) => (
        <div key={index} className={` px-2  ${divGridImage}`}>
          <Image src={img} alt={`Cuadrada ${index + 1}`} className={`w-full h-full object-cover ${width} ${height}`} />
        </div>
      ))}
    </div>
  );
};

export default Grid;

