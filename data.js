const portfolioData = [
  {
    title: 'AI Morph',
    category: 'AI Web App',
    description:
      'AI-powered face morphing generator — turns 2-5 photos into a smooth Full HD video using Stable Diffusion. Next.js + FastAPI + RunPod GPU workers.',
    image: './img/ai-morph.jpg',
    link: 'https://ai-morphing-gen.vercel.app/',
  },
  {
    title: 'LotsApply',
    category: 'Web App',
    description:
      'End-to-end university application automation platform for international students. Students submit data and documents via Google Form; the system parses uploaded documents (passport, transcripts, etc.) using Gemini OCR, stores structured profiles, and auto-generates motivation letters.',
    image: './img/lotsapply.jpg',
    link: 'https://uni-apply-helper-theta.vercel.app/welcome',
  },
  {
    title: 'Pixap (App Store + Google Play)',
    category: 'Mobile App',
    description:
      'AI concierge for finding and booking venues in Almaty, built from scratch with React Native (Expo): architecture, UI/UX, backend and third-party integrations. Key modules: Pix AI Concierge (conversational booking agent via WhatsApp Business API), Vibe Match (personalized recommendations), Live Crowd (real-time venue activity), a social feed with stories/profiles, and a StoreKit auto-renewable subscription system that passed App Store review. Integrations: Sign in with Apple, email auth, push notifications (APNs), Core Location, Speech Recognition.',
    image: './img/pixap-app.jpg',
    link: 'https://apps.apple.com/us/app/pixap/id6760616898',
  },
  {
    title: 'Pixap (Landing)',
    category: 'Landing Page',
    description:
      'Landing page for Pixap — an AI concierge service for booking venues in Almaty. Designed the structure from scratch: positioning, copywriting, layout, and visual design, built around a conversion funnel (pain points, solution, features, roadmap, CTA). Dark theme with a custom color scheme, responsive layout, and an interactive demo chat in the hero section. Clean HTML/CSS, no frameworks.',
    image: './img/pixap-landing.jpg',
    link: 'https://pixapp.kz/',
  },
  {
    title: 'AthleteConnection',
    category: 'Web App',
    description:
      'Platform connecting athletes and employers. Built a multi-step signup flow with RBAC and invite codes, AI-driven profile auto-completion via social network scraping with real-time syncing, transactional email system via Resend, cron jobs for digests and notifications, an admin dashboard for user management and metrics, matching logic (athletes ↔ employers) via Supabase edge functions, an interactive real-time activity dashboard, and Firecrawl-based news scraping with two-way Supabase sync. Used Supabase edge functions for domain logic instead of a monolithic backend, and added validation/deduplication for scraped content and notification jobs to prevent duplicate entries and repeated email delivery.',
    image: './img/athleteconnection.jpg',
    link: 'https://athleteconnection.org/',
  },
  {
    title: 'DermPro Connect',
    category: 'Mobile App',
    description:
      'Native mobile app for dermatology professionals and clients (iOS & Android). Implemented in-app payments with Stripe for peer-to-peer transactions, integrated Agora video conferencing (WebRTC + native SDK) for real-time consultations, and built secure user flows, transaction handling, and session management.',
    image: './img/dermpro.jpg',
    link: 'https://apps.apple.com/us/app/dermpro-connect/id6751348712',
  },
  {
    title: 'Babbily',
    category: 'AI Web App',
    description:
      'AI-driven platform with multi-LLM orchestration (chat, image generation, video generation), dynamic UI flows for different AI modalities, Stripe subscriptions with tiered plans and billing logic, and usage quotas tied to subscription tiers. Implemented a multi-provider LLM abstraction layer instead of coupling to a single provider, with fallback routing between AI providers and quota validation to prevent failed requests and overconsumption during provider outages.',
    image: './img/babbily.jpg',
    link: 'https://babbily.com/',
  },
  {
    title: 'DFI Rentals',
    category: 'Web App',
    description:
      'Marketplace connecting photographers with equipment providers. Implemented Booqable two-way sync API with real-time availability and inventory updates, cart state management with RBAC-controlled checkout, a quota-based multi-cart system with shareable private links, Stripe verification during checkout (payment + identity), Airtable two-way sync, and separate backend services/API layers on AWS.',
    image: './img/dfi-rentals.jpg',
    link: 'https://dfirentals.com/',
  },
  {
    title: 'Mood Journal',
    category: 'AI Web App',
    description:
      'AI-powered web app that prompts users to describe their daily mood and returns original feedback generated via the Anthropic API. Includes user auth (signup/login with validation), role-based restrictions, profile settings (avatar, name, theme switching), and backend logic for calling the Anthropic endpoint and rendering the response.',
    image: './img/mood-journal.jpg',
    link: 'https://viper-mood-journal.vercel.app/',
  },
  {
    title: 'Place Guesser',
    category: 'Web App',
    description:
      'Game where users guess locations based on Street View, with a scoring system and statistics.',
    image: './img/place-guesser.jpg',
    link: 'https://place-guesser.lovable.app/',
  },
  {
    title: 'WanderSpace',
    category: 'Web App',
    description:
      'Travel planner app for building and managing trip itineraries and travel routes.',
    image: './img/wanderspace.jpg',
    link: 'https://wanderspace.lovable.app/',
  },
  {
    title: 'Purrfect',
    category: 'Web App',
    description:
      'Pet social network — a platform for pet owners to share content and interact, with profiles, posts, and social interactions.',
    image: './img/purrfect.jpg',
    link: 'https://purrfect-app.lovable.app/auth',
  },
  {
    title: 'Vsee.kz',
    category: 'Mobile App (iOS)',
    description: `An aggregator app for restaurant/cafe table bookings, salon appointments, product ordering and delivery, and more.
    iOS version`,
    image: './img/vseekz-1.jpg',
    link: 'https://apps.apple.com/kz/app/vsee/id6738857647',
  },
  {
    title: 'Vsee.kz',
    category: 'Mobile App (Android)',
    description: `An aggregator app for restaurant/cafe table bookings, salon appointments, product ordering and delivery, and more.
    Android version`,
    image: './img/vseekz-3.jpg',
    link: 'https://play.google.com/store/apps/details?id=com.vseekzapp.vseekzapp',
  },
  {
    title: 'Tiger Stars',
    category: 'Website Development',
    description: 'Buy Telegram Stars ⭐️ at low prices',
    image: './img/tigerstars.jpg',
    link: 'https://tiger-stars.com/',
  },
  {
    title: 'Mortgage Calculator',
    category: 'Web App',
    description:
      'A mortgage calculator built with vanilla JavaScript using the MVC pattern.',
    image: './img/mortgage-calc.jpg',
    link: 'https://viperclaw1.github.io/mortgage-calculator/',
  },
  {
    title: 'Dynamo (ru)',
    category: 'Website Development',
    description:
      'Website for the "Dynamo" football club, built in Webflow. Russia version.',
    image: './img/dynamo-ru.jpg',
    link: 'https://www.dynamo.su/',
  },
  {
    title: 'Dynamo (kz)',
    category: 'Website Development',
    description:
      'Website for the "Dynamo" football club, built in Webflow. Kazakhstan version.',
    image: './img/dynamo-kz.jpg',
    link: 'https://www.dynamo.kz/',
  },
  {
    title: 'Cyberfy',
    category: 'Landing Page',
    description:
      'Landing page for a cybersecurity services website, built in Webflow.',
    image: './img/cyberfi.jpg',
    link: 'https://viperclaw1.github.io/cyberfy/',
  },
  {
    title: 'Siberus (Webflow)',
    category: 'Website Development',
    description: 'A business-card website built in Webflow.',
    image: './img/siberus-3.jpg',
    link: 'https://operacionnyy-menedzhers-radical-site.webflow.io/',
  },
  {
    title: 'Cyberus Site',
    category: 'Website Development',
    description:
      'Landing page for the Cyberus cybersecurity services website, built in Webflow.',
    image: './img/siburus.jpg',
    link: 'https://cyberus-site.webflow.io/',
  },
  {
    title: 'Cyberus Export',
    category: 'Website Development',
    description:
      'Landing page for the Cyberus cybersecurity services website, built in Webflow.',
    image: './img/siberus-2.jpg',
    link: 'https://cyberusexport.webflow.io/',
  },
  {
    title: 'Gonzo Proxy',
    category: 'Website Development',
    description:
      'Proxy provider with crypto-based hosting purchases. Built in Bubble.io.',
    image: './img/gonzoproxy.jpg',
    link: 'https://gonzoproxy.com/',
  },
  {
    title: 'Cookies Website',
    category: 'Landing Page',
    description:
      'Landing page with a confectionery catalog, built with the Angular framework.',
    image: './img/cookies.jpg',
    link: 'https://viperclaw1.github.io/cookies/',
  },
  {
    title: 'Zen Spacing App',
    category: 'Mobile App',
    description:
      'A meditation app that generates on-demand audio affirmations via OpenAI integration. Built on Flutterflow.',
    image: './img/zenspacing.jpg',
    link: 'https://zen-spacing.flutterflow.app/',
  },
  {
    title: 'Expense Tracker',
    category: 'Mobile App',
    description:
      'An expense tracker app with category-based tracking and analysis, plus AI-generated savings suggestions via OpenAI integration. Built with Glide.apps.',
    image: './img/expense.jpg',
    link: 'https://expengenius.glide.page/',
  },
  {
    title: 'Hunchun Info',
    category: 'Website Development',
    description:
      'An information portal aggregating tourism and medical services in China, built in Bubble.io.',
    image: './img/hunchun.jpg',
    link: 'https://hunchun.info/',
  },
  {
    title: 'Music God',
    category: 'Web App',
    description:
      'An online store for musical instruments, built with Bubble.io.',
    image: './img/musicgod.webp',
    link: 'https://mylangschool.bubbleapps.io/version-test/',
  },
  {
    title: 'Glory Store',
    category: 'E-commerce',
    description:
      'An online store for cosmetic products, built with Bubble.io.',
    image: './img/glorystore.webp',
    link: 'https://glory-store.bubbleapps.io/version-test',
  },
];
