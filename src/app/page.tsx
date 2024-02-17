import Image from "next/image";
import Icon from "@mdi/react";
import { mdiInstagram } from "@mdi/js";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="./logo.jpg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      {/* Page Container */}
      <div className="flex items-center justify-centerpy-48">
        <div className="flex flex-col">
          <div className="flex flex-col mt-8">
            <div className="container max-w-7xl px-4">
              <div className="flex flex-wrap justify-center text-center mb-24">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex pb-8">
                    <h1 className=" text-yellow-600  flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-4 pt-6 text-lg md:text-2xl lg:text-4xl backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                      CRT Fams Squad
                    </h1>
                  </div>

                  <p className="text-gray-300 text-lg font-light">
                    &quot;Our team is so good at multitasking. We can listen,
                    ignore,and forget all at the same time!&quot;
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center">
                {/* rizal */}
                <div className="w-full md:w-5/12 lg:w-2/12 mb-6 px-6 sm:px-6 lg:px-3">
                  <div className="flex flex-col">
                    <a href="#" className="mx-auto">
                      <Image
                        alt="AI One"
                        className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src="https://media.licdn.com/dms/image/D5603AQEwGYhJhaQe8Q/profile-displayphoto-shrink_200_200/0/1702873275887?e=1709164800&v=beta&t=cbJNIFHtRJEV6ktDWX0StCdsUmijN00eoL3LGV0sgO8"
                        width={400}
                        height={400}
                      />
                    </a>

                    <div className="text-center mt-6">
                      <h1 className="text-gray-200 text-xl font-bold mb-1">
                        AI One
                      </h1>

                      <div className="text-gray-400 font-light mb-2">
                        Roamer Specialist
                      </div>

                      <div
                        className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                      >
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-pink-50/40 bg-pink-100/30 h-10 w-10"
                        >
                          <Icon
                            className=" text-pink-400 mx-auto mt-2"
                            path={mdiInstagram}
                            size={1}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* reza */}
                <div className="w-full md:w-5/12 lg:w-2/12 mb-6 px-6 sm:px-6 lg:px-3">
                  <div className="flex flex-col">
                    <a href="#" className="mx-auto">
                      <Image
                        alt="Reza"
                        className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src="https://media.licdn.com/dms/image/C5603AQEO7mgqxYdP4Q/profile-displayphoto-shrink_200_200/0/1645444762437?e=1713398400&v=beta&t=wRXvEJDykT3LStWXYHuDegRXWdswyDqoG7cqQKzao74"
                        width={400}
                        height={400}
                      />
                    </a>

                    <div className="text-center mt-6">
                      <h1 className="text-gray-200 text-xl font-bold mb-1">
                        Donkeymonkey
                      </h1>

                      <div className="text-gray-400 font-light mb-2">
                        Marksman Specialist
                      </div>

                      <div
                        className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                      >
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-pink-50/40 bg-pink-100/30 h-10 w-10"
                        >
                          <Icon
                            className=" text-pink-400 mx-auto mt-2"
                            path={mdiInstagram}
                            size={1}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* syaukiky */}
                <div className="w-full md:w-5/12 lg:w-2/12 mb-6 px-6 sm:px-6 lg:px-3">
                  <div className="flex flex-col">
                    <a href="#" className="mx-auto">
                      <Image
                        alt="sauki"
                        className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80"
                        width={400}
                        height={400}
                      />
                    </a>

                    <div className="text-center mt-6">
                      <h1 className="text-gray-200 text-xl font-bold mb-1">
                        Syaukiky
                      </h1>

                      <div className="text-gray-400 font-light mb-2">
                        Fighter Specialist
                      </div>

                      <div
                        className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                      >
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-pink-50/40 bg-pink-100/30 h-10 w-10"
                        >
                          <Icon
                            className=" text-pink-400 mx-auto mt-2"
                            path={mdiInstagram}
                            size={1}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* king of jaguar */}

                <div className="w-full md:w-5/12 lg:w-2/12 mb-6 px-6 sm:px-6 lg:px-3">
                  <div className="flex flex-col">
                    <a href="#" className="mx-auto">
                      <Image
                        alt="dul"
                        className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80"
                        width={400}
                        height={400}
                      />
                    </a>

                    <div className="text-center mt-6">
                      <h1 className="text-gray-200 text-xl font-bold mb-1">
                        King of jaguar
                      </h1>

                      <div className="text-gray-400 font-light mb-2">
                        Assassin Specialist
                      </div>

                      <div
                        className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                      >
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-pink-50/40 bg-pink-100/30 h-10 w-10"
                        >
                          <Icon
                            className=" text-pink-400 mx-auto mt-2"
                            path={mdiInstagram}
                            size={1}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* moli */}
                <div className="w-full md:w-5/12 lg:w-2/12 mb-6 px-6 sm:px-6 lg:px-3">
                  <div className="flex flex-col">
                    <a href="#" className="mx-auto">
                      <Image
                        alt="dul"
                        className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src="https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80"
                        width={400}
                        height={400}
                      />
                    </a>

                    <div className="text-center mt-6">
                      <h1 className="text-gray-200 text-xl font-bold mb-1">
                        Moli
                      </h1>

                      <div className="text-gray-400 font-light mb-2">
                        Support Specialist
                      </div>

                      <div
                        className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                      >
                        <a
                          href="#"
                          className="flex rounded-full hover:bg-pink-50/40 bg-pink-100/30 h-10 w-10"
                        >
                          <Icon
                            className=" text-pink-400 mx-auto mt-2"
                            path={mdiInstagram}
                            size={1}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Container */}
    </main>
  );
}
