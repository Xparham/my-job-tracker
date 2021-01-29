url = new ('redirect')

document.querySelector('iframe').src = url
data.forEach(job => {
    `<h1> <a href="descriptions.html?redirect=${job.redirect_url}>${job.title}</a></h1>`
    
});
