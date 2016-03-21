import { expect } from 'chai';

import todoReducer from '../../src/js/reducers/todo';

describe('todo reducer', () => {
  it('should add a todo', () => {
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
  });

  it('should toggle a todo', () => {
    const stateBefore = [{
      id: 0,
      text: 'Item 1',
      isCompleted: false
    }, {
      id: 1,
      text: 'Item 2',
      isCompleted: false
    }];
    const action = {
      type: 'TOGGLE_TODO',
      id: 1
    };
    const stateAfter = [{
      id: 0,
      text: 'Item 1',
      isCompleted: false
    }, {
      id: 1,
      text: 'Item 2',
      isCompleted: true
    }];

    expect(
      todoReducer(stateBefore, action)
    ).to.be.deep.equal(stateAfter);
  });
});
