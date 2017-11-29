export class CollisionManager {
  quadTree

  constructor (quadTree) {
    this.quadTree = quadTree
  }

  detectCollision (): void {
    let objects = []
    this.quadTree.getAllObjects(objects)

    for (let i = 0; i < objects.length; i++) {
      let obj = []
      this.quadTree.findObjects(obj, objects[i])

      for (let j = 0; j < obj.length; j++) {
        // DETECT COLLISION ALGORITHM
        if (objects[i].isCollideAbleWith(obj[j]) &&
          (objects[i].position.x < obj[j].position.x + obj[j].width &&
            objects[i].position.x + objects[i].width > obj[j].position.x &&
            objects[i].position.y < obj[j].position.y + obj[j].height &&
            objects[i].position.y + objects[i].height > obj[j].position.y)) {
          objects[i].colliding = true
          obj[j].colliding = true
        }
      }
    }
  }
}