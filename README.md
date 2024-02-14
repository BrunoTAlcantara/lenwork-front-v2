# Teste de Desenvolvimento React Pleno

## Melhorias e Atualizações v2

### Usabilidade
- Incluí timeouts para simular solicitações, proporcionando uma melhor percepção dos tempos de carregamento.
- Implementei debounce para aprimorar a busca de usuários, reduzindo o número de requisições redundantes.
- Adicionei animações em diversos componentes para tornar a experiência do usuário mais envolvente.


### Escalabilidade
- Utilizei "Composition Patterns" para reutilizar componentes de forma eficiente e facilitar a adição de novos elementos.
- Implementei "Custom Hooks" para promover a reutilização de lógica e melhorar a organização do código.
- Separei os componentes básicos dos complexos, visando uma estrutura mais modular e escalável.

### Componentes
- Removi os componentes shadcn/radix.
- Criei novos componentes utilizando HTML semântico, Tailwind CSS e React.
- Utilizei o Tailwind merge em alguns componentes, incluindo variantes.
- Reestruturei o projeto com apenas uma pasta de componentes para facilitar a leitura do código.

### Correções
- Corrigi textos e palavras erradas utilizando o codeSpellChecker ("Obrigado pela dica!").
- Removi imports não utilizados.
- Ajustei o componente de Ícone para receber um ElementType.
- Agora o input preenche toda a tela.

## Descrição:

Este projeto de exemplo foi desenvolvido como parte de um teste para a posição de Desenvolvedor React Pleno. Consiste em um sistema de formulário com duas telas: uma tela para preenchimento do formulário e outra para visualização dos dados inseridos.
## Tecnologias Utilizadas:

- [React 18+](https://reactjs.org/)
- [Next.js 14](https://nextjs.org/)
- [TanStack Table](https://tanstack.com/table/latest)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zod](https://github.com/colinhacks/zod)
- [Toastify](https://fkhadra.github.io/react-toastify/introduction/)

## Instruções de uso

1. **Clonar o Repositório:**
2. **yarn ou npm i**
3. **yarn dev ou npm run dev**
4.  **O projeto será executado em `http://localhost:3000`. Abra seu navegador e acesse esse endereço para visualizar o projeto.**


## Funcionalidades Implementadas:

### Tela de Formulário:

- **Campos para Inserção de Dados Pessoais:** A tela de formulário inclui campos para inserir informações pessoais, como nome, e-mail, telefone, etc.

- **Validação de Campos Obrigatórios:** Todos os campos obrigatórios são validados antes do envio do formulário, garantindo que o usuário forneça todas as informações necessárias.

- **Botão de Envio do Formulário:** Um botão de envio do formulário está disponível para permitir que o usuário submeta os dados após preenchê-los.

- **Responsividade:** O formulário é responsivo e se adapta a diferentes tamanhos de tela, garantindo uma boa experiência de usuário em dispositivos móveis e desktops.

### Tela de Visualização de Dados:

- **Botão de Cadastrar Usuário:** Inclui um botão que redireciona o usuário para outra tela onde é possível cadastrar um novo usuário.
- **Indicadores:** Exibe indicadores visuais para resumir os dados inseridos, fornecendo uma visão geral rápida das estatísticas relevantes ou métricas-chave.

- **Tabela:** Apresenta os dados inseridos em formato tabular, permitindo uma visualização organizada e estruturada das informações.

  - **Paginação:** Implementa paginação na tabela, dividindo os dados em páginas separadas para melhorar o desempenho e a usabilidade, especialmente com conjuntos de dados extensos.

  - **Campos de Busca:** Fornece campos de busca para permitir que os usuários pesquisem dados específicos na tabela, facilitando a localização de informações relevantes.

  - **Ação de Deletar:** Ao selecionar a opção de deleção, abre-se um popover de confirmação para garantir que o usuário realmente deseja excluir o registro. Isso evita deleções acidentais e fornece uma oportunidade para reconsideração.

  - **Ação de Editar:** Ao selecionar a opção de edição, abre-se um modal que permite ao usuário editar os detalhes do registro selecionado. O modal exibe os campos relevantes preenchidos com os dados atuais, permitindo que o usuário faça alterações e as salve.

  - **Filtro de Coluna:** Implementa filtros de coluna personalizáveis, permitindo que os usuários escolham quais colunas desejam exibir na tabela. Isso proporciona uma experiência mais flexível, permitindo que os usuários personalizem a visualização de acordo com suas necessidades.

   - **Responsividade:** Garante que a tabela seja responsiva, ajustando-se dinamicamente a diferentes tamanhos de tela e dispositivos, proporcionando uma experiência consistente em dispositivos móveis e desktops.
## Imagens do Sistema


### Formulário de Cadastro
<div style="display: flex; align-items: flex-start;">
    <img src="https://github.com/BrunoTAlcantara/lenwork-front-v2/assets/29778550/35900f4a-d867-4106-81a2-879557ac39ad" alt="Imagem 1" style="height: 300px; border: 1px solid #ccc; margin-right: 10px;">
    <img src="https://github.com/BrunoTAlcantara/leanwork-front/assets/29778550/5e783dbc-825d-4064-97aa-3e00e0f4f2d8" alt="Imagem 2" style="height: 300px; border: 1px solid #ccc;">
</div>


### Tela de Visualização de Dados:
<div style="display: flex; align-items: flex-start;">
    <img src="https://github.com/BrunoTAlcantara/lenwork-front-v2/assets/29778550/82f6ebb2-ef4c-4b8a-b2f4-2ef0827dfbd7" alt="Imagem Desktop" style="height: 400px; border: 1px solid #ccc; margin-right: 10px;">
    <img src="https://github.com/BrunoTAlcantara/lenwork-front-v2/assets/29778550/c990791c-2281-40d4-be48-565b17679586" alt="Imagem Mobile" style="height: 400px; border: 1px solid #ccc;">
</div>

## Guia de estilo utilizado

### Imagem de fundo
 - Para o overlay na imagem utilizar:
 - Cor inicial: #40c8f4
 - Cor final: #2179b5
[(Imagem)](./images/bg.jpg);

### Label
 - Cor da fonte: <span style="color:#999999">*#999999*</span>.

### Input:
 - Cor da fonte sem foco: <span style="color:#efeeed">*#efeeed*</span>.
 - Cor da fonte com foco: <span style="color:#555555">*#555555*</span>.
 - Cor da borda: <span style="color:#dbdbdb">*#dbdbdb*</span>.

### Botão Abilitado:
 - Cor da fonte com foco: <span style="color:#ffffff">*#ffffff*</span>.
 - Cor de background: <span style="color:#40c8f4">*#40c8f4*</span>.

### Botão Hover:
 - Opacidade do botão com hover: 70%.

### Botão Desabilitado:
 - Cor da fonte sem foco: <span style="color:#dddcdc">*#dddcdc*</span>.
 - Cor de background: <span style="color:#f6f6f6">*#f6f6f6*</span>.
   
## Agradecimento 
 - Agradeço pela oportunidade de participar deste teste e estou à disposição para qualquer feedback ou ajustes necessários no projeto.
  






