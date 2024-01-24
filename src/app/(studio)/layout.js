import "../globals.css";

export const metadata = {
  title: "Preethi- My Portfolio",
  description: "With great passion, I have been building front-end designs for over three years, and I still find it exhilarating.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
