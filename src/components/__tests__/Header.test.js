import React from 'react';
import { HeaderComponent } from '../Header/Header';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { mount, shallow } from "enzyme";

// Basic jest snapshot to catch any glaring bugs/changes to component
// MuiThemeProvider necessary in order for jest to render components properly with material-ui
test('renders correctly', () => {
  const component = renderer.create(
    <MuiThemeProvider>
      <HeaderComponent testSaga={{message: 'Hello'}} />
    </MuiThemeProvider>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// More granular enzyme tests
describe("HeaderComponent", () => {
  let props;
  let mountedHeaderComponent;
  const header = () => {
    if (!mountedHeaderComponent) {
      mountedHeaderComponent =
        shallow(<HeaderComponent {...props} />)
    }
    return mountedHeaderComponent;
  }

  beforeEach(() => {
    props = {
      testSaga: {message: 'Hello'},
    };
    mountedHeaderComponent = undefined;
  });

  describe("the rendered div", () => {
    it("contains everything else that gets rendered", () => {
      const divs = header().find("div");
      // When using .find, enzyme arranges the nodes in order such
      // that the outermost node is first in the list. So we can
      // use .first() to get the outermost div.
      const wrappingDiv = divs.first();
      // Enzyme omits the outermost node when using the .children()
      // method on header(). This is annoying, but we can use it
      // to verify that wrappingDiv contains everything else this
      // component renders.
      expect(wrappingDiv.children()).toEqual(header().children());
    });

    it("always renders two buttons", () => {
      expect(header().find("button").length).toBe(2);
    });

    it("renders initial button text", () => {
      expect(header().find("button").last().text()).toBe('Outside button');
    });

    it("changes the button text", () => {
      header().instance().changeText();
      expect(header().instance().state.buttonText).toBe("Outer Button")
    });
  });
});