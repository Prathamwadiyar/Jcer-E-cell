export const blogCategories = [
  'All',
  'Startup Guides',
  'Tech & Innovation',
  'Success Stories',
  'Campus Updates',
  'Finance & Funding'
];

export const blogData = [
  {
    id: 1,
    category: 'Startup Guides',
    title: 'From Dorm Room Idea to Working Prototype: A Practical Guide for JCER Students',
    excerpt: 'Skip the 50-page business plans. Here is a realistic step-by-step roadmap to building your first working prototype without getting bogged down.',
    content: `When most college students come up with a startup idea, their first instinct is to open a blank document and write a massive business plan. Two weeks later, the document is forgotten, and the idea dies in a folder on their laptop.

If you want to build something real while studying at JCER, you need to flip the process. You don't need a formal business plan in week one. You need a working prototype that someone can actually touch, test, and give you honest feedback on.

### 1. Define the Single Core Problem
Every great tool solves one specific problem exceptionally well. When Uber launched, it didn't have split fares, scheduled rides, or food delivery. It just pressed a button to get a car.

Look at your idea. Strip away every feature that isn't strictly necessary. If you are building a campus food delivery app, your prototype only needs to let a student select an item and send an order notification to the canteen vendor. You don't need user profiles, review systems, or custom recommendation engines on day one.

### 2. Choose the Fastest Build Method
You don't always need to code everything from scratch.
- **For Web Platforms:** Use React, Vite, or Next.js combined with Tailwind CSS. They give you high-performance UI out of the box.
- **For Web Apps & Backend:** Use tools like Supabase for quick database setups or Firebase for instant authentication.
- **For Rapid Mockups:** Build interactive prototypes in Figma or Framer. Sometimes showing a user a high-fidelity clickable prototype gives you 90% of the validation you need before writing a single line of backend logic.

### 3. The 10-User Rule
Once your prototype is live, don't post it on social media right away. Take your laptop or phone to 10 fellow students in the college canteen or library. Sit next to them, open the app, and watch them use it without giving them instructions.

Where do they get confused? Which buttons do they fail to notice? That real-world observation is worth more than ten incubators telling you your idea sounds nice.

Building a startup is an iterative loop: build, test, learn, and repeat.`,
    author: 'E-Cell Tech Team',
    date: 'July 24, 2026',
    readTime: '5 min read'
  },
  {
    id: 2,
    category: 'Tech & Innovation',
    title: 'How Student Developers Can Leverage Open-Source AI Without Huge Cloud Bills',
    excerpt: 'Building AI-powered applications does not require thousands of dollars in cloud computing. Here is how to use local LLMs and free-tier APIs effectively.',
    content: `Artificial intelligence is transforming every sector, but for student developers, the biggest hurdle is usually cost. Running commercial API calls or hosting GPU instances on cloud providers can quickly drain your wallet.

The good news is that the open-source AI landscape has evolved rapidly over the past year. You can now build, test, and deploy intelligent applications entirely within a student budget.

### Local LLMs for Development
Before spending money on cloud endpoints, run open-source models directly on your machine during development.

Tools like Ollama and LM Studio allow you to run models like Llama 3, Phi-3, or Mistral locally with a single terminal command. This gives you unlimited query iterations without spending a single rupee while building your application's logic.

### Free Tier APIs and Infrastructure
When you are ready to host your project online:
- **Groq & Together AI:** Provide fast inference APIs with generous free usage tiers for open-source models.
- **Vercel & Render:** Offer free deployment environments ideal for frontend web apps and microservices.
- **Supabase Vector:** Provides vector storage for building Retrieval-Augmented Generation (RAG) applications directly inside PostgreSQL.

### Build What Matters
Don't build another generic chatbot wrapper. Focus on domain-specific challenges—like local language translation for regional businesses, automated schedule generators for engineering courses, or smart inventory tracking for local retailers in Belagavi. The tech is just an enabler; the value comes from solving real friction.`,
    author: 'AI/ML Domain Lead',
    date: 'July 20, 2026',
    readTime: '6 min read'
  },
  {
    id: 3,
    category: 'Startup Guides',
    title: 'How to Pitch Your Student Startup: What Judges and Mentors Actually Look For',
    excerpt: 'Ditch the buzzwords. Learn how to structure a compelling 5-minute presentation that clearly communicates your vision and business logic.',
    content: `If you attend startup competitions or pitch sessions, you'll notice a common pattern. Many teams spend four out of their five allotted minutes explaining complex technical architecture, leaving only thirty seconds for the actual business opportunity.

Judges and investors aren't just evaluating your code—they are evaluating whether your venture can survive in the market.

### The 5-Minute Pitch Structure

**1. The Hook and Problem (60 Seconds)**
Start with a relatable scenario. State the exact problem, who feels the pain, and how severe it is. Avoid generic statements like "Market research is hard." Instead, use concrete examples: "Engineering students spend an average of 4 hours every week manually formatting lab reports."

**2. The Solution & Live Demo (90 Seconds)**
Show your product in action. A crisp 30-second live demonstration or video clip beats ten slides of explanation every single time. Highlight the key benefit: how does your solution save time, lower costs, or eliminate hassle?

**3. Market & Business Logic (90 Seconds)**
Explain who your target customer is and how you intend to make money. Are you charging a monthly subscription, a per-transaction fee, or a freemium tier? Be realistic about your unit economics.

**4. Traction and Team (60 Seconds)**
Share what you have accomplished so far. Even if you don't have revenue yet, highlight survey responses, waitlist signups, pilot testing feedback, or prototype usage numbers. Introduce your co-founders and highlight why your team has the right mix of technical and operational skills.

Keep your slides clean, limit text to key points, and speak with clarity. The goal of a pitch isn't to tell everything about your startup; it's to make the audience want to ask more questions.`,
    author: 'Mentorship Lead',
    date: 'July 15, 2026',
    readTime: '4 min read'
  },
  {
    id: 4,
    category: 'Success Stories',
    title: 'Balancing Engineering Academics and Founding a Startup: Real Talk',
    excerpt: 'Managing lab submissions, semester exams, and customer calls isn’t easy. Here is how active student founders structure their time without burning out.',
    content: `One of the most frequent questions students ask us at E-Cell JCER is: "How do I start a venture when I already have 85% attendance criteria, daily lectures, and lab submissions?"

It is a valid concern. College engineering schedules are demanding, and trying to run a business on the side can easily lead to burnout if you don't manage your priorities.

### 1. Treat Your Startup Like a Scheduled Course
If you only work on your venture "when you find free time," it will never happen. Successful student founders block out 90 minutes of dedicated deep work every single day—whether that's early in the morning before lectures or in the evening. Protect that time block fiercely.

### 2. Leverage Campus Resources
You are surrounded by advantages that full-time entrepreneurs have to pay thousands for:
- Free high-speed internet and quiet workspaces on campus.
- Direct access to professors and domain experts across departments for technical guidance.
- A captive audience of fellow students for immediate product testing and feedback.

### 3. Build a Complementary Team
Don't co-found a company with three people who have the exact same skill set. If you are a strong backend developer, partner with someone who excels at UI/UX design or public speaking and outreach. Divide responsibilities clearly so no single team member carries the entire load.

Remember that college is the safest time to experiment. The worst-case scenario isn't failure—it's gaining practical skills in software engineering, communication, and leadership that will set you apart for the rest of your career.`,
    author: 'Alumni Relations',
    date: 'July 10, 2026',
    readTime: '5 min read'
  },
  {
    id: 5,
    category: 'Campus Updates',
    title: 'E-Cell JCER Roadmap: What We Are Building for Student Innovators This Year',
    excerpt: 'An inside look at our upcoming bootcamps, founder talks, incubation pipelines, and collaborative spaces for the campus community.',
    content: `The Entrepreneurship Cell at JCER was founded with a single clear purpose: to bridge the gap between academic theory and practical venture creation. 

As we embark on this academic year, here is an inside look at what we are rolling out for students across all departments.

### Hands-on Skill Bootcamps
We are hosting targeted workshops focused on real-world implementation. Rather than high-level lectures, these sessions will guide you through:
- Designing clean user interfaces in Figma.
- Building full-stack web applications using modern Javascript frameworks.
- Preparing pitch decks and financial modeling basics for grant applications.

### Speaker Sessions & Founder Roundtables
We are inviting regional entrepreneurs, alumni founders, and industry practitioners to share their candid experiences—including the early mistakes, funding challenges, and strategic decisions that shaped their companies.

### Direct Access to Incubation & Mentorship
Through our network, students with validated prototypes will get direct assistance with incubator applications, intellectual property filings, and grant opportunities.

Whether you have a fully formed startup idea or simply want to learn how modern tech products are built, E-Cell JCER is your platform to connect, collaborate, and create.`,
    author: 'Overall Coordinators',
    date: 'July 05, 2026',
    readTime: '4 min read'
  },
  {
    id: 6,
    category: 'Finance & Funding',
    title: 'Understanding Seed Funding vs. Bootstrapping: A Founder’s Guide',
    excerpt: 'Should you raise capital or fund your venture through revenue? Here is a breakdown of funding stages for early-stage student founders.',
    content: `In the startup world, raising millions in venture capital often gets all the headlines. But raising money is not a metric of success—it is simply a means to fuel growth.

For early-stage student founders, understanding the difference between bootstrapping and external funding is essential before taking any major decisions.

### What is Bootstrapping?
Bootstrapping means self-funding your business using your own savings, initial sales revenue, or small personal contributions. 
- **Pros:** You retain 100% ownership and complete creative control over your company. You are forced to be disciplined and focus on making money from day one.
- **Cons:** Growth may be slower because your budget depends strictly on incoming cash flow.

### Early Funding Stages Explained
- **Grant Funding & College Competitions:** Non-dilutive capital awarded through government schemes, university innovation challenges, and hackathons. You don't give away equity.
- **Pre-Seed / Angel Round:** Initial capital provided by individual angel investors or early-stage funds in exchange for equity, usually to help you complete product development and early hiring.
- **Seed Round:** Capital raised once you have demonstrated product-market fit and need to scale marketing, sales, and operations.

### Which Path Should You Choose?
In the beginning, focus on bootstrapping your prototype and securing non-dilutive competition grants. Don't worry about venture capital until you have proof that real users need and want your product.`,
    author: 'Finance & Strategy Lead',
    date: 'June 28, 2026',
    readTime: '6 min read'
  }
];
