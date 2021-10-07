export interface Repo {
    name: string,
    owner: ownerObject
  }
  
type ownerObject = {
    login: string;
}
