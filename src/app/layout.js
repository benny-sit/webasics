import { Inter } from "next/font/google";
import "./globals.css";
import ogImage from "./opengraph-image.png";

const inter = Inter({ subsets: ["latin"] });

//👇 Import Open Sans font
import { Open_Sans, Oswald } from "next/font/google";

//👇 Configure our font object
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata = {
  title: "Webasics",
  description:
    "Webasics academy - basics Web and Ai courses for youth and children",
  keywords: [
    "Web and Ai Courses",
    "Web and Ai Course for Children",
    "Web basics courses",
    "learn web and ai",
  ],
  metadataBase: new URL(process.env.DEPLOY_URL),
  openGraph: {
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
  twitter: {
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${oswald.variable}`}>
        {children}
      </body>
    </html>
  );
}
