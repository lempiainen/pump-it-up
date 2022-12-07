import "./globals.css";
import {Raleway} from "@next/font/google";

interface Props {
  children: React.ReactNode;
}

const raleway = Raleway({
  weight:['100', '300', '400', '600', '900'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-raleway',
});

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={`${raleway.variable} font-sans`}>
      <body className="bg-app-background bg-cover">
        <div className="flex flex-col justify-center items-center h-screen w-screen">
          <div className="sm:max-w-md sm:h-[72.7%] h-screen bg-base-100 sm:rounded-3xl">
            <main className="h-full">
             {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
