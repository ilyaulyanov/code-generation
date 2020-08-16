import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { PetsList } from './PetsList'

export default {
  title: 'PetsList',
  component: PetsList,
} as Meta

const Template: Story = (args) => <PetsList {...args} />

export const List = Template.bind({})
List.args = {}
