import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative mx-auto flex flex-col items-center justify-center py-16 sm:py-20 lg:pb-28 px-4 sm:px-6 lg:px-12 max-w-7xl">
      {/* Badge */}
      <div className="mb-6">
        <div className="relative p-[1px] overflow-hidden rounded-full bg-gradient-to-r from-rose-200 via-rose-500 to-rose-800 animate-pulse">
          <Badge className="relative px-6 py-2 text-base font-medium bg-white rounded-full transition-colors duration-200 hover:bg-gray-50 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-rose-600" />
            <span className="text-rose-600">Powered by AI</span>
          </Badge>
        </div>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center py-6">
        Transform PDFs into{" "}
        <span className="relative inline-block">
          <span className="relative z-10 px-2">concise</span>
          <span className="absolute inset-0 bg-rose-200/50 -rotate-2 -skew-y-2 rounded-md z-0" />
        </span>{" "}
        summaries
      </h1>

      {/* Subheading */}
      <h2 className="text-lg sm:text-xl lg:text-2xl text-center text-gray-600 max-w-4xl">
        Get a beautiful summary reel of a document in seconds
      </h2>

      {/* Call-to-action Button */}
      <Link href="/#pricing" passHref>
        <Button
          variant="link"
          className="mt-8 sm:mt-10 lg:mt-16 text-white text-base sm:text-lg lg:text-xl rounded-full px-8 sm:px-10 py-6 sm:py-7 bg-gradient-to-r from-rose-900 to-rose-500 hover:from-rose-500 hover:to-rose-900"
        >
          <span className="flex items-center gap-2">
            Try Summo
            <ArrowRight className="animate-pulse" />
          </span>
        </Button>
      </Link>
    </section>
  );
}
