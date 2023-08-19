import { Button, Input } from "@unknown-co/react-ui"

export function Newsletter() {
  return (
    <section className="my-48 flex flex-col gap-32 px-16 xl:container md:px-32 lg:px-48 xl:mx-auto xl:px-64">
      <form className="rounded-lg border border-slate-200 bg-slate-50 p-16 text-center">
        <h4 className="mb-8 text-20 font-semibold">Join 2,000+ subscribers</h4>
        <p className="text-16 font-normal text-slate-600">
          Stay in the loop with everything you need to know.
        </p>

        <Input className="mx-auto my-16 max-w-320 bg-white" />

        <Button type="button">Subscribe</Button>
      </form>
    </section>
  )
}
