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
   
    const jobResults = searchJobs(jobType.value);

    // resultsSection.innerHTML = '<div id="results"></div>'

    // jobs.forEach(function (job){

    //     const div =document.createElement('div');
    //     div.innerHTML=`<h4 class="p-6 mx-6 font-bold text-3xl">${job.title}</h4>  <p class="p-6 mx-6">${job.description}</p>`;
    //     resultsSection.appendChild(div)

        jobResults.forEach(function(job){
            const div = document.createElement('div'); 
            div.innerHTML=`
            <h4 class="p-6 mx-6 font-bold text-3xl"><a href=${job.redirect_url}>${job.title}</a></h4>
            <h5>${job.salary_min} - ${job.salary_max}</h5>
            <h6>${job.location.display_name} - ${job.contract_time}</h6>
            <p class="p-6 mx-6">${job.description}</p>`;
            
            resultsSection.appendChild(div);
        })

    

});

async function searchJobs(jobString, jobsCount = 10, country = 'us') {

    const url = `http://api.adzuna.com/v1/api/jobs/${country}/search/1?app_id=19d80290&app_key=4b2076ceb89c4ffbcf6b0e543402fa9f&results_per_page=${jobsCount}&what=${jobString}&content-type=application/json`;

    const result = await fetch(url)
    const data = await result.json()

    return data;
    // jobs.push({
    //     "salary_min": 50000,
    //     "longitude": -0.776902,
    //     "location": {
    //       "__CLASS__": "Adzuna::API::Response::Location",
    //       "area": [
    //         "UK",
    //         "South East England",
    //         "Buckinghamshire",
    //         "Marlow"
    //       ],
    //       "display_name": "Marlow, Buckinghamshire"
    //     },
    //     "salary_is_predicted": 0,
    //     "description": `${jobString} Corporate lorfdfgdgrtgrtgrgbgbdfgbgnbjkrkbntrkjhbwhtgwltrblwutigh`,
    //     "__CLASS__": "Adzuna::API::Response::Job",
    //     "created": "2013-11-08T18:07:39Z",
    //     "latitude": 51.571999,
    //     "redirect_url": "http://adzuna.co.uk/jobs/land/ad/129698749...",
    //     "title": `${jobString}`,
    //     "category": {
    //       "__CLASS__": "Adzuna::API::Response::Category",
    //       "label": "IT Jobs",
    //       "tag": "it-jobs"
    //     },
    //     "id": "129698749",
    //     "salary_max": 55000,
    //     "company": {
    //       "__CLASS__": "Adzuna::API::Response::Company",
    //       "display_name": "Corporate Project Solutions"
    //     }
    // });
    
    // return sampleData;
}


