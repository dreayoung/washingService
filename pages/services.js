import Image from 'next/image';
import Link from 'next/link';

import exterior from '../public/photos/exterior.jpg';
import golden from '../public/photos/golden.jpg';
import premium from '../public/photos/premium.jpg';

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-10 text-zinc-50 text-center">
      <h2 className="small1 text-[#996AA0] text-xl">select a service</h2>
      <h1 className="lg:text-7xl text-4xl">ss packages</h1>
      <div className="flex lg:flex-row flex-col justify-center items-start lg:space-x-6 space-y-6 lg:space-y-0 lg:pt-20 pt-8 text-center lg:px-10 px-6">
        <div>
          <Link href={`/services/exterior-wash`}>
            <Image
              src={exterior}
              alt=""
              className="object-cover rounded-lg lg:w-[30rem] lg:h-[18rem] hover:ring-2 hover:ring-zinc-50 hover:cursor-pointer"
            />
            <p className="small1 text-xl pt-4">Exterior Wash</p>
          </Link>
        </div>
        <div>
          <Link href={`/services/golden-wash`}>
            <Image
              src={golden}
              alt=""
              className="object-cover rounded-lg lg:w-[35rem] lg:h-[25rem] hover:ring-2 hover:ring-zinc-50 hover:cursor-pointer"
            />
            <p className="small1 text-xl pt-4">Golden Wash</p>
          </Link>
        </div>
        <div>
          <Link href={`/services/premium-touch`}>
            <Image
              src={premium}
              alt=""
              className="object-cover rounded-lg lg:w-[30rem] lg:h-[18rem] hover:ring-2 hover:ring-zinc-50 hover:cursor-pointer"
            />
            <p className="small1 text-xl pt-4">Premium Touch</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
