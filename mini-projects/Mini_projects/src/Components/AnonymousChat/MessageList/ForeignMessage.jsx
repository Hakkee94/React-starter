const ForeignMessage = ({message}) => {
    return (
        <div className='foreign-message'>
            <h3>{message.content}</h3>
        </div>
    );
};

export default ForeignMessage