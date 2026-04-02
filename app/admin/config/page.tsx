import { SupabaseConfigForm } from '@/components/supabase-config-form'

export default function ConfigPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-12 px-4">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Configuration</h1>
          <p className="text-slate-400">Manage your application settings and integrations</p>
        </div>
        
        <SupabaseConfigForm />
      </div>
    </div>
  )
}
