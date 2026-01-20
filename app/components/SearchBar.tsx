'use client'

import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-16">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search games..."
            className="w-full bg-gray-900 border-2 border-gray-800 hover:border-red-600 focus:border-red-600 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none transition-all uppercase tracking-wide font-semibold"
          />
        </div>
      </div>
    </form>
  )
}