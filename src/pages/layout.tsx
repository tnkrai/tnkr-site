import { Source_Serif_4 } from "next/font/google";
import Footer from "../components/Footer";
import { cn } from "@lib/utils";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div
      className={cn(
        `flex min-h-screen flex-col pt-24 container`,
        sourceSerif.className
      )}
    >
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
