Describe ('OrangeHRM Login Test', () => {    
BeforeEach(()=> {})  
Cy.visit ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 
it ('should log in with valid credentials', () => {// Enter username
    cy.get('input[name="username"]').type('Admin');
