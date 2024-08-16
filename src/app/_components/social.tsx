import Link from "next/link";

export default function Social() {
	return (
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
					Youtubeo
				</Link>
				<Link
					className="inline-flex h-auto  items-center justify-center rounded-lg bg-pink-500 px-6  py-3 text-xl font-bold uppercase text-gray-50 transition-colors hover:bg-pink-500/90 focus:outline-none focus:ring-1 focus:ring-gray-300"
					href="https://instagram.com/horny_inst/"
				>
					Inst
				</Link>
			</div>
		</div>
	);
}
