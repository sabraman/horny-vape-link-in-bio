import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Logo } from "./_components/logo";
import { TopNav } from "./_components/topnav";
import Script from "next/script";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "HORNY PLACE",
	description: "HORNY PLACE",
	metadataBase: new URL("https://horny.place/"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		url: "https://horny.place/",
		title: "HORNY PLACE",
		description: "HORNY PLACE",
		siteName: "HORNY PLACE",
		images: "./og-image.png",
	},
	icons: {
		icon: "./favicons/favicon.svg",
		apple: "./favicons/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<head>
				<meta name="yandex-verification" content="eaf2e22c2dc6f579" />
			</head>
			<body className={montserrat.className}>
				{children}
				<Script src="https://ticketscloud.com/static/scripts/widget/tcwidget.js" />
			</body>
		</html>
	);
}
