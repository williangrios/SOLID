# São 5 principios da programação que foram reunidos para nos ajudar a manter um código limpo, flexível e fácil de ser mantindo

# Single responsibility principle: uma classe deve ter apenas um motivo para mudar (evite conjunções aditivas: e, bem como, também..) Este princípio está intimamente ligado a outro, conhecido por Separation of concerns

# Open/Close principle: módulos, classes e objetos devem estar abertos para extensão, mas fechados para modificações

# Liskov substitution principle: Se x é uma propriedade demonstrável dos objetos x de tipo T. então Y deve ser verdadeiro para objetos Y de tipo S onde S é um subtipo de T. (Subtipos devem ser substituíveis por seus tipos de base). ou seja, Subtipos precisam ser substituíveis por seus tipos de base. Ou seja, sempre que eu precisar checar se um atributo existe, se um metodo existe, o retorno de um método, provavelmente estarei quebrando o LSP (ex typeof x === ``). ou seja, o comportamento e os atributos devem estar de acordo com a base class

# Interface segregation principle: os clientes não devem ser forçados a depender de types, interfaces ou membros abstratos que não utilizam

# Dependency inversion principle: modulos de alto nivel não devem depender de módulos de baixo nível. ambos devem depender de abstrações. detalhes devem depender das abstrações, não o inverso


lodash
validator
webpack
webpack-cli
