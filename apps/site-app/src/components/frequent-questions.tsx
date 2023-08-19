import Link from "next/link"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@unknown-co/react-ui"

export async function FrequentQuestions() {
  const questions = [
    {
      title: "What is Unknown Co.?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      title: "How do I get started?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
  ]

  return (
    <section className="my-48 flex flex-col gap-32 px-16 xl:container md:px-32 lg:px-48 xl:mx-auto xl:px-64">
      <div className="space-y-16 text-center">
        <h2 className="text-28 font-semibold leading-32">Frequently asked questions</h2>
        <p className="text-18 font-normal text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <Accordion collapsible type="single">
        {questions.map(({ title, answer }, index) => (
          <AccordionItem key={index} value={`question-${index + 1}`}>
            <AccordionTrigger>{title}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="rounded-lg border border-slate-200 bg-slate-50 p-16 text-center">
        <h4 className="mb-8 text-20 font-semibold">Still have questions?</h4>
        <p className="mx-auto text-16 font-normal text-slate-600 md:max-w-320">
          Can't find the answer you're looking for? Please get in touch with our team!
        </p>

        <Button asChild>
          <Link className="mt-24" href="/">
            Get in touch
          </Link>
        </Button>
      </div>
    </section>
  )
}
