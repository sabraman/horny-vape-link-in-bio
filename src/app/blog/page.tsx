import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";
async function getData() {
    const res = await fetch('https://feeds.tildaapi.com/api/getfeed/?feeduid=106696611631&slice=1&sort%5Bdate%5D=desc&filters%5Bdate%5D=&getparts=true')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

interface Post {
    uid: string
    title: string
    descr: string
    image: string
    imagealt: string
    published: string
    url: string
}

export default async function Page() {
    const data = await getData()
    return (
        data.posts.map((post: Post) => (
            <Link key={post.uid} href={post.url}>
                <div className="mt-10 max-w-md w-full bg-gray-800 rounded-lg shadow-lg overflow-hidden dark:bg-gray-800">
                    <Image
                        alt={post.imagealt}
                        className="w-full object-cover"
                        width={672}
                        height={428}
                        src={post.image}
                        style={{
                            aspectRatio: "672/428",
                            objectFit: "cover",
                        }}
                    />
                    <div className="p-6">
                        <p className="text-gray-400 dark:text-gray-400 text-sm mb-2">
                            {new Intl.DateTimeFormat('ru-RU', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            }).format(new Date(post.published))}
                        </p>
                        <h2 className="text-2xl font-bold mb-4 text-white">{post.title}</h2>
                        <p className="text-gray-400 dark:text-gray-300 leading-relaxed">
                            {parse(post.descr)}
                        </p>
                    </div>
                </div>
            </Link>
        ))
    )
}