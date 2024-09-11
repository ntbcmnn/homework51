import './Number.css';

const Number = ({num}: { num: number }) => {
    return (
        <div className="number">
            {num}
        </div>
    );
};

export default Number;