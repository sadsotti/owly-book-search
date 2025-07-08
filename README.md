# 📚 owly-Book-Search

Un'applicazione web semplice e intuitiva per cercare libri, realizzata con **JavaScript** e ottimizzata per una buona esperienza utente su ogni dispositivo. Concepito come progetto per il corso di JavaScript Advanced del Master in "Full Stack Development e AI" di start2impact.

---

## 🔗 Provalo Live!

Clicca il link qui sotto:

👉 [**owly-book-search**](https://owly-book-search.netlify.app/) 👈

---

## 🎯 Obiettivo del Progetto

L'obiettivo principale di questo progetto era sviluppare una **single-page application** che permettesse agli utenti di cercare libri per categoria tramite la **Open Library API**. Il focus è stato sulla creazione di un'interfaccia utente reattiva e dinamica, gestendo la visualizzazione dei risultati e dei dettagli dei libri.

Il core dello sviluppo si è concentrato sulla **manipolazione del DOM (Document Object Model)** utilizzando **JavaScript** e sull'integrazione con un'API esterna per recuperare dati in tempo reale. Ho anche dedicato attenzione a un design responsive e intuitivo, usando LESS per mantenere il codice CSS organizzato e modulare.

---

## ✨ Caratteristiche Implementate

* **Ricerca Libri Intuitiva:** Trova rapidamente libri per categoria.
* **Visualizzazione Risultati:** I libri trovati sono presentati in un layout a griglia di card.
* **Dettagli Libro in Modal:** Cliccando su una card, si apre un modal con la descrizione del libro, autore(i) e titolo.
* **Funzionalità "Clear":** Un pulsante per azzerare facilmente il campo di ricerca e i risultati visualizzati.
* **Indicatori di Caricamento o Errore:** Feedback visivo all'utente durante la ricerca o in caso di problemi.
* **Design Responsive e Adattivo:** L'interfaccia si adatta a schermi di diverse dimensioni (desktop, tablet, mobile).
* **Stile Moderno:** Un'estetica moderna e pulita, realizzata con LESS per una gestione efficiente del CSS.

---

## 🛠️ Tecnologie Utilizzate

* **HTML5:** Struttura semantica della pagina.
* **CSS3 / LESS:** Per la stilizzazione e l'organizzazione del codice CSS con variabili e mixin.
* **JavaScript (Vanilla):** Tutta la logica interattiva, la gestione del DOM e le chiamate API.
* **Open Library API:** La fonte dei dati per la ricerca dei libri.
* **Google Fonts:** Tipografia `Inter` per il corpo del testo e `Style Script` per un tocco distintivo al titolo dell'app.

---

## 🚀 Come Avviare il Progetto Localmente

Segui questi passaggi per clonare il repository e avviare il progetto sul tuo computer:

1.  **Clona il repository:**

    ```bash
    git clone [https://github.com/sadsotti/owly-book-search.git](https://github.com/sadsotti/owly-book-search.git)

2.  **Naviga nella directory del progetto:**

    ```bash
    cd owly-book-search
    ```

3.  **Apri il file `index.html`:**

    Puoi semplicemente aprire il file `index.html` nel tuo browser preferito.

    **Nota:** Poiché il progetto utilizza LESS, dovrai compilare il file `style.less` in `style.css` se apporterai modifiche allo stile. Puoi farlo usando il compilatore LESS (installabile via npm: `npm install -g less`) e poi eseguendo:
    ```bash
    lessc style.less style.css
    ```
    Per uno sviluppo più efficiente, potresti considerare l'uso di un live compiler LESS o di un task runner.

---

## 📂 Struttura del Progetto

Il progetto segue una struttura standard e organizzata per una migliore manutenibilità:

* `index.html`: Il file HTML principale che include gli stili e gli script.
* `assets/`: Contiene tutte le risorse statiche.
    * `css/`: Fogli di stile CSS e LESS.
    * `js/`: File JavaScript per la logica e la manipolazione del DOM.
    * `img/`: Immagini utilizzate nel progetto (ad esempio, per logo e favicon).
* `README.md`: Questo file di descrizione del progetto.

---

## 🔗 Link Utili

* [Open Library API](https://openlibrary.org/developers/api)
* [start2impact](https://www.start2impact.it/)
* [Il Mio LinkedIn](https://linkedin.com/in/lorenzo-sottile)

---