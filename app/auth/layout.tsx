export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-blue-500 min-h-screen">
        {children}
    </main>
  );
}
