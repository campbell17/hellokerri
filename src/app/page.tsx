export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4 perspective-1000">
      <div className="flex gap-0 w-full max-w-[42.5vw] md:max-w-[20vw] h-[60vh]">
        {[1, 2, 3, 4, 5].map((tile) => (
          <div
            key={tile}
            style={{ backgroundColor: '#e5e7eb' }}
            className="flex-1 rounded-lg transition-all duration-150 ease-out hover:scale-110 hover:translate-z-10 hover:bg-gray-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:z-10 border border-gray-300 transform-gpu relative"
          />
        ))}
      </div>
    </main>
  );
}
