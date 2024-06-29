import Header from "./components/Header";
import Footer from "./components/Footer";
import { Source_Serif_4 } from "next/font/google";
import { cn } from "@lib/utils";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function MarketingSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex min-h-screen flex-col", sourceSerif.className)}>
      <Header />
      <div className="container mt-32">{children}</div>
      <Footer />
    </div>
  );
}
