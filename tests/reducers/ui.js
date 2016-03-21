import { expect } from 'chai';

import uiReducer from '../../src/js/reducers/ui';

describe('ui reducer', () => {
  it('should change the current visibility to all', () => {
    const stateBefore = {
      filter: 'ACTIVE'
    };
    const action = {
      type: 'SET_VISIBILITY_FILTER',
      filter: 'ALL'
    };
    const stateAfter = {
      filter: 'ALL'
    };

    expect(
      uiReducer(stateBefore, action)
    ).to.be.deep.equal(stateAfter);
  });

  it('should change the current visibility to active', () => {
    const stateBefore = {
      filter: 'ALL'
    };
    const action = {
      type: 'SET_VISIBILITY_FILTER',
      filter: 'ACTIVE'
    };
    const stateAfter = {
      filter: 'ACTIVE'
    };

    expect(
      uiReducer(stateBefore, action)
    ).to.be.deep.equal(stateAfter);
  });
});
