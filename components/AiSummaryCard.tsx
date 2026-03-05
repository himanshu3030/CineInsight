import { Gemini } from "@/lib/geminiClient";
import { unstable_cache } from "next/cache";
import { Sparkles, TrendingUp, MessageSquare } from "lucide-react";

const getCachedSummary = unstable_cache(
  async (title: string, reviews: string[]) => {
    return await Gemini(title, reviews);
  },
  ['gemini-summary-cache'],
//   { revalidate: 3600 } // Cache for 1 hour
);

export async function SummaryCard({ movietitle, combinedReviews }: { movietitle: string, combinedReviews: string[] }) {
  // If no reviews exist, don't show the card
  if (!combinedReviews.length) return null;

  const data = await getCachedSummary(movietitle, combinedReviews);

  // Helper for sentiment colors
  const sentimentColor = 
    data.sentiment === "Positive" ? "text-green-400" : 
    data.sentiment === "Negative" ? "text-red-400" : "text-amber-400";

  return (
    <div className="bg-[#1e1f25] text-white p-6 rounded-2xl max-w-4xl border border-gray-800 hover:ring-4 hover:ring-amber-400 hover:transition-all m-10 shadow-xl hover:shadow-amber-500/50">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="text-amber-400 w-5 h-5" />
        <h2 className="text-xl font-bold tracking-tight">AI Audience Insights</h2>
      </div>

      <div className="space-y-6">
        {/* Summary Section */}
        <div>
          <p className="text-gray-300 leading-relaxed italic">
            "{data.summary}"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-700">
          {/* Sentiment */}
          <div className="flex items-center gap-3">
            <TrendingUp className="text-gray-500 w-5 h-5" />
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold">Overall Sentiment</p>
              <p className={`font-bold ${sentimentColor}`}>{data.sentiment}</p>
            </div>
          </div>

          {/* Highlight */}
          <div className="flex items-center gap-3">
            <MessageSquare className="text-gray-500 w-5 h-5" />
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold">Key Highlight</p>
              <p className="text-gray-200 font-medium">{data.highlight}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}