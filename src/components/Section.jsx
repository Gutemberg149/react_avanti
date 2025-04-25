import { ColorfulSpinner, LoadingText, SectionComponent } from "../styles/section-style.js";
import { FormComponent } from "./Form.jsx"; // Componente de procurar (input)
import ProfileCard from "./ProfileCard.jsx"; // Componente display do perfil
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

export default function NavComponent() {
  const [profile, setProfile] = useState(null); //Para guardado dados do github.
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tentativaSearch, setTentativaSearch] = useState(false); // Escutando se caso haja tentativa de procurar com o input vazio.

  const handleSearchResults = (results) => {
    setProfile(results.profile);
    setError(results.error);
    setLoading(results.loading);
    setTentativaSearch(results.tentativaSearch);
  };

  return (
    <SectionComponent>
      {/* Top section com componente de procura */}
      <div className="topsectionContainer">
        <div className="innerContainer01">
          <FaGithub className="icon" />

          <h1>
            Perfil <span>GitHub</span>
          </h1>
        </div>
        {/*Componente de procura com callback */}
        <FormComponent onSearchResults={handleSearchResults} />
      </div>

      {/* Bottom section para mostrar os resultados. */}
      <div className="bottomsectionContainer">
        {
          loading ? (
            <ColorfulSpinner>
              <LoadingText>LOADING...</LoadingText> {/* Animação do loading*/}
            </ColorfulSpinner>
          ) : error ? (
            <div className="Erro404">
              <h4>{error}</h4> {/* Mostrar mensagem de error*/}
            </div>
          ) : profile ? (
            <ProfileCard profile={profile} />
          ) : tentativaSearch ? (
            // Mensagem se o input de procura for vazio.
            <h4>Digite um usuário para buscar</h4>
          ) : null /* Default state vazio. */
        }
      </div>
    </SectionComponent>
  );
}
