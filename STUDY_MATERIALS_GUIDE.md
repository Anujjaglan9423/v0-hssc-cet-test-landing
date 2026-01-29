# Study Materials & Resources Feature Guide

## Overview
The Study Materials feature allows admins to upload PDFs, images, and video links that are displayed publicly on the landing page for all users (no login required).

## Features

### For Admins
- **Upload Study Materials** via a simple form with:
  - Material Type selection (General Info, PDF, Image, Video)
  - Title and Description
  - File upload (for PDFs and Images)
  - Video URL (for video links)
  
- **Manage Materials** page to view and delete uploaded materials

### For Students & Visitors
- **Public Resources Section** on landing page showing:
  - All uploaded study materials
  - Filterable by type (General Info, PDFs, Images, Videos)
  - Direct links to download/view materials
  - No login required

## How to Use

### For Admins

1. **Access Study Materials Admin Page**
   - Go to Admin Dashboard
   - Click "Study Materials" in the sidebar
   - URL: `/admin/study-materials`

2. **Upload New Material**
   - Select material type from dropdown:
     - **General Information**: For syllabus, book recommendations, etc.
     - **Study Material - PDF**: For PDFs, notes, guides
     - **Study Material - Image**: For diagrams, charts, covers
     - **Study Material - Video Link**: For YouTube or other video URLs
   
   - Fill in the title (required)
   - Add optional description
   - Upload file or paste video URL
   - Click "Upload Study Material"

3. **Manage Materials**
   - View all uploaded materials in the list below the form
   - Click "View File" or "Watch Video" to preview
   - Delete materials by clicking the trash icon
   - See the upload date for each material

### For Students & Visitors

1. **View Resources on Landing Page**
   - Resources section appears automatically after "Test Series"
   - Shows all active materials organized by type
   - Click material type badges to see counts

2. **Access Materials**
   - Click "Download PDF" to download study materials
   - Click "View Image" to open images
   - Click "Watch Video" to open video links in new tab
   - No authentication required

## Database Schema

The feature uses a `study_materials` table with:
- `id`: UUID (primary key)
- `type`: Material type (general-info, pdf, image, video)
- `title`: Material title
- `description`: Optional description
- `file_url`: URL to uploaded file (for PDFs/Images)
- `video_url`: URL to video (for video type)
- `is_active`: Boolean to show/hide material
- `created_at`: Upload timestamp
- Row Level Security: Publicly readable, admin-only write access

## File Upload Storage

- Files are uploaded to Supabase Storage in the `uploads` bucket
- Path structure: `study-materials/{timestamp}-{random}.{ext}`
- Supported files:
  - PDFs (up to 50MB)
  - Images: JPG, PNG, WEBP (up to 20MB)
  - Videos: Links only (YouTube, Vimeo, etc.)

## Styling

The Resources section uses:
- Gradient background (white to gray-50)
- Card layout with hover effects
- Color-coded type badges
- Responsive grid (1 col mobile, 2 cols tablet, 3 cols desktop)
- Icons from lucide-react

## Integration Points

### Landing Page
- Imported as `<ResourcesSection />` in `/app/page.tsx`
- Positioned between "Test Series" and "Testimonials" sections
- Automatically hides if no materials exist

### Admin Actions (`/lib/actions/admin.ts`)
- `getStudyMaterials()`: Fetch active materials
- `createStudyMaterial()`: Upload new material
- `deleteStudyMaterial()`: Delete material
- `updateStudyMaterial()`: Update material properties

### Admin Components
- `StudyMaterialsForm`: Upload form component
- Study Materials management page: `/app/admin/study-materials/page.tsx`

## API Endpoints (Server Actions)
All operations use server actions for security:
- No public API endpoints
- Admin-only operations with role verification
- Automatic revalidation of landing page cache

## Troubleshooting

### File Upload Issues
- Ensure CORS is configured in Supabase Storage
- Check file size limits (50MB PDFs, 20MB images)
- Verify storage bucket exists and is accessible

### Materials Not Showing on Landing Page
- Check if materials are marked as `is_active: true`
- Clear browser cache or refresh page
- Check admin dashboard to confirm materials were saved

### Permission Errors
- Ensure logged-in user has `role: 'admin'`
- Check Row Level Security policies in Supabase

## Future Enhancements
- Bulk upload support
- Category/subject organization
- Material preview before upload
- Access tracking and analytics
- Student download history
- Material recommendation system
