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
  buttonTitle: 'Ativar',
  isEnabled: true,
  children: (
    <p>
      O corpo do modal <code>body</code> é um elemento <code>JSX.Element</code> recebido pelo children, ou seja, você
      pode passar uma <code>div</code> ou qualquer outro elemento ou componente no corpo e ele será exibido. Além disso,
      você pode definir uma largura do modal pela propriedade <code>width</code> do componente. Caso o conteúdo do modal
      seja muito extenso, ele cria um scroll para que o componente fique mais responsivo e não ultrapasse os limites da
      tela.
    </p>
  ),
  onClick: () => {}
}

export const SecondaryWithOnlyBody = Template.bind({})
SecondaryWithOnlyBody.args = {
  isEnabled: true,
  type: 'secondary',
  children: (
    <p>
      O corpo do modal <code>body</code> é um elemento <code>JSX.Element</code> recebido pelo children, ou seja, você
      pode passar uma <code>div</code> ou qualquer outro elemento ou componente no corpo e ele será exibido. Além disso,
      você pode definir uma largura do modal pela propriedade <code>width</code> do componente. Caso o conteúdo do modal
      seja muito extenso, ele cria um scroll para que o componente fique mais responsivo e não ultrapasse os limites da
      tela. Você também pode definir uma função opcional <code>onClose</code> para ser executada quando o modal fechar.
    </p>
  ),
  onClick: () => {}
}
