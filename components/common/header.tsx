import { FileText } from "lucide-react";
import { Button } from "../ui/button";
import NavLink from "./nav-link";

export default function Header() {
  const isLoggedIn = false;

  return (
    <nav className="container flex flex-wrap items-center justify-between py-4 px-4 lg:px-8 mx-auto">
      {/* Logo & Brand */}
      <div className="flex items-center">
        <NavLink href="/" className="flex items-center gap-2 shrink-0">
          <FileText className="w-6 h-6 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out" />
          <span className="font-extrabold text-lg lg:text-xl text-gray-900">
            Summo
          </span>
        </NavLink>
      </div>

      {/* Center Links */}
      <div className="flex gap-4 lg:gap-10 items-center">
        <NavLink href="/#pricing">Pricing</NavLink>
        {isLoggedIn && <NavLink href="/dashboard">Your Summaries</NavLink>}
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-3">
        {isLoggedIn ? (
          <>
            <NavLink href="/upload">Upload a PDF</NavLink>
            <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded-full font-semibold">
              Pro
            </span>
            <Button variant="secondary">Logout</Button>
          </>
        ) : (
          <NavLink href="/sign-in">
            <Button size="sm" className="px-4 py-2">
              Sign In
            </Button>
          </NavLink>
        )}
      </div>
    </nav>
  );
}
