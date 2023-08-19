import { Button } from "@unknown-co/react-ui"
import { FrequentQuestions } from "~/components/frequent-questions"
import { LatestPosts } from "~/components/latests-posts"
import { Newsletter } from "~/components/newsletter"

export const dynamic = 'force-dynamic'

export default function HomePage() {
  return (
    <>
      <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-600 to-purple-100 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="sm:text-6xl text-32 font-bold tracking-tight text-gray-900">
                Lorem, ipsum dolor adipisicing elit.
              </h1>
              <p className="text-lg leading-8 mt-6 text-gray-600">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button>Get started</Button>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-purple-600 to-purple-100 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
          </div>
        </div>
      </div>

      <FrequentQuestions />
      <LatestPosts />
      <Newsletter />
    </>
  )
}
