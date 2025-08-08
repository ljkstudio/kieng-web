'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, User, Smartphone } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.phone'),
      details: ['031-987-6127', 'Fax: 031-988-6128'],
      color: 'bg-primary-500'
    },
    {
      icon: Mail,
      title: t('contact.email'),
      details: ['bhkim@kieng.co.kr', 'sales@kieng.co.kr'],
      color: 'bg-accent-500'
    },
    {
      icon: MapPin,
      title: t('contact.address'),
      details: ['122, Daegot-ro 382beon-gil', 'Daegot-myeon, Gimpo-si, Gyeonggi-do'],
      color: 'bg-secondary-600'
    },
    {
      icon: Clock,
      title: t('contact.size'),
      details: ['Total 2,244㎡', 'Factory 495㎡ / Yard 660㎡'],
      color: 'bg-primary-700'
    },
    {
      icon: User,
      title: t('contact.info.contactPerson.title'),
      details: [t('contact.info.contactPerson.value')],
      color: 'bg-secondary-500'
    },
    {
      icon: Smartphone,
      title: t('contact.info.mobile.title'),
      details: [t('contact.info.mobile.value')],
      color: 'bg-accent-600'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-4">
            {t('contact.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">
              {t('contact.form.title')}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                    {t('contact.form.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder={t('contact.form.name')}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                    {t('contact.form.phone')} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="010-1234-5678"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    {t('contact.form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="hong@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2">
                    {t('contact.form.company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder={t('contact.form.company')}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                  {t('contact.form.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                  placeholder={t('contact.form.message')}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                {t('contact.info.title')}
              </h3>
              <p className="text-lg text-secondary-600 mb-8">
                {t('contact.info.desc')}
              </p>
            </div>
            
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl border border-secondary-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <info.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">
                      {info.title}
                    </h4>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-secondary-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-secondary-100 rounded-xl p-8 text-center">
              <MapPin size={48} className="text-secondary-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-secondary-700 mb-2">
                {t('contact.map.title')}
              </h4>
              <p className="text-secondary-600">
                {t('contact.map.desc')}
              </p>
              <button className="mt-4 text-primary-600 font-medium hover:text-primary-700 transition-colors">
                {t('contact.map.view')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 