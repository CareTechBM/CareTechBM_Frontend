export const Label = ({ htmlFor, text, styles }) => {
    return (
        <div>
            <label className={"block text-black text-xl font-bold mb-2 "+ styles} htmlFor={htmlFor}>
                {text}
            </label>
        </div>
    )
};
