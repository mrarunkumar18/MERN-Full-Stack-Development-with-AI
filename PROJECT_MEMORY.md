# PROJECT_MEMORY | MERN-Full-Stack-Development-with-AI
repo_type: chronological-learning-journal
author: Arun Kumar | github: mrarunkumar18
goal: MERN stack mastery → Cybersecurity
status_date: 2026-04-23

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
  05_JavaScript/        → Bootstrap 5 components + JS start
    first.html          → Bootstrap5 CDN linked; container>row grid skeleton
    typo.html           → Bootstrap typography utilities
    forms.html          → Bootstrap styled form inputs
    data.html           → Bootstrap buttons (outline, sizes) + Cards (card-img-top, card-title, card-text) + responsive grid
    layout.html         → FULL PAGE: responsive Navbar (brand, links, dropdown, search, dark theme)
                          + Carousel (indicators, prev/next controls)
                          + Modal (fade, id, trigger btn, header/body/footer, dismiss)
                          ⚠ FIXED: modal moved to body-level (was broken inside navbar collapse)
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
| 4 | Responsive Design | BoxModel/positioning/grid.html, layout/ | ✅ done |
| 5 | JavaScript | first/typo/forms/data/layout.html (Bootstrap 5 components) | 🔄 active |
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
- 12-column grid: container > row > col-* (col-sm, col-md breakpoints)

#### Buttons
- `btn btn-outline-primary` → outline style | `btn-lg` / `btn-sm` → size modifiers

#### Cards
- `.card` > `card-img-top` + `card-title` + `card-text` + `btn`
- set width via `style="width: 18rem"`

#### Navbar
- `navbar navbar-expand-lg` → collapses to hamburger on small screens
- `data-bs-theme="dark"` → dark color scheme
- `navbar-brand` → logo/name link
- `navbar-toggler` + `collapse navbar-collapse` → hamburger toggle
- `navbar-nav` + `nav-item` + `nav-link` → nav links
- `dropdown` + `data-bs-toggle="dropdown"` + `dropdown-menu` → nested dropdown
- `nav-link disabled` → grayed-out non-clickable link
- `d-flex` form inside navbar → inline search box

#### Carousel
- `carousel slide` wrapper + `id` required
- `carousel-indicators` → dot buttons (data-bs-slide-to="0/1/2", class="active" on first)
- `carousel-inner` > `carousel-item` (first must have `active`)
- `carousel-control-prev/next` → arrow buttons (data-bs-slide="prev/next")

#### Modal ⚠ IMPORTANT RULE
- modal `<div>` must be a **direct child of `<body>`** — NEVER nest inside navbar or other components
- `class="modal fade"` + unique `id` + `tabindex="-1"` + `aria-labelledby` + `aria-hidden="true"`
- trigger button: `data-bs-toggle="modal"` + `data-bs-target="#modalId"`
- structure: `.modal-dialog` > `.modal-content` > `.modal-header` + `.modal-body` + `.modal-footer`
- close: `data-bs-dismiss="modal"` on any button
- `aria-labelledby` on modal div → matches `id` on `.modal-title` (accessibility)

---

## KEY FILES (most important)

1. `05_JavaScript/layout.html` → MOST COMPLEX: navbar + carousel + modal (Bootstrap 5 full page)
2. `05_JavaScript/data.html` → Bootstrap buttons + cards + responsive grid
3. `04_Responsive/layout/style.css` → most complete CSS: flexbox + media query
4. `04_Responsive/layout/index.html` → full semantic page: header+nav+aside+article+footer
5. `04_Responsive/grid.html` → CSS Grid 2D demo with grid-template-areas
6. `03_CSS-Layout/pseudo-elements.html` → ::before with external image content

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
- [x] Bootstrap 5 grid, buttons, cards ✅
- [x] Bootstrap 5 navbar (responsive, dropdown, dark theme) ✅
- [x] Bootstrap 5 carousel ✅
- [x] Bootstrap 5 modal (fixed placement bug) ✅
- [ ] Start JavaScript: variables, data types, operators, expressions
- [ ] DOM manipulation: document.querySelector, getElementById, addEventListener
- [ ] ES6: let/const, arrow functions, template literals, destructuring, spread/rest
