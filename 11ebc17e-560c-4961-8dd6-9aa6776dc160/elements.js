[{"id":"fbbe8267-ed7b-4b78-b547-d00fe41f0b5c","text":"Webservice Calls mit und","title":"Webservice Calls mit [[code:doc()]] und [[code:unparsed-text()]] "},{"id":"cfd5bdf8-a043-405f-a3f7-1feb395fbd3d","text":"Eine verbreitete Paxis ist es, mit der Funktion oder kurz \nentfernte Ressourcen in die Transformation einzubinden. \nBei einer Schematron-Validierung, würde bspw. eine Regel, wie:","title":"Webservice Calls mit [[code:doc()]] und [[code:unparsed-text()]] "},{"id":"9fc3fa46-8e19-4c2b-90cf-0f2a76ef18eed6e8","text":"einen entferneten Webservice aufrufen und prüfen, ob für den Angestellten mit \neine Kündigung vorliegt. Ist dies der Fall, so ist die negative Zusicherung nicht\nerfüllt und die Schematron Regel feuert - was sich wohl im einfachsten Fall in einem \nLogfile Eintrag äussern sollte.","title":"Webservice Calls mit [[code:doc()]] und [[code:unparsed-text()]] "},{"id":"e3b1a6ca-7163-4c64-a69d-a1f4277847d5d6e10","text":"Was vermutlich viele noch nicht kennen - ich nehme jetzt einfach mal an, dass mein \nbisheriger Kenntnisstand dem der Mehrheit der XML-Entwickler entspricht - ist der Umstand,\ndass auch die Funktion eine URL als Parameter nimmt:","title":"Webservice Calls mit [[code:doc()]] und [[code:unparsed-text()]] "},{"id":"9992ff44-8622-4832-a290-5b53de8787fbd6e14","text":"Während mit oder ein zurückgeliefertes XML Fragment \nprozessiert wird, erwartet z.B. einen JSON-String, der dann mittels\nder Funktion nach XML konvertiert werden kann.","title":"Webservice Calls mit [[code:doc()]] und [[code:unparsed-text()]] "},{"id":"3b7e4ebd-cc5a-448c-8ae5-85e90302d51dd6e16","text":"Beispielsweise könnte die Gegenseite zum Template mittels XQuery\nfolgendermassen realisiert sein:","title":"Webservice Calls mit [[code:doc()]] und [[code:unparsed-text()]] "},{"id":"83a12eb2-9d2c-4bea-9d00-463280925e65d6e20","text":"(Mehr zu XQuery und den hier verwendeten Konstrukten, wie ))","title":"Webservice Calls mit [[code:doc()]] und [[code:unparsed-text()]] "},{"id":"dc9f1757-17d5-4982-9f9b-b624dcc9f86cd6e22","text":"Das zurückgeklieferte JSON Dokument sieht dann so aus:","title":"Webservice Calls mit [[code:doc()]] und [[code:unparsed-text()]] "},{"id":"c16d857e-bf25-4013-a637-fb1f1f42b212d6e27","text":"Konvertiert nach XML erhält man eine Map Struktur:","title":"Webservice Calls mit [[code:doc()]] und [[code:unparsed-text()]] "},{"id":"5aa1c1a3-6eaa-470b-bbb0-9cecf34158c3d6e31","text":"was den Selektorausdruck im obigen XPATH erklärt:","title":"Webservice Calls mit [[code:doc()]] und [[code:unparsed-text()]] "},{"id":"423a28a9-42c2-4e62-b73c-c2a48f68c079d6e35","text":"Resultat der Konvertierung wäre also dann - wie erwartet - ein um \ndas Flag erweitertes \nElement:","title":"Webservice Calls mit [[code:doc()]] und [[code:unparsed-text()]] "},{"id":"d6ebc0e3-4946-40df-99b9-89d396165f96d6e39","text":"Sicherlich wird der XML Entwicler eine XML Datenbank, wie MarkLogic, vorziehen\nund sich gleich XML Fragmente ausliefern laasen. ist aber bspw. mit\nMongoDB\nrealisiert, die auf JSON arbeitet... Nicht zuletzt deshalb finde ich JSON Verarbeitung\nmit XSLT recht spannend.","title":"Webservice Calls mit [[code:doc()]] und [[code:unparsed-text()]] "}]