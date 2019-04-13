[{"id":"28a8c9ba-33b0-41ff-8681-da976df43b85","text":"Vortransformationen","title":"Vortransformationen"},{"id":"8a421545-f7a1-49b2-8250-75b86ca592f8","text":"Bei einer komplexen Transformation ist es ratsam und sogar manchmal unabdingbar die Konvertierung in einzelne Stufen aufzuteilen. Das hat folgende Vorteile:","title":"Vortransformationen"},{"id":"1f775282-48f6-4e94-819e-d92684be1b88d6e8","text":"Der Prozess ist transparenter, da die einzelnen Stufen leichter überschaubar sind.","title":"Vortransformationen"},{"id":"f1e5f594-048a-4ce7-8a07-cd0c65f06729d6e11","text":"Die Zwischenergebnisse können für Debug-Zwecke ausgewertet werde oder dienen als Eingabe für andere Prozesse.","title":"Vortransformationen"},{"id":"bf659729-4486-4a3b-b983-cec9d5748383d6e14","text":"Nicht-relevante oder invalide Teilbäume können aus der Eingabeinstanz gefiltert werden, um so die weitere Verarbeitung zu beschleunigen.","title":"Vortransformationen"},{"id":"d115f521-f45c-4ae4-85e8-6ee9264558aed6e17","text":"Hilfskonstrukte können erzeugt werden. Diese erleichtern die weitere Verarbeitung.","title":"Vortransformationen"},{"id":"e76a9b14-f720-48ff-afad-95bbd80c53a7d6e19","text":"Es gibt zwei Möglichkeiten, wie eine Vortransformation eingebunden werden kann:","title":"Vortransformationen"},{"id":"2bcf1845-b267-46ac-b853-627fd0a0f3bfd6e23","text":"In einem separaten File bzw. einer XML Instanz, die vom XSLT Prozessor vor der eigentlichen Transformation aufgerufen wird und einen Zwischenstand produziert. Dieser kann dann als Eingabe für den Haupttransformationsschritt dienen.","title":"Vortransformationen"},{"id":"8f673f1d-8c7a-4616-93f2-d808745421ffd6e26","text":"Innerhalb des eigentlichen XSLT Stylesheets. Hier wird das Ergebnis der Vortransformation in einer Variablen erzeugt.","title":"Vortransformationen"},{"id":"e42f964a-137b-4b75-bfad-28dc54470a68d6e28","text":"Den zweiten Punkt möchte ich anhand eines Beispiel XSLT Skripts vorführen. Betrachten wir folgende Input Daten:","title":"Vortransformationen"},{"id":"8985af84-2126-4159-b493-540b65c41b58d6e32","text":"Die erste Datei beinhaltet eine Zuordnung von Lehrern zu Schulen in verschiedenen Regierungsbezirken. Um die Daten zu den beiden referenzierten Objekten einzusehen, müssen zwei weitere Dateien konsultiert werden. Die Datei, welche die Lehrer auflistet:","title":"Vortransformationen"},{"id":"c35caf7a-807f-48b2-8973-1e575a619ae8d6e36","text":"Und die Datei, welche die Schulen auflistet:","title":"Vortransformationen"},{"id":"c8ee6679-b15c-45f7-9fca-aa269b19e54dd6e40","text":"Um diese Daten verarbeiten zu können ist es sinnvoll, die drei Dateien in einem ersten \"Resolver\" Schritt zusammenzuführen und ggf. irrelevante Strukturen zu entfernen. Lehrer aus obigem Beispiel können beispielsweise suspendiert worden sein. Das folgende Skript erledigt dies mittels einer zusätzlichen Transformation in eine Variable:","title":"Vortransformationen"},{"id":"45fef16c-d685-4a23-9038-37e8b4ce1715d6e45","text":"Im ersten Resolve-Schritt werden die Referenzen zu den Lehrer- und Schul-Objekten aufgelöst, d.h. die Attribute des Schul-Objekts werden in die Struktur aus der ersten Datei kopiert.","title":"Vortransformationen"},{"id":"e7b46b28-d440-4f91-b415-c4116e924876d6e47","text":"Die Liste der Lehrer an diesen Schul-Objekten bleibt erhalten und wird mit dem Inhalt aus der zweiten Datei bestückt.","title":"Vortransformationen"},{"id":"aa88c1b0-cb8a-4647-8498-61e6d266fe18d6e47","text":"Zusätzlich werden alle Regierungsbezirke entfernt, die nicht zu Bayern gehören - was die weitere Verarbeitung wesentlich beschleunigen wird. Lehrer die suspendiert worden sind fliegen ebenfalls raus ...","title":"Vortransformationen"}]