import { mount } from "@vue/test-utils";
import ContextsTab from "@/views/Contexts.vue";

describe("Contexts.vue", () => {
  it("renders Contexts tab view", () => {
    const wrapper = mount(ContextsTab);
    expect(wrapper.text()).toMatch(`Contexts`);
  });
});
