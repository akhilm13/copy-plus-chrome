// buffer to hold the copied text
var copyBuffer = []
// seperator to use while pasting copied content
var seperator = '\n'
// boolean to check if extension is enabled or disabled from UI
var enableToggle

// Check if the extension is enabled or disabled by messaging the background service
chrome.runtime.sendMessage({ enabled: 'check' }, function (response) {
  enableToggle = response
})

// Add listener to listen for messages from the UI popup
chrome.runtime.onMessage.addListener(function (message, sender) {
  // Check the chosen seperator and choose the appropriate one
  if (message.seperator == 1) {
    seperator = ' '
  } else {
    seperator = '\n'
  }

  // Enable or disable the extension based on the current status
  if (message.toggle === true) {
    chrome.runtime.sendMessage({ enabled: 'toggle' }, function (response) {})
    enableToggle = !enableToggle
  }
})

// event listener when keypress happens
window.addEventListener('keyup', function (event) {
  if (enableToggle === true) {
    // do the following only if the extension is enabled. Ignore otherwise
    if (event.ctrlKey && event.key === 'Shift') {
      // If both ctrl key and shift key are pressed together, remove the last copied value from the buffer
      copyBuffer.pop()
    } else if (event.key === 'Shift') {
      // if the shift key is pressed, copy selected region to the buffer
      var text = window.getSelection().toString()
      copyBuffer.push(text)
    } else if (event.key === 'c' && !event.ctrlKey) {
      // if the 'c' key is pressed and ctrl is not pressed (user is not doing a normal copy), put everything in the buffer to the clipboard
      if (copyBuffer.length !== 0) {
        navigator.clipboard.writeText(copyBuffer.join(seperator))
        // empty the copybuffer by setting the length of the copybuffer to 0
        copyBuffer.length = 0
      }
    }
  }
}, true)
