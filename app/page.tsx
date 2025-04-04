import { TransformationSplitter } from "./components/TransformSplitter";

// Sample data for the left side (data chaos)
const leftImages = [
  "/Screenshot 2025-04-04 213809.png",
  "/Screenshot 2025-04-04 213809.png",
  "/Screenshot 2025-04-04 213809.png",
  "/Screenshot 2025-04-04 213809.png",
  "/Screenshot 2025-04-04 213809.png",
  "/Screenshot 2025-04-04 213809.png",
];

// Sample data for the right side (strategic)
const rightImages = [
  "/Screenshot 2025-04-04 213809.png",
  "/Screenshot 2025-04-04 213809.png",
  "/Screenshot 2025-04-04 213809.png",
  "/Screenshot 2025-04-04 213809.png",
  "/Screenshot 2025-04-04 213809.png",
  "/Screenshot 2025-04-04 213809.png",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1E0B40] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full ">
          <div className="h-[500px] w-full mb-8">
            <TransformationSplitter
              leftContent={{ images: leftImages }}
              rightContent={{ images: rightImages }}
              speed={40}
              splitterColor="#ff00ff"
            />
          </div>

          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-5xl mx-auto leading-tight">
              FROM DATA CHAOS TO STRATEGIC
              <br />
              POWER—LEVEL UP WITH INVIA
            </h1>

            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              See the bigger picture—Invia transforms raw data into clear, actionable insights. no more guesswork, just
              smarter decisions and real growth.
            </p>

            <div className="pt-4">
              <button className="bg-[#ff00ff] text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors">
                Unlock Your Insights
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
