export enum EntityType {
  PLAYER = 'ship',
  ENEMY = 'enmey',
  ENEMY_BULLET = 'bulletEnemy',
  PLAYER_BULLET = 'bullet',
  BACKGROUND = 'background',
  MAP = 'map',
  GAME_OVER = 'gameOver',
  LASER = 'laser',
  MAIN_THEME = 'shockWave',
  EXPLOSION_I = 'explosion1',
  EXPLOSION_II = 'explosion2'
}

export interface CollideAble {
  type: EntityType
  collidesWith
  colliding: boolean

  isCollideAbleWith (other: CollideAble): boolean
}
