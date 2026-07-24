const steps = [
  {
    id: 1,
    title: "Ingest & orchestrate",
    description:
      "Pull data from APIs, files, and operational systems on a reliable schedule with clear failure handling.",
  },
  {
    id: 2,
    title: "Transform & model",
    description:
      "Shape raw feeds into layered warehouses with tested transformations, quality checks, and analytics-ready models.",
  },
  {
    id: 3,
    title: "Deliver insights",
    description:
      "Expose trustworthy datasets and dashboards so teams can make decisions without hunting for source truth.",
  },
];

const Approach = () => {
  return (
    <section className="bg-white py-20 md:py-28" id="approach">
      <div className="content max-xxl:px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">How I work</h2>
          <p className="mt-4 text-base text-soft-dark sm:text-lg">
            A practical analytics engineering loop from source systems to
            decision-ready outputs.
          </p>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.id} className="relative">
              <p className="font-display text-5xl font-semibold text-picto-primary/25">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Approach;
