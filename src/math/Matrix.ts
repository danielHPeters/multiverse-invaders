/**
 * Matrix class.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Matrix {
  rows: number
  columns: number
  mArray: number[][]

  /**
   * Default constructor.
   *
   * @param {number[][]} mArray Matrix array
   */
  constructor (mArray: number[][]) {
    this.mArray = mArray
    this.rows = mArray.length
    this.columns = mArray[0].length
  }

  /**
   * Add another matrix to this matrix.
   * The dimension of the other matrix must be equal to this.
   *
   * @param {Matrix} matrix
   */
  add (matrix: Matrix): void {
    if (this.equals(matrix)) {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.columns; j++) {
          this.mArray[i][j] += matrix.mArray[i][j]
        }
      }
    }
  }

  /**
   * Subtract another matrix from this matrix.
   * The dimension of the other matrix must be equal to this.
   *
   * @param {Matrix} matrix
   */
  subtract (matrix: Matrix): void {
    if (this.equals(matrix)) {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.columns; j++) {
          this.mArray[i][j] -= matrix.mArray[i][j]
        }
      }
    }
  }

  /**
   * Matrix multiplication algorithm.
   *
   * @param {Matrix} matrix Another matrix
   * @returns {Matrix} Resulting matrix
   */
  multiply (matrix: Matrix): Matrix {
    let newArray = []
    if (this.columns === matrix.rows) {
      for (let i = 0; i < this.rows; i++) {
        newArray[i] = []
        for (let j = 0; j < matrix.columns; j++) {
          let val = 0
          for (let k = 0; k < this.columns; k++) {
            val += this.mArray[i][k] * matrix.mArray[k][j]
          }
          newArray[i].push(val)
        }
      }
    } else {
      return null
    }
    return new Matrix(newArray)
  }

  /**
   *
   * @param {number} scalar
   */
  multScalar (scalar: number): void {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.mArray[i][j] *= scalar
      }
    }
  }

  /**
   * Check if the row and column length are equal to another matrix's.
   *
   * @param {Matrix} other Other Matrix
   * @returns {boolean} Returns true if the lengths match
   */
  equals (other: Matrix): boolean {
    return other.rows === this.rows && other.columns === this.columns
  }

  /**
   * Generate an exact copy of this matrix.
   *
   * @returns {Matrix} A copy of this matrix
   */
  clone (): Matrix {
    let array = []
    this.mArray.forEach(arr => array.push(arr.slice(0)))
    return new Matrix(Array.from(array))
  }
}
