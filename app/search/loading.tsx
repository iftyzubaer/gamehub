export default function Loading() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="h-1 w-full bg-gradient-to-r from-red-600 via-orange-500 to-red-600 mb-8"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="animate-pulse">
            <div className="h-16 w-64 bg-gray-800 rounded"></div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-red-600 border-t-transparent"></div>
          <p className="text-gray-500 mt-4 uppercase tracking-wide">Searching games...</p>
        </div>
      </div>
    </main>
  )
}