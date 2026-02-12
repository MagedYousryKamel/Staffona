from playwright.sync_api import sync_playwright

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        
        # Helper to toggle theme
        def toggle_theme():
            page.evaluate("document.documentElement.classList.toggle('dark')")
            page.wait_for_timeout(500)

        # Home Dark
        page.goto("http://localhost:5173/")
        toggle_theme()
        page.screenshot(path="home_dark_v2.png")
        
        # Why Us Dark
        page.goto("http://localhost:5173/why-us")
        toggle_theme()
        page.screenshot(path="why_us_dark_v2.png")
        
        browser.close()

if __name__ == "__main__":
    verify()
