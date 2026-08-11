import './index.scss'

// Letters are grouped into per-word spans (white-space: nowrap) so lines
// can only break at spaces, never in the middle of a word.
const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  const words = []
  let current = []

  strArray.forEach((char, i) => {
    if (char === ' ') {
      if (current.length) words.push(current)
      words.push([{ char: ' ', i }])
      current = []
    } else {
      current.push({ char, i })
    }
  })
  if (current.length) words.push(current)

  return (
    <span>
      {words.map((word, w) => (
        <span key={w} className="word">
          {word.map(({ char, i }) => (
            <span key={char + i} className={`${letterClass} _${i + idx}`}>
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
