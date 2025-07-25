'use client';
import Link from 'next/link';

export default function NavBar() {
  return (
    <div className="flex text-zinc-100 font-medium bg-amber-900 justify-center py-5">
      <nav style={{ padding: '0.5rem'}}>
        <Link href="/" style={{ marginRight: '2rem' }}>Início</Link>
        <Link href="/sobre" style={{ marginRight: '2rem' }}>Sobre</Link>
        <Link href="/produtos" style={{ marginRight: '2rem' }}>Produtos</Link>
        <Link href="/contatos" style={{ marginRight: '2rem' }}>Contatos</Link>
      </nav>
    </div>
  );
}
