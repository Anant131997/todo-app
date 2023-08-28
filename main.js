document.addEventListener("DOMContentLoaded", function(){
    const dataValue = document.querySelector("#row input[type='text']");
    const todoForm = document.querySelector("#form-todo");
    const allRow = document.querySelector("#list-container");
    const textArea = document.querySelector("#form-element textarea");
    const contact = document.querySelector("#contact"); 
    const phoneNoInput = document.querySelector("#phoneNo");
    let a = 0;

    todoForm.addEventListener("submit",(event)=>{
        event.preventDefault();
        console.log("I got clicked");
        const inputValue = dataValue.value;
        if(inputValue === ''){
            alert("You must enter something!")
        } else {
            const newLi = document.createElement("li");
            const newLiInnerHtml = `${inputValue}`;
            newLi.innerHTML = newLiInnerHtml;
            console.log(newLi);
            allRow.append(newLi);
            const span = document.createElement("span");
            span.innerHTML = "\u00d7";
            span.classList.add("remove");
            // span.append(crossImg);
            newLi.append(span);
        }
        dataValue.value = "";
    })


    allRow.addEventListener("click", (event)=>{
        // console.log(event);
        if(event.target.nodeName === "LI"){              //checking if user have done work or not
            console.log("You entered li");
            if(a == 0){
                event.target.classList.add("checked");
                a = 1;
            } else {
                event.target.classList.remove("checked");
                a=0;
            }
        }

        if(event.target.classList.contains("remove")){   // removing work if user wants to remove it.
            console.log(event.target.parentNode);
            const removeLi = event.target.parentNode;
            removeLi.remove(); 
        }
        });

        phoneNoInput.addEventListener("input", () => {
            const enteredValue = phoneNoInput.value;
            if (enteredValue.length < 10 || enteredValue.length > 10) {
                phoneNoInput.setCustomValidity("Phone number must have 10 digits");
            } else {
                phoneNoInput.setCustomValidity("");
            }
        });

        contact.addEventListener("submit", (event) => {
        textArea.value = "";
        const submitButton = document.querySelector("#form-center button");
        submitButton.textContent = "Submitted !";
        setTimeout(() => {
            submitButton.textContent = "Submit";
        }, 3000);
    });
});