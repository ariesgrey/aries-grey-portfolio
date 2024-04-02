describe("Menu", () => {
	context("Navigation", () => {
		// Start each navigation test from home page > menu
		beforeEach(() => {
			cy.visit("/");

			cy.get("#menu-button").click();
		});

		it("should navigate to the About page", () => {
			cy.get('a[href*="about"]').click();

			cy.url().should("include", "/about");

			cy.get("h1").contains("About");
		});

		it("should navigate to the Portfolio page", () => {
			cy.get('a[href*="portfolio"]').click();

			cy.url().should("include", "/portfolio");

			cy.get("h1").contains("Portfolio");
		});

		it("should navigate to the Contact page", () => {
			cy.get('a[href*="contact"]').click();

			cy.url().should("include", "/contact");

			cy.get("h1").contains("Contact");
		});
	});
});
