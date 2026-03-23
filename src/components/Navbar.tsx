import { Link, useLocation } from "react-router-dom";

const countries = [
  { name: "Singapore", path: "/singapore" },
  { name: "Indonesia", path: "/indonesia" },
  { name: "Malaysia", path: "/malaysia" },
  { name: "Bangladesh", path: "/bangladesh" },
];

export default function Navbar() {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://cdn.pegasus.imarticus.org/imarticus12/newIL12.svg"
            alt="Imarticus Learning"
            className="h-8"
          />
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {countries.map((c) => (
            <Link
              key={c.path}
              to={c.path}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                location.pathname === c.path
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {c.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
