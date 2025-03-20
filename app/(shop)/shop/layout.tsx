import Navbar from "@/components/shop/navbar";
import Search from "@/components/shop/search";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <Navbar />
      <Search />
      {children}
    </div>
  );
}
