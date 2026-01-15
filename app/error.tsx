'use client'
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
        <p className="text-white/60 mb-8">An error occurred while loading this page.</p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}