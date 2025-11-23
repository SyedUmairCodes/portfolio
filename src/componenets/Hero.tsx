import Selfie from "../assets/selfie.webp";
const Hero = () => {
  return (
    <section className="min-h-screen bg-neutral-950 px-6 py-10 md:px-16 md:py-12 lg:px-24 font-sans text-gray-900 [&::-webkit-scrollbar]:hidden [scrollbar-width:none] overflow-hidden">
      {/* Navigation / Logo Area */}
      <header className="mb-20 md:mb-32">
        <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-white">
          Syed Umair Ali
        </h2>
      </header>

      {/* Main Content Grid */}
      <main className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
        {/* Left Column: Text */}
        <div className="md:col-span-7 lg:col-span-7">
          <h1 className="text-5xl font-medium leading-[1.1] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[5.5rem]">
            Building solutions that perform
          </h1>

          <div className="mt-10 max-w-lg text-lg leading-relaxed text-gray-100 md:text-xl">
            <p>
              I'm a software engineer building digital solutions that align with
              user needs and support business goals.
            </p>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="flex justify-center md:col-span-5 md:justify-end lg:col-span-5">
          <div className="relative aspect-square w-64 overflow-hidden rounded-full md:w-80 lg:w-96">
            <img
              src={Selfie}
              alt="Portrait of Syed Umair Ali"
              className="h-full w-full object-cover object-top opacity-95 grayscale-20 hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Hero;
