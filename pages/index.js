function Home() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f4f8',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
    };

    const textStyle = {
        fontSize: '3rem',
        color: '#1e90ff',
        marginBottom: '20px',
        textShadow: '2px 2px 5px rgba(0,0,0,0.3)',
    };

    const imageStyle = {
        maxWidth: '80%',
        height: 'auto',
        borderRadius: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    };

    return (
        <div style={containerStyle}>
            <h1 style={textStyle}>Kevin, se já deu o cu, dá uma risadinha!</h1>
            <img 
                style={imageStyle} 
                src="https://i.ibb.co/74wymbq/kevin-nazista.jpg" 
                alt="Imagem carinhosa"
            />
        </div>
    );
}

export default Home;
