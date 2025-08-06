'use client'

import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ]

  const services = [
    { name: t('services.filter.title'), href: '#' },
    { name: t('services.tank.title'), href: '#' },
    { name: t('services.ion.title'), href: '#' },
    { name: t('services.env.title'), href: '#' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="bg-secondary-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-primary-400 mb-4">
              경인엔지니어링
            </div>
            <p className="text-secondary-300 mb-6 leading-relaxed">
              {t('footer.company.desc')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-400" />
                <span className="text-secondary-300">031-987-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-400" />
                <span className="text-secondary-300">info@kieng.co.kr</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-400 mt-1" />
                <span className="text-secondary-300">경기도 김포시 대곶면 대곶로382번길 122</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-secondary-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-secondary-400 text-sm">
                {t('footer.social.desc')}
              </p>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-secondary-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-secondary-400">
            <div className="mb-2 md:mb-0">
              <p>&copy; {currentYear} {t('footer.copyright')}</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-primary-400 transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                {t('footer.terms')}
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                {t('footer.sitemap')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 