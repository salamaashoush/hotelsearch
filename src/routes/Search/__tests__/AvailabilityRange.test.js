import React from "react";
// import { mount } from "enzyme";
import { createMount } from "material-ui/test-utils";

import AvailabilityRange from "../components/AvailabilityRange";

const setup = () => {
  const props = {
    classes: {},
    search: jest.fn(),
    onChange: jest.fn(),
    range: { start: new Date("10-10-2020"), end: new Date("10-15-2020") },
    history: { push: jest.fn() }
  };
  let mount = createMount();
  const wrapper = mount(<AvailabilityRange {...props} />);

  return {
    props,
    wrapper
  };
};

describe(">>> Saerch > AvailabilityRange", () => {
  let wrapper, props;
  beforeEach(() => {
    wrapper = setup().wrapper;
    props = setup().props;
  });
  it("should render with start data & end date values", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should open date picker when clicking on the input", () => {
    wrapper.find(`input[data-test="start"]`).simulate("click");
    expect(wrapper).toMatchSnapshot();
  });

  it("should change the value when pick date", () => {
    expect(wrapper).toMatchSnapshot("1. before clicking start date");
    const start = wrapper.find(`input[data-test="start"]`);
    start.simulate("click");
    wrapper
      .find(`Day`)
      .first()
      .simulate("click");
    expect(wrapper).toMatchSnapshot("2. after clicking start date");
    wrapper.find(`button[aria-label="OK"]`).simulate("click");
    expect(props.onChange).toHaveBeenCalled();
  });

  it("should clear the value when clicking cleare", () => {
    expect(wrapper).toMatchSnapshot();
    const start = wrapper.find(`button[data-test="clear"]`);
    start.simulate("click");
    expect(props.onChange).toHaveBeenCalledTimes(1);
    expect(props.range).toEqual({ start: null, end: null });
  });
});
