import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full bg-gradient-to-r from-rose-600 to-rose-400 text-white py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Ready to summarize smarter?
        </h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10">
          Upload a PDF and let Summo turn it into a short, powerful summary in
          seconds — powered by AI.
        </p>
        <Button
          asChild
          className="text-lg px-8 py-4 rounded-full bg-white text-rose-600 hover:bg-gray-100 transition"
        >
          <Link href="/#pricing" className="flex items-center gap-2">
            Try Summo Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
