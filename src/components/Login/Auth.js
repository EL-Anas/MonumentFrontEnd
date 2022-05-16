const Auth = async (email, password) => {
    const link = 'http://10.72.102.59:8080/auth?email='+encodeURIComponent(email)+'&password='+encodeURIComponent(password);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        //body: JSON.stringify({ email: email, password: password })
    };
    const token = await fetch(link,requestOptions).then(res => res.text())
    return token;
    

}
export default Auth;