[{"id":"d97b76dd-7b2b-48e3-9b9e-53a4197d41f8","type":"para","text":"Vererbung","title":" Vererbung "},{"id":"9f3c9490-6544-4061-9f73-b31a0655f3fc","type":"para","text":"Mit XSLT kann man Konstrukte nachbilden, so wie sie in anderen Programmiersprachen auch vorhanden sind, bspw. Vererbung. Dabei wird in einer Spezialisierung eine schon bereits getätigte Implementierung übernommen und erweitert oder eingeschränkt.","title":" Vererbung "},{"id":"55d7fd52-cfb0-4630-a202-8a4997fdc6d5d6e6","type":"para","text":"Der Vorteil dabei ist, dass man nicht alles nochmal neu schreiben muss. Das verkleinert die Redundanz, führt zu einer besseren Wartbarkeit und einer geringeren Fehleranfälligkeit.","title":" Vererbung "},{"id":"3e8c9912-e49a-4cf3-8836-4c6d59415fcdd6e9","type":"para","text":"Beispiel: Parameterisierung","title":" Vererbung "},{"id":"87a46d3c-3a53-49d8-81af-0b186522ab04d6e11","type":"para","text":"Gewöhnlich implementiert man ein Stylsheet für ein bestimmtes Ausgabeformat und eine Produktvariante. Schrittweise werden dann weitere Varianten und Formate hinzugefügt.","title":" Vererbung "},{"id":"2c5936d8-c14a-48c6-8783-22cb447e158ad6e13","type":"para","text":"Am komfortabelsten hat man es natürlich, wenn zu Beginn der Implementierung eine vollständige Spezifikation vorliegt... Das ist aber natürlich eher selten der Fall.","title":" Vererbung "},{"id":"e49285e4-0d9b-4cb5-88fa-3c0cce5f8ca7d6e13","type":"para","text":"Aus diesem Grund ist es wichtig, sich eine gute Strategie zu überlegen, damit die Architektur nicht in Spagetthi-Code auswartet.","title":" Vererbung "},{"id":"fd634ecc-535d-4768-bc6f-eb4e29d0f513d6e17","type":"para","text":"Eine gute Option wäre, die XSLT Import Präzedenz auszunutzen, vgl. Kapitel Eindeutigkeit der Regelbasis .","title":" Vererbung "},{"id":"c22ab5e0-6336-4c9b-8dff-af1a3bfd84a9d6e22","type":"para","text":"Angenommen es geht darum zu einem späteren Zeitpunkt weitere Parameter einzuführen. Ein Switch, wie der folgende, müsste dann an mehreren Stellen im Code aktualisiert werden.","title":" Vererbung "},{"id":"55bf6d07-7ef3-4114-93b7-928bdba39644d7e24","type":"code","text":"<xsl:choose> <xsl:when test=\"$myParameter='this_option'\"> <!-- do this --> <\/xsl:when> <xsl:when test=\"$myParameter='that_option'\"> <!-- do that --> <\/xsl:when> [...] <\/xsl:choose>","title":" Vererbung "},{"id":"62f5f7b0-1fe2-41c7-a495-77e19a1fd871d6e24","type":"para","text":"Besser ist es, wenn man ein Core-Stylesheet pflegt, das für ein Format und eine Produktvariante gut ausgetestet ist. Dieses Core-Stylesheet wird dann einfach für eine neue Variante importiert und relevante Teile werden für die neue \"Spezialisierung\" überschrieben. Beispielsweise könnte eine Regel zum Setzen des Headers auf jeder Seite so implementiert sein:","title":" Vererbung "},{"id":"9c7da61e-1d61-4659-bb02-fc48610d77c7d7e28","type":"code","text":"<xsl:template name=\"render-header\"> <!-- print logo on the left side spanning two rows--> <!-- print some metadata right side first row --> <!-- print a running header right side second row --> <\/xsl:template>","title":" Vererbung "},{"id":"a25fd496-3d0f-40d0-899b-8eeb8efa4a05d6e28","type":"para","text":"Will man in einem neuen Format, bspw. A5, diese Logik austauschen und nur eine Zeile drucken, z.B. weil man nicht so viel Platz hat, so würde in einem \"abgeleiteten\" Stylesheet einfach die Regel noch einmal implementiert.","title":" Vererbung "},{"id":"47987729-ddee-4f38-a1dc-bec3435246c9d7e32","type":"code","text":"<xsl:choose> <xsl:template name=\"render-header\"> <!-- print a running header on left side --> <!-- print logo on right side --> <\/xsl:template>","title":" Vererbung "},{"id":"93a58f22-f501-44d1-bcdd-2d15ff8634b1d6e32","type":"para","text":"Dieses Template hat nun Vorrang und wird zur Auswertung herangezogen, mit der Konsequenz, dass der Header nur einzeilig gedruckt wird. Das schöne an diesen \"Named-Templates\" ist auch, dass man sie innerhalb von Variablen verwenden kann:","title":" Vererbung "},{"id":"85374956-db04-430b-a113-ecf613d2ed9ed7e37","type":"code","text":"<xsl:variable name=\"margin-width\"> <xsl:call-template name=\"get-margin-width\"\/> <\/xsl:variable>","title":" Vererbung "},{"id":"dcdc2784-bb46-400d-975b-16cf6746a77cd6e37","type":"para","text":"Das Template kann in einem \"Sub\"-Stylesheet überschrieben werden ohne dass die Variablen-Zugriffe im Core-Stylesheet angepasst werden müssten. Eine Zuweisung, wie:","title":" Vererbung "},{"id":"186a4646-7cc2-4740-8a94-3aa008664f27d7e41","type":"code","text":"width=\"{$margin-width}\"","title":" Vererbung "},{"id":"699bae96-6c18-45c8-a517-4d20e0232f1cd6e43","type":"para","text":"müsste nirgendwo im Code nochmal angefasst werden.","title":" Vererbung "}]