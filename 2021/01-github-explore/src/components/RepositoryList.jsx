import { RepositoryItem } from "./RepositoryItem"

const repository= {  
      name: 'unform',
      description: 'forms in react',
      html_url: 'https://github.com/unform/unform',
    
  }
// repositoryList é pai de RepositoryItem e sendo assim pode passar uma propriedade um valor pelo props
// para utilizarmos js com html inserimos a {} e colocamos o codigo js dentro
// por padrão nomeamos um componente com letra maiscula e apenas um coponente por aquivo
export function RepositoryList(){
    return (
        <section className="repository-list">
            <h1>Lista de repositorios</h1>

            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}