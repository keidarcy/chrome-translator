import translate from './translate'

const replaceText = async (element) => {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText)
  } else if (element.nodeType === Text.TEXT_NODE) {
    // const japon =
    // element.textContent = japon
    // element.textContent = element.textContent.replace(
    //   /Shipping/gi,
    //   await translate(element.textContent)
    // )
    // if (element.textContent.match(/Shipping/gi, 'cool')) {
    // element.parentElement.style.color = 'black'
    // element.parentElement.style.backgroundColor = 'black'
    // const newElement = document.createElement('span')
    // newElement.innerHTML = element.textContent.replace(
    //   /(Shipping)/gi,
    //   // '<span style="color:red;">$1</span>'
    //   '<span class="rainbow">$1</span>'
    // )
    // }
    console.log(await translate(element.textContent))
  }
}

replaceText(document.body)
