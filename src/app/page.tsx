import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
	CarouselItem,
	CarouselContent,
	CarouselPrevious,
	CarouselNext,
	Carousel,
} from "@/components/ui/carousel";
import { Shops } from "./_components/shops";
import { LatestVideo } from "./_components/latest-video";
import { Logo } from "./_components/logo";
import { cn } from "@/lib/utils";
import TicketsCloud from "./_components/tickets-cloud";
import Widget from "./_components/widget";
import Social from "./_components/social";
import Franchise from "./_components/franchise";
import Wear from "./_components/wear";

export default function Page() {
	return (
		<>
			<Logo />
			<main className="mx-auto flex max-w-4xl flex-col gap-24 p-4">
				<Widget />
				<Social />
				<Wear />
				{/* <LatestVideo /> */}
				<Shops />
				<Franchise />
			</main>
		</>
	);
}
