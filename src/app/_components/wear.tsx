import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from "@/components/ui/carousel";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Link from "next/link";
import Image from "next/image";
const wearSlides = [
	"wear1.png",
	"wear4.jpg",
	"wear2.png",
	// "wear6.jpg",
	"wear5.jpg",
	"wear3.png",
];
export default function Wear() {
	return (
		<div className="flex flex-col gap-4">
			<Carousel className="w-full">
				<CarouselContent>
					{wearSlides.map((slide) => (
						<CarouselItem key={slide}>
							<div className="p-0">
								<AspectRatio ratio={3 / 2}>
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
			<p className="text-left text-xl font-medium text-white">
				В наших магазинах вы найдёте оригинальные кроссовки и одежду нашего
				собственного бренда. Можете примерить и купить их на оффлайн точках или
				заказать онлайн через нашего бота с доставкой на дом.
			</p>
			<Link
				className="inline-flex h-auto w-full items-center justify-center rounded-lg bg-sky-600  px-6 py-3 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-sky-400/90 focus:outline-none focus:ring-1 focus:ring-gray-300"
				href="https://t.me/Horny_Place_bot"
			>
				Заказать
			</Link>
		</div>
	);
}
