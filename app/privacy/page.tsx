'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              개인정보처리방침
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              고객님의 개인정보 보호를 위해 최선을 다하고 있습니다
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
                1. 개인정보의 수집 및 이용목적
              </h2>
              <p className="text-secondary-600 mb-6">
                회사는 다음과 같은 목적으로 개인정보를 수집하고 있습니다:
              </p>
              <ul className="list-disc pl-6 text-secondary-600 mb-6 space-y-2">
                <li>서비스 제공 및 계정 관리</li>
                <li>고객 문의 및 상담 응대</li>
                <li>마케팅 및 광고 활용 (동의 시)</li>
                <li>서비스 개선 및 신규 서비스 개발</li>
                <li>법적 의무 이행</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-900 mb-6 mt-8">
                2. 수집하는 개인정보 항목
              </h2>
              <p className="text-secondary-600 mb-6">
                회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다:
              </p>
              <ul className="list-disc pl-6 text-secondary-600 mb-6 space-y-2">
                <li>필수항목: 이름, 이메일 주소, 연락처</li>
                <li>선택항목: 회사명, 직책, 주소</li>
                <li>자동수집항목: IP 주소, 쿠키, 접속 로그, 서비스 이용 기록</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-900 mb-6 mt-8">
                3. 개인정보의 보유 및 이용기간
              </h2>
              <p className="text-secondary-600 mb-6">
                회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
              </p>
              <ul className="list-disc pl-6 text-secondary-600 mb-6 space-y-2">
                <li>계약 또는 청약철회 등에 관한 기록: 5년</li>
                <li>대금결제 및 재화 등의 공급에 관한 기록: 5년</li>
                <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년</li>
                <li>웹사이트 방문기록: 3개월</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-900 mb-6 mt-8">
                4. 개인정보의 제3자 제공
              </h2>
              <p className="text-secondary-600 mb-6">
                회사는 원칙적으로 이용자의 개인정보를 제1조(개인정보의 수집 및 이용목적)에서 명시한 범위 내에서 처리하며, 이용자의 사전 동의 없이는 본래의 범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다. 단, 다음의 경우에는 개인정보를 처리할 수 있습니다:
              </p>
              <ul className="list-disc pl-6 text-secondary-600 mb-6 space-y-2">
                <li>이용자가 사전에 제3자 제공에 동의한 경우</li>
                <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                <li>이용자 또는 그 법정대리인이 의사표시를 할 수 없는 상태에 있거나 주소불명 등으로 사전 동의를 받을 수 없는 경우로서 명백히 이용자 또는 제3자의 급박한 생명, 신체, 재산의 이익을 위하여 필요하다고 인정되는 경우</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-900 mb-6 mt-8">
                5. 개인정보의 파기절차 및 방법
              </h2>
              <p className="text-secondary-600 mb-6">
                회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다. 파기절차 및 방법은 다음과 같습니다:
              </p>
              <ul className="list-disc pl-6 text-secondary-600 mb-6 space-y-2">
                <li>전자적 파일 형태의 정보는 복구 및 재생이 불가능한 방법으로 영구 삭제</li>
                <li>종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기</li>
                <li>개인정보의 보유기간이 경과한 경우: 보유기간의 종료일로부터 30일 이내에 파기</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-900 mb-6 mt-8">
                6. 이용자 및 법정대리인의 권리와 그 행사방법
              </h2>
              <p className="text-secondary-600 mb-6">
                이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다:
              </p>
              <ul className="list-disc pl-6 text-secondary-600 mb-6 space-y-2">
                <li>개인정보 열람요구</li>
                <li>오류 등이 있을 경우 정정 요구</li>
                <li>삭제요구</li>
                <li>처리정지 요구</li>
              </ul>
              <p className="text-secondary-600 mb-6">
                제1항에 따른 권리 행사는 회사에 대해 서면, 전화, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체 없이 조치하겠습니다.
              </p>

              <h2 className="text-2xl font-bold text-secondary-900 mb-6 mt-8">
                7. 개인정보 보호책임자
              </h2>
              <p className="text-secondary-600 mb-6">
                회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <h3 className="text-lg font-bold text-secondary-900 mb-4">
                  개인정보 보호책임자
                </h3>
                <div className="text-secondary-600 space-y-2">
                  <p><strong>성명:</strong> 김병훈</p>
                  <p><strong>직책:</strong> 팀장</p>
                  <p><strong>연락처:</strong> 010-9161-0982</p>
                  <p><strong>이메일:</strong> bhkim@kieng.co.kr</p>
                  <p><strong>주소:</strong> 경기도 김포시 대곶면 대곶로 382번길 122</p>
                </div>
                <p className="text-secondary-600 mt-4">
                  정보주체께서는 회사의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다.
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
