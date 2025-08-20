const workData = [
  {
    id: 1,
    title: "Junior Web Developer - Heptic",
    description:
      "Developed and optimized full-stack web applications, ensuring high performance and exceptional user experiences. Leveraged expertise in Python, JavaScript, SQL and Docker to deliver robust, end-to-end solutions.",
    years: "Present",
  },
];

const Work = () => {
  return (
    <section className=" py-12 md:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:space-x-16">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-8 md:mb-0
                         md:w-1/4 md:flex-shrink-0 text-left"
          >
            Work
          </h2>

          <div>
            {workData.map((entry) => (
              <div key={entry.id} className="py-6 first:pt-0 last:pb-0">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-grow pr-0 md:pr-8">
                    <h3 className="text-xl md:text-2xl font-semibold text-white/90">
                      {entry.title}
                    </h3>
                    <p className="text-base md:text-lg text-white/50 leading-relaxed mt-1">
                      {entry.description}
                    </p>
                  </div>
                  <p className="text-sm md:text-base text-white/50 mt-2 md:mt-0 md:flex-shrink-0 text-left md:text-right">
                    {entry.years}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
