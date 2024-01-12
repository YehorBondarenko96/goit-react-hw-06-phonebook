import css from '../Styles.module.css';
import { ItemContact } from 'components/ItemContact/ItemContact';
import { getContacts } from '../../redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = ({updateStateForDelete}) => {
    const contacts = useSelector(getContacts);
    return(
        <ul className={css.listContacts}>
            {contacts.length !== 0 &&
            contacts.map((contact) => (
                <ItemContact 
                key={contact.id}
                contact={contact}
                updateStateForDelete={updateStateForDelete}
                />
            ))
            }
        </ul>
    )
}