console.log('background is running')

chrome.runtime.onMessage.addListener((request) => {
  if (request.type === 'RECIPE') {
    chrome.runtime.sendMessage(chrome.runtime.id, request?.recipe);
    console.log('background has received a message from popup, and count is ', request?.recipe)
  }
})
