export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-br from-[#131415] via-[#1f1f1f] to-[#3a3b3c] h-screen text-white">
      {children}
    </div>
  );
}
