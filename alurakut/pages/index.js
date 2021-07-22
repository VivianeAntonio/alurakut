import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';


function ProfileSidebar(propriedades) {
  console.log (propriedades);
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }}/>
    </Box>
    
  ) 
}

export default function Home() {
  const githubUser = 'VivianeAntonio';
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto' ,
    'peas' ,
    'rafaballerini' ,
    'marcobrunodev' ,
    'felipefialho'
    

  ]

  return (
    <>
    <AlurakutMenu />

  <MainGrid>
    <div className= "profileArea" style={{ gridArea: 'profileArea'}}>
    <ProfileSidebar githubUser= {githubUser}/>
    </div>


    <div className= "welcomeArea" style={{ gridArea: 'welcomeArea'}}>
    <Box>
    Bem vindo
    </Box>
    </div>
    
    <div className= "profileRelationsArea" style={{ gridArea: 'profileRelationsArea'}}>
    <Box>
    Pessoas da comunidade

    
    </Box>
    <Box>
    Comunidades
    </Box>
    </div>


  </MainGrid>

  </>
  )
}
