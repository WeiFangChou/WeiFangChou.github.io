import { redirect } from "next/navigation";
import { myProfile } from "../config/site";

export default function AppRedirectPage() {
  // Redirect to webnotify as the default app
  redirect(myProfile.appStoreLink);
}
