--- 
layout: post 
title: "Dowód klasycznej definicji prawdopodobieństwa"
description: Artyukł ten jest poświęcony elementaryn podejściem do prawdopodobieństwa. Dowiesz się wiele rzeczy których w szkole się nie nauczysz. Artykł ten pozwoli Ci bardzo dobrze zrozumieć sens prawdopodobieństwa.
author: Marek Kryspin
date: 2019-08-30
permalink: /:categories/:year/:month/:title/
featured-image: /assets/img/prawdopodobienstwo.jpg
categories: "matura-rozszerzona"
tags: [prawdopodobienstwo, matura-rozszerzona]
comments: true 
# other options 
---

## 1. Definicja prawdopodobieństwa klasycznego
Często za definicję prawdopodobieństwa służy wzór $\mathbb{P}\left(A\right)=\frac{|A|}{|\Omega|}$ określający względny stosunek liczności zdarzania (sprzyjającego) $A$ do liczebności przestrzeni zdarzań elementarnych $\Omega$ jednak mimo jego subiektywnej intuicyjności nie jest on aksjomatem prawdopodobieństwa dlatego nazywanie powyższego wzoru ''definicją'' nie idzie w parze z formalizmem matematycznym. Jednak nawet według Laplace’a był to dobry punkt wyjścia do budowania ogólnej teorii prawdopodobieństwa którą obecnie nazywa się klasyczną definicją. Istnieją bowiem głębsze intuicje definiujące prawdopodobieństwo jako funkcję $\mathbb{P}: \mathcal{P}(\Omega)\to[0,1]$ która spełnia dwa aksjomaty Kołmogorowa:

**I** dla dowolnych rozłącznych podzbiorów $\Omega$ tj. $A\cap B=\varnothing$ zachodzi 

$$\mathbb{P}\left(A\cup B\right)=\mathbb{P}\left(A\right)+\mathbb{P}\left(B\right)$$ 

**II** Prawdopodobieństwo zdarzania pewnego wynosi jeden

$${P}(\Omega)=1$$ 

Pierwszy z aksjomatów zakłada addytywność funkcji prawdopodobieństwa co intuicyjnie oznacza, że gdy zdarzania są rozłączne to prawdopodobieństwo sumy jest równe sumie prawdopodobieństw. Kolejny z aksjomatów to jedynie kwestia umowna definiująca jak rozumiemy zdarzenie pewne.

Aksjomat I można przeformułować indukcyjnie dla dowolnej przeliczalnej sumy podzbiorów $\Omega$ parami rozłącznych tj. $A_1,...,A_n\subseteq\Omega$ takie, że dla dowolnych równych indeksów $i,j\in\\{1,...,n\\}$ zachodzi $A_i\cap A_j=\varnothing$ wtedy:

$$\mathbb{P}\left(\bigcup_{k=1}^nA_k\right)=\sum_{k=1}^n\mathbb{P}\left(A_k\right)$$

Okazuje się, że gdy zdarzania elementarne mają jednakowe prawdopodobieństwo, co formalnie oznacza, że dla $\Omega=\bigcup_{i=1}^n\\{\omega_i\\}$ zachodzi:

$$\left(\forall i,j\in\left\{1,...,n\right\}\right)\left(\mathbb{P}\left(\left\{\omega_i\right\}\right)=\mathbb{P}\left(\left\{\omega_j\right\}\right)\right)$$

To istnieje tylko jedna funkcja spełniająca aksjomaty I i II oraz przypisująca zdążenia elementarnym równe prawdopodobieństwo. Mianowicie oznaczmy, że $\mathbb{P}\left(\\{\omega_i\\}\right)=p$ oraz rozważmy dowolny podzbiór $A\subseteq\Omega$. Zauważmy teraz, że korzystając z aksjomatu I dla sum przeliczalnych można napisać:

$$\mathbb{P}\left(\Omega\right)=\mathbb{P}\left(\bigcup_{i=1}^n\left\{\omega_{i}\right\}\right)=\sum_{i=1}^n\mathbb{P}\left(\left\{\omega_{i}\right\}\right)=np$$

Wiemy również z aksjomatu II, że $\mathbb{P}(\Omega)=1$ zatem $p=\frac{1}{n}$. Postępując podobnie dla zbioru $A$ który zapisujemy jako sumę singletonów z $\Omega$ dostajemy:

<div style="overflow-x:auto;">

$$\mathbb{P}\left(A\right)=\mathbb{P}\left(\bigcup_{j=1}^k\left\{\omega_{i_j}\right\}\right)=\sum_{j=1}^k\mathbb{P}\left(\left\{\omega_{i_j}\right\}\right)=kp$$

</div>

A zatem 

$$\mathbb{P}\left(A\right)=\frac{k}{n}=\frac{|A|}{|\Omega|}$$

Okazuje się więc, że zakładając aksjomaty Kołmogorowa oraz równe prawdopodobieństwo każdego zdarzania postaci $\\{\omega_i\\}$ wzór nazywany definicją jest jedynym słusznym wyborem. Pokazuje to, że nie ma innego sposoby liczenia prawdopodobieństwa przy takich założeniach. A o samych założeniach można powiedzieć, że są intuicyjne wszak trudno sobie wyobrazić sytuację w której prawdopodobieństwa zdarzeń nie mających ze sobą wspólnego nie można by policzyć jako sumy prawdopodobieństw. Trudno też myśleć o sytuacji w której nie spełnione było by równe rozłożenia prawdopodobieństwa na każe ze zniżeń elementarnych oznaczające na przykład, że podczas losowania kul z urny część kul ucieka i chowa się prze ręką wybierającego.

## 2. Własności prawdopodobieństwa Podstawowe własności prawdopodobieństwa.
Przyjmijmy podstawowy zestaw aksjomatów Kołmogorowa tj. I i II. Wiemy już, że zakładając równe rozłożenia prawdopodobieństwa można otrzymać tak zwaną klasyczną definicję prawdopodobieństwa jednak to założenia nie jest wymagane by pokazać pewne własności wynikające wprost z aksjomatycznej definicji. Wzory te znane są większości maturzystów ale ich dowody mogą pogłębić ich zrozumienie

- prawdopodobieństwo zdarzenia niemożliwego wynosi zero 

$$\mathbb{P}(\varnothing)=0$$

Dowód tego faktu jest natychmiastowym wnioskiem z I aksjomatu. Podstawiając za $A$ oraz $B$ zbiór pusty co można zrobić wszak założenia są spełnione $A\cap B=\varnothing$ dostaniemy

$$\mathbb{P}(\varnothing)=\mathbb{P}(\varnothing)+\mathbb{P}(\varnothing)$$

A stąd mamy już tezę.

- Prawdopodobieństwo zdarzania przeciwnego do $A$ tj. $A^c=\Omega\backslash A$ wynosi

$$\mathbb{P}(A^c)=1-\mathbb{P}(A)$$

Dowód tego faktu opiera się na spostrzeżeniu iż $A\cup A^c=\Omega$ oraz $A\cap A^c=\varnothing$ zatem z aksjomatu I i II mamy:

$$\mathbb{P}(\Omega)=\mathbb{P}(A\cup A^c)=\mathbb{P}(A^c)+\mathbb{P}(A)=1$$

stąd po przeniesieniu $\mathbb{P}(A)$ na drugą stronę równania mamy tezę. 

- Prawdopodobieństwo dowolnej sumy podzbiorów $\Omega$ 

$$\mathbb{P}\left(A\cup B\right)=\mathbb{P}\left(A\right)+\mathbb{P}\left(B\right)-\mathbb{P}\left(A\cap B\right)$$

Dowód tego tego faktu można przeprowadzić powołując się na indukcyjnie uogólniony aksjomat I dla trzech zbiorów. Co prawda nie potrzeba do tego indukcyjnego uogólnienia ale skoro już je mamy (choć bez dowodu!) to rozważmy trzy parami rozłączne podzbiory $\Omega$ dane przez zbiory $A\backslash B, A\cap B, B\backslash A$. Łatwo zauważyć, że sumują się one do $A\cup B$ a zatem:

<div style="overflow-x:auto;">

$$\mathbb{P}\left(A\cup B\right)=\mathbb{P}\left(A\backslash B\right)+\mathbb{P}\left(A\cap B\right)+\mathbb{P}\left(B\backslash A\right)$$ 

</div>

Zauważmy, że gdy dodamy i odejmiemy $\mathbb{P}\left(A\cap B\right)$ to można będzie zapisać:

<div style="overflow-x:auto;">

$$\mathbb{P}\left(A\cup B\right)=\underbrace{\mathbb{P}\left(A\backslash B\right)+\mathbb{P}\left(A\cap B\right)}_{\mathbb{P}(A)}+\underbrace{\mathbb{P}\left(B\backslash A\right)+\mathbb{P}\left(A\cap B\right)}_{\mathbb{P}(B)}-\mathbb{P}\left(A\cap B\right)$$

</div>

Przy czym podkreślone klamry wynikają z aksjomatu I w zastosowanego w drugą stronę i faktu rozłączności wszystkich zbiorów. Co kończy dowód.