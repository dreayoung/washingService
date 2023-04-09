import { GlobeAltIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logos/2.png';

export default function Footer() {
  return (
    <footer className="footer items-center p-4 bg-transparent px-20 py-10 text-zinc-50 ">
      <div className="items-center grid-flow-col">
        <Image src={logo} alt="ss lgogo" className="w-8 h-8" />
        <p>sparkle squad - demo project</p>
      </div>
      <div className="grid-flow-col gap-4 items-center md:place-self-center md:justify-self-end">
        <Link href="https://wwww.createdbydwe.tech">
          <GlobeAltIcon className="w-8 h-8" />
        </Link>
        <p>createdbydwe</p>
      </div>
    </footer>
  );
}
