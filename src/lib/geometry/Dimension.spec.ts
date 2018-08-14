import * as chai from 'chai'
import Dimension from './Dimension'

chai.should()

describe('Dimension', () => {
  describe('#scale', () => {
    it('should scale the dimension by the factor parameter')
    const dimension = new Dimension(100, 200)
    dimension.scale(5)
    dimension.width.should.eql(500)
    dimension.height.should.eql(1000)
  })
})
