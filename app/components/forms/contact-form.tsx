"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Form,
  Input,
  Textarea,
} from "@heroui/react";
import { useState, useEffect, useCallback } from "react";
import { myProfile } from "../../config/site";
import { AnimateIcon, EmailIcon, LocationIcon } from "../imgs/icons";
import { sendGTMEvent } from "@next/third-parties/google";
import { TurnstileWidget } from "./turnstile-widget";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [csrfToken, setCsrfToken] = useState<string>("");
  const [captchaToken, setCaptchaToken] = useState<string | null>("");
  const [captchaError, setCaptchaError] = useState<string>("");

  useEffect(() => {
    // Fetch CSRF token when component mounts
    const fetchCSRFToken = async () => {
      try {
        const response = await fetch("/api/csrf");
        const data = await response.json();
        setCsrfToken(data.token);
      } catch (error) {
        console.error("Failed to fetch CSRF token:", error);
      }
    };
    fetchCSRFToken();
  }, []);

  const resetCaptcha = useCallback(() => {
    setCaptchaToken("");
    setCaptchaError("");
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    sendGTMEvent({ event: "contactBtnClicked" });

    if (!captchaToken) {
      setCaptchaError("請完成 Cloudflare Turnstile 驗證");
      setIsSubmitting(false);
      return;
    }

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const phone = formData.get("phone") as string;
      const message = formData.get("message") as string;

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          turnstileToken: captchaToken,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      resetCaptcha();
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-gradient-to-b from-background/50 to-background"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground-700 max-w-2xl mx-auto">
              有任何專案合作或工作機會嗎？歡迎聯繫我，讓我們一起創造出色的作品！
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">聯絡資訊</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary text-xl">
                        <EmailIcon />
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-foreground-700">
                        chou.wei.fang@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary text-xl">
                        <LocationIcon />
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-foreground-700">台北, 台灣</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">社群媒體</h3>
                <div className="flex gap-4">
                  {myProfile.socialLinks.map((link) => (
                    <Button
                      key={link.label}
                      as="a"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      isIconOnly
                      variant="flat"
                      className="w-12 h-12 hover:bg-primary/20"
                    >
                      <AnimateIcon>{link.icon && <link.icon />}</AnimateIcon>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-content1/50 backdrop-blur-sm border border-divider">
              <CardHeader className="pb-6">
                <h3 className="text-2xl font-bold">聯絡表單</h3>
              </CardHeader>
              <CardBody className="pt-0">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-success text-2xl">✓</span>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">訊息已發送！</h4>
                    <p className="text-foreground-700">
                      感謝您的聯繫，我會盡快回覆您。
                    </p>
                    <Button
                      className="mt-4"
                      variant="light"
                      onPress={() => setIsSubmitted(false)}
                    >
                      發送另一則訊息
                    </Button>
                  </div>
                ) : (
                  <Form
                    onSubmit={onSubmit}
                    validationBehavior="native"
                    className="space-y-6"
                  >
                    <Input
                      name="name"
                      label="姓名"
                      placeholder="請輸入您的姓名"
                      isRequired
                      variant="bordered"
                      classNames={{
                        input: "bg-transparent",
                        inputWrapper:
                          "border-default-200/50 hover:border-primary/50 focus-within:border-primary",
                      }}
                      errorMessage={({ validationDetails }) => {
                        if (validationDetails.valueMissing) {
                          return "請輸入您的姓名";
                        }
                      }}
                    />
                    <Input
                      name="email"
                      label="電子郵件"
                      placeholder="請輸入您的電子郵件"
                      type="email"
                      isRequired
                      variant="bordered"
                      classNames={{
                        input: "bg-transparent",
                        inputWrapper:
                          "border-default-200/50 hover:border-primary/50 focus-within:border-primary",
                      }}
                      errorMessage={({ validationDetails }) => {
                        if (validationDetails.valueMissing) {
                          return "請輸入您的電子郵件";
                        }
                        if (validationDetails.typeMismatch) {
                          return "請輸入有效的電子郵件地址";
                        }
                      }}
                    />
                    <Input
                      name="phone"
                      label="電話號碼"
                      placeholder="請輸入您的電話號碼（選填）"
                      type="tel"
                      variant="bordered"
                      classNames={{
                        input: "bg-transparent",
                        inputWrapper:
                          "border-default-200/50 hover:border-primary/50 focus-within:border-primary",
                      }}
                    />
                    <Textarea
                      name="message"
                      label="訊息內容"
                      placeholder="請描述您的需求或想法..."
                      isRequired
                      variant="bordered"
                      minRows={4}
                      classNames={{
                        input: "bg-transparent",
                        inputWrapper:
                          "border-default-200/50 hover:border-primary/50 focus-within:border-primary",
                      }}
                      errorMessage={({ validationDetails }) => {
                        if (validationDetails.valueMissing) {
                          return "請輸入您的訊息內容";
                        }
                      }}
                    />
                    <div className="space-y-2 w-full">
                      <TurnstileWidget
                        onVerify={() => {}}
                        onSuccess={(token) => {
                          setCaptchaToken(token);
                          setCaptchaError("");
                        }}
                        onExpire={() => {
                          setCaptchaToken(null);
                          setCaptchaError("驗證已過期，請重新勾選");
                        }}
                        onError={() => {
                          setCaptchaToken(null);
                          setCaptchaError("驗證錯誤，請重新嘗試");
                        }}
                      />
                      {captchaError && (
                        <p className="text-danger text-sm">{captchaError}</p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      color="primary"
                      size="lg"
                      isLoading={isSubmitting}
                      className="w-full font-semibold"
                    >
                      {isSubmitting ? "發送中..." : "發送訊息"}
                    </Button>
                  </Form>
                )}
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
