[{"id":"a3acd735-e2ec-4c5f-940d-72d647e5bd74","type":"para","text":"Reguläre Ausdrücke","title":" Reguläre Ausdrücke "},{"id":"8b2f5bb2-8497-4ea8-b65b-cf8b9c972fc3d6e4","type":"para","text":"Manchmal reicht für das Durchsuchen des XML Baums XPATH nicht mehr aus und man will auf den Textknoten reguläre Ausdrücke aufrufen. Mir sind derzeit drei XPATH Funktionen bekannt, in denen man XPATH angeben kann:","title":" Reguläre Ausdrücke "},{"id":"6596ac58-1f12-4b1d-8a45-f9b99d8221c8d6e8","type":"para","text":"","title":" Reguläre Ausdrücke "},{"id":"e2221857-efab-45d2-afff-2d6b1d29c840d6e11","type":"para","text":"","title":" Reguläre Ausdrücke "},{"id":"fe46275a-fd1b-4527-aa25-fde0098a6893d6e14","type":"para","text":"","title":" Reguläre Ausdrücke "},{"id":"867b5230-3fe3-4dd4-8794-938ba7427581d6e16","type":"para","text":"Bei der Eingabe des regulaären Ausdrucks muss man natürlich Zeichen, wie maskieren, was den Ausdruck im Gegensatz zur herkömmlichen Nicht-XML Programmierung noch ein bisschen komplizierter macht.","title":" Reguläre Ausdrücke "},{"id":"89d58d94-7076-4bee-9603-f5f241963967d6e18","type":"para","text":"Der Audruck, der bspw. auf alle XML Tags matched ist folgender: . Hier sind die für XML reservierten Zeichen bereits maskiert.","title":" Reguläre Ausdrücke "},{"id":"055ae7ca-d2b1-41e4-be84-675e3e8827bdd6e21","type":"para","text":"XSLT Analyze String","title":" Reguläre Ausdrücke "},{"id":"cea9c4dd-6e14-445a-a899-07215642bb26d6e23","type":"para","text":"Es gibt aber auch ein eigenes XSLT Konstrukt, unabhängig von XPATH, um reguläre Ausdrücke anwenden zu können. Der Quelltext dazu sieht so aus:","title":" Reguläre Ausdrücke "},{"id":"b1f1a7c4-6649-4a0a-9b1c-eec2937285c7d7e25","type":"code","text":"<xsl:template match=\"text()[parent::xml-code]\"> <xsl:analyze-string select=\".\" regex=\"&lt;[^&gt;^!]+&gt;\"> <xsl:matching-substring> <b><xsl:value-of select=\".\"\/><\/b> <\/xsl:matching-substring> <xsl:non-matching-substring> <xsl:value-of select=\".\"\/> <\/xsl:non-matching-substring> <\/xsl:template>","title":" Reguläre Ausdrücke "},{"id":"a5477733-e663-4047-8c66-c9fe0f1d54a6d6e27","type":"para","text":"Hier wird jeder Textknoten eines Elements untersucht und falls ein XML-Tag enthalten ist, so wird dieses über die Anweisung in ein Tag gewrapped. Im nächsten Transformationsschritt wird dieses wiederum in Fettschrift dargestellt.","title":" Reguläre Ausdrücke "},{"id":"39dcf242-4503-4812-8866-2f6bfe223737d6e29","type":"para","text":"Das ist ein einfacher Syntax-Highlighter für XML Quelltexte. Auf diese Weise ist der Syntax-Highlighter für dieses PDF realisiert.","title":" Reguläre Ausdrücke "},{"id":"2efd01df-e5c6-4202-aaad-cae6fab6f28fd6e32","type":"para","text":"Man kann auch die Elemente in den und Elementen verschachteln, was natürlich noch wesentlich kompliziertere Problemstellungen erlaubt.","title":" Reguläre Ausdrücke "}]