# auro-backtotop

A component to help users quickly return to the top of a page.

## Fixed position trigger

By default, the `auro-backtotop` element is fixed to the bottom-right corner of the screen. The floating button becomes visible as the user scrolls down the page. Developers can tune when the button appears based on where the `auro-backtotop` element is placed in the document and with the `rootmargintop` property.

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <article>
    <auro-backtotop></auro-backtotop>
    <h3>Beowulf</h3>
    <p> ... </p>
    <p> ... </p>
  </article>
  ```

</auro-accordion>

<article>
  <auro-backtotop></auro-backtotop>
  <h3>Beowulf</h3>
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

## Inline trigger

To render the trigger always-visible and inline, use the `inline` property.

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <article>
  <h3>The Canterbury Tales</h3>
  <section>
    <h4>The Knight's Tale</h4>
    <p> ... </p>
    <p> ... </p>
    <auro-backtotop inline></auro-backtotop>
  </section>
  <section>
    <h4>The Miller's Tale</h4>
    <p> ... </p>
    <p> ... </p>
    <auro-backtotop inline></auro-backtotop>
  </section>
</article>
  ```

</auro-accordion>

<article>
  <h3>The Canterbury Tales</h3>
  <section>
    <h4>The Knight's Tale</h4>
    <p>"A knyght ther was and that a worthy man</p>
    <p>That fro the tyme that he first bigan</p>
    <p>To riden out, he loved chivalrie,</p>
    <p>Trouthe and honour, fredom, and curteisie.</p>
    <p>Ful worthy was he in his lordes werre,</p>
    <p>And therto hadde he riden, no man ferre,</p>
    <p>As wel in cristendom as in hethenesse,</p>
    <p>And evere honoured for his worthynesse;</p>
    <p>At Alisaundre he was whan it was wonne.</p>
    <p>Ful ofte tyme he hadde the bord bigonne</p>
    <p>Aboven alle nacions in Pruce;</p>
    <p>In Lettow hadde he reysed and in Ruce;</p>
    <p>No Cristen man so ofte of his degree.</p>
    <p>In Grenade at the seege eek hadde he be</p>
    <p>Of Algezir, and riden in Belmarye.</p>
    <p>At Lyeys was he and at Satalye,</p>
    <p>Whan they were wonne, and in the Grete See</p>
    <p>At many a noble armee hadde he be.</p>
    <p>At mortal batailles hadde he been fiftene,</p>
    <p>And foughten for oure feith at Tramyssene</p>
    <p>In lystes thries, and ay slayn his foo.</p>
    <p>This ilke worthy kyght hadde been also</p>
    <p>Somtyme with the lord of Palatye</p>
    <p>Agayn another hethen in Turkye;</p>
    <p>And everemoore he hadde a sovereyn prys.</p>
    <p>And though that he were worthy he was wys,</p>
    <p>And of his port as meeke as is a mayde.</p>
    <p>He nevere yet no vileynye ne sayde</p>
    <p>In al his lyf unto no maner wight.</p>
    <p>He was a verray, parfit gentil knyght."</p>
    <auro-backtotop inline></auro-backtotop>
  </section>
</article>

## Custom trigger

The trigger content--the arrow-up icon and text--can be customized to anything your heart desires, for i18n or just for fun.

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <article>
  <h3>I'm a Little Teapot</h3>
  <p> ... </p>
  <p> ... </p>
  <auro-backtotop inline>hop to top! 🫖</auro-backtotop>
</article>
  ```

</auro-accordion>

<article>
  <h3>I'm a Little Teapot</h3>
  <p>I'm a little teapot,</p>
  <p>Short and stout,</p>
  <p>Here is my handle</p>
  <p>Here is my spout</p>
  <p>When I get all steamed up,</p>
  <p>Hear me shout,</p>
  <p>Tip me over and pour me out!</p>
  <auro-backtotop inline>hop to top! 🫖</auro-backtotop>
</article>