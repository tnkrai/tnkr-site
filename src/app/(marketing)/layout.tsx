import Header from "./components/Header";
import Footer from "./components/Footer";

export default function MarketingSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="container mt-32">{children}</div>
      <Footer />
    </div>
  );
}
