const ToolStack = ({ tools, className = "", tone = "solid" }) => (
  <div className={`flex flex-wrap gap-2 ${className}`.trim()}>
    {tools.map((tool) => (
      <span
        key={tool}
        className={tone === "light" ? "tool-chip tool-chip--light" : "tool-chip"}
      >
        {tool}
      </span>
    ))}
  </div>
);

export default ToolStack;
