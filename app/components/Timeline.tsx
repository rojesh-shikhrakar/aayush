import { FC } from 'react';
import Image from 'next/image';

interface TimelineProps {
  images: { src: string; alt: string }[];
}

const Timeline: FC<TimelineProps> = ({ images }) => {
  return (
    <div className="relative w-full">
      <div className="flex justify-around items-center overflow-x-scroll scrollbar-hide w-full">
        {images.map((image, index) => (
          <div key={index} className="relative flex flex-col items-center z-4">
            <div className="relative w-120 h-150 rounded-b-lg"> {/* Added relative positioning */}
              <Image
                className="object-cover"
                src={image.src}
                alt={image.alt}
                fill
                priority
              />
              
            </div>
            {image.alt}
          </div>
        ))}
      </div>
      <div className="absolute left-0 w-full h-0.5 bg-gray-300 transform -translate-y-1/2 z-0"></div>      <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-blue-500 z-10"></div>
    </div>
  );
};

export default Timeline;
