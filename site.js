/* ─── Data ─── */

const AGENTS = [
  {
    id: 'test-scenario-explorer',
    name: 'Test Scenario Explorer',
    level: 'L1',
    levelLabel: 'Solo',
    tagline: 'Turn any feature description into a rich set of test scenarios.',
    whatYouCanDo: 'Paste a user story, acceptance criteria, or feature name and get back a structured list of test scenarios — happy paths, edge cases, error conditions, and boundary values — ready to review and refine.',
    whyYouWantTo: 'Writing test scenarios from scratch is slow, and humans naturally miss edge cases. This agent gives you a solid starting set in under a minute. You spend your time improving coverage, not inventing it.',
    practiceChallenge: 'Open any user story you\'re working on right now. Before running the agent, write down the test scenarios you\'d expect it to find. Then run it. Compare. What did the agent catch that you missed — and what did you catch that it missed?',
    combinesWith: [
      {
        id: 'test-code-generator',
        name: 'Test Code Generator',
        outcome: 'Explore scenarios first, then generate code for each one. A full test-design session without leaving your tool.'
      },
      {
        id: 'coverage-gap-advisor',
        name: 'Coverage Gap Advisor',
        outcome: 'Use your generated scenarios to validate that the gaps the advisor found are actually addressed — not just counted.'
      }
    ],
    copilot: [
      {
        title: 'Open GitHub Copilot Chat',
        body: 'Press <kbd>Ctrl+Shift+I</kbd> (Windows/Linux) or <kbd>Cmd+Shift+I</kbd> (Mac) in VS Code to open the Chat panel.'
      },
      {
        title: 'Submit your feature description',
        body: 'Type: <code>Generate test scenarios for this feature: [paste your user story or acceptance criteria]</code>. Add <code>@workspace</code> if the feature lives in your codebase.'
      },
      {
        title: 'Expand the output',
        body: 'Follow up: <em>"Add boundary value scenarios for the input fields"</em> or <em>"What negative test cases did you miss?"</em>'
      }
    ],
    claudeCode: [
      {
        title: 'Open Claude Code',
        body: 'Run <code>claude</code> in your terminal from the project root. Or use <code>claude "your prompt"</code> for a one-shot command.'
      },
      {
        title: 'Describe the feature with context',
        body: 'Type: <em>"Generate test scenarios for the checkout feature. Read src/checkout/README.md for context."</em> Claude Code reads the file automatically.'
      },
      {
        title: 'Ask for prioritization',
        body: 'Follow up: <em>"Which of these scenarios are highest risk for regression?"</em> or <em>"Group these by test type: functional, boundary, error handling."</em>'
      }
    ]
  },
  {
    id: 'bug-report-enhancer',
    name: 'Bug Report Enhancer',
    level: 'L1',
    levelLabel: 'Solo',
    tagline: 'Transform vague bug reports into structured, actionable tickets.',
    whatYouCanDo: 'Paste any bug description — however rough — and get back a structured report with clear reproduction steps, expected vs. actual behavior, environment details, and a severity suggestion.',
    whyYouWantTo: 'Vague bug reports waste developer time and sit in queues for days. A well-structured report gets resolved faster, cuts back-and-forth, and shows reporters what "good" looks like without a training session.',
    practiceChallenge: 'Find the worst bug report in your current backlog — the one you\'d hate to be assigned. Run it through this agent. Then ask yourself: would you still need to go back to the reporter with questions? What\'s still missing?',
    combinesWith: [
      {
        id: 'test-code-generator',
        name: 'Test Code Generator',
        outcome: 'Turn the reproduction steps from an enhanced report directly into an automated regression test — so the bug can never come back silently.'
      },
      {
        id: 'change-risk-analyzer',
        name: 'Change Risk Analyzer',
        outcome: 'Once the report is clear, analyze the risk scope of the fix — what else might break when this is addressed.'
      }
    ],
    copilot: [
      {
        title: 'Paste the raw bug text',
        body: 'Open GitHub Copilot Chat and paste the messy bug description directly into the prompt.'
      },
      {
        title: 'Ask for restructuring',
        body: 'Type: <code>Rewrite this as a structured bug report with: summary, steps to reproduce, expected behavior, actual behavior, environment, and severity.</code>'
      },
      {
        title: 'Add codebase context',
        body: 'Use <code>@workspace</code> to connect: <em>"Use @workspace to suggest which component is most likely responsible."</em>'
      }
    ],
    claudeCode: [
      {
        title: 'Paste and request',
        body: 'Run <code>claude</code> and type: <em>"Here\'s a bug report. Restructure it with reproduction steps, expected vs actual, and a severity estimate: [paste report]"</em>'
      },
      {
        title: 'Connect to the codebase',
        body: 'Add: <em>"Look at src/payments/ to suggest which component is most likely affected."</em> Claude Code reads the files.'
      },
      {
        title: 'Generate follow-up questions',
        body: 'Ask: <em>"What information is missing? Give me 3 questions to ask the reporter."</em>'
      }
    ]
  },
  {
    id: 'test-code-generator',
    name: 'Test Code Generator',
    level: 'L2',
    levelLabel: 'Combo',
    tagline: 'Go from function signature to working test code in seconds.',
    whatYouCanDo: 'Point it at a function, class, or API endpoint and get back test code — with setup, teardown, happy path assertions, edge cases, and error handling — in your test framework of choice.',
    whyYouWantTo: 'Writing test boilerplate is tedious. Generated tests let you skip the scaffolding and focus on reviewing and refining. You get more coverage faster, with less friction to starting.',
    practiceChallenge: 'Pick a function in your current project that has no tests. Ask the agent to write them. Don\'t accept the first output — ask for one specific improvement. Then another. Notice how the output changes when you direct it precisely.',
    combinesWith: [
      {
        id: 'test-scenario-explorer',
        name: 'Test Scenario Explorer',
        outcome: 'Design the scenarios first, then generate the code. Two moves in sequence: the output of the first becomes the input of the second.'
      },
      {
        id: 'test-data-architect',
        name: 'Test Data Architect',
        outcome: 'Generate the data sets first, then generate test code that uses them — tests grounded in realistic data from the start.'
      }
    ],
    copilot: [
      {
        title: 'Select the code to test',
        body: 'In VS Code, select the function or class you want tests for. Press <kbd>Ctrl+I</kbd> / <kbd>Cmd+I</kbd> to open inline chat.'
      },
      {
        title: 'Request the tests',
        body: 'Type: <code>Write unit tests for this function using [pytest / Jest / JUnit]. Include happy path, edge cases, and error handling.</code>'
      },
      {
        title: 'Iterate on coverage',
        body: 'In Copilot Chat: <em>"What test cases did you skip? Add tests for null inputs and concurrent access."</em>'
      }
    ],
    claudeCode: [
      {
        title: 'Point at the source file',
        body: 'Run: <code>claude "Write pytest tests for all public methods in src/auth/user_service.py. Create tests/test_user_service.py."</code>'
      },
      {
        title: 'Specify framework and style',
        body: 'Add context: <em>"Use fixtures for database setup. Follow the existing style in tests/test_order_service.py."</em>'
      },
      {
        title: 'Review and run',
        body: 'Claude Code creates the file. Run your test suite and ask: <em>"Two tests are failing. Fix them."</em>'
      }
    ]
  },
  {
    id: 'coverage-gap-advisor',
    name: 'Coverage Gap Advisor',
    level: 'L2',
    levelLabel: 'Combo',
    tagline: 'Find what\'s not tested — and which gaps matter most.',
    whatYouCanDo: 'Analyze your source code and test files together to identify functions, branches, and paths with no test coverage, ranked by risk so you know where to start.',
    whyYouWantTo: 'Coverage tools give you a number. This agent tells you what that number means for your product — which uncovered paths are in business-critical flows versus internal utilities you can safely defer.',
    practiceChallenge: 'Before running this agent on your project, predict which module will have the worst coverage. Were you right? What does the gap between your prediction and the result tell you about where your team\'s attention naturally goes?',
    combinesWith: [
      {
        id: 'test-code-generator',
        name: 'Test Code Generator',
        outcome: 'Find the gaps, then immediately close them. Gap Advisor tells you what to write; Code Generator writes it.'
      },
      {
        id: 'change-risk-analyzer',
        name: 'Change Risk Analyzer',
        outcome: 'Combine gap analysis with change risk: focus coverage effort on the areas that are both uncovered and about to change.'
      }
    ],
    copilot: [
      {
        title: 'Ask about your codebase',
        body: 'In Copilot Chat: <code>@workspace Which functions in src/ have no corresponding tests? List them by directory.</code>'
      },
      {
        title: 'Get risk-ranked results',
        body: 'Follow up: <em>"Of these uncovered functions, which handle the most critical business logic?"</em>'
      },
      {
        title: 'Generate a test plan',
        body: 'Ask: <em>"Give me a prioritized test plan for the top 5 coverage gaps, with one-line descriptions of what to test."</em>'
      }
    ],
    claudeCode: [
      {
        title: 'Request a gap analysis',
        body: 'Run: <code>claude "Analyze src/ and tests/. List all functions in src/ with no test coverage. Group by module."</code>'
      },
      {
        title: 'Add risk ranking',
        body: 'Follow up: <em>"Rank the top 5 gaps by potential impact — consider functions that touch external systems, handle money, or manage user data."</em>'
      },
      {
        title: 'Get concrete next steps',
        body: 'Ask: <em>"Write stubs for the top 3 missing test files so I can fill them in."</em>'
      }
    ]
  },
  {
    id: 'change-risk-analyzer',
    name: 'Change Risk Analyzer',
    level: 'L3',
    levelLabel: 'Chain',
    tagline: 'Know what to test before you merge.',
    whatYouCanDo: 'Feed it a pull request diff, commit summary, or list of changed files. Get back which existing tests to run, what new tests to write, and what might unexpectedly break.',
    whyYouWantTo: 'Not all changes carry equal risk. Testing everything is slow; testing nothing is reckless. This agent focuses your effort on what matters for this specific change — reducing both over-testing and under-testing.',
    practiceChallenge: 'Take your last merged pull request and run it through this agent. Did it identify risks you didn\'t explicitly test for? Did any of those risks cause issues after the merge? The answer tells you what the agent can see that you currently can\'t.',
    combinesWith: [
      {
        id: 'coverage-gap-advisor',
        name: 'Coverage Gap Advisor',
        outcome: 'Risk-informed gap analysis: find the uncovered areas specifically in the parts of the code that are changing.'
      },
      {
        id: 'test-code-generator',
        name: 'Test Code Generator',
        outcome: 'Risk-guided test generation: use the risk analysis to direct the code generator exactly where new tests are needed most.'
      }
    ],
    copilot: [
      {
        title: 'Describe your change',
        body: 'In Copilot Chat: <code>@workspace I changed src/auth/session.py and src/middleware/rate_limiter.py. What tests should I run or write before merging?</code>'
      },
      {
        title: 'Get a risk breakdown',
        body: 'Ask: <em>"What are the three highest-risk failure modes introduced by these changes?"</em>'
      },
      {
        title: 'Map to existing tests',
        body: 'Follow up: <em>"Which existing test files are most relevant to validate these changes?"</em>'
      }
    ],
    claudeCode: [
      {
        title: 'Pipe a git diff',
        body: 'Run: <code>git diff main...HEAD | claude "What tests should I run or write for these changes?"</code>'
      },
      {
        title: 'Ask for dependency tracing',
        body: 'Add: <em>"Trace which other modules depend on the changed functions and include them in the risk assessment."</em>'
      },
      {
        title: 'Generate a pre-merge checklist',
        body: 'Ask: <em>"Give me a 5-item pre-merge testing checklist for this PR, ordered by priority."</em>'
      }
    ]
  },
  {
    id: 'test-data-architect',
    name: 'Test Data Architect',
    level: 'L3',
    levelLabel: 'Chain',
    tagline: 'Generate diverse, realistic test data that actually finds bugs.',
    whatYouCanDo: 'Describe your data model, domain constraints, and edge cases. Get back realistic test fixtures, factory functions, or seed data covering normal cases, boundary values, invalid inputs, and domain-specific scenarios.',
    whyYouWantTo: 'Hand-crafted test data is repetitive, homogeneous, and rarely hits boundary conditions. Varied, realistic data finds bugs that happy-path data never reaches — and it encodes your domain knowledge as executable code.',
    practiceChallenge: 'Design test data for a domain you know well — one where you can immediately spot what\'s unrealistic. Run the agent, then audit the output like an expert. What needed correction? That gap between AI output and your domain knowledge is exactly where your judgment adds value.',
    combinesWith: [
      {
        id: 'test-code-generator',
        name: 'Test Code Generator',
        outcome: 'Design the data first, then generate test code that uses it. Tests grounded in realistic data from the very first line.'
      },
      {
        id: 'test-scenario-explorer',
        name: 'Test Scenario Explorer',
        outcome: 'Let the data shape your scenarios. Concrete edge-case values often reveal scenario categories that abstract descriptions miss.'
      }
    ],
    copilot: [
      {
        title: 'Describe your data shape',
        body: 'In Copilot Chat: <code>Generate test data for a user registration form. Include valid users, email edge cases (long, unicode, subdomains), invalid passwords, and duplicate users.</code>'
      },
      {
        title: 'Add domain constraints',
        body: 'Provide business rules: <em>"Usernames must be 3–20 chars, no spaces. Emails must be unique per tenant. Passwords require at least one symbol."</em>'
      },
      {
        title: 'Request a specific format',
        body: 'Specify output: <em>"Return as a pytest fixture file"</em> or <em>"Return as a JSON array"</em> or <em>"Return as a TypeScript factory function."</em>'
      }
    ],
    claudeCode: [
      {
        title: 'Point at your schema',
        body: 'Run: <code>claude "Read src/models/order.py and generate 20 diverse Order test fixtures covering all status values, edge cases for amounts, and invalid state combinations."</code>'
      },
      {
        title: 'Generate and save',
        body: 'Add: <em>"Write the fixtures to tests/fixtures/orders.py in pytest format."</em> Claude Code creates the file directly.'
      },
      {
        title: 'Validate coverage',
        body: 'Ask: <em>"What boundary values or invalid states did you not include? Add 5 more cases covering those."</em>'
      }
    ]
  }
];

const POSTS = [
  {
    id: '01-welcome',
    title: 'Welcome to Test Intelligence Mesh',
    date: '2026-04-02',
    excerpt: 'Why we built this, what "mesh" means, and how to get started — wherever you are in your AI journey.',
    file: 'posts/01-welcome.md'
  },
  {
    id: '02-layered-learning',
    title: 'Skills, Combos, Chains: How the Learning Works',
    date: '2026-04-02',
    excerpt: 'Why we learn AI skills like game mechanics — one move at a time, combining when ready, speeding up when you say so.',
    file: 'posts/02-layered-learning.md'
  }
];

/* ─── Helpers ─── */

function levelClass(level) {
  return 'level-l' + level.toLowerCase().slice(1);
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' });
}

function renderAgentCard(agent) {
  const pairNames = agent.combinesWith.map(c => c.name).join(' &nbsp;&middot;&nbsp; ');
  return `
    <div class="card">
      <span class="level-badge ${levelClass(agent.level)}">${agent.level} &middot; ${agent.levelLabel}</span>
      <div class="card-title">${agent.name}</div>
      <div class="card-desc">${agent.tagline}</div>
      <div class="card-pairs">Pairs with: ${pairNames}</div>
      <a href="agent.html?id=${agent.id}" class="card-link">Use guide &rarr;</a>
    </div>
  `;
}

function renderPostItem(post) {
  return `
    <div class="blog-item">
      <div class="blog-date">${formatDate(post.date)}</div>
      <div>
        <a href="post.html?id=${post.id}" class="blog-title">${post.title}</a>
        <div class="blog-excerpt">${post.excerpt}</div>
      </div>
    </div>
  `;
}

/* ─── Nav active state ─── */

function setActiveNav(page) {
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
}

/* ─── Agent detail page ─── */

function renderAgentDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const agent = AGENTS.find(a => a.id === id);

  if (!agent) {
    document.getElementById('agent-content').innerHTML =
      '<div class="error-box">Agent not found. <a href="agents.html">Back to agents</a></div>';
    return;
  }

  document.title = agent.name + ' — Test Intelligence Mesh';

  document.getElementById('agent-header').innerHTML = `
    <div class="container">
      <div class="breadcrumb">
        <a href="agents.html">Agents</a>
        <span class="breadcrumb-sep">/</span>
        <span>${agent.name}</span>
      </div>
      <span class="level-badge ${levelClass(agent.level)}">${agent.level} &middot; ${agent.levelLabel}</span>
      <h1>${agent.name}</h1>
      <p class="tagline">${agent.tagline}</p>
    </div>
  `;

  const combosHtml = agent.combinesWith.map(combo => `
    <a href="agent.html?id=${combo.id}" class="combo-card">
      <div class="combo-partner">+ ${combo.name}</div>
      <div class="combo-outcome">${combo.outcome}</div>
    </a>
  `).join('');

  document.getElementById('agent-content').innerHTML = `
    <div class="section">
      <div class="container">

        <div class="detail-grid">
          <div class="detail-block">
            <h3>What you can do</h3>
            <p>${agent.whatYouCanDo}</p>
          </div>
          <div class="detail-block">
            <h3>Why you&rsquo;d want to</h3>
            <p>${agent.whyYouWantTo}</p>
          </div>
        </div>

        <div class="practice-box">
          <div class="practice-label">Practice challenge</div>
          <p>${agent.practiceChallenge}</p>
        </div>

        <div class="combos-section">
          <h3 class="combos-heading">Combine with</h3>
          <p class="combos-intro">This skill gets more powerful when paired with others. Once you&rsquo;ve practiced it alone and you&rsquo;re speed-ready, try a combo.</p>
          <div class="combos-grid">
            ${combosHtml}
          </div>
        </div>

        <div class="guide-section" style="margin-top: 3rem;">
          <h2 style="font-size:1.1rem;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:var(--grey-600);margin-bottom:1.5rem;">How to try it</h2>
          <div class="guide-tabs">
            <button class="tab-btn active" onclick="switchTab('copilot', this)">GitHub Copilot</button>
            <button class="tab-btn" onclick="switchTab('claude', this)">Claude Code</button>
          </div>

          <div id="tab-copilot" class="tab-panel active">
            ${agent.copilot.map((step, i) => `
              <div class="instruction-step">
                <div class="step-num">${i + 1}</div>
                <div class="step-content">
                  <strong>${step.title}</strong>
                  <p>${step.body}</p>
                </div>
              </div>
            `).join('')}
          </div>

          <div id="tab-claude" class="tab-panel">
            ${agent.claudeCode.map((step, i) => `
              <div class="instruction-step">
                <div class="step-num">${i + 1}</div>
                <div class="step-content">
                  <strong>${step.title}</strong>
                  <p>${step.body}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="margin-top:3rem;padding-top:2rem;border-top:1px solid var(--grey-200);display:flex;gap:1rem;flex-wrap:wrap;">
          <a href="agents.html" class="btn btn-ghost">&larr; All agents</a>
          ${getAdjacentAgent(agent.id)}
        </div>

      </div>
    </div>
  `;
}

function getAdjacentAgent(currentId) {
  const idx = AGENTS.findIndex(a => a.id === currentId);
  const next = AGENTS[idx + 1];
  if (!next) return '';
  return `<a href="agent.html?id=${next.id}" class="btn btn-outline">Next: ${next.name} &rarr;</a>`;
}

function switchTab(name, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  btn.classList.add('active');
}

/* ─── Blog post page ─── */

async function renderPost() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const post = POSTS.find(p => p.id === id);

  const headerEl = document.getElementById('post-header');
  const contentEl = document.getElementById('post-content');

  if (!post) {
    contentEl.innerHTML = '<div class="error-box">Post not found. <a href="blog.html">Back to blog</a></div>';
    return;
  }

  document.title = post.title + ' — Test Intelligence Mesh';

  headerEl.innerHTML = `
    <div class="container-narrow">
      <div class="breadcrumb">
        <a href="blog.html">Blog</a>
        <span class="breadcrumb-sep">/</span>
        <span>${post.title}</span>
      </div>
      <div class="post-meta">
        <span>${formatDate(post.date)}</span>
      </div>
      <h1>${post.title}</h1>
      <p class="post-excerpt">${post.excerpt}</p>
    </div>
  `;

  contentEl.innerHTML = '<div class="loading">Loading&hellip;</div>';

  try {
    const res = await fetch(post.file);
    if (!res.ok) throw new Error('Not found');
    const md = await res.text();

    if (typeof marked !== 'undefined') {
      contentEl.innerHTML = `<div class="markdown-content">${marked.parse(md)}</div>`;
    } else {
      contentEl.innerHTML = `<div class="markdown-content"><pre style="white-space:pre-wrap;font-family:inherit">${md}</pre></div>`;
    }
  } catch (e) {
    contentEl.innerHTML = `
      <div class="error-box">
        Could not load post. If you&rsquo;re opening this file locally, serve the project with a local server
        (e.g. <code>npx serve .</code> or <code>python3 -m http.server</code>) instead of opening directly in the browser.
      </div>
    `;
  }
}

/* ─── Agents list page ─── */

function renderAgentsList(filter) {
  const container = document.getElementById('agents-grid');
  if (!container) return;
  const filtered = filter ? AGENTS.filter(a => a.level === filter) : AGENTS;
  container.innerHTML = filtered.map(renderAgentCard).join('');
}

function initAgentsFilter() {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active', 'active-red', 'active-purple'));
      const filter = btn.dataset.filter;
      if (filter === 'all') {
        btn.classList.add('active');
        renderAgentsList(null);
      } else if (filter === 'L1') {
        btn.classList.add('active-red');
        renderAgentsList('L1');
      } else if (filter === 'L2') {
        btn.classList.add('active-purple');
        renderAgentsList('L2');
      } else {
        btn.classList.add('active');
        renderAgentsList(filter);
      }
    });
  });
}
