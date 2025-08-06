'use client'

import { Wrench, Cog, Cpu, Factory, ArrowRight, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ServicesSection() {
  const { t } = useLanguage()
  
  const services = [
    {
      icon: Factory,
      title: t('services.filter.title'),
      description: t('services.filter.desc'),
      features: ['Bag Filter', 'Activated Carbon Filter', 'Custom Design'],
      color: 'bg-primary-500'
    },
    {
      icon: Cog,
      title: t('services.tank.title'),
      description: t('services.tank.desc'),
      features: ['Various Sizes', 'Chemical Resistant', 'Quality Assurance'],
      color: 'bg-accent-500'
    },
    {
      icon: Cpu,
      title: t('services.ion.title'),
      description: t('services.ion.desc'),
      features: ['Purolite Resin', 'High Efficiency', 'HSE Certified'],
      color: 'bg-secondary-600'
    },
    {
      icon: Wrench,
      title: t('services.env.title'),
      description: t('services.env.desc'),
      features: ['Calgon Carbon', 'Vent Stack', 'Eco-friendly'],
      color: 'bg-primary-700'
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-4">
            {t('services.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-secondary-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={28} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                {service.title}
              </h3>
              <p className="text-secondary-600 mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-secondary-600">
                    <CheckCircle size={16} className="text-primary-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="text-primary-600 font-medium flex items-center group-hover:text-primary-700 transition-colors">
                {t('services.details')}
                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {t('services.cta.title')}
          </h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {t('services.cta.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors">
              {t('services.cta.consult')}
            </button>
            <button className="border-2 border-primary-200 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-500 transition-colors">
              {t('services.cta.portfolio')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 