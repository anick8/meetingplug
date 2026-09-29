# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Sales and growth leaders at mid-size B2B companies who own a pipeline target. Per the site's FAQ, the average client is a 7-figure B2B company with 10+ clients on the same proven offer. They are evaluating an outside agency and want calls on the calendar without building an SDR team.

## Product Purpose
MeetingPlug is a B2B lead generation agency that sets up and runs cold email systems for its clients. The landing page exists to get a qualified visitor to book a free intro call (Calendly). Success is a booked call from a decision-maker.

## Positioning
The system is installed *inside* the client's business: infrastructure, deliverability, lead-list generation and done-for-you campaigns. The client ends up owning an asset that consistently produces sales calls, rather than renting a black-box agency. The service is done-for-you, start to finish.

## Operating Context
Cold email outreach to 3,000–6,000 prospects per month per client. Sequences are normally 2 emails, up to 4 for small-TAM clients. English targeting in any country, other languages case by case. Flow: Prospect → Cold Email → Reply → Meeting → Client.

## Capabilities and Constraints
- Services: email deliverability consulting, cold email infrastructure setup, lead list generation systems, done-for-you email campaigns.
- Single-page marketing site (Next.js, static). Single CTA destination: the Calendly link in `lib/content.ts`.
- YouTube URL and the Privacy Policy / Terms pages are undecided placeholders.

## Brand Commitments
- Logo: the existing "meeting••plug" wordmark PNG (`public/images/meetingplug-logo-dark-1.png`).
- Brand color: coral `#F1502F` stays the signal color.
- All current copy stays word-for-word. Only layout and visuals change.
- Must not feel salesy/hype or playful. The founder-led, personal tone matters.

## Evidence on Hand
- Case study 1: 994 sent, 5 meetings booked, $180,000 ARR (`public/images/Add-a-subheading-1.png`, Gamma link in `lib/content.ts`).
- Case study 2: 996 sent, 8 meetings booked, $90,000 CLV (`public/images/996-1.png`, Gamma link).
- Founder: Nigel Xavier Lucas, Founder & CEO, 3+ years in lead generation and social media marketing (`public/images/1742216580613-e1776146297610-768x752.jpg`).
- Absent, and must not be fabricated: testimonials, client logos, pricing, additional metrics.

## Product Principles
1. Proof over promise: lead with the real campaign numbers and let them carry the claim.
2. Calm confidence, never hype: no urgency tricks, no superlatives beyond the existing copy.
3. Founder-led and personal: the person behind the system stays visible.
4. The action is always within reach: booking a call is one click from anywhere on the page.
5. Explain the mechanism plainly: a busy sales leader should grasp how it works in seconds.

## Accessibility & Inclusion
No product-specific standard was stated. Default to WCAG AA contrast, keyboard operability, visible focus, and respecting `prefers-reduced-motion`.
