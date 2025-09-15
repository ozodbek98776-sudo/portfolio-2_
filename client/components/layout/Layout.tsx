import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const active = location.pathname === to;
  return (
    <NavLink
      to={to}
      className={cn(
        "px-3 py-2 rounded-md text-sm font-medium transition-colors",
        active
          ? "bg-secondary text-foreground"
          : "text-muted-foreground hover:text-foreground hover:bg-accent",
      )}
    >
      {children}
    </NavLink>
  );
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <button type="button" className="inline-flex">
                  <img src="https://cdn.builder.io/api/v1/image/assets%2Fc0e9d684bdae40778fcf772924051ceb%2Fdfd9a7dc3e04451f963eae8e272834b8?format=webp&width=800" alt="Ozodbek Odilov" className="h-8 w-8 rounded-md object-cover" />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] sm:max-w-lg border-0 p-0 bg-transparent shadow-none">
                <DialogHeader>
                  <DialogTitle className="sr-only">Profil rasmi</DialogTitle>
                </DialogHeader>
                <img src="https://cdn.builder.io/api/v1/image/assets%2Fc0e9d684bdae40778fcf772924051ceb%2Fdfd9a7dc3e04451f963eae8e272834b8?format=webp&width=800" alt="Ozodbek Odilov" className="w-full h-auto rounded-md" />
              </DialogContent>
            </Dialog>
            <Link to="/" className="font-semibold tracking-tight">Ozodbek Odilov</Link>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            <NavItem to="/">Bosh sahifa</NavItem>
            <NavItem to="/projects">Loyihalar</NavItem>
            <NavItem to="/about">Men haqimda</NavItem>
            <NavItem to="/contact">Aloqa</NavItem>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" className="hidden sm:inline-flex">
              <a href="#projects">Portfolio</a>
            </Button>
            <Button asChild className="hidden md:inline-flex">
              <Link
                to="/contact"
                onClick={() =>
                  toast({ title: "Telefon raqamim", description: "91 411 80 30" })
                }
              >
                Bog'lanish
              </Link>
            </Button>
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" aria-label="Menu">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-72">
                  <nav className="mt-10 grid gap-2">
                    <NavLink to="/" className="px-3 py-2 rounded-md text-base hover:bg-accent">Bosh sahifa</NavLink>
                    <NavLink to="/projects" className="px-3 py-2 rounded-md text-base hover:bg-accent">Loyihalar</NavLink>
                    <NavLink to="/about" className="px-3 py-2 rounded-md text-base hover:bg-accent">Men haqimda</NavLink>
                    <NavLink to="/contact" className="px-3 py-2 rounded-md text-base hover:bg-accent">Aloqa</NavLink>
                    <a href="tel:+998914118030" className="mt-2 px-3 py-2 rounded-md text-base border hover:bg-accent">Qo'ng'iroq qilish</a>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t bg-background">
        <div className="container py-8 grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <p className="font-semibold">Ozodbek Odilov</p>
          </div>
          <div className="flex items-center gap-3 md:justify-end">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md border hover:bg-accent"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md border hover:bg-accent"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="p-2 rounded-md border hover:bg-accent"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="border-t">
          <div className="container py-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Barcha huquqlar himoyalangan.
          </div>
        </div>
      </footer>
    </div>
  );
}
