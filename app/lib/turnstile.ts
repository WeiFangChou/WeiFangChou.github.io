interface TurnstileVerifyResponse {
  success: boolean;
  hostname?: string;
  "error-codes"?: string[];
}

export async function verifyTurnstileToken(token: string, ipAddress?: string) {
  const secretKey = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    console.error("CLOUDFLARE_TURNSTILE_SECRET_KEY is not configured");
    return false;
  }

  const formData = new URLSearchParams();
  formData.append("secret", secretKey);
  formData.append("response", token);

  if (ipAddress) {
    formData.append("remoteip", ipAddress);
  }

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      console.error("Failed to verify Turnstile token", response.statusText);
      return false;
    }

    const data = (await response.json()) as TurnstileVerifyResponse;

    if (!data.success) {
      console.warn("Turnstile verification failed", data["error-codes"]);
    }

    return data.success;
  } catch (error) {
    console.error("Error verifying Turnstile token", error);
    return false;
  }
}
