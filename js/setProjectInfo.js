export default (projectName, elm, info) => {
  const project = info[projectName]
  const title = elm.children[0]
  const imageDiv = elm.children[1]
  const description = elm.children[2]
  const img = document.createElement('IMG')

  imageDiv.innerHTML = ''

  img.src = project.imageSrc
  imageDiv.appendChild(img)

  title.innerHTML = project.title
  description.innerHTML = project.description
}
