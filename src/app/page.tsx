"use client";

import Nav from "@/components/created/Nav";
import Home from "@/components/created/Home";
import Experience from "@/components/created/Experience";
import Project from "@/components/created/Project";
import Contact from "@/components/created/Contact";
import Footer from "@/components/created/Footer";
import { useTheme } from "next-themes";

export default function App() {
  const { setTheme } = useTheme();
  setTheme("light");
  return (
    <main>
      <Nav />
      <Home />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
