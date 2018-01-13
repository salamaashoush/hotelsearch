import React from "react";
import { createMount } from "material-ui/test-utils";
import HotelCard from "../components/HotelCard";

const setup = () => {
  const props = {
    classes: {},
    name: "salama",
    city: "cairo",
    price: 50
  };
  let mount = createMount();
  const wrapper = mount(<HotelCard {...props} />);

  return {
    props,
    wrapper
  };
};
const wrapper = setup().wrapper;
const props = setup().props;
describe(">>> SaerchResult > HotelCard", () => {
  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should change text when i change props", () => {
    wrapper.setProps({
      name: "ahmed",
      city: "giza",
      price: 30
    });
    expect(wrapper).toMatchSnapshot();
    const name = wrapper.find(`span[data-test="name"]`);
    const price = wrapper.find(`p[data-test="price"]`);
    const city = wrapper.find(`span[data-test="city"]`);

    expect(name.text()).toEqual("ahmed");
    expect(price.text()).toEqual("30 AED");
    expect(city.text()).toEqual("giza");
  });
});
