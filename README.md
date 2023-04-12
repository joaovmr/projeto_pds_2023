# Projeto Calorie Tracker - PDS - 2023/1

## Membros e papéis

- Arthur Veloso Kuahara: Fullstack
- João Vitor de Morais Rocha: Fullstack
- Renato Polanczyk Resende: Fullstack
- Roberto Gomes Rosmaninho Neto: Fullstack

## Escopo (objetivo do sistema, principais features, etc)

### Objetivo:

- Criar um Sistema de Contador de Calorias e Macronutrientes.

### Features:

- Gráficos de Estatísticas de Consumos de Calorias.
- Gráficos de Estatísticas de Consumos de Macronutrientes.
- Sistema de Login.
- Sistema de Registro.
- Adição de Itens Consumidos.

### Tecnologias (LP, BD,etc)

- React
- Javascript
- HTML
- CSS
- Python (Django)

### Backlog do Produto

- Como usuário eu gostaria ter acesso à plataforma por meio de login e senha.
- Como usuário eu gostaria de registrar as informações mais importantes de cada refeição que eu faço durante o dia.
- Como usuário eu gostaria de estabelecer limite de calorias diário.
- Como usuário eu gostaria de visualizar a proporção de calorias, proteínas e carboidratos eu consumo diariamente.
- Como usuário eu gostaria de acompanhar a evolução do meu peso diariamente.
- Como usuário eu gostaria de acompanhar a quantidade de calorias que eu consumo diariamente.
- Como usuário eu gostaria de establecer um objetivo de peso.
- Como usuário eu gostaria de calcular e acompanhar meu IMC diário.
- Como usuário eu gostaria de compartilhar meus resultados diários nas redes sociais.
- Como usuário eu gostaria de desafiar meus amigos para uma competição.
- Como usuário eu gostaria de ter visualizações diárias, semanais, mensais e anuais.
- Como usuário eu gostaria de adicionar, editar, excluir, e visualizar perfis de amigos.
- Como usuário eu gostaria de calcular e acompanhar meu IMC diário.

### Backlog da Sprint

- História 1: Como usuário eu gostaria ter acesso à plataforma por meio de login e senha. [Roberto]

    Tarefas e responsáveis:
    
    - Criar banco de dados de usuários.
    - Criar página de cadastro.
    - Criar página de login.
    - Criar sistema de autenticação.

- História 2: Como usuário eu gostaria de registrar as informações mais importantes de cada refeição que eu faço durante o dia. [João]

    Tarefas e responsáveis:
    
    - Criar página inicial.
    - Criar campos para Café da Manhã, Almoço, Café da Tarde, Jantar, Cheat Meal.
    - Criar componentes no campos acima para inserir: Nome, Calorias Totais, Gordura, Carboidratos e Proteínas.
    - Criar uma lista desses componentes para diferentes entradas por refeição.
    - Criar métodos para modificar e excluir uma entrada.

- História 3: Como usuário eu gostaria de estabelecer limite de calorias diário. [Renato]

    Tarefas e responsáveis:
    
    - Criar componente para inserir o limite diário
    - Criar lógica para somar as calorias registradas no dia e apresentar junto com o limite
    - Tornar possível atualizar o limite diário.

- História 4: Como usuário eu gostaria de visualizar a proporção de calorias, proteínas e carboidratos eu consumo diariamente. [Renato]

    Tarefas e responsáveis:
    
    - Encontrar e adicionar uma biblioteca que possua componentes de gráficos.
    - Criar componente de um gráfico de pizza para representar a proporção dos dados.

- História 5: Como usuário eu gostaria de acompanhar a evolução do meu peso diariamente. [Arthur]

    Tarefas e responsáveis:
    
    - Criar página de estatisticas do usuário na plataforma.
    - Criar botão e rota para ligar a página principal à página de gráficos.
    - Criar componente de gráfico com consulta das entradas de peso no banco de dados.
    - Tornar o gráfico dinâmico para ser atualizado a cada modificação inserida pelo usuário no componente apropriado.

- História 6: Como usuário eu gostaria de acompanhar a quantidade de calorias que eu consumo diariamente. [Roberto]

    Tarefas e responsáveis:
    
    - Criar um segundo componente de gráfico na página de gráficos referenciando as entradas de calorias totais no banco de dados.
    - Tornar o gráfico dinâmico para ser atualizado a cada modificação inserida pelo usuário no componente apropriado.

- História 7: Como usuário eu gostaria de establecer atualizar um objetivo de peso. [Renato]

    Tarefas e responsáveis:
    
    - Criar um componente de entrada de texto (número) para atualizar o campo de objetivo de peso.
    - Criar um componente de visualização do objetivo de peso.
    - Conectar o componente ao backend para mostrar o valor atual presente no banco de dados.
