import PropTypes from 'prop-types';
import List from '../List/List';
import s from './ContactList.module.css'

const ContactList = ({ book, onDelete }) => {
    return (
        <ul className={s.phoneBook}>
            {book.map((book) => (
                <li key={book.id}>
                    <List data={book} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    book: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ContactList;