#lang racket/base

(require (file "../../parasite/main.rkt")
         (file "../../parasite/sail/ores/main.rkt")
         (prefix-in tw: (file "../../parasite/sail/tailwind.rkt")))

(provide page-md)

(define page-md
  (string-append
   (tw:generate-tailwind-setup)
   "\n\n"
   ;; Hero / header
   (ore-section #:class "bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-12"
     (ore-container #:class "max-w-5xl mx-auto"
       (ore-heading #:level 1 #:size "text-5xl" #:color "text-orange-400" #:class "text-center mb-6" "SAIL UI Showcase")
       (ore-text #:variant "lead" #:class "text-center mb-8 text-gray-300" "A compact playground demonstrating SAIL components built with Tailwind and Solar theme.")
       (div '(class "flex justify-center gap-4 mb-8")
         (ore-button #:variant "primary" "Primary")
         (ore-button #:variant "secondary" "Secondary")
         (ore-button #:variant "outline" "Outline"))
       (div '(class "grid grid-cols-1 md:grid-cols-2 gap-6")
         (ore-card #:variant "default"
           (ore-card-header (ore-card-title #:class "text-orange-400" "Card Example"))
           (ore-card-body (ore-text #:variant "body" #:color "text-gray-300" "This is a sample card showcasing the card component and content placement.")))
         (ore-card #:variant "default"
           (ore-card-header (ore-card-title #:class "text-orange-400" "Interactive"))
           (ore-card-body (ore-text #:variant "body" #:color "text-gray-300" "Buttons, forms, and small widgets can be composed to create UI patterns."))))))

   "\n\n"
   ;; Forms section
   (ore-section #:class "py-8"
     (ore-container #:class "max-w-3xl mx-auto"
       (ore-heading #:level 2 #:size "text-2xl" #:class "mb-4" "Forms")
       (div '(class "space-y-4")
         (div '(class "flex flex-col")
           (label '(class "mb-1 text-sm text-gray-400") "Email")
           (input '(type "email" class "p-2 rounded bg-gray-800 text-white" placeholder "you@example.com")))
         (div '(class "flex flex-col")
           (label '(class "mb-1 text-sm text-gray-400") "Message")
           (div '(class "p-2 rounded bg-gray-800 text-white" style "min-height:5rem;") (text "")))
         (div '(class "flex justify-end")
           (ore-button #:variant "primary" "Send")))) )

   "\n\n"
   ;; Utilities / grid
   (ore-section #:class "py-8 bg-gray-900"
     (ore-container #:class "max-w-5xl mx-auto"
       (ore-heading #:level 2 #:size "text-2xl" #:class "mb-4" "Utilities")
       (div '(class "grid grid-cols-1 md:grid-cols-3 gap-4")
         (div '(class "p-4 bg-gray-800 rounded") (text "Box 1"))
         (div '(class "p-4 bg-gray-800 rounded") (text "Box 2"))
         (div '(class "p-4 bg-gray-800 rounded") (text "Box 3")))) )

   ))

