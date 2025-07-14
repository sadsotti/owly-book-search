# 📚 owly-book-search

Un'applicazione web semplice e intuitiva per cercare libri, realizzata con **JavaScript** e ottimizzata per una buona esperienza utente su ogni dispositivo. Concepito come progetto per il corso di JavaScript Advanced del Master in "Full Stack Development e AI" di start2impact.

---

## 🔗 Provalo Live!

Clicca il link qui sotto:

👉 [**owly-book-search**](https://owly-book-search.netlify.app/) 👈

---

## 🎯 Obiettivo del Progetto

L'obiettivo principale di questo progetto era sviluppare una **single-page application** che permettesse agli utenti di cercare libri per categoria tramite la **Open Library API**. Il focus è stato sulla creazione di un'interfaccia utente reattiva e dinamica, gestendo la visualizzazione dei risultati e dei dettagli dei libri in modo robusto.

Il core dello sviluppo si è concentrato sulla **manipolazione del DOM (Document Object Model)** utilizzando **JavaScript** e sull'integrazione con un'API esterna per recuperare dati in tempo reale. Ho anche dedicato attenzione a un design responsive e intuitivo, gestendo il layout a griglia delle card in modo preciso e utilizzando LESS per mantenere il codice CSS organizzato e modulare.

---

## ✨ Caratteristiche Implementate

* **Ricerca Libri Intuitiva:** Trova rapidamente libri per categoria.
* **Visualizzazione Risultati Dettagliata:** I libri trovati sono presentati in un layout a griglia dinamico: **3 colonne su desktop/tablet** e **2 colonne su dispositivi mobili**, garantendo una visualizzazione ottimale su ogni schermo.
* **Dettagli Libro in Modal:** Cliccando su una card, si apre un modal con la descrizione del libro, autore(i) e titolo.
* **Validazione Dati Robusta:** Implementazione di `lodash.get` per accedere in modo sicuro ai dati ricevuti dall'API, prevenendo errori e garantendo la stabilità dell'applicazione.
* **Funzionalità "Clear":** Un pulsante per azzerare facilmente il campo di ricerca e i risultati visualizzati.
* **Indicatori di Caricamento o Errore:** Feedback visivo all'utente durante la ricerca o in caso di problemi.
* **Design Responsive e Adattivo:** L'interfaccia si adatta fluidamente a schermi di diverse dimensioni (desktop, tablet, mobile), con breakpoints ottimizzati per un'esperienza utente coerente.
* **Stile Moderno e Modulare:** Un'estetica moderna e pulita, realizzata con LESS per una gestione efficiente e manutenibile del codice CSS.
* **Configurazione Webpack:** Utilizzo di Webpack per il bundling, la gestione degli asset (CSS, immagini, font) e l'ottimizzazione del progetto, garantendo un processo di build efficiente e performante.

---

## 🛠️ Tecnologie Utilizzate

* **HTML5:** Struttura semantica della pagina.
* **CSS3 / LESS:** Per la stilizzazione e l'organizzazione del codice CSS con variabili e mixin.
* **JavaScript (Vanilla):** Tutta la logica interattiva, la gestione del DOM e le chiamate API.
* **Open Library API:** La fonte dei dati per la ricerca dei libri.
* **Webpack:** Bundler per JavaScript e gestore di asset, configurato per compilare LESS, processare immagini e font, e ottimizzare il progetto.
* **Lodash.get:** Libreria leggera utilizzata per l'accesso sicuro a proprietà annidate negli oggetti, con gestione di valori predefiniti.
* **Google Fonts:** Tipografia `Inter` per il corpo del testo e `Style Script` per un tocco distintivo al titolo dell'app.

---

## 🚀 Come Avviare il Progetto Localmente

Segui questi passaggi per clonare il repository e avviare il progetto sul tuo computer:

1.  **Clona il repository:**

    ```bash
    git clone https://github.com/sadsotti/owly-book-search.git
    ```

2.  **Naviga nella directory del progetto:**

    ```bash
    cd owly-book-search
    ```

3.  **Installa le dipendenze:**

    Assicurati di avere [Node.js e npm](https://nodejs.org/en/download/) installati. Poi esegui:
    ```bash
    npm install
    ```

4.  **Avvia il server di sviluppo:**

    Questo comando avvierà un server di sviluppo locale con Webpack, che compilerà il tuo codice e aprirà automaticamente l'applicazione nel browser.
    ```bash
    npm start
    ```

5.  **(Opzionale) Crea la build di produzione:**

    Per generare i file ottimizzati per la produzione (bundle, CSS compilato, asset), esegui:
    ```bash
    npm run build
    ```
    I file compilati saranno salvati nella directory `dist/`.

---

## 📂 Struttura del Progetto

Il progetto segue una struttura standard e organizzata per una migliore manutenibilità:

* `dist/`: La cartella di output per i file di build ottimizzati (generata da Webpack).
* `index.html`: Il file HTML principale che include gli stili e gli script.
* `webpack.config.js`: File di configurazione di Webpack per il processo di build.
* `package.json`: Definisce le dipendenze del progetto e gli script di avvio/build.
* `package-lock.json`: File generato automaticamente da npm che registra le versioni esatte delle dipendenze installate.
* `assets/`: Contiene tutte le risorse statiche.
    * `css/`: Fogli di stile CSS e LESS (`style.less`).
    * `js/`: File JavaScript per la logica e la manipolazione del DOM (`main.js`).
    * `img/`: Immagini utilizzate nel progetto (ad esempio, per logo e favicon).
* `README.md`: Questo file di descrizione del progetto.

---

## 🔗 Link Utili

* [Open Library API](https://openlibrary.org/developers/api)
* [start2impact](https://www.start2impact.it/)
* [Il Mio LinkedIn](https://linkedin.com/in/lorenzo-sottile)