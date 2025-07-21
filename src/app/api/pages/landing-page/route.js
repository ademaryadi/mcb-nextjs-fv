import { NextResponse } from 'next/server'

import { slidesQuery } from '@/app/server/actions'

export async function GET() {
  return NextResponse.json(await slidesQuery())
}
