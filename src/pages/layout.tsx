import { Source_Serif_4 } from "next/font/google";

import { ThemeProvider } from "@contexts/Theme";

import classNames from "classnames";

// import Footer from "@componen ts/Footer";
import Footer from "../components/Footer";
import Navbar from "@components/ui/Navbar";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ThemeProvider>
      <div
        className={classNames(
          `mx-auto-px-3 pb-6 md:px-6 md:pb-10 lg:px-4 xl:pb-10`,
          sourceSerif.className,
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default RootLayout;
