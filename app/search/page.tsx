import { FaGamepad } from 'react-icons/fa'
import GameCard from '../components/GameCard'
import SearchBar from '../components/SearchBar'
import Link from 'next/link'

async function searchGames(query: string) {
  const apiKey = process.env.NEXT_PUBLIC_RAWG_API_KEY
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${apiKey}&search=${encodeURIComponent(query)}&page_size=12`,
    { cache: 'no-store' }
  )
  
  if (!res.ok) {
    throw new Error('Failed to search games')
  }
  
  return res.json()
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>
}) {
  // Await the searchParams (Next.js 15 requirement)
  const params = await searchParams
  const query = params.q || ''
  
  if (!query) {
    return (
      <main className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-xl mb-4">Please enter a search term</p>
          <Link href="/" className="text-red-600 hover:text-orange-500 transition-colors">
            ← Back to home
          </Link>
        </div>
      </main>
    )
  }
  
  const data = await searchGames(query)
  const games = data.results

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="h-1 w-full bg-gradient-to-r from-red-600 via-orange-500 to-red-600 mb-8"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Link href="/" className="flex items-center justify-center gap-4 mb-8 hover:opacity-80 transition-opacity">
          <FaGamepad className="text-5xl text-red-600" />
          <h1 className="text-5xl font-black uppercase tracking-tight">
            <span className="text-white">Game</span>
            <span className="text-red-600">Hub</span>
          </h1>
        </Link>
        
        {/* Search Bar */}
        <SearchBar />
        
        {/* Results */}
        <div className="mb-8">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-2">
            Search Results for: <span className="text-red-600">"{query}"</span>
          </h2>
          <p className="text-gray-500 mb-6">Found {games.length} games</p>
          
          {games.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {games.map((game: any) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-xl">No games found for "{query}"</p>
              <Link href="/" className="text-red-600 hover:text-orange-500 transition-colors mt-4 inline-block">
                ← Back to home
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}