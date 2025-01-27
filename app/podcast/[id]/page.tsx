import { Metadata } from 'next'

// 模拟的播客数据类型
interface PodcastEpisode {
  id: string
  title: string
  description: string
  duration: string
  publishDate: string
  audioUrl: string
}

interface PageProps {
  params: {
    id: string
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

// 模拟获取数据的函数
async function getPodcastEpisode(id: string): Promise<PodcastEpisode> {
  // 模拟 API 延迟
  await new Promise(resolve => setTimeout(resolve, 500))
  
  return {
    id,
    title: `Episode ${id}: Understanding TypeScript`,
    description: 'In this episode, we dive deep into TypeScript fundamentals and best practices.',
    duration: '45:30',
    publishDate: '2024-01-27',
    audioUrl: 'https://example.com/podcast.mp3'
  }
}

export const metadata: Metadata = {
  title: 'Podcast Episode',
  description: 'Podcast episode details',
}

export default async function PodcastPage({ params }: PageProps) {  // 这里只使用 params
  // 获取播客数据
  const episode = await getPodcastEpisode(params.id)

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4">{episode.title}</h1>
        
        <div className="flex items-center gap-4 text-gray-600 mb-6">
          <span>{episode.publishDate}</span>
          <span>•</span>
          <span>{episode.duration}</span>
        </div>

        <div className="mb-8">
          <p className="text-gray-700">{episode.description}</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <audio 
            controls 
            className="w-full"
            src={episode.audioUrl}
          >
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </main>
  )
}
