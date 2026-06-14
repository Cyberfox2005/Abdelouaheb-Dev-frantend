import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useLanguage } from "../components/LanguageProvider";
import { auth } from "../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "sonner";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function LoginPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false });
  const [submitting, setSubmitting] = useState(false);

  const errors = useMemo(() => {
    const next: { email?: string; password?: string } = {};
    if (!email.trim()) next.email = t("emailRequired");
    else if (!emailRegex.test(email.trim())) next.email = t("emailInvalid");
    if (!password) next.password = t("passwordRequired");
    else if (password.length < 6) next.password = t("passwordMin");
    return next;
  }, [email, password, t]);

  const canSubmit = !errors.email && !errors.password;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ email: true, password: true });
    if (!canSubmit) return;
    
    setSubmitting(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      
      toast.success(t("loginSuccess") || "Logged in successfully!");
      navigate("/profile");
    } catch (error: any) {
      console.error("Login error:", error);
      toast.error(error.message || "Failed to sign in. Please check your credentials.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-10">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-black tracking-widest text-[#F59E0B] hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("backHome")}
          </Link>
        </div>

        <div className="mx-auto max-w-lg">
          <Card className="bg-white/5 border-white/10 text-white overflow-hidden relative">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#F59E0B] to-transparent" />
            <CardHeader>
              <CardTitle className="text-3xl font-black">{t("loginTitle")}</CardTitle>
              <CardDescription className="text-gray-400">{t("loginSubtitle")}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-200 uppercase text-[10px] font-black tracking-widest">
                    {t("email")}
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => setTouched((s) => ({ ...s, email: true }))}
                      placeholder="you@example.com"
                      className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl"
                      autoComplete="email"
                      inputMode="email"
                    />
                  </div>
                  {touched.email && errors.email ? (
                    <p className="text-xs text-red-400 font-bold tracking-tight">{errors.email}</p>
                  ) : null}
                </div>

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
                      onBlur={() =>
                        setTouched((s) => ({ ...s, password: true }))
                      }
                      placeholder="••••••••"
                      className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl"
                      autoComplete="current-password"
                    />
                  </div>
                  {touched.password && errors.password ? (
                    <p className="text-xs text-red-400 font-bold tracking-tight">{errors.password}</p>
                  ) : null}
                </div>

                <Button
                  type="submit"
                  disabled={!canSubmit || submitting}
                  className="w-full bg-[#F59E0B] hover:bg-white text-[#0B0F19] font-black uppercase tracking-widest text-xs h-12 rounded-xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                >
                  {submitting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    t("signIn")
                  )}
                </Button>

                <div className="text-center text-xs text-gray-400 mt-6">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-[#F59E0B] hover:underline font-black">
                    {t("signUp") || "Sign Up"}
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

