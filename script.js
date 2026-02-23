
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






























