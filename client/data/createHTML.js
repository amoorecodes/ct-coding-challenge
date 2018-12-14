export const createElement = data => {
  const styles = () => {
    let string = ''
    for (let key in data.attributes) {
      string = string + key + ':' + data.attributes[key] + ';'
    }

    return string
  }
  //order="${data.order}"

  return `<${data.tag} style="${styles()}" >${data.data}</${data.tag}>\n`
}

export const createHTML = data => {
  let intro = `
<!DOCTYPE html>\n
<html lang="en">\n
<head>\n
  <meta charset="UTF-8">\n
  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n
  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n
  <title>Your Website</title>\n
</head>\n
<body>\n`
  let body = ''
  data.forEach(element => {
    body += createElement(element)
  })
  let outro = `
</body>\n
</html>
  `

  return intro + body + outro
}
