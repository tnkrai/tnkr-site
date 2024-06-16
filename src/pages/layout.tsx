import { Source_Serif_4 } from "next/font/google";

import { ThemeProvider } from "@contexts/Theme";

import classNames from "classnames";

import Footer from "@components/Footer";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ThemeProvider>
      <div
        className={classNames(
          `mx-auto-px-3 py-6 md:px-6 md:py-10 lg:px-4 xl:py-10`,
          sourceSerif.className,
        )}
      >
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default RootLayout;
