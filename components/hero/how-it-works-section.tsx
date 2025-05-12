import { UploadCloud, Sparkles, Download } from "lucide-react";

const steps = [
  {
    icon: <UploadCloud className="w-8 h-8 text-rose-500" />,
    title: "Upload PDF",
    description:
      "Drag & drop your PDF or select from your device. No signup required.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-yellow-500" />,
    title: "AI Summarizes",
    description:
      "Our AI instantly analyzes and condenses your document into key insights.",
  },
  {
    icon: <Download className="w-8 h-8 text-green-500" />,
    title: "Download or Share",
    description: "Get your summary as text or PDF. Easily share with others.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          How It Works
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          Summarizing documents has never been easier. Just follow three simple
          steps.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-6 py-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4 bg-gray-100 rounded-full p-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
