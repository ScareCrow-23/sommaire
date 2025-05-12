"use client";

import { FileText, Sparkles } from "lucide-react";
import { Button } from "../ui/button";

export default function DemoSection() {
  return (
    <section className="w-full bg-gray-50 py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          See Summo in Action
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-12">
          Upload a PDF and watch our AI transform it into a clear, concise
          summary in seconds.
        </p>

        {/* Demo Box */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl items-center">
          {/* Left: PDF Preview */}
          <div className="relative bg-white border border-gray-200 shadow-md rounded-xl p-6 h-full">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-rose-500 w-6 h-6" />
              <span className="text-gray-800 font-medium text-lg">
                Uploaded PDF
              </span>
            </div>
            <div className="h-64 overflow-hidden rounded-lg border border-dashed border-gray-300 bg-gray-100 p-4 text-sm text-gray-500">
              📄 “Market Trends 2024.pdf”
              <br />
              18 pages — including text, tables, and charts...
            </div>
          </div>

          {/* Right: Summary Preview */}
          <div className="relative bg-white border border-gray-200 shadow-md rounded-xl p-6 h-full">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="text-yellow-500 w-6 h-6" />
              <span className="text-gray-800 font-medium text-lg">
                AI Summary
              </span>
            </div>
            <div className="h-64 overflow-y-auto rounded-lg border border-gray-100 bg-gray-50 p-4 text-sm text-gray-700 space-y-2 leading-relaxed">
              <p>
                • The global market is projected to grow at a CAGR of 8.2% by
                2027.
              </p>
              <p>• North America leads adoption due to tech advancements.</p>
              <p>• Key challenges: supply chain disruptions & inflation.</p>
              <p>• Opportunities lie in AI integration and sustainability.</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Button className="mt-12 px-8 py-4 text-lg rounded-full bg-gradient-to-r from-rose-600 to-rose-400 text-white hover:from-rose-700 hover:to-rose-500 transition">
          Try with Your PDF
        </Button>
      </div>
    </section>
  );
}
