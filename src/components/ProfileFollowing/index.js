import {ProfileRelationsBoxWrapper} from '../ProfileRelations';

function ProfileFollowing(propriedades){

    return(
        <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
               {propriedades.title} ({propriedades.pessoas.length})
            </h2>
            <ul>
                {propriedades.pessoas.slice(0,6).map((itemAtual) =>{
                 //console.log(pessoasFavoritas)
                 return (
                    <li key={itemAtual.id}>
                       <a href={itemAtual.login}>
                          <img src={itemAtual.avatar_url}/>
                          <span>{itemAtual.login}</span>
                       </a>    
                    </li>    
                )
              })}    
            </ul>
            <a>Todas as pessoas</a>
        </ProfileRelationsBoxWrapper>
    )
}

export default ProfileFollowing