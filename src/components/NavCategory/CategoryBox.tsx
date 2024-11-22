import { TCategory } from "@/types/navbarCategoryTypes";

export default function CategoryBox({ category }: { category: TCategory }) {
  return (
    <div
      className="flex flex-col items-center justify-center
      space-y-1 opacity-65 select-none"
    >
      <category.icons size={22} />
      <span className="text-sm text-center">{category.label}</span>
    </div>
  );
}
