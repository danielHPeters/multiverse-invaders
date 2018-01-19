enum AnswerStatus {
  YES, NO, END, CONTINUE
}

const dialog = [
  { m: 'Hi this is the story of Tom!' },
  {
    question: 'Would you like to continue', answers: [
      { m: 'Yes.', next: AnswerStatus.YES },
      { m: 'No.', next: AnswerStatus.NO }
    ]
  },
  { label: AnswerStatus.YES, m: 'How Wonderful!', next: AnswerStatus.END },
  { label: AnswerStatus.NO, m: 'That\'s sad! See you again soon!', next: AnswerStatus.CONTINUE }

]

let run = () => {
  let cursor = 0
  while (cursor < dialog.length) {
    let current = dialog[cursor]
    if (current['m'] !== undefined) {
      displayText(current['m'])
      if (current['next'] !== undefined) {
        cursor = findLabel(current['next'] as AnswerStatus)
      } else {
        cursor++
      }
    } else if (current['question'] !== undefined) {
      displayText(current['question'])
      current['answers'].forEach(answer => displayText(answer))
    }
  }
}

let findLabel = (label: AnswerStatus) => {
  return dialog.indexOf(dialog.filter(option => option['label'] === label)[0])
}

let displayText = message => {
  console.log(message)
}

let getAnswer = () => {
  return 'Hi'
}
