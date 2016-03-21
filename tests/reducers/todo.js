import { expect } from 'chai';

import todoReducer from '../../src/js/reducers/todo';

describe('todo reducer', () => {
  it('should a todo', () => {
    const stateBefore = [];
    const action = {
      type: 'ADD_TODO',
      text: 'Test',
      id: 0
    };
    const stateAfter = [{
      id: 0,
      text: 'Test',
      isCompleted: false
    }];

    expect(
      todoReducer(stateBefore, action)
    ).to.be.deep.equal(stateAfter);
  })
});
