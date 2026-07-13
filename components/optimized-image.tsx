import Image, { ImageProps } from 'next/image'

/**
 * Optimized Image Component
 * Wrapper around Next.js Image with performance best practices
 * - Automatic format conversion (WebP, AVIF)
 * - Responsive sizing
 * - Lazy loading by default
 * - Blur placeholder support
 */

interface OptimizedImageProps extends Omit<ImageProps, 'alt'> {
  alt?: string
  priority?: boolean
  blurPlaceholder?: boolean
}

export function OptimizedImage({
  alt = 'Image',
  priority = false,
  blurPlaceholder = false,
  className,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      priority={priority}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      placeholder={blurPlaceholder ? 'blur' : 'empty'}
      blurDataURL={
        blurPlaceholder
          ? 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22400%22 height=%22300%22/%3E%3C/svg%3E'
          : undefined
      }
      sizes={
        props.sizes ||
        '(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1000px'
      }
    />
  )
}

/**
 * Hero Image Component
 * Optimized for large hero images with blur placeholder
 */
export function HeroImage({
  src,
  alt = 'Hero Image',
  ...props
}: OptimizedImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      priority={true}
      blurPlaceholder={true}
      sizes="100vw"
      className="w-full h-auto"
      {...props}
    />
  )
}

/**
 * Thumbnail Image Component
 * Optimized for smaller images like test previews, avatars
 */
export function ThumbnailImage({
  src,
  alt = 'Thumbnail',
  width = 150,
  height = 150,
  ...props
}: OptimizedImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      blurPlaceholder={true}
      sizes="(max-width: 640px) 100px, 150px"
      {...props}
    />
  )
}

/**
 * Background Image Component
 * Optimized for use as background images (via CSS-in-JS or Tailwind)
 */
export function BackgroundImage({
  src,
  alt = 'Background',
  ...props
}: OptimizedImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      fill={true}
      blurPlaceholder={true}
      className="object-cover"
      {...props}
    />
  )
}

/**
 * Avatar Image Component
 * Small, rounded images for user profiles
 */
export function AvatarImage({
  src,
  alt = 'Avatar',
  size = 40,
  ...props
}: OptimizedImageProps & { size?: number }) {
  return (
    <OptimizedImage
      src={src || '/default-avatar.png'}
      alt={alt}
      width={size}
      height={size}
      blurPlaceholder={true}
      className="rounded-full"
      sizes={`${size}px`}
      {...props}
    />
  )
}

/**
 * Responsive Card Image
 * Images that scale with card layouts
 */
export function CardImage({
  src,
  alt = 'Card Image',
  aspectRatio = 'square', // 'square', 'video', 'portrait'
  ...props
}: OptimizedImageProps & { aspectRatio?: 'square' | 'video' | 'portrait' }) {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
  }

  return (
    <div className={`relative ${aspectClasses[aspectRatio]} overflow-hidden rounded-lg`}>
      <OptimizedImage
        src={src}
        alt={alt}
        fill={true}
        blurPlaceholder={true}
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        {...props}
      />
    </div>
  )
}
