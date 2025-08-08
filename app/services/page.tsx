'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { 
  Factory, 
  Cog, 
  Cpu, 
  Wrench, 
  CheckCircle, 
  ArrowRight, 
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Award,
  Shield,
  Zap,
  Settings,
  Filter,
  Droplets,
  Gauge,
  Thermometer,
  BarChart3,
  FileText,
  Download,
  Play,
  Star
} from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('filter')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  // URL 해시를 읽어서 해당 탭을 활성화
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '')
      if (hash && ['filter', 'tank', 'ion', 'env'].includes(hash)) {
        setActiveTab(hash)
      }
    }
  }, [])

  const services = [
    {
      id: 'filter',
      icon: Factory,
      title: t('services.filter.title'),
      description: t('services.filter.desc'),
      color: 'bg-primary-500',
      features: [
        'Bag Filter System',
        'Activated Carbon Filter',
        'Coalescer Filter',
        'Custom Design & Engineering',
        'High Efficiency Filtration',
        'Automated Control System'
      ],
      specifications: [
        { label: t('services.products.filter.spec1'), value: '1~1000 m³/h' },
        { label: t('services.products.filter.spec2'), value: '0.1~10 MPa' },
        { label: t('services.products.filter.spec3'), value: '-20~200°C' },
        { label: t('services.products.filter.spec4'), value: '1~100 μm' },
        { label: t('services.products.filter.spec5'), value: 'SS304, SS316, Carbon Steel' },
        { label: t('services.products.filter.spec6'), value: 'ASME, ISO 9001' }
      ],
      process: [
        t('services.tabs.process') + ' 1: ' + t('services.products.desc.title'),
        t('services.tabs.process') + ' 2: 3D Modeling & Simulation',
        t('services.tabs.process') + ' 3: Manufacturing & Quality Inspection',
        t('services.tabs.process') + ' 4: On-site Installation & Commissioning',
        t('services.tabs.process') + ' 5: Operation Training & Technical Support'
      ]
    },
    {
      id: 'tank',
      icon: Cog,
      title: t('services.tank.title'),
      description: t('services.tank.desc'),
      color: 'bg-accent-500',
      features: [
        'Storage Tank System',
        'Piping Spool Package',
        'Chemical Resistant Coating',
        'Level Control System',
        'Safety Relief Valve',
        'Custom Engineering'
      ],
      specifications: [
        { label: t('services.products.tank.spec1'), value: '1~1000 m³' },
        { label: t('services.products.tank.spec2'), value: 'Atmospheric~10 MPa' },
        { label: t('services.products.tank.spec3'), value: 'SS304, SS316, Carbon Steel' },
        { label: t('services.products.tank.spec4'), value: '3~50 mm' },
        { label: t('services.products.tank.spec5'), value: 'ASME U Stamp, ISO 9001' },
        { label: t('services.products.tank.spec6'), value: 'X-Ray Inspection, Ultrasonic Testing' }
      ],
      process: [
        t('services.tabs.process') + ' 1: ' + t('services.products.desc.title'),
        t('services.tabs.process') + ' 2: Structural Design & Analysis',
        t('services.tabs.process') + ' 3: Manufacturing & Welding Inspection',
        t('services.tabs.process') + ' 4: Pressure Testing & Validation',
        t('services.tabs.process') + ' 5: On-site Installation & Commissioning'
      ]
    },
    {
      id: 'ion',
      icon: Cpu,
      title: t('services.ion.title'),
      description: t('services.ion.desc'),
      color: 'bg-secondary-600',
      features: [
        'Ion Exchange System',
        'Purolite Resin',
        'Water Treatment Solution',
        'Regeneration System',
        'PLC Control',
        'HSE Certified'
      ],
      specifications: [
        { label: t('services.products.ion.spec1'), value: '1~500 m³/h' },
        { label: t('services.products.ion.spec2'), value: 'TDS, Hardness, Silica' },
        { label: t('services.products.ion.spec3'), value: '8~24 hours' },
        { label: t('services.products.ion.spec4'), value: 'FRP, SS316, PP' },
        { label: t('services.products.ion.spec5'), value: 'HSE, ISO 14001' },
        { label: t('services.products.ion.spec6'), value: 'PLC, SCADA Integration' }
      ],
      process: [
        t('services.tabs.process') + ' 1: Water Quality Analysis & Requirements',
        t('services.tabs.process') + ' 2: Ion Exchange System Design',
        t('services.tabs.process') + ' 3: Resin Selection & System Manufacturing',
        t('services.tabs.process') + ' 4: On-site Installation & Commissioning',
        t('services.tabs.process') + ' 5: Operation Training & Maintenance'
      ]
    },
    {
      id: 'env',
      icon: Wrench,
      title: t('services.env.title'),
      description: t('services.env.desc'),
      color: 'bg-primary-700',
      features: [
        'Silencer System',
        'Activated Carbon Canister',
        'Vent Stack Treatment',
        'Eco-friendly Solution',
        'Noise Reduction',
        'Emission Control'
      ],
      specifications: [
        { label: t('services.products.silencer.spec1'), value: '1~1000 m³/h' },
        { label: t('services.products.silencer.spec2'), value: '20~40 dB(A)' },
        { label: t('services.products.silencer.spec3'), value: 'SS304, SS316, Carbon Steel' },
        { label: t('services.products.silencer.spec4'), value: 'ISO 14001, 45001' },
        { label: t('services.products.silencer.spec5'), value: 'Air Quality Protection Act Compliance' },
        { label: t('services.products.silencer.spec6'), value: 'Regular Inspection & Replacement' }
      ],
      process: [
        t('services.tabs.process') + ' 1: Environmental Impact Assessment',
        t('services.tabs.process') + ' 2: Noise & Emission Analysis',
        t('services.tabs.process') + ' 3: Environmental Solution Design',
        t('services.tabs.process') + ' 4: Manufacturing & Installation',
        t('services.tabs.process') + ' 5: Performance Verification & Monitoring'
      ]
    }
  ]

  const faqs = [
    {
      question: t('services.faq.q1'),
      answer: t('services.faq.a1')
    },
    {
      question: t('services.faq.q2'),
      answer: t('services.faq.a2')
    },
    {
      question: t('services.faq.q3'),
      answer: t('services.faq.a3')
    },
    {
      question: t('services.faq.q4'),
      answer: t('services.faq.a4')
    },
    {
      question: t('services.faq.q5'),
      answer: t('services.faq.a5')
    }
  ]

  const currentService = services.find(service => service.id === activeTab)

  // 생산능력 데이터
  const productionCapacity = [
    {
      product: 'Filter & Coalescer',
      unitCapacity: 'Free Size',
      annualCapacity: '150Ton',
      special: t('services.capacity.special.design')
    },
    {
      product: 'Filtration Packages',
      unitCapacity: 'Free Size',
      annualCapacity: '150Ton',
      special: t('services.capacity.special.custom')
    },
    {
      product: 'Silencer (with Vent Stack)',
      unitCapacity: '20Ton',
      annualCapacity: '200Ton',
      special: t('services.capacity.special.design')
    },
    {
      product: 'Storage Tank',
      unitCapacity: 'Free Size',
      annualCapacity: '200Ton',
      special: t('services.capacity.special.custom')
    },
    {
      product: 'Piping Spool & Package',
      unitCapacity: 'Free Size',
      annualCapacity: '150Ton',
      special: t('services.capacity.special.custom')
    },
    {
      product: 'Activated Carbon Canister',
      unitCapacity: '20Ton',
      annualCapacity: '100Ton',
      special: t('services.capacity.special.custom')
    },
    {
      product: 'Activated Carbon Filter',
      unitCapacity: 'Free Size',
      annualCapacity: '100Ton',
      special: t('services.capacity.special.custom')
    },
    {
      product: 'Ion Exchanger',
      unitCapacity: '20Ton',
      annualCapacity: '100Ton',
      special: t('services.capacity.special.custom')
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
              {t('services.badge')}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('services.hero.title')}
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              {t('services.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Production Capacity Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              {t('services.capacity.title')}
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              {t('services.capacity.subtitle')}
            </p>
            <p className="text-sm text-primary-600 mt-2">
              {t('services.capacity.special')}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">{t('services.capacity.table.description')}</th>
                    <th className="px-6 py-4 text-center font-semibold">{t('services.capacity.table.unit')}</th>
                    <th className="px-6 py-4 text-center font-semibold">{t('services.capacity.table.year')}</th>
                    <th className="px-6 py-4 text-center font-semibold">{t('services.capacity.table.special')}</th>
                  </tr>
                </thead>
                <tbody>
                  {productionCapacity.map((item, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-primary-50 transition-colors`}>
                      <td className="px-6 py-4 font-medium text-secondary-900">
                        {item.product}
                      </td>
                      <td className="px-6 py-4 text-center text-secondary-700">
                        {item.unitCapacity}
                      </td>
                      <td className="px-6 py-4 text-center font-semibold text-primary-600">
                        {item.annualCapacity}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.special.includes(t('services.capacity.special.design'))
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {item.special}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">1,150</div>
              <div className="text-secondary-700">{t('services.capacity.stats.total')}</div>
            </div>
            <div className="bg-gradient-to-r from-accent-50 to-accent-100 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-accent-600 mb-2">8</div>
              <div className="text-secondary-700">{t('services.capacity.stats.products')}</div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">2</div>
              <div className="text-secondary-700">{t('services.capacity.stats.design')}</div>
            </div>
            <div className="bg-gradient-to-r from-secondary-50 to-secondary-100 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-secondary-600 mb-2">20</div>
              <div className="text-secondary-700">{t('services.capacity.stats.unit')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              {t('services.products.title')}
            </h2>
            <p className="text-lg text-secondary-600">
              {t('services.products.subtitle')}
            </p>
          </div>

          <div className="space-y-12">
            {/* Filter & Coalescer */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mr-4">
                  <Factory size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary-900">{t('services.products.filter.title')}</h3>
                  <p className="text-primary-600 font-medium">{t('services.products.filter.design')}</p>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-secondary-900 mb-4">{t('services.products.desc.title')}</h4>
                  <p className="text-secondary-600 mb-4">
                    {t('services.products.filter.desc')}
                  </p>
                  <ul className="space-y-2 text-secondary-600">
                    <li>• {t('services.products.filter.feature1')}</li>
                    <li>• {t('services.products.filter.feature2')}</li>
                    <li>• {t('services.products.filter.feature3')}</li>
                    <li>• {t('services.products.filter.feature4')}</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-secondary-900 mb-4">{t('services.products.spec.title')}</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 font-medium text-secondary-700">{t('services.products.filter.spec1')}</td>
                          <td className="py-2 text-secondary-900">1~1000 m³/h</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 font-medium text-secondary-700">{t('services.products.filter.spec2')}</td>
                          <td className="py-2 text-secondary-900">0.1~10 MPa</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 font-medium text-secondary-700">{t('services.products.filter.spec3')}</td>
                          <td className="py-2 text-secondary-900">-20~200°C</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 font-medium text-secondary-700">{t('services.products.filter.spec4')}</td>
                          <td className="py-2 text-secondary-900">1~100 μm</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 font-medium text-secondary-700">{t('services.products.filter.spec5')}</td>
                          <td className="py-2 text-secondary-900">SS304, SS316, Carbon Steel</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium text-secondary-700">{t('services.products.filter.spec6')}</td>
                          <td className="py-2 text-secondary-900">ASME, ISO 9001</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Silencer */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-700 rounded-lg flex items-center justify-center mr-4">
                  <Wrench size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary-900">{t('services.products.silencer.title')}</h3>
                  <p className="text-primary-600 font-medium">{t('services.products.silencer.design')}</p>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-secondary-900 mb-4">{t('services.products.desc.title')}</h4>
                  <p className="text-secondary-600 mb-4">
                    {t('services.products.silencer.desc')}
                  </p>
                  <ul className="space-y-2 text-secondary-600">
                    <li>• {t('services.products.silencer.feature1')}</li>
                    <li>• {t('services.products.silencer.feature2')}</li>
                    <li>• {t('services.products.silencer.feature3')}</li>
                    <li>• {t('services.products.silencer.feature4')}</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-secondary-900 mb-4">{t('services.products.spec.title')}</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 font-medium text-secondary-700">{t('services.products.silencer.spec1')}</td>
                          <td className="py-2 text-secondary-900">1~1000 m³/h</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 font-medium text-secondary-700">{t('services.products.silencer.spec2')}</td>
                          <td className="py-2 text-secondary-900">20~40 dB(A)</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 font-medium text-secondary-700">{t('services.products.silencer.spec3')}</td>
                          <td className="py-2 text-secondary-900">SS304, SS316, Carbon Steel</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 font-medium text-secondary-700">{t('services.products.silencer.spec4')}</td>
                          <td className="py-2 text-secondary-900">ISO 14001, 45001</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 font-medium text-secondary-700">{t('services.products.silencer.spec5')}</td>
                          <td className="py-2 text-secondary-900">Air Quality Protection Act Compliance</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium text-secondary-700">{t('services.products.silencer.spec6')}</td>
                          <td className="py-2 text-secondary-900">Regular Inspection & Replacement</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Storage Tank */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center mr-4">
                  <Cog size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary-900">{t('services.products.tank.title')}</h3>
                  <p className="text-primary-600 font-medium">{t('services.products.tank.design')}</p>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-secondary-900 mb-4">{t('services.products.desc.title')}</h4>
                  <p className="text-secondary-600 mb-4">
                    {t('services.products.tank.desc')}
                  </p>
                  <ul className="space-y-2 text-secondary-600">
                    <li>• {t('services.products.tank.feature1')}</li>
                    <li>• {t('services.products.tank.feature2')}</li>
                    <li>• {t('services.products.tank.feature3')}</li>
                    <li>• {t('services.products.tank.feature4')}</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-secondary-900 mb-4">{t('services.products.spec.title')}</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 font-medium text-secondary-700">{t('services.products.tank.spec1')}</td>
                          <td className="py-2 text-secondary-900">1~1000 m³</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 font-medium text-secondary-700">{t('services.products.tank.spec2')}</td>
                          <td className="py-2 text-secondary-900">Atmospheric~10 MPa</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 font-medium text-secondary-700">{t('services.products.tank.spec3')}</td>
                          <td className="py-2 text-secondary-900">SS304, SS316, Carbon Steel</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 font-medium text-secondary-700">{t('services.products.tank.spec4')}</td>
                          <td className="py-2 text-secondary-900">3~50 mm</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 font-medium text-secondary-700">{t('services.products.tank.spec5')}</td>
                          <td className="py-2 text-secondary-900">ASME U Stamp, ISO 9001</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium text-secondary-700">{t('services.products.tank.spec6')}</td>
                          <td className="py-2 text-secondary-900">X-Ray Inspection, Ultrasonic Testing</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Ion Exchanger */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary-600 rounded-lg flex items-center justify-center mr-4">
                  <Cpu size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary-900">{t('services.products.ion.title')}</h3>
                  <p className="text-primary-600 font-medium">{t('services.products.ion.design')}</p>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-secondary-900 mb-4">{t('services.products.desc.title')}</h4>
                  <p className="text-secondary-600 mb-4">
                    {t('services.products.ion.desc')}
                  </p>
                  <ul className="space-y-2 text-secondary-600">
                    <li>• {t('services.products.ion.feature1')}</li>
                    <li>• {t('services.products.ion.feature2')}</li>
                    <li>• {t('services.products.ion.feature3')}</li>
                    <li>• {t('services.products.ion.feature4')}</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-secondary-900 mb-4">{t('services.products.spec.title')}</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 font-medium text-secondary-700">{t('services.products.ion.spec1')}</td>
                          <td className="py-2 text-secondary-900">1~500 m³/h</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 font-medium text-secondary-700">{t('services.products.ion.spec2')}</td>
                          <td className="py-2 text-secondary-900">TDS, Hardness, Silica</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 font-medium text-secondary-700">{t('services.products.ion.spec3')}</td>
                          <td className="py-2 text-secondary-900">8~24 hours</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 font-medium text-secondary-700">{t('services.products.ion.spec4')}</td>
                          <td className="py-2 text-secondary-900">FRP, SS316, PP</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 font-medium text-secondary-700">{t('services.products.ion.spec5')}</td>
                          <td className="py-2 text-secondary-900">HSE, ISO 14001</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium text-secondary-700">{t('services.products.ion.spec6')}</td>
                          <td className="py-2 text-secondary-900">PLC, SCADA Integration</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === service.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-secondary-600 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                <service.icon size={20} className="mr-2" />
                {service.title}
              </button>
            ))}
          </div>

          {/* Service Content */}
          {currentService && (
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column */}
                <div>
                  <div className={`w-16 h-16 ${currentService.color} rounded-xl flex items-center justify-center mb-6`}>
                    <currentService.icon size={32} className="text-white" />
                  </div>
                  
                  <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                    {currentService.title}
                  </h2>
                  
                  <p className="text-lg text-secondary-600 mb-8">
                    {currentService.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-secondary-900 mb-4">{t('services.tabs.features')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {currentService.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-secondary-700">
                          <CheckCircle size={16} className="text-primary-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-secondary-900 mb-4">{t('services.tabs.specifications')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {currentService.specifications.map((spec, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-sm text-secondary-500 mb-1">{spec.label}</div>
                          <div className="font-medium text-secondary-900">{spec.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  {/* Process */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-secondary-900 mb-4">{t('services.tabs.process')}</h3>
                    <div className="space-y-4">
                      {currentService.process.map((step, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                            {index + 1}
                          </div>
                          <div className="text-secondary-700">{step}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-secondary-900 mb-4">
                      {t('services.tabs.cta.title')}
                    </h3>
                    <p className="text-secondary-600 mb-6">
                      {t('services.tabs.cta.desc')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href="/contact" className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors text-center">
                        {t('services.tabs.cta.consult')}
                      </Link>
                      <Link href="/portfolio" className="border-2 border-primary-200 text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors text-center">
                        {t('services.tabs.cta.portfolio')}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              {t('services.faq.title')}
            </h2>
            <p className="text-lg text-secondary-600">
              {t('services.faq.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full text-left py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-medium text-secondary-900">
                    {faq.question}
                  </span>
                  {expandedFaq === index ? (
                    <ChevronUp size={20} className="text-primary-600" />
                  ) : (
                    <ChevronDown size={20} className="text-secondary-400" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="pb-6 text-secondary-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-secondary-900 to-secondary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('services.contact.title')}
          </h2>
          <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
            {t('services.contact.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-primary-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition-colors text-center">
              {t('services.contact.consult')}
            </Link>
            <Link href="/quote" className="border-2 border-primary-200 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-500 transition-colors text-center">
              {t('services.contact.quote')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
