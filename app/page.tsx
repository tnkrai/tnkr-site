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
    </main>
  );
}
