const buttonShowLinks = document.getElementById("showLinksMobile");
const listLinksHeaderMobile = document.getElementById("listLinksHeaderMobile");
const exitDivLinksHeaderMobile = document.getElementById("exitDiv");

const innovativeParagraph = document.getElementById("innovativeParagraph");
const aroundWorldParagraph = document.getElementById("aroundWorldParagraph");
const bestMaterialParagraph = document.getElementById("bestMaterialParagraph");

const previousParagraphMobile = document.getElementById("previousSlideParagraphMobile");
const nextParagraphMobile = document.getElementById("nextSlideParagraphMobile");
const previousParagraph = document.getElementById("previousSlideParagraph");
const nextParagraph = document.getElementById("nextSlideParagraph");

function showDivLinksMobile() {
    listLinksHeaderMobile.style.display = "flex"
};

function closeDivLinksMobile() {
    listLinksHeaderMobile.style.display = "none"
};

const paragraphsList = [innovativeParagraph, aroundWorldParagraph, bestMaterialParagraph];

let index = 0;

function originalShowParagraph() {
    paragraphsList[index].style.display = "flex";
};

function goToPreviousParagraph() {
    if (index == 0) {
        index = paragraphsList.length - 1;
    } else {
        index -= 1;
    }

    switch (index) {
        case 0:
            paragraphsList[1].style.display = "none";
            paragraphsList[2].style.display = "none";
            break;
        case 1: 
            paragraphsList[0].style.display = "none";
            paragraphsList[2].style.display = "none";
            break;
        case 2: 
            paragraphsList[1].style.display = "none";
            paragraphsList[0].style.display = "none"; 
            break;
        default:    
    }
    paragraphsList[index].style.animation = "paragraphSlidesFromLeft 0.9s linear";
    originalShowParagraph()
};

function goToNextParagraph() { 
    if (index == paragraphsList.length - 1) {
        index = 0;
    } else {
        index += 1;
    };
    
    switch (index) {
        case 0:
            paragraphsList[1].style.display = "none";
            paragraphsList[2].style.display = "none";
            break;
        case 1: 
            paragraphsList[0].style.display = "none";
            paragraphsList[2].style.display = "none";
            break;
        case 2: 
            paragraphsList[1].style.display = "none";
            paragraphsList[0].style.display = "none"; 
            break;
        default:    
    };
    paragraphsList[index].style.animation = "paragraphSlidesFromRight 0.8s linear";
    originalShowParagraph()
};

originalShowParagraph();

buttonShowLinks.addEventListener("click", showDivLinksMobile);
exitDivLinksHeaderMobile.addEventListener("click", closeDivLinksMobile);
previousParagraph.addEventListener("click", goToPreviousParagraph);
previousParagraphMobile.addEventListener("click", goToPreviousParagraph);
nextParagraph.addEventListener("click", goToNextParagraph);
nextParagraphMobile.addEventListener("click", goToNextParagraph);