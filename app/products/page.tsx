'use client'

import { useState } from 'react'
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
  Filter,
  Droplets,
  Gauge,
  Thermometer,
  BarChart3,
  FileText,
  Download,
  Play,
  Star,
  Settings,
  Zap,
  Shield,
  Globe,
  Target,
  Users,
  Award
} from 'lucide-react'
import Link from 'next/link'

export default function ProductsPage() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('all')
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null)

  const categories = [
    { id: 'all', name: t('products.categories.all'), icon: Factory },
    { id: 'filter', name: t('products.categories.filter'), icon: Filter },
    { id: 'tank', name: t('products.categories.tank'), icon: Cog },
    { id: 'ion', name: t('products.categories.ion'), icon: Cpu },
    { id: 'env', name: t('products.categories.env'), icon: Wrench }
  ]

  const products = [
    {
      id: 'filter-coalescer',
      name: t('products.filter.coalescer.name'),
      category: 'filter',
      description: t('products.filter.coalescer.desc'),
      features: [
        t('products.filter.coalescer.feature1'),
        t('products.filter.coalescer.feature2'),
        t('products.filter.coalescer.feature3'),
        t('products.filter.coalescer.feature4'),
        t('products.filter.coalescer.feature5'),
        t('products.filter.coalescer.feature6')
      ],
      specifications: {
        [t('products.spec.capacity')]: '1~1000 m³/h',
        [t('products.spec.pressure')]: '0.1~10 MPa',
        [t('products.spec.temperature')]: '-20~200°C',
        [t('products.spec.filtration')]: '1~100 μm',
        [t('products.spec.material')]: 'SS304, SS316, Carbon Steel',
        [t('products.spec.certification')]: 'ASME, ISO 9001'
      },
      applications: [
        t('products.app.petrochemical'),
        t('products.app.pharmaceutical'),
        t('products.app.food'),
        t('products.app.semiconductor'),
        t('products.app.power'),
        t('products.app.water')
      ],
      icon: Filter,
      color: 'bg-primary-500',
      special: t('products.special.design')
    },
    {
      id: 'filtration-packages',
      name: t('products.filtration.packages.name'),
      category: 'filter',
      description: t('products.filtration.packages.desc'),
      features: [
        t('products.filtration.packages.feature1'),
        t('products.filtration.packages.feature2'),
        t('products.filtration.packages.feature3'),
        t('products.filtration.packages.feature4'),
        t('products.filtration.packages.feature5'),
        t('products.filtration.packages.feature6')
      ],
      specifications: {
        [t('products.spec.capacity')]: '1~500 m³/h',
        [t('products.spec.pressure')]: '0.1~5 MPa',
        [t('products.spec.temperature')]: '-10~150°C',
        [t('products.spec.filtration')]: '2~5단계',
        [t('products.spec.material')]: 'SS304, SS316, Carbon Steel',
        [t('products.spec.control')]: 'PLC, SCADA'
      },
      applications: [
        t('products.app.chemical'),
        t('products.app.water'),
        t('products.app.gas'),
        t('products.app.liquid'),
        t('products.app.industrial')
      ],
      icon: Filter,
      color: 'bg-primary-600',
      special: t('products.special.custom')
    },
    {
      id: 'silencer',
      name: t('products.silencer.name'),
      category: 'env',
      description: t('products.silencer.desc'),
      features: [
        t('products.silencer.feature1'),
        t('products.silencer.feature2'),
        t('products.silencer.feature3'),
        t('products.silencer.feature4'),
        t('products.silencer.feature5'),
        t('products.silencer.feature6')
      ],
      specifications: {
        [t('products.spec.capacity')]: '1~1000 m³/h',
        [t('products.spec.noise')]: '20~40 dB(A)',
        [t('products.spec.material')]: 'SS304, SS316, Carbon Steel',
        [t('products.spec.certification')]: 'ISO 14001, 45001',
        [t('products.spec.environment')]: '대기환경보전법 준수',
        [t('products.spec.maintenance')]: '정기 점검 및 교체'
      },
      applications: [
        t('products.app.power'),
        t('products.app.chemical'),
        t('products.app.petrochemical'),
        t('products.app.gas'),
        t('products.app.environmental')
      ],
      icon: Wrench,
      color: 'bg-primary-700',
      special: t('products.special.design')
    },
    {
      id: 'storage-tank',
      name: t('products.storage.tank.name'),
      category: 'tank',
      description: t('products.storage.tank.desc'),
      features: [
        t('products.storage.tank.feature1'),
        t('products.storage.tank.feature2'),
        t('products.storage.tank.feature3'),
        t('products.storage.tank.feature4'),
        t('products.storage.tank.feature5'),
        t('products.storage.tank.feature6')
      ],
      specifications: {
        [t('products.spec.volume')]: '1~1000 m³',
        [t('products.spec.pressure.rating')]: 'Atmospheric~10 MPa',
        [t('products.spec.material')]: 'SS304, SS316, Carbon Steel',
        [t('products.spec.thickness')]: '3~50 mm',
        [t('products.spec.certification')]: 'ASME U Stamp, ISO 9001',
        [t('products.spec.welding')]: 'X-Ray 검사, 초음파 검사'
      },
      applications: [
        t('products.app.chemical.storage'),
        t('products.app.crude.oil'),
        t('products.app.gas.storage'),
        t('products.app.water'),
        t('products.app.industrial.storage')
      ],
      icon: Cog,
      color: 'bg-accent-500',
      special: t('products.special.custom')
    },
    {
      id: 'piping-spool',
      name: t('products.piping.spool.name'),
      category: 'tank',
      description: t('products.piping.spool.desc'),
      features: [
        t('products.piping.spool.feature1'),
        t('products.piping.spool.feature2'),
        t('products.piping.spool.feature3'),
        t('products.piping.spool.feature4'),
        t('products.piping.spool.feature5'),
        t('products.piping.spool.feature6')
      ],
      specifications: {
        [t('products.spec.pipe.size')]: '1/2"~48"',
        [t('products.spec.pressure.rating')]: '150~2500#',
        [t('products.spec.material')]: 'SS304, SS316, Carbon Steel',
        [t('products.spec.welding')]: 'TIG, MIG, SMAW',
        [t('products.spec.certification')]: 'X-Ray, 초음파, 색투',
        [t('products.spec.certification')]: 'ASME, ISO 9001'
      },
      applications: [
        t('products.app.chemical'),
        t('products.app.oil.gas'),
        t('products.app.power'),
        t('products.app.water'),
        t('products.app.industrial.piping')
      ],
      icon: Cog,
      color: 'bg-accent-600',
      special: t('products.special.custom')
    },
    {
      id: 'activated-carbon-canister',
      name: t('products.activated.carbon.canister.name'),
      category: 'env',
      description: t('products.activated.carbon.canister.desc'),
      features: [
        t('products.activated.carbon.canister.feature1'),
        t('products.activated.carbon.canister.feature2'),
        t('products.activated.carbon.canister.feature3'),
        t('products.activated.carbon.canister.feature4'),
        t('products.activated.carbon.canister.feature5'),
        t('products.activated.carbon.canister.feature6')
      ],
      specifications: {
        [t('products.spec.capacity')]: '1~500 m³/h',
        [t('products.spec.adsorption')]: '95% 이상',
        [t('products.spec.material')]: 'SS304, SS316, Carbon Steel',
        [t('products.spec.carbon')]: 'Calgon Carbon',
        [t('products.spec.certification')]: 'ISO 14001',
        [t('products.spec.maintenance')]: '정기 교체'
      },
      applications: [
        t('products.app.gas.purification'),
        t('products.app.odor'),
        t('products.app.voc'),
        t('products.app.environmental'),
        t('products.app.air')
      ],
      icon: Wrench,
      color: 'bg-primary-600',
      special: t('products.special.custom')
    },
    {
      id: 'activated-carbon-filter',
      name: t('products.activated.carbon.filter.name'),
      category: 'filter',
      description: t('products.activated.carbon.filter.desc'),
      features: [
        t('products.activated.carbon.filter.feature1'),
        t('products.activated.carbon.filter.feature2'),
        t('products.activated.carbon.filter.feature3'),
        t('products.activated.carbon.filter.feature4'),
        t('products.activated.carbon.filter.feature5'),
        t('products.activated.carbon.filter.feature6')
      ],
      specifications: {
        [t('products.spec.capacity')]: '1~1000 m³/h',
        [t('products.spec.pressure')]: '0.1~5 MPa',
        [t('products.spec.temperature')]: '-10~100°C',
        [t('products.spec.material')]: 'SS304, SS316, Carbon Steel',
        [t('products.spec.carbon')]: 'Calgon Carbon',
        [t('products.spec.certification')]: 'ISO 14001'
      },
      applications: [
        t('products.app.water'),
        t('products.app.gas.purification'),
        t('products.app.odor'),
        t('products.app.environmental'),
        t('products.app.industrial')
      ],
      icon: Filter,
      color: 'bg-primary-500',
      special: t('products.special.custom')
    },
    {
      id: 'ion-exchanger',
      name: t('products.ion.exchanger.name'),
      category: 'ion',
      description: t('products.ion.exchanger.desc'),
      features: [
        t('products.ion.exchanger.feature1'),
        t('products.ion.exchanger.feature2'),
        t('products.ion.exchanger.feature3'),
        t('products.ion.exchanger.feature4'),
        t('products.ion.exchanger.feature5'),
        t('products.ion.exchanger.feature6')
      ],
      specifications: {
        [t('products.spec.capacity')]: '1~500 m³/h',
        [t('products.spec.water.quality')]: 'TDS, Hardness, Silica',
        [t('products.spec.regeneration')]: '8~24시간',
        [t('products.spec.material')]: 'FRP, SS316, PP',
        [t('products.spec.certification')]: 'HSE, ISO 14001',
        [t('products.spec.control')]: 'PLC, SCADA 연동'
      },
      applications: [
        t('products.app.boiler'),
        t('products.app.cooling'),
        t('products.app.semiconductor'),
        t('products.app.pharmaceutical'),
        t('products.app.food')
      ],
      icon: Cpu,
      color: 'bg-secondary-600',
      special: t('products.special.custom')
    }
  ]

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory)

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container-custom">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary-500 rounded-full text-white text-sm font-medium mb-4">
              {t('products.badge')}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('products.hero.title')}
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              {t('products.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-secondary-600 hover:bg-primary-50 hover:text-primary-600 border border-gray-200'
                }`}
              >
                <category.icon size={20} className="mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                {/* Product Header */}
                <div className={`${product.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <product.icon size={24} className="text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      product.special.includes('직접 설계') 
                        ? 'bg-green-500 text-white' 
                        : 'bg-white bg-opacity-20 text-white'
                    }`}>
                      {product.special}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-primary-100">{product.description}</p>
                </div>

                {/* Product Content */}
                <div className="p-6">
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-secondary-900 mb-3">{t('products.features.title')}</h4>
                    <div className="space-y-2">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-secondary-700">
                          <CheckCircle size={16} className="text-primary-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-secondary-900 mb-3">{t('products.applications.title')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.slice(0, 3).map((app, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-secondary-600 rounded-full text-xs">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expand Button */}
                  <button
                    onClick={() => setExpandedProduct(expandedProduct === product.id ? null : product.id)}
                    className="w-full flex items-center justify-center text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    {expandedProduct === product.id ? (
                      <>
                        <ChevronUp size={16} className="mr-1" />
                        {t('products.collapse')}
                      </>
                    ) : (
                      <>
                        {t('products.expand')}
                        <ChevronDown size={16} className="ml-1" />
                      </>
                    )}
                  </button>

                  {/* Expanded Content */}
                  {expandedProduct === product.id && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      {/* Specifications */}
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-secondary-900 mb-3">{t('products.specifications.title')}</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {Object.entries(product.specifications).map(([key, value]) => (
                            <div key={key} className="bg-gray-50 p-3 rounded-lg">
                              <div className="text-xs text-secondary-500 mb-1">{key}</div>
                              <div className="text-sm font-medium text-secondary-900">{value}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* All Features */}
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-secondary-900 mb-3">{t('products.allFeatures.title')}</h4>
                        <div className="space-y-2">
                          {product.features.map((feature, index) => (
                            <div key={index} className="flex items-center text-secondary-700">
                              <CheckCircle size={16} className="text-primary-500 mr-2 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* All Applications */}
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-secondary-900 mb-3">{t('products.allApplications.title')}</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.applications.map((app, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-100 text-secondary-600 rounded-full text-xs">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex gap-3">
                        <button className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                          {t('products.quote')}
                        </button>
                        <Link href="/services" className="flex-1 border border-primary-200 text-primary-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-50 transition-colors text-center">
                          {t('products.viewServices')}
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary-900 to-secondary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('products.cta.title')}
          </h2>
          <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
            {t('products.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-primary-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition-colors">
              {t('products.cta.contact')}
            </Link>
            <Link href="/services" className="border-2 border-primary-200 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-500 transition-colors">
              {t('products.cta.services')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
