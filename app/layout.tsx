import type { Metadata } from "next";
import { Outfit, Nunito } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { ReminderManager } from "@/components/ReminderManager";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Study Tracker",
  description: "A clean, private study and assignment tracker.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex h-screen w-screen overflow-hidden bg-background font-sans text-foreground antialiased relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReminderManager />
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-4 md:p-8 z-10 relative">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
