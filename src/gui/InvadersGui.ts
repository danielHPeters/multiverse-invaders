export default class InvadersGui {
  public updateScore (playerScore) {
    document.getElementById('score').innerHTML = playerScore.toString()
  }
}
