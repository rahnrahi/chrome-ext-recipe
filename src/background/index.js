console.log('background is running')

chrome.runtime.onMessage.addListener((request) => {
  chrome.runtime.sendMessage(chrome.runtime.id, request);
  if (request.type === 'RECIPE') {
    chrome.runtime.sendMessage(chrome.runtime.id, request?.recipe);
    console.log('background has received a message from popup, and recipe is ', request?.recipe)
  }
})
