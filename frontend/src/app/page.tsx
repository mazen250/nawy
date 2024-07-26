"use client";
// import { Button, message } from "antd";
// import Image from "next/image";
import Navbar from "./component/Navbar";
import Apartments from "./sections/Apartments";
import Hero from "./sections/Hero";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Apartments title="Compounds In Your Area" subtitle="" />
    </main>
  );
}
