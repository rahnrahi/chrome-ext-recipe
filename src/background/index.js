console.log('background is running')

chrome.runtime.onMessage.addListener((request) => {
  chrome.runtime.sendMessage(chrome.runtime.id, request);
})
