import {mount} from '@vue/test-utils'
import PropertyDecoratorMain from "@/components/PropertyDecoratorMain.vue";

describe('PropertyDecoratorMain.vue', () => {
  it('should render everything', () => {
    const wrapper = mount(PropertyDecoratorMain);
    expect(wrapper.html()).toBe('<h1>PropertyDecoratorMain</h1><h2>PropertyDecoratorChild</h2>');
  });
});
