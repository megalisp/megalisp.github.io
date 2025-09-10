#lang racket

(require (file "../../parasite/main.rkt"))

(provide page)

(define header-block
  "    Title: SAIL Ores Test Page\n    Date: 2025-09-07T00:00:00\n    Tags: DRAFT\n\nThis is a test page to demonstrate SAIL Ores components working with the page template's Tailwind CSS setup.\n")

(define page
  (string-join
   (list
    header-block
    "## SAIL Ores Integration"
    (->string (p '() (text "The page template now includes:")))
    "- **Tailwind CSS CDN**: Latest Tailwind CSS from CDN"
    "- **Solar Theme Configuration**: Custom colors and utilities"
    "- **Component Support**: All SAIL Ores components work properly"
    "\n### Button Variants\n"
    "The buttons above demonstrate:\n- **Primary**: Orange background (`bg-orange-600`)\n- **Secondary**: Dark gray background (`bg-gray-700`) \n- **Outline**: Orange border with transparent background"
    "\n### Card Components\n"
    "The cards show:\n- **Dark backgrounds**: `bg-gray-900` with subtle borders\n- **Orange accents**: Headers and highlights in Solar orange\n- **Proper contrast**: White/gray text on dark backgrounds"
    "\nThis integration allows SAIL Ores components to work seamlessly in the existing page infrastructure."
   "\n\n")) )
