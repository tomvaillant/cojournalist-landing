import { ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-4 sm:inset-6 md:inset-8 border border-slate-200 rounded-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 py-16 sm:px-8 sm:py-24">
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#968BDF] bg-slate-50">
              <span className="text-xs font-semibold tracking-wide text-slate-700">
                COMING SOON
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900">
                co<span className="bg-gradient-to-r from-[#968BDF] to-[#7c6fc7] bg-clip-text text-transparent">Journalist</span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 font-light leading-relaxed">
                Focus on the reporting, let your assistant monitor the <span className="inline-block relative">
                  <span className="relative">
                    noise
                    <span className="absolute left-0 top-1/2 h-[2px] bg-slate-600 animate-strikethrough origin-left"></span>
                  </span>
                </span> and identify <span className="inline-block relative">
                  <span className="relative">
                    patterns
                    <span className="absolute left-0 bottom-0 h-[2px] bg-slate-600 animate-underline origin-left"></span>
                  </span>
                </span>.
              </p>
            </div>
          </div>

          <div className="space-y-8 pt-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 leading-tight">
              The journalist's AI assistant for data collection, monitoring, investigation and verification.
            </h2>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                CoJournalist consolidates technical investigative tools into an accessible interface, addressing the resource constraints facing small newsrooms and independent journalists to help expand the coverage of local news. Through natural language commands, reporters gain access to capabilities typically reserved for well-funded organizations.
              </p>

              <p>
                The platform enables journalists to scrape public data from social media profiles and government websites, query local databases, use OSINT tools and verify claims—all through conversational requests.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="https://buriedsignals.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#968BDF] to-[#7c6fc7] text-white font-medium rounded-lg hover:from-[#8578cc] hover:to-[#6b5eb4] transition-all duration-200 group shadow-sm"
              >
                <span>Stay Tuned</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-8">
        <div className="h-px bg-slate-200"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 pt-8 pb-16 sm:px-8 sm:pt-12 sm:pb-24">
        <div className="inline-flex flex-col gap-3">
          <span className="text-xs font-semibold tracking-wide text-slate-400">
            SUPPORTED BY
          </span>
          <img src="/grs.svg" alt="GRS Logo" className="h-12 opacity-60" />
        </div>
      </div>
    </div>
  );
}

export default App;
