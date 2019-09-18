---
layout: post
title: "Wzory Viete'a w zadaniach z parametrem"
description: Wykorzystywanie wzorów Viete'a jest obowiązkową umiejętnością na maturze pewne 5/6 punktów.
permalink: /:categories/:year/:month/:title/
featured-image: /assets/img/Viete.jpg
featured-image-alt: Viete
categories: "matura-rozszerzona"
tags: [funkcja-kwadratowa, matura-rozszerzona]
comments: true
# other options
---

Wzory Viete'a są bardzo często wykorzystywane w zadaniach z parametrem przy funkcji czy równaniu kwadratowym, w tym artykule poznamy sposób ich wykorzystywania. Zacznijmy jednak od przedstawienia twierdzenia, wzorów Viete'a dla równania kwadratowego: 

Jeżeli równanie kwadratowe $ax^2+bx+c$ dla $a$ różnego od zera, ma rozwiązania $x_1, x_2$ to:

$x_1+x_2=-{b\over a}$ oraz $x_1x_2={c\over a}$

W wielu zadaniach jednak potrzebna jest umiejętność przekształcania tożsamości do postaci w której występuje wyłącznie suma oraz iloczyn dwóch pierwiastków, przedstawmy kilka z nich:

<div style="overflow-x:auto;">

$1.\space x_1^2+x_2^2=x_1^2+2x_1x_2+x_2^2-2x_1x_2=(x_1+x_2)^2-2x_1x_2$

</div>

<div style="overflow-x:auto;">

$2.\space {1\over x_1}+{1\over x_2}={x_2\over x_1x_2}+{x_1\over x_1x_2}={x_1+x_1\over x_1x_2}$

</div>

<div style="overflow-x:auto;">

$3.\space x_1^3+x_2^3=(x_1+x_2)(x_1^2-x_1x_2+x_2^2)=(x_1+x_2)(x_1^2+2x_1x_2+x_1^2-2x_1x_2-x_1x_2)=(x_1+x_2)((x_1+x_2)^2-3x_1x_2)$

</div>

Przedstawione wyżej przekształcenia są podstawowymi, jest ich oczywiście więcej, jednak że wszystkie robi się dokładnie w ten sam sposób. W tym artykule jeszcze kilka tożsamości przekształcimy, przejdźmy teraz do określania warunków które muszą zachodzić aby były spełnione dane założenia. Rozważmy funkcję $f$ taką że $f(x)=ax^2+bx+c$ dla $a$ różnego od zera. Równania to:
1. Ma dwa różne miejsca zero(dwa pierwiastki) różne, jeśli $\Delta>0$
2. Ma jedno miejsce zero(jeden pierwiastek) jeśli $\Delta=0$
3. Nie ma miejsce zerowych(brak pierwiastków) jeśli $\Delta<0$
4. Ma dwa pierwiastki różnych znaków $\Delta>0$ i jednocześnie $x_1x_2<0$. Warunek pierwszy jest trywialny. Jeśli równania ma mieć pierwiastki różnych znaków to oznacza, że jeden jest dodatni a drugi ujemny iloczyn takich liczb jest mniejszy od zera, jeśli byłyby dwa dodatnie lub też dwa ujemne to iloczyn byłby większy od zera więc warunek ten jest wystarczający.
5. Ma dwa różne pierwiastki tego samego znaku $\Delta>0$ i jednocześnie $x_1x_2>0$.Jeśli dwa tego samego znaku to oba dodatnie lub oba ujemne w punkcie 4 pisaliśmy, że jeśli oba dodatnie lub oba ujemne to iloczyn jest większy od zera.
6. Ma dwa różne pierwiastki dodatnie $\Delta>0$ i $x_1x_2>0$ oraz $x_1+x_2>0$. Aby miał dwa dodatnie to oczywiście muszą być tego samego znaku stąd właśnie warunek $x_1x_2>0$ i jeszcze suma tych pierwiastków musi być większa od zera. Można się teraz zastanowić dlaczego sama suma nie wystarczy. Przykład $x_1=−5$ oraz niech $x_2=6$ wtedy $x_1+x_2>0$ więc nie spełnia założeń przykładu, warunek $x_1x_2>0$ determinuje warunek w którym pierwiastki są różnych znaków.
7. Ma dwa różne pierwiastki ujemne $\Delta>0$ i $x_1x_2>0$ oraz $x_1+x_2<0$ sytuacja bardzo podobna co w przykładnie 6.
8. Ma dwa pierwiastki $\Delta\geq0$. Nie użyłem tutaj słowa różne a to oznacza, że może mieć dwa różne lub dwa takie same pierwiastki co oznaczamy pierwiastkiem dwukrotnym. Przykładem może być funkcja $f(x)=(x−1)^2$ o takiej funkcji mówimy, że posiada ona pierwiastek dwukrotny, jednak że w zadaniach często znajdziemy słowo różne lub $x_1\not ={x_2}$, przykład taki znajdziemy niżej.

---

Przejdziemy teraz do zadań maturalnych. W zadaniach przedstawię tylko warunki do każdego zadań pomijając trywialne rachunki.

### Zadanie 1. (MATURA ROZSZERZONA Maj 2018 )

Wyznacz wszystkie wartości parametru $m$, dla których równania $x^2+(m+1)x−m^2+1=0$ ma dwa rozwiązania rzeczywiste $x_1$ i $x_2 (x_1\not ={x_2})$, spełanijące warunek $x_1^3+x_2^3>−7x_1x_2$

Warunki do zadania to:

$1.\space \Delta>0$ (gdyż dwa pierwiastki)

$2.\space x_1^3+x_2^3>−7x_1x_2$

warunek $(x_1\not ={x_2})$ potwierdza fakt $\Delta>0$ można o tym przeczytać w punkcie 8. Pozostaję wykonać rachunki: 

Ad1:

$$(m+1)^2−4(−m^2+1)>0$$

Ad2:
Korzystając z tożsamości w punkcie 3 dostajemy: 

$$(x_1+x_2)((x_1+x_2)^2−3x_1x_2)>−7x_1x_2$$

<div style="overflow-x:auto;">

$$(−m−1)((−m−1)^2−3(−m^2+1))>−7(−m^2+1)$$

</div>

Po rozwiązaniu oby tych nierówności wyznaczamy iloczyn uzyskanych zbiorów czyli cześć wspólną.

---

### MATURA ROZSZERZONA Maj 2017 zadanie 2.

Wyznacz wszystkie wartości parametru $m$ , dla których równanie $4x^2−6mx+(2m+3)(m−3)=0$ ma dwa różne rozwiązania rzeczywiste $x_1$ i $x_2$ spełniające warunek $(4x_1−4x_4−1)(4x_1−4x_2+1)<0$

Warunki do zadania to: 

$1.\space \Delta>0$(gdyż dwa pierwiastki)

$2.\space (4x_1−4x_2−1)(4x_1−4x_2+1)<0$

Ad1:

$(−6m)^2−4\cdot 4(2m+3)(m−3)>0$ należy rozwiązać tą nierówność

Ad2:

Niech $a=4x_1−4x_2$ wtedy:

<div style="overflow-x:auto;">

$(a−1)(a+1)=a^2−1=(4x_1−4x_2)^2−1=16x_1^2−32x_1x_2+16x_2^2−1=16(x_1^2+x_2^2)−32x_1x_2−1=16(x_1+x_2)^2−64x_1x_2−1$

</div>

$16({6m\over 4})^2−64{(2m+3)(m−3)\over 4}−1<0$

Po rozwiązaniu tej nierówności wyznaczamy iloczyn oby uzyskanych zbiorów.

---

### MATURA ROZSZERZONA Maj 2016 zadanie 3.

Dany jest trójmian kwadratowy $f(x)=x^2+2(m+1)x+6m+1$. Wyznacz wszystkie rzeczywiste wartości parametru $m$, dla których ten trójmian ma dwa różne pierwiastki $x_1,x_2$ tego samego znaku, spełniające warunek $\|x_1-x_2\|<3$

Warunki do zadania:

$1.\space \Delta>0$ (gdyż dwa pierwiastki).

$2.\space x_1x_2>0$ (gdyż dwa pierwiastki różnych znaków).

$3.\space \|x_1-x_2\|<3$

Warunku 1 oraz 2 nie będę omawiał, gdyż było o nich już wspomniane w tym artykule. Zastanowimy się jednak nad warunkiem 3. Wzorów Viete'a na różnice pierwiastków nie ma. Jednak obie strony tej nierówności są nieujemne toteż możemy nierówność podnieść stronami do kwadratu przez co pozbędziemy się wartości bezwzględnej i uzyskamy postać:

$$(x_1−x_2)2<9$$

$$x_1^2+x_2^2−2x_1x_2<9$$

$$(x_1+x_2)^2−4x_1x_2<9$$

Pozostaje podstawić i wykonać obliczania.

### Zadanie dodatkowe

Dany jest trójmian kwadratowy $f(x)=(m+1)x^2+2(m−2)x−m+4$. Wyznacz wszystkie wartości parametru $m$, dla których trójmian $f$ ma dwa różne pierwiastki rzeczywiste $x_1,x_2$ spełniające warunek $x_1^2−x_2^2=x_1^4−x_2^4$

Warunki:
$1.\space m+1\not ={0}$ (gdyż wtedy nie będzie kwadratowe a tym samym nie uzyska dwóch pierwiastków).

$2.\space \Delta>0$(gdyż dwa pierwiastki)

$3.\space x_1^2−x_2^2=x_1^4−x_2^4$ przekształcamy równoważnie

$$(x_1−x_2)(x_1+x_2)=(x_1^2−x_2^2)(x_1^2+x_2^2)$$

<div style="overflow-x:auto;">

$$(x_1−x_2)(x_1+x_2)−(x_1−x_2)(x_1+x_2)(x_1^2+x_2^2)=0$$

</div>

$$(x_1−x_2)(x_1+x_2)(1−(x_1^2+x_2^2))=0$$

A to równania zachodzi jeśli:

$1.\space x_1−x_2=0$ a stąd dostajemy $x_1=x_2$ co jest oczywiście sprzeczne z założeniami danymi w zadaniu.

$2.\space x_1+x_2=0$ (obliczamy korzystając ze wzorów Viete'a).

$3.\space 1−(x_1^2+x_2^2)=1−((x_1+x_2)^2−2x_1x_2)$ teraz pozostaje wykonać podstawienie.

Odpowiedzią do zadania jest iloczyn uzyskanych zbiorów (część wspólna).