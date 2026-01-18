"use client";

import ReactMarkdown from "react-markdown";
import { Components } from "react-markdown";

interface PrivacyContentProps {
  content: string;
}

const customComponents: Components = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold text-foreground mb-6">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-foreground/70 leading-relaxed mb-4">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-outside text-foreground/70 ml-6 mb-4 space-y-2">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside text-foreground/70 ml-6 mb-4 space-y-2">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="text-foreground/70">{children}</li>,
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-primary hover:underline"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic text-foreground/70">{children}</em>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/60 my-4">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-default-100 px-1.5 py-0.5 rounded text-sm font-mono text-foreground">
      {children}
    </code>
  ),
  hr: () => <hr className="border-divider my-8" />,
};

export default function PrivacyContent({ content }: PrivacyContentProps) {
  return (
    <div className="max-w-none">
      <ReactMarkdown components={customComponents}>{content}</ReactMarkdown>
    </div>
  );
}
