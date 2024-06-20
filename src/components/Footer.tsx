export default function Footer() {
  return (
    <div className="mt-10 py-10 border-t">
      <div className="flex gap-6 mb-8">
        <a href="https://discord.gg/fcpeKMKn3E" target="_blank">
          Discord
        </a>
        <a href="https://buildspace.com/#tnkr.ai" target="_blank">
          Buildspace
        </a>
      </div>

      <p>© {new Date().getFullYear()}, All rights reserved</p>
    </div>
  );
}
