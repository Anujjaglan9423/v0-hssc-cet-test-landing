import { readFile } from "node:fs/promises"
import path from "node:path"

const DIWALI_END = Date.UTC(2026, 10, 12)

export async function GET() {
  const isDiwaliPeriod = Date.now() < DIWALI_END
  const filename = isDiwaliPeriod ? "diwali-favicon.png" : "icon-512.png"
  const file = await readFile(path.join(process.cwd(), "public", filename))

  return new Response(file, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "no-store, max-age=0",
    },
  })
}
