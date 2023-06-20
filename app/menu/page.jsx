"use client";
import React from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useState } from "react";
function Menu() {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <>
      <title>Juno | Menu</title>
      <main className="px-4 lg:px-20 pt-12">
        <h1 className="text-juno-title text-5xl font-juno">Menu</h1>
      </main>
    </>
  );
}

export default Menu;
