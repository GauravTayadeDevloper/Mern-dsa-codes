class UserAuth{
    #passWordHash = "";
    setPassWord(plain)
    {
        this.#passWordHash += plain.split("").reverse().join("");

    }
    checkPassword(plain)
    {
        const attemptHash = plain.split("").reverse().join("");
        if(this.#passWordHash === attemptHash)
        {
            return true;
        }
        else{
            return false
        }
    }
}

const u = new UserAuth();
u.setPassWord("hello");
console.log(u.checkPassword("hello"));
console.log(u.checkPassword("gtrgtr"))