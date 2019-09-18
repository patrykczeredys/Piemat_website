---
layout: post
title: "Dowodzenie nierówności"
description: Dowodzenie nierówności ma miejsce na każdej maturze i jest uważane za zadanie trudne na co wskazują statystki. W tym artykule dowiesz się jak poradzić sobie z każdym tego typu zadaniem.
permalink: /:categories/:year/:month/:title/
featured-image: /assets/img/dowodzenie-nierownosci.png
featured-image-alt: dowody
categories: "matura-podstawowa"
tags: [dowody, matura-podstawowa]
comments: true
# other options
---

Dowodzenie nierówności to bardzo ważny temat w dziedzienie matematyki. Przepowadzony dowód musi pokazać, że dana nierówność jest spełniona dla wszystkich liczb (spełniająca określone założenia).

Przejdźmy do rozwiązania kilku zadań dzięki którym bardzo dobrze opanujemy to zagadnienie i będziemy mogli zdobyć aż $4\%$ 

---

**Zadanie 1.** Wykaż, że dla dowolnych liczb rzeczywistych $a,b$ zachodzi nierówność

$$a^2+b^2\ge2ab$$

Aby wykazać powyższą nierówność należy przekształcić nierówność równoważnie w taki sposób aby otrzymać oczywistą prawdę. Przekształćmy naszą nierówność:

$$a^2+b^2\ge2ab$$

$$a^2-2ab+b^2\ge 0$$
Korzystając ze wzoru skróconego mnożenia na kwadrat różnicy otrzymujemy.

$$(a-b)^2\ge0$$

Nierówność ta jest oczywiście prawdziwa, ponieważ kwadrat dowolnej liczby jest nieujemny. W taki sposób polegający na "zwijaniu" do wzoru skróconego mnożenia udowodnimy wiele nierówności.

---

**Zadanie 2 (Matura Maj 2015).** Wykaż, że dla każdej liczby rzeczywistej $x$ i dla każdej liczby rzeczywistej $y$ prawdziwa jest
nierówność $4x^2-8xy+5y^2$.

Przekształcamy nierówność równoważnie:

$$4x^2-8xy+5y^2$$

$$4x^2-8xy+4y^2+y^2\ge0$$

$$(2x-2y)^2+y^2\ge0$$

Kwadrat dowolnej liczby jest nieujemny. Suma kwadratów jest również nieujemna co dowodzi naszą nierówność.

---

**Zadanie 3 (Matura Sierpień 2015).** Wykaż, że dla wszystkich nieujemnych liczb rzeczywistych $x, y$ prawdziwa jest nierówność $x^3+y^3\ge x^2y+xy^2$.

Przekształcamy nierówność równoważnie:

$$x^3+y^3\ge x^2y+xy^2 $$

$$ x^3-x^2y+y^3-xy^2\ge0 $$

$$ x^2(x-y)-y^2(x-y)\ge0$$

$$(x-y)(x^2-y^2)\ge0$$

$$(x-y)(x-y)(x+y)\ge0$$

$$(x-y)^2(x+y)\ge0$$

Oczywiście liczba $(x-y)^2$ jako kwadrat liczby jest nieujemna. Jeśli $x,y$ są nieujemne to też suma tych liczb jest nieujemna. Iloczyn tych liczb zatem jest nieujemna. C.N.D.

---

**Zadanie 4 (Matura sierpień 2016).** Udowodnij, że dla dowolnej dodatniej liczby rzeczywistej x prawdziwa jest nierówność $4x+\frac{1}{x}\ge 4$

Przekształcamy nierówność równoważnie:

$$4x+\frac{1}{x}\ge 4  \hspace{0.5cm}|\cdot x$$

$$4x^2+1\ge4x$$

$$4x^2-4x+1\ge0$$

$$(2x-1)^2\ge0$$

Kwadrat dowolnej liczby jest nieujemny dzięki czemu nierówność nasza jest spełniona C.N.D.

Komentarz do zadania: Można zastanowić się dlaczego mnożyliśmy stronami przez $x$ a nie przez $x^2$? Odpowiedź na to pytanie jest bardzo prosta. Dokonaliśmy tego ponieważ $x$ jest liczbą dodatnią.

---

**Zadanie 5 (Matura maj 2018).** Udowodnij, że dla dowolnych liczb dodatnich $a, b$ prawdziwa jest nierówność 

$$\frac{1}{2a}+\frac{1}{2b}\ge\frac{2}{a+b}$$

Przekształcamy nierówność równoważnie:

$$\frac{1}{2a}+\frac{1}{2b}\ge\frac{2}{a+b} \hspace{0.4cm} |\cdot 2ab(a+b)$$

$$b(a+b)+a(a+b)\ge 4ab$$

$$ab+b^2+a^2+ab\ge4ab$$

$$a^2+b^2+2ab\ge4ab$$

$$a^2-2ab+b^2\ge0$$

$$(a-b)^2\ge0$$

Kwadrat dowolnej liczby jest nieujemny.

---

**Zadanie 6 (Matura maj 2019).** Wykaż, że dla dowolnych liczb rzeczywistych $a$ i $b$ prawdziwa jest nierówność

$$3a^2-2ab+3b^2\ge0$$

Przekształcamy nierówność równoważnie:

$$3a^2-2ab+3b^2\ge0$$

$$a^2-2ab+b^2+2a^2+b^2\ge 0$$

$$(a-b)^2+2(a^2+b^2)\ge 0$$

Oczywiście $(a-b)^2$ jako kwadrat liczby jest nieujemny toteż liczba $2(a^2+b^2)$ jako podwojona suma dwóch kwadratów jest nieujemna. Suma tych liczb jest również nieujemna co dowodzi nierówność.

---

**Zadanie 7 (Matura sierpień 2019).** Wykaż, że dla każdej liczby dodatniej $x$ prawdziwa jest nierówność $x+\frac{1-x}{x}\ge1$

Przekształcamy nierówność równoważnie:

$$x+\frac{1-x}{x}\ge 1 \hspace{0.4cm}| \cdot x$$

$$x^2+1-x\ge x$$

$$x^2-2x+1\ge0$$

$$(x-1)^2\ge0$$

Kwadrat dowolnej liczby jest nieujemny, zatem nierówność zachodzi. C.N.D