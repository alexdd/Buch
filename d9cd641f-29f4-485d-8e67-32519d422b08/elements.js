[{"id":"86a66f53-eb4a-4cc0-b14c-12d5c2bb84bd","text":"Ausdrücke","title":"[[code:if..then..else]] Ausdrücke "},{"id":"31bf12f5-ecec-4ada-965f-cb4e1539afc6","text":"In nicht-funktionalen Programmiersprachen sind die Schlüsselwörter und dazu da, um dem Compiler oder Interpreter mitzuteilen, dass eine bedingte Anweisung ausgewertet werden soll.","title":"[[code:if..then..else]] Ausdrücke "},{"id":"c9ab5b21-d799-4bb6-a020-d7ab5750146ed6e12","text":"Was für den Nicht-funktionalen Programmierer etwas befremdlich erscheint, ist der Umstand, dass in XQuery als Ausdrücke ausgewertet werden.","title":"[[code:if..then..else]] Ausdrücke "},{"id":"e4d038c8-39fe-4f47-a81c-4a7d16a10c3ed6e17","text":"Das ist einerseits sehr praktisch, weil es richtig angewandt den Code verkürzt und damit das Wesentliche herausstellt, kann aber auch weiter zur allg. Verwirrung bzgl. des kryptischen XQuery Codes beitragen.","title":"[[code:if..then..else]] Ausdrücke "},{"id":"b0df228c-1f72-4a12-9302-805fa0022b03d6e11","text":"Beispiel: Konditionale Server App","title":"[[code:if..then..else]] Ausdrücke "},{"id":"2d0364b2-f8b1-47fa-996e-0f9ceba95e4fd6e13","text":"Betrachten wir ein einfaches Beispiel: Wir generieren auf einer Marklogic-Webapp eine JSON Response. Da wir diesen Mechanismus an mehreren Stellen im Code einsetzen, empfiehlt es sich das Rendern des Headers in eine Funktion auszulagern.","title":"[[code:if..then..else]] Ausdrücke "},{"id":"9c2999c6-968d-4719-9036-fd0664b5bd57d6e19","text":"In unserem Request-Handler wird je nach Auswertung einer Variablen eine \nbedingte Anweisung ausgeführt, diese sieht bspw. so aus:","title":"[[code:if..then..else]] Ausdrücke "},{"id":"7795845c-ea88-42f8-8adf-ab4d0b5404fcd6e23","text":"Als prozeduraler Programmierer wäre ich mit diesem Switch voll und ganz zufrieden, \nder funktionale Programmier erkennt abaer sofort einen Optimierungsbedarf.","title":"[[code:if..then..else]] Ausdrücke "},{"id":"a553de2e-d73c-4a97-a1b1-5283220ffef3d6e25","text":"Da es sich bei der bedingten Anweisung auch um einen Ausdruck handelt, der [[code:true}} oder [[code:false}} zurückgibt, können wir die gleichen Funktionsaufrufe herausziehen:","title":"[[code:if..then..else]] Ausdrücke "},{"id":"c1d6576a-56e3-4dda-bc18-342e7e458553d6e29","text":"Hier wird der abstrakt denkende Programmierer aber einwenden, dass eine abstrakte\nLogik nicht in eine Low-Level Funktion, wie [code:xsdmp:unquote] gewrapped werden sollte.","title":"[[code:if..then..else]] Ausdrücke "},{"id":"a935a64f-2ed6-4682-84cb-3243f9dcbb49d6e31","text":"Das stimmt - und mehr noch, die Maskierung mit sollte auch noch in unsere \nFunktion gepackt werden. So dass der Code schliesslich so aussehen würde:","title":"[[code:if..then..else]] Ausdrücke "},{"id":"0a519a5c-c908-4d55-a9e8-d8ad9a4e7a81d6e36","text":"Sicherlich lässt sich darüber streiten, ob nun der funktionale Ansatz besser lesbar ist als\nder prozedurale ganz oben.","title":"[[code:if..then..else]] Ausdrücke "},{"id":"175752a8-d929-4081-83cf-c74b67da7d35d6e38","text":"Ich denke jeder Programmierer hat hier seinen eigenen, individuellen\nund bewährten Programmierstil entwickelt, den er auch beibehalten sollte.","title":"[[code:if..then..else]] Ausdrücke "}]