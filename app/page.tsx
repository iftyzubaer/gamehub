import { FaGamepad, FaTrophy } from 'react-icons/fa'
import GameCard from './components/GameCard'
import SearchBar from './components/SearchBar'

async function getPopularGames() {
  const apiKey = process.env.NEXT_PUBLIC_RAWG_API_KEY
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${apiKey}&page_size=12&ordering=-rating`,
    { next: { revalidate: 3600 } }
  )
  
  if (!res.ok) {
    throw new Error('Failed to fetch games')
  }
  
  return res.json()
}

export default async function Home() {
  const data = await getPopularGames()
  const games = data.results

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="h-1 w-full bg-gradient-to-r from-red-600 via-orange-500 to-red-600 mb-8"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="relative">
            <FaGamepad className="text-7xl text-red-600" />
            <FaTrophy className="absolute -top-2 -right-2 text-2xl text-orange-500 animate-bounce" />
          </div>
          <h1 className="text-7xl font-black uppercase tracking-tight">
            <span className="text-white">Game</span>
            <span className="text-red-600">Hub</span>
          </h1>
        </div>
        
        <p className="text-center text-gray-400 text-xl mb-3 uppercase tracking-widest font-bold">
          Dominate. Discover. Play.
        </p>
        <p className="text-center text-gray-500 text-sm mb-12">
          Find your competitive edge across all platforms
        </p>
        
        {/* Search Bar Component */}
        <SearchBar />
        
        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center hover:border-red-600 transition-colors">
            <p className="text-3xl font-black text-red-600">10K+</p>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Games</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center hover:border-orange-500 transition-colors">
            <p className="text-3xl font-black text-orange-500">500+</p>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Genres</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center hover:border-red-600 transition-colors">
            <p className="text-3xl font-black text-red-600">24/7</p>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Updated</p>
          </div>
        </div>
        
        {/* Top Rated Games */}
        <div className="mb-8">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-6 text-center">
            <span className="text-red-600">Top Rated</span> Games
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {games.map((game: any) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}