import { Metadata } from 'next'
import { Play, SkipBack, SkipForward, Volume2 } from 'lucide-react'

type Props = {
  params: {
    id: string
  }
}

// Metadata generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Episode ${params.id} | Finetune Podcast`,
    description: 'Listen to this episode of Finetune Podcast',
  }
}

// Data fetching (if needed)
async function getPodcastEpisode(id: string) {
  // TODO: Implement actual data fetching
  return {
    id,
    title: `Episode ${id}`,
    channelName: 'Finetune Channel',
    transcript: 'This is the transcript of the episode...',
  }
}

export default async function PodcastPage({ params }: Props) {
  // Fetch data
  const episode = await getPodcastEpisode(params.id)

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Cover Image */}
          <div className="aspect-square bg-muted rounded-lg shadow-md"></div>
          
          {/* Episode Information */}
          <div className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold">{episode.title}</h1>
              <p className="text-muted-foreground">{episode.channelName}</p>
            </div>

            <div className="bg-card rounded-lg p-4 shadow-sm">
              <h2 className="font-semibold mb-2">Transcript</h2>
              <p className="text-muted-foreground">
                {episode.transcript}
              </p>
            </div>
          </div>
        </div>

        {/* Audio Player Controls - This should be a client component in practice */}
        <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t p-4">
          <div className="max-w-4xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-4 h-1 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-primary rounded-full transition-all"></div>
            </div>
            
            {/* Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="text-sm font-medium hover:text-primary transition-colors">
                  1x
                </button>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-muted rounded-full transition-colors">
                    <SkipBack className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
                    <Play className="w-6 h-6" />
                  </button>
                  <button className="p-2 hover:bg-muted rounded-full transition-colors">
                    <SkipForward className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {/* Volume Control */}
              <div className="flex items-center gap-2">
                <Volume2 className="w-5 h-5" />
                <div className="w-24 h-1 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-primary rounded-full transition-all"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}