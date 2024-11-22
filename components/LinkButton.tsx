import { AppRoute } from "@/libs/enums";
import Link from "next/link";
import { ValueOf } from "@/types";

type Properties = {
  label: string;
  href: ValueOf<typeof AppRoute>;
};

function LinkButton({ label, href }: Properties) {
  return (
    <Link
      href={href}
      className="transition bg-white border-2 py-1 px-5 border-white text-black text-lg rounded-3xl hover:bg-black hover:text-white hover:border-black"
    >
      {label}
    </Link>
  );
}

export { LinkButton };
