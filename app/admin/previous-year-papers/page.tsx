import { PreviousYearPapersManager } from "@/components/admin/previous-year-papers-manager"
import { listAdminPreviousYearPapers } from "@/lib/actions/previous-year-papers"

export default async function AdminPreviousYearPapersPage() {
  const papers = await listAdminPreviousYearPapers()
  return <PreviousYearPapersManager initialPapers={papers} />
}
