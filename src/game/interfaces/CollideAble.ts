export interface CollideAble {
  type: string
  collidesWith
  colliding: boolean

  isCollideAbleWith (other: CollideAble): boolean
}
