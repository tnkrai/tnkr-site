import { Source_Serif_4 } from "next/font/google";
import Footer from "../components/Footer";
import { cn } from "@lib/utils";
import Header from "@components/Header";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div
      className={cn(
        `flex min-h-screen flex-col container`,
        sourceSerif.className
      )}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
