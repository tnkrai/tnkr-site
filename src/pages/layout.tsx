import Navbar from "@/components/ui/Navbar";
import { Source_Serif_4 } from "next/font/google";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const RootLayout = ({ children }: Readonly<{children: React.ReactNode; }>) => {
  return (
    <>
      <Navbar />
      <div className={sourceSerif.className}>{children}</div>
    </>
  )
}

export default RootLayout;
