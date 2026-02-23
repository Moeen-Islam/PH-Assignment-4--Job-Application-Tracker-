
let currentFilter = "all";

  function updateCounts(filteredJobs) {
  const totalJobs = jobs.length;
  const visibleJobs = filteredJobs.length;

  document.getElementById("totalCount").innerText = totalJobs;
  document.getElementById("interviewCount").innerText =
    jobs.filter(j => j.status === "interview").length;
  document.getElementById("rejectedCount").innerText =
    jobs.filter(j => j.status === "rejected").length;

  const jobCountText = document.getElementById("jobCountText");

  if (visibleJobs === totalJobs) {
    jobCountText.innerText = `${totalJobs} jobs`;
  } else {
    jobCountText.innerText = `${visibleJobs} of ${totalJobs} jobs`;
  }
}

const buttons = {
  all: document.getElementById("filter-all"),
  interview: document.getElementById("filter-interview"),
  rejected: document.getElementById("filter-rejected"),
};

function setFilter(type) {
  currentFilter = type;
  // reset all buttons
  Object.values(buttons).forEach(btn => {
    btn.classList.remove("bg-blue-500", "text-white");
    btn.classList.add("text-gray-500");
  });
  // activate selected button
  buttons[type].classList.remove("text-gray-500");
  buttons[type].classList.add("bg-blue-500", "text-white");

  renderJobs();
}

let jobs = [
    {
      id: 1,
      company: "Mobile First Corp",
      role: "React Native Developer",
      location: "Remote",
      jobType: "Full-time",
      salary: " $130,000 - $175,000",
      status: "not_applied",
      description:
        "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide."
    },
    {
      id: 2,
      company: "WebFlow Agency",
      role: "Web Designer & Developer",
      location: "Los Angeles, CA",
      jobType: "Part-time",
      salary: "$80,000 - $120,000",
      status: "not_applied",
      description:
        "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends."
    },
    {
      id: 3,
      company: "DataViz Solutions",
      role: "Data Visualization Specialist",
      location: "Boston, MA",
      jobType: "Full-time",
      salary: "$125,000 - $165,000",
      status: "not_applied",
      description:
        "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking."
    },
    {
      id: 4,
      company: "CloudFirst Inc",
      role: "Backend Developer",
      location: "Seattle, WA",
      jobType: "Full-time",
      salary: " $140,000 - $190,000",
      status: "not_applied",
      description:
        "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure."
    },
    {
      id: 5,
      company: "Innovation Labs",
      role: "UI/UX Engineer",
      location: "Austin, TX",
      jobType: " Full-time",
      salary: "$110,000 - $150,000",
      status: "not_applied",
      description:
        "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required."
    },
    {
      id: 6,
      company: "MegaCorp Solutions",
      role: "JavaScript Developer",
      location: "New York, NY",
      jobType: "Full-time",
      salary: "$130,000 - $170,00",
      status: "not_applied",
      description:
        "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities."
    },
    {
      id: 7,
      company: "StartupXYZ",
      role: "Full Stack Engineer",
      location: "Remote",
      jobType: "Full-time",
      salary: "$120,000 - $160,000",
      status: "not_applied",
      description:
        "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included."
    },
    {
      id: 8,
      company: "TechCorp Industries",
      role: "Senior Frontend Developer",
      location: "San Francisco, CA",
      jobType: "Full-time",
      salary: "$130,000 - $175,000",
      status: "not_applied",
      description:
        "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects."
    },
  ];
  




























