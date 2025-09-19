// 2025-09-19

describe('빈 입력 실패 검증', () => {
    it('작업에 빈 값을 입력하면 작업 생성에 실패해야 한다', () => {
        cy.visit('https://todomvc.com/examples/react/dist/#/')
        cy.get('#todo-input.new-todo')
            .type('잠자기{enter}')
        cy.contains('.todo-list li label', '잠자기').should('be.visible')

        // 현재 길이 캡쳐
        cy.get('.todo-list li').its('length').then((beforeLen) => {
            // 완전 빈 입력
            cy.get('#todo-input.new-todo').type('{enter}')
            // 공백 입력
            cy.get('#todo-input.new-todo').type('   {enter}')

            // 리스트 길이 불변
            cy.get('.todo-list li').should('have.length', beforeLen)

            //카운터 숫자도 불변
            const readCount = () =>
                cy.get('.todo-count').invoke('text').then(t => (t.match(/\d+/)||[])[0])

            readCount().then(beforeCount => {
                readConunt().should('eq', beforeCount)
            })

            // 빈 라벨 항목이 없어야 함
            cy.get('.todo-list li label').each($el => {
                expect($el.text().trim()).to.not.equal('')
            })
            cy.contains('.todo-list li label', '잠자기').should('be.visible')
        })
    })
})


/* 나의 부족한 첫 코드...
describe('빈 입력 실패 검증', () => {
    it('작업에 빈 값을 입력하면 작업 생성에 실패해야 한다', () => {
        cy.visit('https://todomvc.com/examples/react/dist/#/')
        cy.get('#todo-input.new-todo')
            .type('잠자기{enter}')

        // 임의 값 하나 만들고 확인
        cy.get('.todo-list li').should('have.length.at.least', 1)
        cy.contains('.todo-list li label', '잠자기').should('be.visible')

        cy.get('#todo-input.new-todo')
            .type(' {enter}')

        cy.get('.todo-list li').should('have.length', 1)
        // 값이 잠자기만 있어야 하니 1 item left 여야 함
        cy.contains('.todo-count', '1 item left!').should('be.visible')

    })
})

*/