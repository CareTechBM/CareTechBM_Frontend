export const Label = ({ htmlFor, text }) => {
    return (
        <div>
            <label className={"block text-black text-xl font-bold mb-2"} htmlFor={htmlFor}>
                {text}
            </label>
        </div>
    )
};
