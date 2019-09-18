---
layout: post
title: "Zależności między średnimi"
description: Nierówności między średnimi to ważna umiejętnośc która ułatwia rozwiązanie wiele zadań! Ważna umiejętność jeśli ktoś chce osiągnąć dobry wynik na maturze!
permalink: /:categories/:year/:month/:title/
featured-image: /assets/img/zaleznosci_miedzy_srednimi.png
featured-image-alt: wielomiany
categories: "matura-rozszerzona"
tags: [dowody, matura-rozszerzona]
comments: true
# other options
---

**Średnią arytmetyczną** liczb rzeczywistych $a_1, a_2,...,a_n$ nazywamy liczbę:

$$A_n={a_1+a_2+...+a_n\over n}$$

**Średnią geometryczną** liczb nieujemnych $a_1, a_2,...,a_n$ nazywamy liczbę:

$$G_n=\sqrt{a_1\cdot a_2\cdot...\cdot a_n}$$

**Średnią harmoniczną** liczb dodatnich $a_1, a_2,...,a_n$ nazywamy liczbę:

$$H_n={n\over {1\over a_1}+{1\over a_2}+...+{1\over a_n}}$$

**Średnią kwadratową** liczb rzeczywistych $a_1, a_2,...,a_n$ nazywamy liczbę:

$$K_n=\sqrt{a_1^2+a_2^2+...+a_n^2\over n}$$

---

Dla dodatnich liczb rzeczywistych $a_1, a_2,...,a_n$ zachodzą zależności:

$K_n\geq A_n\geq G_n\geq H_n$

Wykażmy, że dla dodatnich liczb $a, b$ zachodzi poniższa nierówność ( zależność między średnią arytmetyczną a geometryczną dla $n=2$ ) :

$${a+b\over 2} \geq \sqrt{ab}$$

Obie strony powyższej nierówności są dodatnie zatem po podniesieniu stronami do kwadratu uzyskamy:

$${(a+b)^2\over 4} \geq ab$$

$$a^2+2ab+b^2 \geq 4ab$$

$$a^2-2ab+b^2 \geq 0$$

$$(a-b)^2 \geq 0$$

Powyższa nierówność jest oczywiście spełniona gdyż kwadrat dowolnej liczby jest większy bądź równy zero. Q.E.D.

Podobnie możemy udowodnić pozostałe nierówności. Przyjrzyjmy się jednak ich wykorzystaniu.

---

**Zadanie 1.** Udowodnij, że dla dowolnych liczb rzeczywistych $x, y$ takich, że $x+y+z=3.$ Prawdziwa jest nierówność: $x^2+y^2+z^2 \geq 3.$

Nasza tezę w pewien sposób kieruje nas na zależność między średnią kwadratową a arytmetyczną, z niej właśnie skorzystamy. Oczywista jest więc poniższa nierówność:

$$\sqrt{x^2+y^2+z^2\over 3} \geq {x+y+z\over 3}$$

Podstawiając zgodnie z założeniem $x+y+z=3$ i przekształcając otrzymujemy: 

$$\sqrt{x^2+y^2+z^2\over 3} \geq {3\over 3}$$

$${x^2+y^2+z^2\over 3} \geq 1$$

$$x^2+y^2+z^2 \geq 3$$

Zatem uzyskaliśmy naszą tezę. Dowodzi to, że nierówność jest spełniona. Q.E.D.

---

**Zadanie 2 (Matura maj 2016).** Wykaż, że dla dowolnych dodatnich liczb rzeczywistych $x, y$ takich, że $x^2+y^2=2$, prawdziwa jest nierówność $x+y\leq 2.$

Taka sama sytuacja jak poprzednio. Na mocy nierówności między średnią kwadratową i arytmetyczną otrzymujemy:

$$\sqrt{x^2+y^2\over2}\geq {x+y\over2}$$

Podstawiając warunek z założenia dostajemy:

$$\sqrt{2\over 2}\geq {x+y\over 2}$$

$$1\geq {x+y\over 2}$$

$$2\geq x+y$$

Otrzymaliśmy więc tezę co dowodzi naszą nierówność. Q.E.D.

**Zadanie 3.** Udowodnij, że dla dowolnych nieujemnych liczb $a,b,c$ zachodzi nierówność: $(a+b)(b+c)(c+a)\geq 8abc$

Zadanie to jest trochę trudniejsze od poprzednich. Skorzystamy 3 razy z nierówności między średnią arytmetyczną a geometryczną w następujący sposób:

$${a+b\over 2}\geq \sqrt{ab}$$

$${b+c\over 2}\geq \sqrt{bc}$$

$${c+a\over 2}\geq \sqrt{ca}$$

Mnożąc te trzy powyższe nierówności stronami otrzymujemy:

$${(a+b)(a+b)(c+a)\over 8}\geq \sqrt{a^2\cdot b^2 \cdot c^2}$$

$$(a+b)(a+b)(c+a)\geq 8abc$$

Uzyskana teza dowodzi nierówność Q.E.D.

Jak widać nierówności między średnimi to bardzo łatwa sprawa, która ułatwia rozwiązanie wielu zadań!