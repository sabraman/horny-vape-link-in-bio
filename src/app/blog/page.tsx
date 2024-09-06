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
import { Shops } from "../_components/shops";
import { LatestVideo } from "../_components/latest-video";
import { Logo } from "../_components/logo";
import { cn } from "@/lib/utils";

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
  "party1.jpg",
  "party2.jpg",
  "party3.jpg",
  "party4.jpg",
  "party5.jpg",
  "party6.jpg",
  "party7.jpg",
];

function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center [&>div]:w-full",
        className
      )}
      {...props}
    />
  );
}

export default function Page() {
  return (
    <>
      <main className=" items-start justify-center gap-6 rounded-lg p-8 sm:grid md:grid lg:grid-cols-2 xl:grid-cols-3">
        <div className="hidden lg:col-span-3 lg:grid">
          <Logo />
        </div>

        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          <DemoContainer>
            <div className="sm:flex md:flex lg:hidden xl:hidden">
              <Logo />
            </div>
            <p className="mt-6 text-center text-4xl font-bold uppercase  text-gray-50">
              Соцсети
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <Link
                className="inline-flex h-12 items-center justify-center rounded-lg  bg-sky-400 px-6 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-sky-400/90 focus:outline-none focus:ring-1 focus:ring-gray-300"
                href="https://t.me/hornyplace_tg"
              >
                Telegram
              </Link>
              <Link
                className="inline-flex h-12 items-center justify-center rounded-lg  bg-sky-600 px-6 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-sky-400/90 focus:outline-none focus:ring-1 focus:ring-gray-300"
                href="https://t.me/Horny_Place_bot"
              >
                Наш бот
              </Link>
              <Link
                className="inline-flex h-12 items-center justify-center rounded-lg  bg-blue-600 px-6 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-sky-400/90 focus:outline-none focus:ring-1 focus:ring-gray-300"
                href="https://vk.com/hornyplace_vk"
              >
                Наш бот
              </Link>
              <Link
                className="inline-flex h-12 items-center justify-center rounded-lg bg-red-500 px-6 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-red-500/90  focus:outline-none focus:ring-1 focus:ring-gray-300"
                href="https://www.youtube.com/channel/UCYtkLtr1QD3IzDo39848ytA?sub_confirmation=1"
              >
                Youtube
              </Link>
              <Link
                className="inline-flex h-12 items-center justify-center rounded-lg bg-pink-500  px-6 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-pink-500/90 focus:outline-none focus:ring-1 focus:ring-gray-300"
                href="https://instagram.com/hornyplace_inst/"
              >
                Inst
              </Link>
            </div>
            <LatestVideo />
          </DemoContainer>
        </div>
        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          <DemoContainer>
            <p className="mt-6 text-center text-4xl font-bold uppercase  text-gray-50">
              Horny place
            </p>
            <Carousel className="mt-6 w-full">
              <CarouselContent>
                {partySlides.map((slide) => (
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
            <Shops />
          </DemoContainer>
        </div>
        <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
          <DemoContainer>
            <p className="mt-6 text-center text-4xl font-bold uppercase  text-gray-50">
              франшиза
            </p>

            <Carousel className="mt-6 w-full">
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
            <p className="mt-4 text-left text-2xl font-medium  text-gray-50">
              Horny франшизы — теперь доступны каждому!
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <Link
                className="inline-flex h-12 items-center justify-center rounded-lg  bg-sky-400 px-6 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-sky-400/90 focus:outline-none focus:ring-1 focus:ring-gray-300"
                href="https://t.me/arkingen"
              >
                Узнать больше
              </Link>
            </div>
          </DemoContainer>
        </div>
      </main>
    </>
  );
}
