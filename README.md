# Jogo da Memória

Um jogo da memória responsivo com visual moderno, animações 3D e placar local. Feito em HTML, CSS e JavaScript, com layout usando Bootstrap 5.

Autor: Alvarengazy

## Destaques
- Tabuleiro 4×4 e 6×6.
- Virada de carta com animação 3D e microinterações (tilt, shake em erro, bounce no flip).
- Anel de destaque que se “constrói” quando acerta o par.
- Contador de movimentos, timer e recorde por dificuldade (salvo em localStorage).
- Tema claro/escuro com alternância.
- Botões de Reiniciar e Novo Jogo.

## Como jogar
1. Clique em duas cartas para revelá-las.
2. Se forem iguais, o par permanece aberto e o anel laranja é animado ao redor.
3. Se forem diferentes, voltam a virar após ~1 segundo.
4. Conclua todos os pares no menor tempo e com menos movimentos.

## Executar
- Abra o arquivo `index.html` no navegador.
- Opcional no VS Code: use a extensão “Live Server” para recarregamento automático.

## Tecnologias
- HTML5, CSS3 (animações e transform 3D)
- Bootstrap 5.3 (layout e componentes)
- Lodash (embaralhamento)
- Bootstrap Icons (opcional para tema com ícones)

## Estrutura
- `index.html` — Estrutura da página, cabeçalho e modal de vitória.
- `styles.css` — Estilos do tabuleiro, cartas e animações (flip, shake, ring).
- `script.js` — Lógica do jogo (embaralhar, estado, movimentos, timer, recorde, tema).

## Personalização
- Tema das cartas: em `script.js`, ajuste o array de símbolos (emojis por padrão). É possível alternar para ícones do Bootstrap.
- Tamanho das cartas: altere `--card-size` em `styles.css`.
- Cores: ajuste `--tile-bg` (fundo das cartas) e `--accent` (cor do anel/destaques) em `:root`.

## Acessibilidade
- Cartas são botões com `aria-label` e foco visível.
- Layout responsivo com grid.

## Licença
MIT © Alvarengazy
