[{"id":"cb79aa28-6141-41b3-9bb7-5dc5f10cd81d","text":"XSLT Streaming","title":"XSLT Streaming "},{"id":"1b8326b9-86af-407d-b972-5b8d98339dec","text":"Bei grossen flach strukturierten Datenmengen gibt es zwei Möglichkeiten:","title":"XSLT Streaming "},{"id":"b68b789a-b3c9-407f-ba6d-fa3f3e248cdcd6e8","text":"Für einfache Sammel- und Auswertungsaufgaben schreibt man sich am besten einen kleinen Parser, z.B. mit der Pythonsgmllib.","title":"XSLT Streaming "},{"id":"57c4f664-96a8-4fcc-9f0b-3e9ee7dfb3ecd6e11","text":"Für komplexere Aufgaben, in denen man nicht an jeder Stelle über den ganzen XML Baum navigiert und sich die Werte zusammensuchen suchen muss, kann man die Streaming Funktion des Saxon XSLT Prozessors verwenden.","title":"XSLT Streaming "},{"id":"a470215e-648e-4bb9-87f9-894c63b0dd90d6e13","text":"XSLT Streaming ist in der XSLT Version 3.0 neu hinzugekommen und in der\nkommerziellen Saxon-EE Löusug implementiert. Bei dieser Methode wird kein Eingabebaum im Speicher aufgebaut, was zu einer drastischen Performanzsteigerung führt.","title":"XSLT Streaming "},{"id":"3646e5ae-e79b-4fe4-87dc-bf3d33d48095d6e15","text":"Es gibt ein paar Regeln, die man bei der Verarbeitung großer Datenmengen über die Streaming Funktionen beachten sollte:","title":"XSLT Streaming "},{"id":"dddf3268-6ea2-4478-87d5-24c73f2f8927d6e19","text":"Bei einer XPATH Auswertung sollte nur ein einfacher Ausdruck mit höchstens einer konsumierenden Selektion gegeben sein. Konsumieren heißt, dass vom Kontextknoten aus eine Knotenmenge abwärts selektiert wird. Dagegen bleibt die Information bzgl. der Ancestor-Achse erhalten.","title":"XSLT Streaming "},{"id":"3780bf62-e000-46b1-83be-09dd2089bef4d6e22","text":"Bei einer Selektion sollte man aber darauf achten nur atomarische Werte auszuwählen.","title":"XSLT Streaming "},{"id":"7b4a93a4-86cd-479b-aa10-deca7ae3d6b6d6e25","text":"Knotenmengen, die über die Streaming Option eingelesen wurden, können nicht einer Funktion übergeben werden. Sie sind auch nicht einer Variablen zuweisbar.","title":"XSLT Streaming "},{"id":"2e7c6e48-0ea5-4af8-bd05-5bfa0f731253d6e28","text":"\"Crawler”-Ausdrücke, wie sind nicht nicht zu verwenden, ebenso ein rekursiver Abstieg mit Selektion, wie bspw. mit einem Call.","title":"XSLT Streaming "},{"id":"e3db71ee-23f5-45b5-ab11-d1fcca66e816d6e30","text":"Zu Beginn der Streaming-Aktion kann man sich auf konventionelle Art und Weise Teilbäume, die nicht so performanzlastig aufgebaut werden, in einer Variablen abspeichern und im Verlauf der Streaming-Verarbeitung z.B. für einen Vergleich auswerten.","title":"XSLT Streaming "}]