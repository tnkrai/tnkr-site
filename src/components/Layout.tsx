import { Source_Serif_4 } from "next/font/google";
import Footer from "./Footer";
import { cn } from "@lib/utils";
import Header from "@components/Header";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className={cn(`flex min-h-screen flex-col`, sourceSerif.className)}>
      <Header />
      <div className="container mt-32">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
