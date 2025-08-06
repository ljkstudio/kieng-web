'use client'

import { Award, Users, Target, Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AboutSection() {
  const { t } = useLanguage()
  
  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'ISO 9001 Certification System'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced Engineers'
    },
    {
      icon: Target,
      title: 'On-time Delivery',
      description: '99% Schedule Compliance'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'International Partnerships'
    }
  ]

  return (
    <section id="about" className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-6">
              {t('about.badge')}
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              {t('about.title1')}
              <span className="text-primary-600 block">{t('about.title2')}</span>
            </h2>
            
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              {t('about.description')}
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-1">{t('about.partnership.title')}</h4>
                  <p className="text-secondary-600">{t('about.partnership.desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent-500 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-1">{t('about.certification.title')}</h4>
                  <p className="text-secondary-600">{t('about.certification.desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-secondary-500 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-1">{t('about.quality.title')}</h4>
                  <p className="text-secondary-600">{t('about.quality.desc')}</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                {t('about.history')}
              </button>
              <button className="btn-secondary">
                {t('about.certificates')}
              </button>
            </div>
          </div>
          
          {/* Right Content - Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon size={24} className="text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-secondary-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-secondary-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              {t('about.numbers.title')}
            </h3>
            <p className="text-lg text-secondary-600">
              {t('about.numbers.desc')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">24+</div>
              <div className="text-secondary-600 font-medium">{t('about.stats.experience')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-500 mb-2">2,244</div>
              <div className="text-secondary-600 font-medium">{t('about.stats.factory')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary-600 mb-2">3</div>
              <div className="text-secondary-600 font-medium">{t('about.stats.iso')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-700 mb-2">2021</div>
              <div className="text-secondary-600 font-medium">{t('about.stats.newFactory')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 