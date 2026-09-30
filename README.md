# MITAOE Admission Cell Portal

Modern, responsive, professional one-page admission portal concept for **MIT Academy of Engineering (MITAOE)**, Alandi, Pune.

---

## Tech Stack
- **Backend:** Node.js, Express.js
- **Frontend:** Semantic HTML5, Modern CSS3 (Variables, Grid, Flexbox, Keyframes), Vanilla JavaScript (ES6+)
- **Architecture:** Zero frontend build steps or heavy frameworks (No React, No Next.js). Fast loading, accessible, and lightweight.

---

## Project Structure
```
mitaoewebsite/
├── server.js              # Express web server & API endpoints
├── package.json           # Node.js project manifest
├── public/
│   ├── index.html         # High-converting semantic one-page admission interface
│   ├── style.css          # Premium university design system & animations
│   ├── script.js          # Interactive UI behaviors (filters, counters, modals, form validation)
│   └── assets/            # Vector assets & icons
│       └── logo-crest.svg # Academic crest vector
└── README.md              # Project documentation
```

---

## Features & Sections

1. **Sticky Glassmorphic Header & Navigation:**
   - Brand crest with MITAOE Admission Cell credentials
   - Navigation links with real-time scroll spy highlighting
   - High-contrast "Apply Now" button
   - Responsive mobile drawer with hamburger toggle
2. **Hero Section:**
   - Information badge: *MIT Academy of Engineering • Alandi, Pune*
   - Prominent heading: *"Shape Your Future at MITAOE"*
   - Subheading: *"Admissions Open for 2026–27"*
   - Action buttons: *"Apply Now"*, *"Explore Programs"*, *"Download Brochure"*
   - Key statistics badges: *2026–27 Admissions*, *B.Tech Programs*, *Autonomous Institute*, *College Code: 06146*
   - Modern architectural vector campus illustration with floating status cards
3. **Admission Announcement Strip:**
   - Highlighted notification ribbon for 2026–27 applications with quick action buttons
4. **Why Choose MITAOE:**
   - 6 interactive cards with custom icons and hover transitions:
     1. Empowered Autonomous Institute
     2. Industry-Oriented Curriculum
     3. Global Internship Opportunities
     4. Strong Placement Support
     5. Innovation & Entrepreneurship
     6. National & International Exposure
5. **Explore Our Programs:**
   - Interactive category filtering: `All`, `Computer`, `Electronics`, `Mechanical`, `Core Engineering`
   - 10 Undergraduate B.Tech Programs:
     - Computer Engineering
     - Information Technology
     - Computer Science & Engineering (AI & ML)
     - Computer Science & Engineering (Data Science)
     - Computer Engineering (Software Engineering)
     - Electronics & Telecommunication Engineering
     - Mechanical Engineering
     - Chemical Engineering
     - Civil Engineering
     - Artificial Intelligence
   - "View Details" interactive modal featuring lab highlights, career roles, and recruiters
   - "Apply Now" button that scrolls to the enquiry form and pre-selects the chosen program
6. **Simple Admission Process:**
   - 4-step roadmap (01 Register, 02 Entrance Exam, 03 CAP Process with Code 06146, 04 Confirm Admission)
7. **Eligibility Section:**
   - Comprehensive First Year B.Tech criteria (Physics & Mathematics compulsory, entrance exams, prevailing rules)
   - Official regulatory disclaimer
   - Quick Eligibility Evaluator modal for prospective applicants
8. **Admission Documents Checklist:**
   - 11-point verification checklist with interactive progress counter ("X of 11 ready")
9. **Placements & Career Statistics:**
   - Viewport-triggered animated count-up numbers:
     - **₹28 LPA** Highest Package
     - **₹6.1 LPA** Average Package
     - **570+** Placement Offers
     - **700+** Internships
     - **450+** Recruiting Companies
   - 4 pillars of career support & corporate recruiter showcase
10. **Global Exposure:**
    - *"Think Global. Build Here."* banner highlighting international internships, collaborations, and student exchanges
11. **Admission Quick Info:**
    - Essential statutory facts: Institute, Location, DTE Code **06146**, Admission Mode, Status
    - Direct link to the official MITAOE admission site: `https://mitaoe.ac.in/admission/`
12. **Accordion FAQ:**
    - 10 standard admission queries answered
    - Single-expand behavior with keyboard accessibility
13. **Admission Enquiry Form:**
    - Client-side validation for Name, Indian 10-digit mobile, Email, Percentage, Entrance Exam, and Preferred Program
    - Express `POST /api/enquiry` integration with smooth success feedback banner
14. **Contact Section:**
    - Full address on Alandi Road, Pune
    - Clickable `tel:` and `mailto:` links (+91-9071123436, +91-8722100030, 020-30253500, admissions@mitaoe.ac.in)
    - Styled campus map preview and Google Maps navigation link
15. **Footer:**
    - Philosophy quote, quick navigation links, B.Tech disciplines, copyright 2026, and concept disclaimer
16. **Floating Back-to-Top Button**

---

## How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Server
```bash
npm start
```

### 3. Open in Browser
Visit:
```
http://localhost:3000
```

### Health Check Endpoint
```bash
curl http://localhost:3000/api/health
```
Expected response:
```json
{
  "status": "ok"
}
```

---

## Disclaimer
This website is an admission information interface concept created for MIT Academy of Engineering, Alandi, Pune and should not be treated as the official MITAOE website. Official notifications and CAP circulars should always be verified on the official website: [https://mitaoe.ac.in](https://mitaoe.ac.in).
