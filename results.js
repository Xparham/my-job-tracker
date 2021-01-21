const jobType = document.querySelector("#job-type");
// const searchBtn = document.querySelector("#search-button");
const resultsSection = document.querySelector("#results");
const searchForm = document.querySelector("#search-form");

let sampleData = {
    "salary_min": 50000,
    "longitude": -0.776902,
    "location": {
      "__CLASS__": "Adzuna::API::Response::Location",
      "area": [
        "UK",
        "South East England",
        "Buckinghamshire",
        "Marlow"
      ],
      "display_name": "Marlow, Buckinghamshire"
    },
    "salary_is_predicted": 0,
    "description": "JavaScript Developer Corporate ...",
    "__CLASS__": "Adzuna::API::Response::Job",
    "created": "2013-11-08T18:07:39Z",
    "latitude": 51.571999,
    "redirect_url": "http://adzuna.co.uk/jobs/land/ad/129698749...",
    "title": "Javascript Developer",
    "category": {
      "__CLASS__": "Adzuna::API::Response::Category",
      "label": "IT Jobs",
      "tag": "it-jobs"
    },
    "id": "129698749",
    "salary_max": 55000,
    "company": {
      "__CLASS__": "Adzuna::API::Response::Company",
      "display_name": "Corporate Project Solutions"
    },
}

let jobs = []

searchForm.addEventListener("submit", function(e){
    e.preventDefault();
   
    searchJobs(jobType.value);

    resultsSection.innerHTML = '<div id="results"></div>'

    jobs.forEach(function(job){
        console.log(job.title)
        console.log(job.description)

        const div =document.createElement('div')
        div.innerHTML=`<h4>${}</h4>  <p>${}</p>`

    })




});

function searchJobs(jobString) {
    jobs.push(sampleData)
    return sampleData

        
          

}


