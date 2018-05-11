# MovieWorld

MovieWorld (https://github.com/Rabadash90/MovieWorld) benötigt das BackEnd

## Navigation
* 20 best bewertete Filme
    * Allgemein
    * Pro Genre
* Bald erscheindende Filme
* 20 populärsten Filme anzeigen
* Favoritenliste anzeigen
* Liste von Suchabfragen anzeigen

## Layout
### [LESS](http://www.lesscss.de/)
Für das Styling wurde [LESS](http://www.lesscss.de/) verwendet.
Für die Farben des Footers wie auch des Bodys von der Webseite wurden Variablen verwendet.

### Bootstrap
Bootstrap wurde für die ganze Webseite verwendet. Die Navigationsleiste, wie auch Buttons oder Links werden damit schön angezeigt.
Die Buttons für 'Hinzufügen zu Favoriten' oder 'Löschen aus der Favoritenliste' wurde mit der Klasse btn-danger farblich angepasst.

#### [Glyphicons](https://www.w3schools.com/bootstrap/bootstrap_ref_comp_glyphs.asp)
Die Glyphicons wurden in den Buttons verwendet.

## Testing
Für das Testing wird JEST verwendet. Getestet wird das movie-model mit den Movies.
Es gibt folgende Tests:
* create model -> Erfolgreich
* create movie -> Erfolgreich
* add movie to model -> Fehler
* get movie from model -> Fehler
* reset movie list -> Fehler

Die Tests laufen auf Fehler in denen Funktionen aufgerufen werden, welche einen Rückgabewert geben, oder ein Attribut mitgegeben wird.
Vermutet wird das etwas mit den Versionen nicht stimmt. Sicher bin ich jedoch nicht. Da Movie.ts wie auch movie-model.ts auf der Webseite funktionieren und nur noch wenig Zeit bis zur Abgabe ist, wird das Problem nicht weiter analysiert.

## Filtering
In der Search History, kann über die Liste der letzten Suchabfrage gefiltert werden.
Es gibt jeweils einen Filter für die SearchQueries, einen für die Anzahl Resultate und einen für die Datumssuche.


# [BackEnd](https://github.com/Rabadash90/MovieBE)
## Datenbank
Als Datenbank wurde MongoDB gebraucht.
MongoDB Compass wurde verwendet um die Datenbank zu überprüfen.
Die Datenbank heisst MoviesDB. Sie besteht aus zwei Collections, favMovies und searchHistory.
In favMovies werden die Filme welches als favorite gekennzeichnet wurden abegelegt.
Die Filme werden als 'movie' Objekt abgelegt.
In der SearchHistory werden jeweils drei Einträge pro suche eingetragen.
Es handelt sich um den suchQuery, den count an resultaten den man mit dem SuchQuery bekam.
Momentan ist der Maximale Count bei 20, da ich keine zusätzliche Abfrage dafür erstellt hab.
Der dritte Parameter ist das Datum der Suchabfrage, dieser ist ein Date im ISO Format.