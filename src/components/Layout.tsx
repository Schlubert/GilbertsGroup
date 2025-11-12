import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Mail, Phone, Linkedin } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Companies", path: "/companies" },
    { name: "Our Philosophy", path: "/philosophy" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}<Link to="/" className="flex items-center space-x-3">
              <img
                src="/logo-gilberts-white.png"
                alt="The Gilbert’s Group Logo"
                className="h-10 w-auto"
              />
              <div className="hidden sm:block">
                <div className="text-xl font-bold tracking-tight">
                  The Gilbert’s Group
                </div>
                <div className="text-xs text-emerald-400 font-medium">
                  Excellence in Every Venture
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-semibold transition-colors duration-300 ${
                      isActive
                        ? "text-emerald-400 border-b-2 border-emerald-400"
                        : "text-slate-300 hover:text-emerald-400"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 animate-fadeIn">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-base font-semibold transition-colors duration-200 ${
                      isActive
                        ? "bg-emerald-600 text-white"
                        : "text-slate-300 hover:bg-slate-800"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src="/logo-gilberts-white.png"
                    alt="The Gilbert’s Group Logo"
                    className="h-10 w-auto"
                  />
                <div className="text-lg font-bold">The Gilbert’s Group</div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                A family of companies dedicated to excellence in food,
                hospitality, and professional development.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-emerald-400">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-emerald-400">
                Contact
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-2 text-slate-400">
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:info@gilbertsgroup.nz"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    info@gilbertsgroup.nz
                  </a>
                </li>
                <li className="flex items-center space-x-2 text-slate-400">
                  <Phone className="w-4 h-4" />
                  <a
                    href="tel:0274859001"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    027 485 9001
                  </a>
                </li>
                <li className="flex items-center space-x-2 text-slate-400">
                  <Linkedin className="w-4 h-4" />
                  <a
                    href="https://linkedin.com/in/kevin-gilbert-nz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} The Gilbert’s Group. All rights
              reserved.
            </p>
            <p className="mt-2">Dunedin, New Zealand</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
