"use client";
import { Button } from "@/components/ui/button";
import { Gajraj_One, Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { LucideMapPin } from "lucide-react";

const gajraj = Gajraj_One({ weight: "400", subsets: ["latin"] });

export default function Widget() {
	return (
		<div className="animate-border rounded-lg  border-dashed bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] p-1 duration-6s">
			<div className="flex w-full flex-col gap-6 rounded-md bg-black p-6">
				<p
					className={cn(
						gajraj.className,
						"my-4 text-center text-6xl font-bold uppercase text-horny-pink drop-shadow-horny-sm filter",
					)}
				>
					Horny Party
				</p>
				<div className="text-left text-2xl font-medium  text-gray-50">
					<span className="block text-3xl font-bold">Тебя ждут:</span>
					<ul className="ml-6 mt-2 list-outside list-disc">
						<li>
							Известные имена электро-сцены, которые исполнят для тебя свои
							лучшие сеты
						</li>
						<li>
							<span className="font-bold">
								Специально приготовленные ивенты
							</span>
						</li>
						<li>
							<span className="font-bold">Коллаборации</span> с специально
							приглашенными гостями
						</li>
						<li>
							<span className="font-bold">Вкуснейший бар</span>
						</li>
						<li>
							<span className="font-bold">Несколько шоу</span>, которые будут
							вписаны в вечеринку
						</li>
						<li>
							<span className="font-bold">Подарки и призы</span> от нас и наших
							спонсоров
						</li>
					</ul>
				</div>
				<div className="text-left text-2xl font-medium  text-gray-50">
					<span className="block text-3xl font-semibold">
						Для тебя сыграют:
					</span>
					<ul className="ml-6 mt-2 list-outside list-disc">
						<div className="flex w-full flex-col justify-between gap-4 text-3xl font-bold uppercase">
							<li>
								<span>Nabik</span>
							</li>
							<li>
								<span>Vibe Masta</span>
							</li>
							<li>
								<span>Nechkin</span>
							</li>
							<li>
								<span>Ika</span>
							</li>
							<li>
								<span>Panorama Channel</span>
							</li>
						</div>
					</ul>
				</div>
				<div className="mt-4 flex flex-col items-center justify-between gap-2 space-x-4 text-lg font-medium text-white sm:flex-row md:flex-row">
					<span className="items-left flex text-3xl font-semibold">Когда:</span>
					<div className="flex flex-row items-center justify-end gap-2 max-[380px]:flex-col">
						<div className="flex h-12 w-auto flex-row justify-end gap-2 rounded-md bg-gray-800 px-3 py-3 text-gray-500">
							<span className="font-semibold text-white">23 августа,</span>
							<span className="font-semibold">пт</span>
							<span className="font-semibold text-white">21:00</span>
						</div>
						<AddToCalendarButton
							name="HORNY PARTY"
							description="Nabik / Vibe Masta / Ika / Nechkin / Panorama chanel"
							startDate="2024-08-23"
							startTime="21:00"
							endDate="2024-08-24"
							endTime="05:00"
							timeZone="Europe/Moscow"
							location="DVOIKA Санкт-Петербург Белинского 9"
							options="'Apple','Google'"
							hideTextLabelButton
							lightMode="dark"
						></AddToCalendarButton>
					</div>
				</div>
				<div className="mt-4 flex w-auto flex-col items-center justify-between gap-2 space-x-4 text-lg font-medium text-white sm:flex-row md:flex-row">
					<span className="items-right flex text-3xl font-semibold">Где:</span>
					<div className="flex flex-row items-center justify-end gap-2 max-[410px]:flex-col">
						<div className="flex h-12 w-auto flex-row justify-end gap-2 rounded-md bg-gray-800 px-3 py-3 text-gray-500">
							<span className="font-semibold text-white">DVOIKA,</span>
							<span className="font-semibold text-white">Белинского 9</span>
						</div>
						<Link
							target="_blank"
							className="text-bold mx-1 inline-flex h-12 w-12 items-center justify-center rounded-md border border-[#3d3d3d] bg-[#232323] text-xl  font-bold uppercase text-[#dedede] transition-colors focus:outline-none focus:ring-1 focus:ring-gray-300 max-[410px]:w-full"
							href="https://yandex.com/maps?whatshere%5Bpoint%5D=30.346599467234753%2C59.93808975294448&whatshere%5Bzoom%5D=18.952005&ll=30.346599467249355%2C59.93808975220233&z=18.952005"
						>
							<LucideMapPin className="max-[410px]:hidden" />
							<span className="min-[410px]:hidden">Я.карты</span>
						</Link>
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
					target="_blank"
					href="https://ticketscloud.com/v1/widgets/common?token=eyJhbGciOiJIUzI1NiIsImlzcyI6InRpY2tldHNjbG91ZC5ydSIsInR5cCI6IkpXVCJ9.eyJwIjoiNjYyMTJiYzlmZjBhZDM0YjNhMDljYzMxIn0.UJi4ilAa-vbX4Op2vZ3FZ3_Jk8TIVbcTrXadlIRJdqM&lang=ru&event=66ba5f7145ed8a080fd2e4d4&s=1"
					className={cn(
						"text-bold inline-flex h-12 w-full items-center justify-center rounded-md bg-gray-50 px-6 text-xl font-bold uppercase text-black transition-colors focus:outline-none focus:ring-1 focus:ring-gray-300",
					)}
				>
					{" "}
					Купить билет{" "}
				</Link>
			</div>
		</div>
	);
}
