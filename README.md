<div align="center">

# 🧠 Jogo da Memória

Um jogo da memória responsivo com visual moderno, animações 3D e placar local.

<br>

<img alt="HTML5" src="https://img.shields.io/badge/HTML5-E96228?style=for-the-badge&logo=html5&logoColor=white">
<img alt="CSS3" src="https://img.shields.io/badge/CSS3-2862E9?style=for-the-badge&logo=css3&logoColor=white">
<img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=222">
<img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-7A11F5?style=for-the-badge&logo=bootstrap&logoColor=white">
<img alt="License" src="https://img.shields.io/badge/License-MIT-2ea44f?style=for-the-badge">

<br>

Autor: <strong>Alvarengazy</strong>

</div>

---

## ✨ Destaques
- Tabuleiro 4×4 e 6×6.
- Flip 3D com microinterações (tilt, bounce, shake em erro).
- Anel laranja que se “constrói” ao acertar o par.
- Contador de movimentos, timer e recorde por dificuldade (localStorage).
- Tema claro/escuro com alternância em 1 clique.
- Reiniciar e Novo Jogo rápidos.

## 🎮 Como jogar
1) Clique em duas cartas para revelá-las.  
2) Iguais: ficam abertas e ganham um anel animado.  
3) Diferentes: viram de volta após ~1s.  
4) Vença com menos movimentos e no menor tempo.

## 🚀 Executar
- Abra o arquivo `index.html` no navegador; ou
- No VS Code, rode via Live Server (recomendado para recarregar ao salvar).

Windows (PowerShell):

```powershell
Start-Process .\index.html
```

## 🧩 Tecnologias
- HTML5, CSS3 (transform 3D e animações)
- Bootstrap 5.3 (layout e componentes)
- Lodash (shuffle)
- Bootstrap Icons (opcional para tema com ícones)

## 📁 Estrutura
```
e:/Memoria/
├─ index.html     # Estrutura da página + modal de vitória
├─ styles.css     # Tabuleiro, cartas e animações (flip, shake, ring)
├─ script.js      # Lógica: estado, embaralhar, timer, recorde e tema
└─ README.md
```

## 🎨 Personalização
- Símbolos das cartas: edite o array em `script.js` (emojis por padrão).  
- Tamanho das cartas: ajuste `--card-size` em `styles.css`.  
- Cores: altere `--tile-bg` (fundo das cartas) e `--accent` (anel/destaques) em `:root`.

## ♿ Acessibilidade
- Cartas são botões com `aria-label` e foco visível.  
- Layout responsivo e navegação por teclado.

## 🗺️ Roadmap curto
- [ ] Sons (flip, acerto, vitória)  
- [ ] Modo contra o tempo  
- [ ] Múltiplos jogadores (turnos)  
- [ ] Temas de ícones (animais, esportes etc.)

## 📜 Licença
© Alvarengazy
