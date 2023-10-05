// Import necessary dependencies
import { mount } from '@vue/test-utils';
import Hello from '@/components/Hello.vue'



describe('Hello', () => {
  it('renders the default title if no prop is provided', () => {
    const wrapper = mount(Hello);
    expect(wrapper.text()).toContain('DEFAULT TITLE');
  });

  it('renders the provided title prop', () => {
    const title = 'Custom Title';
    const wrapper = mount(Hello, {
      props: {
        title,
      },
    });
    expect(wrapper.text()).toContain(`COMPUTED: ${title}`);
  });

  it('renders the computed value of the title prop', () => {
    const title = 'Custom Title';
    const wrapper = mount(Hello, {
      props: {
        title,
      },
    });
    expect(wrapper.text()).toContain(`COMPUTED: ${title}`);
  });
});
