'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail, Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const menuItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.products'), href: '#products' },
    { name: t('portfolio.badge'), href: '/portfolio' },
    { name: t('nav.contact'), href: '#contact' },
  ]

  const toggleLanguage = () => {
    setLanguage(language === 'ko' ? 'en' : 'ko')
  }

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-primary-600 text-white py-1">
        <div className="container-custom">
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center space-x-4 lg:space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={12} />
                <span className="hidden sm:inline">031-987-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={12} />
                <span className="hidden sm:inline">info@kieng.co.kr</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="text-xs">{t('nav.tagline')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-lg lg:text-xl font-bold text-primary-600 whitespace-nowrap">
                {language === 'ko' ? '경인엔지니어링' : 'KYOUNGIN ENG.'}
              </div>
            </div>

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              {menuItems.map((item) => (
                item.href.startsWith('/') ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200 whitespace-nowrap text-sm"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200 whitespace-nowrap text-sm"
                  >
                    {item.name}
                  </a>
                )
              ))}
              
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-secondary-700 hover:text-primary-600 transition-colors duration-200 whitespace-nowrap"
              >
                <Globe size={16} />
                <span className="font-medium text-sm">{language === 'ko' ? 'EN' : 'KO'}</span>
              </button>
              
              <button className="btn-primary whitespace-nowrap text-sm">
                {t('nav.quote')}
              </button>
            </div>

            {/* Mobile menu button - show on medium and smaller screens when desktop menu is hidden */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-secondary-700 hover:text-primary-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-secondary-200 py-3">
              <div className="flex flex-col space-y-3">
                {menuItems.map((item) => (
                  item.href.startsWith('/') ? (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-secondary-700 hover:text-primary-600 font-medium py-1 text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-secondary-700 hover:text-primary-600 font-medium py-1 text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )
                ))}
                
                {/* Mobile Language Switcher */}
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 text-secondary-700 hover:text-primary-600 py-1"
                >
                  <Globe size={16} />
                  <span className="font-medium text-sm">{language === 'ko' ? 'English' : '한국어'}</span>
                </button>
                
                <button className="btn-primary mt-3 text-sm">
                  {t('nav.quote')}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
} 