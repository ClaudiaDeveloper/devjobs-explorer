function JobCard({ job }) {
  return (
    <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-semibold">{job.title}</h3>

      <p className="mt-2 text-gray-600">
        <strong>Empresa:</strong> {job.company}
      </p>

      <p className="text-gray-600">
        <strong>Ubicación:</strong> {job.location}
      </p>

      <span className="inline-block mt-4 bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm font-medium">
        {job.tech}
      </span>
    </div>
  );
}

export default JobCard;
