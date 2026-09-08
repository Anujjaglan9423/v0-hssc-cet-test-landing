import AdSenseUnit from "@/components/adsense-unit"

export default function AdPlacement({
  slot,
  className = "",
}: {
  slot?: string
  className?: string
}) {
  return (
    <div className={className}>
      <AdSenseUnit slot={slot} />
    </div>
  )
}
