'use client';
import Link from 'next/link';
import { SocialModal } from './social';

export default function NavBar() {
  return (
    <div className="flex justify-between items-center px-6 text-zinc-100 font-medium bg-amber-900 py-5">
      Ecommerce
      <nav style={{ padding: '0.5rem'}}>
        <Link href="/" style={{ marginRight: '2rem' }}>Início</Link>
        <Link href="/sobre" style={{ marginRight: '2rem' }}>Sobre</Link>
        <Link href="/produtos" style={{ marginRight: '2rem' }}>Produtos</Link>
        <Link href="/contatos" style={{ marginRight: '2rem' }}>Contatos</Link>
      </nav>
      <SocialModal></SocialModal>
    </div>
  );
}
