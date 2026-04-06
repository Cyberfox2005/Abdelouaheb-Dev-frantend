import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User, ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useLanguage } from "../components/LanguageProvider";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "sonner";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function SignupPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [touched, setTouched] = useState({ name: false, email: false, password: false, confirm: false });
  const [submitting, setSubmitting] = useState(false);

  const errors = useMemo(() => {
    const next: { name?: string; email?: string; password?: string; confirm?: string } = {};
    if (!name.trim()) next.name = t("nameRequired") || "Name is required";
    if (!email.trim()) next.email = t("emailRequired");
    else if (!emailRegex.test(email.trim())) next.email = t("emailInvalid");
    
    if (!password) next.password = t("passwordRequired");
    else if (password.length < 6) next.password = t("passwordMin");
    
    if (password !== confirmPassword) next.confirm = "Passwords do not match";
    
    return next;
  }, [name, email, password, confirmPassword, t]);

  const canSubmit = !errors.name && !errors.email && !errors.password && !errors.confirm;

  const { login } = useAuth();
  
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, password: true, confirm: true });
    
    if (!canSubmit) return;
    
    setSubmitting(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
      });
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Signup failed");
      }
      
      // Auto login after signup
      login(data.token, data.user);

      toast.success("Account created successfully!");
      navigate("/profile");
    } catch (error: any) {
      console.error("Signup error:", error);
      toast.error(error.message || "Failed to create account");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-10">
        <div className="mb-6">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-sm font-black tracking-widest text-[#F59E0B] hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("backToLogin") || "Back to Login"}
          </Link>
        </div>

        <div className="mx-auto max-w-lg">
          <Card className="bg-white/5 border-white/10 text-white overflow-hidden relative">
             <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 to-amber-200" />
            <CardHeader>
              <CardTitle className="text-3xl font-black">{t("signupTitle") || "Join the Community"}</CardTitle>
              <CardDescription className="text-gray-400">Create your account to start managing your services.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-5">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-200 uppercase text-[10px] font-black tracking-widest">
                    {t("fullName") || "Full Name"}
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onBlur={() => setTouched((s) => ({ ...s, name: true }))}
                      placeholder="John Doe"
                      className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl"
                    />
                  </div>
                  {touched.name && errors.name && (
                    <p className="text-xs text-red-400 font-bold tracking-tight">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-200 uppercase text-[10px] font-black tracking-widest">
                    {t("email")}
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => setTouched((s) => ({ ...s, email: true }))}
                      placeholder="you@example.com"
                      className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl"
                    />
                  </div>
                  {touched.email && errors.email && (
                    <p className="text-xs text-red-400 font-bold tracking-tight">{errors.email}</p>
                  )}
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-200 uppercase text-[10px] font-black tracking-widest">
                    {t("password")}
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onBlur={() => setTouched((s) => ({ ...s, password: true }))}
                      placeholder="••••••••"
                      className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl"
                    />
                  </div>
                  {touched.password && errors.password && (
                    <p className="text-xs text-red-400 font-bold tracking-tight">{errors.password}</p>
                  )}
                </div>

                {/* Confirm Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-gray-200 uppercase text-[10px] font-black tracking-widest">
                    {t("confirmPassword") || "Confirm Password"}
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      onBlur={() => setTouched((s) => ({ ...s, confirm: true }))}
                      placeholder="••••••••"
                      className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl"
                    />
                  </div>
                  {touched.confirm && errors.confirm && (
                    <p className="text-xs text-red-400 font-bold tracking-tight">{errors.confirm}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={!canSubmit || submitting}
                  className="w-full bg-amber-500 hover:bg-white text-[#0B0F19] font-black uppercase tracking-widest text-xs h-12 rounded-xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                >
                  {submitting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    t("createAccount") || "Create Account"
                  )}
                </Button>

                <div className="text-center text-xs text-gray-400 mt-6">
                  Already have an account?{" "}
                  <Link to="/login" className="text-amber-500 hover:underline font-black">
                    {t("signIn") || "Sign In"}
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
