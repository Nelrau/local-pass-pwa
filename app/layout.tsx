import "./globals.css";
import { BottomNav } from "@/components/bottom-nav";

export const metadata = {
  title: "Local Pass",
  description: "PWA de comercio hiper-local com descontos por CEP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning>
        <div className="page-content">{children}</div>
        <BottomNav />
      </body>
    </html>
  );
}
