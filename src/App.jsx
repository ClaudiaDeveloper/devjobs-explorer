import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import JobCard from "./components/JobCard";
import { jobs } from "./data/jobs";

function App() {
  const [search, setSearch] = useState("");
  const [techFilter, setTechFilter] = useState("All");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesTech =
      techFilter === "All" || job.tech === techFilter;

    return matchesSearch && matchesTech;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 text-white px-6">

      <div className="max-w-6xl mx-auto">

        <Header />

        <SearchBar search={search} setSearch={setSearch} />

        <Filters techFilter={techFilter} setTechFilter={setTechFilter} />

        <p className="mt-6 text-indigo-200">
          {filteredJobs.length} resultados encontrados
        </p>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
