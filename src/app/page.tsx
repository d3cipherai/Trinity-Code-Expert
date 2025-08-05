export default function Home() {
  return (
    <main className="min-h-screen trinity-gradient flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="trinity-card p-8 awaken-glow">
          <h1 className="text-6xl font-bold text-white mb-6">
            Trinity Awaken
          </h1>
          <p className="text-xl text-white/80 mb-8">
            A powerful Next.js application built with modern technologies
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="trinity-card p-6">
              <h3 className="text-2xl font-semibold text-white mb-3">⚡ Fast</h3>
              <p className="text-white/70">
                Built with Next.js 15 and Turbopack for lightning-fast development
              </p>
            </div>
            <div className="trinity-card p-6">
              <h3 className="text-2xl font-semibold text-white mb-3">🎨 Beautiful</h3>
              <p className="text-white/70">
                Styled with Tailwind CSS for modern, responsive design
              </p>
            </div>
            <div className="trinity-card p-6">
              <h3 className="text-2xl font-semibold text-white mb-3">🔧 TypeScript</h3>
              <p className="text-white/70">
                Type-safe development with full TypeScript support
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
