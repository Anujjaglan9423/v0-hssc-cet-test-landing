'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Copy, Check } from 'lucide-react'

export function SupabaseConfigForm() {
  const [url, setUrl] = useState('')
  const [key, setKey] = useState('')
  const [copied, setCopied] = useState<'url' | 'key' | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!url.trim() || !key.trim()) {
      alert('Please fill in both fields')
      return
    }

    try {
      // Store in environment variables
      const response = await fetch('/api/config/supabase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: url.trim(),
          anonKey: key.trim(),
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setUrl('')
        setKey('')
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        alert('Failed to save configuration')
      }
    } catch (error) {
      console.error('Error saving config:', error)
      alert('Error saving configuration')
    }
  }

  const copyToClipboard = (text: string, type: 'url' | 'key') => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Connect Your Supabase Database</CardTitle>
          <CardDescription>
            Enter your Supabase project credentials to connect your database
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {submitted && (
            <Alert className="border-green-500 bg-green-50">
              <Check className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                Supabase configuration saved successfully!
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="url" className="block text-sm font-medium">
                Supabase Project URL
              </label>
              <div className="relative">
                <Input
                  id="url"
                  type="text"
                  placeholder="https://your-project.supabase.co"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="pr-10"
                />
                {url && (
                  <button
                    type="button"
                    onClick={() => copyToClipboard(url, 'url')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded"
                  >
                    {copied === 'url' ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4 text-gray-500" />
                    )}
                  </button>
                )}
              </div>
              <p className="text-xs text-gray-500">
                Found in Settings → API → Project URL in your Supabase dashboard
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="key" className="block text-sm font-medium">
                Supabase Anon Key
              </label>
              <div className="relative">
                <Input
                  id="key"
                  type="password"
                  placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  className="pr-10"
                />
                {key && (
                  <button
                    type="button"
                    onClick={() => copyToClipboard(key, 'key')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded"
                  >
                    {copied === 'key' ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4 text-gray-500" />
                    )}
                  </button>
                )}
              </div>
              <p className="text-xs text-gray-500">
                Found in Settings → API → Project API keys in your Supabase dashboard
              </p>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={!url.trim() || !key.trim()}
            >
              Save Configuration
            </Button>
          </form>

          <div className="border-t pt-6">
            <h4 className="font-semibold mb-3">How to find your credentials:</h4>
            <ol className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-3">
                <span className="font-semibold text-gray-900 flex-shrink-0">1.</span>
                <span>Go to your Supabase project dashboard</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-gray-900 flex-shrink-0">2.</span>
                <span>Click on Settings in the left sidebar</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-gray-900 flex-shrink-0">3.</span>
                <span>Go to the API tab</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-gray-900 flex-shrink-0">4.</span>
                <span>Copy your Project URL and Anon Key (public key)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-gray-900 flex-shrink-0">5.</span>
                <span>Paste them in the fields above and click Save</span>
              </li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
