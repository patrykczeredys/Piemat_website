---
layout: post
title: "Logarytmy, dowodzenie podstawowych własności"
description: W tym artykule dowiesz się rzeczy o którch nauczyciele w szkole nie wspominają. Poznasz dowód podstawowych własności logarytmu.
permalink: /:categories/:year/:month/:title/
featured-image: /assets/img/John_Napierp.jpeg
featured-image-alt: John Napier
categories: "matura-rozszerzona"
tags: [logarytmy-i-funkcja-wykladnicza, matura-rozszerzona]
comments: true
# other options
---

Ojcem logarytmów jest John Napier. Szkocki matematyk żyjący na przełomie XVI oraz XVII wieku. Był odpowiedzialny za utworzenie tablic logarytmicznych.

<div class="text-center">
    <img src="/assets/img/John_Napier.jpeg" width="300" height="300" class="postImage" style="
    border-radius: 1em;">
</div>

Z pewnością na lekcjach matematyki w swojej szkole poznałeś wiele własności logarytmów: na sumę, różnicę czy też na zamianę podstawy logarytmu. Jednak nikt nie pokazał dlaczego takie własności zachodzą. W tym artykule przeprowadzimy kilka dowodów potwierdzające podstawowe informację o logarytmach. Zacznijmy jednak od przedstawienia dowodu na sumę logarytmu.

### Dodawanie logarytmów o jednakowej podstawie

$$\log_a(bc)=\log_ab+\log_ac$$

oznaczmy następująco: $\log_ab=x$ oraz $\log_ac=y$. Na mocy definicji logarytmu dostajemy więc odpowiednio: $a^x=b$ oraz $a^y=c$, wtedy:

<div style="overflow-x:auto;">

$\log_a(bc)=\log(a^xa^y)=\log(a^{x+y})=x+y=\log_ab+\log_ac$

</div>

Q.E.D

Podobnie możemy wykazać wzór na różnice logarytmów.

### Mnożenie logarytmu przez liczbę

Pokażmy, że jeśli $x=\log_ab$ to $nx=\log_ab^n$. Skorzystajmy więc najpierw z definicji logarytmu a wtedy mamy, że $a^x=b$ po podniesieniu stronami do potęgi $n$ otrzymujemy:

$$a^x=b$$

$$(a^x)^n=b^n$$

$$(a^{xn})=b^n$$ 

$$xn=\log_a(b^n)$$

Q.E.D

### Zmiana podstawy logarytmu

Pokażmy, że $log_ab={\log_cb\over \log_ca}$. Niech więc $\log_ab=x$ a wtedy $a^x=b$. Chcemy zamienić logarytm na logarytm o podstawie $c$. Możemy wykonać działanie, tak zwane logarytmowania obustronnie lecz przy podstawie z $c$, gdyż jeśli liczby są równe to i ich logarytmy są równe.

$$a^x=b$$

$$\log_c(a^x)=\log_cb$$

$$x\log_ca=\log_cb$$

$$x={\log_cb\over \log_ca}$$

$$\log_ab={\log_cb\over \log_ca}$$

Q.E.D

---

### Ciekawa własność wynikająca z zamiany podstawy logarytmu

Bardzo często w zadaniu jest wykorzystywana następująca własność:

${1\over \log_ab}=\log_ba$ Można ją bardzo łatwo udowodnić:

$${1\over \log_ab}={1\over {\log_bb\over \log_ab}}={1\over {1\over \log_ba}}=\log_ba$$

W naszym zestawie zadaniowym pojawił się następujący problem:

Wykaż, że ${1\over \log_32}+{1\over \log_52}<4$

Z tym zadaniem świtanie poradził sobie **Albert Jarzębski** który to zadanie rozwiązał na naszym fanpage korzystając właśnie z powyżej własności. Można tego dokonać w następujący sposób:

<div style="overflow-x:auto;">

$L={1\over \log_32}+{1\over \log_52}=\log_23+\log_25=\log_215<\log_216=4$

</div>

$\log_215<\log_216$ nierówność ta jest oczywiście prawdziwa gdyż funkcja $f(x)=\log_2x$ jest funkcją rosnącą w całej dziedzinie. Q.E.D