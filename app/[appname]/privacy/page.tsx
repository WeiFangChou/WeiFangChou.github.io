"use client";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { notFound } from "next/navigation";
import { myApps } from "../../config/site";
import { use, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function PrivacyPage({ params }: { params: Promise<{ appname: string }> }) {
  const { appname } = use(params);
  const searchParams = useSearchParams();
  const app = myApps[appname];
  
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  
  useEffect(() => {
    const langParam = searchParams.get('lang');
    if (langParam === 'zh' || langParam === 'en') {
      setLanguage(langParam);
    }
  }, [searchParams]);
  
  if (!app) {
    notFound();
  }

  // Special handling for webnotify app with dual language support
  if (appname === "webnotify") {
    return (
      <div className="min-h-screen bg-linear-to-br from-purple-950 via-purple-900 to-purple-800 p-4">
        <div className="max-w-4xl mx-auto pt-20 pb-10">
          <Card className="bg-purple-950/50 backdrop-blur-sm border border-purple-800">
            <CardHeader className="flex flex-col gap-2 px-6 pt-6">
              <div className="flex justify-between items-start w-full">
                <div>
                  <h1 className="text-3xl font-bold text-white">
                    {language === 'zh' ? '隱私權政策' : 'Privacy Policy'}
                  </h1>
                  <p className="text-purple-200">
                    {language === 'zh' 
                      ? `最後更新: ${new Date().toLocaleDateString('zh-TW')}`
                      : `Last updated: ${new Date().toLocaleDateString()}`
                    }
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant={language === 'en' ? 'solid' : 'bordered'}
                    color="secondary"
                    onClick={() => setLanguage('en')}
                  >
                    EN
                  </Button>
                  <Button
                    size="sm"
                    variant={language === 'zh' ? 'solid' : 'bordered'}
                    color="secondary"
                    onClick={() => setLanguage('zh')}
                  >
                    中文
                  </Button>
                </div>
              </div>
            </CardHeader>
            <Divider className="bg-purple-800" />
            <CardBody className="px-6 py-6 space-y-6">
              {language === 'zh' ? (
                <>
                  <p className="text-purple-200 leading-relaxed">
                    感謝您使用本 App。我們重視您的隱私，以下說明我們收集、使用及保護您的資料方式。
                  </p>

                  <section className="space-y-3">
                    <h2 className="text-xl font-semibold text-purple-100">1. 收集的資料類型</h2>
                    <ul className="space-y-4 text-purple-200">
                      <li>
                        <strong>Identifiers（識別碼，如 Device ID / IDFA）</strong>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                          <li>用途：第三方廣告投放、個人化廣告、產品個人化</li>
                          <li>是否與使用者身份連結：是</li>
                          <li>是否用於追蹤：是</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Purchases（購買歷史，如內購訂閱）</strong>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                          <li>用途：提供 App 功能（解鎖內容 / 訂閱服務）</li>
                          <li>是否與使用者身份連結：是</li>
                          <li>是否用於追蹤：否（僅用於 App 功能，若用於行銷則標註追蹤）</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Usage Data（使用數據 / 分析）</strong>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                          <li>用途：改善 App 體驗、崩潰診斷</li>
                          <li>是否與使用者身份連結：否</li>
                          <li>是否用於追蹤：否</li>
                        </ul>
                      </li>
                    </ul>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl font-semibold text-purple-100">2. App Tracking Transparency (ATT)</h2>
                    <p className="text-purple-200 leading-relaxed">
                      本 App 使用 Apple 的 AppTrackingTransparency 框架，以詢問您是否允許我們收集識別碼（如 IDFA）並與第三方共享，以提供個人化廣告。
                    </p>
                    <p className="text-purple-200 leading-relaxed">
                      您可以隨時在 iOS 系統設定中關閉或修改「允許 App 要求追蹤」選項。
                    </p>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl font-semibold text-purple-100">3. 廣告</h2>
                    <ul className="list-disc list-inside text-purple-200 space-y-1 ml-4">
                      <li>本 App 使用 Google AdMob 投放廣告。</li>
                      <li>若您允許追蹤，AdMob 將投放符合您興趣的個人化廣告。</li>
                      <li>若您拒絕追蹤，AdMob 仍會顯示廣告，但為非個人化廣告（隨機廣告）。</li>
                    </ul>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl font-semibold text-purple-100">4. 資料共享</h2>
                    <ul className="list-disc list-inside text-purple-200 space-y-1 ml-4">
                      <li>AdMob 可能會與第三方廣告商共享您的識別碼以提供個人化廣告。</li>
                      <li>我們不會將購買歷史或使用數據與第三方共享，僅用於 App 功能與分析。</li>
                    </ul>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl font-semibold text-purple-100">5. 您的權利</h2>
                    <ul className="list-disc list-inside text-purple-200 space-y-1 ml-4">
                      <li>您可以選擇拒絕追蹤，影響個人化廣告呈現。</li>
                      <li>您可以透過 iOS 系統設定管理 App 的追蹤權限。</li>
                      <li>如欲查詢或刪除您的個人資料，請聯絡我們。</li>
                    </ul>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl font-semibold text-purple-100">6. 聯絡方式</h2>
                    <p className="text-purple-200 leading-relaxed">
                      如對隱私權政策有任何疑問，請聯絡我們：
                    </p>
                    <div className="text-purple-200 ml-4">
                      <p>Email: <Link href={`mailto:${app.privacyContent?.contactEmail}`} className="text-purple-400 hover:text-purple-300">{app.privacyContent?.contactEmail}</Link></p>
                      <p>Website: <Link href="https://fangs.dev" className="text-purple-400 hover:text-purple-300">https://fangs.dev</Link></p>
                      <p>App Store: <Link href={app.appStoreLink} className="text-purple-400 hover:text-purple-300">App Store 連結</Link></p>
                    </div>
                  </section>
                </>
              ) : (
                <>
                  <p className="text-purple-200 leading-relaxed">
                    Thank you for using our App. We value your privacy and this policy explains how we collect, use, and protect your data.
                  </p>

                  <section className="space-y-3">
                    <h2 className="text-xl font-semibold text-purple-100">1. Data Types Collected</h2>
                    <ul className="space-y-4 text-purple-200">
                      <li>
                        <strong>Identifiers (such as Device ID / IDFA)</strong>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                          <li>Purpose: Third-party advertising, personalized ads, product personalization</li>
                          <li>Linked to user identity: Yes</li>
                          <li>Used for tracking: Yes</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Purchases (purchase history, in-app subscriptions)</strong>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                          <li>Purpose: Providing app functionality (unlocking content / subscription services)</li>
                          <li>Linked to user identity: Yes</li>
                          <li>Used for tracking: No (only for app functionality)</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Usage Data (analytics)</strong>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                          <li>Purpose: Improving app experience, crash diagnostics</li>
                          <li>Linked to user identity: No</li>
                          <li>Used for tracking: No</li>
                        </ul>
                      </li>
                    </ul>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl font-semibold text-purple-100">2. App Tracking Transparency (ATT)</h2>
                    <p className="text-purple-200 leading-relaxed">
                      This app uses Apple&apos;s AppTrackingTransparency framework to ask whether you allow us to collect identifiers (such as IDFA) and share them with third parties for personalized advertising.
                    </p>
                    <p className="text-purple-200 leading-relaxed">
                      You can turn off or modify &ldquo;Allow Apps to Request to Track&rdquo; in iOS system settings at any time.
                    </p>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl font-semibold text-purple-100">3. Advertising</h2>
                    <ul className="list-disc list-inside text-purple-200 space-y-1 ml-4">
                      <li>This app uses Google AdMob to serve advertisements.</li>
                      <li>If you allow tracking, AdMob will serve personalized ads based on your interests.</li>
                      <li>If you decline tracking, AdMob will still show ads, but they will be non-personalized (random ads).</li>
                    </ul>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl font-semibold text-purple-100">4. Data Sharing</h2>
                    <ul className="list-disc list-inside text-purple-200 space-y-1 ml-4">
                      <li>AdMob may share your identifiers with third-party advertisers to provide personalized ads.</li>
                      <li>We do not share purchase history or usage data with third parties; they are used only for app functionality and analytics.</li>
                    </ul>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl font-semibold text-purple-100">5. Your Rights</h2>
                    <ul className="list-disc list-inside text-purple-200 space-y-1 ml-4">
                      <li>You can choose to decline tracking, which affects personalized ad delivery.</li>
                      <li>You can manage app tracking permissions through iOS system settings.</li>
                      <li>To request access to or deletion of your personal data, please contact us.</li>
                    </ul>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl font-semibold text-purple-100">6. Contact Information</h2>
                    <p className="text-purple-200 leading-relaxed">
                      If you have any questions about this Privacy Policy, please contact us:
                    </p>
                    <div className="text-purple-200 ml-4">
                      <p>Email: <Link href={`mailto:${app.privacyContent?.contactEmail}`} className="text-purple-400 hover:text-purple-300">{app.privacyContent?.contactEmail}</Link></p>
                      <p>Website: <Link href="https://fangs.dev" className="text-purple-400 hover:text-purple-300">https://fangs.dev</Link></p>
                      <p>App Store: <Link href={app.appStoreLink} className="text-purple-400 hover:text-purple-300">View on App Store</Link></p>
                    </div>
                  </section>
                </>
              )}

              <Divider className="bg-purple-800 my-6" />
              
              <div className="text-center space-y-2">
                <Link 
                  href={`/${appname}`}
                  className="text-purple-400 hover:text-purple-300 font-medium block"
                >
                  {language === 'zh' ? `前往 ${app.name} App →` : `Go to ${app.name} App →`}
                </Link>
                <Link 
                  href="/" 
                  className="text-purple-400 hover:text-purple-300 font-medium block"
                >
                  {language === 'zh' ? '← 回到作品集' : '← Back to Portfolio'}
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }

  // Default English privacy policy for other apps
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-950 via-purple-900 to-purple-800 p-4">
      <div className="max-w-4xl mx-auto pt-20 pb-10">
        <Card className="bg-purple-950/50 backdrop-blur-sm border border-purple-800">
          <CardHeader className="flex flex-col gap-2 px-6 pt-6">
            <h1 className="text-3xl font-bold text-white">{app.privacyTitle || `${app.name} Privacy Policy`}</h1>
            <p className="text-purple-200">Last updated: {new Date().toLocaleDateString()}</p>
          </CardHeader>
          <Divider className="bg-purple-800" />
          <CardBody className="px-6 py-6 space-y-6">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-purple-100">1. Information We Collect</h2>
              <p className="text-purple-200 leading-relaxed">
                Our app collects minimal information necessary to provide services:
              </p>
              <ul className="list-disc list-inside text-purple-200 space-y-1 ml-4">
                {app.privacyContent?.informationCollected?.map((item, index) => (
                  <li key={index}>{item}</li>
                )) || [
                  <li key="1">Device information for app functionality</li>,
                  <li key="2">Usage analytics (optional)</li>,
                  <li key="3">User preferences and settings</li>
                ]}
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-purple-100">2. How We Use Your Information</h2>
              <p className="text-purple-200 leading-relaxed">
                We use the collected information solely for:
              </p>
              <ul className="list-disc list-inside text-purple-200 space-y-1 ml-4">
                {app.privacyContent?.dataUsage?.map((item, index) => (
                  <li key={index}>{item}</li>
                )) || [
                  <li key="1">Providing core app functionality</li>,
                  <li key="2">Improving app performance and user experience</li>,
                  <li key="3">Troubleshooting technical issues</li>
                ]}
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-purple-100">3. Data Storage and Security</h2>
              <p className="text-purple-200 leading-relaxed">
                Your data is stored securely using industry-standard encryption. We do not sell, 
                trade, or share your personal information with third parties without your consent, 
                except as required by law.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-purple-100">4. Third-Party Services</h2>
              <p className="text-purple-200 leading-relaxed">
                Our app may use third-party services for analytics and crash reporting. 
                These services have their own privacy policies governing the use of your information.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-purple-100">5. Your Rights</h2>
              <p className="text-purple-200 leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-purple-200 space-y-1 ml-4">
                <li>Access your personal data</li>
                <li>Request data deletion</li>
                <li>Opt-out of data collection</li>
                <li>Control app permissions at any time</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-purple-100">6. Children&apos;s Privacy</h2>
              <p className="text-purple-200 leading-relaxed">
                Our app is not intended for children under 13 years of age. We do not knowingly 
                collect personal information from children under 13.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-purple-100">7. Changes to This Policy</h2>
              <p className="text-purple-200 leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any 
                changes by posting the new privacy policy on this page and updating the 
                &ldquo;Last updated&rdquo; date.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-purple-100">8. Contact Us</h2>
              <p className="text-purple-200 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="text-purple-200 ml-4">
                <p>Email: {app.privacyContent?.contactEmail || "app@fangs.dev"}</p>
                <p>Website: <Link href="https://fangs.dev" className="text-purple-400 hover:text-purple-300">https://fangs.dev</Link></p>
                <p>App Store: <Link href={app.appStoreLink} className="text-purple-400 hover:text-purple-300">View on App Store</Link></p>
              </div>
            </section>

            <Divider className="bg-purple-800 my-6" />
            
            <div className="text-center space-y-2">
              <Link 
                href={`/${appname}`}
                className="text-purple-400 hover:text-purple-300 font-medium block"
              >
                Go to {app.name} App →
              </Link>
              <Link 
                href="/" 
                className="text-purple-400 hover:text-purple-300 font-medium block"
              >
                ← Back to Portfolio
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}