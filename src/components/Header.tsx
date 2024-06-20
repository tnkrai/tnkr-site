import Link from "next/link";
import Button from "./ui/Button";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full py-4 mb-16 border-b">
      <Link href="/">tnkr.ai</Link>

      <Button asChild size="sm" variant="outline">
        <a href="https://discord.gg/fcpeKMKn3E" target="_blank">
          Join Our Discord
        </a>
      </Button>
    </header>
  );
}
