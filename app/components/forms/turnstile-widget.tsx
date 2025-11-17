"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        element: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
        }
      ) => string;
      reset?: (widgetId?: string) => void;
      remove?: (widgetId?: string) => void;
    };
  }
}

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
  onExpire: () => void;
  resetSignal: number;
}

export function TurnstileWidget({ onVerify, onExpire, resetSignal }: TurnstileWidgetProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY;

  const renderWidget = useCallback(() => {
    if (!scriptLoaded || !siteKey || !containerRef.current || widgetIdRef.current) {
      return;
    }

    if (!window.turnstile) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      theme: "auto",
      callback: (token: string) => {
        onVerify(token);
      },
      "expired-callback": () => {
        onExpire();
      },
      "error-callback": () => {
        onExpire();
      },
    });
  }, [scriptLoaded, siteKey, onVerify, onExpire]);

  useEffect(() => {
    renderWidget();
  }, [renderWidget]);

  useEffect(() => {
    if (!widgetIdRef.current || !window.turnstile || typeof window.turnstile.reset !== "function") {
      return;
    }
    window.turnstile.reset(widgetIdRef.current);
  }, [resetSignal]);

  useEffect(() => {
    return () => {
      if (widgetIdRef.current && window.turnstile && typeof window.turnstile.remove === "function") {
        window.turnstile.remove(widgetIdRef.current);
      }
    };
  }, []);

  if (!siteKey) {
    return (
      <p className="text-danger text-sm">
        尚未設定 Cloudflare Turnstile site key。
      </p>
    );
  }

  return (
    <>
      <Script
        id="cloudflare-turnstile"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => setScriptLoaded(true)}
      />
      <div ref={containerRef} className="flex justify-center" />
    </>
  );
}
