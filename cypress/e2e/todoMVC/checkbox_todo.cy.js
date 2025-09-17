// 2025-09-18

describe(('TodoMVC 기본 동작 : Todo 완료'), () => {
    it('할 일 목륵의 체크박스를 선택하면 할 일이 완료된다', () => {
        cy.visit('https://todomvc.com/examples/react/dist/#/')
        cy.get('#todo-input.new-todo')
            .type('공부하기{enter}')

        cy.contains('.todo-list li label', '공부하기').should('be.visible')

        cy.contains('li', '공부하기')
            .find('[data-testid="todo-item-toggle"]')
            .click()

        cy.contains('li', '공부하기').should('have.class', 'completed')

        cy.contains('0 items left!').should('be.visible')
    })
})