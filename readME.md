## in index file create modal window, then modal content, then modal header, then modal footer - optional
## target the modal window
## target the open modal button to change display value of the modal to block instead of "none"
## &times; in the index file is better than just using a plain text X. as the plain text X will grow and scale, but the &times; will not scale - good to know
## in this modal project the background color style of light grey/black was attached to the modal window, instead of being a separate div element as noticed in web dev simplified. i prefer traversy's method of attaching the window background color as it was directly attached to the modal and will always show when the modal is opened. it's display method does not need to be called in the JS
## this project toggles the display to be either block or none, unlike past projects where you toggle a class name onto an element, such as show or hide for example.
## difference with web dev simplified and traversy modal project is the toggling between a class and looping through event listeners on buttons and modals with forEach(), this method makes sense when you have many modal windows on the page, think of shopping cart?
## will be interesting to see how this works when there are multiple buttons to show a previw of an item. 