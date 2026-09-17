'use client'
import { Search, ShoppingBag, Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [menu, setMenu] = useState(false);
  const cartCount = useSelector(state => state.cart.total);
  const submit = e => { e.preventDefault(); if (search.trim()) router.push(`/shop?search=${encodeURIComponent(search.trim())}`); }
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 glass">
      <div className="page-shell h-[74px] flex items-center justify-between gap-5">
        <Link href="/" className="shrink-0 text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
          <span className="text-violet-600">luma</span>mart<span className="text-violet-600">.</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          <Link className="hover:text-violet-600" href="/">Home</Link>
          <Link className="hover:text-violet-600" href="/shop">Shop</Link>
          <Link className="hover:text-violet-600" href="/#about">About</Link>
          <Link className="hover:text-violet-600" href="/#contact">Contact</Link>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <form onSubmit={submit} className="flex items-center w-48 xl:w-64 rounded-full bg-slate-100 px-4 py-2.5 focus-within:ring-2 focus-within:ring-violet-200">
            <Search size={17} className="text-slate-500"/><input aria-label="Search products" className="w-full bg-transparent outline-none pl-2 text-sm" placeholder="Search products" value={search} onChange={e => setSearch(e.target.value)} />
          </form>
          <Link href="/cart" className="relative grid place-items-center rounded-full border border-slate-200 size-10 hover:border-violet-300 hover:text-violet-600" aria-label="Cart">
            <ShoppingBag size={18}/>{cartCount > 0 && <span className="absolute -right-1 -top-1 min-w-4 h-4 px-1 rounded-full bg-violet-600 text-white text-[9px] grid place-items-center">{cartCount}</span>}
          </Link>
          <Link href="/login" className="rounded-full bg-slate-950 text-white px-5 py-2.5 text-sm font-semibold hover:bg-violet-700">Sign in</Link>
        </div>
        <div className="lg:hidden flex items-center gap-2">
          <Link href="/cart" className="relative grid place-items-center size-10 rounded-full bg-slate-100"><ShoppingBag size={18}/>{cartCount > 0 && <span className="absolute right-0 top-0 min-w-4 h-4 rounded-full bg-violet-600 text-white text-[9px] grid place-items-center">{cartCount}</span>}</Link>
          <button onClick={() => setMenu(!menu)} className="grid place-items-center size-10 rounded-full border border-slate-200" aria-label="Toggle menu">{menu ? <X size={20}/> : <Menu size={20}/>}</button>
        </div>
      </div>
      {menu && <div className="lg:hidden border-t border-slate-200 bg-white px-5 py-5 space-y-3">
        <form onSubmit={submit} className="flex items-center rounded-xl bg-slate-100 px-4 py-3"><Search size={17}/><input autoFocus className="w-full bg-transparent outline-none pl-2 text-sm" placeholder="Search products" value={search} onChange={e => setSearch(e.target.value)} /></form>
        {[['Home','/'],['Shop','/shop'],['About','/#about'],['Contact','/#contact'],['Sign in','/login']].map(([label, href]) => <Link key={href} onClick={() => setMenu(false)} href={href} className="flex items-center justify-between rounded-xl px-3 py-3 font-medium hover:bg-slate-50">{label}<ArrowRight size={16}/></Link>)}
      </div>}
    </header>
  )
}
export default Navbar
