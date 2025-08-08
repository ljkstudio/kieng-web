'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Home, Info, Settings, Briefcase, Phone, FileText, Shield, Map } from 'lucide-react'

export default function SitemapPage() {
  const { t } = useLanguage()

  const sitemapData = [
    {
      title: t('sitemap.main.title'),
      icon: Home,
      links: [
        { name: t('nav.home'), href: '/' },
        { name: t('nav.about'), href: '/about' },
        { name: t('nav.services'), href: '/services' },
        { name: t('nav.portfolio'), href: '/portfolio' },
        { name: t('nav.contact'), href: '/contact' },
        { name: t('nav.quote'), href: '/quote' },
      ]
    },
    {
      title: t('sitemap.services.title'),
      icon: Settings,
      links: [
        { name: t('services.filter.title'), href: '/services#filter' },
        { name: t('services.tank.title'), href: '/services#tank' },
        { name: t('services.ion.title'), href: '/services#ion' },
        { name: t('services.env.title'), href: '/services#env' },
      ]
    },
    {
      title: t('sitemap.company.title'),
      icon: Info,
      links: [
        { name: t('nav.about'), href: '/about' },
        { name: t('nav.portfolio'), href: '/portfolio' },
        { name: t('nav.contact'), href: '/contact' },
        { name: t('nav.quote'), href: '/quote' },
      ]
    },
    {
      title: t('sitemap.legal.title'),
      icon: Shield,
      links: [
        { name: t('footer.privacy'), href: '/privacy' },
        { name: t('footer.terms'), href: '/terms' },
        { name: t('footer.sitemap'), href: '/sitemap' },
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('sitemap.title')}
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              {t('sitemap.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sitemapData.map((section, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <section.icon size={24} className="text-primary-600 mr-3" />
                  <h3 className="text-lg font-bold text-secondary-900">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-secondary-600 hover:text-primary-600 transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6 text-center">
              {t('sitemap.quickLinks.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Phone size={32} className="text-primary-600 mx-auto mb-3" />
                <h3 className="font-semibold text-secondary-900 mb-2">
                  {t('sitemap.quickLinks.contact')}
                </h3>
                <Link href="/contact" className="text-primary-600 hover:text-primary-700 text-sm">
                  {t('sitemap.quickLinks.contactDesc')}
                </Link>
              </div>
              <div className="text-center">
                <FileText size={32} className="text-primary-600 mx-auto mb-3" />
                <h3 className="font-semibold text-secondary-900 mb-2">
                  {t('sitemap.quickLinks.quote')}
                </h3>
                <Link href="/quote" className="text-primary-600 hover:text-primary-700 text-sm">
                  {t('sitemap.quickLinks.quoteDesc')}
                </Link>
              </div>
              <div className="text-center">
                <Briefcase size={32} className="text-primary-600 mx-auto mb-3" />
                <h3 className="font-semibold text-secondary-900 mb-2">
                  {t('sitemap.quickLinks.portfolio')}
                </h3>
                <Link href="/portfolio" className="text-primary-600 hover:text-primary-700 text-sm">
                  {t('sitemap.quickLinks.portfolioDesc')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
