import { Source_Serif_4 } from "next/font/google";

import classNames from 'classnames';

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const RootLayout = ({ children }: Readonly<{children: React.ReactNode; }>) => {
  return (
    <>
      <div className={
        classNames('mx-auto-px-3 py-6', sourceSerif.className)}
      >
        {children}
      </div>
    </>
  )
}

export default RootLayout;
