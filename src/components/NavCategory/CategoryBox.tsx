import { TCategory } from "@/types/navbarCategoryTypes";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function CategoryBox({ category }: { category: TCategory }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleClick = () => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (newParams.toString().includes(`category=${category.label}`)) {
      newParams.delete("category");
    } else {
      newParams.set("category", category.label);
    }

    router.push(pathname + "?" + newParams.toString());
  };

  return (
    <div
      className="flex flex-col items-center justify-center
      space-y-1 opacity-65 select-none cursor-pointer"
      onClick={handleClick}
    >
      <category.icons size={22} />
      <span className="text-sm text-center">{category.label}</span>
    </div>
  );
}
