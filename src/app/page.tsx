'use client';

import Nav from "@/components/created/Nav";
import Home from "@/components/created/Home";
import { useTheme } from "next-themes";
import Experience from "@/components/created/Experience";

export default function App() {
  const { setTheme } = useTheme();
  setTheme("light");
  return (
    <main>
      <Nav />
      <Home/>
      <Experience/>
    </main>
  );
}
