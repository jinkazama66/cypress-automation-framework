
describe('Automation Exercise - Products and Cart', () => {

  it('should open the website, view products, and verify the cart', () => {

    // 1. Open the website
    cy.visit('https://automationexercise.com/');

    // 2. Verify the homepage URL
    cy.url().should('include', 'automationexercise.com');

    // 3. Verify the homepage heading
    cy.get('h1').should('be.visible');

    // 4. Navigate to the Products page
    cy.get('a[href="/products"]').click();

    // 5. Verify the Products page
    cy.url().should('include', '/products');
    cy.get('.features_items').should('be.visible');

    // 6. Add the first product to the cart
    cy.get('.productinfo a.add-to-cart').first().click();

    // 7. Verify the confirmation modal
    cy.get('.modal-content').should('be.visible');

    // 8. Open the cart from the modal
    cy.contains('.modal-content a', 'View Cart').click();

    // 9. Verify the cart page
    cy.url().should('include', '/view_cart');

    // 10. Verify that the first product is in the cart
    cy.get('#product-1').should('be.visible');

  });

});
