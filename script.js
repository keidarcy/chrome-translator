const replaceText = (element) => {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText)
  } else if (element.nodeType === Text.TEXT_NODE) {
    // element.textContent = element.textContent.replace(/Coronavirus/gi, 'cool')
    if (element.textContent.match(/coronavirus/gi, 'cool')) {
      // element.parentElement.style.color = 'black'
      // element.parentElement.style.backgroundColor = 'black'
      const newElement = document.createElement('span')
      newElement.innerHTML = element.textContent.replace(
        /(coronavirus)/gi,
        // '<span style="color:red;">$1</span>'
        '<span class="rainbow">$1</span>'
      )
      element.replaceWith(newElement)
    }
  }
}

// element.parentElement.remove()

replaceText(document.body)
