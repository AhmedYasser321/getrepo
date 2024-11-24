
let input = document.querySelector(".get-repose input") 
let btn = document.querySelector("button")
let span = document.querySelector("span")


window.onload = function(){
    input.focus()
}


btn.onclick = function(){
    if (input.value === ""){
        span.innerHTML = `<span>Please Write Github UserName</span>`
    }else{
        fetch(`https://api.github.com/users/${input.value}/repos`).then((data)=> data.json())
        .then((repositries)=>{
            span.innerHTML = "";
            repositries.forEach((repo)=>{
                console.log(repo.name)
                let repoName = document.createElement("div")
                repoName.appendChild(document.createTextNode(`${repo.name} - `))
                repoName.className = "reponame"
                let url =  document.createElement("a") 
                url.appendChild(document.createTextNode(" - Visit"))               
                url.href = `https://github.com/${input.value}/${repo.name}`
                url.setAttribute("target", "_blank")
                let star = document.createElement("span")
                star.className = "star"
                star.appendChild(document.createTextNode(`stars ${repo.stargazers_count}`))
                repoName.append(star,url)
                span.append(repoName)

            })
        })
    }
}




// "https://api.github.com/users/ElzeroWebSchool/repos"