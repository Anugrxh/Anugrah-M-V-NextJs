import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-8">Page Not Found</h2>
        <p className="text-white/60 mb-8">The page you're looking for doesn't exist.</p>
        <Link 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}