'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              이용약관
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              본 약관은 회사 웹사이트 이용에 관한 규정을 정합니다
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                제1조 (목적)
              </h2>
              <p className="text-secondary-600 mb-6">
                본 약관은 경인 엔지니어링(이하 "회사")이 제공하는 웹사이트 서비스의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
              </p>

              <h2 className="text-2xl font-bold text-secondary-900 mb-6 mt-8">
                제2조 (정의)
              </h2>
              <p className="text-secondary-600 mb-6">
                본 약관에서 사용하는 용어의 정의는 다음과 같습니다:
              </p>
              <ul className="list-disc pl-6 text-secondary-600 mb-6 space-y-2">
                <li>"서비스"란 회사가 제공하는 웹사이트 및 관련 서비스를 의미합니다.</li>
                <li>"이용자"란 회사 웹사이트에 접속하여 본 약관에 따라 회사가 제공하는 서비스를 받는 자를 의미합니다.</li>
                <li>"문의"란 이용자가 회사에 제품이나 서비스에 대한 문의를 하는 행위를 의미합니다.</li>
                <li>"견적요청"이란 이용자가 회사에 제품이나 서비스에 대한 견적을 요청하는 행위를 의미합니다.</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-900 mb-6 mt-8">
                제3조 (약관의 효력 및 변경)
              </h2>
              <p className="text-secondary-600 mb-6">
                본 약관은 웹사이트에 게시함으로써 효력이 발생합니다. 회사는 필요한 경우 관련법령을 위배하지 않는 범위에서 본 약관을 변경할 수 있으며, 변경된 약관은 웹사이트에 공지함으로써 효력이 발생합니다.
              </p>

              <h2 className="text-2xl font-bold text-secondary-900 mb-6 mt-8">
                제4조 (서비스의 제공)
              </h2>
              <p className="text-secondary-600 mb-6">
                회사는 다음과 같은 서비스를 제공합니다:
              </p>
              <ul className="list-disc pl-6 text-secondary-600 mb-6 space-y-2">
                <li>회사 정보 및 제품 소개</li>
                <li>고객 문의 접수 및 응대</li>
                <li>견적 요청 접수 및 처리</li>
                <li>기타 회사가 정하는 서비스</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-900 mb-6 mt-8">
                제5조 (서비스 이용)
              </h2>
              <p className="text-secondary-600 mb-6">
                이용자는 회사가 제공하는 서비스를 이용할 수 있으며, 이용 시 다음 사항을 준수해야 합니다:
              </p>
              <ul className="list-disc pl-6 text-secondary-600 mb-6 space-y-2">
                <li>관련법령 및 본 약관을 준수할 것</li>
                <li>타인의 권리나 명예, 신용 등을 침해하지 않을 것</li>
                <li>서비스의 정상적인 운영을 방해하지 않을 것</li>
                <li>허위 정보를 제공하지 않을 것</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-900 mb-6 mt-8">
                제6조 (회사의 의무)
              </h2>
              <p className="text-secondary-600 mb-6">
                회사는 다음과 같은 의무를 가집니다:
              </p>
              <ul className="list-disc pl-6 text-secondary-600 mb-6 space-y-2">
                <li>안정적이고 지속적인 서비스 제공</li>
                <li>이용자의 개인정보 보호</li>
                <li>이용자로부터 접수된 문의 및 견적요청에 대한 신속한 처리</li>
                <li>관련법령 및 본 약관을 준수</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-900 mb-6 mt-8">
                제7조 (이용자의 의무)
              </h2>
              <p className="text-secondary-600 mb-6">
                이용자는 다음과 같은 의무를 가집니다:
              </p>
              <ul className="list-disc pl-6 text-secondary-600 mb-6 space-y-2">
                <li>정확한 정보 제공</li>
                <li>서비스 이용 시 관련법령 및 본 약관 준수</li>
                <li>회사의 서비스 운영을 방해하는 행위 금지</li>
                <li>타인의 권리나 명예, 신용 등을 침해하는 행위 금지</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-900 mb-6 mt-8">
                제8조 (서비스의 중단)
              </h2>
              <p className="text-secondary-600 mb-6">
                회사는 다음의 경우 서비스 제공을 중단할 수 있습니다:
              </p>
              <ul className="list-disc pl-6 text-secondary-600 mb-6 space-y-2">
                <li>서비스용 설비의 점검, 보수 또는 공사로 인한 부득이한 경우</li>
                <li>전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지했을 경우</li>
                <li>기타 불가항력적 사유가 있는 경우</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-900 mb-6 mt-8">
                제9조 (면책조항)
              </h2>
              <p className="text-secondary-600 mb-6">
                회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다. 회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.
              </p>

              <h2 className="text-2xl font-bold text-secondary-900 mb-6 mt-8">
                제10조 (분쟁해결)
              </h2>
              <p className="text-secondary-600 mb-6">
                회사와 이용자 간에 발생한 분쟁에 대해서는 당사자 간의 합의로 해결하며, 합의가 이루어지지 않을 경우 관련법령에 따라 해결합니다.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <h3 className="text-lg font-bold text-secondary-900 mb-4">
                  문의 및 연락처
                </h3>
                <div className="text-secondary-600 space-y-2">
                  <p><strong>회사명:</strong> 경인엔지니어링</p>
                  <p><strong>담당자:</strong> 김병훈</p>
                  <p><strong>연락처:</strong> 010-9161-0982</p>
                  <p><strong>이메일:</strong> bhkim@kieng.co.kr</p>
                  <p><strong>주소:</strong> 경기도 김포시 대곶면 대곶로 382번길 122</p>
                </div>
                <p className="text-secondary-600 mt-4">
                  본 약관에 대한 문의사항이 있으시면 위 연락처로 문의해 주시기 바랍니다.
                </p>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>시행일자:</strong> 2024년 1월 1일<br/>
                  <strong>최종 수정일:</strong> 2025년 08월 08일
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
