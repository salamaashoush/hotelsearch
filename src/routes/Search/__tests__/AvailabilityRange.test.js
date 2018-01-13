import React from "react";
import { mount } from "enzyme";
// import { createMount } from "material-ui/test-utils";

import AvailabilityRange from "../components/AvailabilityRange";

const setup = () => {
  const props = {
    classes: {},
    search: jest.fn(),
    onChange: jest.fn(),
    range: {
      start: "2020-10-09",
      end: "2020-10-25"
    },
    history: { push: jest.fn() }
  };
  // let mount = createMount();
  const wrapper = mount(<AvailabilityRange {...props} />);

  return {
    props,
    wrapper
  };
};
const wrapper = setup().wrapper;
const props = setup().props;
describe(">>> Saerch > AvailabilityRange", () => {
  it("should render with start data & end date values", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should change labels to From/To when range start and end is null", () => {
    wrapper.setProps({ range: { start: null, end: null } });
    expect(wrapper).toMatchSnapshot();
    let start = wrapper.find(`input[data-test="start"]`);
    let end = wrapper.find(`input[data-test="end"]`);
    expect(start.props().value).toEqual("From");
    expect(end.props().value).toEqual("To");
  });

  it("should change value when props is changed", () => {
    wrapper.setProps({
      range: {
        start: "2020-11-12",
        end: "2020-12-20"
      }
    });
    expect(wrapper).toMatchSnapshot();
    let start = wrapper.find(`input[data-test="start"]`);
    let end = wrapper.find(`input[data-test="end"]`);
    expect(start.props().value).toEqual("12-11-2020");
    expect(end.props().value).toEqual("20`-12-2020");
  });
});
