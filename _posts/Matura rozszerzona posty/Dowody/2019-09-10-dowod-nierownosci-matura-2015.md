---
layout: post
title: "Dowód nierówności matura 2015"
description: W tym artykule przedstawimy rozwiązanie zadanie z majowej matury rozszerzonej z roku 2015 na 5 sposobów!
permalink: /:categories/:year/:month/:title/
featured-image: /assets/img/dowody_matura_rozszerzona.png
featured-image-alt: wielomiany
categories: "matura-rozszerzona"
tags: [dowody, matura-rozszerzona]
comments: true
# other options
---

Przedstawiamy jedno z najtrudniejszych zadań z matury rozszerzonej w 2015 roku. Zadanie polegało na udowodnieniu nierówności wielomianowej. Jest to typowe zadanie maturalne, zaliczanie do tzw. pewniaków maturalnych. Prezentujemy kilka sposobów jego rozwiązania. 

### MATURA Maj 2015 

Udownodnij, że dla każdej liczby rzeczywistej $\displaystyle x$ prawdziwa jest nierówność

$$\displaystyle x^{4}-x^{2}-2x+3>0$$

---

**Sposób 1**

Przekształcimy naszą nierówność w sposób równoważny

$$\displaystyle x^{4}-x^{2}-2x+3>0$$

$$\displaystyle x^{4}+x^{2}-2x^{2}-2x+1+1+1>0$$

$$\displaystyle \left( x^{4} -2x^{2} +1\right) +\left( x^{2} -2x+1\right) +1 >0$$

$$\displaystyle \left( x^{2} -1\right)^{2} +( x-1)^{2} +1 >0$$

Suma kwadratów liczb rzeczywistych jest nieujemna, a ich suma powiększona o 1 jest dodatnia co kończy dowód.

---

**Sposób 2**

Przekształcamy naszą nierówność w sposób równoważny 

$$\displaystyle x^{4} -x^{2} -2x+2+1 >0$$

$$\displaystyle x^{2}\left( x^{2} -1\right) -2( x-1) +1 >0$$

$$\displaystyle x^{2}( x-1)( x+1) -2( x-1) +1 >0$$

$$\displaystyle ( x-1)\left( x^{2}( x+1) -2\right) +1 >0$$

$$\displaystyle ( x-1)\left( x^{3} +x^{2} -2\right) +1 >0$$

Teraz rozłożymy wielomian $\displaystyle W(x)=x^{3}+x^{2}-2$

<div style="overflow-x:auto;">

$$\displaystyle W(x)=x^{3}-1+x^{2}-1=(x-1)\left(x^{2} +x+1\right)+(x-1)(x+1)=(x-1)\left( x^{2} +2x+1+1\right)$$

</div>

$$\displaystyle W(x)=(x-1)\left(( x+1)^{2} +1\right)$$

Teraz wracamy do naszej nierówności

$$\displaystyle (x-1)(x-1)\left((x+1)^{2}+1\right)+1>0$$

$$\displaystyle (x-1)^{2}\left((x+1)^{2}+1\right)^{2}+1>0$$

Kwadrat liczby rzeczywistej jest nie ujemny, zatem pierwszy składnik jest nie ujemny. Suma liczby nie ujemnej i dodatniej jest dodatnia co kończy dowód.

---

**Sposób 3**

Wykorzystamy podstawienie $\displaystyle t+1=x.$

$$\displaystyle x^{4}-x^{2}-2x+3>0$$

$$\displaystyle (t+1)^{4}-(t+1)^{2}-2(t+1)+3 >0$$   

$$...$$

$$\displaystyle t^{4} +4t^{3} +5t^{2} +3 >0$$

$$\displaystyle t^{2}\left(( t+2)^{2} +1\right) +3 >0$$

Ponieważ kwadrat liczyb rzeczywistej jest nieujemny, to pierwszy czynnik jest nie ujemny a cała suma jest dodatnia.

---

**Sposób 4**

Niech $\displaystyle f( x) =x^{4} -x^{2} -2x+3.$ Funkcja $\displaystyle f$ jako funkcja wielomianowa jest ciągła oraz
$\displaystyle \lim _{x\rightarrow +\infty } f( x) =\lim _{x\rightarrow \infty } f( x) =+\infty .$

<div style="overflow-x:auto;">

$\displaystyle f'( x) =4x^{3} -2x-2=2\left( x\left( x^{2} -1\right) +x^{3} -1\right) =2( x( x-1)( x+1) +( x-1)\left( x^{2} +x+1\right)$

</div>

<div style="overflow-x:auto;">

$\displaystyle f'( x) =2( x-1)\left( x^{2} +2x+2\right) =2( x-1)\left(( x+1)^{2} +1\right)$

</div>

Ostatni czynnik iloczynu jest dodatni, zatem nasza pochodna ma jedno miejsce zerowe $\displaystyle x_{1} =1$.
Szkicujemy wykres naszej pochodnej.

<div class="text-center">
    <img src="/assets/img/wykres4.png" width="300" height="300" class="postImage">
</div>

Odczytujemy z niego, że funkcja $\displaystyle f$ jest malejąca na przedziale $\displaystyle ( -\infty;1\rangle$ i jest rosnąca na przedziale $\displaystyle \langle 1;\infty )$ Z powyższych wniosków wynika że funkcja $\displaystyle f$ osiąga najmniejszą wartość dla  $\displaystyle x=1$.
$\displaystyle f( 1) =1^{4} -1^{3} -2\cdotp 1+3=1 >0$ 

Zatem, nasza nierównośc jest prawdziwa.

---

**Sposób 5**

Zapiszmy nasza nierówność w postaci

$\displaystyle x^{4}+3>x^{2}+2x$.

Dla $\displaystyle x=0$ naszą nierównośc przyjmuje postać

$\displaystyle 3 >0$ 

i jest oczywiście prawdziwa. Dalej zakładamy, że $\displaystyle x\neq 0.$ 
 
Z nierówności między średnimi dla liczb $\displaystyle x^{4} ,1$ otrzymujemy

$$\displaystyle \frac{x^{4} +1}{2} \geqslant \sqrt{x^{4} \cdotp 1} =|x^{2} |=x^{2} ,\ \ ( 1)$$

a dla liczby $\displaystyle x^{4} ,1,1,1$

<div style="overflow-x:auto;">

$$\displaystyle \frac{x^{4} +1+1+1}{4}  >\sqrt[4]{x^{4} \cdotp 1\cdotp 1\cdotp 1} =\sqrt[4]{x^{4}} =|x| >x \ \ \ \  ( 2)$$

</div>

$$\displaystyle \frac{x^{4} +3}{2} \geqslant 2x$$

Dodając nierówności $\displaystyle ( 1)$ i $\displaystyle ( 2)$ otrzymujemy:

$$\displaystyle \frac{x^{4} +1}{2} +\frac{x^{4} +3}{2} =x^{4} +2\geqslant x^{2} +2x$$

Wracamy do naszej nierówności

$\displaystyle x^{4} +3 >x^{4} +2\geqslant x^{2} +2x$.

C.K.D