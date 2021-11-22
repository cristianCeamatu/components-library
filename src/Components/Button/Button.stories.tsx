import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Apply',
}

export const SecondaryLgInline = Template.bind({})
SecondaryLgInline.args = {
  label: 'Apply',
  color: 'secondary',
  size: 'largeInline',
}

export const LargeSuccess = Template.bind({})
LargeSuccess.args = {
  size: 'large',
  label: 'Apply',
  color: 'success',
}

export const SmallDanger = Template.bind({})
SmallDanger.args = {
  size: 'small',
  label: 'Button',
  color: 'danger',
}
