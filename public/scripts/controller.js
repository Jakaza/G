const lisElements = document.querySelectorAll('.service_side-btn')
const inforElements = document.querySelectorAll('.infor')
const spinButton = document.querySelector('.spin-button')
const formEl = document.getElementById('mail_form')

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

formEl.addEventListener('submit', async el => {
    el.preventDefault();

    // Spinner

    spinButton.className = spinButton.className + ' loading';

    // call this method to remove spinner
    // setTimeout(removeSpinnerClass, 2000);


    const formData = new FormData(formEl)
    const requestData = Object.fromEntries(formData.entries());
    const body = JSON.stringify(requestData);
    const xhrRequest = new XMLHttpRequest()
    const url = "/contact/sendMail";
    const data = { username: "John", email: 30 };
    const headers = new Headers({ 'Content-Type': 'application/json' });

    const requestOptions = {
        method: 'POST',
        headers,
        body: JSON.stringify(requestData)
    };

    // try {
    //     const response = await fetch('/email/api/sendemail', requestOptions);
    //     const responseData = await response.json();

    //     if ((response.status == 400 || response.status == 422) || responseData.message == 'failed') {
    //         const { error, hint } = responseData
    //         displaySuccessMessage(false, error, hint)
    //     } else {
    //         displaySuccessMessage(true)
    //         formEl.reset();
    //         console.log(responseData);
    //     }
    // } catch (error) {
    //     displaySuccessMessage(false)
    // }
})

function removeSpinnerClass() {
    spinButton.className = spinButton.className.replace(new RegExp('(?:^|\\s)loading(?!\\S)'), '');
}

function displaySuccessMessage(status, error, hint) {
    let template = `
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
    </symbol>
    <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
    </symbol>
    <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </symbol>
    </svg>
    `

    if (status) {
        template += `
                <div class="alert alert-success d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill" /></svg>
                <div class="alert-dismissible fade show">
                                    Message Succefully Submitted
                                    <button type="button" class="btn-close" data-bs-dismiss="alert"
                                        aria-label="Close"></button>
                                </div>
        </div>  `
    } else {
        template += `
        <div class="alert alert-danger d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
        <div class="alert-dismissible fade show">
                                    ${error} - ${hint}
                                    <button type="button" class="btn-close" data-bs-dismiss="alert"
                                        aria-label="Close"></button>
                                </div>
        </div>
        `
    }

    document.getElementById('feedback_section').innerHTML = template;

    document.querySelector('.btn-close').addEventListener('click', () => {
        document.getElementById('feedback_section').innerHTML = ''
    })
}

formEl.addEventListener('keypress', _ => {
    document.getElementById('feedback_section').innerHTML = ''
})