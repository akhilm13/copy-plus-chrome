# Copy Plus Tool
Copy Plus is an extension built for Google Chrome. It's a simple productivity tool that lets you make multiple selections of text on a page or site and copy paste it all in a single step.  

### Installation Instructions 

#### Chrome Webstore

[ To be updated ]

#### Manual Installation/Development

1. Clone this repo.
2. In Chrome, open the Extensions settings. (Wrench button, Tools, Extensions.)
3. On the Extensions settings page, click the "Developer Mode" checkbox.
4. Click the now-visible "Load unpacked extension…" button. Navigate to the directory where you cloned the repo.
5. The **Copy Plus Tool** extension will now be visible.
6. You can use this extension in any page now.


### Development Notes 
 
- The code follows the JavaScript Standard Style. 
- I'll hopefully create a version for Firefox too. 
- I made this for my own use. I'm not adept at JS or developing extensions. Feel free to refactor or improve the code in other ways. 

### Usage Instructions

Once the extension is active, it offers you the following features. 

##### Copying text 
Select whatever text you want to copy. Hit the **Shift** button on your keyboard and the text will be added to a virtual clipboard. Select more text you want to copy and with each selection hit the Shift key to copy the selection. Once you're done copying all the text you need, hit the **'c'** key on your keyboard and all the selected text will now be copied to your system clipboard. You can paste it anywhere you like.

##### Removing a selection
Holding the **Ctrl** key while pressing the **Shift** deletes the last selection from the virtual clipboard so that this will not be included in the final copied text. 

##### Choose the seperator for pasting
Before you copy the text to the clipboard (ie before hitting the 'c' key on your keyboard), you can choose what seperator you would like to use while pasting the various selections that you are about to copy. Click on the extension icon in the Chrome toolbar and choose **With new line** to paste content seperated by a newline between each copied selection. Choose **With a whitespace** to paste the selections seperated by a whitespace. Click the OK button to confirm your choice. Default choice is newline. 

##### Disabling/Enabling the extension
In case the extension interrupts with other extensions or creates problems for you with the keyboard shortcuts, you can quickly disable its working by clicking on the extension icon and clicking on the **Disable/Enable This Extension**. The "ON" or "OFF" badge on the extension icon will denote the status of the extension. To enable it, simply repeat the same procedure. 
