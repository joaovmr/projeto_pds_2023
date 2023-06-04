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
- Como usuário eu gostaria de visualizar a proporção de gorduras, proteínas e carboidratos eu consumo diariamente.
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
    
    - Criar tabela de dados para alimentos.
    - Criar página inicial.
    - Criar campos para Café da Manhã, Almoço, Café da Tarde, Jantar, Cheat Meal.
    - Criar componentes no campos acima para inserir: Nome, Calorias Totais, Gordura, Carboidratos e Proteínas.
    - Criar uma lista desses componentes para diferentes entradas por refeição.
    - Criar métodos para modificar e excluir uma entrada.

- História 3: Como usuário eu gostaria de estabelecer limite de calorias diário. [Renato]

    Tarefas e responsáveis:
    
    - Criar tabela de dados para contagem de consumos.
    - Criar componente para inserir o limite diário
    - Criar lógica para somar as calorias registradas no dia e apresentar junto com o limite
    - Tornar possível atualizar o limite diário.

- História 4: Como usuário eu gostaria de visualizar a proporção de gorduras, proteínas e carboidratos eu consumo diariamente. [Renato]

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


Figma: https://www.figma.com/file/pygWS33qHgJxosSavF5Wvh/Figma-Sprint-1?node-id=103%3A179&t=FiWYzXplnfhlxxCY-1

### Arquitetura

A aplicação não utiliza do padrão hexagonal aqui estão alguns motivos:

Integração direta com o framework Django: A aplicação possui dependências diretas e acoplamento com os componentes do framework Django, como views, serializers e modelos. A arquitetura hexagonal visa isolar a lógica de negócios central da infraestrutura, mas nesse caso,está sendo diretamente os componentes fornecidos pelo Django, o que cria um acoplamento com o framework.

Lógica de banco de dados nos modelos: Nos modelos do Django, são definidas a estrutura e os relacionamentos do banco de dados, o que significa que a lógica de persistência e acesso aos dados está intrinsecamente ligada a eles. Na arquitetura hexagonal, essa lógica de acesso a dados é isolada em portas e adaptadores, permitindo que a lógica de negócios seja independente da tecnologia de armazenamento de dados.

Acesso direto a APIs externas: Na aplicação, as chamadas à da Food API são feitas diretamente, sem uma separação clara de portas e adaptadores. Na arquitetura hexagonal, as interações com sistemas externos, como APIs, são encapsuladas em portas e adaptadores, permitindo que a lógica de negócios não dependa diretamente desses sistemas externos.

Ausência de interfaces explícitas: A arquitetura hexagonal enfatiza a definição de interfaces claras para as portas, permitindo que os adaptadores sejam substituídos facilmente. No código atual, não há uma definição explícita de interfaces para as portas e adaptadores, o que dificulta a substituição e o isolamento desses componentes.
