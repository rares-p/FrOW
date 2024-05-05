<!DOCTYPE html>
<html lang="ro">

<head>
  <meta charset="UTF-8">
  <title>Documentație</title>
  <link rel="stylesheet">
</head>

<body>

<article>
  <header>
    <h1>
      FroW (Fruits on the Web)
    </h1>
  </header>
  <h2>Cuprins</h2>
  <ul>
    <li>
      <a href="#authors">Autori</a>
    </li>
    <li>
      <a href="#introduction">1. Introducere</a>
      <ul>
        <li><a href="#introduction-purpose">1.1 Scop</a></li>
        <li><a href="#conventions">1.2 Convenție de scriere</a></li>
        <li><a href="#audience">1.3 Publicul țintă</a></li>
        <li><a href="#product-scope">1.4 Scopul produsului</a></li>
        <li><a href="#references">1.5 Referințe</a></li>
      </ul>
    </li>
    <li><a href="#overall">2. Descriere Generală</a>
      <ul>
        <li><a href="#product-perspective">2.1 Perspectiva produsului</a></li>
        <li><a href="#product-functions">2.2 Funcțiile produsului</a></li>
        <li><a href="#users">2.3 Clase și caracteristici ale utilizatorilor</a></li>
        <li><a href="#operating-environment">2.4 Mediul de operare</a></li>
        <li><a href="#documentation">2.5 Documentația pentru utilizator</a></li>
      </ul>
    </li>
    <li><a href="#external">3. Interfețele aplicației </a>
      <ul>
        <li><a href="#user-interface">3.1 Interfața utilizatorului </a>
          <ul>
            <li><a href="#main-menu">3.1.1 Meniu Principal </a></li>
            <li><a href="#login-page">3.1.2 Pagina de login </a></li>
            <li><a href="#signup-page">3.1.3 Pagina de înregistrare </a></li>
            <li><a href="#home-button">3.1.4 Pagina de acasă </a></li>
            <li><a href="#learn-page">3.1.5 Pagina de învățare</a></li>
            <li><a href="#profile-page">3.1.6 Pagina de profil</a></li>
            <li><a href="#highscore-page">3.1.7 Pagina cu scorurile maxime</a></li>
            <li><a href="#start-game">3.1.8 Pagina de start game</a></li>
            <li><a href="#game-menu">3.1.9 Pagina de joc </a></li>
            <li><a href="#help">3.1.10  Pagina de ajutor </a></li>
            <li><a href="#admin-page">3.1.11 Pagina de admin </a></li>
          </ul>
        </li>
        <li><a href="#hardware-interface">3.2 Interfața Hardware </a></li>
        <li><a href="#software-interface">3.3 Interfața Software</a></li>
        <li><a href="#communication-interface">3.4 Interfața de comunicare</a></li>
      </ul>
    </li>
    <li><a href="#system-features">4. Caracteristici ale sistemului</a>
      <ul>
        <li><a href="#management">4.1 Gestionarea contului </a>
          <ul>
            <li><a href="#management-1">4.1.1 Descriere și generalități </a></li>
            <li><a href="#management-2">4.1.2 Actualizarea informațiilor</a></li>
            <li><a href="#management-3">4.1.3 Condiții de funcționare</a></li>
          </ul>
        </li>
        <li><a href="#utilizatori">4.2 Secțiunea Utilizatori</a>
          <ul>
            <li><a href="#utilizatori-1">4.2.1 Descriere și generalități</a></li>
            <li><a href="#utilizatori-2">4.2.2 Actualizarea informațiilor</a></li>
            <li><a href="#utilizatori-3">4.2.3 Condiții de funcționare</a></li>
          </ul>
        </li>
        <li><a href="#administrator">4.3 Secțiunea Admin</a>
          <ul>
            <li><a href="#administrator-1">4.3.1 Descriere și generalități</a></li>
            <li><a href="#administrator-2">4.3.2 Actualizarea informațiilor</a></li>
            <li><a href="#administrator-3">4.3.3 Condiții de funcționare</a></li>
          </ul>
        </li>
        <li><a href="#logout">4.4 Secțiunea Logout</a>
          <ul>
            <li><a href="#logout-1">4.4.1 Descriere și generalități</a></li>
            <li><a href="#logout-2">4.4.2 Actualizarea informațiilor</a></li>
            <li><a href="#logout-3">4.4.3 Condiții de funcționare</a></li>
          </ul>
        </li>
        <li><a href="#other">4.5 Alte funcționalități </a>
          <ul>
            <li><a href="#other-1">4.5.1 Descriere și generalități</a></li>
            <li><a href="#other-2">4.5.2 Actualizarea informațiilor</a></li>
            <li><a href="#other-3">4.5.3 Condiții de funcționare</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><a href="#non-functional">5.Funcționalități pentru protecție și securitate</a>
      <ul>
        <li><a href="#safety">5.1 Protecția datelor</a></li>
        <li><a href="#security">5.2 Securizarea datelor</a></li>
        <li><a href="#software-attributes">5.3 Calitățile Software </a></li>
      </ul>
    </li>
  </ul>

  <div role="contentinfo">
    <section id="authors" typeof="sa:AuthorsList">
      <h2>Autori</h2>
      <ul>
        <li typeof="sa:ContributorRole" property="schema:author">
            <span typeof="schema:Person">
              <meta property="schema:givenName" content="Alin">
              <meta property="schema:additionalName" content="Ștefan">
              <meta property="schema:familyName" content="Cășuneanu">
              <span property="schema:name">Cășuneanu Alin-Ștefan</span>
            </span>
          <ul>
            <li property="schema:roleContactPoint" typeof="schema:ContactPoint">
              <a href="mailto:casuneanu.stefan@gmail.com" property="schema:email">casuneanu.stefan@gmail.com</a>
            </li>
          </ul>
        </li>
        <li typeof="sa:ContributorRole" property="schema:author">
            <span typeof="schema:Person">
              <meta property="schema:givenName" content="Ștefan">
              <meta property="schema:additionalName" content="Alexandru">
              <meta property="schema:familyName" content="Harabagiu">
              <span property="schema:name">Harabagiu Ștefan-Alexandru</span>
            </span>
          <ul>
            <li property="schema:roleContactPoint" typeof="schema:ContactPoint">
              <a href="mailto:harabagiusa@gmail.com" property="schema:email">harabagiusa@gmail.com</a>
            </li>
          </ul>
        <li typeof="sa:ContributorRole" property="schema:author">
            <span typeof="schema:Person">
              <meta property="schema:givenName" content="Rareș">
              <meta property="schema:givenName" content="Iustinian">
              <meta property="schema:familyName" content="Panainte">
              <span property="schema:name">Panainte Rareș-Iustinian</span>
            </span>
          <ul>
            <li property="schema:roleContactPoint" typeof="schema:ContactPoint">
              <a href="mailto:panainte.rares02@gmail.com" property="schema:email">panainte.rares02@gmail.com</a>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </div>

  <section id="introduction">
    <h3>1. Introducere</h3>
    <section id="introduction-purpose">
      <h4>1.1 Scop</h4>
      <p>
        FroW (Fruits on the Web) este o aplicație cu scop educaționa și de divertisment, audiența scop fiind copii din
        învățământul primar sau mai mici. Acest joc antrenează memoria deoarece oferă mai multe puncte jucătorilor care
        fac mai puține greșeli, dar și agilitate memoriei prin bonusuri pentru găsirea unei perechi mai repede. Stilul
        artistic este unul propriu, avand o tematică veselă și culori vibrante.
      </p>
    </section>
    <section id="conventions">
      <h4> 1.2 Convenția documentului</h4>
      <ul>
        <li>
          Acest document urmează șablonul de documentație a cerințelor software conform IEEE Software Requirements
          Specification.</li>
        <li>
          Textul <b>îngroșat</b> este folosit pentru a defini noțiuni personalizate sau pentru a accentua concepte
          importante. </li>
      </ul>
    </section>
    <section id="audience">
      <h4>1.3 Publicul țintă</h4>
      <p>
        Acest document este destinat profesorilor, studenților sau dezvoltatorilor, însă orice utilizator, indiferent
        de cunoștințele lor tehnologice,
        poate consulta secțiunile de <b>Interfeța utilizatorului</b> și <b>Caracteristici ale sistemului</b> pentru a
        obține o mai bună înțelegere a ceea ce oferă aplicația.
      </p>
    </section>
    <section id="product-scope">
      <h4>1.4 Scopul Produsului</h4>
      <p>
        Scopul aplicatiei este de a oferi utilizatorilor din demografica de varsta 7-11 ani experienta unui joc
        cu o tematica de fructe, care ajuta la imbunatatirea memoriei si a vitezei de reactie. Utilizatorii
        pot schimba setarile jocului inainte sa-l porneasca, pot sa-si vada istoricul jocurilor precum si o lista
        cu highscore-urile tuturor jucatorilor. Pentru a beneficia de aceste functionalitati utilizatorii trebuie
        sa isi creeze un cont. De asemenea exista si o pagina menita sa ofere informatii ( precum vitamine si istoric )
        legat de fructele prezente in joc.
      </p>
    </section>
    <section id="references">
      <h4>1.5 Bibliografie</h4>
      <ul>
        <li>Buraga Sabin-Corneliu, Site-ul Tehnologii Web, FII UAIC</li>
      </ul>
    </section>
  </section>

  <section id="overall">
    <h3>2. Descriere Generală</h3>
    <section id="product-perspective">
      <h4>2.1 Perspectiva produsului</h4>
      <p>
        FROW ( Fruits on the Web ) este o aplicatie dezvoltata în cadrul cursului de Tehnologii Web, menita
        sa ofere un joc ce ajuta la imbunatatirea memoriei si a vitezei de reactie, directionat catre copii
        de varste intre 7 si 11 ani.
    </section>
    <section id="product-functions">
      <h4>2.2 Funcționalitățile produsului</h4>
      Fiecare utilizator va avea acces la urmatoarele funcționălități:
      <ul>
        <li>să se înregistreze pe site.</li>
        <li>să se autentifice pe site.</li>
        <li>să selecteze numărul de coloane, linii și timpul alocat unui joc.</li>
        <li>să înceapă .</li>
        <li>să își reseteze parola in cazul in care a uitat-o.</li>
        <li>să consulte pagină "Acasă" și noutățile disponibile</li>
        <li>să acceseze pagina "Legislație" pentru a accesa codul rutier, "Despre", "Ajutor"</li>
        <li>să acceseze pagina "Semne de circulație" pentru a vizualiza semne rutiere atât din România, cât și din alte țări</li>
        <li>să acceseze pagina "Despre" pentru a accesa scurtă descriere a paginii web</li>
        <li>să acceseze pagina "Ajutor" pentru a beneficia de sfaturi în vederea utilizării aplicației</li>
        <li>dacă este <b>autentificat</b>, să acceseze pagină "Învață" și să rezolve întrebări</li>
        <li>dacă este <b>autentificat</b>, să acceseze pagină "Chestionare" și să rezolve teste predefinite</li>
        <li>dacă este <b>autentificat</b>, să își acceseze profilul și sa verifice statisticile personale</li>
        <li>dacă utilizatorul are rol de <b>admin</b>, acesta poate șterge utilizatori din baza de date</li>
        <li>dacă utilizatorul are rol de <b>admin</b>, acesta poate adăuga întrebări noi</li>
        <li>dacă utilizatorul are rol de <b>admin</b>, acesta poate modifica întrebări deja existente</li>
        <li>dacă utilizatorul are rol de <b>admin</b>, acesta poate adăuga chestionare noi</li>
        <li>dacă utilizatorul are rol de <b>admin</b>, acesta poate modifica chestionare deja existente</li>
      </ul>
    </section>
    <section id="users">
      <h4>2.3 Clase și caracteristici ale utilizatorilor</h4>
      <h5>2.3.1 Utilizator principal</h5>
      <ul>
        <li>utilizatorii autentificați pot fi:</li>
        <li style="list-style: none">
          <ul>
            <li>orice categorie de oameni care doresc să joace jocul si sa-si poata vedea istoricul incercarilor.</li>
            <li>admini - oameni care pot accesa pagina de admin, din care pot sterge contul unui alt user, sau sa ofere privilegii de admin oricarui alt user</li>
          </ul>
        </li>
        <li>utilizatorii neautentificați pot fi:</li>
          <ul>
            <li>orice om interesat de regulile jocului, pagina de Learn sau doritor sa vada Highscore-urile.</li>
          </ul>
      </ul>
      <h5>2.3.2 Caracteristici</h5>
      <ul>
        <li>Utilizatorii care sunt <b> autentificați </b> pot accesa paginile de Game ( unde pot juca jocul ) Choose Difficulty ( unde pot alege setarile jocului )
          , Profile ( de unde isi pot vedea istoricul jocurilor ), Highscores ( unde pot vizualiza highscore-urile tuturor utilizatorilor, paginate cate 5),
          Learn ( unde pot invata despre fructele utilizate in joc ) About ( Informatii generale despre site ) .
        </li>
        <li>Utilizatorii care nu sunt autentificați pot să vizualizeze și ei paginile de Highscore, About si Learn, dar
          nu pot juca jocul sau sa-si vada istoricul.
          In schimb aceștia pot să se înregistreze ca și utilizator și să beneficieze de toate funcționalitățile.
        </li>
      </ul>
    </section>
    <section id="operating-environment">
      <h4>2.4 Mediul de operare</h4>
      <p>
        Produsul dezvoltat poate fi utilizat pe orice dispozitiv cu un browser web care suportă HTML5, CSS și
        JavaScript(ES6).
      </p>
    </section>
    <section id="documentation">
      <h4>2.5 Documentația pentru utilizator</h4>
      <p>
        Utilizatorii pot consulta acest document pentru explicații detaliate despre funcționalitățile aplicației web.
      </p>
    </section>

  </section>

  <section id="external">
    <h3>3. Interfețele aplicației</h3>
    <section id="user-interface">
      <h4>3.1 Interfața utilizatorului</h4>
      Mai jos, puteți vedea o prezentare generală a fiecărei pagini a aplicației și funcționalităților pe care le oferă: <ul>
      <li id="main-menu"><b>Meniul Principal</b></li>
      <li style="list-style: none">
        <ul>
          <li>Acesta reprezintă pagina inițială prezentată utilizatorului. De aici se poate naviga către toate
          celelalte pagini. Butoanele sunt diferite în funcție de starea utilizatorului. Odată logați putem accesa
          butonul de start, iar butoanele specifice interfeței de admin apar doar pentru utilizatorii de tip admin</li>
        </ul>
      </li>
      <li id="login-page"><b>Pagina de logare</b></li>
      <li style="list-style: none">
        <ul>
          <li>Pagina are rolul de a realiza logarea și/sau înregistrarea utilizatorilorilor.</li>
          <li>Pentru a se loga, utilizatorul trebuie să completeze câmpurile de "username" și "password" cu
            credențiale <b>valide</b>, urmând să apese butonul <b>Login</b>.
          </li>
          <li> În cazul în care utilizatorul nu are cont pe site, acesta își poate crea unul prin accesarea pagini de
            înregistrare, ce se face prin apăsarea butonului <b>Register</b>. </li>
        </ul>
      </li>
      <li id="signup-page"><b>Pagina de înregistrare</b></li>
      <li style="list-style: none">
        <ul>
          <li>Pagina oferă funcționalitatea de înregistrare a utilizatorilor, pentru a putea beneficia de toate
            funcționalitățile RoT.</li>
          <li>Pentru a se înregistra, utilizatorul trebuie să completeze câmpurile <b>Email</b>, <b>Username</b>,
            <b>Firstname</b>, <b>Lastname</b> și <b>Password</b>.
        </ul>
      </li>
    </ul>
      <li id="home-button"><b> Butonul de acasă</b></li>
      <li style="list-style: none">
        <ul>
          <li>Butonul are rolul de a întoarce utilizatorul înapoi la meniul pricipal în oricare moment al
          navigării sale</li>
        </ul>
      </li>
      <li id="learn-page"><b>Pagina de Learn</b></li>
      <li style="list-style: none">
        <ul>
          <li>Pagina ofera informatii utile despre diferitele fructe care pot aparea pe parcursul jocului. Se
            poate naviga folosind bara de căutare, cât și folosind săgețile de pe ecran.</li>
        </ul>
      </li>
      <li id="profile-page"><b>Pagina de Profil</b></li>
      <li style="list-style: none">
        <ul>
          <li>Pagina ce arată istoricul unui jucător în funcție de dificultatea selectata, cât și o statistică
          pentru toate jocurile jucate.</li>
        </ul>
      <li id="highscore-page"><b>Pagina de Highscore</b></li>
      <li style="list-style: none">
        <ul>
          <li>Pagina ce afișează o medie ponderată a celor mai bune jocuri a fiecărui jucător pentru fiecare dificultate </li>
        </ul>
      </li>
      <li id="start-game"><b>Meniul de Start Game</b></li>
      <li style="list-style: none">
        <ul>
          <li>Pagina prezinta o interfata cu 3 slidere pentru a modifica dificultatea jocului. Dificultatea este
            calculata automat in funcie de setarile acestora, pe baza timpului minim necesar pentru rezolvarea jocului. </li>
          <li>Sliderul <b>Rows</b> si <b>Columns</b> modifica numarul de linii si coloane a jocului. Produsul acestora
            trebuie sa fie pare pentru a putea garanta ca pot exista numar exact de perechi. Aceasta este verificat
            automat.
          </li>
          <li>Sliderul <b>Time</b> seteaza timpul maxim alocat jocului.</li>
          <li>Butonul de <b>Start</b> incepe jocul cu setarile date.
          </li>
        </ul>
      </li>
      <li id="game-menu"><b>Pagina informativa</b></li>
      <li style="list-style: none">
        <ul>
          <li>Pagina ce prezinta jocul in sine. Scopul jocului este de a gasi perechi identice </li>
        </ul>
      <li id="admin-page"><b>Pagina de profil</b></li>
      <li style="list-style: none">
        <ul>
          <li>Pagina accesibila doar utilizatorilor de tip admin.</li>
          <li>Adminii pot vedea un buton care ii redirectioneaza catre pagina de admin.
          </li>
          <li>Aici ei pot sterge conturile altor utilizatori sau pot da privilegiu de admin altor useri.
          </li>
        </ul>
      </li>
      <section id="hardware-interface">
        <h4>3.2 Interfața Hardware</h4>
        <p>
          Acest produs nu necesită interfețe hardware, funcționând pe orice platformă (calculatoare, laptopuri,
          telefoane etc.), care are instalată un browser.
        </p>
      </section>
      <section id="software-interface">
        <h4>3.3 Interfața Software</h4>
        <p>
          Cerințele minime de software includ un browser funcțional, compatibil cu HTML5 și cu JavaScript(ES6).
        <h5>Postgres Database</h5>
        Aceasta reprezintă baza de date în care stocăm informații despre fiecare utilizator si jocurile jucate de
        acestia.
      </section>
      <section id="communication-interface">
        <h4>3.4 Interfața de comunicare</h4>
        <p>
          Aplicația necesită o conexiune la internet. Standardul de comunicare care va fi utilizat este HTTP.
        </p>
      </section>
      <section id="system-features">
        <h3>4. Caracteristici ale sistemului</h3>
        <section id="management">
          <h4>4.1 Gestionarea contului</h4>
          <h5 id="management-1">4.1.1 Descriere și generalități</h5>
          Un utilizator se poate înregistra alegându-și un nume de utilizator, o parola, numele si prenumele.
          Acesta se poate autentifica având nevoie doar de numele de utilizator și de parolă.
          <h5 id="management-3">4.1.3 Condiții de funcționare</h5>
          <ul>
            <li>
              Pentru a-și modifica credențialele utilizatorul, trebuie să fie autentificat.
            </li>
            <li>
              Pentru a se autentifica, utilizatorul are nevoie de un cont care este înregistrat în baza de date.
            </li>
          </ul>
        </section>
        <section id="utilizatori">
          <h4>4.2 Secțiunea de utilizatori</h4>
          <h5 id="utilizatori-1">4.2.1 Descriere și generalități</h5>
          Secțiunea <b>Utilizatori</b> este destinată
          <b>adminului</b>, și aceasta îi oferă posibilitatea
          de a vizualiza o listă cu toți utilizatorii din
          baza de date. De asemenea, acesta are posibilitatea
          de a elimina utilizatori din baza de date, dacă
          dorește acest lucru.
          <h5 id="utilizatori-2">4.2.2 Actualizarea informațiilor</h5>
          <ul>
            <li>
              La apăsarea butonului de ștergere din dreptul fiecărui utilizator, credențialele utilizatorului care a
              fost selectat, sunt șterse din baza de date.
            </li>
          </ul>
          <h5 id="utilizatori-3">4.2.3 Condiții de funcționare</h5>
          <ul>
            <li>
              Utilizatorul trebuie să fie autentificat.
            </li>
            <li>
              Utilizatorul trebuie să dețină drepturi de admin.
            </li>
          </ul>
        </section>
        <section id="administrator">
          <h4>4.3 Secțiunea Admin</h4>
          <h5 id="administrator-1">4.3.1 Descriere și generalități</h5>
          Secțiunea <b>Admin</b> este destinată utilizatorilor ce au drepturi de <b>administrator</b> și această
          oferă facilități pe care un utilizator normal nu le are. În momentul în care adminul accesează panoul de control,
          va putea adaugă/modifică întrebări și chestionare direct de pe platforma. Totodată, acesta este capabil să șteargă
          conturi ale utilizatorilor.
          <h5 id="administrator-3">4.3.3 Condiții de funcționare</h5>
          <ul>
            <li>
              Utilizatorul trebuie să fie autentificat.
            </li>
            <li>
              Utilizatorul trebuie să dețină drepturi de admin.
            </li>
          </ul>
        </section>
        <section id="logout">
          <h4>4.4 Secțiunea de Logout</h4>
          <h5 id="logout-1">4.4.1 Descriere și generalități</h5>
          Secțiunea de <b>Logout</b> are rolul de a deconecta utilizatorul de pe cont și îl redirecționează către
          pagina principala.
          <h5 id="logout-2">4.4.2 Actualizare informațiilor</h5>
          <ul>
            <li>
              Tokenul de autentificare este eliminat, prin intermediul JWT.
            </li>
          </ul>
          <h5 id="logout-3">4.4.3 Condiții de funcționare</h5>
          <ul>
            <li>
              Utilizatorul trebuie să fie autentificat.
            </li>
          </ul>
        </section>
      </section>
      <section id="non-functional">
        <h3>5. Funcționalități pentru protecție și securitate</h3>
        <section id="safety">
          <h4>5.1 Protecția datelor</h4>
          <p>
            Aplicația va asigura confidențialitatea datelor prin intermediul unei criptări de tip SHA-256 a parolei si
            JWT pentru sesiuni.
          </p>
        </section>
        <section id="security">
          <h4>5.2 Securizarea datelor</h4>
          <p>
            Autorizarea utilizatorilor se face pe baza standardului JWT. Utilizatorii au acces doar la informații legate
            de progresul in cadrul site-ului, celelalte informații fiind ascunse. Token-ul folosit pentru autorizare este
            stocat intr-un cookie de tip HTTP-only, lucru care previne atacurile de tip XSS. Mai mult, toate datele sunt introduse
            in baza de date prin intermediul unor <b>prepared statements</b>, care asigura prevenirea SQL Injection.
          </p>
        </section>
        <section id="software-attributes">
          <h4>5.3 Calitățile Software</h4>
          <ul>
            <li>Adaptabilitate</li>
            <li>Ușurință în utilizare</li>
            <li>Flexibilitate</li>
          </ul>
        </section>
      </section>
    </section>
  </section>
</article>
</body>

</html>
