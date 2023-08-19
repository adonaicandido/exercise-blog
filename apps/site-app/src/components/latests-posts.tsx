import Image from "next/image"
import Link from "next/link"

import { Avatar, AvatarImage, Button } from "@unknown-co/react-ui"

import { getLatestPosts } from "~/utilities/api"

export async function LatestPosts() {
  const posts = await getLatestPosts()

  return (
    <section className="flex flex-col">
      <div className="px-16 xl:container md:px-32 lg:px-48 xl:mx-auto xl:px-64">
        <h2 className="mb-4 text-14 font-semibold text-purple-700">Our blog</h2>
        <h3 className="mb-8 text-28 font-semibold leading-28 text-slate-900">Latest blog posts</h3>
        <p className="font-normal text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, vitae cumque?
        </p>
      </div>

      <div className="my-32 flex snap-x snap-mandatory scroll-px-16 gap-16 overflow-x-auto px-16 xl:container md:px-32 lg:px-48 xl:mx-auto xl:px-64">
        {posts.map(
          ({ slug, thumbnailUrl, title, category, excerpt, author, publishedAt }, index) => (
            <div
              className="clear-both flex flex-1 snap-start flex-col max-md:w-11/12 md:min-w-0"
              key={index}
            >
              <div className="relative h-[10rem] overflow-hidden rounded-md md:h-[8rem] lg:h-[10.5rem]">
                <Image className="object-cover" fill src={thumbnailUrl} alt={""} />
              </div>

              <p className="mt-8 text-14 font-semibold text-purple-700">{category.name}</p>

              <Link className="mb-8 flex items-center justify-between" href={"/blog/" + slug}>
                <h4 className="truncate text-24 font-semibold text-slate-900">{title}</h4>
                <ArrowUpRight className="h-24 w-24 shrink-0" />
              </Link>

              <p className="mb-16 text-16 leading-20 text-slate-600">{excerpt}</p>

              <div className="mt-auto text-14 leading-20">
                <Avatar className="float-left mr-8 h-40 w-40">
                  <AvatarImage src={author?.pictureUrl} alt={author?.name} />
                </Avatar>

                <p className="font-semibold text-slate-900">{author?.name}</p>
                <p className="">
                  {new Date(publishedAt).toLocaleDateString("en-US", { dateStyle: "medium" })}
                </p>
              </div>
            </div>
          ),
        )}
      </div>

      <Button asChild>
        <Link className="mx-16 md:hidden" href="/blog">
          View all posts
        </Link>
      </Button>
    </section>
  )
}

const ArrowUpRight = (props: React.ComponentPropsWithoutRef<"svg">) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <rect width="256" height="256" fill="none" />
    <line
      x1="64"
      y1="192"
      x2="192"
      y2="64"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="88 64 192 64 192 168"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
  </svg>
)
