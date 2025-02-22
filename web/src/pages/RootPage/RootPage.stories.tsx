import type { Meta, StoryObj } from '@storybook/react'

import RootPage from './RootPage'

const meta: Meta<typeof RootPage> = {
  component: RootPage,
}

export default meta

type Story = StoryObj<typeof RootPage>

export const Primary: Story = {}
