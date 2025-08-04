import * as Dialog from '@radix-ui/react-dialog';
import { Instagram, Facebook, Twitter, X } from 'lucide-react';

export function SocialModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
        Redes Sociais
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 w-[90%] max-w-sm space-y-4 rounded-2xl bg-amber-950 p-6 shadow-xl">
          <div className="flex items-center justify-between">
            <Dialog.Title className="font-bold text-lg text-zinc-100">Siga-nos</Dialog.Title>
            <Dialog.Close className="cursor-pointer text-zinc-100 transition hover:text-red-500">
              <X className="h-5 w-5"/>
            </Dialog.Close>
          </div>

          <ul className="space-y-3">

            <li className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border-2 border-amber-600 bg-amber-900 px-3 py-2 transition hover:border-pink-500">
              <Instagram className="text-pink-500" />
              <a href="https://instagram.com" target="_blank" className="pr-1 text-zinc-100" rel="noopener">
                Instagram
              </a>
            </li>

            <li className="flex justify-between items-center bg-amber-900 py-2 px-3 gap-3 border-2 border-amber-600 hover:border-blue-600 transition cursor-pointer rounded-xl">
              <Facebook className="text-blue-600" />
              <a href="https://facebook.com" target="_blank" className="text-zinc-100 pr-1">
                Facebook
              </a>
            </li>

            <li className="flex justify-between items-center bg-amber-900 py-2 px-3 gap-3 border-2 border-amber-600 hover:border-sky-400 transition cursor-pointer rounded-xl">
              <Twitter className="text-sky-400" />
              <a href="https://twitter.com" target="_blank" className="text-zinc-100 pr-1">
                Twitter
              </a>
            </li>

          </ul>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
