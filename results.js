const jobType = document.querySelector("#job-type");
// const searchBtn = document.querySelector("#search-button");
const resultsSection = document.querySelector("#results");
const searchForm = document.querySelector("#search-form");



let sampleData = {
    // "salary_min": 50000,
    // "longitude": -0.776902,
    // "location": {
    //   "__CLASS__": "Adzuna::API::Response::Location",
    //   "area": [
    //     "UK",
    //     "South East England",
    //     "Buckinghamshire",
    //     "Marlow"
    //   ],
    //   "display_name": "Marlow, Buckinghamshire"
    // },
    // "salary_is_predicted": 0,
    // "description": `${jobString} Corporate lorfdfgdgrtgrtgrgbgbdfgbgnbjkrkbntrkjhbwhtgwltrblwutigh`,
    // "__CLASS__": "Adzuna::API::Response::Job",
    // "created": "2013-11-08T18:07:39Z",
    // "latitude": 51.571999,
    // "redirect_url": "http://adzuna.co.uk/jobs/land/ad/129698749...",
    // "title": `${jobString}`,
    // "category": {
    //   "__CLASS__": "Adzuna::API::Response::Category",
    //   "label": "IT Jobs",
    //   "tag": "it-jobs"
    // },
    // "id": "129698749",
    // "salary_max": 55000,
    // "company": {
    //   "__CLASS__": "Adzuna::API::Response::Company",
    //   "display_name": "Corporate Project Solutions"
    // },
};

let jobs = []

searchForm.addEventListener("submit", function(e){
    e.preventDefault();
   
    searchJobs(jobType.value);

    resultsSection.innerHTML = '<div id="results"></div>'

    jobs.forEach(function (job){

        const div =document.createElement('div');
        div.innerHTML=`<h4 class="p-6 mx-6 font-bold text-3xl">${job.title}</h4>  <p class="p-6 mx-6">${job.description}</p>`;
        resultsSection.appendChild(div)

    });

});

function searchJobs(jobString, jobsReturned, country = 'us') {

    const url = `http://api.adzuna.com/v1/api/jobs/us/search/1?app_id=19d80290&app_key=4b2076ceb89c4ffbcf6b0e543402fa9f&results_per_page=10&what=javascript%20developer&content-type=application/json`;

    jobs.push({
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
        "description": `${jobString} Corporate lorfdfgdgrtgrtgrgbgbdfgbgnbjkrkbntrkjhbwhtgwltrblwutigh`,
        "__CLASS__": "Adzuna::API::Response::Job",
        "created": "2013-11-08T18:07:39Z",
        "latitude": 51.571999,
        "redirect_url": "http://adzuna.co.uk/jobs/land/ad/129698749...",
        "title": `${jobString}`,
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
        }
    });
    
    return sampleData;
}


