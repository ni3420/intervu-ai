import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
} from "lucide-react";
import {
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaTwitter as Twitter,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative w-full bg-background text-foreground overflow-hidden border-t border-border transition-colors">
      <div
        className="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(var(--border) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Top CTA Callout */}
        <div className="py-20 text-center border-b border-border flex flex-col items-center">
          {/* 3D App Icon */}
          <div className="w-14 h-14 rounded-2xl bg-card shadow-lg dark:shadow-2xl dark:shadow-black/50 border border-border flex items-center justify-center p-3 mb-6">
            <BrainCircuit className="w-6 h-6 text-primary" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-foreground leading-[1.15]">
            Ready to make <br />
            <span className="text-muted-foreground font-light">hiring smarter?</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
            Conduct AI-powered interviews, evaluate candidates in real time,
            and make better hiring decisions with data-driven insights.
          </p>

          <div className="mt-7">
            <Button className="h-11 px-6 rounded-xl font-medium shadow-md shadow-primary/20 transition-all gap-2">
              Start AI Interview
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Main Navigation Links */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-base text-foreground">
              <div className="grid grid-cols-2 gap-0.5 p-1 bg-primary rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />
                <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />
                <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />
                <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />
              </div>
              <span>InterviewAI</span>
            </Link>

            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs font-normal">
              AI-powered interviewing platform that helps teams screen,
              interview, evaluate, and hire top candidates.
            </p>

            {/* Social Icon Row */}
            <div className="flex items-center gap-2 pt-2">
              <SocialButton href="https://twitter.com">
                <Twitter className="w-3.5 h-3.5" />
              </SocialButton>
              <SocialButton href="https://linkedin.com">
                <Linkedin className="w-3.5 h-3.5" />
              </SocialButton>
              <SocialButton href="https://github.com">
                <Github className="w-3.5 h-3.5" />
              </SocialButton>
            </div>
          </div>

          {/* Product Links */}
          <FooterColumn
            title="Product"
            links={[
              "AI Interviews",
              "Resume Screening",
              "Interview Scheduling",
              "Performance Analytics",
              "Candidate Reports",
            ]}
          />

          {/* Resource Links */}
          <FooterColumn
            title="Resources"
            links={[
              "Documentation",
              "Help Center",
              "Interview Guide",
              "API Reference",
              "Changelog",
            ]}
          />

          {/* Company Links */}
          <FooterColumn
            title="Company"
            links={[
              "About Us",
              "Careers",
              "Contact Sales",
              "Privacy Policy",
              "Terms of Service",
            ]}
          />
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-muted-foreground">
          <p>© {new Date().getFullYear()} InterviewAI. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <Link href="#privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="#security" className="hover:text-foreground transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link}>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="w-8 h-8 rounded-xl bg-card border border-border shadow-2xs flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-accent transition-all"
    >
      {children}
    </Link>
  );
}