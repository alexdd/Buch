[{"id":"6dc3be8f-5b8c-407c-9853-0533fdbf8267","type":"para","text":"SQL Views in MarkLogic","title":" SQL Views in MarkLogic "},{"id":"51cd2348-5ac3-401f-bfec-d6669662af27","type":"para","text":"Es macht nicht immer Sinn über eine Baumstruktur zu suchen. Obwohl das in einer XML Datenbank rasend schnell geht, weil jeder Knoten des Baums initial in einen Index aufgenommen wird. So gibt es doch Anwendungsfälle bei denen man lieber eine relationale Sicht auf die Daten hätte.","title":" SQL Views in MarkLogic "},{"id":"fa6fb1a1-78b4-4a46-9b1e-ba2328fdd2f3d6e6","type":"para","text":"In MarkLogic heisst die Lösung dazu SQL Views.","title":" SQL Views in MarkLogic "},{"id":"8029ae2f-5b5a-4df5-97c1-aad92ac65df2d6e8","type":"para","text":"Bspw. benötigt man eine relationale Sicht auf die Daten, wenn über verschiedene Datensätze ein Report generiert werden soll.","title":" SQL Views in MarkLogic "},{"id":"93e04ead-905f-488b-a0bc-d024c912fc35d6e10","type":"para","text":"Nehmen wir an es gibt im Datenbestand die folgenden Dokumente:","title":" SQL Views in MarkLogic "},{"id":"4808773c-022b-400d-9b22-88b15bfeb842d7e12","type":"code","text":"<k:kunde> <k:id>1<\/k:id> <k:name>Alex<\/k:name> <k:eMail>tekturcms@gmail.com<\/k:eMail> <\/k:kunde> <k:kunde> <k:id>2<\/k:id> <k:name>Horst<\/k:name> <k:eMail>horst@horst.de<\/k:eMail> <\/k:kunde> <k:kunde> <k:id>3<\/k:id> <k:name>Gundula<\/k:name> <k:eMail>gundl@gundula.de<\/k:eMail> <\/k:kunde> <b:bestellung> <b:id>1<\/b:id> <b:datum>02.01.2019<\/b:datum> <b:preis>99.90<\/b:preis> <kunde-id>2<\/kunde-id> <\/b:bestellung> <b:bestellung> <b:id>2<\/b:id> <b:datum>03.01.2019<\/b:datum> <b:preis>68.90<\/b:preis> <b:kunde-id>1<\/b:kunde-id> <\/b:bestellung>","title":" SQL Views in MarkLogic "},{"id":"2328ace1-a84c-4d9b-839c-e81962bff15ed6e14","type":"para","text":"Will man sich alle Kunden anzeigen lassen, die eine Bestellung abgegeben haben - das sind Alex und Horst - so würde man bei einem relationalen Ansatz einen JOIN verwenden, so wie:","title":" SQL Views in MarkLogic "},{"id":"afe4f08c-777a-49e2-aba9-735cec9c002cd7e16","type":"code","text":"SELECT name, datum, preis FROM kunden k INNER JOIN bestellungen b ON k.id = b.kunde_id","title":" SQL Views in MarkLogic "},{"id":"634aa470-0b4d-4ef9-ad31-e23e72e82857d6e18","type":"para","text":"In einer relationalen Sicht würde uns das dann die folgende Tabelle liefern:","title":" SQL Views in MarkLogic "},{"id":"2e536d64-f04d-4f9a-b2e1-8ac7af22c198d7e20","type":"code","text":"name, datum, preis Alex, 03.01.2019, 68.90 Horst, 02.01.2019, 99.90","title":" SQL Views in MarkLogic "},{"id":"32221bf5-8e13-4057-90ab-06577e278a90d6e22","type":"para","text":"Um für MarkLogic eine SQL View zu definieren verwendet man einen Mechanismus, der da heisst: Template Driven Extraction","title":" SQL Views in MarkLogic "},{"id":"300d1425-14e5-4fe0-b486-327254ed8cf0d6e24","type":"para","text":"Dazu werden Templates in XML deklariert und in die Template Collection eingefügt. Für unser obiges Beispiel würden wir zwei Templates brauchen, die so aussehen:","title":" SQL Views in MarkLogic "},{"id":"96f033f5-3eb2-4728-833a-f9be39489e0fd7e27","type":"code","text":"xquery version \"1.0-ml\"; import module namespace tde = \"http:\/\/marklogic.com\/xdmp\/tde\" at \"\/MarkLogic\/tde.xqy\"; let $sql-view-name := 'kunden-view.xml' let $sql-view := <template xmlns=\"http:\/\/marklogic.com\/xdmp\/tde\"> <path-namespaces> <path-namespace> <prefix>k<\/prefix> <namespace-uri>https:\/\/tekturcms.de\/schema\/kunde\/1.0<\/namespace-uri> <\/path-namespace> <\/path-namespaces> <context>\/k:kunde<\/context> <collections> <collections-and> <collection>\/kunden<\/collection> <\/collections-and> <\/collections> <rows> <row> <schema-name>kunden_schema<\/schema-name> <view-name>kunden_view<\/view-name> <columns> <column> <name>id<\/name> <scalar-type>string<\/scalar-type> <val>k:id<\/val> <nullable>true<\/nullable> <\/column> <column> <name>datum<\/name> <scalar-type>string<\/scalar-type> <val>k:datum<\/val> <nullable>true<\/nullable> <\/column> <column> <name>eMail<\/name> <scalar-type>string<\/scalar-type> <val>k:eMail<\/val> <nullable>true<\/nullable> <\/column> <\/columns> <\/row> <\/rows> <\/template> return( tde:template-insert(concat('\/templates\/', $sql-view-name), $sql-view, xdmp:default-permissions()) )","title":" SQL Views in MarkLogic "},{"id":"1b5ad441-b64a-48a5-beaf-fcb03b693c17d6e29","type":"para","text":"und analog für die Bestellungen:","title":" SQL Views in MarkLogic "},{"id":"dc507d90-62e7-449a-b209-a8373c639cffd7e31","type":"code","text":"[...] <rows> <row> <schema-name>bestellungen_schema<\/schema-name> <view-name>bestellungen_view<\/view-name> <columns> <column> <name>id<\/name> <scalar-type>string<\/scalar-type> <val>b:id<\/val> <\/column> <column> <name>datum<\/name> <scalar-type>string<\/scalar-type> <val>b:datum<\/val> <\/column> <column> <name>preis<\/name> <scalar-type>string<\/scalar-type> <val>b:preis<\/val> <\/column> <column> <name>kunde_id<\/name> <scalar-type>string<\/scalar-type> <val>b:kunde-id<\/val> <\/column> <\/columns> <\/row> [...]","title":" SQL Views in MarkLogic "},{"id":"beda4ca5-f41c-4fbd-834a-6a375127725dd6e33","type":"para","text":"In XQuery eingebunden könnte man dann die definierten SQL Views mit dem folgenden Befehl abfragen:","title":" SQL Views in MarkLogic "},{"id":"135a6a4b-0f5d-48af-b177-f9815d78bd47d7e35","type":"code","text":"xdmp:sql(\"SELECT name, datum, preis FROM kunden_view k INNER JOIN bestellungen_view b ON k.id = b.kunde_id\")","title":" SQL Views in MarkLogic "},{"id":"30ca1f15-55f4-4eba-9f9f-eff3c661f764d6e37","type":"para","text":"Folgende ist das komplette Beispiel für eine MarkLogic XQuery Konsolensitzung abgebildet ...","title":" SQL Views in MarkLogic "},{"id":"445ff5ef-bea2-4607-8812-624c3063e01dd7e39","type":"code","text":"xquery version \"1.0-ml\"; declare namespace k = 'http:\/\/www.tekturcms.de\/kunden'; declare namespace b = 'http:\/\/www.tekturcms.de\/bestellungen'; import module namespace tde = \"http:\/\/marklogic.com\/xdmp\/tde\" at \"\/MarkLogic\/tde.xqy\"; declare function local:loadKunde($id, $name, $eMail) { let $root := <k:kunde> <k:id>{ $id }<\/k:id> <k:name>{ $name }<\/k:name> <k:eMail>{ $eMail }<\/k:eMail> <\/k:kunde>, $options := <options xmlns=\"xdmp:document-insert\"> <permissions>{ xdmp:default-permissions() }<\/permissions> <collections> <collection>\/kunden<\/collection> <\/collections> <\/options>, $fname := concat('\/kunden\/',$id,\".xml\") return xdmp:document-insert($fname,$root,$options) }; declare function local:loadBestellung($id, $datum, $preis, $kunde-id) { let $root := <b:bestellung> <b:id>{ $id }<\/b:id> <b:datum>{ $datum }<\/b:datum> <b:preis>{ $preis }<\/b:preis> <b:kunde-id>{ $kunde-id }<\/b:kunde-id> <\/b:bestellung>, $options := <options xmlns=\"xdmp:document-insert\"> <permissions>{ xdmp:default-permissions() }<\/permissions> <collections> <collection>\/bestellungen<\/collection> <\/collections> <\/options>, $fname := concat('\/bestellungen\/',$id,\".xml\") return xdmp:document-insert($fname,$root,$options) }; declare function local:insertKundenSchema() { let $sql-view-name := 'kunden-view.xml', $sql-view := <template xmlns=\"http:\/\/marklogic.com\/xdmp\/tde\"> <path-namespaces> <path-namespace> <prefix>k<\/prefix> <namespace-uri>http:\/\/www.tekturcms.de\/kunden<\/namespace-uri> <\/path-namespace> <\/path-namespaces> <context>\/k:kunde<\/context> <collections> <collections-and> <collection>\/kunden<\/collection> <\/collections-and> <\/collections> <rows> <row> <schema-name>kunden_schema<\/schema-name> <view-name>kunden_view<\/view-name> <columns> <column> <name>id<\/name> <scalar-type>string<\/scalar-type> <val>k:id<\/val> <\/column> <column> <name>name<\/name> <scalar-type>string<\/scalar-type> <val>k:name<\/val> <\/column> <column> <name>eMail<\/name> <scalar-type>string<\/scalar-type> <val>k:eMail<\/val> <\/column> <\/columns> <\/row> <\/rows> <\/template> return tde:template-insert(concat('\/templates\/', $sql-view-name), $sql-view, xdmp:default-permissions()) }; declare function local:insertBestellungenSchema() { let $sql-view-name := 'bestellungen-view.xml', $sql-view := <template xmlns=\"http:\/\/marklogic.com\/xdmp\/tde\"> <path-namespaces> <path-namespace> <prefix>b<\/prefix> <namespace-uri>http:\/\/www.tekturcms.de\/bestellungen<\/namespace-uri> <\/path-namespace> <\/path-namespaces> <context>\/b:bestellung<\/context> <collections> <collections-and> <collection>\/bestellungen<\/collection> <\/collections-and> <\/collections> <rows> <row> <schema-name>bestellungen_schema<\/schema-name> <view-name>bestellungen_view<\/view-name> <columns> <column> <name>id<\/name> <scalar-type>string<\/scalar-type> <val>b:id<\/val> <\/column> <column> <name>datum<\/name> <scalar-type>string<\/scalar-type> <val>b:datum<\/val> <\/column> <column> <name>preis<\/name> <scalar-type>string<\/scalar-type> <val>b:preis<\/val> <\/column> <column> <name>kunde_id<\/name> <scalar-type>string<\/scalar-type> <val>b:kunde-id<\/val> <\/column> <\/columns> <\/row> <\/rows> <\/template> return tde:template-insert(concat('\/templates\/', $sql-view-name), $sql-view, xdmp:default-permissions()) }; local:loadKunde(\"1\",\"Alex\",\"tekturcms@gmail.com\"), local:loadKunde(\"2\",\"Horst\",\"horst@horst.de\"), local:loadKunde(\"3\",\"Gundula\",\"gundl@gundula.de\"), local:loadBestellung(\"1\",\"02.01.2019\",\"99.90\",\"2\"), local:loadBestellung(\"2\",\"03.01.2019\",\"68.90\",\"1\"), local:insertKundenSchema(), local:insertBestellungenSchema(), xdmp:sql(\"SELECT name, datum, preis FROM kunden_view k INNER JOIN bestellungen_view b ON k.id = b.kunde_id\")","title":" SQL Views in MarkLogic "},{"id":"af0bb509-8735-46fb-8e48-918f1d3f8f15d6e41","type":"para","text":"... mit einer schönen tabellarischen Ausgabe im unteren Panel der Query Konsole - oder als JSON:","title":" SQL Views in MarkLogic "},{"id":"781a32bb-be37-4c1e-8543-e2a5a337520ad7e43","type":"code","text":"[ [ \"k.name\", \"b.datum\", \"b.preis\" ], [ \"Alex\", \"03.01.2019\", \"68.90\" ], [ \"Horst\", \"02.01.2019\", \"99.90\" ] ]","title":" SQL Views in MarkLogic "}]