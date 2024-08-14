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

const partySlides = [
	// "party1.jpg",
	"party2.jpg",
	"party3.jpg",
	"party4.jpg",
	"party5.jpg",
	"party6.jpg",
	"party7.jpg",
];

const wearSlides = [
	"wear1.png",
	"wear4.jpg",
	"wear2.png",
	"wear6.jpg",
	"wear3.png",
	"wear5.jpg",
];

export default function Page() {
	return (
		<>
			<main className="mx-auto flex max-w-4xl flex-col gap-6 p-4">
				<Logo />
				<Carousel className="w-full">
					<CarouselContent>
						{partySlides.map((slide) => (
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
				<Widget />
				<div className="flex w-full flex-col gap-6">
					<p className="text-center text-4xl font-bold uppercase  text-gray-50">
						Соцсети
					</p>

					<div className="flex flex-col gap-4">
						<Link
							className="inline-flex h-auto  items-center justify-center rounded-lg bg-sky-400  px-6 py-3 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-sky-400/90 focus:outline-none focus:ring-1 focus:ring-gray-300"
							href="tg://resolve?domain=hornyplace_tg"
						>
							Telegram
						</Link>
						<Link
							className="inline-flex h-auto  items-center justify-center rounded-lg bg-sky-600  px-6 py-3 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-sky-400/90 focus:outline-none focus:ring-1 focus:ring-gray-300"
							href="tg://resolve?domain=Horny_Place_bot"
						>
							Наш бот
						</Link>
						<Link
							className="inline-flex h-auto  items-center justify-center rounded-lg bg-blue-600  px-6 py-3 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-sky-400/90 focus:outline-none focus:ring-1 focus:ring-gray-300"
							href="https://vk.com/hornyplace_vk"
						>
							ВК
						</Link>
						<Link
							className="inline-flex h-auto  items-center justify-center rounded-lg bg-red-500 px-6 py-3 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-red-500/90  focus:outline-none focus:ring-1 focus:ring-gray-300"
							href="https://www.youtube.com/channel/UCYtkLtr1QD3IzDo39848ytA?sub_confirmation=1"
						>
							Youtube
						</Link>
						<Link
							className="inline-flex h-auto  items-center justify-center rounded-lg bg-pink-500 px-6  py-3 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-pink-500/90 focus:outline-none focus:ring-1 focus:ring-gray-300"
							href="https://instagram.com/hornyplace_inst/"
						>
							Inst
						</Link>
					</div>
				</div>
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
						У нас можно купить оригинальные кроссовки и наш бренд одежды.
						Онлайн-магазин с доставкой в нашем боте.
					</p>
					<Link
						className="inline-flex h-auto w-full items-center justify-center rounded-lg bg-sky-600  px-6 py-3 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-sky-400/90 focus:outline-none focus:ring-1 focus:ring-gray-300"
						href="tg://resolve?domain=Horny_Place_bot"
					>
						Заказать
					</Link>
				</div>
				{/* <LatestVideo /> */}
				<Shops />
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
			</main>
		</>
	);
}
