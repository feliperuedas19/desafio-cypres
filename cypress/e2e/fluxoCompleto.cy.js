import Login from '../support/pages/Login'
import Carrinho from '../support/pages/Carrinho'
import Produtos from '../support/pages/Produtos'
import Checkout from '../support/pages/Checkout'

describe('Validação do fluxo completo de compra', () => {
  //atributos

  beforeEach(() => {
    cy.visit('/')
  })

  it('Realizar login com usuário válido', () => {
    Login.preencherLoginValido()
  })

  it('Realizar login com senha inválida', () => {
    Login.preencherLoginSenhaInvalida()
  })

  it('Realizar login com usuário bloqueado', () => {
    Login.preencherLoginUsuarioBloqueado()
  })

  it('Validação da lista de produtos', () => {
    Login.preencherLoginValido()
    Produtos.verificarListaProdutos()
  })

  it('Validação do carrinho', () => {
    Login.preencherLoginValido()
    Carrinho.adicionarItem() 
    Carrinho.removerItem()

    cy.visit('/')

    Login.preencherLoginValido()
    Carrinho.adicionarItens()
    Carrinho.removerItens()

  })

  it('Validação da página do carrinho', () => {
    Login.preencherLoginValido()
    Carrinho.adicionarItem() 
  })

  it('Validação da página de checkout', () => {
    Login.preencherLoginValido()
    Carrinho.adicionarItens()
    Checkout.finalizarCompra()
  })
})