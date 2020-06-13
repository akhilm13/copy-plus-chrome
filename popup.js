// add event listener when button is clicked
document.getElementById('ok_buttn').addEventListener('click', chooseSeperator)
document.getElementById('disable_buttn').addEventListener('click', toggleDisableExtension)

// callback when the seperator in the popup.html is chosen
function chooseSeperator () {
  // get all the radio buttons with name seperator
  var choice = document.getElementsByName('seperator')

  // get the seperator option that is selected
  for (var i = 0; i < choice.length; i++) {
    if (choice[i].checked) {
      var seperatorOption = choice[i].value
    }
  }
  // notify all content scripts in all tabs that the seperator has changed
  chrome.tabs.query({}, function (tabs) {
    var message = { seperator: seperatorOption }
    for (var i = 0; i < tabs.length; ++i) {
      chrome.tabs.sendMessage(tabs[i].id, message)
    }
  })

  // close the popup
  window.close()
}

// callback function when the extension is disabled or enabled
function toggleDisableExtension () {
  // send message to all the tabs notifying that the the extension has been disabled or enabled
  chrome.tabs.query({}, function (tabs) {
    var message = { toggle: true }
    for (var i = 0; i < tabs.length; ++i) {
      chrome.tabs.sendMessage(tabs[i].id, message)
    }
  })
  // change the toggle value in local storage to set the extension as enabled or disabled
  if (localStorage.toggle == '1') {
    localStorage.toggle = '0'
  } else {
    localStorage.toggle = '1'
  }

  // close the popup
  window.close()
}
