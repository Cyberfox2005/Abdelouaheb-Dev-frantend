import { Link } from "react-router-dom";
import { ArrowLeft, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { useLanguage } from "../components/LanguageProvider";
import { Switch } from "../components/ui/switch";
import { Label } from "../components/ui/label";

export function SettingsPage() {
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
                <Settings className="h-5 w-5 text-purple-300" />
              </div>
              <div>
                <CardTitle className="text-2xl">{t("settingsTitle")}</CardTitle>
                <p className="text-sm text-gray-300">{t("placeholderPage")}</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="font-bold">{t("settingsDemoToggle")}</div>
                    <div className="text-sm text-gray-300">{t("settingsDemoToggleHint")}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Label className="text-xs text-gray-400">{t("demo")}</Label>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-gray-300">
                {t("settingsHint")}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

