export enum EntityType {
  PLAYER = 'ship', ENEMY = 'enmey', ENEMY_BULLET = 'bulletEnemy', PLAYER_BULLET = 'bullet', BACKGROUND = 'background'
}

export interface CollideAble {
  type: EntityType
  collidesWith
  colliding: boolean

  isCollideAbleWith (other: CollideAble): boolean
}
