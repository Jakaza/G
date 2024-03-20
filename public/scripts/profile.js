
const profileFormEl = document.getElementById('profile-from')

profileFormEl.addEventListener('submit', handleAddQuestion)

async function handleAddQuestion(e) {
    e.preventDefault();

    alert()
          const form = document.querySelector("#profile-from");
          const formData = new FormData(form);
          const jsonFormData = {};
          formData.forEach((value, key) => {
            jsonFormData[key] = value;
          });
          console.log(jsonFormData);

          return
            const url = "/question/create";
        if (status) {
          const createBtn = document.getElementById("create-question-btn");
          createBtn.disabled = true;
          createBtn.value = "Create Question...";
                const queryParams = new URLSearchParams(window.location.search);
                const currentQuestionId = queryParams.get("test");
                const currentURL = `/question/view?test=${currentQuestionId}`;

            await sendHttpRequest(url, jsonFormData, currentURL);
        }else{
            console.log("Fill input");
        }
}


async function sendHttpRequest(URL, data , redirect_url = "") {
    try {
      const res = await fetch(URL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!result.status) {
        console.log(result);
      }
      enableBtn()
      window.location.href = redirect_url;
    } catch (error) {
      enableBtn()
      console.log(error);
    }
  }


