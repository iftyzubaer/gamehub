# GameHub 🎮

A modern game discovery platform that helps gamers find their next favorite game. Built with Next.js 15 and powered by the RAWG Video Games Database API.

## ✨ Features

- 🔍 **Real-time Search** - Instant game search with dynamic results
- ⭐ **Top Rated Games** - Browse the highest-rated games across all platforms
- 🎨 **Bold Gaming UI** - Competitive, high-energy design aesthetic
- ⚡ **Server-Side Rendering** - Optimal performance with Next.js SSR
- 📱 **Fully Responsive** - Seamless experience on all devices
- 🎯 **Genre Tags** - Quick identification of game categories
- 🚀 **Fast Loading** - Optimized images and caching strategies

## 🛠️ Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **RAWG API** - Comprehensive game database
- **React Icons** - Professional iconography
- **Vercel** - Serverless deployment platform

## 🚀 Live Demo

**[View Live Demo](https://gamehub-iftyzubaer.vercel.app/)**

## 📂 Project Structure

```
gamehub/
├── app/
│   ├── components/      # Reusable components (GameCard, SearchBar, etc.)
│   ├── search/         # Search results page
│   ├── layout.tsx      # Root layout with Navbar and Footer
│   └── page.tsx        # Homepage with top-rated games
├── public/             # Static assets
└── .env.local         # Environment variables (not committed)
```

## 💻 Getting Started

### Prerequisites

- Node.js 18+ installed
- RAWG API key (free at [rawg.io/apidocs](https://rawg.io/apidocs))

### Installation

```bash
# Clone the repository
git clone https://github.com/iftyzubaer/gamehub.git

# Navigate to project
cd gamehub

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Add your RAWG API key to .env.local
NEXT_PUBLIC_RAWG_API_KEY=your_api_key_here

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🔑 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_RAWG_API_KEY=your_rawg_api_key_here
```

Get your free API key at [RAWG API Documentation](https://rawg.io/apidocs).

## 🌐 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add the `NEXT_PUBLIC_RAWG_API_KEY` environment variable
4. Deploy!

## 🎯 Features Breakdown

### Search Functionality
- Real-time search through 500,000+ games
- Debounced input for optimal API usage
- Clean results page with game cards

### Game Cards
- High-quality game images
- Rating badges with visual appeal
- Genre tags for quick categorization
- Hover effects for interactivity

### Performance
- Server-side rendering for initial page load
- Image optimization with Next.js Image
- API response caching (1 hour revalidation)
- Lazy loading for smooth scrolling

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Game data provided by [RAWG](https://rawg.io/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Deployed on [Vercel](https://vercel.com/)

## 👤 Author

**Ifty Zubaer**  
Software Engineering & Management Student  
Göteborg Universitet × Chalmers tekniska högskola

- Portfolio: [iftyzubaer.vercel.app](https://iftyzubaer.vercel.app)
- GitHub: [@iftyzubaer](https://github.com/iftyzubaer)
- LinkedIn: [iftyzubaer](https://linkedin.com/in/iftyzubaer)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/iftyzubaer/gamehub/issues).

---

⭐ Star this repo if you find it helpful!
