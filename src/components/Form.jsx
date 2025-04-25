import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { fetchGitHubProfile } from "../services/api.js";
import { FormSearch, ButtonSubimt } from "../styles/form-style.js";

// Compoenete com props
export const FormComponent = ({ onSearchResults }) => {
  // State para o valor q sera procurado
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    // Olhar s eo input estar vazio.
    if (!searchQuery.trim()) {
      // Botificar s ecaso o imput extiver vazio.
      onSearchResults({
        error: "Por favor, digite um usuário",
        profile: null,
        loading: false,
        tentativasearch: true,
      });
      return;
    }

    // Inicialização do searcheResult.
    onSearchResults({
      loading: true,
      error: null,
      profile: null,
      tentativasearch: true,
    });

    try {
      const fullProfile = await fetchGitHubProfile(searchQuery);

      // Sucesso no fetch, mandando informações para o prop.
      onSearchResults({
        profile: fullProfile,
        error: null,
        loading: false,
        tentativasearch: true,
      });
      setSearchQuery("");
    } catch (error) {
      console.log(error);

      //Notificar o error.
      onSearchResults({
        profile: null,
        error: "Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente.",
        loading: false,
        tentativasearch: true,
      });
      setSearchQuery("");
    } finally {
      setSearchQuery("");
    }
  };

  return (
    <FormSearch onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Digite um usuário do Github"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />

      <ButtonSubimt type="submit" aria-label="Search GitHub profiles">
        <CiSearch className="btnIcon" />
      </ButtonSubimt>
    </FormSearch>
  );
};
