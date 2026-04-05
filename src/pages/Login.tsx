import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useLanguage } from "../components/LanguageProvider";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function LoginPage() {
  const { t } = useLanguage();
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
      await new Promise((r) => setTimeout(r, 600));
      // Placeholder: wire real auth later
      alert(t("loginSuccess"));
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
            className="inline-flex items-center gap-2 text-sm font-black tracking-widest text-blue-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("backHome")}
          </Link>
        </div>

        <div className="mx-auto max-w-lg">
          <Card className="bg-white/5 border-white/10 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">{t("loginTitle")}</CardTitle>
              <p className="text-sm text-gray-300">{t("loginSubtitle")}</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-200">
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
                      className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                      autoComplete="email"
                      inputMode="email"
                    />
                  </div>
                  {touched.email && errors.email ? (
                    <p className="text-sm text-red-300">{errors.email}</p>
                  ) : null}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-200">
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
                      className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                      autoComplete="current-password"
                    />
                  </div>
                  {touched.password && errors.password ? (
                    <p className="text-sm text-red-300">{errors.password}</p>
                  ) : null}
                </div>

                <Button
                  type="submit"
                  disabled={!canSubmit || submitting}
                  className="w-full bg-brand-cyan hover:bg-brand-cyan/90 text-white"
                >
                  {submitting ? t("signingIn") : t("signIn")}
                </Button>

                <div className="text-xs text-gray-400">
                  {t("loginHint")}{" "}
                  <Link to="/notifications" className="text-brand-cyan hover:underline">
                    {t("notifications")}
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

