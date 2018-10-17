---
theme : "white"
transition: "zoom"
highlightTheme: "darkula"
---

# Projeto New Ages

### História de uma migração para Delphi Seattle

Migrar de Delphi 5 para a release mais recente e apresentar um layout moderno. Contaremos como foi nosso processo de migração mostrando os principais pontos de atenção e as lições aprendidas para o futuro.

<small>Created by [Alessandro Fragnani](http://twitter.com/alefragnani) / [@alefragnani](http://twitter.com/alefragnani)</small>

---

### Quem sou eu

* Delphi
 * 20 anos de experiência
 * Softplan - Suporte Interno UNJ
 * Líder Técnico do Time New Age

* OpenSource
 * 5 anos
 * Delphi / Sublime Text / Atom / Visual Studio Code
 * Delphi, Python, CoffeeScript e TypeScript
 * github.com/alefragnani

---

## Agenda

* Contextualização
* História
* Lições Aprendidas
* Perguntas

---

## Contextualização

--

### Softplan

* 27 anos
* Sede em Florianópolis/SC
* Unidades em NNN estados
* 1600 funcionários

--

### UNJ - Unidade da Justiça

* Contexto Social
* NNN Funcionários
* NNN desenvolvedores
* 150 desenvolvedores Delphi
* 4 Famílias de Sistemas

--

### UNJ - Famílias

* 50 componentes de terceiros
* 25 frameworks
* 7 sistemas independetentes
* 300 projetos entre DPKs e DPRs
* 12 mil arquivos
* 10 milhões de linhas código

---

## História (Delphi)

--

### Inovações no Delphi nesses 22 anos

Delphi Innovations from Delphi 1 through XE5

https://www.slideshare.net/embarcaderotechnet/delphi-innovations-from-delphi-1-through-delphi-xe5?qid=be22c93f-401c-43de-9899-f90ee972086b&v=&b=&from_search=1

Delphi What's New Seattle

https://www.embarcadero.com/products/delphi/whats-new

--

## Delphi 5 até Seattle

SOAP / XP Themes / Namespaces / Refactoring / Operator Overloading / Live Code Templates / Sync Edit / FastMM / MSBuild / dbExpress / UNICODE / Generics / DataSnap / PNG / IDE Insight / RTTI / Audit and Metrics / RegEx / Version Insight / Indy / Cloud / LiveBindings / 64 Bits / OSX / FireMonkey / Mobile / MetroUI / iOS / ARC / FireDAC / Android / REST / VCL Styles / Multi-Device Preview / App Tethering / Bluetooth / Beacons / HTTPS / GetIt / Castalia / Git / EMS / Parallel / OmniXML / Windows 10 / Double Size Projects / WinRT / JSON / Multi Monitor / DUnitX / NoSQL / HiDPI / Linux 

---

## História (New Age)

--

Esse é o **terceiro** projeto de migração na UNJ, mas é o primeiro **bem sucedido**.

No **primeiro**, migramos apenas os componentes de terceiros e o framework básico.

No **segundo**, nem ao menos finalizamos os componentes de terceiros.

--

## New Age

Início em 2013

Primeira versão _compilada_ em Março/2016

Em Outubro/2016 houveram mudanças de prioridade, e precisávamos migrar _outro sistema_ em 3 meses!

Estamos migrando o _segundo sistema_ com um prazo de 2 meses!

---

## Por que foi diferente dessa vez?

Lições Aprendidas

---

**Lição 1 ** 

--

### Por que migrar?

* Minimizar o quanto reinventamos a roda
* Facilitar a comunicação com novas tecnologias
* Suporte a 64bits
* Suporte a Linux
* Computação Paralela
* Evoluções da IDE/Linguagem

Reasons to Migrate to XE2

https://www.slideshare.net/andreanolanusse/reasons-to-migrate-to-delphi-xe

--

**Lição 1: Tenha uma Motivação**

Você precisa ter motivos concretos para migrar. Motivos técnicos e de negócio, que justifiquem o esforço.

--

**Lição 2 ** 

--

### Quem vai migrar?

Nas duas tentativas anteriores, o projeto era tratado como um _side project_, contando apenas com voluntários. 

Dessa vez, ele foi abraçado pela Direção/Gerência, ficando sobre responsabilidade do Suporte Interno.

Havia um time _responsável pelo projeto_.

--

**Lição 2: Forme um Time**

Havendo um time responsável, que responda e cobre, as coisas andam.

--

**Lição 3 ** 

--

### Afinal de contas, o que significa 'Migrar'?

Embarcadero Migration Upgrade Center
https://www.embarcadero.com/rad-in-action/migration-upgrade-center

Marco Cantù
http://blog.marcocantu.com/blog/migrating_delphi_code_tech_challenges.html

Andreano Lanusse
http://www.andreanolanusse.com/pt/white-paper-razoes-para-migrar-para-o-delphi-xe2-o-que-voce-pode-ter-perdido-desde-o-delphi-7/

Três desafios básicos de qualquer migração:

* Componentes de Terceiros
* Acesso a Dados
* Unicode

--

**Lição 3: Pesquise**

Aprenda sobre o assunto, busque outras experiências.

--

**Lição 4 ** 

--

### Você dá conta de fazer tudo sozinho?

O time ainda não podia ser alocado 100% do tempo, mas o projeto não podia parar. Além disso, precisávamos aprender sobre o novo Delphi.

Contratamos a AquaSoft para migrar nosso framework.

--

**Lição 4: Procure Parceiros**

Esteja aberto a terceirização, interna ou externa

--

**Lição 5 ** 

--

### O que será migrado?

Avaliamos partes do sistema que eram obsoletas, componentes que poderiam ser substituídos por _similares_, ou que já foram incorporados _nativamente_ ao Delphi. 

Pesquisamos os componentes que _ainda existiam no mercado_.

Eliminamos 15 componentes.

Além disso, estrategiamente, todos os aplicativos precisam ser migrados?

--

**Lição 5: Migre Apenas o Necessário**

Não desperdice energia. Recicle. 

--

## _'Standing on the shoulders of giants'_ 

* 1: Tenha uma Motivação
* 2: Forme um Time
* 3: Pesquise
* 4: Procure Parceiros
* 5: Migre Apenas o Necessário

--

**Lição 6 ** 

--

### Como você garante que continua funcionando?

Nossa cobertura de testes era baixa, e não conhecíamos o sistema a fundo. 

Precisamos alocar um Tester full time, e isso foi essencial.

--

**Lição 6: Desenvolva e/ou Amplie os Testes Automatizados**

Testes automatizados lhe dão uma _rede de segurança_.

--

**Lição 7 ** 

--

### Na minha máquina funciona :)

Trabalhando de forma incremental, com voluntários e equipes terceirizadas, conflitos e retrabalhos podem ocorrer. É necessário organizar o trabalho e manter uma _linha de produção_.

Para quem não conhece, minha apresentação no **Delphi Squad** está no GitHub (https://github.com/alefragnani/delphi-squad-demo). 

--

**Lição 7: Mantenha um Build Contínuo**

A migração incremental minimiza a chance de regressões e um ambiente _reproduzível_ facilita o trabalho em equipe e com times externos. 

--

**Lição 8 ** 

--

### Retrocompatibilidade / Multiplataforma?

Diversos `Hints` / `Warnings` dessa natureza apareceram, e nosso build _ficou louco_.

* Retrocompatibilidade
 * Warning: W1000 Symbol 'StrPas' is deprecated: 'Moved to the AnsiStrings unit'
 * Warning: W1050 WideChar reduced to byte char in set expressions.  Consider using 'CharInSet' function in 'SysUtils' unit.
* Plataforma
 * W1002 Symbol 'FileGetAttr' is specific to a platform
 * W1005 Unit 'Vcl.FileCtrl' is specific to a platform
* Outros
 * Hint: H2365 Override method TMyStringList.destroy should match case of ancestor TStringList.Destroy
 * Warning: W1055 PUBLISHED caused RTTI ($M+) to be added to type 'TYourClass'
 * Hint: H2443 Inline function 'TCriticalSection.Leave' has not been expanded because unit 'System.SyncObjs' is not specified in USES list
 * Warning: W1010 Method 'ToString' hides virtual method of base type 'TObject'

Incorporados
 * FastMM agora é o gerenciador de memória padrão no Delphi, e pode ser removido do DPR
 * PNGImage foi incorporado ao Delphi, na unit `VCL.Imaging.PNGImage`, e a classe foi alterada de `TPNGObject` para `TPngImage`
 * GIFImage foi incorporado ao Delphi, na unit `VCL.Imaging.GIFImg`

--

**Lição 8: Avalie a necessidade de Retrocompatibilidade / Multiplataforma**

A migração incremental minimiza a chance de regressões e um ambiente _reproduzível_ facilita o trabalho em equipe e com times externos. 

--

**Lição 9 ** 

--

### Seus pobremas acabaram! _(by Seu Creysson)_

Imaginávamos que **O Delphi Novo** seria um mar de rosas

* Estabilização da IDE
  * Quantidade de Pacotes
  * Compilação Debug/Release
  * MSBUild
  * Abertura de Formulários
  * Lentidão no Code Insight
  * Falha no Error Insight
  * Congelamento ao abrir Projetos (cache)
* Codificação
  * Uso de `with` em blocos que referenciam a `Size` com `TRect`
  * `FInternalColor` em `TDBGrid`

--

**Lição 9: Prepare-se para o Improvável**

Não é porque você está indo para **O Novo Delphi** que os problemas atuais estarão resolvidos. Esteja preparado!

--

**Lição 10 ** 

--

### Vamos aproveitar para refatorar?

Originalmente iríamos migrar _as is_, deixando o sistema igual ao Delphi 5, no que diz respeito a visual e comportamento. Erros pré-existentes não seriam corrigidos.

Mas então, decidiu-se fazer um _facelift_ na aplicação, e tivemos de compatibilizar os componentes para o VCL Styles. Então novos desafios apareceram (problemas no VCL Styles), além da necessidade de _modificar_ o VCL Styles para antender os anseios de UX.

Erros Reportados: 
https://quality.embarcadero.com/browse/RSP-18498?filter=-2&jql=reporter%20%3D%20'alessandrofm%40softplan.com.br'%20ORDER%20BY%20createdDate%20DESC

--

**Lição 10: Não misture Migração com Evolução/Correção**

Quanto menos variáveis houver numa equação, mais fácil será para resolvê-la

--

**Lição 11 ** 

--

### Estão convertendo o sistema para Java?

Houveram mudanças nos planos, repriorizações, prazos foram alterados, e nem todos os envolvidos participavam das reuniões. Por vezes, informações desencontradas geraram stress entre as equipes.

Havia um _site_ do projeto mas pouca divulgação. Precisamos deixar _público e vivo_ esse material, dando ênfase as informações críticas.

--

**Lição 11: Comunique os Envolvidos**

Informe a todos do andamento do projeto e mantenha um _contrato_ com os envolvidos. 

---






---

## Vertical Slides

Slides can be nested inside of each other.

Use the _Space_ key to navigate through all slides.

<a href="#" class="navigate-down">
    <img width="178" height="238" data-src="https://s3.amazonaws.com/hakim-static/reveal-js/arrow.png" alt="Down arrow">
</a>

--

## Basement Level 1

Nested slides are useful for adding additional detail underneath a high level horizontal slide.

--

## Basement Level 2

That's it, time to go back up.
						
<a href="#/2">
    <img width="178" height="238" data-src="https://s3.amazonaws.com/hakim-static/reveal-js/arrow.png" alt="Up arrow" style="transform: rotate(180deg); -webkit-transform: rotate(180deg);">
</a>

---

## Slides

Not a coder? Not a problem. There's a fully-featured visual editor for authoring these, try it out at [http://slides.com](http://slides.com).

---

## Point of View

Press **ESC** to enter the slide overview.

Hold down alt and click on any element to zoom in on it using [zoom.js](http://lab.hakim.se/zoom-js). Alt + click anywhere to zoom back out.

---

## Touch Optimized

Presentations look great on touch devices, like mobile phones and tablets. Simply swipe through your slides.

---


						## Markdown support

						Write content using inline or external Markdown.
						Instructions and more info available in the [readme](https://github.com/hakimel/reveal.js#markdown).

--
```
						  ## Markdown support

						  Write content using inline or external Markdown.
						  Instructions and more info available in the [readme](https://github.com/hakimel/reveal.js#markdown).
						```

---

## Fragments

Hit the next arrow...

... to step through ...
<span class="fragment">... a</span> <span class="fragment">fragmented</span> <span class="fragment">slide.</span>

Note:
This slide has fragments which are also stepped through in the notes window.

--

## Fragment Styles

There's different types of fragments, like:

grow    <!-- .element: class="fragment grow" -->

shrink  <!-- .element: class="fragment shrink" -->

fade-out    <!-- .element: class="fragment fade-out " -->

fade-up (also down, left and right!) <!-- .element: class="fragment fade-up" -->

current-visible <!-- .element: class="fragment current-visible" -->

Highlight <span class="fragment highlight-red">red</span> <span class="fragment highlight-blue">blue</span> <span class="fragment highlight-green">green</span>

---

## Transition Styles

You can select from different transitions, like:  
[None](?transition=none#/transitions) - [Fade](?transition=fade#/transitions) - [Slide](?transition=slide#/transitions) - [Convex](?transition=convex#/transitions) - [Concave](?transition=concave#/transitions) - [Zoom](?transition=zoom#/transitions)

---

## Themes

reveal.js comes with a few themes built in:  
<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/black.css'); return false;">Black (default)</a> -
<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/white.css'); return false;">White</a> -
<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/league.css'); return false;">League</a> -
<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/sky.css'); return false;">Sky</a> -
<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/beige.css'); return false;">Beige</a> -
<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/simple.css'); return false;">Simple</a> <br>
<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/serif.css'); return false;">Serif</a> -
<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/blood.css'); return false;">Blood</a> -
<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/night.css'); return false;">Night</a> -
<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/moon.css'); return false;">Moon</a> -
<a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/solarized.css'); return false;">Solarized</a>

---

<!-- .slide: data-background="#dddddd" -->
## Slide Backgrounds

Set `data-background="#dddddd"` on a slide to change the background color. All CSS color formats are supported.
						<a href="#" class="navigate-down">
							<img width="178" height="238" data-src="https://s3.amazonaws.com/hakim-static/reveal-js/arrow.png" alt="Down arrow">
						</a>

--

<!-- .slide: data-background="https://s3.amazonaws.com/hakim-static/reveal-js/image-placeholder.png" -->

## Image Backgrounds

```markdown
<!-- .slide: data-background="https://s3.amazonaws.com/hakim-static/reveal-js/image-placeholder.png" -->
```

--

<!-- .slide: data-background="https://s3.amazonaws.com/hakim-static/reveal-js/image-placeholder.png" data-background-repeat="repeat" data-background-size="100px" -->

## TILED BACKGROUNDS				

```markdown
<!-- .slide: data-background="https://s3.amazonaws.com/hakim-static/reveal-js/image-placeholder.png" data-background-repeat="repeat" data-background-size="100px" -->
```

--

<!-- .slide: data-background-video="https://s3.amazonaws.com/static.slid.es/site/homepage/v1/homepage-video-editor.mp4,https://s3.amazonaws.com/static.slid.es/site/homepage/v1/homepage-video-editor.webm" data-background-color="#000000" -->

## Video Backgrounds				

```markdown
<!-- .slide: data-background-video="https://s3.amazonaws.com/static.slid.es/site/homepage/v1/homepage-video-editor.mp4,https://s3.amazonaws.com/static.slid.es/site/homepage/v1/homepage-video-editor.webm" data-background-color="#000000" -->
```

--

<!-- .slide: data-background="http://i.giphy.com/90F8aUepslB84.gif" -->

## ... and GIFs!				

```markdown
<!-- .slide: data-background="http://i.giphy.com/90F8aUepslB84.gif" -->
```

---

<!-- .slide: data-transition="slide" data-background="#4d7e65" data-background-transition="zoom" -->

## Background Transitions

Different background transitions are available via the backgroundTransition option. This one's called "zoom".

---

<!-- .slide: data-transition="slide" data-background="#b5533c" data-background-transition="zoom" -->

## Background Transitions

You can override background transitions per-slide.

---

## Pretty Code
```js
function linkify( selector ) {
  if( supports3DTransforms ) {

    var nodes = document.querySelectorAll( selector );

    for( var i = 0, len = nodes.length; i &lt; len; i++ ) {
      var node = nodes[i];

      if( !node.className ) {
        node.className += ' roll';
      }
    }
  }
}
```

Code syntax highlighting courtesy of [highlight.js](http://softwaremaniacs.org/soft/highlight/en/description/).

---

## Marvelous List

*   No order here
*   Or here
*   Or here
*   Or here

---

## Fantastic Ordered List

1.  One is smaller than...
2.  Two is smaller than...
3.  Three!

---

## Tabular Tables
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

---

## Clever Quotes

These guys come in two forms, inline: <q cite="http://searchservervirtualization.techtarget.com/definition/Our-Favorite-Technology-Quotations">“The nice thing about standards is that there are so many to choose from”</q> and block:

> “For years there has been a theory that millions of monkeys typing at random on millions of typewriters would reproduce the entire works of Shakespeare. The Internet has proven this theory to be untrue.”

---

## Intergalactic Interconnections

You can link between slides internally, [like this](#/2/3).

---

## Speaker View

There's a [speaker view](https://github.com/hakimel/reveal.js#speaker-notes). It includes a timer, preview of the upcoming slide as well as your speaker notes.

Press the _S_ key to try it out.

<aside class="notes">Oh hey, these are some notes. They'll be hidden in your presentation, but you can see them if you open the speaker notes window (hit 's' on your keyboard).</aside>

---

## Export to PDF

Presentations can be [exported to PDF](https://github.com/hakimel/reveal.js#pdf-export), here's an example:

<iframe data-src="https://www.slideshare.net/slideshow/embed_code/42840540" width="445" height="355" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:3px solid #666; margin-bottom:5px; max-width: 100%;" allowfullscreen=""></iframe>

---

## Global State

Set `data-state="something"` on a slide and `"something"` will be added as a class to the document element when the slide is open. This lets you apply broader style changes, like switching the page background.

---

<!-- .slide: data-state="customevent" -->

## State Events

Additionally custom events can be triggered on a per slide basis by binding to the `data-state` name.
```js
Reveal.addEventListener( 'customevent', function() {
	console.log( '"customevent" has fired' );
} );
```

---

## Take a Moment

Press B or . on your keyboard to pause the presentation. This is helpful when you're on stage and want to take distracting slides off the screen.

---

## Much more

*   Right-to-left support
*   [Extensive JavaScript API](https://github.com/hakimel/reveal.js#api)
*   [Auto-progression](https://github.com/hakimel/reveal.js#auto-sliding)
*   [Parallax backgrounds](https://github.com/hakimel/reveal.js#parallax-background)
*   [Custom keyboard bindings](https://github.com/hakimel/reveal.js#keyboard-bindings)

---

<!-- .slide: style="text-align: left;" -->
# THE END

- [Try the online editor](http://slides.com)  
- [Source code & documentation](https://github.com/hakimel/reveal.js)