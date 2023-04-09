import Image from 'next/image';
import nova from '../public/photos/nova.jpg';
import blaze from '../public/photos/blaze.jpg';

export default function Squad() {
  return (
    <main className="min-h-screen bg-black">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <h1 className="py-8 text-6xl text-center text-zinc-50">
            Meet the Squad
          </h1>
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-80 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={blaze}
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-zinc-50 mt-6 mb-3">
                Blaze
              </h2>
              <p className="leading-relaxed text-base">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
              </p>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-80 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover h-full w-full"
                  src={nova}
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-zinc-50 mt-6 mb-3">
                Nova
              </h2>
              <p className="leading-relaxed text-base">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
