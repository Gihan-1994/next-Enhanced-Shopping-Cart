import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/Header";
import {ProductProvider} from "@/contexts/ProductContext";


export const metadata: Metadata = {
    title: "Simple Cart App",
    description: "Created with next js",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;

}) {
    return (
        <html lang="en">
        <body

        >
        <ProductProvider>
            <div>
                <Header/>
            </div>

            {children}
        </ProductProvider>
        </body>
        </html>
    );
}
