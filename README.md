# Jogo da Forca: Sistemas Operacionais

Este é um jogo clássico da forca com um toque educacional, trazendo palavras relacionadas a conceitos de Sistemas Operacionais. 
O objetivo é adivinhar a palavra secreta sorteada antes que o número de tentativas se esgote.

## 📝 Descrição do Projeto

O jogo foi desenvolvido para combinar diversão e aprendizado, apresentando conceitos básicos de Sistemas Operacionais. 
Cada palavra está associada a uma categoria que serve como dica para o jogador.

### Como Funciona

1. **Palavras e Categorias**  
   As palavras estão associadas a categorias que ajudam o jogador a adivinhar.  
   **Exemplo**:  
   - Palavra: `PROCESSOS`  
     Categoria: *"Gerenciamento: Unidade básica de execução em um sistema operacional."*

2. **Sorteio da Palavra Secreta**  
   - O jogo sorteia uma palavra aleatória da lista ao iniciar.
   - A categoria da palavra também é exibida como dica.

3. **Interação do Jogador**  
   - O jogador escolhe letras clicando nos botões do alfabeto.
   - Acertos revelam as letras na palavra; erros reduzem o número de tentativas e atualizam a imagem da forca.

4. **Condições de Vitória e Derrota**  
   - O jogador vence ao descobrir todas as letras da palavra secreta antes de esgotar as tentativas.  
   - Caso contrário, o jogo revela a palavra secreta correta e finaliza.

5. **Estilização e Feedback Visual**  
   - Letras corretas: marcadas em **verde**.  
   - Letras erradas: marcadas em **rosa**.  
   - Um modal informa o resultado (vitória ou derrota) e permite reiniciar o jogo.

---

## ⚙️ Funcionalidades Principais

### Carregamento de Palavras
As palavras e categorias são carregadas automaticamente pela função `carregaListaAutomatica`, garantindo uma lista educacional e relacionada ao tema.

### Montagem da Palavra
A função `montarPalavraNaTela` exibe a palavra sorteada como uma sequência de caixas vazias que são preenchidas ao longo do jogo.

### Escolha de Letras
A função `verificaLetraEscolhida` registra as interações do jogador e desativa as letras já escolhidas para evitar repetições.

### Validação e Resultado
- **`comparalistas`**: Verifica acertos e erros, atualizando o estado do jogo e as condições de vitória ou derrota.  
- **Modal de Resultado**: Informa o jogador sobre o término do jogo com mensagens claras.

---

## 🎯 Objetivo Educacional

Este jogo foi projetado para reforçar o aprendizado de conceitos básicos de Sistemas Operacionais de forma interativa. 
As categorias ajudam o jogador a entender os termos enquanto jogam. 
Aonde os jogadores resolvem enigmas baseados em conceitos de Sistemas Operacionais,
como gerenciamento de processos, interrupções, deadlocks e alocação derecursos.

---

## 🔧 Tecnologias Utilizadas

- **HTML**: Estrutura do jogo.  
- **CSS**: Estilização da interface e feedback visual.  
- **JavaScript**: Lógica do jogo, interação com o jogador e manipulação dinâmica da interface.


