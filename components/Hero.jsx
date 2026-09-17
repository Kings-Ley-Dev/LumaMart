'use client'
import { assets, categories } from '@/assets/assets'
import { ArrowUpRight, ChevronRight, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$'
  return <main className="page-shell py-7 sm:py-10">
    <section className="relative overflow-hidden rounded-[32px] bg-slate-950 text-white min-h-[510px] grid lg:grid-cols-[1.05fr_.95fr]">
      <div className="absolute -top-32 -right-20 size-80 rounded-full bg-violet-600/25 blur-3xl" />
      <div className="relative z-10 p-7 sm:p-12 lg:p-14 flex flex-col justify-center">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-medium text-violet-200"><Sparkles size={14}/> Curated tech & lifestyle</div>
        <h1 className="mt-6 max-w-xl text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.03]">Good products. Better <span className="text-violet-400">everyday.</span></h1>
        <p className="mt-5 max-w-lg text-sm sm:text-base leading-7 text-slate-300">Discover useful gadgets, desk essentials and lifestyle finds from independent stores, all in one clean shopping experience.</p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Link href="/shop" className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold hover:bg-violet-400">Explore products <ArrowUpRight size={17}/></Link>
          <span className="text-xs text-slate-400">Starting from <b className="text-white text-lg ml-1">{currency}29</b></span>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400"><span>✓ Verified stores</span><span>✓ Easy returns</span><span>✓ Secure checkout</span></div>
      </div>
      <div className="relative min-h-[300px] lg:min-h-0 overflow-hidden bg-violet-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(139,92,246,.38),transparent_35%)]" />
        <Image src={assets.hero_model_img} alt="LumaMart featured collection" fill priority className="object-cover object-center animate-float-soft" sizes="(max-width: 1024px) 100vw, 50vw" />
      </div>
    </section>
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
      <Link href="/shop?search=Watch" className="group overflow-hidden rounded-3xl bg-amber-50 border border-amber-100 p-7 min-h-48 flex items-center justify-between">
        <div><p className="text-xs font-semibold uppercase tracking-[.2em] text-amber-700">Trending now</p><h2 className="mt-2 text-3xl font-semibold text-slate-900">Wearable tech</h2><p className="mt-3 text-sm text-slate-500">Smart watches and daily companions.</p><span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-slate-900">Shop collection <ChevronRight size={16} className="group-hover:translate-x-1 transition"/></span></div>
        <Image src={assets.hero_product_img1} alt="Smart watch" width={180} height={180} className="w-28 sm:w-36 drop-shadow-xl group-hover:scale-105 transition" />
      </Link>
      <Link href="/shop" className="group overflow-hidden rounded-3xl bg-indigo-50 border border-indigo-100 p-7 min-h-48 flex items-center justify-between">
        <div><p className="text-xs font-semibold uppercase tracking-[.2em] text-indigo-700">Fresh picks</p><h2 className="mt-2 text-3xl font-semibold text-slate-900">Work smarter</h2><p className="mt-3 text-sm text-slate-500">Desk gear built for focus.</p><span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-slate-900">Browse picks <ChevronRight size={16} className="group-hover:translate-x-1 transition"/></span></div>
        <Image src={assets.hero_product_img2} alt="Laptop and desk gear" width={180} height={180} className="w-28 sm:w-36 drop-shadow-xl group-hover:scale-105 transition" />
      </Link>
    </div>
    <div className="mt-7 flex gap-2 overflow-x-auto no-scrollbar pb-1">{categories.map(c => <Link key={c} href={`/shop?search=${encodeURIComponent(c)}`} className="shrink-0 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 hover:border-violet-300 hover:text-violet-600">{c}</Link>)}</div>
  </main>
}
