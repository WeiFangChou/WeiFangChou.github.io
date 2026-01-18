"use client";

import { use, useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { Link } from "@heroui/link";
import { Spinner } from "@heroui/spinner";
import { myApps } from "../../config/site";
import PrivacyContent from "../../components/markdown/privacy-content";

export default function PrivacyPage({
  params,
}: {
  params: Promise<{ appname: string }>;
}) {
  const { appname } = use(params);
  const app = myApps[appname];

  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMarkdown() {
      try {
        const response = await fetch(`/privacy/md/${appname}.md`);
        if (!response.ok) {
          // 如果找不到特定的 md 檔案，嘗試載入預設模板
          const fallbackResponse = await fetch("/privacy/md/common.md");
          if (!fallbackResponse.ok) {
            throw new Error("No privacy policy found");
          }
          const fallbackText = await fallbackResponse.text();
          setContent(fallbackText);
        } else {
          const text = await response.text();
          setContent(text);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchMarkdown();
  }, [appname]);

  if (!app) {
    notFound();
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <Spinner size="lg" color="secondary" />
      </div>
    );
  }

  if (error || !content) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy Not Found</h1>
          <p className="text-foreground/70 mb-8">
            The privacy policy for {app.name} is not available.
          </p>
          <div className="flex flex-col gap-2">
            <Link href={`/${appname}`} className="text-primary hover:underline">
              ← Back to {app.name}
            </Link>
            <Link href="/" className="text-primary hover:underline">
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <PrivacyContent content={content} />

        <div className="mt-12 pt-6 border-t border-divider flex flex-col gap-2">
          <Link href={`/${appname}`} className="text-primary hover:underline">
            ← Back to {app.name}
          </Link>
          <Link href="/" className="text-primary hover:underline">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
