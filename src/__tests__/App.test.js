import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../main';
import { App } from '../components/app/index';
import { shallow } from 'enzyme'

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Main />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

const setUp = (props={}) => {
  return shallow(<App {...props} />);
}

describe('App', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
        produtos: [],
        isShowModalCadastro: false,
        produto: null,
        index: null
    }

    wrapper = setUp(props)
  })

  it('should render', () => {
    expect(wrapper.length).toEqual(1);
  })
})

