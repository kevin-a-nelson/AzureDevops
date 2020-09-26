function formatProfessor(professor) {
    let splitProfessor = professor.split(" ");
    if (splitProfessor.length === 3) {
        const firstName = splitProfessor[0];
        const lastName = splitProfessor[1];
        professor = `${firstName} ${lastName}`;
    }
    return professor;
}

const insertProfessorRatings = (RMPProfs) => {
    const elementsWithLinks = document.getElementsByClassName(
        "sis-nounderline"
    );

    const elementsWithProfessorNames = Array.from(elementsWithLinks).filter(
        (element) => {
            return element.innerText.includes(",");
        }
    );

    for (let i = 0; i < elementsWithProfessorNames.length; i++) {
        let professor = elementsWithProfessorNames[i].innerText;

        professor = formatProfessor(professor);

        const RMPProf = RMPProfs[professor]

        if (RMPProf) {
            const ProfRating = RMPProf.split(":")[1]
            const ProfId = RMPProf.split(":")[0]
            elementsWithProfessorNames[
                i
            ].innerText = `${professor} (${ProfRating})`;
            elementsWithProfessorNames[
                i
            ].href = `https://www.ratemyprofessors.com/ShowRatings.jsp?tid=${ProfId}`;
            elementsWithProfessorNames[i].target = "_blank";
        } else {
            elementsWithProfessorNames[i].innerText = `${professor}\n( Not Found )`;
            elementsWithProfessorNames[i].href = "javascript:void(0)";
            elementsWithProfessorNames[i].style.textDecoration = "none";
            elementsWithProfessorNames[i].style.color = "black";
        }
    }
};

const results = document.getElementById("results");
const searchButton = document.getElementsByName("searchbutton")[0];

const coursesFound = () => {
    const resultsText = results.innerText;
    return !resultsText.includes("No classes found");
};

// init message
const form = document.getElementsByTagName("form")[0];
const paragraphElement = document.createElement("P");
paragraphElement.className = "sis-flash sis-flash-success";
const paragraphTextNode = document.createTextNode(
    "Olerate is Activated! Click the 'Search' button up above to begin"
);
paragraphElement.appendChild(paragraphTextNode);
form.appendChild(paragraphElement);

const setMessageToLoading = () => {
    paragraphElement.innerText =
        "Loading professor's ratings ( may take up to 15 seconds ) ...";
    paragraphElement.className = "sis-flash sis-flash-primary";
    results.style.display = "none";
};

const setMessageToSuccess = () => {
    paragraphElement.className = "sis-flash sis-flash-success";
    paragraphElement.innerText =
        "Success! Click on a professor to go to their rate my professor page!";
    results.style.display = "";
};

const setMessageToNothing = () => {
    paragraphElement.className = "";
    paragraphElement.innerText = "";
    results.style.display = "";
};

const onSearchButtonClick = (data) => {
    const coursesAreLoaded = () => {
        setMessageToLoading();
        if (!searchButton.disabled) {
            if (coursesFound()) {
                setMessageToSuccess();
                insertProfessorRatings(data);
            } else {
                setMessageToNothing();
            }
            // Stop checking if courses are loaded when courses are loaded
            clearInterval(coursesAreLoadedInterval);
        }
    }

    // Check if courses are loaded every second
    const coursesAreLoadedInterval = setInterval(coursesAreLoaded, 100);
};

fetch(
    "https://raw.githubusercontent.com/kevin-a-nelson/AzureDevops/master/profScraper/final-RMP-profs.json"
).then((response) => response.json())
.then((data) => {
    searchButton.addEventListener("click", function() { onSearchButtonClick(data) });
})
