[{"id":"5d677796-4ebf-49b1-85ba-45315312a0e4","type":"para","text":"GIT Einmaleins","title":" GIT Einmaleins "},{"id":"c2e52685-e1e6-417d-8e94-2d5367436ccb","type":"para","text":"Im Fachbereich Technische Dokumentation wird neue Technologie ein bisschen langsamer adaptiert, als in anderen Disziplinen der IT - schliesslich muss ja erst alles dokumentiert werden ...","title":" GIT Einmaleins "},{"id":"24285d0d-c75e-44d5-82a9-c7c4153549e7d6e6","type":"para","text":"Bei Versionsverwaltungssystemen ist das nicht anders. Doch inzwischen hat auch GIT in manchen Entwicklerbüros Einzug gehalten und verdrängt Subversion.","title":" GIT Einmaleins "},{"id":"9b7be9ab-cc3d-46ae-adeb-c0b506eda947d6e8","type":"para","text":"Ein Grund an dieser Stelle einmal zumindest die wichtigsten Befehle aufzulisten - Note to self:","title":" GIT Einmaleins "},{"id":"cf0b2bba-1f98-4899-b811-fb87b5e6300bd7e10","type":"code","text":"GIT COMMANDS CLONE ===== git clone https:\/\/github.com\/libgit2\/libgit2 SIMPLE ====== git init git add * git commit -m \"Form validation added” [changes] git add [changed files] or git commit -a git diff —cached git branch experimental git checkout experimental git commit -a -m \"only in the experimental branch” git checkout master git merge experimental git branch -d experimental COLLABORATION ============= push new branch git push -u origin newLocalBranch bob$ git clone \/home\/alice\/project myrepo (edit files) bob$ git commit -a alice$ cd \/home\/alice\/project alice$ git pull \/home\/bob\/myrepo master (fetch & merge) (fetch and not merge) alice$ git fetch \/home\/bob\/myrepo master alice$ git log -p HEAD..FETCH_HEAD (visualization only) gitk HEAD..FETCH_HEAD gitk HEAD…FETCH_HEAD — git log git show ea14 (firs chars is enough) git grep \"headline_font_size” v2.5 PULL REQUESTS ============= (checkout branch) git pull origin simple-examples (changes) git push origin simple-examples Create a pull request using the form on the Github page and assign it to a Reviewer MERGE CONFLICTS =============== git pull origin master => merga conflicts TROUBLE SHOOTING ================= git reset --hard origin\/master git tree git status git checkout 118886ee3f06738b53f089433078d35f4d70a8f9 vendor\/error-report.xsl git log --diff-filter=D --summary","title":" GIT Einmaleins "}]