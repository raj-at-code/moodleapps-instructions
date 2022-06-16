function openInstruction(event, accountProvider) {
    let i, tabContent, tabLinks

    tabContent = document.getElementsByClassName("tabContent")
    for(i = 0; i<tabContent.length; i++) {
        tabContent[i].style.display = "none"
    }

    tabLinks = document.getElementsByClassName("tabLink")
    for(i = 0; i<tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "")
        tabLinks[i].style.backgroundColor = "inherit"
    }

    document.getElementById(accountProvider).style.display = "block"
    event.currentTarget.className += " active"
    event.currentTarget.style.backgroundColor = "#cccccc"
}