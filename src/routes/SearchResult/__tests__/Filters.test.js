import React from "react";
// import { mount } from "enzyme";
import { createMount } from "material-ui/test-utils";
import Filters from "../components/Filters";

const setup = () => {
  const props = {
    classes: {},
    filters: { name: "", price: 1 },
    priceRange: { min: 0, max: 1 },
    onChange: jest.fn()
  };
  let mount = createMount();
  const wrapper = mount(<Filters {...props} />);

  return {
    props,
    wrapper
  };
};
const wrapper = setup().wrapper;
const props = setup().props;
describe(">>> SaerchResult > Filters", () => {
  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should change input value when i change prop", () => {
    wrapper.setProps({ filters: { name: "salama", price: 50 } });
    const name = wrapper.find(`input[data-test="name"]`);
    expect(name.props().value).toEqual("salama");
  });
});
