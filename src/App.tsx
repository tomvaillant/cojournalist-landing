import { ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white relative">
      <div className="fixed inset-0 pointer-events-none">
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
                CoJournalist
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 font-light leading-relaxed">
                Focus on the reporting, let your assistant monitor the <span className="line-through">noise</span> and identify <span className="underline">patterns</span>.
              </p>
            </div>
          </div>

          <div className="space-y-8 pt-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 leading-tight">
              The journalist's AI assistant that can scrape, collect, monitor, investigate and fact-check <span className="font-bold underline text-[#968BDF]">data</span>.
            </h2>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                CoJournalist addresses the resource gap facing local newsrooms and independent journalists by consolidating technical investigative tools into an accessible interface. Through natural language commands, reporters can access capabilities typically reserved for well-funded newsrooms.
              </p>

              <p>
                Whether you need to scrape Instagram profiles or government websites for public records, query local databases, use OSINT tools, monitor elected officials' calendars to investigate connections with local entities, or fact-check claims, CoJournalist supports your reporting through conversational requests.
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
    </div>
  );
}

export default App;
