import { TCategory } from "@/types/navbarCategoryTypes";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

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
      opacity-65 select-none cursor-pointer"
      onClick={handleClick}
    >
      <category.icons size={22} />
      <span className="text-sm text-center mt-1">{category.label}</span>
      <AnimatePresence mode="wait">
        {searchParams.toString().includes(`category=${category.label}`) ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-[2px] mt-[6px] bg-black rounded-full"
            layoutId="underline"
          ></motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
