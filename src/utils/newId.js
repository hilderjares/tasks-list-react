const newId = () => {
    return Math.floor(Math.random() * 100) + (new Date().valueOf()) + (Math.random().toString(16).substr(2));
};

export default newId;