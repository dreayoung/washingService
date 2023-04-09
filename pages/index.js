import Image from 'next/image';
import Link from 'next/link';
import logo1 from '../public/logos/2.png';
import { StarIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import Footer from '@/components/Reusables/Footer';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center text-center lg:space-y-20 space-y-8 p-24 mainbg text-zinc-50">
        <div className="lg:absolute right-10 top-4 flex justify-center items-center space-x-8">
          <Link href="/squad">
            <p>Meet the Squad</p>
          </Link>
          <Image src={logo1} alt="logo" className="lg:w-20 w-40 " />
        </div>
        {/* for desktop */}
        <div className="hidden lg:flex justify-center items-center space-x-1 absolute -top-8 left-10 border-1 border-zinc-500 bg-zinc-500 bg-opacity-30 backdrop-blur-md rounded-2xl p-4 text-zinc-50 text-xs group cursor-pointer">
          <StarIcon className="h-4 w-4 group-hover:text-yellow-600" />
          <p className="group-hover:underline">
            Become a VIP Member. Join Today
          </p>
        </div>
        {/* for mobile */}
        <div className="lg:hidden flex w-[80%] justify-center items-center space-x-1 absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 bottom-6 border-1 border-zinc-500 bg-zinc-500 bg-opacity-30 backdrop-blur-md rounded-2xl p-4 text-zinc-50 text-xs group cursor-pointer">
          <StarIcon className="h-4 w-4 group-hover:text-yellow-600" />
          <p className="group-hover:underline">
            Become a VIP Member. Join Today
          </p>
        </div>
        <p className="small1">#1 Luxury car cleaning service</p>
        <Link href="/services">
          <div className="flex justify-center items-center space-x-2">
            <h1 className="lg:text-8xl text-5xl whitespace-nowrap">Book Now</h1>
            <ArrowRightCircleIcon className="h-8 w-8" />
          </div>
        </Link>
        <div className="lg:px-10 text-md">
          Want to change your appointment time? click here
        </div>
      </main>
      <Footer />
    </>
  );
}
