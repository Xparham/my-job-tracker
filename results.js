const jobType = document.querySelector("#job-type");
// const searchBtn = document.querySelector("#search-button");
const resultsSection = document.querySelector("#results");
const searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", function(e){
    e.preventDefault();
   
    const resultsSection = searchJobs(jobType.value)
    console.log(resultsSection)




});

function searchJobs(jobString){
    return{
        jobName : "Javascript Developer",
        JobSalary : '60_000'

    }

}
let jobs = [];

