import TopMenu from "@/components/ui/top-menu/topMenu";

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <TopMenu />

      <div className="px-0 sm:px-10 mx-auto">{children}</div>
    </main>
  );
}
