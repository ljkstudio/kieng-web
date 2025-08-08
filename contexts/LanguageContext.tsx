'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'ko' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// 번역 데이터
const translations: Record<Language, Record<string, string>> = {
  ko: {
    // Navigation
    'nav.home': '홈',
    'nav.about': '회사소개',
    'nav.services': '서비스',
    'nav.products': '제품',
    'nav.contact': '연락처',
    'nav.quote': '견적 문의',
    'nav.tagline': '신뢰할 수 있는 여과 및 정화 솔루션',
    
    // Hero Section
    'hero.badge': '혁신적인 엔지니어링 솔루션',
    'hero.title1': '신뢰할 수 있는',
    'hero.title2': '여과 및 정화 솔루션',
    'hero.description': '2000년 설립 이래 필터, 저장탱크, 이온교환기 등 고품질 여과 및 정화 설비를 제조하며, 현대엔지니어링, 포스코, 삼성물산 등 주요 기업과 파트너십을 맺고 있습니다.',
    'hero.contact': '프로젝트 문의',
    'hero.video': '회사 소개 영상',
    'hero.stats.experience': '년 경험',
    'hero.stats.factory': '㎡ 공장 규모',
    'hero.stats.iso': '인증 시스템',
    'hero.feature.iso': 'ISO 9001 인증',
    'hero.feature.iso.desc': '품질관리 시스템',
    'hero.feature.support': '24/7 지원',
    'hero.feature.support.desc': '기술지원 서비스',
    'hero.feature.custom': '맞춤형 설계',
    'hero.feature.custom.desc': '솔루션 제공',
    
    // Services Section
    'services.badge': '전문 서비스',
    'services.title': '전문 여과 및 정화 솔루션',
    'services.subtitle': '필터, 저장탱크, 이온교환기 등 다양한 정화 설비를 설계, 제조, 설치까지 원스톱 서비스로 제공합니다.',
    'services.filter.title': '필터 & 코알레서',
    'services.filter.desc': 'Filter, Coalescer 및 Filteration Package',
    'services.tank.title': '저장탱크 & 배관',
    'services.tank.desc': 'Storage Tank, Piping Spool 및 Package',
    'services.ion.title': '이온교환 시스템',
    'services.ion.desc': 'Ion Exchanger 및 수처리 솔루션',
    'services.env.title': '환경 솔루션',
    'services.env.desc': 'Silencer, Activated Carbon Canister',
    'services.details': '자세히 보기',
    'services.cta.title': '맞춤형 솔루션이 필요하신가요?',
    'services.cta.desc': '우리의 전문가팀이 귀하의 특별한 요구사항에 맞는 최적의 솔루션을 제안해드립니다.',
    'services.cta.consult': '무료 상담 신청',
    'services.cta.portfolio': '포트폴리오 보기',
    
    // Portfolio Section
    'portfolio.badge': '포트폴리오',
    'portfolio.title': '프로젝트 실적',
    'portfolio.subtitle': '24년간 수행한 다양한 프로젝트와 성과를 확인하세요',
    'portfolio.projects.title': '주요 프로젝트',
    'portfolio.projects.subtitle': '현대엔지니어링, 포스코, 삼성물산 등 주요 기업과의 협력 프로젝트',
    'portfolio.gallery.title': '작업 현장 갤러리',
    'portfolio.gallery.subtitle': '현장 설치 및 시공 과정을 확인하세요',
    'portfolio.filter.all': '전체',
    'portfolio.filter.filter': '필터 시스템',
    'portfolio.filter.tank': '저장탱크',
    'portfolio.filter.ion': '이온교환',
    'portfolio.filter.env': '환경설비',
    'portfolio.project.view': '자세히 보기',
    'portfolio.project.client': '고객사',
    'portfolio.project.period': '수행기간',
    'portfolio.project.description': '프로젝트 개요',
    'portfolio.project.achievements': '주요 성과',
    'portfolio.back': '목록으로 돌아가기',
    'portfolio.stats.experience': '년 경험',
    'portfolio.stats.projects': '완료 프로젝트',
    'portfolio.stats.international': '해외 프로젝트',
    'portfolio.stats.clients': '주요 고객사',
    
    // About Section
    'about.badge': '회사 소개',
    'about.title1': '24년 전통의 신뢰할 수 있는',
    'about.title2': '여과 정화 전문기업',
    'about.description': '2000년 설립 이래, 경인엔지니어링은 필터, 저장탱크, 이온교환기 등 여과 및 정화 설비 전문 제조업체로 현대엔지니어링, 포스코E&C, 삼성물산 등 주요 기업들과 파트너십을 맺으며 성장해왔습니다.',
    'about.partnership.title': '글로벌 파트너십',
    'about.partnership.desc': 'Purolite(UK) 이온교환수지, Calgon(USA) 활성탄 공식 대리점',
    'about.certification.title': '인증 시스템',
    'about.certification.desc': 'ISO 9001, 14001, 45001 품질/환경/안전보건 경영시스템 인증',
    'about.quality.title': '신뢰할 수 있는 품질',
    'about.quality.desc': 'ASME U Stamp 취득 진행 중, 체계적인 품질관리 시스템',
    'about.history': '회사 히스토리',
    'about.certificates': '인증서 보기',
    'about.numbers.title': '숫자로 보는 경인엔지니어링',
    'about.numbers.desc': '신뢰할 수 있는 실적과 성과를 확인하세요',
    'about.stats.experience': '년 경험',
    'about.stats.factory': '㎡ 공장 규모',
    'about.stats.iso': 'ISO 인증',
    'about.stats.newFactory': '김포 신공장',
    
    // Contact Section
    'contact.badge': '연락처',
    'contact.title': '프로젝트 상담 및 문의',
    'contact.subtitle': '전문가와 직접 상담하고 맞춤형 솔루션을 제안받으세요. 빠른 답변을 위해 최선을 다하겠습니다.',
    'contact.form.title': '견적 문의하기',
    'contact.form.name': '성명',
    'contact.form.phone': '연락처',
    'contact.form.email': '이메일',
    'contact.form.company': '회사명',
    'contact.form.message': '문의내용',
    'contact.form.submit': '문의 보내기',
    'contact.info.title': '연락처 정보',
    'contact.info.desc': '언제든지 편하게 연락주세요. 전문 상담팀이 신속하게 답변드리겠습니다.',
    'contact.phone': '전화번호',
    'contact.email': '이메일',
    'contact.address': '공장 주소',
    'contact.size': '공장 규모',
    'contact.map.title': '오시는 길',
    'contact.map.desc': '지도 보기를 클릭하시면 상세한 위치를 확인하실 수 있습니다.',
    'contact.map.view': '지도 보기 →',
    
    // Footer
    'footer.company.desc': '2000년 설립 이래 필터, 저장탱크, 이온교환기 등 여과 및 정화 설비 전문 제조업체로 현대엔지니어링, 포스코, 삼성물산 등 주요 기업의 신뢰받는 파트너입니다.',
    'footer.quickLinks': '빠른 링크',
    'footer.services': '주요 서비스',
    'footer.social.desc': '최신 소식과 기술 정보를 받아보세요',
    'footer.privacy': '개인정보처리방침',
    'footer.terms': '이용약관',
    'footer.sitemap': '사이트맵',
    'footer.copyright': '경인엔지니어링. All rights reserved.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.products': 'Products',
    'nav.contact': 'Contact',
    'nav.quote': 'Get Quote',
    'nav.tagline': 'Reliable Filtration & Purification Solutions',
    
    // Hero Section
    'hero.badge': 'Innovative Engineering Solutions',
    'hero.title1': 'Reliable',
    'hero.title2': 'Filtration & Purification Solutions',
    'hero.description': 'Since 2000, we have been manufacturing high-quality filtration and purification equipment including filters, storage tanks, and ion exchangers, partnering with major companies like Hyundai Engineering, POSCO, and Samsung C&T.',
    'hero.contact': 'Project Inquiry',
    'hero.video': 'Company Video',
    'hero.stats.experience': 'Years Experience',
    'hero.stats.factory': '㎡ Factory Size',
    'hero.stats.iso': 'Certification System',
    'hero.feature.iso': 'ISO 9001 Certified',
    'hero.feature.iso.desc': 'Quality Management',
    'hero.feature.support': '24/7 Support',
    'hero.feature.support.desc': 'Technical Support',
    'hero.feature.custom': 'Custom Design',
    'hero.feature.custom.desc': 'Solution Provider',
    
    // Services Section
    'services.badge': 'Professional Services',
    'services.title': 'Professional Filtration & Purification Solutions',
    'services.subtitle': 'We provide one-stop services from design to manufacturing and installation of various purification equipment including filters, storage tanks, and ion exchangers.',
    'services.filter.title': 'Filter & Coalescer',
    'services.filter.desc': 'Filter, Coalescer and Filteration Package',
    'services.tank.title': 'Storage Tank & Piping',
    'services.tank.desc': 'Storage Tank, Piping Spool and Package',
    'services.ion.title': 'Ion Exchange System',
    'services.ion.desc': 'Ion Exchanger and Water Treatment Solutions',
    'services.env.title': 'Environmental Solutions',
    'services.env.desc': 'Silencer, Activated Carbon Canister',
    'services.details': 'Learn More',
    'services.cta.title': 'Need Custom Solutions?',
    'services.cta.desc': 'Our expert team will propose the optimal solution tailored to your specific requirements.',
    'services.cta.consult': 'Free Consultation',
    'services.cta.portfolio': 'View Portfolio',
    
    // Portfolio Section
    'portfolio.badge': 'Portfolio',
    'portfolio.title': 'Project Achievements',
    'portfolio.subtitle': 'Check out our diverse projects and achievements over 24 years',
    'portfolio.projects.title': 'Main Projects',
    'portfolio.projects.subtitle': 'Cooperative projects with major companies like Hyundai Engineering, POSCO, and Samsung C&T',
    'portfolio.gallery.title': 'Work Site Gallery',
    'portfolio.gallery.subtitle': 'Check out the installation and construction process',
    'portfolio.filter.all': 'All',
    'portfolio.filter.filter': 'Filter System',
    'portfolio.filter.tank': 'Storage Tank',
    'portfolio.filter.ion': 'Ion Exchange',
    'portfolio.filter.env': 'Environmental Equipment',
    'portfolio.project.view': 'Learn More',
    'portfolio.project.client': 'Client',
    'portfolio.project.period': 'Period',
    'portfolio.project.description': 'Project Overview',
    'portfolio.project.achievements': 'Key Achievements',
    'portfolio.back': 'Back to List',
    'portfolio.stats.experience': 'Years Experience',
    'portfolio.stats.projects': 'Completed Projects',
    'portfolio.stats.international': 'International Projects',
    'portfolio.stats.clients': 'Major Clients',
    
    // About Section
    'about.badge': 'About Us',
    'about.title1': '24 Years of Trusted',
    'about.title2': 'Filtration & Purification Specialist',
    'about.description': 'Since its establishment in 2000, Kyoungin Engineering has grown as a specialized manufacturer of filtration and purification equipment including filters, storage tanks, and ion exchangers, building partnerships with major companies such as Hyundai Engineering, POSCO E&C, and Samsung C&T.',
    'about.partnership.title': 'Global Partnership',
    'about.partnership.desc': 'Official distributor of Purolite(UK) ion exchange resins and Calgon(USA) activated carbon',
    'about.certification.title': 'Certification System',
    'about.certification.desc': 'ISO 9001, 14001, 45001 Quality/Environmental/Occupational Health & Safety Management System',
    'about.quality.title': 'Reliable Quality',
    'about.quality.desc': 'ASME U Stamp certification in progress, systematic quality management system',
    'about.history': 'Company History',
    'about.certificates': 'View Certificates',
    'about.numbers.title': 'Kyoungin Engineering by Numbers',
    'about.numbers.desc': 'Check our reliable track record and achievements',
    'about.stats.experience': 'Years Experience',
    'about.stats.factory': '㎡ Factory Size',
    'about.stats.iso': 'ISO Certifications',
    'about.stats.newFactory': 'Gimpo New Factory',
    
    // Contact Section
    'contact.badge': 'Contact',
    'contact.title': 'Project Consultation & Inquiry',
    'contact.subtitle': 'Consult directly with experts and receive customized solutions. We do our best to provide quick responses.',
    'contact.form.title': 'Request Quote',
    'contact.form.name': 'Name',
    'contact.form.phone': 'Phone',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Inquiry',
    'contact.info.title': 'Contact Information',
    'contact.info.desc': 'Feel free to contact us anytime. Our professional consultation team will respond promptly.',
    'contact.phone': 'Phone Number',
    'contact.email': 'Email',
    'contact.address': 'Factory Address',
    'contact.size': 'Factory Size',
    'contact.map.title': 'Directions',
    'contact.map.desc': 'Click on view map to check the detailed location.',
    'contact.map.view': 'View Map →',
    
    // Footer
    'footer.company.desc': 'Since 2000, we have been a specialized manufacturer of filtration and purification equipment including filters, storage tanks, and ion exchangers, serving as a trusted partner for major companies like Hyundai Engineering, POSCO, and Samsung C&T.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Main Services',
    'footer.social.desc': 'Get the latest news and technical information',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.sitemap': 'Sitemap',
    'footer.copyright': 'Kyoungin Engineering Corp. All rights reserved.',
  }
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ko')

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
