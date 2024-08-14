import { Button } from "@/components/ui/button";
import { Gajraj_One, Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const gajraj = Gajraj_One({ weight: "400", subsets: ["latin"] });

export default function Widget() {
  return (
    <div className="mt-8 w-full border-dashed border-2 rounded-lg gap-6 flex flex-col p-6">
      <p
        className={cn(
          gajraj.className,
          "animate-pulse my-4 text-center text-6xl text-horny-pink filter drop-shadow-horny-sm font-bold uppercase"
        )}
      >
        Horny Party
      </p>
      <div className="text-left text-2xl font-medium  text-gray-50">
        <span className="block text-3xl font-semibold">Тебя ждут:</span>
        <ul className="list-disc list-inside mt-2">
          <li>
            Известные имена электро-сцены, которые исполнят для тебя свои лучшие
            сеты
          </li>
          <li>
            <span className="font-semibold">
              Специально приготовленные ивенты
            </span>
          </li>
          <li>
            <span className="font-semibold">Коллаборации</span> с специально
            приглашенными гостями
          </li>
          <li>
            <span className="font-semibold">Вкуснейший бар</span>
          </li>
          <li>
            <span className="font-semibold">Несколько шоу</span>, которые будут
            вписаны в вечеринку
          </li>
          <li>
            <span className="font-semibold">Подарки и призы</span> от нас и
            наших спонсоров
          </li>
        </ul>
      </div>
      <div className="mt-4 flex justify-between flex-row gap-2 space-x-4 text-lg font-medium text-white">
        <span className="flex text-3xl items-right font-semibold">Когда:</span>
        <div className="flex justify-end flex-row w-auto rounded-md gap-2 px-3 py-1 text-gray-500 bg-gray-800">
          <span className="font-semibold text-white">23 августа,</span>
          <span className="font-semibold">Пятница</span>
          <span className="font-semibold text-white">21:00</span>
        </div>
      </div>
      <div className="mt-4 flex justify-between flex-row gap-2 space-x-4 text-lg font-medium text-wite">
        <span className="flex text-3xl items-right font-semibold">Где:</span>
        <div className="flex justify-end flex-row w-auto rounded-md gap-2 px-3 py-1 text-gray-500 bg-gray-800">
          <span className="font-semibold text-white">DVOIKA,</span>
          <span className="font-semibold">Санкт-Петербург</span>
          <span className="font-semibold text-white">Белинского 9</span>
        </div>
      </div>
      <Image
        src="/images/horny-party.jpg"
        alt="Horny Party"
        width={1280}
        height={1299}
        className="h-full rounded-lg object-cover"
      />
      <Link
        href="https://ticketscloud.com/v1/widgets/common?token=eyJhbGciOiJIUzI1NiIsImlzcyI6InRpY2tldHNjbG91ZC5ydSIsInR5cCI6IkpXVCJ9.eyJwIjoiNjYyMTJiYzlmZjBhZDM0YjNhMDljYzMxIn0.UJi4ilAa-vbX4Op2vZ3FZ3_Jk8TIVbcTrXadlIRJdqM&lang=ru&event=66ba5f7145ed8a080fd2e4d4&s=1"
        className={cn(
          "bg-gray-50 inline-flex h-12 items-center justify-center rounded-md px-6 text-xl font-bold uppercase text-gray-50 transition-colors focus:outline-none focus:ring-1 focus:ring-gray-300 w-full text-bold text-black"
        )}
      >
        {" "}
        Купить билет{" "}
      </Link>
    </div>
  );
}
