// Traducciones EN de los artículos que publica la automatización (blog-bot).
// La automatización añade aquí UNA entrada por artículo nuevo, con la clave = slug ES,
// en el mismo commit que el artículo en español. Formato: igual que en-4.ts.
import type { BlogPostTranslation } from "@/lib/blog-translations";

export const enAuto: Record<string, BlogPostTranslation> = {
  "cuanto-dura-sesion-grabacion-aprovecharla": {
    title: "How Long Does a Recording Session Last, and How to Get the Most Out of It",
    description:
      "How long a studio recording session lasts, how to split the hours and what to do so you leave with weeks of content without dragging it out.",
    readingTime: "5 min read",
    category: "Guide",
    tags: ["recording session", "Madrid studio", "planning", "brand content", "production", "content direction"],
    keyword: "how long is a recording session",
    excerpt:
      "A well-planned 3-hour session beats a 6-hour one with no script. How the time is split and what decides how many pieces you leave with.",
    seoTitle: "How Long Is a Recording Session and How to Use It Well",
    metaDescription:
      "How long a studio recording session lasts: 2 to 4 hours depending on the goal. How to split the time and leave with content for several weeks.",
    heroKicker: "Blog / A0Studios",
    body: [
      {
        type: "paragraph",
        text: "The question we get most before a booking is how long a session lasts. The short answer: 2 to 4 hours for most personal brands and small teams. Going beyond that rarely adds content and almost always drains energy in front of the camera.",
      },
      {
        type: "paragraph",
        text: "What changes the result isn't the clock, it's what you do inside it. At A0Studios, at Ronda de Atocha 16 in central Madrid, our team directs sessions with a sales mindset: we know which pieces work organically and in ads, and that decides how the hours are split.",
      },
      {
        type: "image",
        src: "/blog/cuanto-dura-sesion-grabacion-aprovecharla/hero.webp",
        alt: "Photo studio set with camera and lights ready for a recording session",
        width: 1920,
        height: 1080,
        priority: true,
      },
      { type: "heading", level: 2, text: "Why session length matters less than it seems" },
      {
        type: "paragraph",
        text: "A session isn't an hourly rental where every minute counts the same. There's setup time, light and sound tests, actual recording and shot changes. Effective recording is usually about 60% of the total.",
      },
      {
        type: "paragraph",
        text: "In front of a camera, most people perform well for about 90 minutes. After that, speech slows down, filler words creep in and takes sound less and less like how you really talk. That's why we prefer two blocks with a break over a marathon.",
      },
      {
        type: "paragraph",
        text: "Our reference: a 3-hour session yields 12 to 15 vertical clips of 30 to 60 seconds, or 2 long videos plus 6 to 8 short ones. If you're also shooting for ads, add 3 different openings per idea.",
      },
      { type: "heading", level: 2, text: "How to run a session well" },
      { type: "heading", level: 3, text: "First half hour: setup and tests" },
      {
        type: "paragraph",
        text: "Light, framing, microphone and a test take. With a Sony A7 and two microphones, it's locked in within 20 to 30 minutes. If you arrive with your outfit decided and the script on your phone, not one minute more is lost.",
      },
      { type: "heading", level: 3, text: "Two recording blocks with a break" },
      {
        type: "paragraph",
        text: "The first block, 60 to 75 minutes, is for what matters most: the main piece or the ads. That's when your energy is highest. After a 10-minute break, the second block goes to organic clips, answers to questions and supporting footage.",
      },
      { type: "heading", level: 3, text: "Last fifteen minutes: review before you leave" },
      {
        type: "paragraph",
        text: "Before packing up, we review the footage and redo doubtful takes. Repeating a sentence today is far cheaper than booking another session for a clip with no sound. We also note which pieces go to editing first in DaVinci Resolve or CapCut.",
      },
      {
        type: "image",
        src: "/blog/cuanto-dura-sesion-grabacion-aprovecharla/mid.webp",
        alt: "Group of people around a camera during a recording",
        width: 1200,
        height: 800,
      },
      { type: "heading", level: 2, text: "When a longer session makes sense" },
      {
        type: "paragraph",
        text: "There are cases where 4 hours or a full day pays off: several spokespeople, outfit changes, product shooting or a quarterly content plan recorded in one visit. But then the schedule is different: fixed breaks, block order and someone watching the clock for you.",
      },
      { type: "heading", level: 2, text: "Common mistakes that stretch a session" },
      {
        type: "list",
        items: [
          "Arriving without knowing what to record and deciding in front of the camera.",
          "Memorizing the script word for word instead of mastering 3 ideas per piece.",
          "Recording everything back to back with no break until performance drops.",
          "Changing outfit or set for every clip without need.",
          "Not separating priorities (ads, main piece) from extras.",
          "Leaving without reviewing the takes and finding an audio fault while editing.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How long does a standard recording session last?",
        answer:
          "Between 2 and 4 hours including setup. With 3 hours you record 12 to 15 short clips, or a few long videos with supporting pieces.",
      },
      {
        type: "faq",
        question: "Is a half-day session worth it?",
        answer:
          "If you have several spokespeople or a three-month content plan, yes. For a single person, 3 well-planned hours and a break halfway are usually enough.",
      },
      {
        type: "faq",
        question: "How much content comes out of a 3-hour session?",
        answer:
          "About 12 to 15 vertical clips of 30 to 60 seconds, or 2 long videos and 6 to 8 short ones. It depends on the script and how many openings you record per idea to test in ads.",
      },
      {
        type: "faq",
        question: "What should I prepare so we don't lose time?",
        answer:
          "The goal of each piece, 3 key ideas per video, your outfit decided and a list ordered by priority. With that, setup and tests stay at half an hour.",
      },
      {
        type: "paragraph",
        text: "If you're not sure how many hours you need, write to us in /#contacto with your goal and the pieces you want, and we'll propose length, blocks and structure before you book a session at A0Studios.",
      },
    ],
  },
  "empezar-grabar-contenido-linkedin-primera-vez": {
    title: "How to Start Recording LinkedIn Content If You've Never Been on Camera",
    description:
      "A guide to recording your first LinkedIn videos with no camera experience: what to say, how to prepare and how much to record in the first session.",
    readingTime: "5 min read",
    category: "Guide",
    tags: ["LinkedIn content", "first recording", "Madrid studio", "personal brand", "founders", "content direction"],
    keyword: "record linkedin videos first time",
    excerpt:
      "You don't need to be comfortable on camera to start on LinkedIn. You need one idea per video, a short script and someone to direct the first session.",
    seoTitle: "Record LinkedIn Videos If You've Never Been on Camera",
    metaDescription:
      "How to record LinkedIn videos if you've never been on camera: what to say, how to prepare the first session and how many videos you get in 2 hours.",
    heroKicker: "Blog / A0Studios",
    body: [
      {
        type: "paragraph",
        text: "Most founders and executives who want to start on LinkedIn share the same block: they've never been on camera and think it shows from the first second. It shows less than you think. What does show is not having anything clear to say.",
      },
      {
        type: "paragraph",
        text: "At A0Studios, at Ronda de Atocha 16 in central Madrid, our team directs many first sessions. We make ads and know which videos move an audience to act, so the session is prepared with a sales mindset, not just aesthetics.",
      },
      {
        type: "image",
        src: "/blog/empezar-grabar-contenido-linkedin-primera-vez/hero.webp",
        alt: "Professional speaking to camera in front of a laptop in an office",
        width: 1920,
        height: 1080,
        priority: true,
      },
      { type: "heading", level: 2, text: "Why starting with video on LinkedIn pays off" },
      {
        type: "paragraph",
        text: "On LinkedIn you compete with text and stock images. A 40-second video of you talking about your industry builds trust before the first meeting: whoever contacts you already knows how you think and how you sound.",
      },
      {
        type: "paragraph",
        text: "You don't need to post five times a week. Two or three videos a week for two months gives you a base. The first month is mostly for loosening up, not for measuring results.",
      },
      {
        type: "paragraph",
        text: "And video pays twice. What you record for organic can later be tested as an ad aimed at decision makers, which is where LinkedIn tends to perform best for B2B.",
      },
      { type: "heading", level: 2, text: "How to do your first recording well" },
      { type: "heading", level: 3, text: "One idea per video, not one topic" },
      {
        type: "paragraph",
        text: "\"Talk about leadership\" isn't an idea. \"Why I stopped holding Monday meetings\" is. Write down 6 concrete ideas before the session, each with a point of view of your own, and each fits in 30 to 60 seconds.",
      },
      { type: "heading", level: 3, text: "A three-sentence script, not three pages" },
      {
        type: "paragraph",
        text: "If you read a full text, you sound like you're reading. Note a hook, the body in two points and a close. With that you speak in your own words and can redo a take if needed. A teleprompter helps, but only if the text is written to be spoken.",
      },
      { type: "heading", level: 3, text: "Record more takes than you think" },
      {
        type: "paragraph",
        text: "The first take is almost never the good one, and that's normal. By the third you've forgotten about the camera. That's why in a 2-hour session we record 8 to 10 videos, of which 6 or 7 get published. A Sony A7 with a lavalier microphone is enough for LinkedIn.",
      },
      {
        type: "image",
        src: "/blog/empezar-grabar-contenido-linkedin-primera-vez/mid.webp",
        alt: "Camera recording a video on a tripod",
        width: 1200,
        height: 800,
      },
      { type: "heading", level: 2, text: "Common mistakes in the first recording" },
      {
        type: "list",
        items: [
          "Memorizing the speech and going blank mid-sentence.",
          "Opening with long introductions instead of going straight to the idea.",
          "Recording handheld on a phone, with no tripod or microphone, and echoey audio.",
          "Choosing generic company topics instead of an opinion of your own.",
          "Cutting every silence and pause until you sound like a robot.",
          "Waiting until you feel comfortable to start: ease comes from recording, not before.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "Do I need previous experience to record video for LinkedIn?",
        answer:
          "No. You need one concrete idea per video and some direction in the first takes. Most people who have never recorded perform well from the third take.",
      },
      {
        type: "faq",
        question: "How long should a LinkedIn video be?",
        answer:
          "To start, between 30 and 60 seconds. It's short enough to hold one idea and long enough to show your judgment. Longer videos can wait until you feel comfortable.",
      },
      {
        type: "faq",
        question: "How many videos come out of a first session?",
        answer:
          "In 2 hours you record about 8 to 10 short videos and publish 6 to 7. That's content for two or three weeks at 2 or 3 posts a week.",
      },
      {
        type: "faq",
        question: "Can I record on my phone, or is a studio better?",
        answer:
          "You can start on a phone if you take care of light and audio. In a studio you gain control over both and someone to direct you, which matters most when you've never been on camera.",
      },
      {
        type: "paragraph",
        text: "If you want to record your first batch of LinkedIn videos with someone directing the session, write to us in /#contacto with your industry and the ideas you have, and we'll prepare the structure with you before you book at A0Studios.",
      },
    ],
  },
  "calcular-retorno-sesion-contenido-recurrente": {
    title: "How to Calculate the Return on a Recurring Content Session",
    description:
      "A method to measure the return on a monthly recording session: cost per piece, which metrics to track and when a recurring session pays off.",
    readingTime: "5 min read",
    category: "Guide",
    tags: ["content ROI", "recurring session", "Madrid studio", "brand content", "video metrics", "content direction"],
    keyword: "return on recurring content session",
    excerpt:
      "A monthly recording session is justified with numbers, not feelings. How to calculate cost per piece and what to measure to know if it pays off.",
    seoTitle: "Return on a Recurring Content Session: How to Measure It",
    metaDescription:
      "Return on a recurring content session: how to calculate cost per piece, which metrics to track and when a monthly recording pays off.",
    heroKicker: "Blog / A0Studios",
    body: [
      {
        type: "paragraph",
        text: "Many people book a recording session every month and after three months can't say whether it paid off. It's not because it doesn't work. It's because nobody decided beforehand which number they would look at.",
      },
      {
        type: "paragraph",
        text: "At A0Studios, at Ronda de Atocha 16 in central Madrid, our team directs recurring sessions for brands and founders. We make ads and know what can be measured and what is noise, so the session is planned with the return calculation from day one.",
      },
      {
        type: "image",
        src: "/blog/calcular-retorno-sesion-contenido-recurrente/hero.webp",
        alt: "Person looking at a laptop with results charts while working",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Why measure the return on a recurring session" },
      {
        type: "paragraph",
        text: "A one-off session can be judged by whether you liked the result. A recurring session is a monthly investment, and a monthly investment gets reviewed with numbers. If you don't, content becomes the first line cut when the budget tightens.",
      },
      {
        type: "paragraph",
        text: "One important nuance: the return of a session isn't visible in the session, it's visible in the pieces that come out of it over the following weeks. That's why you measure in 60 or 90-day windows, not per video.",
      },
      {
        type: "paragraph",
        text: "And it helps to separate two uses. What you publish organically builds trust and demand. What you run as ads is measured by acquisition cost. One session can feed both, but they are judged with different metrics.",
      },
      { type: "heading", level: 2, text: "How to calculate it properly" },
      { type: "heading", level: 3, text: "First, cost per piece" },
      {
        type: "paragraph",
        text: "Add up the total monthly cost: session, editing and your preparation time. Divide it by the pieces published. If a 3-hour session and its editing cost €1,200 and yield 15 clips, each piece costs €80. If only 5 get published, it rises to €240. A session's performance is decided by how many useful pieces it yields, not by how many hours it lasts.",
      },
      { type: "heading", level: 3, text: "Then, one concrete goal per channel" },
      {
        type: "paragraph",
        text: "Pick a single outcome per channel per quarter. On LinkedIn it could be meetings requested by direct message. On Instagram, quote requests. In ads, cost per lead. Looking at views alone tells you little: a video with many views and zero enquiries hasn't delivered a return.",
      },
      { type: "heading", level: 3, text: "Finally, compare against your real alternative" },
      {
        type: "paragraph",
        text: "The useful question isn't whether content makes money, but how much it would cost to get the same another way. If each ad lead costs you €25 and the session's organic content brings 20 enquiries a month, you already have a reference for its value. Also note the enquiries that mention a specific video: it's the most reliable data you'll have.",
      },
      {
        type: "image",
        src: "/blog/calcular-retorno-sesion-contenido-recurrente/mid.webp",
        alt: "Camera on a tripod set up for a studio recording session",
        width: 1920,
        height: 1282,
      },
      { type: "heading", level: 2, text: "Common mistakes when measuring return" },
      {
        type: "list",
        items: [
          "Judging the session after two weeks, when most pieces haven't been published yet.",
          "Counting only followers or views instead of enquiries, meetings or sales.",
          "Not tagging where each contact comes from: without a source field in your CRM there's no way to attribute.",
          "Recording with no plan and publishing only 4 of 15 clips, which sends cost per piece through the roof.",
          "Changing format every month and leaving no time for any of them to be comparable.",
          "Forgetting the value of reuse: an organic clip that works can be tested as an ad.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How long should I wait to see the return?",
        answer:
          "Between 60 and 90 days. In the first month you publish, learn which formats work and adjust. From the second month there's enough data to compare pieces and decide what to repeat.",
      },
      {
        type: "faq",
        question: "Which metric is best for measuring a content session?",
        answer:
          "The one closest to a sale: enquiries received, meetings requested or cost per lead if you run ads. Views and likes help compare pieces with each other, not justify the investment.",
      },
      {
        type: "faq",
        question: "Does a monthly session pay off more than a quarterly one?",
        answer:
          "It depends on your posting pace. If you post 3 times a week, a monthly 3-hour session with 12 to 15 clips gives you just enough material. With a slower pace, a longer quarterly session lowers the cost per piece.",
      },
      {
        type: "faq",
        question: "Can I measure return if I only post organically?",
        answer:
          "Yes, though less precisely. Ask on every first call how they found you and note the video they mention. With three months of those answers you already have a reasonable estimate.",
      },
      {
        type: "paragraph",
        text: "If you want to set up a recurring session with a measurable goal from the start, write to us in /#contacto with your industry, your posting pace and your current cost per lead, and we'll work it out with you before you book at A0Studios.",
      },
    ],
  },
  "estudio-podcast-madrid-expats-founders": {
    title: "Podcast Studio in Madrid for Expats and Founders: How to Record Without the Hassle",
    description:
      "A guide to recording a podcast in Madrid as an expat or international founder: what a studio includes, how to book, which language to record in and what to bring.",
    readingTime: "5 min read",
    category: "Guide",
    tags: ["podcast studio", "Madrid", "expats", "founders", "English podcast", "content direction"],
    keyword: "podcast studio madrid expats",
    excerpt:
      "If you live in Madrid without speaking Spanish every day, or you're visiting, recording a podcast in a studio is easier than it looks. What it includes, how to book and what to bring.",
    seoTitle: "Podcast Studio in Madrid for Expats and Founders",
    metaDescription:
      "Podcast studio in Madrid for expats and founders: what a session includes, which language to record in and how to book in the centre, near Atocha.",
    heroKicker: "Blog / A0Studios",
    body: [
      {
        type: "paragraph",
        text: "A podcast studio in Madrid for expats and international founders is booked like any other: you pick a date, arrive with your ideas and leave with the episode recorded. The only things that change are the language of the conversation and the logistics, and neither is a problem if you prepare ahead.",
      },
      {
        type: "paragraph",
        text: "At A0Studios, at Ronda de Atocha 16, 7th floor, central Madrid, we record podcasts in Spanish, in English and mixing both. Our team makes ads and knows which formats move an audience to act, so a session isn't just about recording well: it's planned so the episode also brings you clients.",
      },
      {
        type: "image",
        src: "/blog/estudio-podcast-madrid-expats-founders/hero.webp",
        alt: "Condenser microphone in a podcast studio",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Why record your podcast in a studio and not at home" },
      {
        type: "paragraph",
        text: "Many founders who arrive in Madrid start by recording in the living room or a coworking space. The problem is audio: echo, street noise and a connection that drops. In a studio with acoustic treatment, two microphones and one camera per person, the sound is clean from minute one and doesn't need fixing in editing.",
      },
      {
        type: "paragraph",
        text: "A studio also gives you something you don't have at home: someone directing. A podcast comes out better when an outside person watches the pace, cuts filler words and flags when an answer runs long. That matters even more if you're speaking in a language that isn't your first.",
      },
      {
        type: "paragraph",
        text: "And if you record with video, the same episode becomes 8 to 10 vertical clips for LinkedIn and Instagram. For a founder who wants to get known in a new market, that is the real value of the session.",
      },
      { type: "heading", level: 2, text: "How to organise a session if you don't live in Madrid or don't speak Spanish daily" },
      { type: "heading", level: 3, text: "Language: record in the one you feel most comfortable in" },
      {
        type: "paragraph",
        text: "You choose the language. If your audience is international, record in English. If you want to reach the Spanish market, record in Spanish or alternate both and add subtitles. What matters is that you and your guest understand each other without effort, because it shows in the result.",
      },
      { type: "heading", level: 3, text: "Booking and scheduling" },
      {
        type: "paragraph",
        text: "A single-episode podcast session lasts 2 to 3 hours including setup and tests. If you're only passing through, lock in a date and time before you land and record several episodes in the same visit. With 3 well-planned hours you get two episodes of about 30 minutes and short pieces for social media.",
      },
      { type: "heading", level: 3, text: "Getting here and finding the studio" },
      {
        type: "paragraph",
        text: "We're at Ronda de Atocha 16, on the 7th floor, a few minutes' walk from Atocha station. If you're visiting or bringing guests who don't know the city, it's an easy spot to find from the AVE high-speed train, the Cercanías commuter line and the metro.",
      },
      {
        type: "image",
        src: "/blog/estudio-podcast-madrid-expats-founders/mid.webp",
        alt: "Two people recording a podcast with microphones in a studio",
        width: 1920,
        height: 1267,
      },
      { type: "heading", level: 2, text: "What to bring to the session" },
      {
        type: "list",
        items: [
          "Three to five topics or questions per episode, not a word-for-word script.",
          "A list with each guest's name and company, written the way you want it to appear.",
          "The language of each episode decided in advance.",
          "Plain clothes, no fine stripes or large logos, that look good on camera.",
          "A USB drive or disk to take the files with you, although they can also be sent by link.",
          "Water and a realistic plan: no more than two episodes per 3-hour session.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "Can I record my podcast in English in a Madrid studio?",
        answer:
          "Yes. The studio doesn't dictate the language. You can record in English, in Spanish or mix both. If you want to reach both audiences, the video can be subtitled in the second language.",
      },
      {
        type: "faq",
        question: "How long does a podcast studio session last?",
        answer:
          "Between 2 and 3 hours including setup and sound tests. In that time you record one or two episodes of about 30 minutes, depending on how prepared you arrive.",
      },
      {
        type: "faq",
        question: "Can I record several episodes in one visit?",
        answer:
          "Yes, and it's the most practical option if you're passing through Madrid. The usual plan is two episodes in 3 hours, with a break between them, plus short clips from each.",
      },
      {
        type: "faq",
        question: "What equipment is used to record the podcast?",
        answer:
          "Usually two microphones, one camera per person such as a Sony A7, and post-production in DaVinci Resolve or CapCut. With that the episode comes out in both audio and video.",
      },
      {
        type: "paragraph",
        text: "If you're in Madrid or about to be and want to record your podcast with someone directing the session, write to us in /#contacto with the language, the number of guests and your dates, and we'll propose length and structure before you book at A0Studios.",
      },
    ],
  },
  "donde-grabar-contenido-meta-ads-madrid": {
    title: "Where to Record Content for Meta Ads in Madrid",
    description:
      "What to look for in a Madrid studio to record Meta Ads content: formats, hooks, light, sound and direction with a sales mindset, not just an aesthetic one.",
    readingTime: "5 min read",
    category: "Guide",
    tags: ["Meta Ads", "Madrid studio", "ads", "ad content", "UGC", "content direction"],
    keyword: "record meta ads content madrid",
    excerpt:
      "A Meta ad is won in the first 3 seconds and in what you record to test. What the place you record in needs, and who directs you.",
    seoTitle: "Where to Record Content for Meta Ads in Madrid",
    metaDescription:
      "Where to record Meta Ads content in Madrid: what to ask a studio, which pieces to record for testing and why who directs matters more than the space.",
    heroKicker: "Blog / A0Studios",
    body: [
      {
        type: "paragraph",
        text: "If you are looking for where to record Meta Ads content in Madrid, you probably think of renting a space with good light. That is the least important part. An ad doesn't work because it looks nice; it works because it holds attention for the first 3 seconds and tells the viewer what to do next.",
      },
      {
        type: "paragraph",
        text: "At A0Studios, at Ronda de Atocha 16 in central Madrid, we record ads and organic content in the same penthouse. What makes the difference isn't the place: it's that our team directs the session with a sales mindset, because we work with Meta and TikTok Ads and know which pieces get tested and which stay on the hard drive.",
      },
      {
        type: "image",
        src: "/blog/donde-grabar-contenido-meta-ads-madrid/hero.webp",
        alt: "Studio set with camera and lights ready to record ads",
        width: 1920,
        height: 1080,
        priority: true,
      },
      { type: "heading", level: 2, text: "What content for Meta Ads needs" },
      {
        type: "paragraph",
        text: "Meta splits delivery across the pieces you give it. The more different variants you test, the faster you learn which one holds up. That is why an ad session doesn't aim for one perfect video: it aims for 10 or 15 short clips with different hooks, angles and calls to action.",
      },
      {
        type: "paragraph",
        text: "The most common formats are vertical 9:16 for Reels and Stories, square or 4:5 for the feed, and pieces of 15 to 45 seconds. Everything is recorded assuming the sound may be off, so every important sentence also has to work as a subtitle.",
      },
      {
        type: "paragraph",
        text: "Audio does matter a lot. A clean voice, with a lavalier or an off-frame shotgun mic, raises an ad's credibility more than any camera change. In a studio with acoustic treatment you skip that problem.",
      },
      { type: "heading", level: 2, text: "How to choose where to record" },
      { type: "heading", level: 3, text: "A place that allows several backgrounds and looks in one morning" },
      {
        type: "paragraph",
        text: "To test ads you need to change shot, outfit and background without losing half an hour each time. Ask how many real sets there are and whether you can move the gear. With 2 or 3 different backgrounds, the variants stop looking like the same video on repeat.",
      },
      { type: "heading", level: 3, text: "Gear that doesn't force you to bring your own" },
      {
        type: "paragraph",
        text: "A Sony A7-type camera, two or three lights with intensity control, a teleprompter and 2 microphones cover almost any personal brand or product ad. If the studio only rents you the empty room, you end up paying separately for everything that makes the video look professional.",
      },
      { type: "heading", level: 3, text: "Someone who directs, not just someone who presses record" },
      {
        type: "paragraph",
        text: "This is the part almost nobody asks about and the one that weighs the most. A technician records what you ask for. A director tells you the opening is slow, the benefit arrives late or that shot makes no sense without sound. That difference shows up in your cost per result, not in the aesthetics.",
      },
      {
        type: "image",
        src: "/blog/donde-grabar-contenido-meta-ads-madrid/mid.webp",
        alt: "Phone on a wooden table with a social media app open",
        width: 1200,
        height: 800,
      },
      { type: "heading", level: 2, text: "Common mistakes when recording for Meta Ads" },
      {
        type: "list",
        items: [
          "Recording a single \"well made\" video instead of several hooks to test.",
          "Leaving the main message for second 10, when the viewer has already scrolled on.",
          "Ignoring muted playback: without subtitles or clear gestures, the piece makes no sense.",
          "Renting only the space and finding out later that nobody knows what converts.",
          "Recording horizontally out of habit and cropping to vertical later with the face cut off.",
          "Not recording organic versions of the same ideas too, which come almost free in the same session.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How many clips should I record to test ads on Meta?",
        answer:
          "Between 10 and 15 short clips are usually enough for a first batch: 3 or 4 ideas with 3 different hooks each. A 2 to 3 hour session covers it well.",
      },
      {
        type: "faq",
        question: "Do I need a studio or is a phone enough?",
        answer:
          "A phone works for UGC-style content. For brand or founder ads, a studio gives you controlled light, clean audio and repeatability between sessions, which matters when you want to scale what works.",
      },
      {
        type: "faq",
        question: "Can I use the same session for organic and ads?",
        answer:
          "Yes, and it is the most efficient option. The same ideas are recorded with a natural tone for organic and with a sharper hook and call to action for ads.",
      },
      {
        type: "faq",
        question: "Do you include editing and subtitles?",
        answer:
          "It depends on the service. You can book recording only, recording plus editing, or full production with script and strategy. Editing is done in DaVinci Resolve or CapCut, with subtitles designed for watching without sound.",
      },
      {
        type: "paragraph",
        text: "If you are going to invest in Meta Ads and want to record with someone who knows what gets tested and what gets dropped, write to us in /#contacto with your product and your goal, and we'll propose pieces, length and structure before you book a session at A0Studios.",
      },
    ],
  },
  "grabacion-contenido-abogados-despachos-madrid": {
    title: "Recording Video Content for Lawyers and Law Firms in Madrid",
    description:
      "How to record video content for lawyers and law firms in Madrid: which formats work, how to explain the law without jargon and how to organise the session.",
    readingTime: "5 min read",
    category: "Guide",
    tags: ["lawyers", "law firms", "Madrid studio", "personal brand", "professional video", "content direction"],
    keyword: "video content for lawyers madrid",
    excerpt:
      "A lawyer doesn't need to look like an influencer; clients need to understand their problem and trust the person. What to record, how and where in Madrid.",
    seoTitle: "Video Content for Lawyers and Law Firms in Madrid",
    metaDescription:
      "Video content for lawyers and law firms in Madrid: formats that build trust, how to explain without jargon and how to get 12 pieces from one session.",
    heroKicker: "Blog / A0Studios",
    body: [
      {
        type: "paragraph",
        text: "Video content for lawyers and law firms in Madrid works when each clip answers one concrete question from a potential client in under 90 seconds. No dancing or chasing trends: you need to explain a real problem clearly and show that you know the subject.",
      },
      {
        type: "paragraph",
        text: "At A0Studios, at Ronda de Atocha 16 in central Madrid, we record professionals who sell trust, not entertainment. Our team directs the session with a sales mindset: which question attracts a client, which sentence makes them book a consultation and what gets cut because it only sounds like a textbook.",
      },
      {
        type: "image",
        src: "/blog/grabacion-contenido-abogados-despachos-madrid/hero.webp",
        alt: "Lawyer in a suit working at an office desk while a colleague assists",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Why video matters for legal services" },
      {
        type: "paragraph",
        text: "Hiring a lawyer is a trust decision made with little information. People looking for a firm compare websites, check profiles and, if they see someone explaining a case calmly, that person starts ahead. A 60-second video shows tone, confidence and approachability, which text cannot.",
      },
      {
        type: "paragraph",
        text: "Short video is also reusable: the same clip works on LinkedIn, on the Google profile, on each practice-area page and in ads aimed at people who have the problem right now. One well-planned session covers months of presence.",
      },
      { type: "heading", level: 2, text: "How to record legal content without boring people" },
      { type: "heading", level: 3, text: "One question, one answer, one next step" },
      {
        type: "paragraph",
        text: "Each piece opens with the doubt as a client would phrase it (\"can I be fired while on sick leave?\"), answers in 3 or 4 sentences and ends with what to do now. If you need more than 90 seconds, make it two videos.",
      },
      { type: "heading", level: 3, text: "Plain language, firm-level rigour" },
      {
        type: "paragraph",
        text: "You can be precise without reciting articles. Cite the rule only when it adds credibility and explain the rest the way you would in a first meeting. A teleprompter with key points, not a closed script, avoids the reading tone.",
      },
      { type: "heading", level: 3, text: "Sober image, clean sound" },
      {
        type: "paragraph",
        text: "A neutral or real-office background, soft light on the face and a discreet lavalier are enough. With a Sony A7-type camera, 2 microphones and 2 or 3 different backgrounds, one lawyer can look like they have several settings in a single morning.",
      },
      {
        type: "image",
        src: "/blog/grabacion-contenido-abogados-despachos-madrid/mid.webp",
        alt: "Several people gathered around a laptop at a work table",
        width: 1200,
        height: 800,
      },
      { type: "heading", level: 2, text: "Common mistakes when recording for a law firm" },
      {
        type: "list",
        items: [
          "Opening with the firm's introduction instead of the client's problem.",
          "Reciting the law without translating it into a practical consequence.",
          "Promising results: advertising rules for lawyers limit it and it hurts credibility.",
          "Recording one long corporate video instead of several short pieces per practice area.",
          "Neglecting audio: an echoey room makes the lawyer sound less reliable.",
          "Not closing with a clear action towards /#contacto, the Google profile or a phone call.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How many videos can a lawyer record in one session?",
        answer:
          "In 2 or 3 hours it is realistic to leave with 10 or 12 clips of 45 to 90 seconds if the script is ready. The best approach is to group them by practice area and prepare the questions beforehand.",
      },
      {
        type: "faq",
        question: "Do partners need to appear on camera?",
        answer:
          "Not always, but it helps: clients hire people. One partner per area can record, and the rest of the team can appear in pieces about how a case is handled.",
      },
      {
        type: "faq",
        question: "Can I record without breaching professional ethics rules?",
        answer:
          "Yes, if the content is informative, promises no results and shows no identifiable client cases. Review each script against the rules of your bar association.",
      },
      {
        type: "faq",
        question: "Do you include editing and subtitles?",
        answer:
          "You can book recording only, recording plus editing, or full production. We edit in DaVinci Resolve or CapCut with subtitles, because a large share of views happen without sound.",
      },
      {
        type: "paragraph",
        text: "If you run a firm in Madrid and want to record pieces that explain your practice areas well, write to us in /#contacto with your specialty and the type of client you want, and we'll propose formats, length and structure before you book a session at A0Studios.",
      },
    ],
  },
  "plato-grabacion-madrid-estudio-rodaje": {
    title: "Film Set and Studio Rental in Madrid: How to Choose",
    description:
      "Renting a film set in Madrid: how a soundstage, a filming studio and a penthouse studio differ, what it costs and what to check before you book.",
    readingTime: "5 min read",
    category: "Guide",
    tags: ["film set", "filming studio", "Madrid studio", "hourly rental", "record ads", "content direction"],
    keyword: "film set rental madrid",
    excerpt:
      "Soundstage, filming studio or a penthouse with natural light: what you actually need to record ads, VSLs or organic content in Madrid without overpaying.",
    seoTitle: "Film Set and Studio Rental in Madrid: How to Choose",
    metaDescription:
      "Film set rental in Madrid: soundstage vs filming studio vs penthouse studio, what to check before booking and when each option makes sense.",
    heroKicker: "Blog / A0Studios",
    body: [
      {
        type: "paragraph",
        text: "A film set in Madrid is a space fitted with lighting, sound and backdrops so you can shoot without relying on a location. For ads, VSLs or brand content you rarely need a full soundstage: a small, well-equipped filming studio rented by the hour is enough.",
      },
      {
        type: "paragraph",
        text: "At A0Studios, on Ronda de Atocha 16 in central Madrid, we record in a penthouse studio with natural light and controlled backdrops. Our team directs the session with a sales mindset: choosing where to shoot matters, but knowing which shot makes someone buy matters more.",
      },
      {
        type: "image",
        src: "/blog/plato-grabacion-madrid-estudio-rodaje/hero.webp",
        alt: "Film set with lights and lighting equipment ready for a shoot",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Soundstage, filming studio and penthouse studio: what changes" },
      {
        type: "paragraph",
        text: "A classic soundstage is a large warehouse with a cyclorama, a lighting grid and a lot of technical gear. It suits series, big-budget advertising or complex sets. It is usually rented by the full day and often requires hiring crew separately.",
      },
      {
        type: "paragraph",
        text: "A small filming studio, from 30 to 80 square metres, covers about 90% of what brands and creators ask for: interviews, ads with one or two people, product shots, video podcasts. A penthouse studio adds natural light and a more polished look without building a set.",
      },
      {
        type: "paragraph",
        text: "If your piece is one person talking to camera, a product on a table or a conversation between two people, paying for a large soundstage means paying for square metres that never appear in frame.",
      },
      { type: "heading", level: 2, text: "How to choose a film set or filming studio in Madrid" },
      { type: "heading", level: 3, text: "Define the shot before you look for a venue" },
      {
        type: "paragraph",
        text: "Decide whether you shoot close-ups, medium shots or a wide shot with movement. A close-up on a neutral backdrop fits any studio. A wide shot with two people walking needs real depth. The shot sets the size you need, not the other way round.",
      },
      { type: "heading", level: 3, text: "Check light, sound and backdrops, not just photos" },
      {
        type: "paragraph",
        text: "Ask which lights the rental includes, whether the room echoes, how many backdrops you can swap and whether there is enough power. With a Sony A7, 2 microphones and 3 different backdrops you get several looks in one morning. A beautiful studio with bad sound costs you more in editing.",
      },
      { type: "heading", level: 3, text: "Compare the hourly price with what is really included" },
      {
        type: "paragraph",
        text: "A cheap rental that excludes lighting, an operator or loading access ends up expensive. Ask about the minimum duration, whether setup counts as billable time and whether you can arrive early. For a 3-hour session, plan one extra hour for setup.",
      },
      {
        type: "image",
        src: "/blog/plato-grabacion-madrid-estudio-rodaje/mid.webp",
        alt: "Camera operator filming a person in an indoor studio",
        width: 1200,
        height: 800,
      },
      { type: "heading", level: 2, text: "Common mistakes when renting a film set" },
      {
        type: "list",
        items: [
          "Booking a huge soundstage to record one person talking to camera.",
          "Assuming lights, backdrops and an operator are included without asking.",
          "Not counting setup and teardown time inside the hours you pay for.",
          "Choosing from the photo of the space without hearing how the room sounds.",
          "Arriving without a script or shot list and paying for hours of improvising.",
          "Thinking only about the space and forgetting who directs the session with a sales mindset.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How much does it cost to rent a film set in Madrid?",
        answer:
          "It depends on size and what is included. A small studio by the hour is far cheaper than a warehouse soundstage by the full day. Always ask for a quote with lighting, operator and setup itemised.",
      },
      {
        type: "faq",
        question: "Do I need a cyclorama to record ads?",
        answer:
          "Not always. For ads with one or two people and a product, a neutral backdrop or a simple set is enough. A cyclorama pays off if you shoot full-body or use a green screen.",
      },
      {
        type: "faq",
        question: "Can I rent just the space, without equipment?",
        answer:
          "It depends on the studio. At A0Studios you can book recording only, recording plus editing, or full production, depending on what you already have covered.",
      },
      {
        type: "faq",
        question: "How long should a session be?",
        answer:
          "For 8 to 12 short clips, a 3-hour session plus one hour of setup is usually enough if you arrive with a script and shot list ready.",
      },
      {
        type: "paragraph",
        text: "If you are looking for a film set or filming studio in Madrid and want someone to direct the session, write to us at /#contacto with the type of piece, the number of people and your dates, and we will propose the format, duration and shot plan before you book at A0Studios.",
      },
    ],
  },
  "que-llevar-sesion-grabacion-atico-madrid": {
    title: "What to Bring to a Recording Session in a Madrid Penthouse Studio",
    description:
      "What to bring to a recording session in Madrid: clothes, script, ID, water and your own gear. A practical checklist for a penthouse studio shoot.",
    readingTime: "5 min read",
    category: "Guide",
    tags: ["what to bring", "Madrid penthouse", "Madrid studio", "recording session", "session prep", "brand content"],
    keyword: "what to bring to a recording session",
    excerpt:
      "Clothes, script, ID, water and a plan B: what to bring to a recording session in a Madrid penthouse studio, including if you are visiting from abroad.",
    seoTitle: "What to Bring to a Recording Session in Madrid",
    metaDescription:
      "What to bring to a recording session in a Madrid penthouse studio: clothes, script, your own gear and arrival logistics. A checklist to save hours.",
    heroKicker: "Blog / A0Studios",
    body: [
      {
        type: "paragraph",
        text: "For a recording session in a Madrid penthouse studio, bring three essentials: your script or idea list on your phone, 2 or 3 solid-colour outfits and photo ID to enter the building. Add water and you have solved 90% of what makes sessions lose time.",
      },
      {
        type: "paragraph",
        text: "At A0Studios, at Ronda de Atocha 16, 7th floor, our team sees a 3-hour session lose 40 minutes every week because something basic was missing. We direct sessions with a sales mindset, and part of that is making sure you arrive with no loose ends, especially if you are visiting from another country.",
      },
      {
        type: "image",
        src: "/blog/que-llevar-sesion-grabacion-atico-madrid/hero.webp",
        alt: "Camera operator on a shoot, an example of a studio recording session",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "What to bring to a recording session: the essentials" },
      {
        type: "paragraph",
        text: "Think in three blocks: what appears on camera, what you say and what keeps you sharp for three hours. If those are covered, the studio handles the rest: camera, light, microphones and backdrops.",
      },
      {
        type: "paragraph",
        text: "What you do not need to bring: a tripod, lights or a microphone. At A0Studios we shoot with a Sony A7, two microphones, natural light and studio lights. Only bring your own gear if it is part of the piece, such as a product or a laptop with a demo.",
      },
      {
        type: "paragraph",
        text: "If it is your first time on camera, tell us beforehand. We adjust the pace, start with the easiest material and leave the hardest lines for the end.",
      },
      { type: "heading", level: 2, text: "How to prepare before you come up to the penthouse" },
      { type: "heading", level: 3, text: "Clothes and look: what works on camera" },
      {
        type: "paragraph",
        text: "Bring 2 or 3 solid-colour options in mid tones. Avoid thin stripes, small checks and pure white, which clip or create moire. If you are shooting ads and organic content on the same day, changing your shirt gives the feel of two different days without a second session.",
      },
      { type: "heading", level: 3, text: "Script, ideas and references" },
      {
        type: "paragraph",
        text: "Bring the script on your phone or printed, plus a list of 8 to 12 ideas in priority order. You do not need to memorise it: we record in short blocks of 30 to 60 seconds. If you have ads you like, save 3 links so we can see what you want to replicate.",
      },
      { type: "heading", level: 3, text: "Logistics: arrival, access and breaks" },
      {
        type: "paragraph",
        text: "We are at Ronda de Atocha 16, a few minutes on foot from Atocha station, on the 7th floor. Arrive 10 minutes early with photo ID and water. Plan a 10-minute break halfway and a light meal beforehand: recording hungry shows in your voice.",
      },
      {
        type: "image",
        src: "/blog/que-llevar-sesion-grabacion-atico-madrid/mid.webp",
        alt: "Two people being interviewed in a studio with lights and microphones set up",
        width: 1200,
        height: 800,
      },
      { type: "heading", level: 2, text: "Common mistakes when arriving at a shoot" },
      {
        type: "list",
        items: [
          "Arriving without a script and deciding what to say on camera while the clock runs.",
          "Bringing loud patterns, big logos or pure white clothing.",
          "Showing up with no time to spare and starting the session stressed.",
          "Forgetting the product, laptop or materials that appear on screen.",
          "Not drinking water or eating beforehand, then a dry throat an hour in.",
          "Assuming the studio solves everything and not asking what to record to actually sell.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "Do I need to bring my own camera or microphone?",
        answer:
          "No. At A0Studios we provide the camera, lights, microphones and backdrops. Only bring gear if it is part of what is being filmed, like a product or an on-screen demo.",
      },
      {
        type: "faq",
        question: "What should I wear to record in a studio?",
        answer:
          "Solid colours in mid tones: blue, green, grey, burgundy. Avoid thin stripes, small checks and pure white. Bring 2 or 3 options and choose on the day.",
      },
      {
        type: "faq",
        question: "Can I bring people with me to the session?",
        answer:
          "Yes, but keep it small. One or two people who help with the script or the product add value. A large group tends to distract and makes the session longer.",
      },
      {
        type: "faq",
        question: "Should I arrive before my booked time?",
        answer:
          "Arrive about 10 minutes early to come up to the penthouse, drop your things and change. That way the booked hour is for recording, not for access.",
      },
      {
        type: "paragraph",
        text: "If you have a session in Madrid and want to know what to bring for your type of piece, write to us at /#contacto with the format, the number of people and the date, and we will send you a specific list before your session at A0Studios.",
      },
    ],
  },
  "estudio-grabar-reels-tiktok-madrid": {
    title: "Studio to Record Reels and TikToks in Madrid: 15 Clips in One Morning",
    description:
      "A studio to record reels and TikToks in Madrid: what you need, how long a session lasts and how to shoot 15 vertical clips in 3 hours with ad-minded direction.",
    readingTime: "5 min read",
    category: "Guide",
    tags: ["reels studio Madrid", "record TikToks", "vertical video", "organic content", "recording session", "Madrid studio"],
    keyword: "studio for reels and tiktoks",
    excerpt:
      "A Madrid studio for reels and TikToks gives you light, sound and direction to shoot 12 to 15 vertical clips in a single 3-hour session.",
    seoTitle: "Studio to Record Reels and TikToks in Madrid",
    metaDescription:
      "Studio to record reels and TikToks in Madrid: 12-15 vertical clips in 3 hours, with light, sound and direction built to sell. A practical guide.",
    heroKicker: "Blog / A0Studios",
    body: [
      {
        type: "paragraph",
        text: "A studio to record reels and TikToks in Madrid is worth it if you want 12 to 15 vertical clips from a single 3-hour session, with controlled light and sound and someone directing you. Filming at home works for one clip, not for a month of content.",
      },
      {
        type: "paragraph",
        text: "At A0Studios, at Ronda de Atocha 16, 7th floor, our team shoots reels and TikToks on a Sony A7 in vertical, with two microphones, natural light and studio lights. We direct sessions with a sales mindset: every clip has a hook in the first 2 seconds and a reason to exist, not just a good image.",
      },
      {
        type: "image",
        src: "/blog/estudio-grabar-reels-tiktok-madrid/hero.webp",
        alt: "Cinema camera with monitor and softbox on an interview set, an example of a studio for recording vertical video",
        width: 1920,
        height: 1080,
        priority: true,
      },
      { type: "heading", level: 2, text: "Why record reels and TikToks in a studio instead of at home" },
      {
        type: "paragraph",
        text: "A phone at home gives an acceptable image, but the camera is not the problem: it is changing light, room echo and filming alone with nobody telling you that hook does not hook. A bad clip costs the same to edit as a good one.",
      },
      {
        type: "paragraph",
        text: "In a studio you solve in one morning what takes three weeks of attempts at home. We set up a fixed backdrop, light and sound, and record in blocks of 30 to 60 seconds. Change your shirt and it looks like a different shooting day.",
      },
      {
        type: "paragraph",
        text: "Also, an organic reel and a TikTok share about 80% of the footage. One session can cover Instagram, TikTok and YouTube Shorts, with 3 or 4 clips reserved in an ad format for Meta and TikTok Ads.",
      },
      { type: "heading", level: 2, text: "How to run a reels and TikTok session properly" },
      { type: "heading", level: 3, text: "Plan 12 to 15 clips, not one" },
      {
        type: "paragraph",
        text: "Before you come up to the penthouse we define a list of 12 to 15 ideas in three groups: authority clips (you explain something), proof clips (you show a result) and sales clips (you call to action). In 3 hours that is about 12 minutes per clip, retakes included.",
      },
      { type: "heading", level: 3, text: "Shoot vertical from the start" },
      {
        type: "paragraph",
        text: "The camera is set to 9:16 from the first shot, not cropped afterwards. We watch the margins: captions and app buttons cover the bottom and the right edge, so the face and key text stay in the centre.",
      },
      { type: "heading", level: 3, text: "The hook, the pace and the ending" },
      {
        type: "paragraph",
        text: "The first 2 seconds decide whether someone keeps watching. We write the hook before recording and shoot it 3 times in different tones. Then short sentences, a cut every 3 to 5 seconds and an ending with a single action: comment, save or message.",
      },
      {
        type: "image",
        src: "/blog/estudio-grabar-reels-tiktok-madrid/mid.webp",
        alt: "Camera with a ring light, typical gear for shooting vertical clips for reels and TikToks",
        width: 1200,
        height: 800,
      },
      { type: "heading", level: 2, text: "Common mistakes when recording reels and TikToks in a studio" },
      {
        type: "list",
        items: [
          "Recording a single clip per session and paying for a studio hour on something that would have worked at home.",
          "Arriving without a script and deciding the hook on camera while the clock runs.",
          "Shooting horizontal and cropping to vertical later, losing quality and framing.",
          "Copying another account's format without adapting it to your offer or your customer.",
          "Not thinking about ads: an organic clip that works can be reused as a paid creative.",
          "Editing without captions, when a large share of reels are watched on mute.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How many reels and TikToks can I record in one session?",
        answer:
          "Between 12 and 15 clips of 20 to 45 seconds in a 3-hour session, if you arrive with a script and idea list. Unprepared, the number drops to 6 or 8.",
      },
      {
        type: "faq",
        question: "Do I need to bring my own camera or microphone?",
        answer:
          "No. At A0Studios we provide the camera, lights, microphones and backdrops. Only bring what appears on screen, like a product, a laptop or your outfits.",
      },
      {
        type: "faq",
        question: "Can the same clips work for Instagram, TikTok and YouTube Shorts?",
        answer:
          "Yes, the vertical 9:16 format is the same. Text, captions and sometimes duration change, but the footage is reused in full.",
      },
      {
        type: "faq",
        question: "Can I use these clips as Meta or TikTok ads?",
        answer:
          "Yes, and it is best planned in advance. We record 3 or 4 clips with an ad structure (problem, proof, call to action) so they also work as paid creatives.",
      },
      {
        type: "paragraph",
        text: "If you are looking for a studio to record reels and TikToks in Madrid and want someone to direct the session with a sales mindset, write to us at /#contacto with your sector, the number of clips you need and your dates, and we will propose the format and shot plan before you book at A0Studios.",
      },
    ],
  },
  "grabar-contenido-asesorias-consultoras-madrid": {
    title: "Recording Content for Accounting and Consulting Firms in Madrid: Which Videos Bring Clients",
    description:
      "How to record content for an accounting, tax or consulting firm in Madrid: which videos attract clients, how long the session takes and how to get a month of pieces.",
    readingTime: "5 min read",
    category: "Guide",
    tags: ["content for advisory firms", "Madrid consultancies", "B2B video", "professional services", "recording session", "Madrid studio"],
    keyword: "content for consulting firms",
    excerpt:
      "An advisory or consulting firm doesn't sell something you can see: it sells trust. Which videos build it and how to record them in a single session in Madrid.",
    seoTitle: "Recording Content for Accounting and Consulting Firms",
    metaDescription:
      "Recording content for accounting and consulting firms in Madrid: which videos bring clients, how long the session takes and how to get a month of pieces.",
    heroKicker: "Blog / A0Studios",
    body: [
      {
        type: "paragraph",
        text: "The video content that works best for an accounting or consulting firm in Madrid is short clips where a partner explains one concrete client problem: a tax deadline, a common mistake, a decision. A 3-hour session yields 10 to 12 pieces, enough for a month.",
      },
      {
        type: "paragraph",
        text: "These businesses sell trust before service, and trust is built by seeing and hearing the person who will handle your numbers. At A0Studios, at Ronda de Atocha 16, our team directs the session with a sales mindset: every piece has a goal, not just a good-looking frame.",
      },
      {
        type: "image",
        src: "/blog/grabar-contenido-asesorias-consultoras-madrid/hero.webp",
        alt: "Professional speaking to camera in an office, example of a video for an advisory or consulting firm",
        width: 1920,
        height: 1080,
        priority: true,
      },
      { type: "heading", level: 2, text: "Why video works for advisory and consulting firms" },
      {
        type: "paragraph",
        text: "Anyone looking for a tax advisor or consultancy compares several, and almost all of them say the same on their website: experience, proximity, professionalism. A two-minute video explaining how a regulatory change affects a freelancer shows judgement better than any paragraph.",
      },
      {
        type: "paragraph",
        text: "B2B content also has long cycles. A LinkedIn clip watched today can turn into a call three months from now, when the client finally needs to change advisor. That is why it pays to record pieces that don't expire in a week.",
      },
      {
        type: "paragraph",
        text: "The third reason is the team. If the client already knows the face of the partner and of the person who will serve them every month, the first meeting starts with trust. It is the same principle we describe in our guide to video for sales meetings: arrive with half the convincing already done.",
      },
      { type: "heading", level: 2, text: "How to record content for an advisory or consulting firm" },
      { type: "heading", level: 3, text: "Authority pieces: one question, one answer" },
      {
        type: "paragraph",
        text: "This is the base format: 45 to 90 seconds answering a real client question. We pull the questions from the emails and calls of the past week, not from what sounds interesting. Six of these pieces give you material for a month on LinkedIn and Instagram.",
      },
      { type: "heading", level: 3, text: "Team pieces: who you are and how you work" },
      {
        type: "paragraph",
        text: "A 60 to 90 second video per partner or manager, explaining who they help and what the first month of work looks like. You record it once and use it on the website, in proposals and in the email signature. With 3 or 4 people that is about one hour of shooting.",
      },
      { type: "heading", level: 3, text: "Sales pieces: for ads and for the sales team" },
      {
        type: "paragraph",
        text: "We reserve 2 or 3 clips with an ad structure: problem, proof and call to action, built for Meta Ads or LinkedIn Ads aimed at small businesses and freelancers in Madrid. This is where direction from someone who makes ads sets us apart from simply renting a space.",
      },
      {
        type: "image",
        src: "/blog/grabar-contenido-asesorias-consultoras-madrid/mid.webp",
        alt: "Sony camera on a tripod, gear for recording corporate videos for professional services",
        width: 1200,
        height: 800,
      },
      { type: "heading", level: 2, text: "Common mistakes when recording content for professional services" },
      {
        type: "list",
        items: [
          "Using technical jargon your client doesn't use: if you wouldn't say it on a call, don't say it on camera.",
          "Recording generic tip videos that any competitor can repeat without changing a word.",
          "Stretching each piece to 4 or 5 minutes, when most viewers drop off before the first minute.",
          "Including regulatory deadlines or figures that expire and leave the video outdated within weeks.",
          "Always featuring the same partner instead of the team that actually serves the client.",
          "Recording without thinking about ads and missing the chance to reuse the best piece as a paid creative.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How many videos can an advisory firm record in one session?",
        answer:
          "Between 10 and 12 pieces of 45 to 90 seconds in 3 hours, if you arrive with the client questions prepared. With team videos included, the session stretches to 4 hours.",
      },
      {
        type: "faq",
        question: "Do I need a script for each video?",
        answer:
          "A short outline of 4 or 5 ideas per piece works better than a read-out text. We prepare it with you before the session and use a teleprompter only for the sales pieces.",
      },
      {
        type: "faq",
        question: "What do I do about regulatory information that keeps changing?",
        answer:
          "Record pieces about criteria and common mistakes, which last for years, and keep figures and deadlines for short posts. That way the video doesn't go stale after two months.",
      },
      {
        type: "faq",
        question: "Can I use these videos to win clients with ads?",
        answer:
          "Yes. We record 2 or 3 clips with an ad structure for Meta or LinkedIn Ads, targeted at small businesses and freelancers in Madrid, alongside the organic pieces from the same session.",
      },
      {
        type: "paragraph",
        text: "If you run an advisory or consulting firm in Madrid and want to record a month of content in one morning, write to us at /#contacto with your sector, how many partners will be on camera and your dates, and A0Studios will propose the piece plan before you book.",
      },
    ],
  },
  "estudio-contenido-madrid-cerca-atocha-como-llegar-reservar": {
    title: "Content Studio in Madrid Near Atocha: How to Get There and How to Book",
    description:
      "Content studio in Madrid near Atocha station: how to reach Ronda de Atocha 16 (7th floor), how to book a recording session and what to expect on the day.",
    readingTime: "5 min read",
    category: "Guide",
    tags: ["Madrid studio Atocha", "how to get there", "book a studio", "Madrid penthouse", "content studio", "recording session"],
    keyword: "content studio near atocha",
    excerpt:
      "A0Studios is at Ronda de Atocha 16, 7th floor, a few minutes' walk from Atocha station. How to get there, how to book and what happens between your first message and the shoot.",
    seoTitle: "Content Studio in Madrid Near Atocha Station",
    metaDescription:
      "Content studio in Madrid near Atocha: how to reach Ronda de Atocha 16, 7th floor, and how to book your recording session step by step.",
    heroKicker: "Blog / A0Studios",
    body: [
      {
        type: "paragraph",
        text: "A0Studios is a content studio in central Madrid, at Ronda de Atocha 16, 7th floor, a few minutes' walk from Atocha station. You can arrive by train, metro or on foot, and you book by writing to us at /#contacto with the type of piece, the number of people and your dates.",
      },
      {
        type: "paragraph",
        text: "If you are coming from another city or another country, Atocha puts high-speed trains, commuter rail and metro in a single place. Our team directs every session with a sales mindset, so the only things you need to sort out beforehand are how to get here and what you want to record.",
      },
      {
        type: "image",
        src: "/blog/estudio-contenido-madrid-cerca-atocha-como-llegar-reservar/hero.webp",
        alt: "Aerial view of the Madrid skyline at dusk, with tall buildings and an orange sky",
        width: 1920,
        height: 1275,
        priority: true,
      },
      { type: "heading", level: 2, text: "Where the studio is and how to reach it from Atocha" },
      {
        type: "paragraph",
        text: "The studio is in a penthouse at Ronda de Atocha 16, on the 7th floor. It is a central, well-connected area, a few minutes' walk from Atocha station, where the high-speed and commuter trains arrive.",
      },
      {
        type: "paragraph",
        text: "If your team is bringing product, clothing or boxes, tell us in advance: we will explain how to enter and how much time to allow for carrying the material up. If everything fits in a backpack, nothing special is needed.",
      },
      {
        type: "paragraph",
        text: "Arrive 10 minutes before your booked time and bring photo ID for building access, so the paid hour is spent recording. For more on what to pack, read our guide to what to bring to a recording session in a Madrid penthouse, at /en/blog/what-to-bring-recording-session-madrid.",
      },
      { type: "heading", level: 2, text: "How to book a recording session at A0Studios" },
      { type: "heading", level: 3, text: "Step 1: tell us what you want to record" },
      {
        type: "paragraph",
        text: "Write to us at /#contacto with three details: what you are recording (ads, a VSL, reels, a podcast, a corporate video), how many people will be on camera and when you need it. That is enough for us to tell you whether it fits a 2 to 4 hour session.",
      },
      { type: "heading", level: 3, text: "Step 2: we choose the service and the date" },
      {
        type: "paragraph",
        text: "We work with three formats: Recording Only, Recording + Editing and Full Production. If you are unsure which one you need, we cover it in a short call and recommend the one that fits your goal, not the biggest one.",
      },
      { type: "heading", level: 3, text: "Step 3: we prepare the session with you" },
      {
        type: "paragraph",
        text: "Before shoot day we review the script or idea list, references and anything that appears on screen. We shoot with a Sony A7, two microphones and natural light plus lamps, and the studio provides all the equipment. You bring plain clothing and something to say.",
      },
      {
        type: "image",
        src: "/blog/estudio-contenido-madrid-cerca-atocha-como-llegar-reservar/mid.webp",
        alt: "Cinema camera on a film set with lights, ready for a studio recording session",
        width: 1920,
        height: 1080,
      },
      { type: "heading", level: 2, text: "When a central studio like this makes sense" },
      {
        type: "paragraph",
        text: "A studio near Atocha pays off if your team travels in from several cities, if you arrive by train on the day of the shoot or if you record with guests who do not know Madrid. It removes transport friction and leaves more energy for the camera.",
      },
      {
        type: "paragraph",
        text: "It also fits if you are looking for somewhere to record ads or organic content with someone who directs with a sales eye, not only an aesthetic one. That is the A0Studios difference: technical direction from people who make ads and know what converts.",
      },
      { type: "heading", level: 2, text: "Common mistakes when booking a studio in Madrid" },
      {
        type: "list",
        items: [
          "Booking without knowing which pieces you will record and deciding on the clock.",
          "Underestimating the trip from the station and starting the session in a rush.",
          "Not mentioning that you are bringing product, boxes or more than 3 people.",
          "Booking one hour when you need 3 to get a batch of clips.",
          "Choosing on price alone and not asking who directs the session.",
          "Leaving editing for later without deciding whether the studio handles it.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "Where exactly is A0Studios?",
        answer:
          "At Ronda de Atocha 16, 7th floor, in central Madrid, a few minutes' walk from Atocha station. We send access instructions when your booking is confirmed.",
      },
      {
        type: "faq",
        question: "How long does a recording session last?",
        answer:
          "Between 2 and 4 hours for most personal brands and small teams. In 3 hours you can record 12 to 15 vertical clips if you arrive with your ideas prepared.",
      },
      {
        type: "faq",
        question: "How do I book a session?",
        answer:
          "Write to us at /#contacto with the type of piece, the number of people and your dates. We reply with a proposed service and schedule before anything is confirmed.",
      },
      {
        type: "faq",
        question: "Do I need to bring my own equipment?",
        answer:
          "No. The studio provides cameras, lighting, microphones and backdrops. Bring your own gear only if it is part of what you are recording, such as a product or a demo.",
      },
      {
        type: "paragraph",
        text: "If you are looking for a content studio near Atocha, write to us at /#contacto with what you want to record, how many of you are coming and when, and A0Studios will propose a schedule and format before you book.",
      },
    ],
  },
  "grabar-contenido-inmobiliarias-madrid": {
    title: "Video Content for Real Estate Agencies in Madrid: What Works and How to Record It in a Studio",
    description:
      "How to record video content for real estate agencies in Madrid: which pieces work, how to film your sales team in a studio and how to get a month of video in one morning.",
    readingTime: "5 min read",
    category: "Guide",
    tags: ["Madrid real estate", "property video", "recording studio", "content for agents", "seller leads", "reels"],
    keyword: "real estate video content madrid",
    excerpt:
      "Property tours are filmed at the property. The content that wins seller leads and builds trust is filmed in a studio. Which pieces work and how to get them in a single morning.",
    seoTitle: "Real Estate Video Content in Madrid: Studio Guide",
    metaDescription:
      "Real estate video content in Madrid: which pieces win seller leads and how to film your sales team in a studio in a single morning.",
    heroKicker: "Blog / A0Studios",
    body: [
      {
        type: "paragraph",
        text: "The best way to record video content for a real estate agency in Madrid is to split it into two jobs: property tours are filmed on site, while authority content (advice, market updates, answers to seller questions) is filmed in a studio with good audio and direction. That builds trust, not just views.",
      },
      {
        type: "paragraph",
        text: "At A0Studios, at Ronda de Atocha 16, 7th floor, our team films agents and office directors in 2 to 3 hour sessions. We direct with a sales mindset: every piece has to bring in owners who want to sell or buyers who get in touch, not just likes.",
      },
      {
        type: "image",
        src: "/blog/grabar-contenido-inmobiliarias-madrid/hero.webp",
        alt: "Modern living room with a television, armchair and abstract framed art, an example of a home interior",
        width: 1920,
        height: 1016,
        priority: true,
      },
      { type: "heading", level: 2, text: "Why most real estate content fails" },
      {
        type: "paragraph",
        text: "Almost every agency posts the same thing: the property, the price and a tour with background music. It helps the buyer of that one flat, but it builds no brand and wins no sellers. An owner who wants to sell decides who to call by who earned their trust before they needed anyone.",
      },
      {
        type: "paragraph",
        text: "That is where the agent's face comes in. A 45-second video explaining how a sale price is set in a specific neighbourhood, or which mistakes make a flat sit on the market for months, builds authority. It is easier to film sitting in front of a camera with a decent microphone than in an echoing living room.",
      },
      {
        type: "paragraph",
        text: "There is a practical problem too: filming in empty flats sounds bad. Unfurnished rooms bounce sound and the light changes within half an hour. In a studio you control both and can record 12 to 15 clips with the same look, which keeps your profile consistent.",
      },
      { type: "heading", level: 2, text: "How to record real estate content in a studio" },
      { type: "heading", level: 3, text: "Pieces that win seller leads" },
      {
        type: "paragraph",
        text: "Think of the questions you get on the first call: how much is my flat worth, how long will it take to sell, which documents do I need, is it worth renovating first. Each one is a 30 to 60 second clip. Eight questions give you two months of posts.",
      },
      { type: "heading", level: 3, text: "Pieces for buyers and investors" },
      {
        type: "paragraph",
        text: "For buyers, area videos work: what is paid per square metre in each neighbourhood, what mortgage you can get, or what changes if you buy to let. They can be filmed standing against a clean backdrop and finished with property footage as b-roll.",
      },
      { type: "heading", level: 3, text: "Team and brand pieces" },
      {
        type: "paragraph",
        text: "If your agency has 4 or 5 agents, film each one in the same session: an introduction, a specialty and a story about how they work. It is brand content they later reuse on LinkedIn, on your website and in lead-generation ads. One morning of filming covers the whole team.",
      },
      {
        type: "image",
        src: "/blog/grabar-contenido-inmobiliarias-madrid/mid.webp",
        alt: "Bright living room with a large window, a reference for a home space with natural light",
        width: 1920,
        height: 1200,
      },
      { type: "heading", level: 2, text: "Common mistakes when filming for a real estate agency" },
      {
        type: "list",
        items: [
          "Filming only property tours and nothing that explains why you are the right agency to sell with.",
          "Talking about yourself instead of answering the question the owner is asking.",
          "Filming in the empty flat, with echo and changing light, instead of somewhere controlled.",
          "Making videos longer than 90 seconds for a lead-generation reel.",
          "Not planning a batch: posting one loose video a week instead of a block of 12 to 15 pieces.",
          "Not deciding beforehand which lead ad will come out of the footage and with what call to action.",
        ],
      },
      {
        type: "paragraph",
        text: "A studio beats filming in your office if more than two agents are on camera, if you want to use the footage in paid ads or if your office audio is poor. For a quick reel of one property, shoot it yourself on a phone. For everything else, direction makes the difference.",
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "Which videos work best for a real estate agency?",
        answer:
          "Those that answer specific owner and buyer questions in 30 to 60 seconds: how much a flat is worth, how long it takes to sell or which documents are needed. Tours sell that property, they do not win other sellers.",
      },
      {
        type: "faq",
        question: "How long is a session for a real estate agency?",
        answer:
          "Between 2 and 3 hours for one agent or an office director. In that time you record 12 to 15 vertical clips. If the whole team is filmed, a full morning is usually booked.",
      },
      {
        type: "faq",
        question: "Can the footage be used in paid ads?",
        answer:
          "Yes. When we direct a session with lead generation in mind, we record several different openings for each piece so they can be tested on Meta Ads. It is one of the reasons to film with direction and not just a camera.",
      },
      {
        type: "faq",
        question: "Do we also need to film at the properties?",
        answer:
          "It depends on the goal. For a specific property, yes, with natural light and a good lavalier microphone. For authority and seller leads, a studio with controlled audio and backdrop is better.",
      },
      {
        type: "paragraph",
        text: "If you run a real estate agency in Madrid and want to record a block of lead-generation content in one morning, write to us at /#contacto with your team size and the questions owners ask you most, and A0Studios will propose a content plan before you book.",
      },
    ],
  },
  "grabar-contenido-startups-saas-madrid": {
    title: "Filming Content for Startups and SaaS in Madrid: What to Record and How to Do It in a Studio",
    description:
      "How to film content for startups and SaaS in Madrid: demos, founder videos and lead-generation ads, and how to get a month of pieces in one session.",
    readingTime: "5 min read",
    category: "Guide",
    tags: ["Madrid startups", "SaaS", "product video", "recording studio", "founder content", "Meta Ads"],
    keyword: "startup video studio madrid",
    excerpt:
      "A startup does not need a 3-minute corporate video. It needs short pieces that explain the product and book demos. What to film and how to get it done in one morning.",
    seoTitle: "Filming Content for Startups and SaaS in Madrid",
    metaDescription:
      "Filming content for startups and SaaS in Madrid: which pieces book demos and how to film your founder and team in a studio in a single morning.",
    heroKicker: "Blog / A0Studios",
    body: [
      {
        type: "paragraph",
        text: "To film content for a startup or SaaS in Madrid, the approach that works best is a batch of 12 to 15 vertical pieces of 30 to 60 seconds, with the founder explaining the problem the product solves, plus a separately recorded demo. All of it fits in a 3-hour session.",
      },
      {
        type: "paragraph",
        text: "At A0Studios, at Ronda de Atocha 16, 7th floor, our team films founders and product teams. We direct with an advertiser's mindset: every piece is planned for organic and for demo-booking ads on Meta Ads, not just to look good.",
      },
      {
        type: "image",
        src: "/blog/grabar-contenido-startups-saas-madrid/hero.webp",
        alt: "Team gathered around laptops, an example of a startup team at work",
        width: 1920,
        height: 1281,
        priority: true,
      },
      { type: "heading", level: 2, text: "Why startup videos usually fall flat" },
      {
        type: "paragraph",
        text: "Most startups publish one long intro video nobody watches to the end, or screen captures over music. A software buyer decides by looking at who is behind the product and whether they understand the problem within the first 5 seconds.",
      },
      {
        type: "paragraph",
        text: "The founder is usually the best content asset a company has, and almost never appears on camera. A 40-second video explaining why the product exists builds more trust than any feature page.",
      },
      {
        type: "paragraph",
        text: "Audio also matters. A coworking space or a living room sounds bad, and for paid ads that hurts: echo lowers retention in the first seconds. In a studio you control sound, light and background, and film everything with the same look.",
      },
      { type: "heading", level: 2, text: "How to film SaaS content in a studio" },
      { type: "heading", level: 3, text: "Founder pieces" },
      {
        type: "paragraph",
        text: "Four or five clips: the problem you solve, who it is for, what makes the product different and a customer story told without invented names. Each one runs 30 to 45 seconds with a hook in the first sentence. They are the base for the founder's LinkedIn and for ads.",
      },
      { type: "heading", level: 3, text: "Product and demo pieces" },
      {
        type: "paragraph",
        text: "The demo is recorded on screen and combined with an intro clip filmed in the studio, then assembled in DaVinci Resolve. What works best is a 60 to 90 second walkthrough of a single use case, not the whole product.",
      },
      { type: "heading", level: 3, text: "Hiring and team pieces" },
      {
        type: "paragraph",
        text: "If you are hiring, also film 2 or 3 team members explaining how they work. It is employer branding you can reuse on your careers page and on LinkedIn. In one morning you leave with product, brand and recruiting content.",
      },
      {
        type: "image",
        src: "/blog/grabar-contenido-startups-saas-madrid/mid.webp",
        alt: "Man presenting to a group in front of a screen, an example of a product presentation",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Common mistakes when filming for a startup" },
      {
        type: "list",
        items: [
          "Recording one long intro video instead of a batch of short pieces.",
          "Explaining features before explaining the customer's problem.",
          "Recording the demo with no script and a screen full of notifications.",
          "Having the founder read text with no teleprompter or rehearsal.",
          "Not deciding beforehand which demo-booking ad will come out of the footage.",
          "Filming in a coworking space, with background noise and changing light.",
        ],
      },
      {
        type: "paragraph",
        text: "A studio pays off if a founder films regularly, if you will use the pieces in ads or if you need visual consistency across your catalogue. For a quick product update, shoot it yourself on a phone with a lavalier microphone.",
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "Which videos does a software startup need?",
        answer:
          "A 30 to 45 second founder introduction, a 60 to 90 second demo of a single use case and 8 to 10 clips answering common customer questions. That covers both organic and ads.",
      },
      {
        type: "faq",
        question: "How long is a session for a startup?",
        answer:
          "Between 2 and 3 hours for the founder and a couple of team members. In that time you record 12 to 15 vertical clips. The on-screen demo is recorded separately and edited in afterwards.",
      },
      {
        type: "faq",
        question: "Can the footage be used in paid ads?",
        answer:
          "Yes. We record several different openings for each piece to test on Meta Ads with a clear goal, such as booking a demo. That is the difference between filming with direction and filming with just a camera.",
      },
      {
        type: "faq",
        question: "Do we need a script?",
        answer:
          "You need an outline, not a word-for-word script. We prepare the questions and hooks before the session and the founder answers in their own words, which sounds more natural and converts better.",
      },
      {
        type: "paragraph",
        text: "If you run a startup or SaaS in Madrid and want to film a month of content in one morning, write to us at /#contacto with your product and ideal customer, and A0Studios will propose a content plan before you book.",
      },
    ],
  },
  "alquiler-estudio-grabacion-madrid-por-horas-visitantes": {
    title: "Rent a Recording Studio in Madrid by the Hour: Guide for Visitors",
    description:
      "Renting a recording studio in Madrid by the hour: reference prices, how many hours to book and how to make the most of your session when visiting the city.",
    readingTime: "5 min read",
    category: "Guide",
    tags: ["rent studio Madrid", "hourly studio", "visitors", "recording session", "content studio", "Atocha"],
    keyword: "rent recording studio madrid",
    excerpt:
      "How much it costs to rent a studio by the hour in Madrid, how many hours to book and how to leave with finished footage if you are only in town for a few days.",
    seoTitle: "Rent a Recording Studio in Madrid by the Hour",
    metaDescription:
      "Rent a recording studio in Madrid by the hour: reference prices, how many hours to book and how to get the most from your session as a visitor.",
    heroKicker: "Blog / A0Studios",
    body: [
      {
        type: "paragraph",
        text: "Renting a recording studio in Madrid by the hour typically costs between €80 and €150 an hour depending on equipment and whether an operator is included. At A0Studios, at Ronda de Atocha 16 (7th floor), we work in blocks of 2 to 4 hours, which is what almost any visitor needs to leave with usable footage.",
      },
      {
        type: "paragraph",
        text: "If you are visiting Madrid, the goal is not to waste the trip: arrive with the plan settled, record with direction and fly home with clips ready to publish. Our team directs the session with a sales mindset, so you are not just paying for a room, you are paying for every hour to produce pieces that work for organic or paid.",
      },
      {
        type: "image",
        src: "/blog/alquiler-estudio-grabacion-madrid-por-horas-visitantes/hero.webp",
        alt: "Recording studio with lights, camera and table set up for an hourly session",
        width: 1920,
        height: 1440,
        priority: true,
      },
      { type: "heading", level: 2, text: "How hourly studio rental works in Madrid" },
      {
        type: "paragraph",
        text: "Hourly rental is a block booking: you pick a date and a slot, and during that time you get the studio, lighting, sound and the equipment already set up. The usual minimum is 2 hours, because setup, microphone tests and lighting adjustments take 20 to 30 minutes before anything is recorded.",
      },
      {
        type: "paragraph",
        text: "For a visitor, a 3-hour block is the sweet spot: enough for 12 to 15 vertical clips, or 2 or 3 longer pieces with variants. If you are only in town for a few days, one focused session beats two loose mornings.",
      },
      { type: "heading", level: 2, text: "How to get the most out of every hour" },
      { type: "heading", level: 3, text: "Arrive with the outline locked" },
      {
        type: "paragraph",
        text: "You do not need a word-for-word script. You need to know what you want to say, to whom and with what call to action. If you send us the outline two days ahead, we prepare questions and hooks and the first hour is already real recording.",
      },
      { type: "heading", level: 3, text: "Batch record, do not go piece by piece" },
      {
        type: "paragraph",
        text: "Changing framing or outfit costs time. We group everything that shares a setup: all the to-camera clips first, then interviews, then supporting shots last. With a Sony A7 and two microphones the flow is very fast.",
      },
      { type: "heading", level: 3, text: "Plan for editing from the start" },
      {
        type: "paragraph",
        text: "If you are flying home, decide beforehand whether you take the raw footage or want us to edit. Our Recording + Editing service is delivered from DaVinci Resolve and CapCut depending on the format, and you can receive it remotely without coming back to Madrid.",
      },
      {
        type: "image",
        src: "/blog/alquiler-estudio-grabacion-madrid-por-horas-visitantes/mid.webp",
        alt: "Person filming content with a tripod and microphone during a studio session",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Common mistakes when renting a studio by the hour" },
      {
        type: "list",
        items: [
          "Booking a single hour and finding that setup eats a third of it.",
          "Showing up without knowing which pieces you need or where they will be published.",
          "Not checking whether the rate includes an operator, lighting and sound or just the room.",
          "Scheduling the session on the day of your flight, with no margin for delays.",
          "Recording without alternative openings to test on Meta Ads.",
          "Forgetting spare clothes and wearing patterns that cause moiré on camera.",
        ],
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How much does it cost to rent a recording studio by the hour in Madrid?",
        answer: "It depends on equipment and whether an operator and direction are included. As a market reference, between €80 and €150 an hour. At A0Studios we quote per session by service: Recording Only, Recording + Editing or Full Production.",
      },
      {
        type: "faq",
        question: "How many hours do I need to book?",
        answer: "Between 2 and 4 hours for most cases. In 3 hours you record around 12 to 15 vertical clips or 2 or 3 long pieces. Less than 2 hours rarely pays off because of setup time.",
      },
      {
        type: "faq",
        question: "Can I book if I am only in Madrid for a few days?",
        answer: "Yes. Send us your dates and we will propose a slot. The studio is next to Atocha, so it is easy to reach from the high-speed train or the airport.",
      },
      {
        type: "faq",
        question: "Can I receive the edited video outside Spain?",
        answer: "Yes. With Recording + Editing we deliver the cut by download link, with one round of changes, so you do not have to come back to Madrid.",
      },
      {
        type: "paragraph",
        text: "If you will be in Madrid and want to record in a studio directed by someone who makes ads and knows how to sell, write to us at /#contacto with your dates and what you need, and A0Studios will propose the right block of hours.",
      },
    ],
  },
  "grabar-contenido-ecommerce-marcas-dtc-madrid": {
    title: "Filming Content for Ecommerce and DTC Brands in Madrid: Ads and Organic in One Studio Session",
    description:
      "How to film content for ecommerce and DTC brands in Madrid: product ads, unboxing and founder videos, and how to get a month of pieces in one session.",
    readingTime: "5 min read",
    category: "Guide",
    tags: ["Madrid ecommerce", "DTC brands", "product ads", "recording studio", "Meta Ads", "organic content"],
    keyword: "ecommerce video studio madrid",
    excerpt:
      "An online store lives on ads that convert and content that builds trust. What to film, how many pieces one session gives you and how to plan it for Meta Ads and organic.",
    seoTitle: "Filming Content for Ecommerce and DTC Brands in Madrid",
    metaDescription:
      "Filming content for ecommerce and DTC brands in Madrid: which pieces work in ads and organic, and how to get a month of videos from one studio session.",
    heroKicker: "Blog / A0Studios",
    body: [
      {
        type: "paragraph",
        text: "To film content for an ecommerce or DTC brand in Madrid, the approach that works best is a batch of 15 to 20 vertical pieces of 15 to 45 seconds: product in hand, unboxing, a usage test and the founder explaining why the brand exists. It all fits in a 3 to 4 hour session.",
      },
      {
        type: "paragraph",
        text: "At A0Studios, at Ronda de Atocha 16, 7th floor, we film product and people on the same day. Our team directs with an advertiser's mindset: every piece is planned with several openings to test on Meta Ads and TikTok Ads, plus a clean version for organic, not just to make the product look nice.",
      },
      {
        type: "image",
        src: "/blog/grabar-contenido-ecommerce-marcas-dtc-madrid/hero.webp",
        alt: "Cardboard box on a white table, an example of an ecommerce product ready to be filmed",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Why ecommerce content usually falls short" },
      {
        type: "paragraph",
        text: "Many online stores only have catalogue photos and one product video with music. That does little for ads: the buyer needs to see the product in use, hear a real person explain it and understand within the first 3 seconds why it matters to them.",
      },
      {
        type: "paragraph",
        text: "The other problem is volume. An ad account needs to rotate creatives every few weeks because they fatigue. If you film one piece a month, you have nothing to test. With one session per quarter and good planning you have material to rotate for weeks.",
      },
      {
        type: "paragraph",
        text: "Sound matters more than it seems, too. An unboxing filmed in an echoing kitchen sounds cheap. In a studio you control light, background and audio, and every piece shares the same brand look.",
      },
      { type: "heading", level: 2, text: "How to film ecommerce content in a studio" },
      { type: "heading", level: 3, text: "Product in hand and unboxing" },
      {
        type: "paragraph",
        text: "Between 6 and 8 short clips: the product in hand, opening the package, the detail of the material, the size compared with an everyday object. With a Sony A7 on a tripod and an overhead angle for hands, you get two angles per piece without moving anything.",
      },
      { type: "heading", level: 3, text: "Usage test and to-camera review" },
      {
        type: "paragraph",
        text: "One person uses the product and tells what happens, in their own words, without reading. We record 4 or 5 versions with different openings: a question, an objection, a result. These are the ones you later test in ads to see which holds attention best.",
      },
      { type: "heading", level: 3, text: "The founder and the brand story" },
      {
        type: "paragraph",
        text: "A 40-second clip of the founder explaining why they started the brand builds trust and works both on the product page and in retargeting ads. It is the piece almost no store films and the one that sets you apart most.",
      },
      {
        type: "image",
        src: "/blog/grabar-contenido-ecommerce-marcas-dtc-madrid/mid.webp",
        alt: "Woman in a white t-shirt holding a microphone, an example of recording a to-camera review",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Common mistakes when filming for an online store" },
      {
        type: "list",
        items: [
          "Recording one long brand video instead of a batch of short pieces to rotate in ads.",
          "Showing the product without showing it in use or in someone's hands.",
          "Letting someone read a script with no teleprompter, in a radio-ad voice.",
          "Not recording alternative openings so you can test on Meta Ads.",
          "Filming the product with reflections and fingerprints that cannot be removed in editing.",
          "Not deciding beforehand which piece goes on the product page, which in ads and which in organic.",
        ],
      },
      {
        type: "paragraph",
        text: "A studio pays off if you run campaigns regularly, if you have several products or if you want visual consistency across the store. For a single product and a quick test, you can start with a phone and window light.",
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "Which videos does an ecommerce need to advertise?",
        answer:
          "Between 8 and 10 clips of the product in use, 4 or 5 to-camera reviews with different openings and one founder piece. That gives you material to test several creatives on Meta Ads and TikTok Ads.",
      },
      {
        type: "faq",
        question: "How long is a session for a DTC brand?",
        answer:
          "Between 3 and 4 hours for a small range. In that time you record 15 to 20 vertical clips. If you have many products, it is better to split it into two sessions by product family.",
      },
      {
        type: "faq",
        question: "Can physical products be filmed in the studio?",
        answer:
          "Yes. You bring the product and samples, and we set up background, light and angles. If the product is large or fragile, tell us beforehand so we can prepare the space and access to the 7th floor.",
      },
      {
        type: "faq",
        question: "Do you handle editing for ads?",
        answer:
          "With Recording + Editing we cut the pieces in DaVinci Resolve and CapCut, with subtitles and the formats each platform needs. With Full Production we add the script and opening variants.",
      },
      {
        type: "paragraph",
        text: "If you run an ecommerce or DTC brand in Madrid and want to film a month of ads and content in one morning, write to us at /#contacto with your product and ideal customer, and A0Studios will propose a content plan before you book.",
      },
    ],
  },
  "grabar-contenido-agencias-marketing-madrid": {
    title: "Recording Studio for Marketing Agencies in Madrid: Film Your Clients' Ads Without Building a Set",
    description:
      "Recording studio for marketing agencies in Madrid: how to film ads and content for several clients in a penthouse studio with technical direction, without building your own set.",
    readingTime: "5 min read",
    category: "Guide",
    tags: ["Madrid marketing agencies", "recording studio", "client ads", "Meta Ads", "video production", "organic content"],
    keyword: "studio for marketing agencies madrid",
    excerpt:
      "If your agency sells video to clients but has no set, renting a directed studio is cheaper than building one. How to plan the session and what to ask for.",
    seoTitle: "Recording Studio for Marketing Agencies in Madrid",
    metaDescription:
      "Recording studio for marketing agencies in Madrid: film ads and content for several clients in one session, with technical direction and no need to build a set.",
    heroKicker: "Blog / A0Studios",
    body: [
      {
        type: "paragraph",
        text: "A marketing agency in Madrid that sells video to its clients does not need its own set: it is cheaper to book a studio in blocks of 3 or 4 hours and film the pieces for 2 or 3 clients in that time. What it does need is someone directing the session with an advertiser's mindset.",
      },
      {
        type: "paragraph",
        text: "At A0Studios, at Ronda de Atocha 16, 7th floor, we work with agencies that bring the brief and the clients. Our team directs the shoot thinking about which piece will run as an ad and which hook holds best on Meta Ads and TikTok Ads, so the agency delivers material it can test, not just material that looks good.",
      },
      {
        type: "image",
        src: "/blog/grabar-contenido-agencias-marketing-madrid/hero.webp",
        alt: "Man standing in front of a team seated with laptops around a table, a marketing agency meeting",
        width: 1920,
        height: 1280,
        priority: true,
      },
      { type: "heading", level: 2, text: "Why an agency should not build its own set" },
      {
        type: "paragraph",
        text: "Your own set needs rent, lighting, backdrops, audio, a decent camera and someone to maintain it. With two or three sessions a month, the investment pays back poorly and the space sits idle the rest of the time. An hourly studio turns that fixed cost into a per-project cost you can pass on to the client.",
      },
      {
        type: "paragraph",
        text: "The second problem is judgement. An agency usually has a good strategist and a good editor, but not always someone who can direct a client who has never been in front of a camera. That is where sessions get lost: stiff takes, weak openings and three weeks of editing to fix it.",
      },
      {
        type: "paragraph",
        text: "Then there is team time. Every hour your community manager spends rigging lights is an hour not spent on client accounts. In a studio you arrive, film and leave.",
      },
      { type: "heading", level: 2, text: "How to plan an agency session in a studio" },
      { type: "heading", level: 3, text: "Group several clients in the same block" },
      {
        type: "paragraph",
        text: "A 4-hour block fits two clients with 8 to 10 clips each if the brief is closed. Changing backdrop and outfit takes about 20 minutes. It helps to order clients from simplest to most complex so you do not start the day with the hardest one.",
      },
      { type: "heading", level: 3, text: "Arrive with the brief and the openings decided" },
      {
        type: "paragraph",
        text: "For each piece, bring the script and at least three different openings: a question, an objection and a result. Recording all three costs a couple of extra minutes and gives you something to test in the ad account. With a teleprompter, the client reads without looking like they are reading.",
      },
      { type: "heading", level: 3, text: "Decide who edits before you film" },
      {
        type: "paragraph",
        text: "If your team edits, we hand over the footage with clean audio and a slate for each piece so you do not waste time sorting files. If you prefer to outsource it, with Recording + Editing we cut in DaVinci Resolve and CapCut with subtitles and each platform's formats.",
      },
      {
        type: "image",
        src: "/blog/grabar-contenido-agencias-marketing-madrid/mid.webp",
        alt: "Camera mounted on a tripod in front of a white backdrop in a recording studio",
        width: 1920,
        height: 1282,
      },
      { type: "heading", level: 2, text: "Common mistakes when an agency films in a studio" },
      {
        type: "list",
        items: [
          "Booking the studio without a closed script or client brief.",
          "Bringing the client unprepared: without knowing what they will say, they record slowly and stiffly.",
          "Recording only one opening per piece and having nothing to test in ads.",
          "Fitting four clients into a 3-hour block and running out of time for all of them.",
          "Not agreeing with the studio on the delivery format and file names.",
          "Going only for aesthetics and forgetting which platform and goal each piece is for.",
        ],
      },
      {
        type: "paragraph",
        text: "It makes sense if you film for clients at least once a month or if you want to offer video as a service without investing in equipment. If a client only needs one piece a year, a phone and good light may be enough.",
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "Can I film several of my agency's clients in one session?",
        answer:
          "Yes. A 4-hour block fits two clients if the brief is closed. We book time in blocks and arrange the order to minimise backdrop changes.",
      },
      {
        type: "faq",
        question: "Do you put your name on the material we deliver?",
        answer:
          "No. The material is handed over for the agency to use as its own. We agree beforehand how to present it to the client so everything is clear.",
      },
      {
        type: "faq",
        question: "What equipment and delivery format do you offer?",
        answer:
          "We film with Sony A7 cameras, lavalier microphones and a teleprompter. We deliver files named per piece, vertical or horizontal as you ask, with clean audio.",
      },
      {
        type: "faq",
        question: "How much does a session cost for an agency?",
        answer:
          "It depends on the block of hours and whether it includes editing or full production. Write to us with the number of clients and pieces and we will propose a fixed quote before you book.",
      },
      {
        type: "paragraph",
        text: "If your agency needs to film ads and content for clients in Madrid without building a set, write to us at /#contacto with the number of clients and pieces, and A0Studios will propose the block of hours and the session plan.",
      },
    ],
  },
  "grabar-podcast-ingles-madrid-estudio-logistica": {
    title: "Record an English Podcast in Madrid: Studio, Equipment and Logistics for International Guests",
    description:
      "How to record an English-language podcast in Madrid: studio, equipment, session length and logistics for founders, expats and international guests.",
    readingTime: "5 min read",
    category: "Guide",
    tags: ["English podcast Madrid", "podcast studio", "expats", "founders", "video recording", "LinkedIn content"],
    keyword: "record english podcast madrid",
    excerpt:
      "What equipment, time and logistics you need to record an English-language podcast in a Madrid studio, with international guests and clips ready for social.",
    seoTitle: "Record an English Podcast in Madrid: Studio and Logistics",
    metaDescription:
      "Record an English podcast in Madrid: equipment, session length and logistics for international guests in a studio with technical direction.",
    heroKicker: "Blog / A0Studios",
    body: [
      {
        type: "paragraph",
        text: "To record an English-language podcast in Madrid you need a studio with controlled acoustics, at least 2 studio microphones, one camera per person if you want video, and a 2 to 3 hour block for a 40-minute episode. The rest is logistics: arriving on time, having a question script and agreeing the delivery format before you start.",
      },
      {
        type: "paragraph",
        text: "At A0Studios, at Ronda de Atocha 16, 7th floor, we record English-language podcasts with founders, expats and international teams. Our team directs the session thinking about which clips will work on LinkedIn, Instagram and YouTube, not just whether the audio sounds good.",
      },
      {
        type: "image",
        src: "/blog/grabar-podcast-ingles-madrid-estudio-logistica/hero.webp",
        alt: "Studio condenser microphone for recording a podcast",
        width: 1920,
        height: 1280,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "What an English-language podcast recorded in Madrid needs",
      },
      {
        type: "paragraph",
        text: "Language does not change the equipment, but it does change the logistics. If the guest lives abroad or has just landed, you need to coordinate times, building access and what gets recorded in each block. A 40-minute episode needs about 2 hours of session between setup, sound check and recording.",
      },
      {
        type: "paragraph",
        text: "With two people at the table, the usual setup is 2 dynamic or condenser microphones on boom arms, closed headphones for each person, and one camera per person plus a wide shot. That setup gives you one full episode and 8 to 10 vertical clips.",
      },
      {
        type: "paragraph",
        text: "The second point is the working language. If the host or the guest are not native speakers, it helps to record with a closed question script and leave room to repeat sentences without pressure. Stopping an answer and redoing it in the studio is normal.",
      },
      {
        type: "heading",
        level: 2,
        text: "How to organise a session with international guests",
      },
      {
        type: "heading",
        level: 3,
        text: "Lock in times and arrival in advance",
      },
      {
        type: "paragraph",
        text: "Ask guests to arrive 10 minutes early with ID or a passport for building access. A 3-hour session that starts 30 minutes late loses a whole clip. If they travel from another city, we recommend booking in the morning to avoid afternoon traffic in the centre. For more on arriving and booking, read /en/blog/content-studio-madrid-near-atocha-how-to-book.",
      },
      {
        type: "heading",
        level: 3,
        text: "Prepare a question script and three possible openings",
      },
      {
        type: "paragraph",
        text: "Bring 10 or 12 ordered questions, plus three ways to open the episode: a question, a bold statement and an anecdote. Recording all three takes a couple of minutes and gives you options for the clip that goes to ads or LinkedIn.",
      },
      {
        type: "heading",
        level: 3,
        text: "Decide the delivery format before recording",
      },
      {
        type: "paragraph",
        text: "Define whether you want audio only, horizontal video for YouTube or both, and whether you need English subtitles. With Recording + Editing we cut in DaVinci Resolve and CapCut, with subtitles and formats per platform. With Recording Only we hand over the footage with clean audio and a slate per episode. For multi-camera setups, see /en/blog/multicamera-podcast-recording-madrid.",
      },
      {
        type: "image",
        src: "/blog/grabar-podcast-ingles-madrid-estudio-logistica/mid.webp",
        alt: "Host and guest wearing headphones talking during a podcast recording",
        width: 1920,
        height: 1204,
      },
      {
        type: "heading",
        level: 2,
        text: "Common mistakes when recording an English podcast in Madrid",
      },
      {
        type: "list",
        items: [
          "Arriving without a question script and improvising the first 15 minutes.",
          "Recording with echo because the room has no acoustic treatment.",
          "Not testing each microphone before starting the episode.",
          "Not agreeing the subtitle language or delivery format in advance.",
          "Booking only 1 hour and having no room to redo takes.",
          "Thinking only about audio and forgetting that vertical clips are what gives the most reach.",
        ],
      },
      {
        type: "paragraph",
        text: "It makes sense if you will publish at least one episode a month or want to use the podcast as a content engine for LinkedIn and Meta Ads. For a one-off episode, recording remotely with good microphones may be enough.",
      },
      {
        type: "heading",
        level: 2,
        text: "Frequently asked questions",
      },
      {
        type: "faq",
        question: "How long does a session to record an English podcast take?",
        answer:
          "Between 2 and 3 hours for a 40-minute episode, counting setup, sound check and retakes. If you want two episodes back to back, we recommend a 4-hour block.",
      },
      {
        type: "faq",
        question: "Do I need to bring my own equipment?",
        answer:
          "No. We provide microphones, Sony A7 cameras, a teleprompter and lighting. You only need to bring your question script and your guest.",
      },
      {
        type: "faq",
        question: "Can you direct the session in English?",
        answer:
          "Yes. The session can be directed and run in English, and the delivery can include English subtitles if you ask beforehand.",
      },
      {
        type: "faq",
        question: "Where is the studio and how do I get there?",
        answer:
          "We are at Ronda de Atocha 16, 7th floor, in central Madrid, a few minutes from Atocha station. We send access directions when you confirm the booking.",
      },
      {
        type: "paragraph",
        text: "If you want to record an English-language podcast in Madrid, write to us at /#contacto with the number of guests and the format you want, and A0Studios will propose the block of hours and the session plan.",
      },
    ],
  },
  "grabar-contenido-coaches-mentores-madrid": {
    title: "Recording Content for Coaches and Mentors in Madrid: How to Prepare the Session",
    description:
      "How to record content as a coach or mentor in a Madrid studio: which pieces to shoot in one session, how to structure them and which mistakes to avoid to sell more.",
    readingTime: "5 min read",
    category: "Guide",
    tags: ["coaches", "mentors", "Madrid studio", "personal brand", "organic content", "ads"],
    keyword: "coach video content madrid",
    excerpt:
      "A coach sells trust before method. What to record in a single Madrid session to leave with organic content, a sales video and pieces for ads.",
    seoTitle: "Video Content for Coaches and Mentors in Madrid",
    metaDescription:
      "Video content for coaches and mentors in Madrid: which pieces to record in a 3-hour session, how to structure them and which mistakes to avoid to sell more.",
    heroKicker: "Blog / A0Studios",
    body: [
      {
        type: "paragraph",
        text: "If you are a coach or mentor and want to record content in Madrid, what works best is a 3-hour session with three clear pieces: a 2 to 3 minute introduction video, 8 to 12 short clips for social media and 2 or 3 different openings for ads. That covers organic and paid without rebuilding the set.",
      },
      {
        type: "paragraph",
        text: "At A0Studios, at Ronda de Atocha 16, 7th floor, our team works with professionals who sell their judgement. We direct the session with an ads and sales mindset: what matters is not a pretty shot, but that whoever watches understands within 10 seconds who you are for and what changes with you.",
      },
      {
        type: "image",
        src: "/blog/grabar-contenido-coaches-mentores-madrid/hero.webp",
        alt: "Person holding a camera in front of a ring light to record video",
        width: 1920,
        height: 1079,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Why a coach needs video before a website",
      },
      {
        type: "paragraph",
        text: "A coach or mentor doesn't sell something you can touch. They sell trust in a person. That's why video weighs more than any text: in two minutes people see how you speak, how you listen and whether your way of explaining fits them.",
      },
      {
        type: "paragraph",
        text: "Video is also reusable. One session gives you pieces for Instagram, LinkedIn and YouTube, plus a sales page or a discovery call. Whoever lands on that call has already seen you speak several times, and the conversation starts much further along.",
      },
      {
        type: "paragraph",
        text: "The usual mistake is recording at home with window light and phone audio. That can do for a casual post, but when you sell programs worth hundreds or thousands of euros, sound and image quality are part of the trust.",
      },
      {
        type: "heading",
        level: 2,
        text: "How to organise the recording session",
      },
      {
        type: "heading",
        level: 3,
        text: "Start with the introduction video",
      },
      {
        type: "paragraph",
        text: "It's the most important piece and the hardest, so it goes first, when your energy is highest. Structure: who you help, what problem they have, what method you use and what the next step is. Use a teleprompter so you don't lose the thread, and repeat until it sounds like conversation, not reading.",
      },
      {
        type: "heading",
        level: 3,
        text: "Record short clips with one idea each",
      },
      {
        type: "paragraph",
        text: "After the introduction video, record 8 to 12 clips of 30 to 60 seconds. Each one with a single idea: a mistake you see repeated, a question you always get, a belief you want to challenge. With a vertical Sony A7 and a lavalier microphone, you can shoot one clip every 5 minutes if the script is clear.",
      },
      {
        type: "heading",
        level: 3,
        text: "Leave a block for ads",
      },
      {
        type: "paragraph",
        text: "If you plan to invest in Meta Ads or TikTok Ads, record the same idea with three different openings: a question, a strong statement and a concrete example. It takes 10 extra minutes and gives you material to test which hook works. To see how to split the hours, read /en/blog/how-long-recording-session-lasts.",
      },
      {
        type: "image",
        src: "/blog/grabar-contenido-coaches-mentores-madrid/mid.webp",
        alt: "Man with a laptop and phone in an online training session",
        width: 1200,
        height: 799,
      },
      {
        type: "heading",
        level: 2,
        text: "Common mistakes when recording content as a coach or mentor",
      },
      {
        type: "list",
        items: [
          "Talking about your method without saying who it's for or what problem it solves.",
          "Recording one long video instead of short pieces you can publish over weeks.",
          "Reading the script straight through instead of speaking from key ideas.",
          "Promising results with no concrete examples or clear limits.",
          "Changing outfit, background and light between pieces, so the feed looks like several different people.",
          "Forgetting the ad footage and having to book a second day.",
        ],
      },
      {
        type: "paragraph",
        text: "It makes sense if you offer a mid-to-high ticket program or mentoring and need people to trust you before they reach your call. If you don't have a defined offer yet, sort out the message first and then record.",
      },
      {
        type: "heading",
        level: 2,
        text: "Frequently asked questions",
      },
      {
        type: "faq",
        question: "How long is a recording session for a coach?",
        answer:
          "Between 2 and 3 hours for an introduction piece, 8 to 12 short clips and the openings for ads. If you also want a course or masterclass, it's better to book a separate 4-hour block.",
      },
      {
        type: "faq",
        question: "Can I record if I have never been on camera?",
        answer:
          "Yes. We start with the short video and build up. With a teleprompter and a script of key ideas, nerves fade quickly, and the first takes can be repeated without pressure.",
      },
      {
        type: "faq",
        question: "Do I need to bring my own equipment?",
        answer:
          "No. We provide Sony A7 cameras, microphones, lighting and a teleprompter. You only bring the script, your outfit and the ideas for the clips.",
      },
      {
        type: "faq",
        question: "Do you deliver edited videos?",
        answer:
          "It depends on the service. With Recording Only you take the raw footage. With Recording + Editing we edit in DaVinci Resolve and CapCut with subtitles and formats per platform. With Full Production we also handle the script and strategy.",
      },
      {
        type: "paragraph",
        text: "If you are a coach or mentor and want to record in Madrid, write to us at /#contacto with your offer and the kind of pieces you need, and A0Studios will propose the session plan.",
      },
    ],
  },
  "grabar-contenido-asesores-financieros-fintech-madrid": {
    title: "Recording Content for Financial Advisors and Fintech in Madrid: How to Prepare the Session",
    description:
      "How to record content as a financial advisor or fintech in a Madrid studio: which pieces to shoot, how to explain money without jargon and what to watch in ads.",
    readingTime: "5 min read",
    category: "Guide",
    tags: ["financial advisors", "fintech", "Madrid studio", "organic content", "ads", "personal brand"],
    keyword: "financial advisor video madrid",
    excerpt:
      "In finance, trust sells before the product does. What to record in a single Madrid session to leave with an introduction video, educational clips and openings for ads.",
    seoTitle: "Video Content for Financial Advisors and Fintech in Madrid",
    metaDescription:
      "Video content for financial advisors and fintech in Madrid: which pieces to record in a 3-hour session, how to explain money clearly and what to avoid.",
    heroKicker: "Blog / A0Studios",
    body: [
      {
        type: "paragraph",
        text: "If you are a financial advisor or work at a fintech and want to record content in Madrid, what works best is a 3-hour session with three pieces: a 2 to 3 minute introduction video, 8 to 12 educational clips of 30 to 60 seconds and 2 or 3 different openings for ads. One morning gives you material for weeks of organic posting and for paid tests.",
      },
      {
        type: "paragraph",
        text: "At A0Studios, at Ronda de Atocha 16, 7th floor, our team works with professionals who sell judgement, and money is the extreme case: nobody hands their savings to someone they have never seen speak. We direct the session with an ads and sales mindset. We are not after a pretty shot, we are after whoever watches understanding within 10 seconds who you help and why they can trust you.",
      },
      {
        type: "image",
        src: "/blog/grabar-contenido-asesores-financieros-fintech-madrid/hero.webp",
        alt: "Person sitting in front of a bookshelf during a shoot with a Sony FS7 cinema camera",
        width: 1920,
        height: 1080,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Why video weighs more in finance than in other sectors",
      },
      {
        type: "paragraph",
        text: "A financial advisor, an independent manager or a fintech sells something the client cannot try before deciding. The only thing they can judge is the person or the brand. That's why two minutes of video with good image and good sound do more for trust than a whole page of text listing your credentials.",
      },
      {
        type: "paragraph",
        text: "Also, almost everyone in finance explains badly. Jargon, acronyms and long sentences are everywhere. If you can explain a question about savings, mortgages or investing in 45 seconds without jargon, you already stand out from most of your competition in Madrid.",
      },
      {
        type: "paragraph",
        text: "And there is a limit worth setting from the script stage: this content is educational, not a promise of returns. At a fintech or a regulated firm, the sensible move is to have whoever handles compliance review the texts before the session. Fixing a script is cheaper than re-recording.",
      },
      {
        type: "heading",
        level: 2,
        text: "How to organise the recording session",
      },
      {
        type: "heading",
        level: 3,
        text: "Start with the introduction video",
      },
      {
        type: "paragraph",
        text: "It goes first, when your energy is highest. Structure: who you help, what problem that person has with their money, how you work and what the next step is. Use a teleprompter so you don't lose the thread, and repeat until it sounds like conversation. If it's your first time on camera, 5 or 6 takes are normal.",
      },
      {
        type: "heading",
        level: 3,
        text: "Record educational clips with a single idea",
      },
      {
        type: "paragraph",
        text: "Between 8 and 12 clips, each answering a real client question: what to do with idle savings, how to read a payslip, what happens with a fund's fees. With a vertical Sony A7 and a lavalier microphone, one clip every 5 minutes is a realistic pace if the script is clear. Better to skip figures you can't back up: explain the reasoning, don't promise results.",
      },
      {
        type: "heading",
        level: 3,
        text: "Reserve a block for ads",
      },
      {
        type: "paragraph",
        text: "If you plan to invest in Meta Ads or TikTok Ads to win clients, record the same idea with three openings: a question, an uncomfortable statement and a generic example with nobody's real data. It's 10 extra minutes and gives you material to test which hook works. To split the hours well, read /en/blog/how-long-recording-session-lasts.",
      },
      {
        type: "image",
        src: "/blog/grabar-contenido-asesores-financieros-fintech-madrid/mid.webp",
        alt: "Person gesturing during a meeting with a laptop on the table",
        width: 1200,
        height: 800,
      },
      {
        type: "heading",
        level: 2,
        text: "Common mistakes when recording financial content",
      },
      {
        type: "list",
        items: [
          "Using jargon and acronyms the client doesn't understand instead of everyday examples.",
          "Promising returns or results, which can also get you into trouble with regulation.",
          "Reading the script straight through in a press-release tone instead of speaking from key ideas.",
          "Recording one long video instead of short pieces you can publish over weeks.",
          "Changing outfit, background and light between pieces, so the profile looks like several different people.",
          "Leaving the compliance review until after recording and having to redo takes.",
        ],
      },
      {
        type: "paragraph",
        text: "It makes sense if your service has a mid-to-high ticket or a long client relationship, and if your acquisition depends on someone trusting you before the first call. If you aren't yet clear on who you serve, define the client first and then record.",
      },
      {
        type: "heading",
        level: 2,
        text: "Frequently asked questions",
      },
      {
        type: "faq",
        question: "How long is a recording session for a financial advisor?",
        answer:
          "Between 2 and 3 hours for an introduction video, 8 to 12 educational clips and the openings for ads. If you also want a masterclass or a course, it's better to book a separate 4-hour block.",
      },
      {
        type: "faq",
        question: "Can I record if I work at a regulated firm?",
        answer:
          "Yes, but the script should first go past whoever handles your company's compliance. We record what you bring approved and help it sound clear and natural.",
      },
      {
        type: "faq",
        question: "Do I need to bring my own equipment?",
        answer:
          "No. We provide Sony A7 cameras, microphones, lighting and a teleprompter. You only bring the script, your outfit and the ideas for the clips.",
      },
      {
        type: "faq",
        question: "Do you deliver edited videos?",
        answer:
          "It depends on the service. With Recording Only you take the raw footage. With Recording + Editing we edit in DaVinci Resolve and CapCut with subtitles and formats per platform. With Full Production we also handle the script and strategy.",
      },
      {
        type: "paragraph",
        text: "If you are a financial advisor or fintech and want to record in Madrid, write to us at /#contacto with your service and the kind of pieces you need, and A0Studios will propose the session plan.",
      },
    ],
  },
  "grabar-contenido-arquitectos-interioristas-madrid": {
    title: "Recording Content for Architects and Interior Designers in Madrid: How to Prepare the Session",
    description:
      "How to record content as an architect or interior designer in a Madrid studio: which pieces to shoot, how to explain your method and how to prepare ad openings.",
    readingTime: "5 min read",
    category: "Guide",
    tags: ["architects", "interior design", "Madrid studio", "organic content", "ads", "personal brand"],
    keyword: "architect video content madrid",
    excerpt:
      "An architecture or interior design firm sells judgement before drawings. What to record in a single Madrid session to leave with an introduction video, method clips and openings for ads.",
    seoTitle: "Video Content for Architects and Interior Designers in Madrid",
    metaDescription:
      "Video content for architects and interior designers in Madrid: which pieces to record in a 3-hour session, how to explain your method and what to avoid.",
    heroKicker: "Blog / A0Studios",
    body: [
      {
        type: "paragraph",
        text: "If you are an architect or interior designer and want to record content in Madrid, what works best is a 3-hour session with three pieces: a 2 to 3 minute introduction video, 8 to 10 clips of 30 to 60 seconds about your method and 2 or 3 different openings for ads. One morning gives you material for weeks of organic posting and for paid tests.",
      },
      {
        type: "paragraph",
        text: "At A0Studios, at Ronda de Atocha 16, 7th floor, our team works with professionals who sell judgement. A client about to renovate a home or open a premises does not compare square metres, they compare who they trust. We direct the session with an ads and sales mindset: we are not after a pretty shot, we are after whoever watches understanding within 10 seconds what you do, for whom and how you work.",
      },
      {
        type: "image",
        src: "/blog/grabar-contenido-arquitectos-interioristas-madrid/hero.webp",
        alt: "Group of people sitting around a table working on a project",
        width: 1920,
        height: 1281,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Why video works so well in architecture and interior design",
      },
      {
        type: "paragraph",
        text: "Your portfolio shows the result, but not how you work. And the client of a renovation or interior design project fears the same things: delays, cost overruns and having a taste imposed on them that is not theirs. Two minutes of video explaining what the process looks like, how long it usually takes and how you decide with the client answer that fear better than any photo gallery.",
      },
      {
        type: "paragraph",
        text: "Also, almost the whole sector shows images without a voice. If you appear explaining why a layout works or why a material ages better, you stand out from most Madrid firms with very little effort.",
      },
      {
        type: "paragraph",
        text: "A practical note: the studio is ideal for the part where you talk to camera. Footage of finished work is shot at the project itself, then mixed in editing with what we record here.",
      },
      {
        type: "heading",
        level: 2,
        text: "How to organise the recording session",
      },
      {
        type: "heading",
        level: 3,
        text: "Start with the introduction video",
      },
      {
        type: "paragraph",
        text: "It goes first, when your energy is highest. Structure: who you help, what problem that person has with their space, what your process looks like in three steps and what the next step is. Use a teleprompter so you don't lose the thread, and repeat until it sounds like conversation. If it's your first time on camera, 5 or 6 takes are normal.",
      },
      {
        type: "heading",
        level: 3,
        text: "Record method clips with a single idea",
      },
      {
        type: "paragraph",
        text: "Between 8 and 10 clips, each answering a real client question: how much it costs to renovate a flat in Madrid, which permit is needed, what gets decided before works start. With a vertical Sony A7 and a lavalier microphone, one clip every 5 minutes is a realistic pace if the script is clear. If you can't give an exact figure, give a range and explain what it depends on.",
      },
      {
        type: "heading",
        level: 3,
        text: "Reserve a block for ads",
      },
      {
        type: "paragraph",
        text: "If you plan to invest in Meta Ads to win projects, record the same idea with three openings: a question, an uncomfortable statement and a generic example with no client's data. It's 10 extra minutes and gives you material to test which hook works. To split the hours well, read /en/blog/how-long-recording-session-lasts.",
      },
      {
        type: "image",
        src: "/blog/grabar-contenido-arquitectos-interioristas-madrid/mid.webp",
        alt: "Person holding an orange material sample over a desk with design swatches",
        width: 1920,
        height: 1396,
      },
      {
        type: "heading",
        level: 2,
        text: "Common mistakes when recording architecture and interior design content",
      },
      {
        type: "list",
        items: [
          "Using technical terms the client doesn't understand instead of explaining what changes in their daily life.",
          "Showing only the final result and not the process, which is what reduces the fear of hiring.",
          "Reading the script straight through, in a project-report tone, instead of speaking from key ideas.",
          "Recording one long video instead of short pieces you can publish over weeks.",
          "Changing outfit, background and light between pieces, so the profile looks like several different people.",
          "Showing client projects without their written permission.",
        ],
      },
      {
        type: "paragraph",
        text: "It makes sense if your service has a mid-to-high ticket and your acquisition depends on someone trusting you before the first visit. If you aren't yet clear on which kind of project you want to attract, define the client first and then record.",
      },
      {
        type: "heading",
        level: 2,
        text: "Frequently asked questions",
      },
      {
        type: "faq",
        question: "How long is a recording session for an architect or interior designer?",
        answer:
          "Between 2 and 3 hours for an introduction video, 8 to 10 method clips and the openings for ads. If you also want a masterclass or a course, it's better to book a separate 4-hour block.",
      },
      {
        type: "faq",
        question: "Can I record my finished projects in the studio?",
        answer:
          "What gets recorded in the studio is you speaking to camera. Footage of the work is shot at the project itself, with the client's permission, and integrated later in editing.",
      },
      {
        type: "faq",
        question: "Do I need to bring my own equipment?",
        answer:
          "No. We provide Sony A7 cameras, microphones, lighting and a teleprompter. You only bring the script, your outfit and the ideas for the clips.",
      },
      {
        type: "faq",
        question: "Do you deliver edited videos?",
        answer:
          "It depends on the service. With Recording Only you take the raw footage. With Recording + Editing we edit in DaVinci Resolve and CapCut with subtitles and formats per platform. With Full Production we also handle the script and strategy.",
      },
      {
        type: "paragraph",
        text: "If you are an architect or interior designer and want to record in Madrid, write to us at /#contacto with your service and the kind of pieces you need, and A0Studios will propose the session plan.",
      },
    ],
  },  "grabar-contenido-psicologos-terapeutas-madrid": {
    title: "Recording Video Content for Psychologists and Therapists in Madrid: How to Prepare the Session",
    description:
      "How to record content as a psychologist or therapist in a Madrid studio: which pieces to shoot, how to speak to camera with warmth and which ethical limits to respect.",
    readingTime: "5 min read",
    category: "Guide",
    tags: ["psychologists", "therapists", "Madrid studio", "organic content", "personal brand", "health"],
    keyword: "video content for therapists madrid",
    excerpt:
      "A patient picks a therapist on trust before credentials. What to record in a single Madrid session to leave with an intro video, educational clips and one respectful ad.",
    seoTitle: "Video Content for Psychologists and Therapists in Madrid",
    metaDescription:
      "Video content for psychologists and therapists in Madrid: which pieces to record in a 3-hour session, how to speak with warmth and which limits to respect.",
    heroKicker: "Blog / A0Studios",
    body: [
      {
        type: "paragraph",
        text: "If you are a psychologist or therapist who wants to record content in Madrid, a 3-hour session with three pieces works best: a 2 to 3 minute intro video, 8 to 10 educational clips of 30 to 60 seconds and one simple ad to attract first consultations. One morning gives you material for weeks of social media and a piece ready to test on Meta Ads.",
      },
      {
        type: "paragraph",
        text: "At A0Studios, at Ronda de Atocha 16, 7th floor, our team works with professionals whose service is chosen on trust. Someone looking for a therapist has often hesitated for weeks and wants to sense, before writing, how you speak and how you work. We direct the session with an advertising and sales mindset, but with a clear limit: we don't sell fear and we don't promise results, we show judgment and warmth.",
      },
      {
        type: "image",
        src: "/blog/grabar-contenido-psicologos-terapeutas-madrid/hero.webp",
        alt: "Bright office with a sofa and desk, a calm setting for a consultation",
        width: 1920,
        height: 1440,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Why video works so well in psychology and therapy",
      },
      {
        type: "paragraph",
        text: "Text on your website explains your approach, but it doesn't convey your voice, your pace or how you listen. That is exactly what a potential patient needs to check. Two minutes of video explaining who you help and what a first session is like lowers the barrier to taking the step, because they already know you.",
      },
      {
        type: "paragraph",
        text: "The sector is also full of very generic content: motivational quotes and symptom lists with no context. If you record thinking about a concrete question a real patient asks you, you stand out without needing to be controversial.",
      },
      {
        type: "paragraph",
        text: "An important point: patients are never recorded and no real consultation with anyone's data is shown. What gets recorded in the studio is you speaking to camera, with a polished background standing in for your office.",
      },
      {
        type: "heading",
        level: 2,
        text: "How to organize the recording session",
      },
      {
        type: "heading",
        level: 3,
        text: "Start with the intro video",
      },
      {
        type: "paragraph",
        text: "It goes first, when you have the most energy. Structure: who you support, what usually happens when they arrive, what the first session looks like and how to book. Use the teleprompter so you don't lose the thread, but read slowly and with pauses. If it's your first time on camera, 5 or 6 takes are normal and the last one is usually the best.",
      },
      {
        type: "heading",
        level: 3,
        text: "Record educational clips with a single idea",
      },
      {
        type: "paragraph",
        text: "8 to 10 clips, each answering a real question: when it makes sense to ask for help, what happens in a first session, how long a process usually takes. With a Sony A7 shooting vertical and a lavalier mic, one clip every 5 minutes is a realistic pace if the script is clear. If you can't give an exact figure, give a range and explain what it depends on.",
      },
      {
        type: "heading",
        level: 3,
        text: "Set aside a block for a respectful ad",
      },
      {
        type: "paragraph",
        text: "If you plan to invest in ads to attract first consultations, record a 30 to 45 second piece with two different openings: a question and a calm statement. That is 10 more minutes. Always check each platform's health advertising policies, which limit what you can claim. To split the hours well, read /en/blog/how-long-recording-session-lasts.",
      },
      {
        type: "image",
        src: "/blog/grabar-contenido-psicologos-terapeutas-madrid/mid.webp",
        alt: "Person wearing headphones recording a conversation with a microphone in front of a laptop",
        width: 1920,
        height: 1280,
      },
      {
        type: "heading",
        level: 2,
        text: "Common mistakes when recording psychology and therapy content",
      },
      {
        type: "list",
        items: [
          "Using clinical jargon the patient doesn't understand instead of explaining with everyday examples.",
          "Promising results or improvement timelines, which also clashes with professional codes of ethics and with ad policies.",
          "Giving advice as if it were a diagnosis for anyone watching the video.",
          "Reading the script straight through in a lecture tone, instead of speaking the way you would in session.",
          "Recording one long video instead of short pieces you can publish over weeks.",
          "Showing real cases or recognizable anecdotes about patients, even if you change the name.",
        ],
      },
      {
        type: "paragraph",
        text: "It makes sense if your calendar depends on people finding you and trusting you before the first session. If you aren't yet clear on which kind of patient you want to support, define that profile first and then record.",
      },
      {
        type: "heading",
        level: 2,
        text: "Frequently asked questions",
      },
      {
        type: "faq",
        question: "How long is a recording session for a psychologist or therapist?",
        answer:
          "Between 2 and 3 hours for an intro video, 8 to 10 educational clips and an ad with two openings. If you also want a talk or a course, it's better to book a separate 4-hour block.",
      },
      {
        type: "faq",
        question: "Can I record with my patients or in my own office?",
        answer:
          "We don't recommend it. For confidentiality reasons patients are not recorded. In the studio you speak to camera against a polished background, and the privacy of your practice stays intact.",
      },
      {
        type: "faq",
        question: "Do I need to bring my own equipment?",
        answer:
          "No. We provide Sony A7 cameras, microphones, lighting and a teleprompter. You only bring the script, your outfit and the ideas for the clips.",
      },
      {
        type: "faq",
        question: "Do you deliver edited videos?",
        answer:
          "It depends on the service. With Recording Only you take the raw footage. With Recording + Editing we edit in DaVinci Resolve and CapCut with subtitles and formats per platform. With Full Production we also handle the script and strategy.",
      },
      {
        type: "paragraph",
        text: "If you are a psychologist or therapist and want to record in Madrid, write to us at /#contacto with your service and the kind of pieces you need, and A0Studios will propose the session plan.",
      },
    ],
  },
  "grabar-contenido-entrenadores-personales-fitness-madrid": {
    title: "Recording Video Content for Personal Trainers and Fitness Studios in Madrid",
    description:
      "How to record content as a personal trainer or fitness studio in a Madrid studio: which pieces to shoot, how to demonstrate exercises and how to prepare ads.",
    readingTime: "5 min read",
    category: "Guide",
    tags: ["personal trainers", "fitness", "Madrid studio", "organic content", "ads", "personal brand"],
    keyword: "video content for personal trainers madrid",
    excerpt:
      "People hiring a trainer want to see how you correct and how you talk before signing up. What to record in a single Madrid session for an intro, technique clips and a lead-gen ad.",
    seoTitle: "Video Content for Personal Trainers and Gyms in Madrid",
    metaDescription:
      "Video content for personal trainers and fitness studios in Madrid: which pieces to record in a 3-hour session and how to prepare ads that bring in leads.",
    heroKicker: "Blog / A0Studios",
    body: [
      {
        type: "paragraph",
        text: "If you are a personal trainer or run a fitness studio and want to record content in Madrid, a 3-hour session with three pieces works best: a 60 to 90 second intro video, 10 to 12 vertical technique clips of 20 to 45 seconds and two versions of an ad to attract first trial classes. One morning gives you a month of social content and pieces ready to test on Meta Ads.",
      },
      {
        type: "paragraph",
        text: "At A0Studios, at Ronda de Atocha 16, 7th floor, we don't just lend you a well-lit room. Our team directs the session with an advertising and sales mindset: which hook opens the clip, which exercise looks good on camera and which line invites people to book. Fitness has plenty of pretty content and too little that makes someone get in touch.",
      },
      {
        type: "image",
        src: "/blog/grabar-contenido-entrenadores-personales-fitness-madrid/hero.webp",
        alt: "Trainer and client exercising together in a bright gym",
        width: 1920,
        height: 1280,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Why record in a studio if you already have a gym",
      },
      {
        type: "paragraph",
        text: "Recording on the gym floor has a practical problem: machine noise, background music, people crossing the frame and light that changes with the time of day. Audio is the first thing that ruins an explainer video, and in a gym it is very hard to control.",
      },
      {
        type: "paragraph",
        text: "In a studio you control sound, background and light, and the workout looks clean. There is one reasonable exception: if your selling point is your space, shoot the atmosphere scenes there and keep everything that needs clear voice in the studio, such as the intro, the explanations and the ad.",
      },
      {
        type: "heading",
        level: 2,
        text: "How to organize a fitness recording session",
      },
      {
        type: "heading",
        level: 3,
        text: "Start with the spoken intro",
      },
      {
        type: "paragraph",
        text: "It goes first, with high energy and before you break a sweat. Structure: who you train, what they struggle with before starting with you, what the first session looks like and how to book. Use a teleprompter to keep the thread. If it is your first time on camera, 4 or 5 takes are normal.",
      },
      {
        type: "heading",
        level: 3,
        text: "Record technique clips with a single correction",
      },
      {
        type: "paragraph",
        text: "Between 10 and 12 clips, each with one mistake and its fix: the squat where the knees cave in, the deadlift with a rounded back. With a Sony A7 in vertical and a lavalier microphone, one clip every 10 minutes is a realistic pace if you arrive with the exercise clear. Frame the full body and leave room at the top for subtitles.",
      },
      {
        type: "heading",
        level: 3,
        text: "Book a block for the lead-gen ad",
      },
      {
        type: "paragraph",
        text: "Record one 30 to 45 second piece with two different openings: a question and a statement. It takes 15 extra minutes and lets you test which one holds attention longer. Offer one concrete action, such as a trial class. To split the hours well, read our guide at /en/blog/how-long-recording-session-lasts.",
      },
      {
        type: "image",
        src: "/blog/grabar-contenido-entrenadores-personales-fitness-madrid/mid.webp",
        alt: "Woman filming herself with a smartphone on a tripod while exercising at home",
        width: 1920,
        height: 1080,
      },
      {
        type: "heading",
        level: 2,
        text: "Common mistakes when recording fitness content",
      },
      {
        type: "list",
        items: [
          "Promising fast results or weight-loss figures you can't guarantee, which ad policies also restrict.",
          "Filming the exercise without explaining why, so anyone copies it without knowing when not to.",
          "Using only wide shots where neither the technique nor the correction can be seen or heard.",
          "Outfits with large logos or busy patterns that distract on camera.",
          "Showing recognizable clients without their written permission.",
          "Recording one long video instead of short pieces to publish over weeks.",
        ],
      },
      {
        type: "paragraph",
        text: "It makes sense if your calendar depends on people finding you and trusting you before the first class. If you haven't yet decided who you want to train, define that profile first and then record.",
      },
      {
        type: "heading",
        level: 2,
        text: "Frequently asked questions",
      },
      {
        type: "faq",
        question: "How long is a recording session for a personal trainer?",
        answer:
          "Between 2 and 3 hours for an intro, 10 to 12 technique clips and an ad with two openings. If you have several trainers or want a full program, book a second 3-hour session.",
      },
      {
        type: "faq",
        question: "Can I bring equipment or a client to demonstrate exercises?",
        answer:
          "Yes. You can bring light weights, bands or a mat, and a client if you have their written consent. Before the session we review what fits on set and what is better recorded at your own studio.",
      },
      {
        type: "faq",
        question: "Do I need to bring recording equipment?",
        answer:
          "No. We provide Sony A7 cameras, microphones, lighting and a teleprompter. You only bring the script, your outfit and the exercises you want to explain.",
      },
      {
        type: "faq",
        question: "Do you deliver edited videos?",
        answer:
          "It depends on the service. With Recording Only you take the raw footage. With Recording + Editing we edit in DaVinci Resolve and CapCut with subtitles and formats per platform. With Full Production we also handle the script and strategy.",
      },
      {
        type: "paragraph",
        text: "If you are a trainer or manage a fitness studio and want to record in Madrid, write to us at /#contacto with your service and the kind of pieces you need, and A0Studios will propose the session plan.",
      },
    ],
  },
  "grabar-contenido-academias-centros-formacion-madrid": {
    title: "Recording Video Content for Academies and Training Centers in Madrid",
    description: "How to record content as an academy or training center in a Madrid studio: which pieces to shoot, sample lessons and how to prepare enrollment ads.",
    readingTime: "5 min read",
    category: "Guide",
    tags: [
      "academies",
      "training centers",
      "Madrid studio",
      "organic content",
      "ads",
      "personal brand",
    ],
    keyword: "video content for training centers madrid",
    excerpt: "Someone shopping for a course wants to see who teaches before paying. What to record in a single Madrid session to leave with an intro, sample lessons and an enrollment ad.",
    seoTitle: "Video Content for Academies and Training in Madrid",
    metaDescription: "Video content for academies and training centers in Madrid: which pieces to record in 3 hours, sample lessons and an ad to attract enrollments.",
    heroKicker: "Blog / A0Studios",
    body: [
      {
        type: "paragraph",
        text: "If you run an academy or training center in Madrid, a 3-hour session with three pieces works best: a 2-minute intro video, 8 to 10 sample-lesson clips of 30 to 60 seconds and one 30 to 45 second ad to attract enrollments. One morning gives you a quarter of social content and material to test ads before you open registration.",
      },
      {
        type: "paragraph",
        text: "At A0Studios, at Ronda de Atocha 16, 7th floor, our team records academies, teachers and training managers. Someone shopping for a course compares several options and wants to see who teaches before paying. We direct the session with an advertising and sales mindset: each piece answers one specific student doubt, not the program sheet.",
      },
      {
        type: "image",
        src: "/blog/grabar-contenido-academias-centros-formacion-madrid/hero.webp",
        alt: "Training room with attendees and a projection screen, a classroom setting",
        width: 1920,
        height: 1280,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Why video sells courses and training better than a brochure",
      },
      {
        type: "paragraph",
        text: "A course is a promise you can't test before buying. Video is the closest thing to a sample class: the student sees how you explain, at what pace and what level you expect. That removes the most common doubt, whether the teacher is worth the price.",
      },
      {
        type: "paragraph",
        text: "The sector also tends to communicate with syllabi and module lists, which look alike across academies. A 45-second clip where you fix a typical student mistake sets you apart without cutting your price.",
      },
      {
        type: "paragraph",
        text: "One caveat: don't promise jobs or specific salaries unless you can prove them. Show the method, the kind of exercises and a result people can check, such as a final project or a real certification.",
      },
      {
        type: "heading",
        level: 2,
        text: "How to organize the recording session",
      },
      {
        type: "heading",
        level: 3,
        text: "Start with the academy intro video",
      },
      {
        type: "paragraph",
        text: "It goes first, while energy is high. Structure: who the course is for, what the student will be able to do at the end, what classes look like and how to book a seat. Use a teleprompter to keep the thread, without reading flat. If there are several teachers, record a 30-second intro for each.",
      },
      {
        type: "heading",
        level: 3,
        text: "Record sample lessons with a single idea",
      },
      {
        type: "paragraph",
        text: "Between 8 and 10 clips, each answering a real doubt: the most common beginner mistake, a shortcut that saves hours, an exam question. With a Sony A7 shooting vertical and a lavalier microphone, one clip every 5 minutes is realistic if the script is clear. If your course uses a whiteboard or a screen, shoot that piece separately with a wider frame.",
      },
      {
        type: "heading",
        level: 3,
        text: "Book a block for the enrollment ad",
      },
      {
        type: "paragraph",
        text: "Record a 30 to 45 second piece with two openings: a student's question and a direct statement about the course outcome. It takes 15 extra minutes and lets you test on Meta Ads which one holds attention better. To split the hours well, read /en/blog/how-long-recording-session-lasts.",
      },
      {
        type: "image",
        src: "/blog/grabar-contenido-academias-centros-formacion-madrid/mid.webp",
        alt: "Black condenser microphone set up to record a trainer's voice",
        width: 1920,
        height: 1280,
      },
      {
        type: "heading",
        level: 2,
        text: "Common mistakes when recording training content",
      },
      {
        type: "paragraph",
        text: "Most mistakes come from recording as if it were a live class, when short video needs a different pace. These are the ones we see most:",
      },
      {
        type: "list",
        items: [
          "Recording the whole class instead of short pieces you can publish for weeks.",
          "Starting with the syllabus instead of the student's doubt.",
          "Promising jobs, salaries or result timelines you can't prove.",
          "Talking to an imaginary room instead of one person looking at the camera.",
          "Using text-heavy slides that can't be read on a phone.",
          "Not recording the teacher: students buy the person before the program.",
        ],
      },
      {
        type: "paragraph",
        text: "It makes sense if your enrollments depend on being found and trusted before registration opens. If you haven't defined your ideal student yet, define it first and then record.",
      },
      {
        type: "heading",
        level: 2,
        text: "Frequently asked questions",
      },
      {
        type: "faq",
        question: "How long is a recording session for an academy or training center?",
        answer: "Between 2 and 3 hours for an intro video, 8 to 10 sample clips and an ad with two openings. If you want to record a full course, book separate 4-hour blocks.",
      },
      {
        type: "faq",
        question: "Can I bring several teachers to the same session?",
        answer: "Yes. With 3 or 4 teachers we plan 30 to 40 minute turns so each records an intro and 2 or 3 clips without waiting around.",
      },
      {
        type: "faq",
        question: "Do I need to bring recording equipment?",
        answer: "No. We provide Sony A7 cameras, microphones, lighting and a teleprompter. You only bring the script, your outfit and the questions for the clips.",
      },
      {
        type: "faq",
        question: "Do you deliver edited videos?",
        answer: "It depends on the service. With Recording Only you take the raw footage. With Recording + Editing we edit in DaVinci Resolve and CapCut with subtitles and platform formats. With Full Production we also handle the script and strategy.",
      },
      {
        type: "paragraph",
        text: "If you run an academy or teach and want to record in Madrid, write to us at /#contacto with your offer and the kind of pieces you need, and A0Studios will propose the session plan.",
      },
    ],
  },
  "grabar-contenido-rrhh-headhunters-madrid": {
    title: "Recording Content for HR Consultancies and Headhunters in Madrid: How to Prepare the Session",
    description:
      "How to record content as an HR consultancy or headhunter in a Madrid studio: which pieces to shoot, how to attract candidates and client companies and how to prepare ads.",
    readingTime: "5 min read",
    category: "Guide",
    tags: ["human resources", "headhunters", "Madrid studio", "organic content", "employer branding", "ads"],
    keyword: "video content for hr consultancies",
    excerpt:
      "A recruitment firm competes on two fronts: candidates and client companies. What to record in a single Madrid session to attract both with an intro video, clips and an ad.",
    seoTitle: "Video Content for HR Consultancies and Headhunters in Madrid",
    metaDescription:
      "Video content for HR consultancies and headhunters in Madrid: which pieces to record in a 3-hour session to attract candidates and client companies.",
    heroKicker: "Blog / A0Studios",
    body: [
      {
        type: "paragraph",
        text: "If you run an HR consultancy or work as a headhunter and want to record content in Madrid, the format that works best is a 3-hour session with three pieces: a 2 to 3 minute intro video for client companies, 8 to 10 clips of 30 to 60 seconds for candidates and one simple ad to win new search mandates. One morning gives you weeks of LinkedIn content and a piece ready to test on Meta Ads.",
      },
      {
        type: "paragraph",
        text: "At A0Studios, at Ronda de Atocha 16, 7th floor, our team works with businesses that sell trust before product. A company handing you a critical vacancy and a candidate sharing their job situation both want to know who they're talking to. We direct the session with an ads and sales mindset: the video isn't there to show off, it's there to get people to contact you.",
      },
      {
        type: "image",
        src: "/blog/grabar-contenido-rrhh-headhunters-madrid/hero.webp",
        alt: "Team of professionals gathered in a modern office discussing a project",
        width: 1920,
        height: 1080,
        priority: true,
      },
      {
        type: "heading",
        level: 2,
        text: "Why video works so well in recruitment and human resources",
      },
      {
        type: "paragraph",
        text: "In recruitment you sell to two audiences at once. Companies need proof that you understand their business and screen well. Candidates need proof that you're serious and worth talking to. A two-minute video does both better than a services page, because your judgment shows when you speak.",
      },
      {
        type: "paragraph",
        text: "Most content in the sector also looks alike: copied job ads and generic interview tips. If you record answering a specific doubt you hear every week, you stand out without having to exaggerate.",
      },
      {
        type: "paragraph",
        text: "One important point: real hiring processes are never recorded, and no candidate or company is named without permission. In the studio you speak to camera about how you work, with a carefully built background that gives the image of a professional office.",
      },
      {
        type: "heading",
        level: 2,
        text: "How to organize the recording session",
      },
      {
        type: "heading",
        level: 3,
        text: "Start with the intro video",
      },
      {
        type: "paragraph",
        text: "It goes first, when you have the most energy. Structure: which kind of company or profile you focus on, what your selection process looks like step by step, what sets you apart and how to contact you. Use a teleprompter so you don't lose the thread, but read slowly. If you don't usually speak to camera, 5 or 6 takes are normal and the last one is usually the best.",
      },
      {
        type: "heading",
        level: 3,
        text: "Record clips built around a single question",
      },
      {
        type: "paragraph",
        text: "Between 8 and 10 clips, each answering a real question: what companies look for today in a sales profile, how to prepare for an interview, how long a process usually takes, which mistakes show up in a CV. With a Sony A7 in vertical and a lavalier microphone, one clip every 5 minutes is a realistic pace with a clear script. If you don't have an exact figure, give a range and explain what it depends on.",
      },
      {
        type: "heading",
        level: 3,
        text: "Reserve a block for a lead-generation ad",
      },
      {
        type: "paragraph",
        text: "If you plan to invest in ads to attract companies or candidates, record one 30 to 45 second piece per audience, each with two different openings: a question and a direct statement. It's 10 extra minutes per piece. To split the hours well, read /en/blog/how-long-recording-session-lasts.",
      },
      {
        type: "image",
        src: "/blog/grabar-contenido-rrhh-headhunters-madrid/mid.webp",
        alt: "Camera with a microphone recording a person speaking",
        width: 1920,
        height: 1440,
      },
      {
        type: "heading",
        level: 2,
        text: "Common mistakes when recording human resources content",
      },
      {
        type: "list",
        items: [
          "Speaking to companies and candidates in the same video, when each audience needs its own piece.",
          "Using HR textbook language instead of explaining with examples from a real process, with no names.",
          "Showing data, screenshots or identifiable cases of candidates or clients.",
          "Promising hiring timelines or results that don't depend only on you.",
          "Reading the script straight through, with no pauses, in a corporate presentation tone.",
          "Recording a single institutional video instead of short pieces you can publish over several weeks.",
        ],
      },
      {
        type: "paragraph",
        text: "It makes sense if your clients and candidates find you through referrals and LinkedIn, and you want them to arrive already knowing how you work. If you haven't yet defined which sector or profile you focus on, define that first and then record.",
      },
      {
        type: "heading",
        level: 2,
        text: "Frequently asked questions",
      },
      {
        type: "faq",
        question: "How long is a recording session for an HR consultancy?",
        answer: "Between 2 and 3 hours for an intro video, 8 to 10 clips and an ad with two openings. If several consultants want to record, it's better to plan 30 to 40 minute turns per person.",
      },
      {
        type: "faq",
        question: "Can I record with several team consultants in the same session?",
        answer: "Yes. With 3 or 4 people we organize turns so each records an intro and 2 or 3 clips without waiting around. That gives you a content bank spread across several faces of the consultancy.",
      },
      {
        type: "faq",
        question: "Do I need to bring my own equipment?",
        answer: "No. We provide Sony A7 cameras, microphones, lighting and a teleprompter. You only bring the script, your outfit and the ideas for the clips.",
      },
      {
        type: "faq",
        question: "Do you deliver edited videos?",
        answer: "It depends on the service. With Recording Only you take the raw footage. With Recording + Editing we edit in DaVinci Resolve and CapCut with subtitles and platform formats. With Full Production we also handle the script and strategy.",
      },
      {
        type: "paragraph",
        text: "If you run an HR consultancy or work as a headhunter and want to record in Madrid, write to us at /#contacto with your sector and the kind of pieces you need, and A0Studios will propose the session plan.",
      },
    ],
  },
  "grabar-contenido-marcas-moda-belleza-madrid": {
    title: "Recording Video Content for Fashion and Beauty Brands in Madrid: Which Pieces and How to Prepare",
    description:
      "How to record content for a fashion or beauty brand in a Madrid studio: which pieces to shoot, how to show product on video and how to prepare ads that sell.",
    readingTime: "5 min read",
    category: "Guide",
    tags: ["fashion", "beauty", "Madrid studio", "organic content", "ads", "product"],
    keyword: "fashion beauty video content madrid",
    excerpt:
      "In fashion and beauty, video decides the purchase: you see how it fits, how it applies, how it moves. What to record in one Madrid session for organic content and ads.",
    seoTitle: "Video Content for Fashion and Beauty Brands in Madrid",
    metaDescription:
      "Video content for fashion and beauty brands in Madrid: which pieces to record in a 4-hour session, how to show product and how to prepare ads.",
    heroKicker: "Blog / A0Studios",
    body: [
      {
        type: "paragraph",
        text: "If you run a fashion or beauty brand and want to record content in Madrid, what works best is a 4-hour session with three types of piece: 10 to 12 vertical product-in-use videos of 15 to 30 seconds, 2 or 3 more crafted ad pieces with several openings and one brand video of 60 to 90 seconds. One morning covers the launch of a collection or a product line.",
      },
      {
        type: "paragraph",
        text: "At A0Studios, at Ronda de Atocha 16, 7th floor, our team directs the session with an ads and sales mindset: we know what to show in the first 3 seconds so someone keeps watching, both organically and on Meta or TikTok Ads. In fashion and beauty, product sells through movement, texture and real use, and that is planned before the camera turns on.",
      },
      {
        type: "image",
        src: "/blog/grabar-contenido-marcas-moda-belleza-madrid/hero.webp",
        alt: "Team preparing a fashion shoot in a studio with a model, camera and lights",
        width: 1920,
        height: 1080,
        priority: true,
      },
      { type: "heading", level: 2, text: "Why video sells more than photos in fashion and beauty" },
      {
        type: "paragraph",
        text: "A photo shows what a garment or product looks like. A video shows how a fabric falls when walking, how a foundation blends into skin or how shiny a lipstick is in natural light. Those are exactly the doubts that stop an online purchase, and a 20-second clip answers them before the customer has to ask.",
      },
      {
        type: "paragraph",
        text: "Product-in-use content is also the most reusable: the same clip works as an organic reel, as an ad and as a video on the product page. If you record it once with intent, you get value from it in three places.",
      },
      {
        type: "paragraph",
        text: "One caveat: at A0Studios we don't do retouched photographic catalogue shoots. We make video for social media and ads, which is where most sales for a small or mid-sized brand are decided today.",
      },
      { type: "heading", level: 2, text: "How to organize the recording session" },
      { type: "heading", level: 3, text: "Prepare product and look order before you arrive" },
      {
        type: "paragraph",
        text: "The most time lost in these sessions is spent searching for garments or products. Bring everything pressed, clean and numbered, with the look order decided. For beauty, bring two units of each product: one to shoot and a spare. With 12 looks or 12 products at 15 minutes per piece, you fill almost the whole session.",
      },
      { type: "heading", level: 3, text: "Record product in use, not product standing still" },
      {
        type: "paragraph",
        text: "Each clip shows one action: buttoning a jacket, turning to show the drape, applying the serum, blending the blush. With a Sony A7, a 50 mm lens and soft controlled light you get a clean finish that also changes little between clips, which matters for a coherent feed. Always shoot vertical and leave margin at the top and bottom for text.",
      },
      { type: "heading", level: 3, text: "Reserve a block for ads with several openings" },
      {
        type: "paragraph",
        text: "Pick the 2 or 3 products you most want to sell and record each with three different openings: a question, a before and after and a direct statement. It's the same product with 3 different first seconds, and it lets you test on Meta Ads which one opens best without recording again. To split the hours well, read /en/blog/how-long-recording-session-lasts.",
      },
      {
        type: "image",
        src: "/blog/grabar-contenido-marcas-moda-belleza-madrid/mid.webp",
        alt: "Creator recording a makeup tutorial with a camera on a tripod",
        width: 1920,
        height: 1080,
      },
      { type: "heading", level: 2, text: "Common mistakes when recording fashion and beauty content" },
      {
        type: "list",
        items: [
          "Recording the product standing still on a backdrop, with no action that explains why to buy it.",
          "Arriving without a look order and spending half the session deciding what to record next.",
          "Changing the light between clips, so the product colour doesn't match from one video to the next.",
          "Promising beauty results the product can't deliver, which ad policies also reject.",
          "Shooting horizontal thinking only of the website and having no vertical footage for reels and TikTok.",
          "Using copyrighted music without checking the licence before publishing or paying for an ad.",
        ],
      },
      {
        type: "paragraph",
        text: "It makes sense if you are launching a collection, a new line or need to refresh ads that have gone flat. If you don't yet have a finished product or reference images of what you want to convey, it's better to sort that out first.",
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How long does a session last for a fashion or beauty brand?",
        answer: "Between 3 and 4 hours for 10 or 12 product-in-use videos, 2 or 3 ad pieces with several openings and one brand video. With many outfit changes or several models, a 5 or 6 hour block is better.",
      },
      {
        type: "faq",
        question: "Do I need to bring my own model and makeup?",
        answer: "Yes, you bring the model or talent and the product. We provide Sony A7 cameras, lighting, microphones and a teleprompter. If you need makeup or hair, it is coordinated before the session and added to the quote.",
      },
      {
        type: "faq",
        question: "Can I record ad content in the same session?",
        answer: "Yes, and it's the most cost-effective option. You record the same product with several openings and get the variants to test on Meta and TikTok Ads, plus organic content.",
      },
      {
        type: "faq",
        question: "Do you deliver edited videos?",
        answer: "It depends on the service. With Recording Only you take the raw footage. With Recording + Editing we edit in DaVinci Resolve and CapCut with subtitles and platform formats. With Full Production we also handle the script and strategy.",
      },
      {
        type: "paragraph",
        text: "If you run a fashion or beauty brand and want to record in Madrid, write to us at /#contacto with your product and the kind of pieces you need, and A0Studios will propose the session plan.",
      },
    ],
  },
  "grabar-contenido-restaurantes-hoteles-madrid": {
    title: "Recording Video Content for Restaurants and Hotels in Madrid: Which Pieces to Shoot in a Studio",
    description:
      "How to record content for a restaurant or hotel in a Madrid studio: which pieces to shoot, how to show dishes and your offer and how to prepare booking ads.",
    readingTime: "5 min read",
    category: "Guide",
    tags: ["restaurants", "hotels", "hospitality", "Madrid studio", "organic content", "ads"],
    keyword: "restaurant hotel video content madrid",
    excerpt:
      "People choosing where to eat or stay watch the video first. What to record in one Madrid session for an intro, clips of dishes or experiences and a booking ad.",
    seoTitle: "Video Content for Restaurants and Hotels in Madrid",
    metaDescription:
      "Video content for restaurants and hotels in Madrid: which pieces to record in a 3-hour session, how to show your offer and prepare booking ads.",
    heroKicker: "Blog / A0Studios",
    body: [
      {
        type: "paragraph",
        text: "If you run a restaurant or a hotel and want to record content in Madrid, a 3-hour studio session with three pieces works well: a 1 to 2 minute intro video with the person behind the business, 10 to 12 clips of 15 to 30 seconds of dishes, drinks or experiences and one simple ad to drive bookings. One morning gives you weeks of social content and a piece ready to test on Meta Ads.",
      },
      {
        type: "paragraph",
        text: "At A0Studios, at Ronda de Atocha 16, 7th floor, our team records what is easiest to control in a studio: close-up product, the voice of the chef, owner or hotel manager and the openings of your ads. The real atmosphere of your venue is shot separately, on site. We direct the session with an ads and sales mindset: every clip has to prompt a booking, not just look good.",
      },
      {
        type: "image",
        src: "/blog/grabar-contenido-restaurantes-hoteles-madrid/hero.webp",
        alt: "Cook in a white jacket working in a restaurant kitchen",
        width: 1920,
        height: 1080,
        priority: true,
      },
      { type: "heading", level: 2, text: "Why video decides the booking in hospitality" },
      {
        type: "paragraph",
        text: "Nobody books a table or a room without checking what it's like first. A photo shows the dish; a video shows the steam, the cut, the sizzle or how the door of a room opens. That is what turns a search into a booking.",
      },
      {
        type: "paragraph",
        text: "In Madrid the choice is huge and the photos look alike. A real person explaining what makes your place different, with one concrete idea, sets you apart more than another ambience video with background music.",
      },
      {
        type: "paragraph",
        text: "A practical note: the studio doesn't replace shooting at your venue. It is for what needs controlled light and sound, and the image of your real space is complemented with footage shot at your premises.",
      },
      { type: "heading", level: 2, text: "How to organise the recording session" },
      { type: "heading", level: 3, text: "Start with the intro video" },
      {
        type: "paragraph",
        text: "It goes first, when energy is highest. Structure: who you are, what makes you different, what the guest should taste or experience and how to book. Use a teleprompter so you don't lose the thread, but speak as you would at the table. If it's your first time on camera, 4 or 5 takes are normal.",
      },
      { type: "heading", level: 3, text: "Record short product clips with a single action" },
      {
        type: "paragraph",
        text: "10 to 12 clips, each with one action: saucing a plate, slicing, pouring a drink, opening a hotel welcome box. With a Sony A7, a 50 mm lens and soft controlled light the finish is clean and the clips match each other, which helps a coherent feed. Always shoot vertical and leave margin at the top and bottom for text. Bring the dishes ready: food cools and loses its look within minutes.",
      },
      { type: "heading", level: 3, text: "Set aside a block for a booking ad" },
      {
        type: "paragraph",
        text: "Pick the offer you most want to fill, a weekend menu or a getaway, and record it with three different openings: a question, an image of the product and a direct statement. It's the same message with 3 different first seconds, and it lets you test on Meta Ads which one opens best without recording again. To split the hours well, read /en/blog/how-long-recording-session-lasts.",
      },
      {
        type: "image",
        src: "/blog/grabar-contenido-restaurantes-hoteles-madrid/mid.webp",
        alt: "Hotel lobby with a checkered floor and a bar",
        width: 1920,
        height: 1280,
      },
      { type: "heading", level: 2, text: "Common mistakes when recording restaurant and hotel content" },
      {
        type: "list",
        items: [
          "Recording only ambience and music, with no person explaining why to book with you.",
          "Arriving without the dishes or products ready and losing half the session waiting.",
          "Changing the light between clips, so food colours don't match from one video to the next.",
          "Promising something the venue then doesn't deliver, such as a dish that is no longer on the menu.",
          "Shooting horizontal thinking only of the website and having no vertical footage for reels and TikTok.",
          "Using copyrighted music without checking the licence before publishing or paying for an ad.",
        ],
      },
      {
        type: "paragraph",
        text: "It makes sense if you are launching a new menu, opening a hotel or a season or need to refresh ads that have stopped working. If you don't yet have your offer defined, sort that out first and then record.",
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How long does a session last for a restaurant or hotel?",
        answer: "Between 3 and 4 hours for an intro video, 10 to 12 product clips and an ad with several openings. If you also want to record several menus or experiences, a 5-hour block is better.",
      },
      {
        type: "faq",
        question: "Can you record my venue in the studio?",
        answer: "No, the studio doesn't replace your space. Here we record product, voice and ad openings with controlled light and sound. The image of your real venue is shot separately at your premises.",
      },
      {
        type: "faq",
        question: "Do I need to bring my own equipment?",
        answer: "No. We provide Sony A7 cameras, microphones, lighting and a teleprompter. You bring the dishes or products, your outfit and the ideas for the clips.",
      },
      {
        type: "faq",
        question: "Do you deliver edited videos?",
        answer: "It depends on the service. With Recording Only you take the raw footage. With Recording + Editing we edit in DaVinci Resolve and CapCut with subtitles and platform formats. With Full Production we also handle the script and strategy.",
      },
      {
        type: "paragraph",
        text: "If you run a restaurant or hotel and want to record in Madrid, write to us at /#contacto with your offer and the kind of pieces you need, and A0Studios will propose the session plan.",
      },
    ],
  },
  "grabar-contenido-empresas-b2b-industriales-madrid": {
    title: "Recording Video Content for B2B Industrial and Technical Companies in Madrid",
    description:
      "How to record content for a B2B industrial or technical company in a Madrid studio: which pieces to shoot, how to explain a complex product and how to prepare ads.",
    readingTime: "5 min read",
    category: "Guide",
    tags: ["B2B companies", "industry", "Madrid studio", "corporate content", "ads", "LinkedIn"],
    keyword: "b2b industrial video content",
    excerpt:
      "A B2B buyer decides with several people over several weeks. What to record in a single Madrid session to explain your technical product, put a face on your team and test a lead-generation ad.",
    seoTitle: "Video Content for B2B Industrial Companies in Madrid",
    metaDescription:
      "Video content for B2B industrial and technical companies in Madrid: what to record in a 4-hour session and how to explain a complex product on camera.",
    heroKicker: "Blog / A0Studios",
    body: [
      {
        type: "paragraph",
        text: "If your company sells a technical product to other businesses and you want to record content in Madrid, a 4-hour session with three pieces works best: a 2 to 3 minute corporate video, 6 to 8 clips of 40 to 60 seconds where an engineer or salesperson answers a real customer question, and a lead-generation ad for LinkedIn or Meta. Half a day gives you material for a quarter of communication and one ad ready to test.",
      },
      {
        type: "paragraph",
        text: "At A0Studios, at Ronda de Atocha 16, 7th floor, our team works with marketing teams and companies such as IFEMA, the Madrid Chamber of Commerce and Cinesa. In B2B, several people decide over several weeks, and each looks for something different: the engineer checks credibility, the director checks return. We direct the session with an ads and sales mindset: every piece has to bring a sales meeting closer, not just look good.",
      },
      {
        type: "image",
        src: "/blog/grabar-contenido-empresas-b2b-industriales-madrid/hero.webp",
        alt: "Worker operating a machine in an industrial plant",
        width: 1920,
        height: 1080,
        priority: true,
      },
      { type: "heading", level: 2, text: "Why video helps sell a technical B2B product" },
      {
        type: "paragraph",
        text: "A datasheet says what your product does, but not who is behind it or how you solve a problem when something fails. A video in which a manager explains in two minutes what it is for, who it is for and the lead times shortens the first sales conversation, because the customer arrives with context.",
      },
      {
        type: "paragraph",
        text: "Most companies in the sector also publish plant photos and presentation videos with background music. If you record a person answering the question customers ask most, you stand out without a big production.",
      },
      {
        type: "paragraph",
        text: "A practical note: the studio doesn't replace your plant or your product in operation. Here we record voices, explanations and ads with controlled light and sound, and the real image of your facility is complemented with footage shot on site.",
      },
      { type: "heading", level: 2, text: "How to organise the recording session" },
      { type: "heading", level: 3, text: "Start with the corporate video" },
      {
        type: "paragraph",
        text: "It goes first, when the spokesperson has the most energy. Structure: what problem the company solves, for whom, what makes it different and how to ask for a meeting. Use a teleprompter so you don't lose the thread, but speak as you would on a customer visit. If it's your first time on camera, 4 or 5 takes are normal.",
      },
      { type: "heading", level: 3, text: "Record clips that answer one customer question" },
      {
        type: "paragraph",
        text: "6 to 8 clips, each with one real question: how long an installation takes, what maintenance it needs, how it differs from another solution. With a Sony A7 in horizontal and vertical and a lavalier microphone, one clip every 8 minutes is a realistic pace. If you can't give a price, give a range and explain what it depends on. Bring the product or a small part to show in hand.",
      },
      { type: "heading", level: 3, text: "Set aside a block for a lead-generation ad" },
      {
        type: "paragraph",
        text: "If you plan to invest in LinkedIn or Meta Ads to get meetings, record a 30 to 45 second piece with three different openings: a customer question, a concrete figure and a direct statement. It's the same message with 3 different first seconds, and it lets you test which opens best without recording again. To split the hours well, read /en/blog/how-long-recording-session-lasts.",
      },
      {
        type: "image",
        src: "/blog/grabar-contenido-empresas-b2b-industriales-madrid/mid.webp",
        alt: "Vintage camera on a desk with a person working in the background",
        width: 1920,
        height: 1273,
      },
      { type: "heading", level: 2, text: "Common mistakes when recording B2B industrial content" },
      {
        type: "list",
        items: [
          "Talking about the company instead of the customer's problem, with lines like we are leaders in the sector.",
          "Using acronyms and technical jargon without explaining them to whoever signs off the budget.",
          "Recording a single 8-minute video instead of short pieces that can be published for weeks.",
          "Having the director read corporate text in a press-release tone.",
          "Promising lead times or savings that the sales team can't later deliver.",
          "Showing recognisable clients or facilities without written permission.",
        ],
      },
      {
        type: "paragraph",
        text: "It makes sense if your sales cycle is long and you need to be understood before the first meeting. If you're not yet clear who decides the purchase at your customer, define that profile first and then record.",
      },
      { type: "heading", level: 2, text: "Frequently asked questions" },
      {
        type: "faq",
        question: "How long does a session last for a technical B2B company?",
        answer: "Between 3 and 4 hours for a corporate video, 6 to 8 customer-question clips and an ad with several openings. If there are several spokespeople or products, a 5-hour block is better.",
      },
      {
        type: "faq",
        question: "Can you record my plant or my product in operation?",
        answer: "No, the studio doesn't replace your facility. Here we record voices, explanations and ads with controlled light and sound. The image of your plant is shot separately at your premises.",
      },
      {
        type: "faq",
        question: "Do I need to bring my own equipment?",
        answer: "No. We provide Sony A7 cameras, microphones, lighting and a teleprompter. You bring the script, your outfit and, if you have one, the product or a sample to show.",
      },
      {
        type: "faq",
        question: "Do you deliver edited videos?",
        answer: "It depends on the service. With Recording Only you take the raw footage. With Recording + Editing we edit in DaVinci Resolve and CapCut with subtitles and platform formats. With Full Production we also handle the script and strategy.",
      },
      {
        type: "paragraph",
        text: "If your company is technical B2B and you want to record in Madrid, write to us at /#contacto with your product and the kind of pieces you need, and A0Studios will propose the session plan.",
      },
    ],
  },
}
