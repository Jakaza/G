const addNewProject = document.getElementById('addNewProject')

addNewProject.addEventListener('submit', async (el)=>{
    el.preventDefault()
    const data = new FormData(addNewProject)

    const url = '/api/project/new'

    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          "Content-Type": "application/json",
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
    
    const dataRes = await response.json()

    console.log(dataRes);

})