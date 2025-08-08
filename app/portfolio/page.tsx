'use client'

import React, { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

// 프로젝트 데이터 타입
interface Project {
  id: number
  title: string
  client: string
  period: string
  category: 'filter' | 'tank' | 'ion' | 'env'
  description: string
  achievements: string[]
  image: string
  gallery: string[]
}

// 실제 프로젝트 데이터 (2025년 최신 데이터 기준)
const projects: Project[] = [
  {
    id: 1,
    title: 'Goseong Combined Natural Gas Power Plant',
    client: 'Mitsubishi Power, Ltd. / Hyundai Engineering Co., Ltd.',
    period: '2025',
    category: 'env',
    description: '고성 복합천연가스발전소의 소음기 및 필터 시스템 구축 프로젝트',
    achievements: [
      '40인치~2인치 규모의 대형 소음기 5세트 제조',
      'ID3200X9150L, ID2200X4040L 등 다양한 규격 소음기 설계',
      '발전소 환경 소음 기준 충족 및 안정성 확보'
    ],
    image: '/images/20240926_160317.jpg',
    gallery: [
      '/images/20240926_160258.jpg',
      '/images/20240925_090456.jpg',
      '/images/20240924_165823.jpg'
    ]
  },
  {
    id: 2,
    title: 'Andong Combined Cycle Power Plant Unit 2',
    client: 'KDHEC / Byucksan Engineering Co., Ltd.',
    period: '2025',
    category: 'env',
    description: '안동 복합화력발전소 2호기의 배기 소음기 및 구조물 시스템',
    achievements: [
      '14인치 규모의 배기 소음기 설계 및 제조',
      'OD1853 X7270L 대형 소음기 제작',
      '6m X 6m x 25m 규모의 구조물 구축'
    ],
    image: '/images/20241123_112308.jpg',
    gallery: [
      '/images/20241119_173546.jpg',
      '/images/20241114_103937.jpg',
      '/images/20240912_143406.jpg'
    ]
  },
  {
    id: 3,
    title: '10m3 Waste Storage Tank (W-HNO3#2)',
    client: 'STI Co., Ltd. / Jeil E&S Co., Ltd.',
    period: '2025',
    category: 'tank',
    description: 'SK하이닉스 폐기물 저장탱크 시스템 구축',
    achievements: [
      'W2062 X D1262 X 4300L 규모의 저장탱크 3세트 제조',
      '1인치~18인치 배관 시스템 구축',
      'SS275 재질의 내식성 확보'
    ],
    image: '/images/20241206_101625.jpg',
    gallery: [
      '/images/20240905_172907.jpg',
      '/images/20240903_135031.jpg',
      '/images/20240830_140123.jpg'
    ]
  },
  {
    id: 4,
    title: 'Kleannara Cheongju Incineration Facility',
    client: 'Korea Engineering Co., Ltd. / Seoul Machinery Co., Ltd.',
    period: '2025',
    category: 'env',
    description: '클린나라 청주 소각시설 소음기 시스템',
    achievements: [
      'OD1400 X 3450L 규모의 소음기 제조',
      'A516-60 재질 적용으로 내구성 확보',
      '2인치~8인치 배관 시스템 구축'
    ],
    image: '/images/20240826_161127.jpg',
    gallery: [
      '/images/20240819_192157.jpg',
      '/images/20240819_183143.jpg',
      '/images/20240803_135944.jpg'
    ]
  },
  {
    id: 5,
    title: 'Data Center (Bupyeong) Data Craft Korea',
    client: 'Coastal Power Co., Ltd. / NSV Co., Ltd.',
    period: '2024',
    category: 'env',
    description: '부평 데이터센터 디젤발전기 배기 소음기 시스템',
    achievements: [
      '750A, 500A 규모의 배기 소음기 2세트 제조',
      'OD1800x4500TL, OD1500x3200TL 대형 소음기 설계',
      '데이터센터 소음 기준 충족'
    ],
    image: '/images/20240801_160058.jpg',
    gallery: [
      '/images/20240729_153417.jpg',
      '/images/20240720_143451.jpg',
      '/images/20240720_143440.jpg'
    ]
  },
  {
    id: 6,
    title: 'Turkistan Combined Cycle Power',
    client: 'Doosan Enerbility Co., Ltd. / Valmax Technology Corporation',
    period: '2024',
    category: 'tank',
    description: '카자흐스탄 터키스탄 복합화력발전소 응축수 배수탱크',
    achievements: [
      'GOST 표준 적용한 응축수 배수탱크 5세트 제조',
      'A516-70 재질의 고품질 탱크 제작',
      '해외 프로젝트 성공적 수행'
    ],
    image: '/images/20240709_080853.jpg',
    gallery: [
      '/images/20240709_080851.jpg',
      '/images/20240708_141132.jpg',
      '/images/20240708_134947.jpg'
    ]
  },
  {
    id: 7,
    title: 'RGO (Regenerated Green Oil)',
    client: 'IPEG ENG, Ltd.',
    period: '2024',
    category: 'filter',
    description: '재생 그린오일 경질 나프타 코알레서 및 중질유 필터',
    achievements: [
      'ID1600x1500TL, ID14"x1800TL 규모의 필터 시스템',
      '경질 나프타 코알레서 및 중질유 필터 4세트 제조',
      'A516-70 재질의 고성능 필터 설계'
    ],
    image: '/images/20240613_134705.jpg',
    gallery: [
      '/images/20240528_144051.jpg',
      '/images/20240517_150830.jpg',
      '/images/20240517_134554.jpg'
    ]
  },
  {
    id: 8,
    title: 'Shuaibah 3 Independent Water',
    client: 'Doosan Enerbility Co., Ltd. / ENK Engineering Co., Ltd.',
    period: '2023',
    category: 'filter',
    description: '사우디아라비아 슈아이바 3 독립수처리 시설 도너 로딩 필터',
    achievements: [
      '316SS 재질의 고급 필터 시스템 구축',
      'ID3"x300TLx2Set 규모의 필터 제조',
      '해외 대형 프로젝트 성공적 수행'
    ],
    image: '/images/20240511_090756.jpg',
    gallery: [
      '/images/20240426_172231.jpg',
      '/images/20240426_172229.jpg',
      '/images/20240426_105204.jpg'
    ]
  },
  {
    id: 9,
    title: 'Jafurah FGSS(Fuel Gas Supply System)',
    client: 'Doosan Enerbility Co., Ltd. / Valmax Technology Corporation',
    period: '2023',
    category: 'tank',
    description: '사우디아라비아 자프라 가스공급시스템 응축수 배수탱크',
    achievements: [
      '9T/17T 규모의 응축수 배수탱크 제조',
      'A516-70 재질의 고품질 탱크 설계',
      '사우디아라비아 ARAMCO 프로젝트 수행'
    ],
    image: '/images/20240419_110111.jpg',
    gallery: [
      '/images/20240417_180200.jpg',
      '/images/20240417_175224.jpg',
      '/images/20240417_141336.jpg'
    ]
  },
  {
    id: 10,
    title: 'Activated Carbon Regeneration Facility',
    client: 'Wintec Glovis. Co., Ltd.',
    period: '2023',
    category: 'env',
    description: '대구광역시 활성탄 재생시설 호퍼 및 구조물',
    achievements: [
      'ID1200x1000TL 규모의 호퍼 6세트 제조',
      'A240-304 재질의 고급 호퍼 시스템',
      '환경시설 소음기 및 구조물 구축'
    ],
    image: '/images/20240413_115839.jpg',
    gallery: [
      '/images/20240328_144533.jpg',
      '/images/20240328_144301.jpg',
      '/images/20240320_153632.jpg'
    ]
  },
  {
    id: 11,
    title: 'Bangladesh Meghnaghat 718MW CCPP',
    client: 'Samsung C&T Corporation',
    period: '2023',
    category: 'env',
    description: '방글라데시 메그나가트 718MW 복합화력발전소 스팀 블로우아웃 소음기',
    achievements: [
      '24인치 규모의 대형 스팀 블로우아웃 소음기 제조',
      'ID3000x9000TL 규모의 소음기 설계',
      '9T/17T/18.5Tons 규모의 대형 소음기 시스템'
    ],
    image: '/images/20240320_153627.jpg',
    gallery: [
      '/images/20240319_154618.jpg',
      '/images/20240229_093928.jpg',
      '/images/20240221_110838.jpg'
    ]
  },
  {
    id: 12,
    title: 'POSCO Pohang 3, 4 Blast Furnace',
    client: 'NSV Co., Ltd.',
    period: '2023',
    category: 'env',
    description: '포스코 포항 3, 4호 고로 스택 소음기 유지보수',
    achievements: [
      'OD3009x13297L 규모의 대형 스택 소음기 2세트',
      '15.5톤 규모의 대형 소음기 시스템',
      '기존 시설 유지보수 및 성능 개선'
    ],
    image: '/images/20240221_092509.jpg',
    gallery: [
      '/images/20240214_160105.jpg',
      '/images/20240125_174255.jpg',
      '/images/20240118_184617.jpg'
    ]
  }
]

export default function PortfolioPage() {
  const { t, language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [galleryFilter, setGalleryFilter] = useState<string>('all')
  const [galleryImages, setGalleryImages] = useState<Array<{src: string, year: string, category: string}>>([])
  const [visibleImages, setVisibleImages] = useState<Array<{src: string, year: string, category: string}>>([])
  const [isLoading, setIsLoading] = useState(false)

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const categories = [
    { key: 'all', label: t('portfolio.filter.all') },
    { key: 'filter', label: t('portfolio.filter.filter') },
    { key: 'tank', label: t('portfolio.filter.tank') },
    { key: 'ion', label: t('portfolio.filter.ion') },
    { key: 'env', label: t('portfolio.filter.env') }
  ]

  // 갤러리 이미지 데이터 (완전히 중복 제거된 고유한 이미지들)
  const allGalleryImages = [
    // 2020년 작업사진들
    { src: '/images/20201125_151932288_01.jpg', year: '2020', category: 'env' },
    { src: '/images/20201125_151932288_02.jpg', year: '2020', category: 'env' },
    { src: '/images/20201125_151932288.jpg', year: '2020', category: 'env' },
    { src: '/images/20201126_030507656.jpg', year: '2020', category: 'env' },
    { src: '/images/20201126_111057.jpg', year: '2020', category: 'env' },
    { src: '/images/20201126_111136.jpg', year: '2020', category: 'env' },
    { src: '/images/20201126_151913.jpg', year: '2020', category: 'env' },
    { src: '/images/20201126_151915.jpg', year: '2020', category: 'env' },
    { src: '/images/20201126_151922.jpg', year: '2020', category: 'env' },
    { src: '/images/20201126_151931.jpg', year: '2020', category: 'env' },
    { src: '/images/20201126_151933.jpg', year: '2020', category: 'env' },
    { src: '/images/20201126_151942.jpg', year: '2020', category: 'env' },
    { src: '/images/20201126_152000.jpg', year: '2020', category: 'env' },
    { src: '/images/20201126_152007.jpg', year: '2020', category: 'env' },
    { src: '/images/20201126_152016.jpg', year: '2020', category: 'env' },
    { src: '/images/20201126_152031.jpg', year: '2020', category: 'env' },
    { src: '/images/20201126_152047.jpg', year: '2020', category: 'env' },
    
    // 2023년 작업사진들
    { src: '/images/20230703_133530.jpg', year: '2023', category: 'env' },
    { src: '/images/20230726_103400.jpg', year: '2023', category: 'env' },
    { src: '/images/20230726_105932.jpg', year: '2023', category: 'env' },
    { src: '/images/20230904_123948.jpg', year: '2023', category: 'env' },
    { src: '/images/20230904_173510.jpg', year: '2023', category: 'env' },
    { src: '/images/20230919_092926.jpg', year: '2023', category: 'env' },
    { src: '/images/20230921_111240.jpg', year: '2023', category: 'env' },
    { src: '/images/20230921_170135.jpg', year: '2023', category: 'env' },
    { src: '/images/20230923_163420.jpg', year: '2023', category: 'env' },
    { src: '/images/20231010_100818.jpg', year: '2023', category: 'env' },
    { src: '/images/20231011_103314.jpg', year: '2023', category: 'env' },
    { src: '/images/20231013_080836.jpg', year: '2023', category: 'env' },
    { src: '/images/20231014_113805.jpg', year: '2023', category: 'env' },
    { src: '/images/20231026_132737.jpg', year: '2023', category: 'env' },
    { src: '/images/20231026_134707.jpg', year: '2023', category: 'tank' },
    { src: '/images/20231027_093543.jpg', year: '2023', category: 'tank' },
    { src: '/images/20231027_093612.jpg', year: '2023', category: 'tank' },
    { src: '/images/20231031_134830.jpg', year: '2023', category: 'env' },
    { src: '/images/20231101_083758.jpg', year: '2023', category: 'env' },
    { src: '/images/20231121_155814.jpg', year: '2023', category: 'env' },
    { src: '/images/20231212_135729.jpg', year: '2023', category: 'env' },
    
    // 2024년 작업사진들
    { src: '/images/20240117_195522.jpg', year: '2024', category: 'env' },
    { src: '/images/20240118_184617.jpg', year: '2024', category: 'env' },
    { src: '/images/20240125_174255.jpg', year: '2024', category: 'env' },
    { src: '/images/20240214_160105.jpg', year: '2024', category: 'env' },
    { src: '/images/20240221_092509.jpg', year: '2024', category: 'env' },
    { src: '/images/20240221_110838.jpg', year: '2024', category: 'env' },
    { src: '/images/20240229_093928.jpg', year: '2024', category: 'env' },
    { src: '/images/20240319_154618.jpg', year: '2024', category: 'env' },
    { src: '/images/20240320_153627.jpg', year: '2024', category: 'env' },
    { src: '/images/20240320_153632.jpg', year: '2024', category: 'env' },
    { src: '/images/20240328_144301.jpg', year: '2024', category: 'env' },
    { src: '/images/20240328_144533.jpg', year: '2024', category: 'env' },
    { src: '/images/20240413_115839.jpg', year: '2024', category: 'env' },
    { src: '/images/20240417_141336.jpg', year: '2024', category: 'tank' },
    { src: '/images/20240417_175224.jpg', year: '2024', category: 'tank' },
    { src: '/images/20240417_180200.jpg', year: '2024', category: 'tank' },
    { src: '/images/20240419_110111.jpg', year: '2024', category: 'tank' },
    { src: '/images/20240426_105204.jpg', year: '2024', category: 'filter' },
    { src: '/images/20240426_172229.jpg', year: '2024', category: 'filter' },
    { src: '/images/20240426_172231.jpg', year: '2024', category: 'filter' },
    { src: '/images/20240511_090756.jpg', year: '2024', category: 'filter' },
    { src: '/images/20240517_134554.jpg', year: '2024', category: 'filter' },
    { src: '/images/20240517_150830.jpg', year: '2024', category: 'filter' },
    { src: '/images/20240528_144051.jpg', year: '2024', category: 'filter' },
    { src: '/images/20240613_134705.jpg', year: '2024', category: 'filter' },
    { src: '/images/20240708_134947.jpg', year: '2024', category: 'tank' },
    { src: '/images/20240708_141132.jpg', year: '2024', category: 'tank' },
    { src: '/images/20240709_080851.jpg', year: '2024', category: 'tank' },
    { src: '/images/20240709_080853.jpg', year: '2024', category: 'tank' },
    { src: '/images/20240720_143440.jpg', year: '2024', category: 'env' },
    { src: '/images/20240720_143451.jpg', year: '2024', category: 'env' },
    { src: '/images/20240729_153417.jpg', year: '2024', category: 'env' },
    { src: '/images/20240801_160058.jpg', year: '2024', category: 'env' },
    { src: '/images/20240803_135944.jpg', year: '2024', category: 'env' },
    { src: '/images/20240819_183143.jpg', year: '2024', category: 'env' },
    { src: '/images/20240819_192157.jpg', year: '2024', category: 'env' },
    { src: '/images/20240826_161127.jpg', year: '2024', category: 'env' },
    { src: '/images/20240830_140123.jpg', year: '2024', category: 'env' },
    { src: '/images/20240903_135031.jpg', year: '2024', category: 'tank' },
    { src: '/images/20240905_172907.jpg', year: '2024', category: 'tank' },
    { src: '/images/20240912_143406.jpg', year: '2024', category: 'env' },
    { src: '/images/20240924_165823.jpg', year: '2024', category: 'env' },
    { src: '/images/20240925_090456.jpg', year: '2024', category: 'env' },
    { src: '/images/20240926_160258.jpg', year: '2024', category: 'env' },
    { src: '/images/20240926_160317.jpg', year: '2024', category: 'env' },
    { src: '/images/20241114_103937.jpg', year: '2024', category: 'env' },
    { src: '/images/20241119_173546.jpg', year: '2024', category: 'env' },
    { src: '/images/20241123_112308.jpg', year: '2024', category: 'env' },
    { src: '/images/20241206_101625.jpg', year: '2024', category: 'tank' }
  ]

  // 갤러리 필터링
  useEffect(() => {
    const filtered = galleryFilter === 'all' 
      ? allGalleryImages 
      : allGalleryImages.filter(img => img.category === galleryFilter)
    setGalleryImages(filtered)
    setVisibleImages(filtered.slice(0, 12))
  }, [galleryFilter])

  // 무한 스크롤
  const loadMoreImages = () => {
    if (isLoading) return
    setIsLoading(true)
    
    setTimeout(() => {
      const currentLength = visibleImages.length
      const nextBatch = galleryImages.slice(currentLength, currentLength + 8)
      setVisibleImages(prev => [...prev, ...nextBatch])
      setIsLoading(false)
    }, 500)
  }

  // 스크롤 이벤트 리스너
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1000) {
        loadMoreImages()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [visibleImages, galleryImages])

  const galleryFilters = [
    { key: 'all', label: '전체' },
    { key: 'filter', label: '필터' },
    { key: 'tank', label: '탱크' },
    { key: 'env', label: '환경' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              {t('portfolio.badge')}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('portfolio.title')}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {t('portfolio.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('portfolio.projects.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('portfolio.projects.subtitle')}
            </p>
          </div>

          {/* Statistics Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 mb-12 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">20+</div>
                <div className="text-blue-100 text-sm">{t('portfolio.stats.experience')}</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">100+</div>
                <div className="text-blue-100 text-sm">{t('portfolio.stats.projects')}</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
                <div className="text-blue-100 text-sm">{t('portfolio.stats.international')}</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-100 text-sm">{t('portfolio.stats.clients')}</div>
              </div>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{project.client.split('/')[0]}</p>
                    <p className="text-xs opacity-90">{project.period}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    {t('portfolio.project.view')} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('portfolio.gallery.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('portfolio.gallery.subtitle')}
            </p>
          </div>

          {/* Gallery Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {galleryFilters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setGalleryFilter(filter.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  galleryFilter === filter.key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Gallery Stats */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              총 <span className="font-semibold text-blue-600">{galleryImages.length}</span>개의 작업사진
              {galleryFilter !== 'all' && (
                <span> • {galleryFilters.find(f => f.key === galleryFilter)?.label} 분야</span>
              )}
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {visibleImages.map((image, i) => (
              <div
                key={i}
                className="group aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 relative"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={`작업사진 ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                    <div className="text-sm font-medium">{image.year}</div>
                    <div className="text-xs">{galleryFilters.find(f => f.key === image.category)?.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleImages.length < galleryImages.length && (
            <div className="text-center">
              <button
                onClick={loadMoreImages}
                disabled={isLoading}
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? '로딩 중...' : '더 보기'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="h-64 bg-gray-200 rounded-lg mb-6 overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {t('portfolio.project.client')}
                      </h3>
                      <p className="text-gray-600">{selectedProject.client}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {t('portfolio.project.period')}
                      </h3>
                      <p className="text-gray-600">{selectedProject.period}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {t('portfolio.project.description')}
                      </h3>
                      <p className="text-gray-600">{selectedProject.description}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">
                    {t('portfolio.project.achievements')}
                  </h3>
                  <ul className="space-y-3">
                    {selectedProject.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-1">•</span>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <h3 className="font-semibold text-gray-900 mb-4">갤러리</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {selectedProject.gallery.map((image, index) => (
                        <div
                          key={index}
                          className="aspect-square bg-gray-200 rounded cursor-pointer hover:opacity-80 transition-opacity overflow-hidden"
                          onClick={() => setSelectedImage(image)}
                        >
                          <img
                            src={image}
                            alt={`${selectedProject.title} 갤러리 ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300"
            >
              ×
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={selectedImage}
                alt="작업사진"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
