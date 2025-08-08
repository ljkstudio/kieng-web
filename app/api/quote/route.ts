import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

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

    // 견적 요청 생성
    const quoteRequest = await prisma.quoteRequest.create({
      data: {
        name,
        company,
        email,
        phone,
        productType,
        quantity,
        specifications,
        deadline: deadline || null,
        budget: budget || null,
        additionalInfo: additionalInfo || null,
      }
    })

    return NextResponse.json(
      { 
        message: '견적 요청이 성공적으로 접수되었습니다.',
        id: quoteRequest.id 
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
    const quoteRequests = await prisma.quoteRequest.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(quoteRequests)
  } catch (error) {
    console.error('Get quote requests error:', error)
    return NextResponse.json(
      { error: '견적 요청 조회 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}
