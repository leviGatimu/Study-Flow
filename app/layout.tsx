import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AppShell } from "@/components/AppShell";

import { getUserId } from "@/lib/auth";
import { syncStreak } from "@/lib/actions";

export const metadata: Metadata = {
  title: "Study Flow | Elite Academic Workstation",
  description: "A clean, private study and assignment tracker for top students.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userId = await getUserId();
  const userProgress = userId ? await syncStreak() : null;

  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className="flex h-screen w-screen overflow-hidden bg-background font-sans text-foreground antialiased relative"
        style={{
          ["--font-sans" as string]: '"Nunito", "Avenir Next", "Segoe UI", sans-serif',
          ["--font-heading" as string]: '"Outfit", "Segoe UI", sans-serif',
        }}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppShell userProgress={userProgress}>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
