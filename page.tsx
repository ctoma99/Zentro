import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ZentroHomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 py-10">
      <header className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Boost Your Workflow with Zentro AI Kits
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Hand-crafted prompt templates and automation kits that save you hours.
        </p>
        <a
          href="#"
          className="inline-block bg-black text-white text-lg px-6 py-4 rounded-2xl"
        >
          Get the Kit
        </a>
      </header>

      <section className="max-w-5xl mx-auto mt-16 grid gap-6 grid-cols-1 md:grid-cols-3">
        {[
          {
            title: "Ready-to-Use Prompts",
            desc: "Plug-and-play prompts tailored for freelancers, creators, marketers, and more.",
          },
          {
            title: "Organized in Notion",
            desc: "Instant access, beautifully organized — no setup needed.",
          },
          {
            title: "Save Time & Focus",
            desc: "Stop reinventing the wheel. Use Zentro to do more in less time.",
          },
        ].map((feature, i) => (
          <div key={i} className="rounded-2xl shadow-sm p-6 border">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="text-green-500" />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </div>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </section>

      <footer className="text-center mt-20 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} ZentroAI. All rights reserved.
      </footer>
    </div>
  );
}
