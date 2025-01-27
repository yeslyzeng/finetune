import { Metadata } from 'next'

interface PageProps {
  params: {
    id: string
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

export const metadata: Metadata = {
  title: 'Podcast Episode',
  description: 'Podcast episode details',
}

export default function PodcastPage({ 
  params,
  searchParams,
}: PageProps) {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Podcast Episode {params.id}</h1>
        <p>This is a placeholder page for podcast episode {params.id}</p>
      </div>
    </main>
  )
}