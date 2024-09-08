# Psi Sarah Todaro Webpage

Este é o site oficial da psicóloga Sarah Todaro, especializado em Terapia Cognitivo-Comportamental (TCC), oferecendo sessões de terapia online com foco em flexibilidade e conforto para os pacientes.

## Sobre

O site foi desenvolvido para proporcionar uma experiência eficiente e acessível aos pacientes da Psicologa Sarah Todaro. Além de informações detalhadas sobre os serviços de terapia, o site oferece uma seção de perguntas frequentes, depoimentos e mais.

## Requisitos

- **Node.js:** Versão `20.x` ou superior.
- **NPM:** Para gerenciar dependências e scripts.

## Instalação e Configuração

Siga os passos abaixo para rodar o projeto localmente:

1. Clone o repositório:
   ```bash
   git clone git@github.com:neoshinesnh/psi-sarah-todaro-webpage.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd psi-sarah-todaro-webpage
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor localmente:
   ```bash
   npm run dev
   ```

5. Acesse o site localmente em:
   ```
   http://localhost:8081
   ```

### Scripts Disponíveis

- **`npm run start`**: Inicia o servidor em ambiente de produção usando `node`.
- **`npm run dev`**: Inicia o servidor com `nodemon` para desenvolvimento, permitindo a reinicialização automática do servidor ao detectar mudanças no código.
- **`npm run watch`**: Observa alterações no arquivo de estilo do Tailwind CSS e recompila automaticamente o arquivo CSS.
- **`npm run build`**: Compila e minifica os arquivos CSS utilizando Tailwind para produção.

## Estrutura de Diretórios

```
/public
   /assets - Arquivos estáticos (imagens, etc)
   /style-105.css - Arquivo de estilo gerado pelo Tailwind
/src
   /style.css - Arquivo de estilo de entrada para Tailwind
/index.html - Página principal do site
/server.js - Servidor Node.js para rodar a aplicação
```

## Tecnologias Utilizadas

- **Node.js**: Plataforma de execução para o servidor.
- **Express.js**: Framework para a construção do backend.
- **Tailwind CSS**: Framework CSS para estilização responsiva.
- **Nodemon**: Ferramenta para desenvolvimento automatizado.

## Contato

Para mais informações, acesse o [site oficial](https://www.psicologasarahtodaro.com.br/)