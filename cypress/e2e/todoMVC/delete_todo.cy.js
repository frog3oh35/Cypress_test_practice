// 2025-09-17

describe('TodoMVC 기본 동작 : Todo 삭제', () => {
  // force: true 버전
  it('할 일을 삭제하면 목록에서 사라진다 - force: true 버전', () => {
    cy.visit('https://todomvc.com/examples/react/dist/#/')
    cy.get('#todo-input.new-todo')
      .type('공부하기{enter}')

    cy.contains('.todo-list li label', '공부하기').should('be.visible')

    // 삭제 버튼 클릭 (force)
    cy.contains('li', '공부하기')
      .find('[data-testid="todo-item-button"]')
      .click({ force: true })

    cy.contains('.todo-list li label', '공부하기').should('not.exist')
    cy.contains('0 item left!').should('be.visible')
  })

  // hover 버전
  it('할 일을 삭제하면 목록에서 사라진다 - hover 버전', () => {
    cy.visit('https://todomvc.com/examples/react/dist/#/')
    cy.get('#todo-input.new-todo')
      .type('공부하기{enter}')

    // 추가 확인
    cy.contains('.todo-list li label', '공부하기').should('be.visible')

    // get 보다는 contains! get을 이용하면 무조건 첫 번째 li만 집는다.
    cy.contains('li', '공부하기').trigger('mouseover')
    cy.get('.destroy').click()

    // 삭제 및 카운터 확인
    cy.contains('.todo-list li label', '공부하기').should('not.exist')
    cy.contains('0 item left!').should('be.visible')
  })

  /* 나의 오답 코드 - force : true 버전
  it('할 일을 삭제하면 목록에서 사라진다 - force: true 버전', () => {
    cy.visit('https://todomvc.com/examples/react/dist/#/')
    cy.get('#todo-input.new-todo')
      .type('공부하기{enter}')

    cy.contains('.todo-list li label', '공부하기').should('be.visible')

    cy.get('[data-testid="todo-item-button"]').click({ force: true })
    cy.contains('.todo-list li label', '공부하기').should('not.be.visible')

    // 카운터 체크
    cy.contains('0 item left').should('be.visible')
    // class 사용하면 cy.get('.destroy').click()
    // 위는 testid를 사용한 것
    */

})