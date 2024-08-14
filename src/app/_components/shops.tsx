"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export const shops = [
  {
    id: 1,
    color: ["bg-rose-500", "hover:bg-rose-600"],
    title: "Лермонтовский, 50",
    description: "Вход в магазин со стороны Лермонтовского проспекта ",
    adress: "СПБ, Лемонтовский проспект, 50",
    image: "/images/lermo.webp",
    yandexMaps: "https://yandex.ru/maps/-/CDfWMOza",
    doubleGis: "https://go.2gis.com/4ha0k",
    workTime: "9:00 - 21:00",
    metro: "Балтийская - 710 м",
    phone: "+7 (931) 109-72-90",
  },
  {
    id: 2,
    color: ["bg-pink-500", "hover:bg-pink-600"],
    title: "​Лиговский, 215",
    description: "Вход в магазин со стороны Лиговского проспекта ",
    adress: "СПБ, ​Лиговский проспект, 215",
    image: "/images/liga215.webp",
    yandexMaps: "https://yandex.ru/maps/-/CDfWM2jb",
    doubleGis: "https://go.2gis.com/g21gx",
    workTime: "10:00 - 22:00",
    metro: "Обводный канал - 520 м",
    phone: "+7 (931) 109-72-90",
  },
  {
    id: 3,
    color: ["bg-fuchsia-500", "hover:bg-fuchsia-600"],
    title: "​Рентгена, 25",
    description: "Вход в магазин со стороны улицы Рентгена",
    adress: "СПБ, улица Рентгена, 25",
    image: "/images/rentgen.webp",
    yandexMaps: "https://yandex.ru/maps/-/CDfWUB~o",
    doubleGis: "https://go.2gis.com/tpwzf",
    workTime: "9:00 - 22:00",
    metro: "Петроградская - 1,16 км",
    phone: "+7 (931) 109-72-90",
  },
  {
    id: 4,
    color: ["bg-purple-500", "hover:bg-purple-600"],
    title: "​Кузнечный, 15",
    description: "Вход в магазин со стороны ​Кузнечного переулка",
    adress: "СПБ, ​Кузнечный переулок, 15",
    image: "/images/kuzya.webp",
    yandexMaps: "https://yandex.ru/maps/-/CDfWQR83",
    doubleGis: "https://go.2gis.com/ibnyc",
    workTime: "10:00 - 22:00",
    metro: "Владимирская - 360 м",
    phone: "+7 (931) 109-72-90",
  },
  {
    id: 5,
    color: ["bg-violet-500", "hover:bg-violet-600"],
    title: "Средний, 61",
    description: "Вход в магазин со стороны Среднего проспекта В.О.",
    adress: "СПБ, ​Средний проспект В.О., 61",
    image: "/images/vaska.webp",
    yandexMaps: "https://yandex.ru/maps/-/CDfWQPYY",
    doubleGis: "https://go.2gis.com/mppvv",
    workTime: "10:00 - 22:00",
    metro: "Василеостровская  - 760 м",
    phone: "+7 (931) 109-72-90",
  },
  {
    id: 6,
    color: ["bg-indigo-500", "hover:bg-indigo-600"],
    title: "​Лиговский, 74",
    description: "Вход в магазин со стороны Лиговского проспекта ",
    adress: "СПБ, ​Лиговский проспект, 74",
    image: "/images/liga74.png",
    yandexMaps: "https://yandex.ru/maps/-/CDfWU8zK",
    doubleGis: "https://go.2gis.com/tpsa2",
    workTime: "10:00 - 22:00",
    metro: "Лиговский проспект - 160 м",
    phone: "+7 (931) 109-72-90",
  },
];

export function ShopsCarousel() {
  return (
    <Carousel className="mt-6 w-full">
      <CarouselContent>
        {shops.map((shop) => (
          <CarouselItem key={shop.id}>
            <div className="p-0">
              <AspectRatio ratio={3 / 2}>
                <Image
                  src={shop.image}
                  //   width={640}
                  //   height={427}
                  alt={shop.title}
                  fill
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
  );
}
export function Shops() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-8 flex flex-col gap-4">
      <h2 className="mt-4 text-center text-4xl font-bold uppercase  text-gray-50">
        Наши магазины
      </h2>
      <ShopsCarousel />
      {shops.map((shop) => (
        <Drawer
          key={shop.id}
          // open={open}
        >
          <DrawerTrigger
            className={cn(
              `${shop.color[0]}`,
              `${shop.color[1]}`,
              "h-auto py-3  inline-flex items-center justify-center rounded-md  px-6 text-xl font-bold uppercase text-gray-50 transition-colors focus:outline-none focus:ring-1 focus:ring-gray-300"
            )}
          >
            {/* <Button
                        onClick={() => setOpen(!open)}
                        className={cn(`inline-flex h-12 items-center justify-center rounded-md  px-6 text-xl font-bold uppercase text-gray-50 transition-colors focus:outline-none focus:ring-1 focus:ring-gray-300 w-full`,)}
                        key={shop.id}
                        variant={"noBackground"}
                        color={shop.color}
                    > */}
            {shop.title}
            {/* </Button> */}
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>{shop.title}</DrawerTitle>
              <DrawerDescription>{shop.description}</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <p>Режим работы: {shop.workTime}</p>
              <div className="inline-flex w-full items-center justify-between gap-2">
                {/* <Link className='h-11' variant={"outline"} size={"icon"}><Phone /></Link> */}
                <Link
                  href={`tel:${shop.phone}`}
                  className="inline-flex h-12 w-12 px-3 items-center justify-center rounded-md border-2 border-gray-800 bg-gray-950  uppercase text-gray-50 transition-colors hover:bg-gray-800 hover:text-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-300"
                  target="_blank"
                >
                  <Phone />
                </Link>
                <Link
                  href={shop.yandexMaps}
                  className="inline-flex h-12  w-1/2 items-center justify-center rounded-md bg-yellow-500 px-6 font-medium  uppercase text-gray-50 transition-colors hover:bg-yellow-600 focus:outline-none focus:ring-1 focus:ring-gray-300"
                  target="_blank"
                >
                  Я.Карты
                </Link>
                <Link
                  href={shop.doubleGis}
                  className="inline-flex h-12 w-1/2 items-center justify-center rounded-md bg-lime-500 px-6 font-medium  uppercase text-gray-50 transition-colors hover:bg-lime-600 focus:outline-none focus:ring-1 focus:ring-gray-300"
                  target="_blank"
                >
                  2 GIS
                </Link>
              </div>
              <DrawerClose className="h-11 items-center justify-center rounded-md border-2 border-gray-800 bg-gray-950  px-8 text-gray-50 transition-colors hover:bg-gray-800 hover:text-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-300">
                Отмена
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  );
}
