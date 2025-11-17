import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { useRef, useState } from "react";

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
  onExpire: () => void;
  onError: () => void;
  onSuccess: (token: string) => void; // 接 token
}

export enum TurnstileStatus {
  Idle = "idle",
  Success = "success",
  Error = "error",
  Expired = "expired",
}

export function TurnstileWidget({
  onVerify,
  onExpire,
  onError,
  onSuccess,
}: TurnstileWidgetProps) {
  const [, setStatus] = useState<TurnstileStatus>(TurnstileStatus.Idle);

  const siteKey = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY;
  const ref = useRef<TurnstileInstance | undefined>(undefined);

  if (!siteKey) {
    return (
      <p className="text-danger text-sm">
        ⚠️ 尚未設定 Cloudflare Turnstile site key。
      </p>
    );
  }

  return (
    <Turnstile
      ref={ref}
      siteKey={siteKey}
      onError={() => {
        setStatus(TurnstileStatus.Error);
        onError();
      }}
      onExpire={() => {
        setStatus(TurnstileStatus.Expired);
        onExpire();
      }}
      onSuccess={(token) => {
        setStatus(TurnstileStatus.Success);
        onSuccess(token);
        onVerify(token);
      }}
      options={{
        action: "submit-form",
        size: "flexible",
      }}
    />
  );
}
