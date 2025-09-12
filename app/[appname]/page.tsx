import { redirect, notFound } from 'next/navigation';
import { myApps } from '../config/site';
import { use } from 'react';

export default function AppRedirectPage({ params }: { params: Promise<{ appname: string }> }) {
  const { appname } = use(params);
  const app = myApps[appname];
  
  if (!app) {
    notFound();
  }
  
  redirect(app.appStoreLink);
}