'use client'

import { ArrowRight, PlayCircle, Settings, Zap, Shield } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const { t } = useLanguage()
  const videoRef = useRef<HTMLVideoElement>(null)
  
  useEffect(() => {
    const video = videoRef.current
    if (video) {
      // 비디오가 로드되면 재생 시도
      const playVideo = async () => {
        try {
          await video.play()
          console.log('Video started playing successfully')
        } catch (error) {
          console.log('Auto-play prevented:', error)
        }
      }
      
      // 비디오 메타데이터가 로드된 후 재생 시도
      video.addEventListener('loadedmetadata', playVideo)
      
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      return () => {
        video.removeEventListener('loadedmetadata', playVideo)
      }
    }
  }, [])
  
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Video Background */}
      {/* Fallback Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 z-0"></div>
      
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay={true}
        muted={true}
        loop={true}
        playsInline={true}
        controls={false}
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover z-10"
        onError={(e) => console.error('Video failed to load:', e)}
        onLoadStart={() => console.log('Video loading started')}
        onCanPlay={() => console.log('Video can play')}
        onLoadedData={() => console.log('Video loaded data')}
        onPlay={() => console.log('Video started playing')}
        style={{ objectFit: 'cover' }}
      >
        <source src="/videos/kieng_video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Video Overlay */}
      <div className="absolute inset-0 bg-black/50 z-20"></div>
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-30"></div>
      
      <div className="container-custom relative z-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/30">
              <Zap size={16} className="mr-2" />
              {t('hero.badge')}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              {t('hero.title1')}
              <span className="text-primary-400 block">
                {t('hero.title2')}
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed drop-shadow-md">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-primary-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center shadow-lg whitespace-nowrap">
                {t('hero.contact')}
                <ArrowRight size={20} className="ml-2" />
              </button>
              <button className="border-2 border-white/30 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-medium hover:bg-white/10 backdrop-blur-sm transition-all duration-200 flex items-center justify-center whitespace-nowrap">
                <PlayCircle size={20} className="mr-2" />
                {t('hero.video')}
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">24+</div>
                <div className="text-sm text-gray-300">{t('hero.stats.experience')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">2,244</div>
                <div className="text-sm text-gray-300">{t('hero.stats.factory')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">ISO</div>
                <div className="text-sm text-gray-300">{t('hero.stats.iso')}</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Feature Cards */}
          <div className="relative animate-fade-in lg:flex justify-end">
            <div className="space-y-6 max-w-md">
              {/* Feature Cards with Glass Effect */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary-500/80 rounded-lg flex items-center justify-center">
                    <Shield size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{t('hero.feature.iso')}</h3>
                    <p className="text-gray-300 text-sm">{t('hero.feature.iso.desc')}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-accent-500/80 rounded-lg flex items-center justify-center">
                    <Zap size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{t('hero.feature.support')}</h3>
                    <p className="text-gray-300 text-sm">{t('hero.feature.support.desc')}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-secondary-500/80 rounded-lg flex items-center justify-center">
                    <Settings size={24} className="text-white animate-spin-slow" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{t('hero.feature.custom')}</h3>
                    <p className="text-gray-300 text-sm">{t('hero.feature.custom.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 