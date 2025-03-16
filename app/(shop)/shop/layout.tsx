import Navbar from "@/components/shop/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <Navbar />
      {children}
    </div>
  );
}
