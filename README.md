<div align="center">

# 🧠 Jogo da Memória

Um jogo da memória responsivo com visual moderno, animações 3D e placar local.

<br>

<img alt="HTML5" src="https://img.shields.io/badge/HTML5-E96228?style=for-the-badge&logo=html5&logoColor=white">
<img alt="CSS3" src="https://img.shields.io/badge/CSS3-2862E9?style=for-the-badge&logo=css3&logoColor=white">
<img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=222">
<img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-7A11F5?style=for-the-badge&logo=bootstrap&logoColor=white">
<img alt="License" src="https://img.shields.io/badge/License-Alvarengazy-2ea44f?style=for-the-badge">

<br>

Autor: <strong>Alvarengazy</strong>

> <img alt="Image" width="1408" height="903" src="https://private-user-images.githubusercontent.com/221409936/487530455-fa947694-98a8-470f-a67b-8a93d8724fc1.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTc0NjE4NTUsIm5iZiI6MTc1NzQ2MTU1NSwicGF0aCI6Ii8yMjE0MDk5MzYvNDg3NTMwNDU1LWZhOTQ3Njk0LTk4YTgtNDcwZi1hNjdiLThhOTNkODcyNGZjMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwOTA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDkwOVQyMzQ1NTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04YzE0ZDdiMGM5NDk5Y2NkNjAwOGU2OTBjNTVkZjE3ZGQ0ODVjN2UwM2JlOTk5NWI5MDNmMzNkNzM0YmQwM2I3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.lC44QJFdrofioDEOrakc1234FjK3T2YiQ6XW7ZCb45A">

Link do Jogo: https://alvarengazy.github.io/Jogo-da-Memoria/

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




