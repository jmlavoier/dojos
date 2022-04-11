# Kata (Lista Personagens)

O desafio é sobre listagem de personagens. Através de componentes **reaproveitáveis**, construa uma tela que liste um MENU com os personagens do Pokémon, e permita visualizar os detalhes de cada personagem de acordo com o protótipo. 

Considere que os componentes reutilizáveis serão utilizado em outra tela para realizar a listagem de personagens de outro universo, como Star Wars.

## Detalhes

- Universos são: Pokémon, Star Wars, Harry Potter...
- Já foi construído alguns *styled-components* em `src/components/styled.ts`, para não precisar se preocupar com estilização, talvez seja necesssário alguns ajustes.
- Os dados ficam em `src/data`.
- As telas já foram definidas e organizadas no diretório `src/screens`.
- Os componentes `PokemonItem` e `PokemonList`, são exemplos de componentes não reaproveitáveis, a ideia é refatorá-los para sejam. 
- Faça testes dos componentes criados utilizando *jest* e *react-testing-library* como no exemplo do `PokemonItem.test`.
- Siga o [protótipo](https://www.figma.com/file/SU0KZXi0HTsmYWnFIT46iO/Dojo's-Prototypes?node-id=0%3A1) do desafio.
- As imagens dos universos ficam em `assets/images` e podem ser importadas.


## User stories

> **Eu como** analista de personagens
> **Quero** escolher quais os personagens gostaria de ver
> **Porque** posso ter mais de um universo de personagens

- Tela inicial da aplicação (Home)
- Exibir botões dos universos (Pokémon e StarWars)
- Ao clicar nos botões é preciso redirecionar para as respectivas rotas `/pokemons` e `/startwars`.


> **Eu como** analista de personagens
> **Quero** visualizar uma menu com a lista de pokemons
> **Porque** quer escolher qual pokemon vou analisar

- Iniciar sem nenhum item selecionado na tela de pokémons (Pokemon), mostrar o texto "Escolha 1 item da lista para visualizar" no centro da tela.
- Exibir o menu de pokemons com as cores de acordo com o protótipo.
- Permitir clicar em um item do menu para visualizar os detalhes.
- O menu deve mostrar qual item está selecionado na cor amarela.
- Inserir a imagem do Pokemon na pagina.
- Botão de voltar na header deverá voltar para a tela Home.

> **Eu como** analista de personagens
> **Quero** visualizar uma menu com a lista dos personagens do Star Wars
> **Porque** quer escolher qual personagem vou analisar

- Iniciar sem nenhum item selecionado na tela de Star Wars (StarWars), mostrar o texto "Escolha 1 item da lista para visualizar" no centro da tela.
- Exibir o menu de personagens Star Wars com as cores de acordo com o protótipo.
- Permitir clicar em um item do menu para visualizar os detalhes do personagem.
- O menu deve mostrar qual item está selecionado na cor amarela.
- Inserir a imagem do Star Wars na pagina.
- Botão de voltar na header deverá voltar para a tela Home.

## DoD

- Tela Home com os 2 botões (Star Wars e Pokémon)
- Tela Pokémon listando e mostrando os detalhes
- Tela Star Wars listando e mostrando os detalhes

## Prototipo
https://www.figma.com/file/SU0KZXi0HTsmYWnFIT46iO/Dojo's-Prototypes?node-id=0%3A1
