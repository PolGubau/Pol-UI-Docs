const code = `
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,Card } from "pol-ui";

import React from "react";

const CarouselComponent = () => {
  return (
    <Carousel options= {startIndex : 3}>
    <CarouselContent>
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index}>
          <div className="p-1">
            <Card className="flex aspect-video items-center justify-center p-6">
              <span className="text-4xl font-semibold">{index + 1}</span>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  );
};
export default CarouselComponent;
`;
export default code;
