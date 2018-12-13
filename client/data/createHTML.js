const createElement = data => {
  return `<${data.tag}>${data.data}</${data.tag}>`
}

export const createHTML = data => {
  return `
<!DOCTYPE html>\n
<html lang="en">\n
<head>\n
  <meta charset="UTF-8">\n
  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n
  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n
  <title>Your Website</title>\n
</head>\n
<body>\n
  
</body>\n
</html>
  `
}
