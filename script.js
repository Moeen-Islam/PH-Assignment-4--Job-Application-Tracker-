
let currentFilter = "all";

 //COUNTS 
  function updateCounts(filteredJobs) {
    document.getElementById("totalCount").innerText = jobs.length;
    document.getElementById("interviewCount").innerText =
      jobs.filter(j => j.status === "interview").length;
    document.getElementById("rejectedCount").innerText =
      jobs.filter(j => j.status === "rejected").length;
    document.getElementById("visibleCount").innerText = filteredJobs.length;
  }
































