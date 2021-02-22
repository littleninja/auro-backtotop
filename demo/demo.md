# auro-backtotop

A component to help users return to the top of a page.

## auro-backtotop use cases

The `auro-backtotop` element can be used where page content runs long, especially on mobile. It can either present as a fixed element that appears as the top of the page scrolls out of view, or as an inline element inviting the user to scroll back to top at intervals.

<article>
  <auro-backtotop></auro-backtotop>
  <h1>Beowulf</h1>
  <p>Hwæt. We Gardena in geardagum,</p>
  <p>þeodcyninga, þrym gefrunon,</p>
  <p>hu ða æþelingas ellen fremedon.</p>
  <p>Oft Scyld Scefing sceaþena þreatum,</p>
  <p>monegum mægþum, meodosetla ofteah,</p>
  <p>egsode eorlas. Syððan ærest wearð</p>
  <p>feasceaft funden, he þæs frofre gebad,</p>
  <p>weox under wolcnum, weorðmyndum þah,</p>
  <p>oðþæt him æghwylc þara ymbsittendra</p>
  <p>ofer hronrade hyran scolde,</p>
  <p>gomban gyldan. þæt wæs god cyning.</p>
  <p>ðæm eafera wæs æfter cenned,</p>
  <p>geong in geardum, þone god sende</p>
  <p>folce to frofre; fyrenðearfe ongeat</p>
  <p>þe hie ær drugon aldorlease</p>
  <p>lange hwile. Him þæs liffrea,</p>
  <p>wuldres wealdend, woroldare forgeaf;</p>
  <p>Beowulf wæs breme blæd wide sprang,</p>
  <p>Scyldes eafera Scedelandum in.</p>
  <p>Swa sceal geong guma gode gewyrcean,</p>
  <p>fromum feohgiftum on fæder bearme,</p>
  <p>þæt hine on ylde eft gewunigen</p>
  <p>wilgesiþas, þonne wig cume,</p>
  <p>leode gelæsten; lofdædum sceal</p>
  <p>in mægþa gehwære man geþeon.</p>
</article>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <article>
    <auro-backtotop></auro-backtotop>
    <h1>Beowulf</h1>
    <p> ... </p>
    <p> ... </p>
  </article>
  ```
  
</auro-accordion>

```html
<article>
  <h1>The Canterbury Tales</h1>
  <section>
    <h2>The Knight's Tale</h2>
    <p> ... </p>
    <p> ... </p>
    <auro-backtotop inline></auro-backtotop>
  </section>
  <section>
    <h2>The Miller's Tale</h2>
    <p> ... </p>
    <p> ... </p>
    <auro-backtotop inline></auro-backtotop>
  </section>
```