import Button from "@components/ui/Button";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="container">
      <div className="mt-10 py-5 border-t">
        <div className="flex justify-between w-full mb-8">
          <a href="https://discord.gg/fcpeKMKn3E" target="_blank">
            Discord
          </a>

          <Button asChild size="sm" variant="outline" disabled>
            <a
              href="https://buildspace.so"
              target="_blank"
              className="inline-flex gap-2 !lowercase"
            >
              <Image
                src="/images/buildspace.png"
                className="rounded-full"
                width={24}
                height={24}
                alt="buildspace"
              />
              buildspace s5
            </a>
          </Button>
        </div>

        <p>© {new Date().getFullYear()}, All rights reserved</p>
      </div>
    </footer>
  );
}
