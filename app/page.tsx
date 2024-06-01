import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen gap-16 flex-col p-24">
      <h1>
        Tnkr.ai is a tool for exploring the source knowledge of any technology.
        We believe that every piece of technology, old or new, has a unique
        story within it. We want to help the next generation of tinkerers
        uncover these stories so new ones can be told.
      </h1>

      <div>
        <Button>Join Our Waitlist</Button>
      </div>

      <div className="flex flex-col gap-y-4">
        <div>
          <h1 className="mb-2">
            Open Source Robots - <span className="text-green-500">Idea</span>
          </h1>
          <p>
            As soon as we set off to build tinkr, our first instinct was to find
            a group of people who could benefit “the most” from having a tool
            like Tinkr. To ensure we were looking in the right places, we
            established 3 conditions for a given niche to be considered an ideal
            segment for us to plant our roots.
          </p>
        </div>

        <ol className="list-decimal">
          <li>
            There had to be a considerable number of individuals / entities,
            willing to share the knowledge within technology they had built (
            open source ).
          </li>
          <li>
            There had to be a considerable number of individuals / entities who
            are highly curious about this technology and want to tinker with it,
            tear it down and create new things from it.
          </li>
          <li>
            Problems and inadequacies in the current process of sharing and
            tinkering with the open source knowledge.
          </li>
        </ol>
      </div>
    </main>
  );
}
