//Sempre que eu pedir um tipo igual essa função ela precisa de um user que é do tipo User, mas o tipo user não quer dizer especificamente que precisa ser do tipo User, quer dizer que eu preciso de um objeto que cumpra as regras que esse tipo tem (username, password) como string.
type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = {username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
    return (
        user.username === sentValue.username && user.password === sentValue.password
    )
}

const bdUser = {username: 'Gustavo', password: '123456'};
const sentUser = {username: '@devgustavogantois_', password: '123456'};
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);

//Typescript só está preocupado com o conteúdo das interfaces ou dos tipos, ele não está preocupado com o nome do tipo.
