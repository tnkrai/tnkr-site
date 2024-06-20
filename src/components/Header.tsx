import Link from "next/link";
import Button from "./ui/Button";

export default function Header() {
  return (
    <header className="fixed w-full flex justify-between items-center py-2.5 border-b bg-black container">
      <Link href="/">tnkr.ai</Link>

      <Button asChild size="sm" variant="outline">
        <a href="https://discord.gg/fcpeKMKn3E" target="_blank">
          Join Our Discord
        </a>
      </Button>
    </header>
  );
}
