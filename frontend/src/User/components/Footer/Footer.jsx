import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="relative">
      {/* Top Wave */}
      <div className="overflow-hidden leading-none">
        <svg
          className="block w-full h-24 bg-gradient-to-tr from-blue-600 to-cyan-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#0f172a"
            d="M0,192L80,170.7C160,149,320,107,480,106.7C640,107,800,149,960,176C1120,203,1280,213,1360,208L1440,203L1440,320L0,320Z"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <h2 className="text-3xl font-bold">
                Task<span className="text-blue-400">Flow</span>
              </h2>

              <p className="mt-1 text-slate-400 leading-7">
                A modern task management platform to organize your work,
                collaborate with your team, and improve productivity.
              </p>

              <div className="flex gap-4 mt-5">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 transition hover:bg-blue-600"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 transition hover:bg-blue-600"
                >
                  <FaLinkedin size={20} />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 transition hover:bg-blue-600"
                >
                  <FaTwitter size={20} />
                </a>

                <a
                  href="mailto:support@taskflow.com"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 transition hover:bg-blue-600"
                >
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="mb-2 text-xl font-semibold">Navigation</h3>

              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#features" className="hover:text-white transition">
                    Features
                  </a>
                </li>

                <li>
                  <a href="#about" className="hover:text-white transition">
                    About
                  </a>
                </li>

                <li>
                  <a href="#stats" className="hover:text-white transition">
                    Statistics
                  </a>
                </li>

                <li>
                  <a href="#contact" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Account */}
            <div>
              <h3 className="mb-2 text-xl font-semibold">Account</h3>

              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link to="/login" className="hover:text-white transition">
                    Login
                  </Link>
                </li>

                <li>
                  <Link to="/register" className="hover:text-white transition">
                    Register
                  </Link>
                </li>

                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-2 text-xl font-semibold">Contact</h3>

              <div className="space-y-1 text-slate-400">
                <p>📍 Ahmedabad, Gujarat, India</p>

                <p>📧 support@taskflow.com</p>

                <p>📞 +91 98765 43210</p>

                <p className="leading-7">
                  Have questions? Reach out anytime and we'll get back to you
                  within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-4 border-t border-slate-800 pt-8 flex flex-col items-center justify-between gap-4 text-center md:flex-row">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} TaskFlow. All Rights Reserved.
            </p>

            <div className="flex gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-white transition">
                Privacy
              </a>

              <a href="#" className="hover:text-white transition">
                Terms
              </a>

             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
