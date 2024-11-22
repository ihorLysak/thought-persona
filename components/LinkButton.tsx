import { AppRoute } from "@/libs/enums";
import Link from "next/link";
import { ValueOf } from "@/types";

type Properties = {
  label: string | React.ReactNode;
  href: ValueOf<typeof AppRoute>;
};

function LinkButton({ label, href }: Properties) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center transition w-10 h-10 bg-white border-2 border-white text-black text-lg rounded-full hover:bg-black hover:text-white hover:border-black"
    >
      {label}
    </Link>
  );
}

export { LinkButton };
