---
layout: post
title: "Analiza najtrudniejszych zadań z matury rozszerzonej"
description: W tym artykule przeanalizujemy sposoby rozwiązania jednego z trudniejszych zadań z geometrii które pojawiły się na maturze rozszerzonej w roku 2017.
permalink: /:categories/:year/:month/:title/
featured-image: /assets/img/dowodgeo4.png
featured-image-alt: dowody z geometrii
categories: ["matura-rozszerzona"]
tags: [matura-rozszerzona, geometria]
comments: true
# other options
---

Zadania na dowodzenia są prawdziwą zmorą maturzystów. Zadanie, o ktróym mowa w tym artykule rozwiązało zaledwie 11% maturzystów. Prezentujemy kilka istotnie różnych sposobów rozwiązania tego zadania. Mamy nadzieję że przybliżą one wam istotę rozwiązywanań zadań dowodowych z geometrii.

### MATURA Maj 2017 Zadanie 8.

W trójkącie ostrokątnym $\displaystyle ABC$ bok $\displaystyle AB$ ma długość $\displaystyle c,$ długośc boku $\displaystyle BC$ jest równa $\displaystyle a$ oraz $\displaystyle |\angle ABC|=\beta .$ Dwusieczna kąta $\displaystyle ABC$ przecina bok $\displaystyle AC$ trójkąta w punkie $\displaystyle E.$
Wykaż że, długośc odcinka $\displaystyle BE$ jest równa:

$$\displaystyle \frac{2ac\cdotp cos\frac{\beta }{2}}{a+c}$$

---

**Sposób 1.**

<div class="text-center">
    <img src="/assets/img/dowodgeo1.png" alt="geometria dowody" width="700" height="500" class="img">
</div>

Zauważmy, że $\displaystyle P_{ABC} =P_{ABE} +P_{EBC} .$ Wyznaczymy pola trójkątów korzystając z wzoru z sinusem kąta. Liczymy:

$$\displaystyle P_{ABC} =\frac{1}{2} acsin\beta =\frac{1}{2} ac\cdotp 2sin\frac{\beta }{2} cos\frac{\beta }{2}$$   

(wykorzystaliśmy wzór $\displaystyle sinx=2sin\frac{x}{2} cos\frac{x}{2})$

$$\displaystyle P_{ABE} =\frac{1}{2} c\cdotp |BE|\cdotp sin\frac{\beta }{2}$$


$$\displaystyle P_{EBC} =\frac{1}{2} b\cdotp |BE|\cdotp sin\frac{\beta }{2}$$

Podstawiamy to do naszej równości:

<div style="overflow-x:auto;">
$$\displaystyle \frac{1}{2} ac\cdotp 2sin\frac{\beta }{2} cos\frac{\beta }{2} =\frac{1}{2} a\cdotp |BE|\cdotp sin\frac{\beta }{2} +\frac{1}{2} c\cdotp |BE|\cdotp sin\frac{\beta }{2}$$
</div>


Dzielimy przez $\displaystyle \frac{1}{2} sin\frac{\beta }{2}$ 


$$\displaystyle ac\cdotp 2\cdotp cos\frac{\beta }{2} =a\cdotp |BE|\cdotp +c\cdotp |BE|$$


$$\displaystyle 2ac\cdotp cos\frac{\beta }{2} =|BE|( a+c)$$


$$\displaystyle |BE|=\frac{2ac\cdotp cos\frac{\beta }{2}}{a+c}$$

To kończy dowód.

---

**Sposób 2.**

<div class="text-center">
    <img src="/assets/img/dowodgeo2.png" width="700" height="500" class="img">
</div>

Rozważmy przypadek gdy $\displaystyle a=c.$ Wtedy, trójkąt $\displaystyle ABC$ jest równoramienny, a dwusieczna kąta $\displaystyle \angle ABC$ jest wysokością trójkąta oraz jest prostopadła do $\displaystyle AC$, punkt $\displaystyle E$ jest środkiem boku $\displaystyle AC$. Z trójkąta prostokątnego $\displaystyle ABE$ mamy:

<div style="overflow-x:auto;">

$$\displaystyle cos\frac{\beta }{2} =\frac{y}{c} \ \Leftrightarrow y=c\cdotp cos\frac{\beta }{2} =\frac{2ac\cdotp cos\beta }{2c} =\frac{2ac\cdotp cos\beta }{a+c}$$

</div>

To kończy dowód. 

W dalszej części rozwiązania zakładamy, że $\displaystyle a\neq c$. Wykorzystamy twierdzenie o dwusiecznej i twierdzenie cosinusów. Z twierdziania o dwusiecznej mamy:

$$\displaystyle \frac{AB}{AE} =\frac{BC}{CE}$$

Niech $\displaystyle AE=x$, $\displaystyle BE=y.$ Wówczasz:

<div style="overflow-x:auto;">

$$\displaystyle CE=\frac{BC\cdotp AE}{AB} =\frac{ax}{c}$$

</div>

Z twierdzenia cosiusów dla trójkąta $\displaystyle ABC:$

$$\displaystyle x^{2} =c^{2} +y^{2} -2cy\cdotp cos\frac{\beta }{2} .$$

Z twierdzenia cosinusów dla trójkąta $\displaystyle EBC:$

$$\displaystyle  \frac{a^{2} x^{2}}{c^{2}} =a^{2} +y^{2} -2ay\cdotp cos\frac{\beta }{2}$$

Dzielimy równaia $\displaystyle (1)$ i $\displaystyle (2)$:

$$\displaystyle \ \ \frac{x^{2}}{\frac{a^{2} x^{2}}{c^{2}}} =\frac{c^{2} +y^{2} -2cy\cdotp cos\frac{\beta }{2}}{a^{2} +y^{2} -2ay\cdotp cos\frac{\beta }{2}}$$


$$\displaystyle \ \frac{c^{2}}{a^{2}} =\frac{c^{2} +y^{2} -2cy\cdotp cos\frac{\beta }{2}}{a^{2} +y^{2} -2ay\cdotp cos\frac{\beta }{2}}$$

<div style="overflow-x:auto;">

$$\displaystyle \ c^{2}\left( a^{2} +y^{2} -2ay\cdotp cos\frac{\beta }{2}\right) =a^{2}\left( c^{2} +y^{2} -2cy\cdotp cos\frac{\beta }{2}\right)$$

</div>

<div style="overflow-x:auto;">

$$\displaystyle \ c^{2} a^{2} +c^{2} y^{2} -2ayc^{2} \cdotp cos\frac{\beta }{2} =a^{2} c^{2} +a^{2} y^{2} -2cya^{2} \cdotp cos\frac{\beta }{2}$$

</div>

<div style="overflow-x:auto;">

$$\displaystyle c^{2} y^{2} -2ayc^{2} \cdotp cos\frac{\beta }{2} =a^{2} y^{2} -2cya^{2} \cdotp cos\frac{\beta }{2}$$

</div>

Dzielimy równośc przez $\displaystyle y$ i przekształcamy dalej:

$$\displaystyle y\left( c^{2} -a^{2}\right) =2ac( c-a) \cdotp cos\frac{\beta }{2}$$


$$\displaystyle y( c-a)( c+a) =2ac( c-a) \cdotp cos\frac{\beta }{2}$$


$$\displaystyle ( c-a)\left( y( c+a) -2ac\cdotp cos\frac{\beta }{2}\right) =0$$


Ponieważ $\displaystyle a\neq c$, to:


$$\displaystyle y( a+c) =2ac\cdotp cos\frac{\beta }{2}$$


$$\displaystyle y=\frac{2ac\cdotp cos\frac{\beta }{2}}{a+c}$$


Co należało wykazać.

---

**Sposób 3.**

<div class="text-center">
    <img src="/assets/img/dowodgeo3.png" width="700" height="500" class="img">
</div>

Zaprezentujemy rozwązanie analityczne. Umieścimy tójkąt $\displaystyle ABC$ na płaszczyźnie kartezjańskiej tak, że: 

$\displaystyle B=( 0,0) ,\ A=( m,km)$ i $\displaystyle \ C=( n,-kn)$     

gdzie: $\displaystyle m,n >0\ \ \land m\neq n$ oraz$\displaystyle \ k\in \mathbb{R}_{+} .$ Ponadto, oznaczmy przez $\displaystyle D=( m,0)$ rzut punku A na osią $\displaystyle OX.$ Wtedy, cosinus kąta $\displaystyle \frac{\beta }{2}$ wynosi:

<div style="overflow-x:auto;">

$$\displaystyle cos\frac{\beta }{2} =\frac{|BD|}{|AB|} =\frac{m}{\sqrt{m^{2} +k^{2} m^{2}}} =\frac{m}{m\sqrt{1+k^{2}}} =\frac{1}{\sqrt{1+k^{2}}}$$

</div>

Bok $\displaystyle AB$ jest  zawarty w prostej o równaniu $\displaystyle y=kx,$ a bok $\displaystyle BC$ w prostej $\displaystyle y=-kx.$

Wtedy dwusieczna kąta $\displaystyle \angle ABC$ jest zawarta w osi $\displaystyle OX.$ Wówczas, punkt $\displaystyle E$ będzie leżał na prostej $\displaystyle OX$.
 
Równanie prostej $\displaystyle AC$ wygląda tak:

$$\displaystyle y_{\displaystyle AC}=\frac{km+kn}{m-n}( x-m)+km.$$

Współrzędne punktu $\displaystyle E$ są rozwiązaniem równania $\displaystyle y_{AC} =0.$ Liczymy: $\displaystyle y_{AC} =0$

$$\displaystyle \frac{km+kn}{m-n}( x-m) +km=0$$


$$\frac{km+kn}{m-n}(x-m) =-km$$

$$\frac{m+n}{m-n}(x-m) =-m$$

$$(x-m)=\frac{-m(m-n)}{m+n}$$

$$x=\frac{-m^{2} +mn}{m+n} +\frac{m^{2} +mn}{m+n}$$

$$x=\frac{2mn}{m+n}.$$

Punkt $\displaystyle E$ ma współrzędne:

$$\displaystyle E=\left( 0,\frac{2mn}{m+n}\right)$$

Długość boku $\displaystyle AB$ wynosi: 

$$\displaystyle c=\sqrt{m^{2} +k^{2} m^{2}} =m\sqrt{1+k^{2}}$$

analogicznie:

$$\displaystyle a=n\sqrt{1+k^{2}}$$

Długośc odnicka $\displaystyle BE$ jest równa:

$\displaystyle \left\|BE\right\|=\frac{2mn}{m+n}$

Wyznaczamy $\displaystyle m$ oraz $\displaystyle n$ z długości boków:

$$c=m\sqrt{1+k^{2}} \Leftrightarrow m=\frac{c}{\sqrt{1+k^{2}}}$$

$$a=n\sqrt{1+k^{2}} \Leftrightarrow n=\frac{a}{\sqrt{1+k^{2}}}$$

$$|BE|=2\cdotp \frac{\frac{ac}{1+k^{2}}}{\frac{a+c}{\sqrt{1+k^{2}}}} =2\cdotp \frac{ac}{( a+c)\sqrt{1+k^{2}}} $$

Wykorzystując równość $\displaystyle (A)$ mamy:

$$\displaystyle |BE|=\frac{2ac\cdotp cos\frac{\beta }{2}}{a+c} .$$

Gdy $\displaystyle m=n,$to trójkąt $\displaystyle ABC$ jest równoramienny, a bok $\displaystyle AC$ jest prostopadły to osi $\displaystyle OX.$ Punkt $\displaystyle E$ ma współrzędne $\displaystyle E=( 0,m)$. Mamy:

<div style="overflow-x:auto;">

$$\displaystyle |BE|=m=\frac{c}{\sqrt{1+k^{2}}} =\frac{2c^{2} cos\frac{\beta }{2}}{2c} =\frac{2ac\cdotp cos\frac{\beta }{2}}{a+c}$$

</div>

To kończ dowód.

---

**Sposób 4.**

<div class="text-center">
    <img src="/assets/img/dowodgeo4.png" width="700" height="500" class="img">
</div>

Niech $\displaystyle F\neq B$ będzie takim punktem leżącym na półprostej $\displaystyle AB^{\rightarrow }$, że $\displaystyle \left\|BC\right\|=\left\|BF\right\|.$ Widzimy, że:

<div style="overflow-x:auto;">

$$\displaystyle \angle BFC=\angle BCF=\frac{180^{\circ } -\angle CBF}{2} =\frac{\beta }{2} =\angle ABE=\angle EBC$$

</div>

Z trójkąta prostokątnego $\displaystyle BGF:$

<div style="overflow-x:auto;">

$$\displaystyle cos\angle BFG=cos\angle \frac{\beta }{2} =\frac{|GF|}{|BF|} =\frac{\frac{1}{2} \cdotp CF}{a} \ \Leftrightarrow CF=2a\cdotp cos\frac{\beta }{2}$$

</div>

Trójkąty $\displaystyle ABE$ i $\displaystyle AFC$ sa podobne na mocy cechy $\displaystyle KKK.$ Z podobieństwa otrzymujemy:

<div style="overflow-x:auto;">

$$\displaystyle \frac{c}{c+a} =\frac{|BE|}{|CF|} \ \Leftrightarrow |BE|=\frac{c\cdotp |CF|}{a+c} =\frac{2ac\cdotp cos\frac{\beta }{2}}{a+c}$$

</div>

To kończy dowód.

---

**Sposób 5.**

<div class="text-center">
    <img src="/assets/img/dowodgeo5.png" width="700" height="500" class="img">
</div>
 
Przyjmijmy oznaczenia:

<div style="overflow-x:auto;">

$$\displaystyle |\angle ABE=\angle EBC=\frac{\beta }{2} ,|AE|=x,\ |EC|=z,\ |BE|=y,|CG|=h.$$

</div>

Ponadto, niech $\displaystyle F$ będzie rzutem punktu $\displaystyle E$ na bok $\displaystyle AB,$ a punkt $\displaystyle G$ będzie rzutem punktu $\displaystyle C$ na bok $\displaystyle AB$. Trójkąty $\displaystyle AFE$ i $\displaystyle AGC$ są podobne, ponieważ są prostokątne i mają wspólny kąt ostry $\displaystyle \angle A.$ Z ich podobieństwa otrzymujemy:

$$\displaystyle \frac{t}{x} =\frac{h}{x+z} .$$

Z twierdzenia o dwusiecznej mamy:

$$\displaystyle \frac{x}{c} =\frac{z}{a} \ \Leftrightarrow z=\frac{ax}{c}$$

Z trójkąta prostokątnego $\displaystyle BGC:$

$$\displaystyle sin\beta =\frac{h}{a} \ \Leftrightarrow h=a\cdotp sin\beta$$

Z trójkąta prostokątnego $\displaystyle BFC:$

$$\displaystyle sin\frac{\beta }{2} =\frac{t}{y} \Leftrightarrow t=y\cdotp sin\frac{\beta }{2}$$

Wstawiając do równości $\displaystyle (1)$ równości $\displaystyle ( 3)$ i $\displaystyle ( 4) \ ,$wykorzystując równość $\displaystyle (2)$ otrzymujemy i korzystając z wzoru $\displaystyle sin\alpha =2sin\frac{\alpha }{2} cos\frac{\alpha }{2}$:
  
$$\frac{y\cdotp sin\frac{\beta }{2}}{x} =\frac{a\cdotp sin\beta }{x+z}$$

$$\frac{y\cdotp sin\frac{\beta }{2}}{x} =\frac{a\cdotp 2sin\frac{\beta }{2} cos\frac{\beta }{2}}{x+z}$$

$$\frac{y}{x} =\frac{2a\cdotp cos\frac{\beta }{2}}{x+z}$$

$$y=\frac{2ax\cdotp cos\frac{\beta }{2}}{x+\frac{ax}{c}} =\frac{2ac\cdotp cos\frac{\beta }{2}}{a+c} .$$

To kończy dowód.