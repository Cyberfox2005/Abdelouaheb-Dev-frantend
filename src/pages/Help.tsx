import { Link } from "react-router-dom";
import { ArrowLeft, CircleHelp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { useLanguage } from "../components/LanguageProvider";
import { Button } from "../components/ui/button";

export function HelpPage() {
  const { t } = useLanguage();

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

        <div className="mx-auto max-w-3xl">
          <Card className="bg-white/5 border-white/10 text-white">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <CircleHelp className="h-5 w-5 text-green-300" />
              </div>
              <div>
                <CardTitle className="text-2xl">{t("helpTitle")}</CardTitle>
                <p className="text-sm text-gray-300">{t("placeholderPage")}</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-gray-300">
                {t("helpHint")}
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button asChild className="bg-brand-cyan hover:bg-brand-cyan/90 text-white">
                  <a href="mailto:ben689533@gmail.com">{t("contactSupport")}</a>
                </Button>
                <Button asChild variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10">
                  <Link to="/notifications">{t("viewNotifications")}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

