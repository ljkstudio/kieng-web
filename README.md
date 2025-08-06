# 경인엔지니어링 웹사이트

경인엔지니어링의 공식 웹사이트입니다. Next.js와 Tailwind CSS로 제작된 모던한 설비제조 및 엔지니어링 업체 랜딩 페이지입니다.

## 🚀 주요 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 디바이스에서 최적화된 경험
- **모던한 UI**: 최신 트렌드의 컬러와 디자인 시스템
- **빠른 성능**: Next.js 14의 최신 기능을 활용한 최적화
- **다국어 지원**: 한국어/영어 언어 전환 기능
- **전체화면 비디오**: 히어로 섹션 배경 비디오
- **접근성**: 웹 접근성 가이드라인 준수
- **SEO 최적화**: 검색엔진 최적화 구현

## 🛠️ 기술 스택

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)
- **Internationalization**: React Context API
- **State Management**: React Hooks

## 📦 설치 및 실행

### 필수 요구사항

- Node.js 18.17.0 이상
- npm 또는 yarn

### 설치

1. 의존성 패키지 설치:
```bash
npm install
```

2. 개발 서버 실행:
```bash
npm run dev
```

3. 브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 📁 프로젝트 구조

```
kieng-web-next/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── tailwind.config.js
├── next.config.js
└── package.json
```

## 🎨 디자인 시스템

### 컬러 팔레트

- **Primary**: Blue tones (#0ea5e9 계열)
- **Secondary**: Gray tones (#71717a 계열)
- **Accent**: Orange tones (#f97316 계열)

### 타이포그래피

- **폰트**: Inter
- **제목**: 24px ~ 60px
- **본문**: 16px ~ 20px

## 📄 페이지 구성

1. **히어로 섹션**: 전체화면 비디오 배경과 핵심 메시지
2. **서비스 섹션**: 주요 서비스 및 솔루션 소개
3. **회사 소개**: 기업 가치와 실적
4. **연락처**: 문의 양식과 연락처 정보
5. **푸터**: 추가 정보와 소셜 링크

## 🌐 다국어 지원

### 언어 전환 기능

- **지원 언어**: 한국어 (기본), 영어
- **전환 방법**: 네비게이션 바의 언어 버튼 클릭
- **실시간 전환**: 페이지 새로고침 없이 즉시 언어 변경
- **전역 상태**: React Context API를 통한 언어 상태 관리

### 번역 시스템

- 모든 텍스트가 `contexts/LanguageContext.tsx`에 정의
- 키-값 형태의 번역 데이터 구조
- 컴포넌트에서 `useLanguage()` 훅과 `t()` 함수 사용

```typescript
const { language, setLanguage, t } = useLanguage()
// 사용 예: t('nav.home') → '홈' (한국어) 또는 'Home' (영어)
```

## 🎬 비디오 설정

히어로 섹션에서 전체화면 배경 비디오를 사용합니다:

### 비디오 파일 준비

1. `public/videos/` 폴더에 다음 파일들을 추가하세요:
   - `industrial-hero.mp4` (메인 비디오 - MP4 형식)
   - `industrial-hero.webm` (웹 최적화 - WebM 형식, 선택사항)

2. `public/images/` 폴더에 포스터 이미지를 추가하세요:
   - `industrial-hero-poster.jpg` (비디오 로딩 전 표시할 이미지)

### 권장 비디오 사양

- **해상도**: 1920x1080 (Full HD) 이상
- **길이**: 10-30초 (무한 루프)
- **용량**: 10MB 이하 (웹 최적화)
- **내용**: 산업용 설비, 제조 공정, 엔지니어링 장면 등

### 비디오 특징

- 자동 재생 (음소거)
- 무한 루프
- 반응형 크기 조정
- 모바일 최적화
- 비디오 미지원 브라우저용 폴백

## 🚀 배포

이 프로젝트는 다음 플랫폼에 배포할 수 있습니다:

- **Vercel** (권장)
- **Netlify**
- **AWS Amplify**
- **기타 Next.js 호스팅 서비스**

## 📞 문의

- **이메일**: info@kieng.co.kr
- **전화**: 031-123-4567
- **주소**: 경기도 수원시 영통구 광교중앙로 123, 4층

---

© 2024 경인엔지니어링. All rights reserved. 