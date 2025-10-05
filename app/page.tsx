"use client"

import { useState, useEffect } from "react"
import { DeveloperCard } from "@/components/developer-card"
import { Pagination } from "@/components/pagination"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { fetchDevelopers } from "@/lib/mock-data"
import type { Developer } from "@/lib/mock-data"

export default function HomePage() {
  const [developers, setDevelopers] = useState<Developer[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadDevelopers() {
      setLoading(true)
      // Replace this with actual API call: const response = await fetch(`/api/developers?page=${currentPage}`);
      const data = await fetchDevelopers(currentPage, 9)
      setDevelopers(data.developers)
      setTotalPages(data.totalPages)
      setLoading(false)

      // Scroll to top on page change
      window.scrollTo({ top: 0, behavior: "smooth" })
    }

    loadDevelopers()
  }, [currentPage])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Find Your Next Remote Developer</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Browse talented developers from around the world. All vetted, experienced, and ready to join your team.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="h-80 bg-card border border-border rounded-lg animate-pulse" />
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {developers.map((developer) => (
                <DeveloperCard key={developer.id} developer={developer} />
              ))}
            </div>

            {totalPages > 1 && (
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}
