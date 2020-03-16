import { gql } from "apollo-boost";

const getBookQuery = gql`
{
    books{
        name
        id
    }
}`

const getAuthorQuery = gql`
{
    authors{
        name
        id
    }
}`

const addBookMutation = gql`
mutation($name:String!,$genre:String!,$authorId:ID!){
    addBook(name:$name,genre:$genre,authorId:$authorId){
        name
        id
    }
}
`
const getOneBookQuery = gql`
query($id:ID){
    book(id:$id){
        id
        name
        genre
        author{
            id
            name
            age
            books{
                name
                id
            }
        }
    }
}`


export {getAuthorQuery, getBookQuery, addBookMutation, getOneBookQuery};