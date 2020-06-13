console.log('Extension Started')

// set the ON badge on the extension
localStorage.toggle = '1'
chrome.browserAction.setBadgeText({ text: 'ON' })
chrome.browserAction.setBadgeBackgroundColor({ color: '#228B22' })

// for listening any message
chrome.runtime.onMessage.addListener(requestReceived)

// callback when messages are received
function requestReceived (message, sender, sendResponse) {
  if (message.enabled === 'check') {
    // request to check if the extension is enabled or disabled. Check localStorage toggle and send response
    if (localStorage.toggle === '1') {
      var toggle = true
    } else {
      toggle = false
    }
    sendResponse(toggle)
  } else if (message.enabled === 'toggle') {
    // message that the state of the extension has been toggled (enabled or disabled). Update badge suitably
    if (localStorage.toggle === '0') {
      chrome.browserAction.setBadgeText({ text: 'OFF' })
      chrome.browserAction.setBadgeBackgroundColor({ color: '#8a0303' })
    } else {
      chrome.browserAction.setBadgeText({ text: 'ON' })
      chrome.browserAction.setBadgeBackgroundColor({ color: '#228B22' })
    }
    // generic response. Not important
    sendResponse(true)
  }
}
