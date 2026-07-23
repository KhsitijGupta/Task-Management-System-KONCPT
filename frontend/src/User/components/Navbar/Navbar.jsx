import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-lg px-6 py-3">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-tight text-slate-900"
          >
            Task<span className="text-blue-600">Flow</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-slate-600 hover:text-blue-600 transition"
            >
              Features
            </a>

            <a
              href="#about"
              className="text-slate-600 hover:text-blue-600 transition"
            >
              About
            </a>

            <a
              href="#stats"
              className="text-slate-600 hover:text-blue-600 transition"
            >
              Statistics
            </a>

            <a
              href="#contact"
              className="text-slate-600 hover:text-blue-600 transition"
            >
              Contact
            </a>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="rounded-xl border border-blue-600 px-5 py-2 font-medium text-blue-600 transition hover:bg-blue-50"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="rounded-xl bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile */}
          <button className="md:hidden">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
