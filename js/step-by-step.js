let generateStepByStep = (idContainer="step-by-step-container", {checkedColor, uncheckedColor, steps}) => {

    if(checkedColor) {
        document.documentElement.style.setProperty("--checked-color", checkedColor);
    }
    
    if(uncheckedColor) {
        document.documentElement.style.setProperty("--unchecked-color", uncheckedColor);
    }

    let container = document.getElementById(idContainer);

    let containerSteps = document.createElement("div");
    containerSteps.classList.add("container-step-by-step");

    steps.forEach( ({id, description, srcIcon}) => {

        let stepByStepItem = document.createElement("div");
        stepByStepItem.id = id;
        stepByStepItem.classList.add("step-by-step");
        stepByStepItem.setAttribute("active", "false");

        let stepItemLine = document.createElement("div");
        stepItemLine.classList.add("step-by-step-line");

        let itemLine1 = document.createElement("div");
        itemLine1.classList.add("step-by-step-line-intern-nocheck");

        let itemLine2 = document.createElement("div");
        itemLine2.classList.add("step-by-step-line-intern-nocheck");

        stepItemLine.appendChild(itemLine1);
        stepItemLine.appendChild(itemLine2);

        let iconStep = document.createElement("div");
        iconStep.classList.add("icon-step");

        let iconStepCheck = document.createElement("img");
        iconStepCheck.classList.add("check-icon");
        iconStepCheck.setAttribute("src", "img/check.svg");

        let iconStepNoCheck = document.createElement("img");
        iconStepNoCheck.classList.add("nocheck-icon");
        iconStepNoCheck.setAttribute("src", srcIcon);

        iconStep.appendChild(iconStepCheck);
        iconStep.appendChild(iconStepNoCheck);

        let textContainer = document.createElement("div");
        textContainer.classList.add("step-text-container");

        let stepText = document.createElement("span");
        stepText.classList.add("step-tex");
        stepText.innerText = description;

        textContainer.appendChild(stepText);

        stepByStepItem.appendChild(stepItemLine);
        stepByStepItem.appendChild(iconStep);
        stepByStepItem.appendChild(textContainer);

        containerSteps.appendChild(stepByStepItem);
        
    });
    container.appendChild(containerSteps);
};