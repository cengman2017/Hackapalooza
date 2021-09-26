let Hide = document.getElementById("hide");

Hide.addEventListener("click", async () => {

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: hidePage,
    });
});

function hidePage() {
    const text = document.querySelectorAll('h1,h2,h3,h4,h5,p,li,td,caption,span,a');

    for (let i=0; i < text.length; i++) {
        text[i].textContent = " "
    }
}