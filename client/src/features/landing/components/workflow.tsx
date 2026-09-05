import {
  Upload,
  BrainCircuit,
  Video,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function InterviewWorkflowSection() {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Upload Resume",
      description:
        "Upload the candidate's resume and job description. AI analyzes skills, experience, and role requirements.",
    },
    {
      number: "02",
      icon: BrainCircuit,
      title: "AI Creates Interview",
      description:
        "Generate personalized interview questions based on the candidate's resume, skills, and job requirements.",
    },
    {
      number: "03",
      icon: Video,
      title: "Live AI Interview",
      description:
        "Conduct a real-time voice or video interview with an AI interviewer that adapts to every response.",
    },
    {
      number: "04",
      icon: BarChart3,
      title: "Score & Evaluate",
      description:
        "Get an instant performance report with technical skills, communication, confidence, and overall score.",
    },
  ];

  return (
    <section className="relative w-full bg-background py-24 overflow-hidden border-t border-border transition-colors">
      <div
        className="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(var(--border) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Badge
            variant="outline"
            className="mb-4 inline-flex items-center gap-1.5 rounded-full border-border bg-card px-3 py-1 text-xs font-normal text-muted-foreground shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            AI-Powered Hiring
          </Badge>

          <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-foreground leading-[1.15]">
            From resume to <br />
            <span className="text-muted-foreground font-light">
              interview insights
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base text-muted-foreground font-normal leading-relaxed max-w-lg mx-auto">
            Automate the entire interview lifecycle. Screen candidates, conduct
            adaptive dialogues, and evaluate results without hours of manual review.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative group">
                <div className="h-full bg-card rounded-2xl border border-border p-5 shadow-sm transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-black/40 hover:border-primary/30 hover:-translate-y-0.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium text-muted-foreground">
                      Step {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-muted/60 border border-border flex items-center justify-center text-foreground shadow-sm">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                  </div>

                  <h3 className="mt-5 text-xs font-semibold text-card-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>

                  <div className="mt-5 pt-3 border-t border-border flex items-center gap-1.5 text-[10px] text-muted-foreground">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span>Automated by AI</span>
                  </div>
                </div>

                {index !== steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3.5 z-10 -translate-y-1/2 w-7 h-7 rounded-full bg-card border border-border shadow-sm items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-muted-foreground" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl bg-card border border-border p-8 sm:p-12 shadow-xl dark:shadow-2xl dark:shadow-black/50 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-md">
            <div className="flex items-center gap-1.5 text-[10px] uppercase font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-md w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Real-time AI analysis
            </div>

            <h3 className="mt-4 text-2xl sm:text-3xl font-normal text-card-foreground leading-tight">
              Every answer becomes <br />
              <span className="text-muted-foreground font-light">
                actionable hiring data
              </span>
            </h3>

            <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Conversations are translated directly into structured competencies,
              flagging high-potential candidates within minutes of call completion.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-2.5">
              {[
                "Technical Skills",
                "Communication",
                "Problem Solving",
                "Confidence",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 bg-muted/50 border border-border rounded-xl px-3 py-2 text-foreground"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  <span className="text-[11px] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-80 bg-muted/40 backdrop-blur-sm p-5 rounded-2xl border border-border shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-2.5 border-b border-border">
              <div>
                <p className="text-xs font-semibold text-card-foreground">
                  Candidate Performance
                </p>
                <p className="text-[10px] text-muted-foreground">AI Evaluation Report</p>
              </div>
              <div className="w-8 h-8 rounded-xl bg-card shadow-sm border border-border flex items-center justify-center text-foreground">
                <BarChart3 className="w-4 h-4 text-primary" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-card shadow-sm border border-border flex flex-col items-center justify-center shrink-0">
                <p className="text-lg font-semibold text-card-foreground leading-none">
                  88
                </p>
                <p className="text-[9px] text-muted-foreground mt-1 uppercase tracking-wider font-medium">
                  Overall
                </p>
              </div>

              <div className="flex-1 space-y-2">
                <ScoreBar label="Technical" value={91} />
                <ScoreBar label="Communication" value={87} />
                <ScoreBar label="Problem Solving" value={86} />
              </div>
            </div>

            <div className="rounded-xl bg-card border border-border p-2.5 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <div>
                <p className="text-[11px] font-medium text-card-foreground">
                  Strong Match
                </p>
                <p className="text-[9px] text-muted-foreground">
                  Recommended for next technical stage
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-2">
          {[
            "Resume Screening",
            "Interview Scheduling",
            "Adaptive Dialogue",
            "Competency Metrics",
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-lg bg-card border border-border text-[10px] font-medium text-muted-foreground shadow-2xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScoreBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between text-[10px] font-medium mb-1">
        <span className="text-muted-foreground">{label}</span>
        <span className="text-card-foreground">{value}%</span>
      </div>
      <div className="w-full bg-muted h-1 rounded-full overflow-hidden">
        <div
          className="bg-primary h-full rounded-full transition-all duration-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}