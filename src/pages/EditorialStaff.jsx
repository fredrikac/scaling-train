import Header from "../components/Header";
import Footer from "../components/Footer";
import s from "./EditorialStaff.module.css";

//beskrivning av dagensbok i helhet
//rendera alla members i en lista. När man klickar på dem så kommer man till varje medlems presentationssida?

const EditorialStaff = () => {
  return (
    <>
      <Header />
      <div className={s.pageWrapper}>
      <article className={s.container}>
        <h1>Redaktionen</h1>
        <div className={s.textContainer}>
          <p>
            Dagensbok.com är utan adress. Vill du skicka recensionsbok? Mejla
            respektive skribent för adress förnamn.efternamn@dagensbok.com (inga
            å, ä, ö)
          </p>
        </div>
        <h2>Adress</h2>
        <div className={s.textContainer}>
          <p>
            dagensbok.com <br />
            TVS LM Ericssons väg 26 <br />
            126 37 Hägersten redaktionen@dagensbok.com
            <br />
            <br />
            E-post till enskilda skribenter:
            <br />
            fornamn.efternamn@dagensbok.com
          </p>
        </div>

        <div className={s.textContainer}>
          <p>
            På dagensbok.com publiceras varje dag minst en ny recension av en
            aktuell bok. Vi som skriver arbetar ideellt och vi läser alla
            sorters böcker, men tonvikten ligger på skönlitteratur.
            dagensbok.com publicerar också litteraturnyheter, krönikor och olika
            litteraturrelaterade teman. Sajten har funnits sedan år 2000, och
            har hela tiden fått en större läsekrets. Idag har vi över 30 000
            unika och återkommande läsare varje månad, och arkivet innehåller
            recensioner av mer än 6 000 böcker. Klicka dig vidare in på varje
            skribents sida för att läsa mer om henne eller honom.
          </p>
        </div>
    <div className={s.groupContainer}>
        <h3>Redaktionsgrupp</h3>
        <ul>
          <li>Ella Andrén, chefredaktör</li>
          <li>Katze Collmar, redaktionsassistent</li>
        </ul>
        <h4>Nuvarande skribenter</h4>
        <ul>
          <li>Namn Namnsson</li>
          <li>Namn Namnsson</li>
          <li>Namn Namnsson</li>
          <li>Namn Namnsson</li>
          <li>Namn Namnsson</li>
        </ul>
        <h4>Tidigare skribenter</h4>
        <ul>
          <li>Namn Namnsson</li>
          <li>Namn Namnsson</li>
          <li>Namn Namnsson</li>
          <li>Namn Namnsson</li>
          <li>Namn Namnsson</li>
        </ul>
        </div>
      </article>
      </div>
      <Footer />
    </>
  );
};

export default EditorialStaff;
