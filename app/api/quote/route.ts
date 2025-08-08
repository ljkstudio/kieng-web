import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const {
      name,
      company,
      email,
      phone,
      productType,
      quantity,
      specifications,
      deadline,
      budget,
      additionalInfo
    } = body

    // 필수 필드 검증
    if (!name || !company || !email || !phone || !productType || !quantity || !specifications) {
      return NextResponse.json(
        { error: '필수 필드가 누락되었습니다.' },
        { status: 400 }
      )
    }

    // 임시로 성공 응답만 반환 (데이터베이스 연동 전)
    return NextResponse.json(
      { 
        message: '견적 요청이 성공적으로 접수되었습니다.',
        id: Date.now() // 임시 ID
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Quote request error:', error)
    return NextResponse.json(
      { error: '견적 요청 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // 임시로 빈 배열 반환
    return NextResponse.json([])
  } catch (error) {
    console.error('Get quote requests error:', error)
    return NextResponse.json(
      { error: '견적 요청 조회 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}
