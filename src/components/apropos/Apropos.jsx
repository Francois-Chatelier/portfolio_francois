import React from 'react';
import './apropos.css';
import photoPro from '../images/Francois_Chatelier.jpg';
import Carrousel from './Carrousel';

const Apropos = () => {
  return (
    <div>
      <div className="cards">
        <div className="card1">
          <img src={photoPro} alt="Portrait" className="portrait" />
        </div>
        <div className="card2">
          {' '}
          <h1 className="debut">
            Portrait
            <br />
          </h1>
          <div className="spitch">
            <div className="about">
              <span className="espace">
                <p className="texte">
                  Natif d&#39;une petite commune du Nord Vendée, j&#39;avais un
                  rêve étant gamin, devenir{' '}
                  <strong className="bleu">boulanger</strong>, me voilà donc
                  parti parti pour 3 années d&#39;apprentissage en tant que
                  boulanger pâtissier en sortie de collège.
                </p>
                <p className="texte">
                  Décidé à ne pas en rester là, je pars pour une 4ème année, en{' '}
                  <strong className="bleu">traiteur</strong> cette fois-ci.
                </p>
                <p className="texte">
                  Déjà, à cette époque, j&#39;avais vu, entendu parler du
                  développement web, ce souvenir est resté dans un coin de ma
                  tête jusqu&#39;à aujourd&#39;hui.
                </p>
                <p className="texte">
                  Je vous raconte ceci car à la fin de mon apprentissage en
                  alimentation, j&#39;ai dû y mettre un terme suite à des
                  allergies qui se sont développées.
                </p>
                <p className="texte">
                  Par la suite, j&#39;ai eu l&#39;occasion de travailler dans{' '}
                  <strong className="bleu">l&#39;agroalimentaire</strong>, où
                  j&#39;ai pû y découvrir de nouvelles compétences, un nouveau
                  mode de travail, de nouveaux métiers.
                </p>
                <p className="texte">
                  S&#39;en suit, une nouvelle aventure dans le domaine de{' '}
                  <strong className="bleu">l&#39;événementiel</strong>.
                  <br />
                  Tout d&#39;abord, en tant qu&#39;
                  <strong className="bleu">
                    animateur polyvalent
                  </strong> puis{' '}
                  <strong className="bleu">responsable logistique</strong>.
                  <br />
                  J&#39;ai partipé à différents événements plus ou moins grands,
                  mis mes compétences à rudes épreuves, appris un métier sur le
                  tas, découvert un autre travail d&#39;équipe, une autre
                  ambiance, une diversité du métier que je ne connaissais pas
                  encore.
                </p>
                <p className="texte">
                  Mon envie de partir en Australie pour y faire un PVT d&#39;un
                  an minimum s&#39;installait de plus en plus, je décide alors
                  de me renseigner sur la préparation de ce voyage, jusqu&#39;à
                  acheter le visa, puis{' '}
                  <strong className="bleu">Mr Covid</strong> est passé par là,
                  mettant un stop à mon départ qui se rapprochait à vitesse
                  grand V.
                </p>
                <p className="texte">
                  Donc, une question s&#39;est posée,{' '}
                  <strong className="bleu">
                    &#34;Est-ce le moment de la reconversion ?&#34;
                  </strong>
                  <br />
                  Durant cette réflexion, je continue de travailler, je fais de
                  nouvelles rencontres, dont une qui m&#39;a motivé plus que
                  d&#39;autres, puis, c&#39;est parti, les recherches sur le{' '}
                  <strong className="bleu">développement web</strong> se
                  lancent, je participe à réunion, regarde des tutos, fait des
                  exercices en ligne, me renseigne sur les écoles pour
                  finalement en trouver une en 2021.
                </p>
                <p className="texte">
                  Ce souvenir resté dans un coin de ma tête, je le mets en
                  action aujourd&#39;hui et laisse place à une nouvelle
                  aventure, qui, j&#39;en suis persuadé, me permet et me
                  permettra de m&#39;épanouir pour les années futures.
                </p>
                <p className="texte">
                  Je rentre donc à la{' '}
                  <strong className="bleu">Wild Code School</strong> pour une
                  durée de 5 mois suivi d&#39;un stage pour continuer
                  l&#39;apprentissage de ce nouveau métier, en y apprenant
                  HTML5, CSS3, JavaScript, ReactJS et NodeJS. Différents projets
                  sont conçus pour mener à bien cette formation dont un projet
                  avec un vrai client.
                </p>
                <p className="texte">
                  <strong className="bleu">
                    Autonomie, travail d&#39;équipe, créativité, documentation,
                    organisation, écoute, sont de rigueur.
                  </strong>
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Carrousel />
    </div>
  );
};

export default Apropos;
