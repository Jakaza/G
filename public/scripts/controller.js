

const lisElements = document.querySelectorAll('.service_side-btn')
const inforElements = document.querySelectorAll('.infor')

lisElements.forEach(button => {

    button.addEventListener('click', (el) => {
        lisElements.forEach(btn => { btn.classList.remove('active'); });

        const currentEl = el.target.classList
        currentEl.toggle("active")
        if (currentEl.contains('web')) {
            displayInformation("web")
        } else if (currentEl.contains('mobile')) {
            displayInformation("mobile")
        } else if (currentEl.contains('mentor')) {
            displayInformation("mentor")
        } else {
            displayInformation("none")
        }
    })
})


function displayInformation(title) {
    inforElements.forEach(infor => { infor.classList.add("hide") })

    inforElements.forEach(infor => {
        if (infor.classList.contains(title)) {
            infor.classList.remove('hide');
        }
    })
}





