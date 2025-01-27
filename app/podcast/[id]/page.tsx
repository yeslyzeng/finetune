export default async function PodcastPage({ 
    params 
  }: { 
    params: { id: string } 
  }) {
    return (
      <main className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h1>Podcast Episode {params.id}</h1>
          <p>This is a placeholder page for podcast episode {params.id}</p>
        </div>
      </main>
    )
  }