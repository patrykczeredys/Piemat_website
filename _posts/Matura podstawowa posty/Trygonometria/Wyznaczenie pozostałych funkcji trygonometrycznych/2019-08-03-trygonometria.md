---
layout: post
title: "Wyznaczenie pozostałych wartości funkcji trygonometrycznych"
description: Wyznaczanie pozostałych wartości funkcji trygonometrycznych znając wartość tylko jednej. Jest to bardzo ważna umiejętność sprawdzana praktycznie na każdej maturze podstawowej z matematyki. Pewne zadanie na maturze!
permalink: /:categories/:year/:month/:title/
featured-image: /assets/img/tablica.png
featured-image-alt: trygonometria
categories: ["matura-podstawowa"]
tags: [trygonometria, matura-podstawowa]
comments: true
# other options
---

Na maturze podstawowej z matematyki bardzo często pojawia się zadanie, w którym znając jedną z funkcji trygonometrycznych musimy wyznaczyć wartości funkcji pozostałych. W tym artykule omówimy sobie to zagadnienie.  W tablicach maturalnych oferowanych przez CKE możemy przeczytać następujący fragment:

<div class="text-center">
    <img src="/assets/img/tygtab.png" width="700" height="500" class="postImage">
</div>
<div class="text-center">
    <img src="/assets/img/trgowz.png" width="700" height="500" class="postImage">
</div>
Przedstawiamy zadanie z poprzedniej matury.

### MATURA MAJ 2019 zadanie 13

Sinus kąta ostrego $\alpha$ jest równy $4\over5$. Wtedy $\cos\alpha$

$A)\space \cos\alpha$=${5\over 4}$    

$B)\space \cos\alpha$=${1\over 5}$

$C)\space \cos\alpha$=${9\over 25}$

$D)\space \cos\alpha$=${3\over 5}$  

Ponieważ jest to zadanie zamknięte to możemy je rozwiązać  na trzy sposoby, metodą trójkąta prostokątnego z użyciu twierdzenia Pitagorasa, za pomocą podstawowych wzorów trygonometrycznych i wykorzystując tablicę wartości funkci trygonometrycznych.
Zauważmy, że odpowiedź A jest na pewno błędną, ponieważ cosinus z definicji jest nie większy niż 1.

Sposób I:

Narysujmy trójkąt prostokątny oraz oznaczmy odpowiednio jego boki odwołując się do definicji funkcji trygonometrycznej.

Jeśli $\sin\alpha={a\over c}={4x\over 5x}={4\over 5}$ ( przyjmujemy $x>0$ )

<div class="text-center">
    <img src="/assets/img/trygonometria_trojkat.png" width="500" height="500" class="postImage">
</div>

Z twierdzenia Pitagorasa dostajemy:

$a^2+b^2=c^2$

$(4x)^2+b^2=(5x)^2$

$16x^2+b^2=25x^2$

$b^2=9x^2$

$b=3x$ Ponieważ długośc boku jest dodatnia.

Na mocy definicji funkcji $\cos$ mamy $\cos\alpha={b\over c}={3\over 5}$. 

---

**Sposób II:**
Drugi sposób będzie opierał się na wykorzystaniu podanych wyżej wzorów trygonometrycznych. Na mocy jedynki trygonometrycznej $\sin^2\alpha+\cos^2\alpha=1$ dostajemy:

$$({4\over 5})^2+\cos^2\alpha=1$$

$${16\over 25}+\cos^2\alpha=1$$

$$\cos^2\alpha=1-{16\over 25}$$

$$\cos^2\alpha={25\over 25}-{16\over 25}$$

$$\cos^2\alpha={9\over 25}$$

$$\cos\alpha={3\over 5} $$ 


Odrzucamy wynik ujemny ponieważ dla kątów ostrych wartości cosinusa są dodatnie. 

---

**Sposób III: Uwaga! Dopuszczalny tylko przy rozwiązywaniu zadania zamkniętego.**


$sin\alpha={3\over 5}=0.6$


Szukamy w tablicach kąta którego sinus jest najbliższy do naszego. Znajdujemy:

$sin37^{\circ}=0,6018$ oraz $cos37^{\circ}=0.7536$

Domyślamy się że poprawną odpowiedzią jest odpowiedź:

$D)\space \cos\alpha$=${3\over 5}$

Rozwiązania w wszystkich sposobach doprowadzają nas do poprawnej odpowiedzi, należy pamiętać jednak, że sposób pierwszy jest przeznaczony tylko i wyłącznie dla kąta $\alpha$ który jest kątem ostrym oraz sposób 3 jest dopuszczalny dla zadań zamkniętych. Na koniec przedstawię również dowód powyższych dwóch wzorów. Wykażmy najpierw, że $\sin^2\alpha+\cos^2\alpha=1$, przy założeniu, że $\alpha$ jest kątem ostrym.

Oczywiście z definicji funkcji trygonometrycznej wiemy, że $\sin\alpha={a\over c}$, oraz że $\cos\alpha={b\over c}$. Wtedy:

<div style="overflow-x:auto;">

$$\sin^2\alpha+\cos^2\alpha=({a\over c})^2+({b\over c})^2={a^2\over c^2}+{b^2\over c^2}={a^2+b^2\over c^2}$$

</div>

Jendak, że na mocy twierdzenia Pitagorasa dostajemy:

$$a^2+b^2=c^2$$

podstawiając dostajemy:

$${a^2+b^2\over c^2}={c^2\over c^2}=1$$

C.N.D (co należało dowieść). Podobnie również można pokazać, że $\text{ctg}\alpha={1\over \text{tg}\alpha}$ dla kąta $\alpha$ ostrego. Gdyż, z definicji mamy, że $\text{tg}\alpha={a\over b}$ oraz $\text{ctg}\alpha={b\over a}$. Jednak, że

$${1\over \text{tg}\alpha}={1\over {a\over b}}=1\cdot{b\over a}={b\over a}=\text{ctg}\alpha$$

C.N.D