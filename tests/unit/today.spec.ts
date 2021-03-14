import { mount } from "@vue/test-utils";
import TodayTab from "@/views/Today.vue";

describe("Today.vue", () => {
  it("renders Today tab view", () => {
    const wrapper = mount(TodayTab);
    expect(wrapper.text()).toMatch(`Today's 24`);
  });
});
