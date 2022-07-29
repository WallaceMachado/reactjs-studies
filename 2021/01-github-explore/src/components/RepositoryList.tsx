import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

// repositoryList é pai de RepositoryItem e sendo assim pode passar uma propriedade um valor pelo props
// para utilizarmos js com html inserimos a {} e colocamos o codigo js dentro
// por padrão nomeamos um componente com letra maiscula e apenas um coponente por aquivo
export function RepositoryList(){
    const [repositories, setRepositories] = useState<Repository[]>([]);
    //<> generic -> <Repository> || <Repository[]> -> generic de listagem

    // primeiro é a função que será executada quando o estado da segundo for atendito
    // se o segundo parametro for um array vazio, a função só será carregada uma vez
    // se o segundo parametro não tiver preenchido , entrará em um loop infinito
   // atualizar o estado do segundo paramentro na função, entrar em loop infinito
    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);
    return (
        <section className="repository-list">
        <h1>Lista de Repositório</h1>
        <ul>
            {repositories.map(repository => {
                return <RepositoryItem key={repository.name} repository={repository} />
            })}
        </ul>
    </section>
    )
}