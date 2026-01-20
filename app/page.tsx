import { FaTrophy } from 'react-icons/fa'
import GameCard from './components/GameCard'
import SearchBar from './components/SearchBar'

async function getPopularGames() {
  try {
    const apiKey = process.env.NEXT_PUBLIC_RAWG_API_KEY
    
    if (!apiKey) {
      console.error('RAWG API key is missing')
      return { results: [] }
    }
    
    const res = await fetch(
      `https://api.rawg.io/api/games?key=${apiKey}&page_size=12&ordering=-rating`,
      { next: { revalidate: 3600 } }
    )
    
    if (!res.ok) {
      console.error('Failed to fetch games:', res.status, res.statusText)
      return { results: [] }
    }
    
    return res.json()
  } catch (error) {
    console.error('Error fetching games:', error)
    return { results: [] }
  }
}

export default async function Home() {
  const data = await getPopularGames()
  const games = data.results || []

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-red-900/20 to-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaTrophy className="text-4xl text-orange-500 animate-bounce" />
          </div>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-4">
            <span className="text-red-600">Dominate.</span> <span className="text-white">Discover.</span> <span className="text-red-600">Play.</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Find your competitive edge across all platforms
          </p>
          
          {/* Search Bar */}
          <SearchBar />
        </div>
      </div>
      
      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-16">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center hover:border-red-600 transition-colors">
            <p className="text-4xl font-black text-red-600">10K+</p>
            <p className="text-sm text-gray-500 uppercase tracking-wide mt-2">Games</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center hover:border-orange-500 transition-colors">
            <p className="text-4xl font-black text-orange-500">500+</p>
            <p className="text-sm text-gray-500 uppercase tracking-wide mt-2">Genres</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center hover:border-red-600 transition-colors">
            <p className="text-4xl font-black text-red-600">24/7</p>
            <p className="text-sm text-gray-500 uppercase tracking-wide mt-2">Updated</p>
          </div>
        </div>
        
        {/* Top Rated Games */}
        <div>
          <h2 className="text-3xl font-black uppercase tracking-tight mb-8 text-center">
            <span className="text-red-600">Top Rated</span> Games
          </h2>
          
          {games.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {games.map((game: any) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Unable to load games at the moment. Please try again later.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}