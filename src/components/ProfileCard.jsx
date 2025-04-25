//Snipt para exibir a foto e as info do usuario do github.
import { ProfileCardContainer } from "../styles/profile-card.js";

export default function ProfileCard({ profile }) {
  return (
    <ProfileCardContainer>
      <div className="profile-card">
        <img src={profile.avatar_url} alt="Foto do usuário do github." />
        <div className="info_container">
          <h3>{profile.name || profile.login}</h3>
          <div className="textPerfil">{profile.bio ? <p className="Profilebio">{profile.bio}</p> : <p className="Profilebio">Perfil sem biografia.</p>}</div>
        </div>
      </div>
    </ProfileCardContainer>
  );
}
