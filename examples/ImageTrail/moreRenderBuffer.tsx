const code = `
import { ImageTrail } from "pol-ui";
import { TbMouse } from "react-icons/tb";
import React from "react";

const ImageTrailComponent = () => {
  const images: [
    'https://images.pexels.com/photos/59992/crocus-flower-spring-purple-59992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/139205/pexels-photo-139205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1555900/pexels-photo-1555900.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/45180/crocus-flowers-violet-spring-45180.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/59992/crocus-flower-spring-purple-59992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/139205/pexels-photo-139205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1555900/pexels-photo-1555900.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/45180/crocus-flowers-violet-spring-45180.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/59992/crocus-flower-spring-purple-59992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/139205/pexels-photo-139205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1555900/pexels-photo-1555900.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/45180/crocus-flowers-violet-spring-45180.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/59992/crocus-flower-spring-purple-59992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/139205/pexels-photo-139205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1555900/pexels-photo-1555900.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/45180/crocus-flowers-violet-spring-45180.jpeg?auto=compress&cs=tinysrgb&w=600',
  ],
  return (
    <ImageTrail renderImageBuffer={300} images={images} rotationRange={20}>
    <section className="flex h-[400px] w-full place-content-center bg-primary-200">
          <p className="flex items-center gap-2 text-3xl font-bold uppercase text-black">
            <TbMouse />
            <span>Hover me</span>
          </p>
        </section>
    </ImageTrail>
  );
};
export default ImageTrailComponent;
`;
export default code;
