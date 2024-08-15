import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
const franchiseSlides = [
	"franchise (1).jpg",
	"franchise (2).jpg",
	"franchise (3).jpg",
	"franchise (4).jpg",
	"franchise (5).jpg",
	"franchise (6).jpg",
	"franchise (7).jpg",
	"franchise (8).jpg",
];
export default function Franchise() {
	return (
		<div className="flex w-full flex-col gap-6">
			<p className="text-center text-4xl font-bold uppercase text-white">
				франшиза
			</p>
			<Carousel className="w-full">
				<CarouselContent>
					{franchiseSlides.map((slide) => (
						<CarouselItem key={slide}>
							<div className="p-0">
								<AspectRatio ratio={16 / 9}>
									<Image
										src={`/images/${slide}`}
										fill
										alt={slide}
										className="rounded-lg object-cover"
										priority
									/>
								</AspectRatio>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			<p className="text-left text-2xl font-medium  text-gray-50">
				Horny франшизы — теперь доступны каждому!
			</p>

			<Link
				className="inline-flex h-auto  items-center justify-center rounded-lg bg-blue-500 px-6  py-3 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-pink-500/90 focus:outline-none focus:ring-1 focus:ring-gray-300"
				href="tg://resolve?domain=arkingen"
			>
				Узнать больше
			</Link>
		</div>
	);
}
