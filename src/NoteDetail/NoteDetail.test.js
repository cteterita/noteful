import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import NoteDetail from './NoteDetail';
import Context from '../Context';

describe('NoteDetail component', () => {
  it('renders as expected', () => {
    const props = {
      match: {
        params: {
          noteId: '123',
        },
      },
      history: {
        push: jest.fn(),
      },
    };
    const context = {
      notes: [
        {
          name: 'note1',
          id: '123',
          content: 'Note content',
        },
      ],
      deleteNote: jest.fn(),
    };
    const wrapper = shallow((
      <Context.Provider notes={context.notes} deleteNote={context.deleteNote}>
        <NoteDetail match={props.match} history={props.history} />
      </Context.Provider>
    ));
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
