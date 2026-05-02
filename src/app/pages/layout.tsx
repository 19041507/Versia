import type { Metadata } from 'next';
import '../src/styles/index.css';

export const metadata: Metadata = {
  title: 'Versia — Plataforma de Treinamento Corporativo',
  description:
    'Plataforma premium de treinamento corporativo com experiência imersiva, ' +
    'certificados digitais e assinatura Premium por R$ 24,90/mês.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
