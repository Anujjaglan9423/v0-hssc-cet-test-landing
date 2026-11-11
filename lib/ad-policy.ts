/**
 * Conservative ad eligibility filter; keep private, test and utility pages free
 * from ad units. This is not a substitute for the AdSense dashboard page exclusions.
 */
const blockedPrefixes = [
  "/admin", "/api", "/student", "/auth", "/login", "/signup",
  "/mock-test-attempt", "/mock-test-results", "/take-test",
  "/profile", "/dashboard", "/settings", "/forgot-password",
  "/reset-password", "/verify", "/notifications",
]

export function isAdEligiblePath(pathname: string | null | undefined): boolean {
  if (!pathname) return false
  const path = pathname.split("?")[0].replace(/\/$/, "") || "/"
  if (blockedPrefixes.some((prefix) => path === prefix || path.startsWith(`${prefix}/`))) return false
  // Per-test screens can include navigation/instructions, not substantial editorial content.
  if (path.startsWith("/mock-test/")) return false
  return true
}
