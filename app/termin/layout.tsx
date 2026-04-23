import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termin buchen",
  description:
    "Buchen Sie jetzt einen Termin bei SperrZone24 – schnell, einfach und unverbindlich.",
};

export default function TerminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
