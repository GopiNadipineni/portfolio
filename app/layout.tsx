import './globals.css';

export const metadata = {
  title: 'Gopi Krishna | AI Engineer',
  description: 'Building Intelligent Systems with LLMs, Retrieval & Agentic AI'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}