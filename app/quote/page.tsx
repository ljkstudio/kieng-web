'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  ArrowRight,
  Building,
  Users,
  Globe,
  Award,
  Calculator,
  FileText,
  Download,
  MessageSquare,
  Calendar,
  User,
  Package,
  Settings,
  Wrench,
  Shield
} from 'lucide-react'
import Link from 'next/link'

export default function QuotePage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productType: '',
    quantity: '',
    specifications: '',
    deadline: '',
    budget: '',
    additionalInfo: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error(t('quote.error.message'))
      }

      const result = await response.json()
      console.log('Quote request submitted:', result)
      setSubmitSuccess(true)
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        productType: '',
        quantity: '',
        specifications: '',
        deadline: '',
        budget: '',
        additionalInfo: ''
      })
      
      // 3초 후 성공 메시지 숨기기
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 3000)
    } catch (error) {
      console.error('Quote submission error:', error)
      alert(t('quote.error.message'))
    } finally {
      setIsSubmitting(false)
    }
  }

  const productTypes = [
    { value: 'filter-coalescer', label: t('quote.productTypes.filter') },
    { value: 'filtration-packages', label: t('quote.productTypes.filtration') },
    { value: 'silencer', label: t('quote.productTypes.silencer') },
    { value: 'storage-tank', label: t('quote.productTypes.storage') },
    { value: 'piping-spool', label: t('quote.productTypes.piping') },
    { value: 'activated-carbon-canister', label: t('quote.productTypes.carbonCanister') },
    { value: 'activated-carbon-filter', label: t('quote.productTypes.carbonFilter') },
    { value: 'ion-exchanger', label: t('quote.productTypes.ionExchanger') },
    { value: 'custom', label: t('quote.productTypes.custom') },
    { value: 'other', label: t('quote.productTypes.other') }
  ]

  const budgetRanges = [
    { value: '', label: t('quote.budgetRanges.select') },
    { value: 'under-10m', label: t('quote.budgetRanges.under10m') },
    { value: '10m-50m', label: t('quote.budgetRanges.10m50m') },
    { value: '50m-100m', label: t('quote.budgetRanges.50m100m') },
    { value: '100m-500m', label: t('quote.budgetRanges.100m500m') },
    { value: 'over-500m', label: t('quote.budgetRanges.over500m') },
    { value: 'consultation', label: t('quote.budgetRanges.consultation') }
  ]

  const quoteProcess = [
    {
      icon: Calculator,
      title: t('quote.process.request.title'),
      description: t('quote.process.request.desc')
    },
    {
      icon: Settings,
      title: t('quote.process.review.title'),
      description: t('quote.process.review.desc')
    },
    {
      icon: Package,
      title: t('quote.process.send.title'),
      description: t('quote.process.send.desc')
    },
    {
      icon: Wrench,
      title: t('quote.process.contract.title'),
      description: t('quote.process.contract.desc')
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container-custom">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary-500 rounded-full text-white text-sm font-medium mb-4">
              {t('quote.badge')}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('quote.title')}
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              {t('quote.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Quote Process */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              {t('quote.process.title')}
            </h2>
            <p className="text-lg text-secondary-600">
              {t('quote.process.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quoteProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon size={32} className="text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-secondary-900 mb-2">{step.title}</h3>
                <p className="text-secondary-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                {t('quote.form.title')}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 기본 정보 */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      {t('quote.form.name')} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder={t('quote.form.name.placeholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      {t('quote.form.company')} *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder={t('quote.form.company.placeholder')}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      {t('quote.form.email')} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder={t('quote.form.email.placeholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      {t('quote.form.phone')} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder={t('quote.form.phone.placeholder')}
                    />
                  </div>
                </div>

                {/* 제품 정보 */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      {t('quote.form.productType')} *
                    </label>
                    <select
                      name="productType"
                      value={formData.productType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">{t('quote.form.productType.placeholder')}</option>
                      {productTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      {t('quote.form.quantity')} *
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder={t('quote.form.quantity.placeholder')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    {t('quote.form.specifications')} *
                  </label>
                  <textarea
                    name="specifications"
                    value={formData.specifications}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder={t('quote.form.specifications.placeholder')}
                  ></textarea>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      {t('quote.form.deadline')}
                    </label>
                    <input
                      type="date"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      {t('quote.form.budget')}
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      {budgetRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    {t('quote.form.additionalInfo')}
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder={t('quote.form.additionalInfo.placeholder')}
                  ></textarea>
                </div>

                {submitSuccess && (
                  <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                    <CheckCircle size={20} className="text-green-600 mr-2" />
                    <span className="text-green-800 font-medium">{t('quote.success.message')}</span>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      {t('quote.form.submitting')}
                    </>
                  ) : (
                    <>
                      <Calculator size={20} className="mr-2" />
                      {t('quote.form.submit')}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              {t('quote.why.title')}
            </h2>
            <p className="text-lg text-secondary-600">
              {t('quote.why.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-2">{t('quote.why.experience.title')}</h3>
              <p className="text-secondary-600 text-sm">
                {t('quote.why.experience.desc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings size={32} className="text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-2">{t('quote.why.custom.title')}</h3>
              <p className="text-secondary-600 text-sm">
                {t('quote.why.custom.desc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe size={32} className="text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-2">{t('quote.why.partnership.title')}</h3>
              <p className="text-secondary-600 text-sm">
                {t('quote.why.partnership.desc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench size={32} className="text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-2">{t('quote.why.onestop.title')}</h3>
              <p className="text-secondary-600 text-sm">
                {t('quote.why.onestop.desc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-2">{t('quote.why.quality.title')}</h3>
              <p className="text-secondary-600 text-sm">
                {t('quote.why.quality.desc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare size={32} className="text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-2">{t('quote.why.support.title')}</h3>
              <p className="text-secondary-600 text-sm">
                {t('quote.why.support.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              {t('quote.contact.title')}
            </h2>
            <p className="text-lg text-secondary-600">
              {t('quote.contact.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-2">{t('quote.contact.phone.title')}</h3>
              <p className="text-primary-600 font-medium mb-1">031-987-6127</p>
              <p className="text-secondary-600 text-sm">{t('quote.contact.phone.desc')}</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={24} className="text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-2">{t('quote.contact.email.title')}</h3>
              <p className="text-primary-600 font-medium mb-1">sales@kieng.co.kr</p>
              <p className="text-secondary-600 text-sm">{t('quote.contact.email.desc')}</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare size={24} className="text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-2">{t('quote.contact.tech.title')}</h3>
              <p className="text-primary-600 font-medium mb-1">031-987-6127</p>
              <p className="text-secondary-600 text-sm">{t('quote.contact.tech.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
