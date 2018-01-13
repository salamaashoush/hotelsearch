import React from "react";
import { createMount } from "material-ui/test-utils";
import Sort from "../components/Sort";

const setup = () => {
  const props = {
    classes: {},
    onChange: jest.fn(),
    sortBy: "name"
  };
  let mount = createMount();
  const wrapper = mount(<Sort {...props} />);

  return {
    props,
    wrapper
  };
};
const wrapper = setup().wrapper;
const props = setup().props;
describe(">>> SaerchResult > Sort", () => {
  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should changed to price when i changed the prop", () => {
    wrapper.setProps({
      sortBy: "price"
    });
    expect(wrapper).toMatchSnapshot();
  });
});
