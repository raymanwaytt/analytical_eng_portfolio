const ToolStack = ({ tools }) => (
  <div className="mt-3 flex flex-wrap gap-2">
    {tools.map(tool => (
      <span
        key={tool}
        className={`rounded-full px-3 py-1 text-xs border color:blue hover:scale-105 transition-transform`}
      >
        {tool}
      </span>
    ))}
  </div>
);

export default ToolStack;
