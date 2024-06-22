import Link from "next/link";
import Button from "./ui/Button";

export default function Header() {
  return (
    <header className="fixed w-full border-b bg-black py-3">
      <div className="flex justify-between items-center container">
        <Link href="/">tnkr.ai</Link>

        <Button asChild size="sm" variant="outline">
          <a href="https://discord.gg/fcpeKMKn3E" target="_blank">
            Join Our Discord
          </a>
        </Button>
      </div>
    </header>
  );
}
