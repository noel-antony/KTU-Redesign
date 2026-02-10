import { LoginForm } from "@/components/login-form";
import { InfoSection } from "@/components/info-section";
import bgPattern from "@/assets/bg-pattern.png";
import ktuLogo from "@/assets/ktu-logo.png";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Navigation Bar */}
      <header className="bg-primary shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1 rounded-full shadow-sm">
               <img src={ktuLogo} alt="KTU Logo" className="h-8 w-8 object-contain" />
            </div>
            <h1 className="text-white font-serif text-sm md:text-lg font-bold leading-tight hidden md:block">
              APJ Abdul Kalam Technological University
            </h1>
            <h1 className="text-white font-serif text-sm font-bold leading-tight md:hidden">
              KTU e-Gov
            </h1>
          </div>
          
          <nav className="flex gap-4 md:gap-6">
            <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10 h-auto py-1.5 px-3 text-sm font-medium">
              Home
            </Button>
            <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10 h-auto py-1.5 px-3 text-sm font-medium hidden sm:flex">
              Research
            </Button>
            <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10 h-auto py-1.5 px-3 text-sm font-medium hidden sm:flex">
              FAQ
            </Button>
            <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10 h-auto py-1.5 px-3 text-sm font-medium">
              Contact
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative">
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-repeat"
          style={{ backgroundImage: `url(${bgPattern})`, backgroundSize: '400px' }}
        ></div>
        
        {/* Gradient Overlay for depth */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-4 py-8 md:py-16 flex-1 flex flex-col z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto w-full">
            
            {/* Left Column: Welcome Text & Info (Visible on Desktop) */}
            <div className="space-y-6 lg:mt-8">
              <div className="space-y-4 text-center lg:text-left animate-in slide-in-from-left-4 duration-700">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-semibold tracking-wide uppercase mb-2">
                  e-Governance Portal
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
                  Welcome to the <br/>
                  <span className="text-primary">KTU Digital Platform</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  A centralized gateway for students, faculty, and institutions to manage academic activities, examinations, and university services efficiently.
                </p>
              </div>

              {/* Info Cards - Moved here for desktop layout */}
              <div className="hidden lg:block">
                 <InfoSection />
              </div>
            </div>

            {/* Right Column: Login Card */}
            <div className="w-full flex justify-center lg:justify-end">
              <LoginForm />
            </div>

            {/* Info Cards - Visible below fold on Mobile/Tablet */}
            <div className="lg:hidden mt-8">
              <InfoSection />
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 mt-auto z-10 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center text-sm">
          <p className="mb-4 font-serif text-slate-300">APJ Abdul Kalam Technological University</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
          <p className="text-xs opacity-60">
            &copy; {new Date().getFullYear()} KTU e-Governance Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
