import { Button } from "@/components/ui/button";
import {
  Check,
  Clock,
  FileText,
  Calendar,
  Mic,
  BarChart3,
  Sparkles,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] w-full overflow-hidden bg-background flex items-center justify-center py-20 transition-colors">
      <div
        className="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(var(--border) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Floating Card: Resume Analysis */}
      <div className="hidden lg:block absolute top-12 left-16 z-10 w-60 -rotate-6 transition-transform hover:rotate-0 duration-300">
        <div className="relative bg-card p-4 rounded-2xl shadow-xl dark:shadow-2xl dark:shadow-black/40 border border-border">
          <div className="flex items-center gap-3 pb-3 border-b border-border">
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
              <FileText className="w-4 h-4 text-primary" />
            </div>

            <div>
              <p className="text-xs font-semibold text-card-foreground">
                Resume uploaded
              </p>
              <p className="text-[10px] text-muted-foreground">
                candidate_resume.pdf
              </p>
            </div>

            <Check className="ml-auto w-4 h-4 text-emerald-500" />
          </div>

          <div className="mt-3">
            <div className="flex justify-between text-[10px] mb-1.5">
              <span className="text-muted-foreground">AI Resume Analysis</span>
              <span className="text-primary font-medium">94%</span>
            </div>

            <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[94%] rounded-full" />
            </div>
          </div>
        </div>

        <div className="mt-3 ml-5 bg-card p-3 w-fit rounded-xl shadow-lg dark:shadow-xl dark:shadow-black/30 border border-border flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-[10px] font-medium text-muted-foreground">
            Skills matched with job
          </span>
        </div>
      </div>

      {/* Floating Card: Interview Scheduled */}
      <div className="hidden lg:block absolute top-10 right-16 z-10 w-60 rotate-3 transition-transform hover:rotate-0 duration-300">
        <div className="relative bg-card/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl dark:shadow-2xl dark:shadow-black/40 border border-border">
          <div className="flex items-center justify-between pb-2 border-b border-border">
            <span className="text-xs font-semibold text-card-foreground">
              Interview scheduled
            </span>
            <Calendar className="w-4 h-4 text-primary" />
          </div>

          <div className="mt-3">
            <p className="text-xs font-semibold text-card-foreground">
              AI Technical Interview
            </p>

            <p className="text-[11px] text-muted-foreground mt-0.5">
              Candidate: Alex Morgan
            </p>

            <div className="mt-3 flex items-center gap-1.5 text-[10px] text-primary font-medium bg-primary/10 px-2 py-1.5 rounded-md w-fit">
              <Clock className="w-3 h-3" />
              <span>Today · 14:30 - 15:15</span>
            </div>
          </div>
        </div>

        <div className="absolute -left-6 -top-4 bg-card p-2.5 rounded-2xl shadow-lg border border-border">
          <Calendar className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>

      {/* Floating Card: Live AI Interview */}
      <div className="hidden lg:block absolute bottom-12 left-20 z-10 w-64 rotate-1 transition-transform hover:rotate-0 duration-300">
        <div className="bg-card/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl dark:shadow-2xl dark:shadow-black/40 border border-border">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-card-foreground">
              Live AI Interview
            </p>

            <div className="flex items-center gap-1 text-[9px] text-emerald-500 font-medium">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              LIVE
            </div>
          </div>

          <div className="mt-3 flex items-center gap-3 bg-muted/60 p-3 rounded-xl border border-border">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              <Mic className="w-4 h-4" />
            </div>

            <div className="flex-1">
              <p className="text-[10px] font-semibold text-card-foreground">
                AI Interviewer
              </p>

              <div className="flex items-end gap-0.5 mt-1 h-3">
                <span className="w-1 bg-primary/40 h-2 rounded-full" />
                <span className="w-1 bg-primary h-3 rounded-full" />
                <span className="w-1 bg-primary/60 h-1.5 rounded-full" />
                <span className="w-1 bg-primary h-2.5 rounded-full" />
                <span className="w-1 bg-primary/60 h-1 rounded-full" />
                <span className="w-1 bg-primary/40 h-2 rounded-full" />
              </div>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="bg-muted/60 rounded-lg p-2 text-center">
              <p className="text-[9px] text-muted-foreground">Questions</p>
              <p className="text-xs font-semibold text-card-foreground mt-0.5">
                12
              </p>
            </div>

            <div className="bg-muted/60 rounded-lg p-2 text-center">
              <p className="text-[9px] text-muted-foreground">Time</p>
              <p className="text-xs font-semibold text-card-foreground mt-0.5">
                18m
              </p>
            </div>

            <div className="bg-muted/60 rounded-lg p-2 text-center">
              <p className="text-[9px] text-muted-foreground">Confidence</p>
              <p className="text-xs font-semibold text-emerald-500 mt-0.5">
                87%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Card: Performance Score */}
      <div className="hidden lg:block absolute bottom-12 right-20 z-10 w-60 -rotate-2 transition-transform hover:rotate-0 duration-300">
        <div className="bg-card/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl dark:shadow-2xl dark:shadow-black/40 border border-border">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold text-card-foreground">
              Performance Score
            </p>

            <BarChart3 className="w-4 h-4 text-primary" />
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <div className="text-center">
                <p className="text-lg font-semibold text-card-foreground">88</p>
                <p className="text-[8px] text-muted-foreground">/ 100</p>
              </div>
            </div>

            <div className="flex-1 space-y-2">
              <div>
                <div className="flex justify-between text-[9px] mb-1">
                  <span className="text-muted-foreground">Communication</span>
                  <span className="text-card-foreground">92%</span>
                </div>
                <div className="h-1 bg-muted rounded-full">
                  <div className="h-full w-[92%] bg-primary rounded-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[9px] mb-1">
                  <span className="text-muted-foreground">Technical</span>
                  <span className="text-card-foreground">86%</span>
                </div>
                <div className="h-1 bg-muted rounded-full">
                  <div className="h-full w-[86%] bg-primary/80 rounded-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[9px] mb-1">
                  <span className="text-muted-foreground">Problem Solving</span>
                  <span className="text-card-foreground">89%</span>
                </div>
                <div className="h-1 bg-muted rounded-full">
                  <div className="h-full w-[89%] bg-primary/60 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Center Content */}
      <div className="relative z-20 max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
        {/* App Icon */}
        <div className="w-16 h-16 rounded-2xl bg-card shadow-lg dark:shadow-2xl dark:shadow-black/50 border border-border flex items-center justify-center p-3.5 mb-8">
          <div className="relative w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-sm">
            <Sparkles className="w-5 h-5" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-foreground leading-[1.12]">
          Smarter interviews,
          <br />
          <span className="text-muted-foreground font-light">
            better hiring decisions
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-sm sm:text-base text-muted-foreground font-normal max-w-xl leading-relaxed">
          Upload a resume, schedule an interview, and let AI conduct
          real-time interviews while automatically evaluating skills,
          communication, confidence, and overall performance.
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <Button className="h-11 px-6 rounded-xl font-medium shadow-md shadow-primary/20">
            Start AI Interview
          </Button>

          <Button
            variant="outline"
            className="h-11 px-6 rounded-xl font-medium border-border"
          >
            Upload Resume
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Check className="w-3 h-3 text-emerald-500" />
            Resume-based questions
          </span>

          <span className="flex items-center gap-1.5">
            <Check className="w-3 h-3 text-emerald-500" />
            Real-time AI interview
          </span>

          <span className="flex items-center gap-1.5">
            <Check className="w-3 h-3 text-emerald-500" />
            Automated scoring
          </span>
        </div>
      </div>
    </section>
  );
}