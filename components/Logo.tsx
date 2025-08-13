import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const { language } = useLanguage()
  
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  }
  
  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl'
  }
  
  // Footer에서 사용할 때를 위한 색상 클래스
  const isFooter = className.includes('text-white')
  const textColor = isFooter ? 'text-white' : 'text-primary-600'

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Image */}
      <div className={`${sizeClasses[size]} flex-shrink-0 relative`}>
        {language === 'ko' ? (
          // LOGO1 - 한국어용 (경인엔지니어링)
          <Image
            src="/LOGO1/image 213.png"
            alt="경인엔지니어링 로고"
            fill
            className="object-contain"
            priority
          />
        ) : (
          // LOGO2 - 영어용 (KYOUNGIN ENG)
          <Image
            src="/LOGO2/image 215.png"
            alt="KYOUNGIN ENG Logo"
            fill
            className="object-contain"
            priority
          />
        )}
      </div>
      
      {/* Logo Text */}
      <div className={`font-bold ${textColor} ${textSizes[size]} whitespace-nowrap`}>
        {language === 'ko' ? '경인엔지니어링' : 'KYOUNGIN ENGINEERING'}
      </div>
    </div>
  )
}
