"use client";

import { useState } from "react";
import Home from "./pages/Home";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <main className="h-[calc(100vh-4rem)]">{renderPage()}</main>
    </div>
  );
}
