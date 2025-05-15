import React from 'react';

const CarouselSkeleton = () => {
  return (
    <div className="w-full h-[400px] bg-gray-200 animate-pulse rounded-lg">
      {/* Navigation Buttons Skeleton */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-300 rounded-full" />
      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-300 rounded-full" />
      
      {/* Indicators Skeleton */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-gray-300"
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselSkeleton; 