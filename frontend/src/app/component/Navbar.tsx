"use client";
import React, { useState } from "react";
import { FaHeart, FaBars } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { Drawer } from "antd";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Search", href: "#" },
    { name: "Sell", href: "#" },
    { name: "Blog", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Nawy Tour", href: "#" },
    { name: "Career", href: "#" },
  ];

  return (
    <div className="bg-white w-full">
      <div className="h-[70px] flex items-center justify-between px-4 mx-[5%]">
        <Link href="/">
          <Image
            src={"https://www.nawy.com/assets/icons/common/nawy.svg"}
            alt="Nawy Logo"
            width={100}
            height={40}
          />
        </Link>
        <nav className="hidden md:block ml-10 text-secondary">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-primary font-semibold"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center space-x-4 text-secondary">
          <Link href="#" className="hover:text-primary hidden md:block">
            <FaHeart size={20} />
          </Link>
          <Link href="#" className="hover:text-primary hidden md:block">
            <FiUser size={20} />
          </Link>
          <Link href="#" className="hover:text-primary hidden md:block">
            العربية
          </Link>
          <button className="md:hidden hover:text-primary" onClick={showDrawer}>
            <FaBars size={20} />
          </button>
        </div>
        <Drawer
          title="Nawy"
          placement="right"
          onClose={closeDrawer}
          open={drawerVisible}
        >
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-primary">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </Drawer>
      </div>
    </div>
  );
}

export default Navbar;
