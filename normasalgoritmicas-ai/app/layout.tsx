import "./globals.css";

export const metadata = {
  title: "Algorithmic Norms – algorithmicnorms.net",
  description:
    "A theoretical framework on algorithmic normativity in digital justice and electronic procedure.",
  verification: {
    google: "qe217JToxXWB15mUe"
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
