import { FAQS, NAP } from "@/lib/constants"
import type { Lang } from "../config"

export type Faq = { question: string; answer: string }

const en: Faq[] = [
  {
    question: "What is A0Studios and who is it for?",
    answer: `A0Studios (pronounced "Acero Studios") is a boutique studio for recording video content, set in a penthouse in central Madrid at ${NAP.address}. It specializes in content that converts into sales, clients or followers: ads for Meta Ads and TikTok Ads, VSLs, launch and remarketing pieces, Reels and podcasts. It's built for founders, companies and marketing agencies who want to record what they need and move on, and also for content creators who want to grow organically. It's run by Dani Acero, a filmmaker with six years of producing for brands such as IFEMA, Cinesa and the Madrid Chamber of Commerce, who also manages ad campaigns and sales funnels. Only one session is booked per day.`,
  },
  {
    question: "What makes A0Studios different from other recording studios in Madrid?",
    answer:
      "Most recording studios compete on production quality: good light, a good camera and a nice set. A0Studios cares about that too, but the difference is who directs the session. Dani Acero works with social ads, SEO, AI search visibility and sales funnels, and handles metrics like cost per lead and customer acquisition cost. So he doesn't just record whatever you bring: he helps you structure each piece around its goal, suggests questions that work as Reels, sharpens the hook in the first seconds of an ad and shapes a VSL so it leads to the call or the purchase. It's also a boutique studio: one session a day, no rush and no other clients waiting.",
  },
  {
    question: "What can I record at A0Studios?",
    answer:
      "Vertical ads for Meta Ads and TikTok Ads with several hooks to test, VSLs for your landing page, corporate and website video, launch and remarketing pieces, Reels, TikToks and YouTube Shorts, podcasts and interviews, personal-brand videos for LinkedIn, and online courses or training with a teleprompter. Each format has a different goal: an ad aims for the click, a Reel for retention, a corporate video for credibility, and before recording the script and framing are tuned to that platform. It's common to combine several formats in the same session: the ads, the organic content and the piece for your website, all in a single day, since the studio includes a teleprompter, professional lighting and Sony cameras already set up. On average, a session yields about 12 edited pieces ready to publish, so it's worth arriving with a list of what you need to record to make the most of your time.",
  },
  {
    question: "Where can I record ads or a VSL in Madrid?",
    answer:
      "At A0Studios you can record ads and VSLs in central Madrid, in the penthouse at Rda. de Atocha 16, directed by Dani Acero, who besides being a filmmaker manages ad campaigns and sales funnels. That double perspective is the difference: before recording, the script for each piece is prepared around its goal, not just around looking good. For ads, the hook in the first seconds and several variants to test on Meta Ads or TikTok Ads; for the VSL, a structure that leads to the call or the purchase. You can shoot vertical or horizontal depending on where it will be published, with professional lighting and Sony cameras already set up, and you can take home the day's raw footage or, if you choose the turnkey option, the pieces already edited, subtitled and ready to launch in 24-48h.",
  },
  {
    question: "Can I record a podcast at the studio?",
    answer:
      "Yes. The penthouse has a podcast set ready to record solo or with guests, in audio and video, with professional microphones, studio lighting and Sony cameras, in the same multipurpose room that shares space with the terrace overlooking the Madrid skyline. Since only one session is booked per day, the recording has no clock: there's time to redo a question or adjust the pace of the conversation without another client waiting. If you want, the podcast can be recorded with clips in mind too: the questions and answers that work as Reels are marked, and those pieces are edited separately to get social content from the same session, without having to come back another day for the short-form material.",
  },
  {
    question: "Is it a good studio for content creators who want to record Reels?",
    answer:
      "Yes. If you're a content creator, at A0Studios you can record the whole month's Reels and TikToks in Madrid in a single session, instead of organizing a different shoot every week. On average, a session covers about 12 edited pieces ready to publish, using the terrace overlooking the Madrid skyline, the multipurpose room and the podcast set to vary shots and backgrounds without changing location or wasting time moving equipment. And since Dani works on social growth as well as directing the shoot, he helps you choose the topics and hooks that work as Reels, not just make the video look good. The teleprompter and lighting are already set up, so the session is spent recording variations, not building the set.",
  },
  {
    question: "How much does it cost to record at A0Studios?",
    answer:
      "The quote is tailored and depends on what you need to record, not on how long you spend in the studio: there's no hourly or half-day rate. Tell me what you want to take home, say 12 Reels and two ads, and I'll always give you two prices to choose from: turnkey, with script, directed recording and editing, so you take home pieces that are edited, subtitled and ready to publish in 24-48h; or recording only, with script, a fully equipped studio and direction during the session, where you take home the day's raw footage. I'll reply with both quotes within 1 hour, no commitment, so you can compare and decide calmly. Since only one session is booked per day, it's best to lock in the date in advance once you know which format suits you best.",
  },
  {
    question: "Can I rent the recording studio on its own?",
    answer:
      "The space isn't rented separately. If you're looking to rent a recording studio in Madrid to use on your own, without direction, A0Studios doesn't work that way: as a boutique studio with a single session a day, the penthouse always comes fully set up and with guidance, not as an empty space handed over by the hour. That includes professional lighting, Sony cameras, professional sound, a teleprompter and Dani's direction throughout the shoot, adjusting framing and pace take by take, and if you want, the editing of the pieces too. The option closest to a rental is recording only: you come with your script or prepare it beforehand with Dani, all the equipment is already set up, you record with direction and when you finish you take home the day's raw footage to edit yourself with your own team.",
  },
  {
    question: "Why is there only one session a day?",
    answer:
      "Because A0Studios is a boutique studio, not a recording factory. Only a single session is booked per day, so on that day the studio and Dani are dedicated entirely to you: no rush, no clock and no other clients waiting for you to finish. That dedication is what makes it possible to prepare the script for each piece before recording, direct you take by take and combine several formats in the same visit, for example the ads, the organic content and the piece for your website, without squeezing it all into a timed slot. That's also why studio time isn't charged: the quote depends on what you take home, not on the hours you spend inside. It's the same reason it's worth booking ahead, because each day there's only one date available.",
  },
  {
    question: "Do I need experience in front of the camera?",
    answer:
      "No. The space is a real penthouse, with a terrace and living rooms, not an artificial set, which already makes recording feel more natural than in a cold studio. Before the session the script for each piece is prepared with you, so you arrive knowing exactly what you'll say instead of improvising in front of the camera. During the shoot Dani directs you take by take, runs the teleprompter so you don't have to memorize anything, and adjusts your pace, tone and message so each video works on the platform where it will be published, whether it's an ad of a few seconds or a half-hour podcast. If a take doesn't work, it's redone as many times as needed: as it's the only session of the day, there's no hurry to move on and no other client waiting for their turn.",
  },
  {
    question: "Does A0Studios guarantee results in sales or followers?",
    answer:
      "No, and you should be wary of anyone who does: results also depend on your offer, your audience, your ad spend and what you do with the content once it's published, variables no recording studio controls. What you do get is content recorded with the structure that works in each format, the hook of an ad, the length of a Reel, the call to action of a VSL, directed by someone who, besides recording, launches and analyzes ad campaigns, rather than pretty pieces with no clear goal behind them. That difference shows more in the script prepared before the session than in the recording itself: each piece is designed for the result it's after, not just to look good on camera. The rest, how much it converts, how much the account grows, depends on factors outside the studio.",
  },
  {
    question: "Can I come to record every month?",
    answer:
      "Yes. It's the most convenient way to keep your organic content up to date and to refresh your ads when they start losing performance, instead of waiting until you run out of material and recording in a rush. On average, each session yields about 12 edited pieces, so one monthly visit is usually enough to cover the month's Reels and, if needed, a couple of new ads to test against the ones you've been running. If you come every month, a fixed date is reserved for you, just like with any session, there's only one a day, and the script is prepared with you in advance, reviewing what worked the previous month to decide the topics and hooks for the next. That way your content is planned with room to spare, instead of being decided the week before recording, and you avoid a lack of material breaking your publishing rhythm.",
  },
  {
    question: "Where is the studio?",
    answer: `A0Studios is at ${NAP.address}, right in the center of Madrid. The studio occupies a penthouse for exclusive use, with a terrace overlooking the city skyline and a multipurpose room that includes the podcast set, so you don't need to leave the building to change location and vary the shots of a session. Getting here by public transport is easy: a 5-minute walk from Metro Atocha Renfe (lines 1 and 3) and from Atocha Cercanías station, which makes it simple to arrive whether you come alone or bring equipment or guests for a podcast. There's also public parking nearby for those who prefer to drive. Before the session you're sent the exact address and how to access the building, so no time is lost finding the door on the day of the shoot.`,
  },
  {
    question: "How do I book?",
    answer: `Fill in the contact form on the website or write directly to dani@a0studios.es or call ${NAP.phone}. Tell me what you need to record, which formats, how many pieces and when you need them, and I'll reply within 1 hour with availability and the two quotes, turnkey and recording only, so you can choose calmly. Only one session is booked per day, so it's best to book at least two weeks ahead, especially if you want a specific date or you're coming from outside Madrid. Once the date is confirmed, the script for each piece is prepared with you before the session, so when you arrive at the studio there's no need to improvise: all the equipment is set up and you know exactly what you'll record.`,
  },
]

export function getFaqs(lang: Lang): readonly Faq[] {
  return lang === "en" ? en : FAQS
}
