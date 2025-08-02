import * as Dialog from '@radix-ui/react-dialog';
import { Instagram, Facebook, Twitter, X } from 'lucide-react';

export function SocialModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="px-4 py-2 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Redes Sociais
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-1/2 left-1/2 w-[90%] max-w-sm -translate-x-1/2 -translate-y-1/2 bg-amber-950 rounded-2xl p-6 shadow-xl space-y-4">
          <div className="flex justify-between items-center">
            <Dialog.Title className="text-lg text-zinc-100 font-bold">Siga-nos</Dialog.Title>
            <Dialog.Close className="text-zinc-100 hover:text-red-500 cursor-pointer transition">
              <X className="w-5 h-5"/>
            </Dialog.Close>
          </div>

          <ul className="space-y-3">

            <li className="flex justify-between items-center bg-amber-900 py-2 px-3 gap-3 border-2 border-amber-600 hover:border-pink-500 transition cursor-pointer rounded-xl">
              <Instagram className="text-pink-500" />
              <a href="https://instagram.com" target="_blank" className="text-zinc-100 pr-1">
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
