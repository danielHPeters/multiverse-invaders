enum Answerstatus {
  YES, NO
}

const dialog = [
  { message: 'Hi this is the story of Tom!' },
  {
    question: 'Would you like to continue', answers: [
      { m: 'Yes.', next: Answerstatus.YES },
      { m: 'No.', next: Answerstatus.NO }
    ]
  }
]
