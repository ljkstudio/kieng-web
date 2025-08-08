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
  Shield,
  FileText,
  Download,
  MessageSquare,
  Calendar,
  User,
  Mail as MailIcon,
  Calculator
} from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
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
      // 실제 이메일 전송 로직은 여기에 구현
      // 현재는 시뮬레이션을 위해 지연시간 추가
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Form submitted:', formData)
      setSubmitSuccess(true)
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      
      // 3초 후 성공 메시지 숨기기
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 3000)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.info.phone.title'),
      value: t('contact.info.phone.value'),
      description: t('contact.info.phone.desc')
    },
    {
      icon: Mail,
      title: t('contact.info.email.title'),
      value: t('contact.info.email.value'),
      description: t('contact.info.email.desc')
    },
    {
      icon: MapPin,
      title: t('contact.info.address.title'),
      value: t('contact.info.address.value'),
      description: t('contact.info.address.desc')
    },
    {
      icon: Clock,
      title: t('contact.info.hours.title'),
      value: t('contact.info.hours.value'),
      description: t('contact.info.hours.desc')
    }
  ]

  const departments = [
    {
      name: t('contact.departments.sales.name'),
      phone: '031-987-6127',
      email: 'sales@kieng.co.kr',
      description: t('contact.departments.sales.desc')
    },
    {
      name: t('contact.departments.tech.name'),
      phone: '031-987-7892',
      email: 'tech@kieng.co.kr',
      description: t('contact.departments.tech.desc')
    },
    {
      name: t('contact.departments.support.name'),
      phone: '031-987-7893',
      email: 'support@kieng.co.kr',
      description: t('contact.departments.support.desc')
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
              {t('contact.page.badge')}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('contact.page.title')}
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              {t('contact.page.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon size={32} className="text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-secondary-900 mb-2">{info.title}</h3>
                <p className="text-primary-600 font-medium mb-1">{info.value}</p>
                <p className="text-secondary-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                {t('contact.form.title')}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      {t('contact.form.name.label')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder={t('contact.form.name.placeholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      {t('contact.form.company.label')}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder={t('contact.form.company.placeholder')}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      {t('contact.form.email.label')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder={t('contact.form.email.placeholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      {t('contact.form.phone.label')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder={t('contact.form.phone.placeholder')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    {t('contact.form.subject.label')}
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">{t('contact.form.subject.placeholder')}</option>
                    <option value="product">{t('contact.form.subject.product')}</option>
                    <option value="service">{t('contact.form.subject.service')}</option>
                    <option value="quote">{t('contact.form.subject.quote')}</option>
                    <option value="support">{t('contact.form.subject.support')}</option>
                    <option value="other">{t('contact.form.subject.other')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    {t('contact.form.message.label')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder={t('contact.form.message.placeholder')}
                  ></textarea>
                </div>

                {submitSuccess && (
                  <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                    <CheckCircle size={20} className="text-green-600 mr-2" />
                    <span className="text-green-800 font-medium">{t('contact.form.success')}</span>
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
                      {t('contact.form.submitting')}
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      {t('contact.form.submit')}
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Company Info */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-secondary-900 mb-6">
                  {t('contact.company.title')}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Building size={20} className="text-primary-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-secondary-900">{t('contact.company.name')}</p>
                      <p className="text-secondary-600 text-sm">{t('contact.company.desc')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users size={20} className="text-primary-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-secondary-900">{t('contact.company.founded')}</p>
                      <p className="text-secondary-600 text-sm">{t('contact.company.founded.value')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe size={20} className="text-primary-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-secondary-900">{t('contact.company.business')}</p>
                      <p className="text-secondary-600 text-sm">{t('contact.company.business.value')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Award size={20} className="text-primary-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-secondary-900">{t('contact.company.certification')}</p>
                      <p className="text-secondary-600 text-sm">{t('contact.company.certification.value')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Departments */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-secondary-900 mb-6">
                  {t('contact.departments.title')}
                </h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <h4 className="font-medium text-secondary-900 mb-2">{dept.name}</h4>
                      <p className="text-secondary-600 text-sm mb-2">{dept.description}</p>
                      <div className="flex items-center text-sm text-primary-600">
                        <Phone size={16} className="mr-2" />
                        {dept.phone}
                      </div>
                      <div className="flex items-center text-sm text-primary-600">
                        <Mail size={16} className="mr-2" />
                        {dept.email}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

                             {/* Quick Actions */}
               <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8">
                 <h3 className="text-xl font-bold text-secondary-900 mb-6">
                   {t('contact.quick.title')}
                 </h3>
                 <div className="space-y-4">
                   <Link href="/quote" className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                     <div className="flex items-center">
                       <Calculator size={20} className="text-primary-600 mr-3" />
                       <span className="font-medium text-secondary-900">{t('contact.quick.quote')}</span>
                     </div>
                     <ArrowRight size={20} className="text-primary-600" />
                   </Link>
                   <Link href="/services" className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                     <div className="flex items-center">
                       <FileText size={20} className="text-primary-600 mr-3" />
                       <span className="font-medium text-secondary-900">{t('contact.quick.services')}</span>
                     </div>
                     <ArrowRight size={20} className="text-primary-600" />
                   </Link>
                   <Link href="/products" className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                     <div className="flex items-center">
                       <Building size={20} className="text-primary-600 mr-3" />
                       <span className="font-medium text-secondary-900">{t('contact.quick.products')}</span>
                     </div>
                     <ArrowRight size={20} className="text-primary-600" />
                   </Link>
                   <Link href="/portfolio" className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                     <div className="flex items-center">
                       <Award size={20} className="text-primary-600 mr-3" />
                       <span className="font-medium text-secondary-900">{t('contact.quick.portfolio')}</span>
                     </div>
                     <ArrowRight size={20} className="text-primary-600" />
                   </Link>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              {t('contact.location.title')}
            </h2>
            <p className="text-lg text-secondary-600">
              {t('contact.location.desc')}
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">{t('contact.location.map.placeholder')}</p>
              <p className="text-sm text-gray-500 mt-2">{t('contact.info.address.value')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              {t('contact.faq.title')}
            </h2>
            <p className="text-lg text-secondary-600">
              {t('contact.faq.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-secondary-900 mb-2">
                {t('contact.faq.quote.question')}
              </h3>
              <p className="text-secondary-600">
                {t('contact.faq.quote.answer')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-secondary-900 mb-2">
                {t('contact.faq.installation.question')}
              </h3>
              <p className="text-secondary-600">
                {t('contact.faq.installation.answer')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-secondary-900 mb-2">
                {t('contact.faq.maintenance.question')}
              </h3>
              <p className="text-secondary-600">
                {t('contact.faq.maintenance.answer')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-secondary-900 mb-2">
                {t('contact.faq.overseas.question')}
              </h3>
              <p className="text-secondary-600">
                {t('contact.faq.overseas.answer')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
