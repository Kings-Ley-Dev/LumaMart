import { Toaster } from "react-hot-toast"; 
import StoreProvider from "@/app/StoreProvider";
import "./globals.css";

export const metadata = {
  title: "LumaMart. Modern shopping, made simple",
  description: "LumaMart is a modern multi-store shopping experience for products, orders and independent sellers.",
};

export default function RootLayout({ children }) {
  return <html lang="en"><body><StoreProvider><Toaster position="top-right" toastOptions={{duration:2800}} />{children}</StoreProvider></body></html>
}
