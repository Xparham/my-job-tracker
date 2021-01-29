const jobType = document.querySelector("#job-type");
// const searchBtn = document.querySelector("#search-button");
const resultsSection = document.querySelector("#results");
const searchForm = document.querySelector("#search-form");

const SEARCH_COUNTRY = 'us'
const previousSearch=[]




// let jobs = []

searchForm.addEventListener('submit', async function(e){
    e.preventDefault();
   
    const jobName = jobType.value
    let jobResults = await searchJobs(jobName)
    
    let jobs = jobResults.results
    let jobsFound = jobResults.count 

    resultsSection.innerHTML = `
    <div id="results" class="p-16">
    <h1>${jobsFound} jobs found for <strong>${jobName}</strong> in ${SEARCH_COUNTRY.toUpperCase()}<h1>
    </div>`;

    // jobs.forEach(function (job){

    //     const div =document.createElement('div');
    //     div.innerHTML=`<h4 class="p-6 mx-6 font-bold text-3xl">${job.title}</h4>  <p class="p-6 mx-6">${job.description}</p>`;
    //     resultsSection.appendChild(div)

    jobs.forEach(function (job) {
         const div = document.createElement('div'); 
         div.innerHTML=`
            <h4 class="p-6 mx-6 font-bold text-3xl border-b-2 cursor-pointer hover:text-blue-200"><a href='/descriptions.html'>${job.title}</a></h4>
            <h5 class="p-6 mx-6>${job.salary_min} - ${job.salary_max}</h5>
            <h6 class="p-6 mx-6>${job.location.display_name} - ${job.contract_time}</h6>
            <p class="p-6 mx-6">${job.description}</p>`;
            
        resultsSection.appendChild(div);
    });

});

// let alljobs = searchJobs("job I need")

// let  justAbove40k = alljobs.filter(function(job){
//     (job.salary_min >= 40000)
// })

// justAbove40k.forEach(`fn`)

async function searchJobs(jobString, jobsCount = 10, country = SEARCH_COUNTRY) {

    const url = `http://api.adzuna.com/v1/api/jobs/${country}/search/1?app_id=19d80290&app_key=4b2076ceb89c4ffbcf6b0e543402fa9f&results_per_page=${jobsCount}&what=${jobString}&content-type=application/json`;

    const result = await fetch(url)
    const data = await result.json()

    return data;

}


