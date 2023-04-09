import { useState } from 'react';
import Image from 'next/image';

import book1 from '../../public/photos/book1.jpg';

export default function ServiceSelected() {
  const [vehicleT, setVehicle] = useState(false);

  return (
    <main className="flex items-start">
      <Image src={book1} alt="" className="w-1/2 object-cover" />
      <section className="flex flex-col justify-center pt-10 text-zinc-50">
        <div className="px-20 space-y-8">
          <div className="flex justify-center items-center space-x-6 font-mono text-[0.75rem] text-center">
            <div className="text-[1rem]">Includes</div>
            <div className="font-mono">
              <li>
                Hand wash: high-quality car shampoo and a mitt to hand wash the
                car&apos;s exterior, including the body, wheels, and tires
              </li>
              <li>
                Rim cleaning: The rims will be scrubbed with a specialized
                cleaner to remove brake dust and grime.
              </li>
              <li>
                Tire shine: A tire shine product will be applied to give the
                tires a glossy finish.
              </li>
              <li>
                Window cleaning: The exterior windows will be cleaned with a
                specialized glass cleaner to remove any streaks or smudges.
              </li>
              <li>
                Waxing: A layer of wax may be applied to the car&apos;s exterior
                to protect the paint and give it a shiny finish.
              </li>
            </div>
          </div>
          <div className="border-[1px] border-zinc-50 flex flex-col rounded-lg px-10">
            <div className="text-center text-2xl py-6">Slots Available</div>
            <hr className="border-zinc-500 w-[80%] m-auto" />
            <div className="px-10 py-3 text-sm">Vehicle Type</div>
            <div className="grid grid-cols-3 gap-6 font-mono text-xs px-10 pb-4">
              <button
                className={
                  !vehicleT
                    ? `bg-zinc-50 text-zinc-700 rounded-full p-3`
                    : `bg-[#996AA0] text-zinc-700 rounded-full p-3`
                }
                onClick={() => setVehicle(true)}
              >
                Sedan
              </button>
              <button className="bg-zinc-50 text-zinc-700 rounded-full p-3">
                Coupe
              </button>
              <button className="bg-zinc-50 text-zinc-700 rounded-full p-3">
                Suv
              </button>
              <button className="bg-zinc-50 text-zinc-700 rounded-full p-3">
                Limo
              </button>
              <button className="bg-zinc-50 text-zinc-700 rounded-full p-3">
                Truck
              </button>
            </div>
            <hr className="border-zinc-500 w-[80%] m-auto" />
            <form className="py-6 font-mono text-zinc-50">
              <div className="flex justify-center items-center py-6 space-x-4 ">
                <select className="select select-ghost w-1/2 font-mono">
                  <option disabled selected>
                    Date
                  </option>
                  <option>Svelte</option>
                  <option>Vue</option>
                  <option>React</option>
                </select>
                <select className="select select-ghost w-1/2 font-mono">
                  <option disabled selected>
                    Time
                  </option>
                  <option>Svelte</option>
                  <option>Vue</option>
                  <option>React</option>
                </select>
              </div>
              <button className="w-full bg-[#996AA0] p-4 rounded-2xl ">
                Find a time
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
