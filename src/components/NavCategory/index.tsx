"use client";

import { categories } from "../../../data/navbarCategory";
import CategoryBox from "./CategoryBox";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./CategoryCarousel";

export default function NavbarCategory() {
  return (
    <div className="w-full flex items-center justify-between mt-8">
      <Carousel className="flex space-x-0 md:space-x-8 w-full">
        <CarouselPrevious
          className="hidden md:block h-fit p-[10px] border rounded-full border-black
          opacity-70 duration-200 disabled:opacity-30"
        />
        <CarouselContent>
          {categories.map((category) => {
            return (
              <CarouselItem
                key={category.id}
                className="basis-1/3 s:basis-1/5 sm:basis-[14.28%]
                lg:basis-[9.09%] 2xl:basis-[6.666666666666667%]"
              >
                <CategoryBox category={category} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselNext
          className="hidden md:block h-fit p-[10px] border rounded-full border-black
          opacity-70 duration-200 disabled:opacity-30"
        />
      </Carousel>
    </div>
  );
}
