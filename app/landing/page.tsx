'use client';
import React from 'react'
import { ArrowRight, Headphones, MessageCircle, Settings, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Spline from '@splinetool/react-spline'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function Home() {
  const router = useRouter();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const cardVariants = {
    hidden: {
      scale: 1.2,
      opacity: 0,
      filter: 'blur(10px)',
    },
    visible: {
      scale: 1,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div className="relative">
      {/* Hero Section with Spline */}
      <div className="relative w-full h-screen overflow-hidden bg-background">
        {/* Spline Container */}
        <div className="absolute inset-0" style={{ 
          width: '100vw', 
          height: '100vh',
          transform: 'scale(2.0) translate(20%, 3%)',
          transformOrigin: 'center center'
        }}>
          <Spline 
            scene="https://prod.spline.design/JYAZthzM7ovkYIga/scene.splinecode"
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col">
          <nav className="w-full">
            <div className="container mx-auto px-4 h-16 flex items-center">
              <Image
                src="/logo.jpg"
                alt="Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
          </nav>

          <main className="flex-1 flex items-center -mt-20">
            <div className="container mx-auto pl-4">
              <div className="max-w-4xl">
                <div className="font-lexend font-bold mb-6">
                  <div className="text-[#333333] whitespace-nowrap text-7xl">
                    From Pitch to <span className="text-[#333333]">Funded</span>
                  </div>
                  <div className="text-7xl md:text-8xl">
                    <span className="bg-gradient-to-r from-[#FF6B3D] to-[#FF9F7C] bg-clip-text text-transparent">FinTune</span>
                    <span className="text-[#333333]"> it</span>
                  </div>
                </div>
                <p className="text-xl md:text-2xl text-gray-600 mb-8">
                  Professional AI-powered platform for converting text into natural speech
                </p>
                <div className="flex gap-4">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-[#FF6B3D] to-[#FF9F7C] text-white hover:opacity-90 px-8 py-6 text-lg rounded-full"
                    onClick={() => router.push('/studio')}
                  >
                    Get Started <ArrowRight className="ml-2" />
                  </Button>
                  <Link href="/marketplace">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="px-8 py-6 text-lg rounded-full border-[#FF6B3D] text-[#FF6B3D] bg-white hover:text-[#FF6B3D] hover:bg-white hover:border-[#FF6B3D]"
                    >
                      Browse Podcast
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Features Section */}
      <section className="w-full py-24 bg-gradient-to-b from-white to-[#FFF3E0]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="font-lexend text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B3D] to-[#FF9F7C]">
              Features that Spark Joy
            </h2>
          </div>
          
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Natural Voice Synthesis */}
            <motion.div 
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0 }}
              className="bg-white rounded-2xl p-10 border border-[#FFE4D6] hover:border-[#FF6B3D] transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#FFF3E0] flex items-center justify-center">
                  <Headphones className="w-8 h-8 text-[#FF6B3D]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#333333]">Natural Voice Synthesis</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Advanced AI technology for creating human-like voices with natural intonation.</p>
                </div>
              </div>
            </motion.div>

            {/* Multiple Languages */}
            <motion.div 
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-10 border border-[#FFE4D6] hover:border-[#FF6B3D] transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#FFF3E0] flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-[#FF6B3D]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#333333]">Multiple Languages</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Support for various languages and accents, ensuring global accessibility.</p>
                </div>
              </div>
            </motion.div>

            {/* Custom Voice Creation */}
            <motion.div 
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-10 border border-[#FFE4D6] hover:border-[#FF6B3D] transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#FFF3E0] flex items-center justify-center">
                  <Settings className="w-8 h-8 text-[#FF6B3D]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#333333]">Custom Voice Creation</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Create and customize unique voice profiles tailored to your needs.</p>
                </div>
              </div>
            </motion.div>

            {/* Real-time Processing */}
            <motion.div 
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl p-10 border border-[#FFE4D6] hover:border-[#FF6B3D] transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#FFF3E0] flex items-center justify-center">
                  <Clock className="w-8 h-8 text-[#FF6B3D]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#333333]">Real-time Processing</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Quick and efficient conversion of text to speech with minimal latency.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
