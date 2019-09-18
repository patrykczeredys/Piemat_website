---
layout: post
title: "Ile jest liczb?"
description: Odpowiedź na powyższe pytanie jest oczywiście bardzo prosta jednak gdy muszą być spełnione określone kryteria to nie zawsze jest tak łatwo. W tym artykule odpowiemy sobie na wiele pytań o ilościach liczb. Wszystkie zadania będziemy rozwiązywać tak zwaną regułą mnożenia.
permalink: /:categories/:year/:month/:title/
featured-image: /assets/img/liczby.jpg
featured-image-alt: liczby
categories: "matura-podstawowa"
tags: [prawdopodobienstwo, matura-podstawowa]
comments: true
# other options
---

Odpowiedź na powyższe pytanie jest oczywiście bardzo prosta jednak gdy muszą być spełnione określone kryteria to nie zawsze jest tak łatwo. W tym artykule odpowiemy sobie na wiele pytań o ilościach liczb. Wszystkie zadania będziemy rozwiązywać tak zwaną regułą mnożenia.

### Reguła mnożenia

Jeśli doświadczenie losowe możemy podzielić na dwa etapu i pierwszy etap możemy wykonać na $n_1$ sposobów, zaś drugi na $n_2$ sposobów, to całą czynność możemy wykonać na $n_1\cdot n_2$ sposobów.

Zacznijmy od najprostszego zadania a tym samym zrozumiemy ideę tej metody.

### Zad 1. Ile jest liczb dwucyfrowych?

Rozwiązanie zadania zaczniemy od narysowania sobie dwóch pojemników na liczbę (dwóch, gdyż rozważamy sobie liczbę składającą się z dwóch cyfr).

<div class="text-center">
    <img src="/assets/img/kubeczki.png" width="300" height="300" class="postImage">
</div>

Pierwszy pojemnik to pierwsza cyfra naszej liczby, natomiast drugi to odpowiednio druga cyfra. Pierwszą cyfrą mogą być cyfry: $1,2,3,4,5,6,7,8,9$ oczywiście pierwszą cyfrą nie może być $0$ gdyż nie rozważamy cyfr typu: $03,09$ itp.Zatem do pierwszego pojemnika wybrać $9$ cyfr innymi słowy, pierwszą cyfrę możemy wybrać na dziewięć różnych sposobów. W drugim pojemniku mogą znajdować się takie cyfry jak: $0,1,2,3,4,5,6,7,8,9$. Zatem do drugiego pojemnika możemy wybrać jedną z dziesięciu cyfr. Zapisujemy to w następujący sposób:

<div class="text-center">
    <img src="/assets/img/kubeczki2.png" width="300" height="300" class="postImage">
</div>

W pojemnikach wypisałem wszystkie możliwe cyfry jakie mogą tam trafić, natomiast pod nimi liczbę, określającą ile jest cyfr w pojemniku. Na mocy reguły mnożenie, mnożymy te dwie cyfry znajdujące się pod pojemnikami, $9\cdot 10$. Zatem liczb dwucyfrowych jest $90$. Przejdziemy teraz do zadania maturalnego. Zadanie będziemy rozwiązywali w analogiczny sposób jak wyżej.

### MATURA MAJ 2019 zadanie 24

Wszystkich liczb pięciocyfrowych, w których występują wyłącznie cyfry $0,2,5$ jest...

Jako że było to zadanie zamknięte podane były 4 warianty odpowiedzi. Zadanie to zaczniemy od narysowania sobie pięciu pojemników reprezentujące każdą z osobna cyfrę naszej liczby. Na pierwszy miejscu możemy umieścić: $2,5$. $\text{Zero}$ tak jak w poprzedni przykładnie odpada, na każde kolejne miejsce możemy umieścić cyfry: $0,2,5$ zatem sytuacja będzie wyglądała następująco:

<div class="text-center">
    <img src="/assets/img/kubeczki3.png" width="500" height="500" class="postImage">
</div>

Na mocy reguły mnożenia liczb spełniające dane kryterium jest: $2\cdot3\cdot3\cdot3\cdot3=162$.

### MATURA MAJ 2019 zadanie 24

Ile jest wszystkich liczb naturalnych czterocyfrowych mniejszych od $2018$ i podzielnych przez $5$?

To zadanie może wydawać się trudniejsze od poprzedniego, lecz będziemy go rozwiązywali w taki sam sposób jak poprzednie. Podzielmy sobie to na dwie grupy. Pierwsza grupa to liczby podzielna przez $5$ z przedziału od $1000$ do $1999$. Natomiast druga grupa to liczby z przedziału od $2000$ do $2018$. Sprawdźmy ile jest liczb spełniające założenia dane w zadaniu w pierwszej grupie. Odpowiedzmy sobie na pytanie kiedy dana liczba jest podzielna przez $5$? Oczywiście wtedy gdy jej ostatnia cyfra to $0$ lub $5$. Teraz narysujmy sobie $4$ pojemniki. W pierwszym pojemniku może znaleźć się tylko jedna cyfra $1$ gdyż szukamy liczb z przedziału od $1000$ do $1999$ w drugim możemy już umieścić każdą z cyfr, w trzeciej tak samo natomiast w ostatnim pojemniku mogą znaleźć się cyfry $0,5$. Sytuacja więc będzie wyglądała następująco:

<div class="text-center">
    <img src="/assets/img/kubeczki4.png" width="500" height="500" class="postImage">
</div>

z reguły mnożenia dostajemy: $1\cdot10\cdot10\cdot2=200$. Teraz już ręcznie wypiszemy ile jest liczb podzielnych przez $5$ z przedziału od $2000$ do $2018$. Oczywiście są to liczby $2000,2005,2010,2015$. Zatem w drugiej grupie liczb takich jest $4$. Zatem ostatecznie liczb podzielnych przez $5$ spełniające założenie w zadaniu jet $204$.

### MATURA MAJ 2018 zadanie 24

Liczba wszystkiech dodatnich liczb czterocyfrowych parzystych, w których zapinsie nie występują cyfry $0$ i $2$, jest równa.

Rysujemy więc cztery pojemniki reprezentujące nasze kolejne cyfry liczby. Aby nasza liczba była parzysta to jej ostatnia cyfra musi być parzysta. Do pierwszego pojemnika możemy wstawić liczby: $1,3,4,5,6,7,8,9$ (bez zera i dwójki zgodnie z treśnią zadania) do pojeminika drugiego i trzeciego można wstawić: $1,3,4,5,6,7,8,9$ (tak samo bez zera i dwójki),natomiast w ostatnim pojemniku mogą znaleźć się tylko cyfry patrzyste bez zera i dwójki zgodznie z zadaniem więc: $4,6,8$. Ostatecznie sytuacje będzie wyglądała:

<div class="text-center">
    <img src="/assets/img/kubczki5.png" width="500" height="500" class="postImage">
</div>

Zatem odpowiedź to $8\cdot8\cdot8\cdot3=1536$