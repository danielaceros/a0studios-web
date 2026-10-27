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
}
