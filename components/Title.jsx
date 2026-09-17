'use client'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
export default function Title({title,description,visibleButton=true,href=''}) { return <div className="flex items-end justify-between gap-5"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-violet-600">Luma picks</p><h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-950">{title}</h2><p className="mt-2 text-sm text-slate-500">{description}</p></div>{visibleButton&&<Link href={href} className="shrink-0 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:text-violet-600">View all <ArrowRight size={15}/></Link>}</div> }
