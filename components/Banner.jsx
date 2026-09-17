'use client'
import React from 'react'
import toast from 'react-hot-toast'
import { X } from 'lucide-react'

export default function Banner() {
  const [open, setOpen] = React.useState(true)
  const claim = async () => {
    try { await navigator.clipboard.writeText('LUMA20') } catch {}
    toast.success('Code LUMA20 copied')
  }
  if (!open) return null
  return (
    <div className="bg-slate-950 text-white px-3 py-2.5 text-xs sm:text-sm">
      <div className="page-shell flex items-center justify-center gap-3 sm:gap-6">
        <p><span className="font-semibold text-violet-300">Launch offer.</span> Take 20% off your first order.</p>
        <button onClick={claim} className="hidden sm:inline-flex rounded-full bg-white px-4 py-1.5 font-semibold text-slate-950 hover:bg-violet-100">Copy LUMA20</button>
        <button aria-label="Close offer" onClick={() => setOpen(false)} className="ml-auto rounded-full p-1 hover:bg-white/10"><X size={15}/></button>
      </div>
    </div>
  )
}
