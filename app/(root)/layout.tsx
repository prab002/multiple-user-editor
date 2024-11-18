import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-br from-[#131415] via-[#1f1f1f] to-[#3a3b3c] h-full text-white">
      <SidebarProvider>
        <main>
          <SidebarTrigger />
          {children}
          <AppSidebar />
        </main>
      </SidebarProvider>
    </div>
  );
}
