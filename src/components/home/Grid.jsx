// src/components/home/Grid.jsx

import Image from 'next/image';


const Grid = ({ img1, img2, img3, width, height }) => {
  // Filtrar las imágenes que existen
  const images = [img1, img2, img3].filter(Boolean);

  return (
    <div className="flex justify-center gap-4 max-w-4xl mx-auto my-8">
      {images.map((img, index) => (
        <div key={index} className="w-1/3 px-2">
          <Image src={img} alt={`Cuadrada ${index + 1}`} className={`w-full h-full object-cover ${width} ${height}`} />
        </div>
      ))}
    </div>
  );
};

export default Grid;

