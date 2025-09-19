// 2025-09-19
// active/completed assertion filtering

describe(('Active/Completed 필터 동작 검증', () => {
    it('수행하지 않은 작업은 Active에서 보여야 한다', () => {
        cy.visit('https://todomvc.com/examples/react/dist/#/')
        cy.get('#todo-input.new-todo')
            .type('잠자기{enter}')

        cy.get('[data-testid="footer-navigation"]')
            .contains('a', 'Active')
            .click()

        // URL 해시 보강 (선택)
        cy.location('hash').should('eq', '#/active')

        cy.contains('li', '잠자기').should('be.visible')

        // 선택된 탭 어설션 타켓은 <a>
        cy.get('[data-testid="footer-navigation"]')
            .conatins('a', 'Active')
            .should('have.class', 'selected')

        cy.get('li.completed').should('not.exist')
        cy.conatins('.todo-count', '1 item left!').should('be.visible')
    })
}))

/* 나의 틀린 코드....
describe(('Active/Completed 필터 동작 검증'), () => {
    it('수행하지 않은 작업은 Active 에서 보여야 한다', () => {
        cy.visit('https://todomvc.com/examples/react/dist/#/')
        cy.get('#todo-input.new-todo')
          .type('잠자기{enter}')

        cy.contains('[data-testid="footer-navigation"]', 'Active')
          .click()
        cy.contains('li', '잠자기').should('be.visible')
        
        cy.contains('li', 'Active').should('have.class', 'selected')
        cy.contains('1 item left!').should('be.visible')
    })
})
*/