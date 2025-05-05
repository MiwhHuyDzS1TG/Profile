import { type NextRequest, NextResponse } from "next/server"
import { getStatistics, reportUserLeaving } from "@/app/actions/statistics"

export async function GET(request: NextRequest) {
  const stats = await getStatistics()
  return NextResponse.json(stats)
}

export async function POST(request: NextRequest) {
  const data = await request.json()

  if (data.action === "leave" && data.visitorId) {
    const stats = await reportUserLeaving(data.visitorId)
    return NextResponse.json(stats)
  }

  return NextResponse.json({ error: "Invalid action" }, { status: 400 })
}
