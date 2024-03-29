import { shallowMount } from '@vue/test-utils';
import HelloWorld from '../../src/components/hello-world/hello-world.vue';

describe('<hello-world/>', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.find('.hello h1').text())
      .toEqual('Hello Jest');
  });
});