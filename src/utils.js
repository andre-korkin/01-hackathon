export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}


export function hexToRgb(hex) {
  let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)

  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}


export function getRandomColor() {
  const colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
  let rnd_color = '#'
  
  for(let j=0; j<6; j++) {
      rnd_color += colors[Math.floor(Math.random() * 16)]
  }

  return rnd_color
}