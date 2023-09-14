'use client';

import Nav from "@/components/created/Nav";
import Home from "@/components/created/Home";
import { useTheme } from "next-themes";

export default function App() {
  const { setTheme } = useTheme();
  setTheme("light");
  return (
    <main>
      <Nav />
      <Home/>
    </main>
  );
}
