enum Answerstatus {
  YES, NO, END, CONTINUE
}

const dialog = [
  { m: 'Hi this is the story of Tom!' },
  {
    question: 'Would you like to continue', answers: [
      { m: 'Yes.', next: Answerstatus.YES },
      { m: 'No.', next: Answerstatus.NO }
    ]
  },
  { label: Answerstatus.YES, m: 'How Wonderful!', next: Answerstatus.END },
  { label: Answerstatus.NO, m: 'That\'s sad! See you again soon!', next: Answerstatus.CONTINUE }

]

let run = () => {
  let cursor = 0
  while (cursor < dialog.length) {
    let current = dialog[cursor]
    if (current['m'] !== undefined) {
      displayText(current['m'])
      if (current['next' !== undefined]) {
        cursor = findLabel(current['next'] as Answerstatus)
      } else {
        cursor++
      }
    } else if (current['question'] !== undefined) {
      displayText(current['question'])
      current['answers'].forEach(answer => displayText(answer))
    }
  }
}

let findLabel = (label: Answerstatus) => {
  return dialog.indexOf(dialog.filter(option => option['label'] === label)[0])
}

let displayText = message => {
  console.log(message)
}

let getAnswer = () => {
  return 'Hi'
}
