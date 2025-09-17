// 2025-09-16

describe('TodoMVC 기본 동작', () => {
    it('Todo 추가: 할 일을 추가하면 목록에 보인다'), () => {
        cy.visit('https://todomvc.com/examples/react/dist/#/')
        cy.get('#todo-input.new-todo')
            .type('공부하기{enter}')

        cy.get('.todo-list li').should('have.length.at.least', 1)
        cy.contains('.todo-list li label', '공부하기').should('be.visible')

        // 옵션) 카운터 체크
        cy.contains('1 item left').should('be.visible')
    }
    /* 나의 오답 코드...
    it('Todo 추가: 할 일을 추가하면 목록에 보인다', () => {
        cy.visit('URL')
        cy.get('#todo-input.new-todo').click()
        cy.contains('공부하기').type({ enter })

        cy.get('#todo-item-label').should('exist')
        cy.get('#todo-item-label').should('공부하기')
    })
    */
})