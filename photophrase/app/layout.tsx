import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PhotoPhrase",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html>
        <body>
          <main> {children}</main>

          <footer></footer>
        </body>
      </html>
    </>
  );
}
