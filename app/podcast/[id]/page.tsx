import { Metadata } from 'next'

interface PageProps {
  params: {
    id: string
  }
}

export const metadata: Metadata = {
  title: 'Podcast Episode',
  description: 'Podcast episode details',
}

export default async function PodcastPage({ 
  params,
}: PageProps) {
  // 即使现在没有实际的数据获取，我们也需要让组件是异步的
  // 这样可以满足 Next.js 的类型要求
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Podcast Episode {params.id}</h1>
        <p>This is a placeholder page for podcast episode {params.id}</p>
      </div>
    </main>
  )
}