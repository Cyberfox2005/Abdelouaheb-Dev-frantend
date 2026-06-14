import { Link } from "react-router-dom";
import { ArrowLeft, Bell, CheckCircle2, ShieldAlert } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { useLanguage } from "../components/LanguageProvider";

type NotificationItem = {
  id: string;
  title: string;
  description: string;
  type: "info" | "success" | "security";
  time: string;
  unread?: boolean;
};

const demoItems: NotificationItem[] = [
  {
    id: "n1",
    title: "Welcome!",
    description: "Your account setup is almost complete.",
    type: "success",
    time: "2m",
    unread: true,
  },
  {
    id: "n2",
    title: "New message",
    description: "A visitor contacted you from the portfolio form.",
    type: "info",
    time: "1h",
  },
  {
    id: "n3",
    title: "Security notice",
    description: "New sign-in detected from a new device.",
    type: "security",
    time: "Yesterday",
  },
];

function TypeIcon({ type }: { type: NotificationItem["type"] }) {
  if (type === "success") return <CheckCircle2 className="h-5 w-5 text-green-300" />;
  if (type === "security") return <ShieldAlert className="h-5 w-5 text-purple-300" />;
  return <Bell className="h-5 w-5 text-cyan-300" />;
}

export function NotificationsPage() {
  const { t } = useLanguage();
  const hasItems = demoItems.length > 0;

  return (
    <div className="min-h-screen bg-[#0B0F19] pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-10">
        <div className="mb-6 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-black tracking-widest text-blue-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("backHome")}
          </Link>
          <Button variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10">
            {t("markAllRead")}
          </Button>
        </div>

        <div className="mx-auto max-w-3xl">
          <Card className="bg-white/5 border-white/10 text-white">
            <CardHeader className="flex flex-row items-center justify-between gap-4">
              <div>
                <CardTitle className="text-2xl">{t("notificationsTitle")}</CardTitle>
                <p className="text-sm text-gray-300">{t("notificationsSubtitle")}</p>
              </div>
              <Badge className="bg-white/10 text-white border border-white/10">
                {t("demo")}
              </Badge>
            </CardHeader>
            <CardContent>
              {!hasItems ? (
                <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <Bell className="h-5 w-5 text-cyan-300" />
                  </div>
                  <div className="text-lg font-bold">{t("noNotifications")}</div>
                  <p className="mt-1 text-sm text-gray-300">{t("noNotificationsHint")}</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {demoItems.map((n) => (
                    <div
                      key={n.id}
                      className={[
                        "rounded-xl border p-4 flex gap-3",
                        n.unread
                          ? "border-brand-cyan/30 bg-brand-cyan/5"
                          : "border-white/10 bg-white/5",
                      ].join(" ")}
                    >
                      <div className="mt-0.5">
                        <TypeIcon type={n.type} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <div className="truncate font-bold">{n.title}</div>
                              {n.unread ? (
                                <span className="inline-flex h-2 w-2 rounded-full bg-brand-cyan" />
                              ) : null}
                            </div>
                            <div className="mt-0.5 text-sm text-gray-300">
                              {n.description}
                            </div>
                          </div>
                          <div className="shrink-0 text-xs text-gray-400">
                            {n.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 text-xs text-gray-400">
                {t("notificationsHint")}{" "}
                <Link to="/login" className="text-brand-cyan hover:underline">
                  {t("login")}
                </Link>
                .
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

