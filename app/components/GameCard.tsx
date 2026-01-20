interface Game {
  id: number
  name: string
  background_image: string
  rating: number
  genres: { id: number; name: string }[]
}

export default function GameCard({ game }: { readonly game: Game }) {
  return (
    <div className="group relative bg-gray-900 rounded-lg overflow-hidden border-2 border-gray-800 hover:border-red-600 transition-all duration-300 hover:scale-105">
      {/* Game Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={game.background_image} 
          alt={game.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Rating Badge */}
        <div className="absolute top-2 right-2 bg-black/80 px-3 py-1 rounded-full">
          <span className="text-orange-500 font-bold">⭐ {game.rating}</span>
        </div>
      </div>
      
      {/* Game Info */}
      <div className="p-4">
        <h3 className="text-xl font-black uppercase tracking-tight mb-2 text-white group-hover:text-red-600 transition-colors">
          {game.name}
        </h3>
        
        {/* Genres */}
        <div className="flex flex-wrap gap-2">
          {game.genres.slice(0, 3).map((genre) => (
            <span 
              key={genre.id}
              className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded uppercase tracking-wide"
            >
              {genre.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}