const AuthNew = async (email, password,nom,prenom) => {
    const link = 'http://10.72.126.185:8080/newuser?email='+encodeURIComponent(email)+'&password='+encodeURIComponent(password)+'&nom='+encodeURIComponent(nom)+'&prenom='+encodeURIComponent(prenom);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        //body: JSON.stringify({ email: email, password: password })
    };
    const token = await fetch(link,requestOptions).then(res => res.text())
    return token;
    

}
export default AuthNew;