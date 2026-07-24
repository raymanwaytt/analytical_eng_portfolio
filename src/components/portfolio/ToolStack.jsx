const ToolStack = ({ tools }) => (
  <div className="mt-3 flex flex-wrap gap-2">
    {tools.map((tool) => (
      <span
        key={tool}
        className="rounded-md border border-teal-200 bg-teal-50 px-3 py-1 text-xs text-picto-primary-dark"
      >
        {tool}
      </span>
    ))}
  </div>
);

export default ToolStack;
