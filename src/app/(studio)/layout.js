import "../globals.css";

export const metadata = {
  title: "My Portfolio - Preethi",
  description: "next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
