import '@/app/globals.css'  // 或 '@/styles/globals.css' 取决于您的文件位置
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
    <html>
      <body>{children}</body>
    </html>
  );
}
