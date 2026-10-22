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
}
