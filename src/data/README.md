# Guia de Edição de Conteúdo - LR ADVOGADOS

Este diretório contém todos os textos, labels e conteúdos do site organizados em arquivos separados. Você pode editar qualquer texto aqui sem precisar mexer no código dos componentes.

## 📁 Estrutura dos Arquivos

### `site-info.ts`
**Informações gerais do escritório**
- Nome do escritório e advogada
- Dados de contato (telefone, e-mail, endereço)
- Horários de funcionamento
- Links de redes sociais

**Como editar:**
```typescript
export const siteInfo = {
  contact: {
    phone: "(61) 98326-3512",  // ← Altere aqui o telefone
    email: "louizerocha.adv@gmail.com",  // ← Altere aqui o e-mail
    address: "Seu novo endereço aqui...",  // ← Altere aqui o endereço
  }
}
```

---

### `navigation.ts`
**Menu de navegação do site**

Edite os itens do menu principal:
```typescript
menuItems: [
  { label: "Home", href: "#home" },  // ← Altere o texto do menu aqui
  { label: "Sobre Nós", href: "#sobre" },
  // ...
]
```

---

### `hero.ts`
**Seção inicial do site (Hero)**

Textos da primeira seção:
- Texto de boas-vindas
- Título principal
- Subtítulo
- Textos dos botões

---

### `stats.ts`
**Estatísticas do escritório**

Edite os números e labels:
```typescript
{
  value: "500+",  // ← Número
  label: "Clientes Atendidos"  // ← Descrição
}
```

---

### `about.ts`
**Seção "Sobre Nós"**

Contém:
- Título e subtítulo da seção
- Parágrafos sobre o escritório (array de textos)
- Valores do escritório (Compromisso, Excelência, Confiança)

---

### `differentials.ts`
**Diferenciais do escritório**

Liste os diferenciais com título e descrição:
```typescript
{
  title: "Sigilo Profissional",
  description: "Garantimos total confidencialidade..."
}
```

---

### `practice-areas.ts`
**Áreas de atuação**

Para cada área de atuação você pode editar:
- Título da área
- Descrição detalhada dos serviços

Exemplo:
```typescript
{
  title: "Direito Empresarial",
  description: "Assessoria jurídica completa para empresas..."
}
```

---

### `team.ts`
**Informações da equipe**

Edite:
- Nome da advogada
- Cargo/função
- OAB
- Biografia (array de parágrafos)
- Lista de especializações

---

### `process.ts`
**Como trabalhamos (processo de atendimento)**

4 etapas do processo:
```typescript
{
  number: "01",
  title: "Consulta Inicial",
  description: "Entre em contato conosco..."
}
```

---

### `testimonials.ts`
**Depoimentos de clientes**

Adicione ou edite depoimentos:
```typescript
{
  name: "Maria Silva",
  role: "Cliente - Direito de Família",
  content: "Excelente atendimento!...",
  rating: 5  // Número de estrelas (1-5)
}
```

---

### `faq.ts`
**Perguntas frequentes**

Lista de perguntas e respostas:
```typescript
{
  question: "Como funciona a primeira consulta?",
  answer: "A primeira consulta pode ser agendada..."
}
```

---

### `blog.ts`
**Artigos do blog**

Para cada artigo:
```typescript
{
  title: "Título do artigo",
  excerpt: "Resumo do artigo...",
  date: "15 de Janeiro, 2025",
  category: "Direito Trabalhista"
}
```

---

### `contact.ts`
**Formulário e informações de contato**

Edite:
- Títulos e descrições da seção
- Labels dos campos do formulário
- Placeholders (textos de exemplo nos campos)
- Texto do botão
- Mensagem de sucesso

---

### `footer.ts`
**Rodapé do site**

Edite:
- Descrição do escritório
- Links rápidos
- Títulos das seções
- Texto de copyright

---

## 🎯 Como Usar

1. **Abra o arquivo** que contém o texto que você quer editar
2. **Localize o texto** que deseja alterar
3. **Edite o texto** mantendo as aspas `"texto aqui"`
4. **Salve o arquivo**
5. O site será atualizado automaticamente!

## ⚠️ Dicas Importantes

- **NÃO remova** as vírgulas, chaves `{}` ou colchetes `[]`
- **NÃO altere** os nomes das propriedades (ex: `title`, `description`)
- **MANTENHA** as aspas ao redor dos textos
- Se quiser adicionar uma quebra de linha em um texto longo, divida em múltiplos parágrafos no array

## 📝 Exemplo Prático

**Antes:**
```typescript
title: "Nossos Diferenciais"
```

**Depois:**
```typescript
title: "Nossos Principais Diferenciais"
```

---

## 🆘 Precisa de Ajuda?

Se algo der errado:
1. Verifique se não removeu nenhuma vírgula ou aspas acidentalmente
2. Compare com o formato original
3. Use o controle de versão (git) para reverter mudanças se necessário

**Lembre-se:** Você está apenas editando TEXTOS. Não precisa mexer em código!
