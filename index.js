function takeANumber(line, current) {
  line.push(current)
  let lineNum = line.length
  console.log(`Welcome, ${current}. You are number ${line[lineNum]} in line.`)
  return line
}