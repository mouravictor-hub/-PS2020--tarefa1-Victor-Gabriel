function CreateCurso(nome, qtdPeri, cargaHr) {
  this.nome = nome
  this.qtdPeri = qtdPeri
  this.cargaHr = cargaHr
}

function CreateUniver(nome, curso) {
  this.nome = nome
  this.curso = curso
}

function CreatePessoa(nome, idade, ident, curso, univer, republic) {
  this.nome = nome
  this.idade = idade
  this.ident = ident
  this.curso = curso
  this.univer = univer
  this.republic = republic
  this.checarIDs = function (pessoa) {
    if (this.nome === 'André') {
      if (pessoa.idade >= 18) {
        return `${pessoa.nome} pode tomar cerveja.`
      }
      return `${pessoa.nome} vai tomar Coca-Cola.`
    }
    return `${this.nome} não pode executar esta função.`
  }
}

function CreateRepubli(nome, idade, qtdMora) {
  this.nome = nome
  this.idade = idade
  this.qtdMora = qtdMora
}

const republi = new CreateRepubli('Orfanato', 10, 5)
const curso = new CreateCurso('Engenharia da Computação', 10, 3630)
const univer = new CreateUniver('UFOP', curso)
const pedro = new CreatePessoa('Pedro', 20, '001', curso, univer)
const ana = new CreatePessoa('Ana', 17, '002', curso, univer, republi)
const paulo = new CreatePessoa('Paulo', 23, '003')
const armando = new CreatePessoa('Armando', 17, '004', null, null, republi)
const andre = new CreatePessoa('André')

console.log(andre.checarIDs(ana))
console.log(andre.checarIDs(armando))
console.log(andre.checarIDs(pedro))
console.log(andre.checarIDs(paulo))