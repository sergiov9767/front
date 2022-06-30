const FetchHelper = async () => {
        const response = await fetch('http://127.0.0.1:8000/personas');
        const data = await response.json();
        return data;
    }
    

 
export default FetchHelper;

