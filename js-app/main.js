const url = "https://localhost:5001/api/beanvariety/";
const contentTarget = document.querySelector(".container");
const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties)
            contentTarget.innerHTML = beanVarieties.map(bean => {
                return `
                        <div>
                            <h3>Bean Name: ${bean.name}</h3>
                            <p><strong>Bean Region</strong>: ${bean.region}</p>
                            ${(bean.notes) ? `<p><strong>Notes</strong>: ${bean.notes}</p>` : ""}
                        </div>
                        <br>
                `
            }).join("")
        })
});

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}



