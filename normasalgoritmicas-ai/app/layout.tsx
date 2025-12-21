import "./globals.css";

export const metadata = {
  title: "Normas Algorítmicas — normasalgoritmicas.ai",
  description:
    "Uma teoria jurídica sobre a normatividade algorítmica na justiça digital e no processo eletrônico.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
