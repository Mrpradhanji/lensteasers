export default function Gallery() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#222]">Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 max-w-4xl w-full">
        {/* Placeholder images */}
        {[1,2,3,4,5,6].map((i) => (
          <div key={i} className="bg-[#ececec] aspect-square rounded-lg flex items-center justify-center text-[#aaa] text-xl">
            Photo {i}
          </div>
        ))}
      </div>
      <p className="mt-8 text-[#888]">Update this section with your real photos!</p>
    </main>
  );
} 