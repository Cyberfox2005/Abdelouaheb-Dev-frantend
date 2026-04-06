import { Link, NavLink } from "react-router-dom";
import { Bell, CircleHelp, LogIn, Menu, Settings, User, Sparkles, LogOut, ShoppingCart } from "lucide-react";
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
import { useServiceManager } from "./ServiceContext";
import { useAuth } from "../contexts/AuthContext";

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
  const { user, logout } = useAuth();
  const { selectedServices } = useServiceManager();

  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-1">
      <NavItem to="/">{t("home")}</NavItem>
      <NavItem to="/services">{t("services")}</NavItem>
      <NavItem to="/notifications">
        <Bell className="h-4 w-4" />
        {t("notifications")}
      </NavItem>
      
      <NavItem to="/cart">
        <div className="relative">
          <ShoppingCart className="h-4 w-4" />
          {selectedServices.length > 0 && (
            <span className="absolute -top-2 -right-3 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-[9px] font-black text-[#0B0F19] shadow-[0_0_10px_rgba(245,158,11,0.5)] animate-pulse">
              {selectedServices.length}
            </span>
          )}
        </div>
      </NavItem>

      {!user ? (
        <NavItem to="/login">
          <LogIn className="h-4 w-4" />
          {t("login")}
        </NavItem>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="justify-start rounded-full px-4 py-2 text-sm font-semibold text-gray-200/90 hover:bg-white/10 hover:text-white md:h-auto gap-2"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/30">
                  <User className="h-3 w-3 text-amber-500" />
                </div>
                <span className="max-w-[100px] truncate">
                  {user.name || user.email?.split('@')[0]}
                </span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-48 bg-[#0B0F19] border-white/10 text-white">
            <DropdownMenuItem asChild>
              <Link to="/profile" className="flex w-full items-center justify-between gap-2 cursor-pointer hover:bg-white/5 focus:bg-white/5 transition-colors">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {t("profile")}
                </div>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/settings" className="flex w-full items-center gap-2 cursor-pointer hover:bg-white/5 focus:bg-white/5 transition-colors">
                <Settings className="h-4 w-4" />
                {t("settings")}
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-white/10" />
            <DropdownMenuItem 
              onClick={() => logout()}
              className="flex w-full items-center gap-2 cursor-pointer text-red-400 hover:bg-red-500/10 focus:bg-red-500/10 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              {t("logout")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}

      {/* More dropdown for unauthenticated or extra links */}
      {!user && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="justify-start rounded-full px-4 py-2 text-sm font-semibold text-gray-200/90 hover:bg-white/10 hover:text-white md:h-auto gap-2"
            >
              {t("more")}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-48 bg-[#0B0F19] border-white/10 text-white">
            <DropdownMenuItem asChild>
              <Link to="/help" className="flex w-full items-center gap-2 cursor-pointer hover:bg-white/5 focus:bg-white/5 transition-colors">
                <CircleHelp className="h-4 w-4" />
                {t("help")}
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
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
            <SheetContent side="right" className="bg-[#050812] text-white border-white/10">
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
