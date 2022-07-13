var p = document.createElement('p');
p.textContent = 'This content was added via JavaScript!';
document.body.appendChild(p);

chrome.edgePanel.basicPageContext.onUpdated.addListener((basicContext) => {
    console.log(basicContext);
    document.getElementsByTagName("h1")[0].innerText = basicContext.title;
});