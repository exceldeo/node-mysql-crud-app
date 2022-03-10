/// <reference types="cypress" />
const baseURL = 'http://localhost:9000/'

context('Actions', () => {
  beforeEach(() => {
    cy.visit(baseURL)
  })

  // https://on.cypress.io/interacting-with-elements

  it('.add player', () => {
    // https://on.cypress.io/type
    // cy.get('.action-email')
    //   .type('fake@email.com').should('have.value', 'fake@email.com')
      for (let index = 0; index < 10; index++) {
        cy.get('.float-right').click();
        cy.url().should('contains', `${baseURL}player/add`);
        cy.get('#first-name').type('excel').should('have.value', 'excel');
        cy.get('#last-name').type('deo').should('have.value', 'deo');
        cy.get('#username').type(`deo${index}`).should('have.value', `deo${index}`);
        cy.get('#number').type('2').should('have.value', '2');
        cy.get('#position').select('Goalkeeper');
        cy.get('#position').type('Goalkeeper').should('have.value', 'Goalkeeper');
        
        const filepath = 'files/gambar1.jpg'
        cy.get('#player-img').attachFile(filepath)
        cy.get('#btnSubmit').click()
        
      }
      
      // cy.get('#player-img').click();
      // cy.get('#player-img').type('C:\fakepath\screencapture-man1kotasemarang-sch-id-ppdb-pusat-admin-validasi-psub-23-edit-2022-03-04-14_32_33.png');
      // cy.get('.btn').click();
      
      
    })
    
    it('.edit player', () => {
      cy.get('tbody').find('td > a').each(($el, $index, $list) => {
        if($index % 2 != 0){
          return;
        }
        const link = $el.attr('href');
        console.log(`link : ${link} ${$index}`);

        cy.visit(`${baseURL}${link}`);

        cy.url().should('contains', `${baseURL}${link}`);

        cy.get('#first-name').clear();
        cy.get('#first-name').type('excelexcel').should('have.value', 'excelexcel');
        cy.get('#last-name').clear();
        cy.get('#last-name').type('deodeo').should('have.value', 'deodeo');
        
        cy.get('#btnSubmit').click()
    })
      
  })

  it('.delete player', () => {
    cy.get('tbody').find('td > a').each(($el, $index, $list) => {
      if($index % 2 == 0){
        return;
      }
      const link = $el.attr('href');

      cy.visit(`${baseURL}${link}`);
  })
    
})
})
