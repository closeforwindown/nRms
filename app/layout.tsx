import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { UserProvider } from "@/context/UserContext"



export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const poppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Non RM Management System",
  description:
    "Non RM Management System (nRMS) is a comprehensive platform designed to streamline the management of non-RM assets and resources.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppinsFont.className} antialiased`}>
        <UserProvider>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar />
        {children}
        </ThemeProvider>
        </UserProvider>
        </body>
    </html>
  );
}
