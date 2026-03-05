# AI Movie Insight Builder

An intelligent movie discovery and analysis application powered by AI. Search for movies, get detailed information, explore cast members, and receive AI-generated insights about films.

## 🎬 Features

- **Movie Search**: Search for movies using the TMDB database
- **AI-Powered Insights**: Get AI-generated summaries and analysis of movies using Google's Generative AI (Gemini)
- **Cast Information**: Browse cast members and their details
- **Responsive Design**: Beautiful, mobile-friendly interface built with Tailwind CSS
- **Real-time Search**: Search results with skeleton loading states
- **Movie Details**: Comprehensive movie information including ratings, descriptions, and metadata

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org) 16.1.6
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) 4
- **AI**: [Google Generative AI](https://ai.google.dev) (Gemini)
- **Movie Data**: [TMDB API](https://www.themoviedb.org/settings/api)
- **Icons**: [Lucide React](https://lucide.dev)
- **React**: 19.2.3

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js 18+ installed
- npm or yarn package manager
- TMDB API key ([Get one here](https://www.themoviedb.org/settings/api))
- Google Generative AI API key ([Get one here](https://ai.google.dev))

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd ai-movie-insight-builder
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env.local` file in the root directory and add your API keys:
```env
BaseUrl=https://api.themoviedb.org/3
API_Key=TMBD_api_key
imgUrl=https://image.tmdb.org/t/p/w500
GEMINI_API_KEY=Gemini_api_key
```

### 4. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 📝 Available Scripts

- `npm run dev` - Start the development server with hot-reload
- `npm run build` - Build the project for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 📂 Project Structure

```
├── app/               # Next.js app directory
│   ├── page.tsx       # Main page component
│   ├── layout.tsx     # Root layout
│   ├── globals.css    # Global styles
│   └── fetchcall.tsx  # API call handler
├── components/        # Reusable React components
│   ├── MovieCard.tsx       # Movie display card
│   ├── CastCard.tsx        # Cast member card
│   ├── SearchBar.tsx       # Search input component
│   ├── SearchManager.tsx   # Search logic handler
│   ├── AiSummaryCard.tsx   # AI-generated summary display
│   ├── SkeletonCard.tsx    # Loading skeleton
│   └── hero.tsx            # Hero section
├── lib/               # Utility and API functions
│   ├── tmdbApiCall.ts      # TMDB API integration
│   ├── geminiClient.ts     # Google Generative AI integration
├── types/             # TypeScript type definitions
│   └── types.ts            # Type interfaces
├── public/            # Static assets
└── [config files]     # Next.js, ESLint, PostCSS, Tailwind config
```

## 🔗 Key Components

### MovieCard
Displays movie information in a card format with image, title, rating, and description.

### AiSummaryCard
Shows AI-generated insights and summaries about movies powered by Gemini API.

### SearchBar
Provides an intuitive search interface for finding movies in the TMDB database.

### CastCard
Displays cast member information including profile images and character names.

## 🌐 API Integration

### TMDB API
Fetches real movie data including:
- Movie titles, descriptions, and ratings
- Poster images and metadata
- Cast and crew information

### Google Generative AI
Generates intelligent insights and summaries:
- Movie analysis and themes
- Recommendations based on movie content
- Character and plot summaries

## 🎯 Usage

1. **Search for a Movie**: Use the search bar to find movies by title
2. **View Details**: Click on a movie card to see more information
3. **Get AI Insights**: The AI Summary Card provides intelligent analysis
4. **Explore Cast**: Browse cast members associated with the movie

## 🚀 Deployment

### Deploy on Vercel
The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository on Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy!

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TMDB API Documentation](https://developers.themoviedb.org/3)
- [Google Generative AI Documentation](https://ai.google.dev/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

## 💡 Future Enhancements

- User authentication and personalized watchlist
- Advanced filtering and sorting options
- Movie recommendations based on AI analysis
- User reviews and ratings
- Dark mode support
- Offline mode
