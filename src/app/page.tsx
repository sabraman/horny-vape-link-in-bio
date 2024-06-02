import Image from 'next/image';
import Link from 'next/link';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
    CarouselItem,
    CarouselContent,
    CarouselPrevious,
    CarouselNext,
    Carousel,
} from '@/components/ui/carousel';
import Youtube from '@/components/ui/Youtube';
import { Shops } from './_components/shops';
import { LatestVideo } from './_components/latest-video';

const franchiseSlides = ['franchise (1).jpg', 'franchise (2).jpg', 'franchise (3).jpg', 'franchise (4).jpg', 'franchise (5).jpg', 'franchise (6).jpg', 'franchise (7).jpg', 'franchise (8).jpg'];

export default function Home() {


    return (
        <>
            <Carousel className="mt-6 w-full max-w-md">
                <CarouselContent>
                    <CarouselItem>
                        <div className="p-1">
                            <AspectRatio ratio={3 / 2}>
                                <Image
                                    src="/images/slide (1).jpg"
                                    width={640}
                                    height={427}
                                    alt="Интерьер вейп шопа Horny Vape, с прилавком и полками, уставленными разнообразной вейп-продукцией"
                                    className="rounded-lg object-cover"
                                    priority
                                />
                            </AspectRatio>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="p-1">
                            <AspectRatio ratio={3 / 2}>
                                <Image
                                    src="/images/slide (2).jpg"
                                    width={640}
                                    height={427}
                                    alt="Интерьер вейп шопа Horny Vape с подсвеченными полками, с различными жидкостями и устройствами, а также прилавком освещенным тусклым ораньжевым светом"
                                    className="rounded-lg object-cover"
                                    loading="lazy"
                                />
                            </AspectRatio>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="p-1">
                            <AspectRatio ratio={3 / 2}>
                                <Image
                                    src="/images/slide (3).jpg"
                                    width={640}
                                    height={427}
                                    alt="Молодая девушка стоит в ярко освещенном вейп шопе Horny Vape с современными деревянными светильниками и неоновым освещением над головой. На ней серый свитшот и джинсы-клеш, а за ее спиной стоят полки с жидкостями и одноразками."
                                    className="rounded-lg object-cover"
                                    loading="lazy"
                                />
                            </AspectRatio>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <div className="mt-8 flex flex-col gap-4">
                <Link
                    className="inline-flex h-12 items-center justify-center rounded-md  bg-sky-400 px-6 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-sky-400/90 focus:outline-none focus:ring-1 focus:ring-gray-300"
                    href="tg://resolve?domain=horny_vape"
                >
                    Telegram
                </Link>
                <Link
                    className="inline-flex h-12 items-center justify-center rounded-md  bg-sky-400 px-6 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-sky-400/90 focus:outline-none focus:ring-1 focus:ring-gray-300"
                    href="tg://resolve?domain=HornyVape_bot"
                >
                    Наш бот
                </Link>
                <Link
                    className="inline-flex h-12 items-center justify-center rounded-md bg-red-500 px-6 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-red-500/90  focus:outline-none focus:ring-1 focus:ring-gray-300"
                    href="https://www.youtube.com/channel/UCYtkLtr1QD3IzDo39848ytA?sub_confirmation=1"
                >
                    Youtube
                </Link>
                <Link
                    className="inline-flex h-12 items-center justify-center rounded-md bg-pink-500  px-6 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-pink-500/90 focus:outline-none focus:ring-1 focus:ring-gray-300"
                    href="https://instagram.com/hornyvapeshop/"
                >
                    Inst
                </Link>
            </div>
            <LatestVideo />

            <Shops />

            <p className="mt-8 text-center text-4xl font-bold uppercase  text-gray-50">
                франшиза
            </p>
            <p className="mt-4 text-left text-2xl font-medium  text-gray-50">
                Horny франшизы — теперь доступны каждому!
            </p>

            <Carousel className="mt-6 w-full max-w-md">
                <CarouselContent>
                    {franchiseSlides.map((slide) => (

                        <CarouselItem key={slide}>
                            <div className="p-1">
                                <AspectRatio ratio={16 / 9}>
                                    <Image
                                        src={`/images/${slide}`}
                                        width={640}
                                        height={360}
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


            <div className="mt-8 flex flex-col gap-4">
                <Link
                    className="inline-flex h-12 items-center justify-center rounded-md  bg-sky-400 px-6 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-sky-400/90 focus:outline-none focus:ring-1 focus:ring-gray-300"
                    href="tg://resolve?domain=MikhailHornyVape"
                >
                    Узнать больше
                </Link>
            </div>
        </>
    );
}
