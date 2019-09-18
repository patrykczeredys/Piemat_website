---
layout: post
title: "Zależność między sąsiednimi wyrazami ciągu"
description: Trzy wyrazowe ciągi arytmetyczne oraz geometryczne pojawiają się bardzo często. Rozwiązywanie takich zadań to bardzo ważna umiejętość. W tym artykule poznasz również dowody tych zależności dzięki czemu bardzo dobrze zrozumiesz dane zagadnienie.
permalink: /:categories/:year/:month/:title/
featured-image: /assets/img/zaleznosc_miedzy_sasiednimi_wyrazami_ciagu.png
featured-image-alt: ciagi
categories: "matura-podstawowa"
tags: [ciagi, matura-podstawowa]
comments: true
# other options
---

Bardzo często na maturze podstawowej pojawiają się zadania które dotyczą trzywyrazowgo ciągu arytmetycznego albo też geoemtrycznego. W tablicy maturalnej możemy przeczytać następujące fragmenty:

<div class="text-center">
    <img src="/assets/img/ciagwz.png" width="700" height="500" class="postImage text-center">
</div>

Zacznijmy od ciągu arytmetycznego. Rozważmy następujące zadanie. Wyznacz wartość $x$ jeśli ciąg: $(x+1, 8, 3x+3)$ jest ciągiem arytmetycznym. Można przyjąć że $a_1=x+1,a_2=8,a_3=3x+3$. Na mocy zależności między kolejnymi wyrazami ciągu arytmetycznego mamy, że $a_2={a_1+a_3\over 2}$ (wyraz środkowy jest więc średnią arytmetyczną dwóch sąsiednich wyrazów tego ciągu). Podstawiając dane z naszego zadania otrzymujemy więc:

$$8={x+1+3x+3\over 2}$$

$$8={4x+4\over 2}$$

$$16=4x+4$$

$$12=4x$$

$$x=3$$

Teraz możemy naszą wartość podstawić do naszego ciągu, aby sprawdzić czy ciąg nasz jest ciągiem arytmetycznym. Podstawiając otrzymujemy: $(4, 8, 12)$ a ciąg ten jest ciągiem arytmetycznym gdyż kolejne wyrazy powstają w wyniku dodania stałej różnicy która w tym przypadku wynosi $4$. Przejdźmy teraz to trzywyrazowego ciągu geometrycznego. Spójrzmy na następujące zadanie:

---

### MATURA MAJ 2015 zadanie 13

Dany jest trzywyrazowy ciąg geometryczny: $(24, 6, a-1)$. Wyznacz $a$.

Z treści naszego zadania dostajemy, że: $a_1=24,a_2=6,a_3=a-1$. Skorzystajmy teraz z zależności między kolejnymi wyrazami ciągu geometrycznego, a wtedy: $a_2^2=a_1\cdot a_3$. Podstawiając dane z naszego zadania otrzymamy więc:

$$6^2=24(a-1)$$

$$36=24a-24$$

$$60=24a$$

$$a={60\over 24}$$

$$a={5\over 2}$$

Również możemy teraz podstawić uzyskaną wartość aby przekonać się, że ciąg ten będzie ciągiem geoemtrycznym a tym samym uzyskana wartość będzie prawidłowa.

---

Teraz dla osób zainteresowanych przedstawię również dowód tych dwóch wzorów.

Pokażmy najpierw, że jeśli ciąg $a_n$ jest arytmetyczny to $a_n={a_{n-1}+a_{n+1}\over 2}$. Jeśli ciąg ten jest ciągiem arytmetycznym to:

$$a_n=a_1+(n-1)r$$

$$a_{n-1}=a_1+(n-2)r$$

$a_{n+1}=a_1+nr$ gdzie $r$ to różnica ciągu arytmetycznego. Na mocy tych oznaczeń dostajemy: 

<div style="overflow-x:auto;">

$${a_{n-1}+a_{n+1}\over 2}={a_1+r(n-2)+a_1+rn\over 2}={2a_1+rn-2r+rn\over 2}={2a_1+2rn-2r\over 2}=a_1+rn-r=a_1+(n-1)r=a_n$$

</div>

C.N.D

Wykażmy teraz, że jeśli $a_n$ jest ciągiem geometrycznym to zachodzi $a_{n}=a_{n-1}\cdot a_{n+1}$. Jeśli ciąg ten jest ciągiem geometrycznym to:

$$a_n=a_1q^{n-1}$$

$$a_{n-1}=a_1q^{n-2}$$

$a_n=a_1q^{n-1}$ gdzie $q$ to iloraz tego ciągu a wtedy:

<div style="overflow-x:auto;">

$$a_{n-1}\cdot a_{n+1}=a_1q^{n-2}\cdot a_1q^n=a_1^2q^{2n-2}=a_1^2(q^{n-1})^2=(a_1q^{n-1})^2=a_n^2$$

</div>