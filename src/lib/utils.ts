import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { extendTailwindMerge } from "tailwind-merge";
import { withFluid } from "@fluid-tailwind/tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	const etwMerge = extendTailwindMerge(withFluid);

	return etwMerge(clsx(inputs));
}
