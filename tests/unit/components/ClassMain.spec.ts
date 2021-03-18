import {mount} from '@vue/test-utils'
import ClassMain from "@/components/ClassMain.vue";

describe('ClassMain.vue', () => {
  it('should render everything', () => {
    const wrapper = mount(ClassMain);
    expect(wrapper.html()).toBe('<h1>ClassMain</h1><h2>ClassChild</h2>');
  });
});
