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
  let categoryBoxSize = 100 / 15;

  return (
    <div className="w-full flex items-center justify-between mt-8">
      <Carousel className="flex space-x-8 w-full">
        <CarouselPrevious
          className="h-fit p-[10px] border rounded-full border-black
          opacity-70 duration-200 disabled:opacity-30"
        />
        <CarouselContent>
          {categories.map((category) => {
            return (
              <CarouselItem
                key={category.id}
                style={{ flexBasis: categoryBoxSize + "%" }}
              >
                <CategoryBox category={category} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselNext
          className="h-fit p-[10px] border rounded-full border-black
          opacity-70 duration-200 disabled:opacity-30"
        />
      </Carousel>
    </div>
  );
}
