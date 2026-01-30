import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Sobre", href: "/about" },
    { name: "Jardim", href: "/garden" },
    { name: "Projetos", href: "/projects" },
    { name: "Contato", href: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
      {/* Navigation */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
          isScrolled
            ? "py-4 bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm"
            : "py-6 bg-transparent"
        )}
      >
        <div className="container flex items-center justify-between">
          <Link href="/">
            <a className="font-serif text-2xl font-medium tracking-tight hover:opacity-80 transition-opacity">
              Lilium<span className="text-primary">.</span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative group",
                    location === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full",
                      location === link.href ? "w-full" : ""
                    )}
                  />
                </a>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden flex flex-col items-center justify-center gap-8 animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className="font-serif text-3xl font-medium hover:text-primary transition-colors">
                {link.name}
              </a>
            </Link>
          ))}
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-24 md:pt-28 pb-16 px-4 md:px-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border/40 bg-background/50">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-xl font-medium mb-2">Lilium Pink</h3>
            <p className="text-muted-foreground text-sm">
              Creative Technology Portfolio &copy; {new Date().getFullYear()}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
