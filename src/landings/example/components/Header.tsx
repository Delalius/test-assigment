import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="px-6 py-4 bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-gray-900 font-semibold">
          OlehHrytsyk
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          <a href="#advantages" className="text-gray-600 hover:text-gray-900 transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
            Testimonials
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
            About
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
            Contact
          </a>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Sign Up
          </button>

          {/* Burger */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(prev => !prev)}
          >
            {open ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4 px-6 py-4 bg-white border-t border-gray-200">
          <a
            href="#advantages"
            onClick={() => setOpen(false)}
            className="text-gray-700 hover:text-gray-900"
          >
            Features
          </a>
          <a
            href="#testimonials"
            onClick={() => setOpen(false)}
            className="text-gray-700 hover:text-gray-900"
          >
            Testimonials
          </a>
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="text-gray-700 hover:text-gray-900"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-gray-700 hover:text-gray-900"
          >
            Contact
          </a>

          <button className="w-full mt-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Sign Up
          </button>
        </nav>
      </div>
    </header>
  );
}
