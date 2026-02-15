function Filters({ techFilter, setTechFilter }) {
  const techOptions = ["All", "React", "Node.js", "Figma"];

  return (
    <div className="flex gap-3 flex-wrap mt-6">
      {techOptions.map((tech) => (
        <button
          key={tech}
          onClick={() => setTechFilter(tech)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition
            ${
              techFilter === tech
                ? "bg-white text-indigo-600"
                : "bg-indigo-500 text-white hover:bg-indigo-400"
            }`}
        >
          {tech}
        </button>
      ))}
    </div>
  );
}

export default Filters;
