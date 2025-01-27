export default async function PodcastPage({ 
    params 
  }: { 
    params: { id: string } 
  }) {
    // 临时占位数据
    const episode = {
      id: params.id,
      title: `Episode ${params.id}`,
      channelName: 'Finetune Channel',
      transcript: 'This is the transcript of the episode...',
    }
  
    return (
      <main className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h1>Podcast Episode {params.id}</h1>
          <p>This is a placeholder page for podcast episode {params.id}</p>
        </div>
      </main>
    )
  }