import styled from "styled-components";

export const ProfileCardContainer = styled.div`
  background-color: #d9d9d9;
  width: 804px;
  height: 257px;
  border-radius: 10px;
  .profile-card {
    width: 804px;
    height: 257px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 60px 0 15px;
    img {
      width: 220px;
      height: 220px;
      border-radius: 50%;
      border: 2px solid #005cff;
    }
    .info_container {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      width: 448px;
      height: fit-content;
      h3 {
        font-size: 20px;
        color: #005cff;
        padding: 0;
        margin-bottom: 16px;
      }
      .textPerfil {
        font-size: 15px;
        color: #000000;

        .Profilebio {
          padding: 0;
          margin: 0;
        }
      }
    }
  }
`;
