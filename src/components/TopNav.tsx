import { Link, NavLink } from "react-router-dom";
import { Bell, CircleHelp, LogIn, Menu, Settings, User } from "lucide-react";
import logoImage from "../assets/d3fb022417f356c7ca48d8ab4a07b126226cc9b4.png";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useLanguage } from "./LanguageProvider";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

function NavItem({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
          "hover:bg-white/10 dark:hover:bg-white/10",
          isActive
            ? "bg-white/10 text-white"
            : "text-gray-200/90 hover:text-white",
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
}

function NavLinks() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-1">
      <NavItem to="/">{t("home")}</NavItem>
      <NavItem to="/services">{t("services")}</NavItem>
      <NavItem to="/notifications">
        <Bell className="h-4 w-4" />
        {t("notifications")}
      </NavItem>
      <NavItem to="/login">
        <LogIn className="h-4 w-4" />
        {t("login")}
      </NavItem>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="justify-start rounded-full px-4 py-2 text-sm font-semibold text-gray-200/90 hover:bg-white/10 hover:text-white md:h-auto"
          >
            {t("more")}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-48">
          <DropdownMenuItem asChild>
            <Link to="/profile" className="flex w-full items-center gap-2">
              <User className="h-4 w-4" />
              {t("profile")}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/settings" className="flex w-full items-center gap-2">
              <Settings className="h-4 w-4" />
              {t("settings")}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link to="/help" className="flex w-full items-center gap-2">
              <CircleHelp className="h-4 w-4" />
              {t("help")}
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export function TopNav() {
  const { t } = useLanguage();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#050812]/70 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <Link to="/" className="inline-flex items-center gap-3">
          <img src={logoImage} alt={t("name")} className="h-9 w-9" />
          <span className="hidden text-sm font-black tracking-wide text-white sm:inline">
            {t("name")}
          </span>
        </Link>

        <nav className="hidden md:block">
          <NavLinks />
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#050812] text-white">
              <div className="mt-10">
                <div className="mb-4 text-xs font-black uppercase tracking-widest text-gray-400">
                  {t("menu")}
                </div>
                <NavLinks />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
