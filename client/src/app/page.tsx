import { Footer } from "@/features/landing/components/footer";
import { HeroSection } from "@/features/landing/components/hero-section";
import { Navbar } from "@/features/landing/components/navbar";
import { InterviewWorkflowSection } from "@/features/landing/components/workflow";
import { UserSync } from "@/features/auth/components/user-sync";

export default function Home() {
  return (
    <>
      <UserSync />

      <main className="min-h-screen overflow-hidden bg-background text-foreground">
        <Navbar />

        <div className="relative">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.12),transparent_60%)]" />

          <section className="relative">
            <HeroSection />
          </section>

          <section className="relative border-t border-border/40 bg-muted/20">
            <InterviewWorkflowSection />
          </section>
        </div>

        <footer className="border-t border-border/40 bg-background">
          <Footer />
        </footer>
      </main>
    </>
  );
}
