export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      return htmlResponse(homePage());
    }

    if (url.pathname === "/information") {
      return htmlResponse(informationPage());
    }

    if (url.pathname === "/contact") {
      return htmlResponse(contactPage());
    }

    return new Response("Not Found", { status: 404 });
  },
};

function htmlResponse(content) {
  return new Response(content, {
    headers: { "content-type": "text/html;charset=UTF-8" },
  });
}

function baseLayout(title, content) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <style>
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        background-color: #0f1117;
        color: #e6edf3;
      }

      nav {
        display: flex;
        justify-content: space-between;
        padding: 20px 40px;
        background-color: #161b22;
        border-bottom: 1px solid #30363d;
      }

      nav a {
        color: #e6edf3;
        text-decoration: none;
        margin-right: 20px;
        font-weight: 500;
      }

      nav a:hover {
        color: #58a6ff;
      }

      .container {
        max-width: 900px;
        margin: 80px auto;
        padding: 0 20px;
      }

      h1 {
        font-size: 2.5rem;
        margin-bottom: 20px;
      }

      p {
        line-height: 1.6;
        color: #c9d1d9;
      }

      .button {
        display: inline-block;
        margin: 15px 15px 0 0;
        padding: 12px 20px;
        border-radius: 8px;
        background: #21262d;
        border: 1px solid #30363d;
        color: #e6edf3;
        text-decoration: none;
        transition: all 0.2s ease;
      }

      .button:hover {
        background: #30363d;
        border-color: #58a6ff;
        color: #58a6ff;
      }

      footer {
        text-align: center;
        padding: 40px 20px;
        border-top: 1px solid #30363d;
        margin-top: 80px;
        color: #8b949e;
        font-size: 0.9rem;
      }
    </style>
  </head>
  <body>
    <nav>
      <div><strong>Harrison Chapman</strong></div>
      <div>
        <a href="/">Home</a>
        <a href="/information">Information</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>

    <div class="container">
      ${content}
    </div>

    <footer>
      © ${new Date().getFullYear()} Harrison Chapman — Built on Cloudflare Workers
    </footer>
  </body>
  </html>
  `;
}

function homePage() {
  return baseLayout(
    "Home",
    `
    <h1>Welcome</h1>
    <p>
	  I like robots and programming =)
    </p>

    <a class="button" href="https://github.com/hchap1" target="_blank">
      GitHub
    </a>

    <a class="button" href="https://www.linkedin.com/in/harrison-chapman-2614422ba/" target="_blank">
      LinkedIn
    </a>
    `
  );
}

function informationPage() {
  return baseLayout(
    "Information",
    `
    <h1>Information</h1>
    <p>
		UQ Comsci/Math Student
    </p>

    <p>
		Sections
    </p>

    <ul>
      <li>Projects</li>
      <li>Technical Skills</li>
      <li>Research</li>
      <li>Certifications</li>
    </ul>
    `
  );
}

function contactPage() {
  return baseLayout(
    "Contact",
    `
    <h1>Contact</h1>
    <p>
      You can reach me via:
    </p>

    <a class="button" href="https://github.com/hchap1" target="_blank">
      GitHub
    </a>

    <a class="button" href="https://www.linkedin.com/in/harrison-chapman-2614422ba/" target="_blank">
      LinkedIn
    </a>

    <p style="margin-top:30px; color:#8b949e;">
      Email placeholder: hchap1@hotmail.com
    </p>
    `
  );
}
