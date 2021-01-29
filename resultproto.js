const API_URL = 'https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=19d80290&app_key=4b2076ceb89c4ffbcf6b0e543402fa9f'
const X_APP_ID = '19d80290'
const X_APP_KEY = '4b2076ceb89c4ffbcf6b0e543402fa9f'
const previousSearch = []
const resultsPerPage = 10

const searchBtn = document.querySelector('#search-button')
const input = document.querySelector('#job-type')
// const jobDetailsForm = document.querySelector('#search-form')

const singleFormId = document.querySelector('#form-id')

async function getAllJobs(query){
    const url = `${API_URL}&results_per_page=${resultsPerPage}&what=${encodeURI(query)}`

    console.log(url)
  

    // https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=19d80290&app_key=4b2076ceb89c4ffbcf6b0e543402fa9f&results_per_page=2&what=javascript
    // console.log(url)
    const results = await fetch(url)
    // console.log(results)
    // `,{
    //     headers : {
    //         'x-app-id' : X_APP_ID ,
    //         'x-app-key' : X_APP_KEY

    //     }
    // });
    // console.log('payload test')
    const data = await results.json()
    
    // console.log(data)
    return data.results


}



searchBtn.addEventListener('click', async (e) => {
    // addPreviousSearch(input.value)
    e.preventDefault()
    const allJobs = await getAllJobs(input.value);
    // console.log('hello')
    // console.log(allJobs)

    updatePage(allJobs)
})

function updatePage(data = []){
    const resultsDiv = document.querySelector('#results')

    resultsDiv.innerHTML = ''

    data.forEach( job => {
        const div = document.createElement('div')

        div.innerHTML = `<h4 class="p-6 mx-6 font-bold text-4xl border-b-2 cursor-pointer hover:text-blue-200"><a href='/descriptions.html?${job.id}'>${job.title}</a></h4>
        <h5 class="p-12 mx-10>${job.salary_min} - ${job.salary_max}</h5>
        <h6 class="p-6 mx-6>${job.location.display_name} - ${job.contract_time}</h6>
        <p class="p-6 mx-6">${job.description}</p>`

        resultsDiv.appendChild(div)
    })
}