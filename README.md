Votação - Tesouros do IFPI 2026

Este é o repositório do projeto de votação para o evento "Tesouros do IFPI 2026". A aplicação permite aos participantes votar em diferentes categorias para homenagear indivíduos destacados nas áreas de alunos, professores, técnicos e funcionários terceirizados do IFPI.

Descrição do Projeto

O sistema consiste em um formulário de votação que permite aos usuários se inscreverem nas diversas categorias do evento. Cada participante preencherá seus dados em um formulário com várias abas. Ao final, eles poderão revisar suas informações em um modal antes de finalizar a votação.

Funcionalidades:

Formulário de Votação: O participante preenche dados pessoais e informações sobre a categoria em que está sendo indicado.

Abas de Categorias: O formulário é dividido em abas para cada categoria (Aluno Atual, Ex-Aluno, Professor Atual, Ex-Professor, Técnico Administrativo Atual, Ex-Técnico, Funcionário Terceirizado).

Modal de Revisão: Antes de confirmar a votação, o usuário pode revisar todas as informações inseridas.

Finalização da Votação: Ao final, o usuário pode confirmar sua votação e ser redirecionado para a página de confirmação.

Tecnologias Utilizadas

HTML5: Estrutura da página e marcação semântica.

CSS3: Estilização visual do site.

Bootstrap: Framework CSS para facilitar o design responsivo e o layout.

JavaScript: Lógica de funcionamento das abas, modal de revisão e redirecionamento de páginas.

Popper.js: Utilizado para o posicionamento do modal (já integrado ao Bootstrap).

Funcionalidades do Projeto

Exibição de Abas: O formulário de votação é organizado em abas, permitindo que o usuário navegue entre as categorias.

Validação de Dados: A votação só pode ser finalizada se todos os campos forem preenchidos corretamente.

Revisão de Votação: Antes de confirmar a votação, o usuário pode revisar todas as suas escolhas.

Modal de Confirmação: O usuário confirma suas informações na última etapa, com a opção de editar antes de finalizar.

Como Rodar o Projeto Localmente
1. Clone este repositório:
git clone https://github.com/seu-usuario/votacao-tesouros-ifpi-2026.git
2. Acesse o diretório do projeto:
cd votacao-tesouros-ifpi-2026
3. Abra o arquivo index.html no seu navegador:

Basta clicar no arquivo index.html para abrir a página de votação diretamente no navegador de sua escolha.

Estrutura do Projeto

A estrutura do projeto é a seguinte:

/votacao-tesouros-ifpi-2026
├── index.html                # Página principal com o formulário de votação
├── templates/
│   ├── confirmacao.html.js   # Página de confirmação após finalizar a votação
│   ├── votacao.html          # Página de votação com abas e finalização
│   └── termos.html           # Lógica para os termos de consentimento
├── css/
│   ├── style.css             # Estilos personalizados
├── js/
│   ├── votacao.js       # Lógica para navegação entre abas e modal de revisão
│   ├── scripts.js       # Códigos com funcionalidades diversas 
│   └── termos.js        # Lógica para os termos de consentimento
└── README.md            # Arquivo de documentação do projeto

Como Contribuir

Fork o repositório.

Crie uma nova branch (git checkout -b feature/nome-da-feature).

Faça as alterações desejadas.

Commit as mudanças (git commit -m 'Adicionando nova feature').

Envie a branch (git push origin feature/nome-da-feature).

Abra um Pull Request.

Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE
 para mais detalhes.

Agradecimentos

Agradecemos ao IFPI pela organização do evento "Tesouros do IFPI 2026" e pela oportunidade de criar este sistema de votação digital.
