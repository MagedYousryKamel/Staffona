from playwright.sync_api import sync_playwright

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        
        # Helper to toggle theme
        def toggle_theme():
            page.evaluate("document.documentElement.classList.toggle('dark')")
            page.wait_for_timeout(500)

        pages = ["/", "/about", "/services", "/why-us", "/contact"]
        
        for path in pages:
            page.goto(f"http://localhost:5173{path}")
            # Take light mode
            name = path.replace("/", "") or "home"
            page.screenshot(path=f"final_{name}_light.png")
            # Take dark mode
            toggle_theme()
            page.screenshot(path=f"final_{name}_dark.png")
        
        browser.close()

if __name__ == "__main__":
    verify()
