import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Modal } from '.'

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {}
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />

export const Default = Template.bind({})

Default.args = {
  title: 'Título do Modal',
  buttonTitle: 'Aprovar',
  children: [
    <div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione sed neque nam blanditiis illo, porro,
        aspernatur impedit, quod voluptate culpa dolorum praesentium! Architecto ratione pariatur eius provident
        sapiente, ut obcaecati. Vitae veniam dolor repellat, officiis accusamus sit consequuntur quae nostrum soluta
      </p>
      <br />
    </div>,
    <div>
      <fieldset>
        <legend>Choose your monster's features:</legend>
        <div>
          <input type='checkbox' />
          <label>Scales</label>
        </div>
        <div>
          <input type='checkbox' id='horns' name='horns' />
          <label>Horns</label>
        </div>
      </fieldset>
    </div>
  ],
  isDisable: false,
  onClick: () => {}
}
