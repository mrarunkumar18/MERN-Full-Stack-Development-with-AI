# PROJECT_MEMORY | MERN-Full-Stack-Development-with-AI
repo_type: chronological-learning-journal
author: Arun Kumar | github: mrarunkumar18
goal: MERN stack mastery → Cybersecurity
status_date: 2026-04

---

## STRUCTURE

```
root/
  00_Foundation/        → Notes.txt: MERN ecosystem, SPA vs MPA, AI tools overview
  01_Intro-Web-Basics/  → notes.txt: browser, client-server, HTTP basics
  02_Version-Control/   → HTML practice + git intro
    index.html          → semantic HTML skeleton
    second.html         → extra HTML practice
    form.html           → form elements (input, select, textarea, button, label)
    list.html           → ol, ul, li
    table.html          → table, tr, td, th
    layout.html         → page layout skeleton
    notes.txt           → HTML tags/attrs, git commands
  03_CSS-Layout/        → CSS theory + practice files
    style.html          → inline+internal CSS; h1 with border
    second.html         → class selector (.error), inline span override
    my.css              → external stylesheet: p{color:brown}, a{text-decoration:none}
    fonts.html          → font-family, font-size units (px/em/rem/%)
    css-llist.html      → CSS styled list
    manu.html           → nav menu with CSS
    pseudo.html         → pseudo-class: :hover :link :visited :active :first-child
    pseudo-elements.html→ ::first-line ::first-letter ::selection ::before ::after
    images/             → image assets
    note.txt            → theory: selectors, colors, pseudo-class/element
  04_Responsive/        → layout + positioning + grid + Bootstrap
    BoxModel.html       → box-sizing:border-box, padding, border, margin
    positioning.html    → position:relative demo
    positioning-absolute.html → position:absolute + fixed nav
    grid.html           → CSS Grid: grid-template-areas, 2D layout
    note.txt            → theory: box model, positioning, flexbox, grid, media queries, bootstrap
    layout/
      index.html        → FULL PAGE: header+nav+aside+article+footer (semantic)
      style.css         → MOST COMPLEX FILE: flexbox section + @media(max-width:500px)
  05_JavaScript/        → Bootstrap + JS start
    first.html          → Bootstrap5 CDN linked; container>row grid skeleton
    note.txt            → Bootstrap: CDN link, 12-col grid system
  README.md             → portfolio readme: progress table, notes, setup, future plan
  PROJECT_MEMORY.md     → this file
```

---

## MODULE STATUS

| # | Module | Key Files | Status |
|---|--------|-----------|--------|
| 0 | Foundation | Notes.txt | ✅ done |
| 1 | Intro Web Basics | notes.txt | ✅ done |
| 2 | HTML + Git | index/form/table/list/layout.html | ✅ done |
| 3 | CSS Layout | style/second/fonts/pseudo*.html, my.css | ✅ done |
| 4 | Responsive Design | BoxModel/positioning/grid.html, layout/ | 🔄 active |
| 5 | JavaScript | first.html (bootstrap skeleton only) | 🟡 started |
| 6 | Backend Node/Express | - | ⏳ pending |
| 7 | MongoDB/Mongoose | - | ⏳ pending |
| 8 | Projects + AI | - | ⏳ pending |

---

## CONCEPTS MASTERED

### HTML
- tags: h1-h6, p, a, img, div, span, br, hr
- semantic: header, nav, main, section, aside, article, footer
- forms: input(text/email/password/radio/checkbox), select, textarea, button, label
- tables: table>thead>tr>th, tbody>tr>td
- lists: ul>li, ol>li
- attributes: id, class, href, src, alt, action, method, placeholder, required

### CSS — Integration
- inline: style attr on element
- internal: <style> in <head>
- external: <link rel="stylesheet" href="file.css"> | priority: inline > internal > external

### CSS — Selectors
- universal: * | element: h1,p | class: .name | id: #name | group: h1,h2,p

### CSS — Colors
- keyword: red | hex: #ff0000 | rgb(255,0,0) | rgba(255,0,0,0.5) | hsl(0,100%,50%) | hsla(...)

### CSS — Typography
- font-family, font-style, font-weight
- font-size units: px(abs), em(rel to parent), rem(rel to root=16px), %(rel to parent)

### CSS — Pseudo-class (:)
- :hover :active :visited :link :focus :first-child :last-child :nth-child(n)

### CSS — Pseudo-element (::)
- ::first-line ::first-letter ::selection ::before ::after
- content property required for ::before/::after

### CSS — Box Model
- content → padding → border → margin
- box-sizing: border-box = width includes padding+border (USE ALWAYS)
- box-sizing: content-box = default, width is content only

### CSS — Positioning
- static: default, normal flow
- relative: offset from own normal position (left/top/right/bottom)
- absolute: positioned relative to nearest parent with position≠static; else body
- fixed: relative to viewport, stays on scroll
- sticky: relative until scroll threshold, then fixed

### CSS — Flexbox (1D)
- display:flex on parent → children become flex-items inline
- flex-direction: row(default)/column/row-reverse/column-reverse
- justify-content: flex-start/center/flex-end/space-between/space-around
- align-items: stretch/center/flex-start/flex-end

### CSS — Grid (2D)
- display:grid on parent
- grid-template-areas: named zones mapped to children via grid-area
- grid-template-columns: 1fr 3fr | grid-template-rows: 20vh 50vh
- gap: spacing between cells

### CSS — Media Queries
- @media screen and (max-width: 500px) { ... }
- use to override layout at breakpoints → makes site responsive

### Bootstrap 5
- link via CDN in <head> (css) + before </body> (js bundle)
- 12-column grid: container > row > col-* (col-6 = half width)
- currently: skeleton only (container+row) — columns not yet filled

---

## KEY FILES (most important)

1. `04_Responsive/layout/style.css` → most complete CSS: flexbox + media query
2. `04_Responsive/layout/index.html` → most complete HTML: full semantic page
3. `04_Responsive/grid.html` → CSS Grid 2D demo with grid-template-areas
4. `03_CSS-Layout/pseudo-elements.html` → ::before with external image content
5. `05_JavaScript/first.html` → Bootstrap 5 CDN entry point

---

## LEARNING PATTERN (repeating)
```
  learn concept → write in note.txt (own words)
  → create .html file to practice
  → git add . && git commit -m "msg"
  → git push → update README.md
```

---

## NEXT ACTIONS
- [ ] Complete Bootstrap grid columns (col-* classes) in first.html
- [ ] Start JavaScript: variables, data types, operators
- [ ] DOM manipulation: document.querySelector, addEventListener
- [ ] ES6: let/const, arrow functions, template literals, destructuring
