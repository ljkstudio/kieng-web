'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { 
  Award, 
  Users, 
  Building, 
  Globe, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  Calendar,
  MapPin,
  Phone,
  Mail,
  FileText,
  Download,
  Star,
  TrendingUp,
  Target,
  Heart,
  Lightbulb,
  Gauge,
  X
} from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('history')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const companyHistory = [
    {
      year: '2000',
      title: t('about.history.2000.title'),
      description: t('about.history.2000.desc')
    },
    {
      year: '2005',
      title: t('about.history.2005.title'),
      description: t('about.history.2005.desc')
    },
    {
      year: '2010',
      title: t('about.history.2010.title'),
      description: t('about.history.2010.desc')
    },
    {
      year: '2015',
      title: t('about.history.2015.title'),
      description: t('about.history.2015.desc')
    },
    {
      year: '2020',
      title: t('about.history.2020.title'),
      description: t('about.history.2020.desc')
    },
    {
      year: '2024',
      title: t('about.history.2024.title'),
      description: t('about.history.2024.desc')
    }
  ]

  const certifications = [
    {
      name: 'ISO 9001',
      description: '품질경영시스템',
      year: '2005',
      icon: Shield
    },
    {
      name: 'ISO 14001',
      description: '환경경영시스템',
      year: '2015',
      icon: Globe
    },
    {
      name: 'ISO 45001',
      description: '안전보건경영시스템',
      year: '2020',
      icon: Users
    },
    {
      name: 'ASME U Stamp',
      description: '압력용기 제조 인증',
      year: '진행중',
      icon: Building
    }
  ]

  const values = [
    {
      icon: Target,
      title: t('about.values.customer.title'),
      description: t('about.values.customer.desc')
    },
    {
      icon: Lightbulb,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.desc')
    },
    {
      icon: Heart,
      title: t('about.values.social.title'),
      description: t('about.values.social.desc')
    },
    {
      icon: Users,
      title: t('about.values.talent.title'),
      description: t('about.values.talent.desc')
    }
  ]

  const stats = [
    { number: '24', label: t('about.stats.experience'), icon: Calendar },
    { number: '500+', label: t('about.stats.projects'), icon: CheckCircle },
    { number: '50+', label: t('about.stats.international'), icon: Globe },
    { number: '100+', label: t('about.stats.clients'), icon: Building }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container-custom">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary-500 rounded-full text-white text-sm font-medium mb-4">
              {t('about.badge')}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('about.title1')} {t('about.title2')}
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              {t('about.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} className="text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-secondary-900 mb-2">{stat.number}</div>
                <div className="text-secondary-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              {t('about.values.title')}
            </h2>
            <p className="text-lg text-secondary-600">
              {t('about.values.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon size={32} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">{value.title}</h3>
                <p className="text-secondary-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              {t('about.history.title')}
            </h2>
            <p className="text-lg text-secondary-600">
              {t('about.history.subtitle')}
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200"></div>
            <div className="space-y-8">
              {companyHistory.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 px-8">
                    <div className={`bg-white p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-2xl font-bold text-primary-600 mb-2">{item.year}</div>
                      <h3 className="text-lg font-bold text-secondary-900 mb-2">{item.title}</h3>
                      <p className="text-secondary-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2 px-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              {t('about.certifications.title')}
            </h2>
            <p className="text-lg text-secondary-600">
              {t('about.certifications.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ISO 9001 */}
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={40} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">{t('about.certifications.iso9001.title')}</h3>
              <p className="text-secondary-600 mb-4">{t('about.certifications.iso9001.desc')}</p>
              <div className="mb-4">
                <img 
                  src="/images/certification/250807_ISO9001.png" 
                  alt="ISO 9001 인증서" 
                  className="w-full h-48 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setSelectedImage('/images/certification/250807_ISO9001.png')}
                />
              </div>
              <div className="text-sm text-primary-600 font-medium">{t('about.certifications.iso9001.year')}</div>
            </div>

            {/* ISO 14001 */}
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe size={40} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">{t('about.certifications.iso14001.title')}</h3>
              <p className="text-secondary-600 mb-4">{t('about.certifications.iso14001.desc')}</p>
              <div className="mb-4">
                <img 
                  src="/images/certification/250807_ISO14001.png" 
                  alt="ISO 14001 인증서" 
                  className="w-full h-48 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setSelectedImage('/images/certification/250807_ISO14001.png')}
                />
              </div>
              <div className="text-sm text-primary-600 font-medium">{t('about.certifications.iso14001.year')}</div>
            </div>

            {/* ISO 45001 */}
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={40} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">{t('about.certifications.iso45001.title')}</h3>
              <p className="text-secondary-600 mb-4">{t('about.certifications.iso45001.desc')}</p>
              <div className="mb-4">
                <img 
                  src="/images/certification/250807_ISO45001.png" 
                  alt="ISO 45001 인증서" 
                  className="w-full h-48 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setSelectedImage('/images/certification/250807_ISO45001.png')}
                />
              </div>
              <div className="text-sm text-primary-600 font-medium">{t('about.certifications.iso45001.year')}</div>
            </div>

            {/* 공장등록증 */}
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building size={40} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">{t('about.certifications.factory.title')}</h3>
              <p className="text-secondary-600 mb-4">{t('about.certifications.factory.desc')}</p>
              <div className="mb-4">
                <img 
                  src="/images/certification/공장등록증.png" 
                  alt="공장등록증" 
                  className="w-full h-48 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setSelectedImage('/images/certification/공장등록증.png')}
                />
              </div>
              <div className="text-sm text-primary-600 font-medium">{t('about.certifications.factory.year')}</div>
            </div>
          </div>

          {/* 인증서 설명 */}
          <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-secondary-900 mb-6 text-center">
              {t('about.certifications.meaning.title')}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={24} className="text-green-600" />
                </div>
                <h4 className="font-bold text-secondary-900 mb-2">{t('about.certifications.quality.title')}</h4>
                <p className="text-secondary-600 text-sm">
                  {t('about.certifications.quality.desc')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe size={24} className="text-blue-600" />
                </div>
                <h4 className="font-bold text-secondary-900 mb-2">{t('about.certifications.environment.title')}</h4>
                <p className="text-secondary-600 text-sm">
                  {t('about.certifications.environment.desc')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={24} className="text-orange-600" />
                </div>
                <h4 className="font-bold text-secondary-900 mb-2">{t('about.certifications.safety.title')}</h4>
                <p className="text-secondary-600 text-sm">
                  {t('about.certifications.safety.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              {t('about.partnerships.title')}
            </h2>
            <p className="text-lg text-secondary-600">
              {t('about.partnerships.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">{t('about.partnerships.purolite.title')}</h3>
              <p className="text-secondary-600 mb-4">
                {t('about.partnerships.purolite.desc')}
              </p>
              <ul className="space-y-2 text-secondary-600">
                <li>• {t('about.partnerships.purolite.item1')}</li>
                <li>• {t('about.partnerships.purolite.item2')}</li>
                <li>• {t('about.partnerships.purolite.item3')}</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-accent-50 to-accent-100 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">{t('about.partnerships.calgon.title')}</h3>
              <p className="text-secondary-600 mb-4">
                {t('about.partnerships.calgon.desc')}
              </p>
              <ul className="space-y-2 text-secondary-600">
                <li>• {t('about.partnerships.calgon.item1')}</li>
                <li>• {t('about.partnerships.calgon.item2')}</li>
                <li>• {t('about.partnerships.calgon.item3')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary-900 to-secondary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('about.cta.title')}
          </h2>
          <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
            {t('about.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-primary-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition-colors">
              {t('about.cta.contact')}
            </Link>
            <Link href="/services" className="border-2 border-primary-200 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-500 transition-colors">
              {t('about.cta.services')}
            </Link>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt={t('about.certifications.meaning.title')}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
