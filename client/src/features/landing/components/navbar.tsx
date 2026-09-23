"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./theme-button";
import Image from "next/image"
import { useRouter } from "next/navigation";
export function Navbar() {
const router=useRouter()
  const RedirectAuthPage=()=>{
router.push("/sign-in")
  }
  return (
    <header className="w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-zinc-900">
           <Image
            src="/logo.svg"
            alt="InterView-Ai Logo"
            width={32}
            height={28}
            priority
          />
          <span>InterviewAI</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          <Link href="#features" className="hover:text-zinc-950 transition-colors">
            Features
          </Link>
          <Link href="#solutions" className="hover:text-zinc-950 transition-colors">
            Solutions
          </Link>
          <Link href="#resources" className="hover:text-zinc-950 transition-colors">
            Resources
          </Link>
          <Link href="#pricing" className="hover:text-zinc-950 transition-colors">
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-zinc-700 text-sm font-medium" onClick={RedirectAuthPage}>
            Sign in
          </Button>
          <Button variant="outline" className="rounded-full px-5 text-sm border-zinc-300 font-medium">
            Get demo
          </Button>
          <ModeToggle/>
        </div>
      </div>
    </header>
  );
}