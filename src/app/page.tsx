'use client';
import { Separator } from "@/ui/components/Separator/styles";
import SessionHome from "@/ui/sessions/Home/home";
import SessionServices from "@/ui/sessions/Services/Services";
import SessionWho from "@/ui/sessions/Who/Who";

export default function Home() {
  return (
    <main>
      <SessionHome />
      <SessionWho />
      <Separator />
      <SessionServices />
    </main>
  );
}
