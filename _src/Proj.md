#lang racket

(require (file "../../parasite/main.rkt"))

 (provide page)

(define page
  (string-join
   (list
    "# Projects"
    (->string
  (div (list 'class "card mb-3")
    (div (list 'class "card-body")
      (h2 '() (text "Projects"))
      (p (list 'class "lead") (text "Fleshing Out Soon"))))))
  "\n\n"))
