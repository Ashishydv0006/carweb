# Legal and Copyright Review for V-Glide Site

Date reviewed: April 21, 2026

This note is a practical project review, not a substitute for advice from a qualified lawyer, company secretary, or trademark professional.

## Short Answer

You can usually write:

`Copyright 2026 V-Glide Cabs Private Limited. All rights reserved.`

only if both of these are true:

1. `V-Glide Cabs Private Limited` is your real, legally incorporated company name.
2. You own, commissioned, or properly licensed the content shown on the site, especially the logo, photos, illustrations, and written copy.

If the company is not yet incorporated under that exact name, do not use `Private Limited` in the footer. In that case, use something safer like:

`Copyright 2026 V-Glide. All rights reserved.`

or

`Copyright 2026 [Your legal owner name / proprietorship name]. All rights reserved.`

## Important Rule About `Private Limited`

The biggest legal naming issue here is not copyright. It is the company name.

If you publish the site with `V-Glide Cabs Private Limited` in the footer, visitors may reasonably understand that:

- the company is formally incorporated;
- that exact name belongs to your business;
- the business is trading under that registered corporate identity.

So:

- If you already have incorporation documents for `V-Glide Cabs Private Limited`, using that footer wording is generally normal.
- If you do not have incorporation yet, or the registered name is different, you should not display `Private Limited`.

## What I Found In This Project

I reviewed the site structure and key content in:

- `index.html`
- `src/components/Footer.jsx`
- `src/components/Hero.jsx`
- `src/components/Navbar.jsx`
- `src/components/Services.jsx`
- `src/components/Pricing.jsx`
- `src/components/TourPreview.jsx`
- `src/components/Testimonials.jsx`
- `src/components/About.jsx`
- `src/pages/PrivacyPolicy.jsx`
- `src/pages/Terms.jsx`
- `src/pages/Cookies.jsx`
- `src/data/touristPlaces.js`

## Repo-Specific Risk Assessment

### 1. Footer wording

File: `src/components/Footer.jsx`

Current footer already says:

`Copyright {year} V-Glide Cabs Private Limited. All rights reserved.`

This is fine only if the exact company name is legally yours and the site materials are owned/licensed by you.

### 2. Highest copyright risk: image ownership

Files involved:

- `src/assets/*`
- `src/assets/places/*`
- `src/components/Services.jsx`
- `src/data/touristPlaces.js`

The code itself does not show where these images came from. That means I cannot verify whether they are:

- shot by you;
- created for you by a designer/photographer with rights assigned;
- downloaded from a licensed stock source;
- copied from Google, social media, another taxi website, or travel page.

This is the biggest copyright risk in the repo.

If even some of these images were copied from third-party websites without a valid license, you could receive:

- a takedown request;
- a legal notice;
- a payment demand;
- a complaint from a photographer, agency, or platform.

### 3. Trademark risk: brand name and logo

Files involved:

- `src/assets/v-glide-logo.svg`
- `src/components/Footer.jsx`
- `src/components/Navbar.jsx`
- `index.html`

Your name and logo may still create trademark risk even if you made the site yourself.

Questions to verify before launch:

- Is `V-Glide` already used by another transport, travel, automotive, logistics, or mobility brand?
- Has anyone already registered a confusingly similar trademark?
- Are you using a logo copied or closely adapted from another brand?

If the mark is too close to an existing business in a similar class, you could still get objections even if the website design is original.

### 4. Legal pages are placeholders right now

Files involved:

- `src/pages/PrivacyPolicy.jsx`
- `src/pages/Terms.jsx`
- `src/pages/Cookies.jsx`

These pages currently contain template language and even say they are templates. That is an operational and legal risk if you publish them unchanged.

Examples:

- The privacy page says it is a general template and should be replaced.
- The terms page says it is a general template and should be expanded.
- The cookie page says it must be updated if you add analytics or marketing tools.

This does not create copyright infringement by itself, but it can create compliance and trust issues because the pages may not reflect your actual business practices.

### 5. Business claims should be true and supportable

Files involved:

- `src/components/Hero.jsx`
- `src/components/About.jsx`
- `src/components/Services.jsx`
- `src/components/Testimonials.jsx`

Some claims on the site look factual and should be supportable if published, for example:

- `4.6 Rated | 300K+ Happy Customers`
- `500K+ Satisfied Passengers`
- `35+ Years of Experience`
- `Founded in 1990`
- `Verified Drivers`

If those are not true or cannot be backed by business records, they may create consumer protection or false advertising risk.

The testimonials also look like real customer quotes. If they are sample text and not real customer reviews, they should not be presented as authentic customer feedback.

### 6. Travel destination names are generally not the copyright problem

Files involved:

- `src/data/touristPlaces.js`

Place names like `Agra`, `Jaipur`, `Taj Mahal`, `India Gate`, and similar factual references are not the main copyright issue.

The bigger issue is the originality and licensing of:

- the written descriptions;
- the destination photos;
- any copied tourism copy from other websites.

### 7. Metadata and schema still use placeholder website details

Files involved:

- `index.html`
- `public/sitemap.xml`
- `public/robots.txt`

The site still references `https://example.com` in structured data and sitemap files. That is not a copyright issue, but it should be fixed before production because it looks unfinished and could create SEO, trust, and identity problems.

## Can You Write `All rights reserved`?

Yes, you can write `All rights reserved`, but it does not magically give you rights you do not already have.

It is a notice, not a cure.

Meaning:

- It is appropriate when the site content is yours or properly licensed to you.
- It does not protect copied content that you do not own.
- It does not prove trademark ownership.
- It does not replace company registration.

## My Practical View On This Project

Based on the repo itself:

- The React code and layout do not look like the legal problem.
- The biggest likely risk is third-party image usage without a license.
- The second biggest risk is using `Private Limited` without actual incorporation under that exact name.
- The third biggest risk is publishing placeholder legal pages and factual claims that may not be verified.

## What You Should Do Before Putting It On The Server

### Safe to launch only after you verify these

1. Confirm whether `V-Glide Cabs Private Limited` is the exact incorporated company name.
2. Keep the footer wording only if item 1 is true.
3. Make a list of every image and note its source and license.
4. Replace any image that came from Google search, another company website, Instagram, Facebook, or random internet downloads unless you have written permission or a valid commercial license.
5. Verify that the logo is original or properly commissioned.
6. Search whether `V-Glide` conflicts with existing marks in relevant business classes.
7. Replace template legal pages with your actual privacy, terms, and cookie details.
8. Remove or substantiate numeric and historical claims like `300K+`, `500K+`, `35+ years`, and `4.6 rated`.
9. Replace sample testimonials unless they are genuine and consented.
10. Replace `example.com` placeholders with your real domain.

## Safer Footer Options

If incorporated under that exact company name:

`Copyright 2026 V-Glide Cabs Private Limited. All rights reserved.`

If brand exists but company incorporation is not finalized:

`Copyright 2026 V-Glide. All rights reserved.`

If a different legal entity owns the site:

`Copyright 2026 [Exact legal owner name]. All rights reserved.`

## Best Next Step

If you want to be careful before launch, do these in order:

1. Verify incorporation name.
2. Verify trademark availability for `V-Glide`.
3. Audit image licenses.
4. Replace template legal pages with real business details.

## Official Sources Checked

- Copyright Office FAQ: registration is not required for copyright to exist, and names/titles are not ordinarily protected by copyright
  https://copyright.gov.in/frmfaq.aspx
- Copyright Act, 1957
  https://www.copyright.gov.in/Copyright_Act_1957/index.html
- Copyright Act ownership section
  https://copyright.gov.in/Copyright_Act_1957/chapter_iv.html
- IP India trademark basics and registry
  https://www.ipindia.gov.in/basics-of-trademarks
- IP India trademark search page
  https://www.ipindia.gov.in/search-existing-trademarks

## Bottom Line

You are generally eligible to put a copyright notice in the footer for your own website content.

You should use `Copyright 2026 V-Glide Cabs Private Limited. All rights reserved.` only if:

- that exact company name is legally yours; and
- the site content, especially the images and logo, is owned or licensed by you.

If you are unsure about either of those, change the footer to a safer owner name until the paperwork and asset rights are clear.
