# Blog Feature Guide

## Overview

The Blog Management System is a modern admin interface for creating, editing, and managing blog posts with full SEO optimization support. It's built with React, Next.js 16, and integrates with Supabase for data persistence.

## Features

### 1. **Blog Creation Form** (`/admin/blog/create`)
- **Title**: Main blog post title (auto-generates slug)
- **Slug**: URL-friendly identifier (editable, auto-generated from title)
- **Focus Keyword**: Primary SEO keyword for the post
- **Meta Title**: Search result title (60 character limit)
- **Meta Description**: Search result description (160 character limit)
- **Category**: Dropdown selection (CET, Current Affairs, Study Tips, Exam Guide, Career Advice, Technology)
- **Tags**: Comma-separated keywords
- **Featured Image**: Upload thumbnail with preview
- **Content**: Rich text editor using ReactQuill with formatting tools
- **Status**: Draft or Published

### 2. **SEO Preview Section** (Right Column)
- Real-time preview of how the post appears in Google search results
- Shows meta title, description, and URL slug
- Character count indicators for meta fields
- SEO tips and best practices guide

### 3. **Validation**
- Required fields: Title, Slug, Content, Category, Meta Title, Meta Description
- Real-time validation with error messages
- Character limit enforcement for meta fields
- Content requirement validation

### 4. **Blog Management Dashboard** (`/admin/blog`)
- View all published and draft posts in separate tables
- Quick stats showing published and draft post counts
- Edit and delete functionality
- Featured image thumbnails
- Date and category display
- Links to view published posts

### 5. **Public Blog Pages**
- **Blog List** (`/blog`): Displays all published blog posts
- **Blog Detail** (`/blog/[slug]`): Renders individual blog post with full content
- Automatic read time calculation
- SEO metadata display
- Tag display
- Call-to-action section

## File Structure

```
/app
  /admin
    /blog
      page.tsx                 # Blog management dashboard
      /create
        page.tsx               # Create new blog page
      /[id]
        /edit
          page.tsx             # Edit existing blog page
  /blog
    page.tsx                   # Public blog listing
    /[slug]
      page.tsx                 # Individual blog post display

/components
  /admin
    blog-creation-form.tsx     # Main form component with validation

/lib
  /actions
    admin.ts                   # Blog CRUD operations (added functions)
```

## Database Schema

The `blogs` table in Supabase contains:
- `id` (uuid): Primary key
- `title` (text): Blog post title
- `slug` (text): URL slug (unique)
- `focus_keyword` (text): Primary SEO keyword
- `meta_title` (text): SEO title (max 60 chars)
- `meta_description` (text): SEO description (max 160 chars)
- `category` (text): Post category
- `tags` (array): Array of tag strings
- `featured_image_url` (text): Featured image URL
- `description` (text): Rich HTML content
- `status` (text): 'draft' or 'published'
- `created_by` (uuid): Creator's user ID
- `created_at` (timestamp): Creation timestamp
- `updated_at` (timestamp): Last update timestamp

## Server Actions (Added to `lib/actions/admin.ts`)

### `createBlog(data)`
Creates a new blog post with all metadata.

### `updateBlog(id, data)`
Updates an existing blog post.

### `deleteBlog(id)`
Deletes a blog post by ID.

### `getAllBlogs()`
Retrieves all blogs (admin only).

### `getBlogBySlug(slug)`
Retrieves a specific blog by slug (public).

## How to Use

### Creating a Blog Post

1. Navigate to **Admin > Blog**
2. Click **"Create Blog Post"** button
3. Fill in the form fields:
   - Enter a compelling title (auto-generates slug)
   - Optionally edit the slug for SEO-friendly URLs
   - Enter focus keyword for SEO optimization
   - Auto-filled meta title (first 60 chars of title, edit as needed)
   - Write meta description (under 160 characters)
   - Select category from dropdown
   - Add comma-separated tags
   - Upload featured image (click or drag)
   - Write rich content using the editor
   - Choose status (Draft or Published)
4. Click **"Create Post"** to save
5. Published posts appear on `/blog` page immediately

### Editing a Blog Post

1. Go to **Admin > Blog**
2. Find the post in the Published or Draft section
3. Click the **Edit** (pencil) icon
4. Make changes to any field
5. Click **"Update Post"** to save

### Viewing Published Posts

1. Click the **Eye** icon on any published post to view it
2. Or navigate to `/blog` to see all published posts
3. Click any post card to read the full article

### Deleting a Blog Post

1. Click the **Delete** (trash) icon on any post
2. Confirm deletion in the modal dialog
3. Post is removed from the database

## Rich Text Editor Features

The ReactQuill editor includes:
- **Text Formatting**: Bold, Italic, Underline, Strikethrough
- **Headers**: H1, H2, H3 heading levels
- **Lists**: Ordered and bullet point lists
- **Blockquotes**: Long-form quotations
- **Code Blocks**: Pre-formatted code snippets
- **Colors**: Text and background colors
- **Links**: Add hyperlinks
- **Images**: Embed images in content

## SEO Optimization Tips

1. **Meta Title** (50-60 characters)
   - Should include main keyword
   - Unique for each post
   - Make it compelling for clicks

2. **Meta Description** (150-160 characters)
   - Summarize content
   - Include focus keyword naturally
   - Create urgency or curiosity

3. **Focus Keyword**
   - Primary keyword for the post
   - Should appear in title and content
   - Keep it natural and relevant

4. **Slug**
   - Use hyphens, not underscores
   - Keep it short and descriptive
   - Include main keyword if possible

5. **Content**
   - Use proper heading hierarchy
   - Include focus keyword naturally
   - Write for both humans and search engines
   - Use bullet points and lists for readability

## Integration with Sidebar

The Blog management page is integrated into the admin sidebar under **"Blog"** with a BookOpen icon for easy navigation.

## Character Limits

- **Meta Title**: 60 characters (displays the limit as user types)
- **Meta Description**: 160 characters (displays the limit as user types)
- **Focus Keyword**: No limit (but keep it concise)
- **Tags**: Individual tags separated by commas

## Dependencies Added

```json
{
  "react-quill": "^2.0.0"
}
```

## Styling

The form uses:
- Tailwind CSS for responsive design
- Two-column layout (form on left, preview on right)
- Mobile-first responsive design
- Dark mode support via CSS variables
- Consistent with existing admin dashboard styles

## Notes

- Featured images are stored as data URLs (can be optimized for production)
- Posts can be saved as drafts and published later
- Published posts are immediately visible on the public blog page
- SEO metadata is indexed by search engines via Next.js meta tags
- All content is stored in Supabase with proper authentication
