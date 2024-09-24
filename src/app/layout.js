
import "./globals.css";



export const metadata = {
  title: "Wedding invitation",
  description: "Weddings Invitation",
  icons: {
    icon: '/favicon.png', // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
