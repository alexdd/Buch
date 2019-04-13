[{"id":"6dc3be8f-5b8c-407c-9853-0533fdbf8267","text":"SQL Views in MarkLogic","title":"SQL Views in MarkLogic "},{"id":"51cd2348-5ac3-401f-bfec-d6669662af27","text":"Es macht nicht immer Sinn über eine Baumstruktur zu suchen. Obwohl das in einer \nXML Datenbank rasend schnell geht, weil jeder Knoten des Baums initial in einen Index\naufgenommen wird. So gibt es doch Anwendungsfälle bei denen man lieber eine relationale\nSicht auf die Daten hätte.","title":"SQL Views in MarkLogic "},{"id":"fa6fb1a1-78b4-4a46-9b1e-ba2328fdd2f3d6e6","text":"In MarkLogic heisst die Lösung dazu SQL Views.","title":"SQL Views in MarkLogic "},{"id":"8029ae2f-5b5a-4df5-97c1-aad92ac65df2d6e8","text":"Bspw. benötigt man eine relationale Sicht auf die Daten,\nwenn über verschiedene Datensätze ein Report generiert werden soll.","title":"SQL Views in MarkLogic "},{"id":"93e04ead-905f-488b-a0bc-d024c912fc35d6e10","text":"Nehmen wir an es gibt im Datenbestand die folgenden Dokumente:","title":"SQL Views in MarkLogic "},{"id":"2328ace1-a84c-4d9b-839c-e81962bff15ed6e14","text":"Will man sich alle Kunden anzeigen lassen, die eine Bestellung \nabgegeben haben - das sind Alex und Horst - so würde man bei\neinem relationalen Ansatz einen JOIN verwenden, so wie:","title":"SQL Views in MarkLogic "},{"id":"634aa470-0b4d-4ef9-ad31-e23e72e82857d6e18","text":"In einer relationalen Sicht würde uns das dann die folgende Tabelle liefern:","title":"SQL Views in MarkLogic "},{"id":"32221bf5-8e13-4057-90ab-06577e278a90d6e22","text":"Um für MarkLogic eine SQL View zu definieren verwendet man einen Mechanismus,\nder da heisst: Template Driven Extraction","title":"SQL Views in MarkLogic "},{"id":"300d1425-14e5-4fe0-b486-327254ed8cf0d6e24","text":"Dazu werden Templates in XML deklariert und in die Template Collection eingefügt. Für unser obiges Beispiel\nwürden wir zwei Templates brauchen, die so aussehen:","title":"SQL Views in MarkLogic "},{"id":"1b5ad441-b64a-48a5-beaf-fcb03b693c17d6e29","text":"und analog für die Bestellungen:","title":"SQL Views in MarkLogic "},{"id":"beda4ca5-f41c-4fbd-834a-6a375127725dd6e33","text":"In XQuery eingebunden könnte man dann die definierten SQL Views mit dem folgenden Befehl abfragen:","title":"SQL Views in MarkLogic "},{"id":"30ca1f15-55f4-4eba-9f9f-eff3c661f764d6e37","text":"Folgende ist das komplette Beispiel für eine MarkLogic XQuery Konsolensitzung abgebildet ...","title":"SQL Views in MarkLogic "},{"id":"af0bb509-8735-46fb-8e48-918f1d3f8f15d6e41","text":"... mit einer schönen tabellarischen Ausgabe im unteren Panel der Query Konsole - oder als JSON:","title":"SQL Views in MarkLogic "}]